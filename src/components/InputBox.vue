<script lang="ts" setup>
const emit = defineEmits(['sendMsg'])

const msg = ref('It was a dark and stormy night...')

const textareaRef = ref<HTMLInputElement>()
function focus() {
  textareaRef.value?.focus()
}

function sendMsg() {
  console.log('send msg')
  emit('sendMsg', msg.value)
  msg.value = ''
}

defineExpose({
  focus,
  sendMsg,
})
</script>

<template>
  <div class="bg-stone-50 p-4 flex items-center">
    <textarea
      ref="textareaRef"
      v-model="msg"
      placeholder="type a message..."
      class="border border-purple-100  focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparen w-full h-20 p-2 rounded-lg " rows="2"
    />
    <div>
      <div
        class="ml-4 w-11 h-11 overflow-hidden rounded-full flex items-center justify-center cursor-pointer duration-75 select-none bg-purple-500 hover:bg-purple-600 active:bg-purple-400"
        @click="sendMsg()"
      >
        <!-- <svg t="1681806502104" class="icon w-7" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16278" width="128" height="128"><path d="M683.41351 851.872734c-6.478552 0-12.361539-3.89675-14.863523-9.92914L552.133557 561.38578l-405.592528 5.786797c-7.494695 0.150426-14.107299-5.002944-15.875572-12.310374-1.769296-7.30743 1.755993-14.864546 8.491395-18.205641l731.377406-362.851075c5.745864-2.850931 12.634762-2.018983 17.534352 2.117221 4.901637 4.13518 6.881734 10.785647 5.03876 16.928554l-194.271612 647.548162c-1.955538 6.520507-7.79964 11.104919-14.59951 11.450796C683.962002 851.865571 683.685709 851.872734 683.41351 851.872734zM562.819944 529.036002c6.499018 0 12.369725 3.9121 14.865569 9.928117l103.290481 248.925373L851.60821 219.133859 217.016127 533.968337l345.57255-4.930289C562.665425 529.036002 562.742173 529.036002 562.819944 529.036002z" fill="#fff" p-id="16279" /></svg> -->
        <svg
          t="1681809042825"
          class="icon w-6"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="29378"
          width="128"
          height="128"
        >
          <path
            d="M918.6 489.3L646.1 216.8c-12.3-12.3-32.5-12.3-44.8 0l-0.7 0.7c-12.3 12.3-12.3 32.4 0 44.7l218.7 218.7H257.6c-17.3 0-31.5 14.2-31.5 31.5s14.2 31.5 31.5 31.5h560.1L601.2 760.5c-12.5 12.5-12.5 32.9 0 45.4s32.9 12.5 45.4 0l271.1-271.1s0.1-0.1 0.2-0.1l0.7-0.7c12.3-12.3 12.3-32.4 0-44.7z"
            fill="#ffffff"
            p-id="29379"
          />
          <path
            d="M97.6 512.6a31.8 31.7 0 1 0 63.6 0 31.8 31.7 0 1 0-63.6 0Z"
            fill="#ffffff"
            p-id="29380"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style  scoped>
textarea {
  resize: none;
}
</style>
