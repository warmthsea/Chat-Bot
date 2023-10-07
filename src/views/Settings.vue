<script lang="ts" setup>
import { ipcRenderer } from 'electron'
import { testAddPersonsApi, testApi, testGetPersonsApi } from '~/api/test'

async function test() {
  console.log(ipcRenderer)
  testApi().then((res) => {
    console.log(res)
  })
}

const list = ref<any[]>([])

function add() {
  testAddPersonsApi({
    name: '小明5',
    age: 18,
    gender: '女',
  })
}

testGetPersonsApi().then((res) => {
  console.log(res.data)
})
</script>

<template>
  <div class="pt-4">
    <button class="btn">
      test server
    </button>

    <button class="btn" @click="test()">
      test mini tray
    </button>

    <button class="btn" @click="add()">
      test add
    </button>
  </div>
</template>

<style lang="scss" scoped>
button{
  margin-right: 15px;
}
</style>
