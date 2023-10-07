import { rmSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import pkg from './package.json'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  rmSync('dist-electron', { recursive: true, force: true })

  const isServe = command === 'serve'
  const isBuild = command === 'build'
  const sourcemap = isServe || !!process.env.VSCODE_DEBUG

  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    plugins: [
      vue(),
      electron([
        {
          // Main-Process entry file of the Electron App.
          entry: 'electron/main/index.ts',
          onstart(options) {
            if (process.env.VSCODE_DEBUG) {
              console.log(/* For `.vscode/.debug.script.mjs` */ '[startup] Electron App')
            } else {
              options.startup()
            }
          },
          vite: {
            build: {
              sourcemap,
              minify: isBuild,
              outDir: 'dist-electron/main',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.devDependencies : {})
              }
            }
          }
        },
        {
          entry: 'electron/preload/index.ts',
          onstart(options) {
            // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
            // instead of restarting the entire Electron App.
            options.reload()
          },
          vite: {
            build: {
              sourcemap: sourcemap ? 'inline' : undefined, // #332
              minify: isBuild,
              outDir: 'dist-electron/preload',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.devDependencies : {})
              }
            }
          }
        }
      ]),
      // Use Node.js API in the Renderer-process
      renderer(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/core'],
        dts: true,
        dirs: ['./src/composables'],
        vueTemplate: true,
        resolvers: []
      }),

      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true,
        dirs: ['./src/components'],
        resolvers: []
      })
    ],
    server:
      process.env.VSCODE_DEBUG ?
      (() => {
        const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
        return {
          host: url.hostname,
          port: +url.port
        }
      })():{
        proxy: {
          '/test': {
            target: 'http://127.0.0.1:1000',
            ws: true,
            changeOrigin: true,
            rewrite: path => path.replace(/^\/test/, ''),
          },
          '/openai':{
            target:'https://api.openai.com',
            ws:true,
            changeOrigin: true,
            rewrite: path => path.replace(/^\/test/, ''),
          }
        },
      },
    clearScreen: false
  }
})
