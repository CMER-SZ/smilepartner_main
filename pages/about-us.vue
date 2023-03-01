<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import form from '../composables/newform/form.vue'
import environmentVue from '~~/composables/environment/environment.vue'
import 'swiper/css'
import type { Ref } from 'vue'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SwiperClass, {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  Thumbs,
} from 'swiper'
import 'swiper/css/pagination' // 轮播图底面的小圆点
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/navigation'
const modules = [Autoplay, Pagination, Navigation, Scrollbar, Thumbs]
const thumbsSwiper = ref<SwiperClass>()
const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper
}
onMounted(() => {
  console.log('312')

  setTop()
})
const setTop = () => {
  let s = document.documentElement.scrollTop
  // 定时器 每10ms执行一次
  let timer = window.setInterval(function () {
    // 每次走50
    s -= 50
    //  到顶部后清除定时器  必须清定时器  不然就死循环了
    if (s < 0) {
      window.clearInterval(timer)
    }
    window.scrollTo(0, s)
  }, 10)
}
const swiperOption = {
  // 显示分页
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 允许分页点击跳转
  },
  // 设置点击箭头
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
const swiperOptionRew = {
  // 显示分页
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 允许分页点击跳转
  },
  // 设置点击箭头
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
const tableswiperOption = {
  slidesPerView: '1.1',
  // 显示分页
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 允许分页点击跳转
  },
  // 设置点击箭头
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
// composable
const { t } = useLang()
let currentIndex = reactive({
  Index: 0,
})
// let currentIndex:number =ww
function titelclick(index) {
  currentIndex.Index = index
  // console.log(this.currentIndex);
}
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.contact.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.contact.description'),
    },
  ],
}))
let bigimgsrc = reactive([
  'https://static.cmereye.com/imgs/2022/11/4470dc6cbeede80f.jpg',
  'https://static.cmereye.com/imgs/2022/11/9b3e381f7d2d3ca4.jpg',
  'https://static.cmereye.com/imgs/2022/11/516557a11c87b513.jpg',
])
let imgsrc = reactive([
  'https://static.cmereye.com/imgs/2022/11/f743d8dbbdf29778.jpg',
  'https://static.cmereye.com/imgs/2022/11/d822c1644e615863.jpg',
  'https://static.cmereye.com/imgs/2022/11/ef651d3ee55bc6b7.jpg',
])
let bigimgsrc2 = reactive([
  'https://static.cmereye.com/imgs/2022/11/eb3fd5b84863b0b6.jpg',
  'https://static.cmereye.com/imgs/2022/11/3291fce5d036fa37.jpg',
  'https://static.cmereye.com/imgs/2022/11/1b8d3a6d24f6f372.jpg',
])
let imgsrc2 = reactive([
  'https://static.cmereye.com/imgs/2022/11/ac292df57993961d.jpg',
  'https://static.cmereye.com/imgs/2022/11/89d022005e8b03e6.jpg',
  'https://static.cmereye.com/imgs/2022/11/d4e4b782e854920e.jpg',
])
let title = reactive(['中環中建大廈', '尖沙咀K11 ATELIER'])
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
  <div>
    <div class="mbShow">
      <slot name="header">
        <PageNavbar />
      </slot>
    </div>
    <div class="page_body_header z-0">
      <div class="page_body_header_banner">
        <img
          class="page_body_header_banner_img sm:invisible"
          src="https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/Group%20329.avif"
          srcset="
            https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/mb_banner.avif   400w,
            https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/mb_banner.avif   640w,
            https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/Group%20329.avif
          "
        />
        <div class="page_body_header_fixed">
          <div class="head_booking inline-block float-right text-center">
            <a :href="$t('banners.booking')" target="_blank" class="head_button"
              ><p class="md:pt-1 text-primary">
                {{ $t('banners.invisalign_text') }}
              </p>
              <span class="text-green md:text-3xl sm:ml-3">
                {{ $t('banners.number') }}
              </span>
            </a>
            <span class="mt-1 xinyongka">指定信用卡可享免息分期</span>
          </div>

          <div class="head_banner_text justify-self-center">
            <div class="head_banner_text_p">
              <div class="head_banner_img" style="display: block">
                <p>品牌理念</p>
                <img
                  class="m-auto"
                  src="https://static.cmereye.com/imgs/2023/02/ea164351133d8da1.png"
                  alt=""
                />
              </div>

              <div
                class="text-center mbShow"
                style="
                  margin-top: 47vw;
                  display: flex;
                  flex-direction: column;
                  display: none;
                "
              >
                <a
                  :href="$t('banners.booking')"
                  target="_blank"
                  class="head_button"
                  ><p
                    class="pt-1 text-primary"
                    style="position: unset; padding: 0"
                  >
                    {{ $t('banners.invisalign_text') }}
                  </p>
                  <span class="text-green text-2xl ml-5">
                    {{ $t('banners.number') }}
                  </span>
                </a>
                <span class="pt-4 xinyongka">指定信用卡可享免息分期</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pcShow">
      <slot name="header">
        <PageNavbar />
      </slot>
    </div>

    <!-- sm:py-38 -->
    <div class="page_orthodontic md:pb-20 sm:pt-48">
      <div class="">
        <div
          class="orthodontic_title page_container text-left text-center sm:mb-0 sm:mt-38"
          style="
            text-align: center !important;
            padding: 0 !important;
            margin: 0 auto;
          "
        >
          <h2
            class="text-primary font-normal text-lg md:text-2xl inline-block relative"
          >
            中心背景
          </h2>
        </div>
        <div class="bc_ground">
          <div class="page_container mb_container">
            <div class="ouervalue">
              <img
                src="https://static.cmereye.com/imgs/2023/02/0febbacbd11aee36.png"
                srcset="
                  https://static.cmereye.com/imgs/2023/02/b2673a4e84730cbd.jpg 400w,
                  https://static.cmereye.com/imgs/2023/02/b2673a4e84730cbd.jpg 640w,
                  https://static.cmereye.com/imgs/2023/02/0febbacbd11aee36.png
                "
                alt=""
              />
              <div class="img-text">
                <img
                  src="https://static.cmereye.com/imgs/2023/02/9d25cd9dc0fe1a2e.png"
                  alt=""
                />
              </div>
              <p>
                <span class="text_pink">希瑪微笑矯齒</span> 屬 <br />
                <span class="text_green"
                  >香港希瑪眼科醫療控股有限公司<br class="mbShow" /></span
                >（股份代號：3309）<br />
                旗下的牙齒美容品牌，設有中環及尖沙咀分店。
              </p>
            </div>
          </div>
          <div
            class="orthodontic_title page_container text-left text-center sm:mb-0 sm:mt-38"
            style="
              text-align: center !important;
              padding: 0 !important;
              margin: 0 auto;
            "
          >
            <h2
              class="text-primary font-normal text-lg md:text-2xl inline-block relative md:my-30"
            >
              我們的理念
            </h2>
          </div>
          <div>
            <div class="page_container ouervalue_contain mb_container">
              <div class="box">
                <div class="left">
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/725485595ff6c2c9.png"
                    alt=""
                  />
                </div>

                <div class="our_text">
                  <div class="flex">
                    <div class="our"><span>我們</span></div>
                    <div class="xin mt-1"><span>深信</span></div>
                  </div>

                  <p>
                    牙齒的
                    <span class="text_green">整齊度、亮白度、協調度，</span
                    ><br />
                    是你展現專屬完美自信笑容的關鍵。<br />
                    為了確保療程能<span class="text_pink">如拼圖一樣，</span
                    ><br />
                    <span class="text_green"
                      >完美精細貼合你的情況及追求，且安全高效。</span
                    >
                  </p>
                </div>
                <img
                  class="mbShow"
                  src="https://static.cmereye.com/imgs/2023/02/77b59cf05fec078d.jpg"
                  alt=""
                />
                <div class="our_text_two">
                  <div class="flex">
                    <div class="our"><span>我們</span></div>
                    <div class="xin mt-1"><span>堅持</span></div>
                  </div>

                  <p>
                    提供<span class="text_green">多元化牙齒美容療程，</span
                    ><br />
                    如隱形牙箍、即日瓷貼片、牙齒美白<br />
                    同時所有服務均<span class="text_green"
                      >由註冊牙科醫生主理，</span
                    ><br />
                    <span class="text_pink"
                      >讓我們伴你用燦爛笑容享受生活的每一個瞬間。</span
                    >
                  </p>
                </div>
                <div class="right">
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/88ee121fb83bcf53.png"
                    alt=""
                  />
                </div>
              </div>
              <img
                class="pcShow"
                src="https://static.cmereye.com/imgs/2023/02/77b59cf05fec078d.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="orthodontic_form_background md:mb-0 mb-10" id="yyform">
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
                <div class="px-4 py-5 sm:p-6 max-w-5xl form_width">
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
                <div class="px-4 sm:mt-12 text-center sm:px-6 mt-2">
                  <button
                    type="submit"
                    class="inline-flex justify-center border text-pink py-2 px-30 text-xl font-medium bg-white border-gray-300 hover:bg-pink hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 submitBut"
                  >
                    提 交
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <component :is="environmentVue"></component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text_pink {
  color: #ecb3ac;
  font-size: 18px;
}
.text_green {
  color: #aace79;
  font-size: 18px;
}
.orthodontic_form_background {
  /* Pink Light */
  background: #fcf4f2;
}
.orthodontic_faq .flex .orthodontic_title {
  width: 64px;
  margin-right: 140px;
}
.orthodontic_faq .flex .orthodontic_title h2 {
  writing-mode: vertical-lr;
  padding-left: 20px;
  padding-top: 20px;
  line-height: 30px;
  letter-spacing: 0.2em;
}
.orthodontic_faq .flex .orthodontic_title h2::before {
  left: 0;
  top: -50px;
  transform: rotateY(180deg);
}
.orthodontic_faq_list .py-6 {
  position: relative;
  z-index: 2;
  margin-top: -1px;
  transition: all 0.3s ease-in-out;
}
.orthodontic_faq_list .py-6:hover {
  border-color: #ecb3ac;
  z-index: 3;
}
.orthodontic_faq_list .py-6:hover span {
  color: #ecb3ac;
}
.orthodontic_faq_list .border-pink,
.orthodontic_faq_list .py-6:hover {
  z-index: 3;
  padding-left: 64px;
}
.orthodontic_faq_list .py-6::before {
  width: 0;
  height: 30px;
  transition: all 0.3s ease-in;
  left: 0;
  position: absolute;
  content: '';
  margin-top: 18px;
  left: 25px;
  background-image: url(https://img.cmereye.com/i/2022/09/26/6331a9659c644.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.orthodontic_faq_list .border-pink::before,
.orthodontic_faq_list .py-6:hover::before {
  width: 30px;
  height: 30px;
  left: 0;
  position: absolute;
  content: '';
  margin-top: 18px;
  left: 25px;
  background-image: url(https://img.cmereye.com/i/2022/09/26/6331a9659c644.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.orthodontic_faq {
  background-image: url(https://static.cmereye.com/imgs/2022/11/01c7296cbb10b60b.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

// tailwind base
@tailwind base;
@tailwind components;
@tailwind utilities;
// tailwind
@layer base {
  .orthodontic_pic .text-center {
    @apply transition duration-500  ease-in-out transform  hover:scale-105;
  }
}

.orthodontic_pic .text-center {
  position: relative;
}
.orthodontic_pic .text-center::before {
  position: absolute;
  content: '';
  width: 165px;
  height: 55px;
  background-color: #ecb3ac;
  left: 0;
  right: 0;
  margin: auto;
  top: -10px;
  -webkit-clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    55% 75%,
    50% 100%,
    45% 76%,
    0% 75%
  );
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    55% 75%,
    50% 100%,
    45% 75%,
    0% 75%
  );
}
.orthodontic_pic .text-center::after {
  position: absolute;
  color: #fff;
  top: 0px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99;
}

.orthodontic_pic {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.orthodontic_pic > div {
  width: calc((100% - 0px) / 3);
  margin-bottom: 70px;
}
.orthodontic_pic > div img {
  margin: auto;
  max-width: 90%;
}
.orthodontic_condition {
  background-image: url(https://img.cmereye.com/i/2022/09/26/6331701920fdd.jpg);
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
}
.page_orthodontic {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.page_orthodontic .flex_between_items_start h4 {
  position: relative;
}
.page_orthodontic .flex_between_items_start h4::before {
  position: absolute;
  content: '';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px; /* pink */
  color: #ecb3ac;
  left: -3px;
  margin-top: 2px;
  font-family: 'initial';
}
// .page_orthodontic  .flex_between_items_start .sticky_step:nth-child(1) h4::before{content: 'Step 1';}
// .page_orthodontic  .flex_between_items_start .sticky_step:nth-child(2) h4::before{content: 'Step 2';}
// .page_orthodontic  .flex_between_items_start .sticky_step:nth-child(3) h4::before{content: 'Step 3';}

.orthodontic_compete .page_container {
  position: relative;
}
.orthodontic_compete2 .page_container {
  position: relative;
}
.head_banner_img {
  display: flex !important;
  flex-direction: column;
  align-items: flex-end;
  img {
    max-width: 90% !important;
  }
  p {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 49px;
    /* identical to box height */

    letter-spacing: 0.2em;

    color: #666666;
  }
}

@media screen and(min-width:768px) {
  .our_text {
    display: flex;
    flex-direction: column;
    padding: 20px 0 20px 53px;
    p {
      padding-top: 23px;
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;

      color: #666666;
    }
    .our {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 42px;

      /* light grey */

      color: #cdcdcd;
    }
    .xin {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 56px;

      /* pink */

      color: #ecb3ac;
    }
  }
  .our_text_two {
    display: flex;
    flex-direction: column;
    padding: 20px 0 20px 132px;
    p {
      padding-top: 23px;
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;

      color: #666666;
    }
    .our {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 42px;

      /* light grey */

      color: #cdcdcd;
    }
    .xin {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 56px;

      /* pink */

      color: #ecb3ac;
    }
  }
  .ouervalue_contain {
    display: flex;
    flex-direction: row;
    padding-bottom: 97px;
    .box {
      position: relative;
      flex: 1;

      .right {
        position: absolute;
        bottom: 0;
        right: 60px;
      }
    }
  }
  .ouervalue {
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 80px;
    .img-text {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      top: 34%;
    }
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      color: #666666;
      white-space: pre;
    }
  }

  .bc_ground {
    background: url('https://static.cmereye.com/imgs/2023/02/d68c1639937db0a4.png')
      no-repeat;
    background-size: 100% 100%;
  }
  .page_orthodontic .orthodontic_title h2::before {
    right: 0;
    left: -118px !important;
  }
  .step_title {
    margin: 0;
  }

  ::v-deep .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  .orthodontic_form_background {
    /* Pink Light */
    background: #fcf4f2;
  }

  .page_body_header {
    background-image: url(https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/AboutUs_banner.avif);
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: fixed;
    width: 100%;
  }
  .page_body_header_banner {
    background-position: top;
    background-attachment: fixed;
    width: 100%;
    .page_body_header_fixed {
      padding: 70px 130px;
      position: fixed;
      width: 100%;
      height: 35vw;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    .head_booking {
      font-family: 'Songti TC';
    }
    .head_banner_text {
      position: relative;
      z-index: -5;
      width: 50%;
      float: right;
      height: 87%;
      justify-self: center;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      .head_banner_text_p {
        position: absolute;
        z-index: -20;
        left: 0;
        max-width: 720px;
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 35px; /* or 194% */
        color: #666666;
        margin-top: 24px;
      }
    }
  }
}
@media screen and(max-width:768px) {
  .left {
    position: absolute;
    left: 20px;
  }
  .our_text_two {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 35px 53px !important;
  }
  .orthodontic_title {
    margin-top: 14vw !important;
  }
  .mb_container {
    padding: 0;
    img {
      width: 100%;
    }
    .img-text {
      padding: 0 15px;
    }
  }

  .page_orthodontic .orthodontic_title h2::before {
    right: 0;
    left: -22vw !important;
  }
  .our_text {
    display: flex;
    flex-direction: column;
    padding: 40px 20px 20px 53px;
    p {
      padding-top: 23px;
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;

      color: #666666;
    }
    .our {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 42px;

      /* light grey */

      color: #cdcdcd;
    }
    .xin {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 56px;

      /* pink */

      color: #ecb3ac;
    }
  }
  .our_text_two {
    display: flex;
    flex-direction: column;
    padding: 20px 0 20px 132px;
    p {
      padding-top: 23px;
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;

      color: #666666;
    }
    .our {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 42px;

      /* light grey */

      color: #cdcdcd;
    }
    .xin {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 56px;

      /* pink */

      color: #ecb3ac;
    }
  }
  .ouervalue_contain {
    display: flex;
    flex-direction: row;
    padding-bottom: 97px;
    .box {
      position: relative;
      flex: 1;

      margin-top: 53px;

      .right {
        position: absolute;
        bottom: 0;
        right: 60px;
      }
    }
  }
  .ouervalue {
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 80px;
    flex-direction: column-reverse;
    .img-text {
      position: absolute;

      bottom: 0;
      top: 8%;
    }
    p {
      padding-bottom: 29px;
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      color: #666666;
      white-space: pre;
      text-align: center;
    }
  }

  .tel-num {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
  .page_body_header_banner {
    height: 135vw;
    .page_body_header_banner_img {
      margin-top: -33px !important;
    }
  }

  .orthodontic_box img {
    max-width: 20vw;
  }
  .orthodontic_title .six_pro::after {
    position: absolute;
    left: -40px;
    right: 0;
    top: 76px;
    width: 90vw;
    content: '';
    height: 1px;
    background: #666666;
  }
  .orthodontic_box > div {
    width: calc((100% - 0px) / 2);
    margin-bottom: 2vw;
    display: flex;
    align-items: center;
    width: auto;
  }
  .continue_box {
    h4 {
      padding-left: 13vw;
    }
    p {
      padding-left: 13vw;
    }
  }
  .page_body_header_banne {
    padding-bottom: 96px;
  }
  .orthodontic_title {
    padding-left: 12vw;
    text-align: inherit;

    h2 {
      padding-left: 0vw;
    }
  }
  .orthodontic_step .flex_between_items_start div {
    padding-left: 0;
  }
  .orthodontic_compete .swiper-slide {
    padding-bottom: 28px;
  }

  .page_body_header_banner .head_banner_text {
    display: flex;
    justify-content: center;
    margin-top: 111%;
    p {
      position: inherit;
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 35px;
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #666666;
    }
  }
  .page_body_header_banner {
    padding-bottom: 0px;
  }

  @tailwind base
@tailwind base;
  @tailwind components;
  @tailwind utilities;
  // tailwind
  @layer base {
    .orthodontic_pic .text-center {
      @apply transition duration-500  ease-in-out transform  hover:scale-105;
    }
  }

  .orthodontic_pic .text-center {
    position: relative;
  }
  .orthodontic_pic .text-center::before {
    position: absolute;
    content: '';
    width: 165px;
    height: 55px;
    background-color: #ecb3ac;
    left: 0;
    right: 0;
    margin: auto;
    top: -10px;
    -webkit-clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      55% 75%,
      50% 100%,
      45% 76%,
      0% 75%
    );
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      55% 75%,
      50% 100%,
      45% 75%,
      0% 75%
    );
  }
  .orthodontic_pic .text-center::after {
    position: absolute;
    color: #fff;
    top: 0px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 99;
  }

  .orthodontic_pic {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .orthodontic_pic > div {
    width: calc((100% - 0px) / 3);
    margin-bottom: 70px;
  }
  .orthodontic_pic > div img {
    margin: auto;
  }
}
@media (min-width: 1400px) and (max-width: 1600px) {
  .page_body_header_banner {
    background-size: 100% !important;
  }
  .page_body_header_banner .head_banner_text {
    z-index: -5;
    width: 50%;
    float: right;
    height: 87%;
    justify-self: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 117px;
    top: 87px;
  }
}
@media only screen and (max-width: 1440px) and (min-width: 800px) {
  .page_body_header_banner {
    background-size: 78% !important;
  }
  .page_body_header_banner .head_banner_text {
    right: 166px !important;
    height: 75% !important;
    width: 39% !important;
  }
  .page_body_header_banner .head_banner_text .head_banner_text_p {
    font-size: 14px;
  }
  .page_body_header_banner .head_banner_text .head_banner_text_p p {
    padding: 0 !important;
  }
}
</style>
