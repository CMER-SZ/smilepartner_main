<script setup lang="ts">
import 'swiper/css'

const props = defineProps({
  smilepartner_from: {
    type: String,
    default: '',
  },
})
const smilepartner_from = toRef(props, 'smilepartner_from')
// console.log('smilepartner_from',smilepartner_from.value);

let reForm = reactive({
  smilepartnerName: '',
  sex: '',
  Tel: '',
  Email: '',
  smilepartner_select:
    '經系統分析,該表單來自隱適美 ‧ 易頁面,来源地址：https://smilepartner.hk/invisalign',
})

const checkForm = (e) => {
  if (
    reForm.smilepartnerName === '' ||
    reForm.sex === '' ||
    reForm.Tel === '' ||
    reForm.Email === ''
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
  // reForm.smilepartner_select = ''
}
</script>

<template>
  <div class="orthodontic_form_background" id="yyform">
    <div class="orthodontic_form page_container py-20">
      <p
        class="text-center text-lg text-primary font-normal tracking-widest-2x"
      >
        填寫你的資料，
      </p>
      <h4
        class="text-center text-xl text-pink font-normal tracking-widest-2x mb-4 sm:mb-12"
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
          <div class="py-5 max-w-3xl px-20 form_width">
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

              <div class="col-span-6 sm:col-span-3">
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

              <div class="col-span-6 sm:col-span-3">
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

              <div class="col-span-6 sm:col-span-3">
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

              <div
                class="col-span-6 sm:col-span-6 form_selcet_service"
                style="display: none"
              >
                <input
                  type="text"
                  name="smilepartner_select"
                  v-model="smilepartner_from"
                />
              </div>
            </div>
          </div>
          <div class="px-4 sm:mt-12 text-center sm:px-6 mt-2">
            <button
              type="submit"
              class="inline-flex justify-center border text-pink py-3 px-30 text-xl font-medium bg-white border-gray-300 hover:bg-pink hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 submitBut"
            >
              提 交
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.orthodontic_form_background {
  /* Pink Light */
  background: #fcf4f2;
}
@media screen and (min-width: 768px) {
  .form_width {
    padding: 20px 130px;
  }
}
</style>
