<script setup lang="ts">
import 'swiper/css'

let reForm = reactive({
  smilepartnerName: '',
  sex: '',
  Tel: '',
  Email: '',
  smilepartner_select: '',
})

const checkForm = (e) => {
  if (
    reForm.smilepartnerName === '' ||
    reForm.sex === '' ||
    reForm.Tel === '' ||
    reForm.Email === '' ||
    reForm.smilepartner_select === ''
  ) {
    alert('請完善信息！')
    e.preventDefault()
  } else {
    alert('提交成功！')
    setTimeout(() => {
      clearInfo()
    }, 500)
    return true
  }
}
const clearInfo = () => {
  reForm.smilepartnerName = ''
  reForm.sex = ''
  reForm.Tel = ''
  reForm.Email = ''
  reForm.smilepartner_select = ''
}
</script>

<template>
  <div class="orthodontic_form page_container py-20" id="yyform">
    <p class="text-center text-lg text-primary font-normal tracking-widest-2x">
      填寫你的資料，
    </p>
    <h4
      class="text-center text-xl text-pink font-normal tracking-widest-2x mb-4 sm:mb-20"
    >
      展開專屬牙齒美容旅程！
    </h4>
    <iframe id="my" name="my" style="display: none"></iframe>
    <form
      action="https://send.pageclip.co/oLDloEgenkRMGb9ZYDIO4wlarrwjxsBu/SmilepartnerForm"
      method="POST"
      @submit="checkForm"
      target="my"
    >
      <div class="overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 sm:p-6 max-w-5xl">
          <div class="grid grid-cols-6 gap-10">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first-name"
                class="block text-md font-medium text-gray-700"
                >姓名：</label
              >
              <input
                type="text"
                name="smilepartner_name"
                v-model="reForm.smilepartnerName"
                id="first-name"
                autocomplete="off"
                class="h-8 pl-2 mt-1 block w-full border-gray-300 border-1 sm:text-sm text-primary"
              />
            </div>

            <div class="col-span-6 sm:col-span-3 sm:pl-20">
              <label
                for="last-name"
                class="block text-md font-medium text-gray-700"
                >稱呼：</label
              >
              <div class="mt-2 justify-start flex">
                <div class="flex items-center">
                  <input
                    id="push-everything"
                    data-name="man"
                    name="sex"
                    v-model="reForm.sex"
                    value="先生"
                    type="radio"
                    class="h-4 w-4 border-gray-300 border-1 text-green focus:ring-green focus:outline-none"
                  />
                  <label
                    for="push-everything"
                    class="ml-3 block text-md font-medium text-gray-700"
                    >先生</label
                  >
                </div>
                <div class="flex items-center ml-4">
                  <input
                    id="push-email"
                    data-name="lady"
                    name="sex"
                    v-model="reForm.sex"
                    value="女士"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-green focus:ring-green focus:outline-none"
                  />
                  <label
                    for="push-email"
                    class="ml-3 block text-md font-medium text-gray-700"
                    >女士</label
                  >
                </div>
                <div class="flex items-center ml-4">
                  <input
                    id="push-nothing"
                    data-name="miss"
                    name="sex"
                    v-model="reForm.sex"
                    value="小姐"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-green focus:ring-green focus:outline-none"
                  />
                  <label
                    for="push-nothing"
                    class="ml-3 block text-md font-medium text-gray-700"
                    >小姐</label
                  >
                </div>
              </div>
            </div>

            <div class="col-span-6 sm:col-span-6">
              <label
                for="email-address"
                class="block text-md font-medium text-gray-700"
                >電話號碼：</label
              >
              <input
                type="text"
                name="Tel"
                v-model="reForm.Tel"
                id="tel"
                autocomplete="off"
                class="h-8 pl-2 mt-1 block w-full border-gray-300 border-1 text-primary sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-6">
              <label
                for="email-address"
                class="block text-md font-medium text-gray-700"
                >電郵地址：</label
              >
              <input
                type="text"
                name="Email"
                v-model="reForm.Email"
                id="email-address"
                autocomplete="off"
                class="h-8 pl-2 mt-1 block w-full border-gray-300 border-1 text-primary sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-6 form_selcet_service">
              <label
                for="service"
                class="block text-md font-medium text-gray-700 mb-6 sm:mb-0"
                >服務選擇：</label
              >
              <div class="mt-2 justify-start flex flex-wrap">
                <div class="flex items-center">
                  <input
                    id="push-Invisalign"
                    name="smilepartner_select"
                    v-model="reForm.smilepartner_select"
                    type="radio"
                    value="隱形牙箍全方位矯齒"
                    class="h-4 w-4 border-gray-300 border-1 text-indigo-100 focus:ring-indigo-100"
                  />
                  <label
                    for="push-Invisalign"
                    class="ml-3 block text-md font-medium text-gray-700"
                    >隱形牙箍<br class="mbShow" />全方位矯齒
                  </label>
                </div>
                <div class="flex items-center ml-6">
                  <input
                    id="push-Go"
                    name="smilepartner_select"
                    v-model="reForm.smilepartner_select"
                    type="radio"
                    value="隱形牙箍簡易版"
                    class="h-4 w-4 border-gray-300 text-green focus:ring-green focus:outline-none"
                  />
                  <label
                    for="push-Go"
                    class="ml-3 block text-md font-medium text-gray-700"
                    >隱形牙箍<br class="mbShow" />簡易版
                  </label>
                </div>
                <div class="flex items-center ml-6">
                  <input
                    id="push-First"
                    name="smilepartner_select"
                    v-model="reForm.smilepartner_select"
                    type="radio"
                    value="隱形牙箍兒童專線"
                    class="h-4 w-4 border-gray-300 text-green focus:ring-green focus:outline-none"
                  />
                  <label
                    for="push-First"
                    class="ml-3 block text-md font-medium text-gray-700"
                    >隱形牙箍<br class="mbShow" />兒童專線</label
                  >
                </div>
                <div class="flex items-center ml-6">
                  <input
                    id="push-notific2ations"
                    name="smilepartner_select"
                    v-model="reForm.smilepartner_select"
                    type="radio"
                    value="牙齒美白"
                    class="h-4 w-4 border-gray-300 text-green focus:ring-green focus:outline-none"
                  />
                  <label
                    for="push-notific2ations"
                    class="ml-3 block text-md font-medium text-gray-700"
                  >
                    牙齒美白</label
                  >
                </div>
                <div class="flex items-center ml-6">
                  <input
                    id="push-notific3ations"
                    name="smilepartner_select"
                    v-model="reForm.smilepartner_select"
                    type="radio"
                    value="瓷貼片"
                    class="h-4 w-4 border-gray-300 text-green focus:ring-green focus:outline-none"
                  />
                  <label
                    for="push-notific3ations"
                    class="ml-3 block text-md font-medium text-gray-700"
                  >
                    瓷貼片</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 sm:mt-20 text-center sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center border text-pink py-2 px-30 text-xl font-medium border-gray-300 hover:bg-pink hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 submitBut"
          >
            提 交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@media screen and(min-width:768px) {
  .mbShow {
    display: none !important;
  }
}
</style>
