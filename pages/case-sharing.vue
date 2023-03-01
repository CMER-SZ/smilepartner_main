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
            https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/Group%20322.avif 400w,
            https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/Group%20322.avif 640w,
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
                <p>個案分享</p>
                <img
                  class="m-auto"
                  src="https://static.cmereye.com/imgs/2023/02/f7e516891a98ed6c.png"
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
      <div class="sharing">
        <div class="share-box">
          <div class="page_container flex flex-col items-center weShare">
            <!-- <div class=" anli-photo"> -->

            <div class="share-video-box">
              <div class="iframe">
                <iframe
                  class="pcShow"
                  width="695"
                  height="391.68"
                  src="https://www.youtube.com/embed/ljaszj7v-rM"
                  title="#我希望我嘅牙齒變得… | Invisalign 隱適美 | 個案分享 X 陽光型男Model 賀邦Bron👦🏻"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  class="mbShow"
                  width="335"
                  height="188.79"
                  src="https://www.youtube.com/embed/ljaszj7v-rM"
                  title="【#我希望我嘅牙齒變得… | Invisalign 隱適美 | 個案分享 X 陽光型男Model 賀邦Bron👦🏻"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="share-detail-box share-top">
                <div class="name">
                  <p class="myname">賀邦 Bron</p>
                  <p class="pro">隱適美全方位矯齒療程</p>
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/86a836934d935861.png"
                    alt=""
                    class="img-start"
                  />
                  <p>
                    度身訂造、較美觀、<br class="mbShow" />
                    唔影響做運動
                  </p>
                  <span
                    >補完牙之後，原先舊的牙箍就會唔啱位，牙醫都會重新同我配一批新的牙箍，真係度身訂造，貼合返補了門牙的牙齒。</span
                  >
                  <div class="end">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/4a2c9fbebd4ccca9.png"
                      alt=""
                      class="img-end"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="share-person-box">
              <div style="position: relative" class="shares">
                <div class="share-head-person">
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/3907cc819044ca9e.png"
                    alt=""
                  />
                </div>

                <div class="share-detail-box">
                  <div class="name">
                    <p class="myname">陳瀅 Jeannie</p>
                    <p class="pro">牙齒美白療程</p>
                  </div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/86a836934d935861.png"
                    alt=""
                    class="img-start"
                  />
                  <p>笑容更亮白完美</p>
                  <span>Thank you for my perfect white smile. </span>
                  <div class="end">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/4a2c9fbebd4ccca9.png"
                      alt=""
                      class="img-end"
                    />
                  </div>
                </div>
              </div>

              <div style="position: relative" class="shares">
                <div class="share-head-person">
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/33cef2aadee2b3c0.png"
                    alt=""
                  />
                </div>

                <div class="share-detail-box">
                  <div class="name">
                    <p class="myname">馮凱淇 Cherry</p>
                    <p class="pro">牙齒美白療程</p>
                  </div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/86a836934d935861.png"
                    alt=""
                    class="img-start"
                  />
                  <p>療程安心、舒服</p>
                  <span
                    >由專業牙醫操刀﹐過程很快﹐效果更能維持一年！整個過程很舒服﹐沒有過於刺激或敏感的情況出現。
                  </span>
                  <div class="end">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/4a2c9fbebd4ccca9.png"
                      alt=""
                      class="img-end"
                    />
                  </div>
                </div>
              </div>
              <div style="position: relative" class="shares">
                <div class="share-head-person">
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/f627d242e83e7368.png"
                    alt=""
                  />
                </div>

                <div class="share-detail-box">
                  <div class="name">
                    <p class="myname">張嘉珮 Luciana</p>
                    <p class="pro">牙齒美白療程</p>
                  </div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/86a836934d935861.png"
                    alt=""
                    class="img-start"
                  />
                  <p>牙醫細心講解療程</p>
                  <span
                    >療程前醫生同我講解整個過程﹐進行每個步驟亦會同步解釋﹐令我成個人都放鬆啲。
                  </span>
                  <div class="end">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/4a2c9fbebd4ccca9.png"
                      alt=""
                      class="img-end"
                    />
                  </div>
                </div>
              </div>
              <div style="position: relative" class="shares">
                <div class="share-head-person">
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/0155aa39a7879542.png"
                    alt=""
                  />
                </div>

                <div class="share-detail-box teshu-box">
                  <div class="name">
                    <p class="myname">Szeci</p>
                    <p class="pro">牙齒美白療程</p>
                  </div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/86a836934d935861.png"
                    alt=""
                    class="img-start"
                  />
                  <p>過程快、牙醫講解仔細</p>
                  <span
                    >洗牙過程好舒服，隔咗一個禮拜再去做激光美白牙齒，醫生同我詳細講解，而且手勢超級好，過程快只需要約30分鐘，效果維持一年。依家牙齒好白開心晒！
                  </span>
                  <div class="end">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/4a2c9fbebd4ccca9.png"
                      alt=""
                      class="img-end"
                    />
                  </div>
                </div>
              </div>
              <div style="position: relative" class="shares">
                <div class="share-head-person">
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/841099e389913c8d.png"
                    alt=""
                  />
                </div>

                <div class="share-detail-box">
                  <div class="name">
                    <p class="myname">Bird</p>
                    <p class="pro">牙齒美白療程</p>
                  </div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/86a836934d935861.png"
                    alt=""
                    class="img-start"
                  />
                  <p>令牙齒變得更靚</p>
                  <span>身心要大革新，去希瑪躺一躺扮個靚，由內在出發。 </span>
                  <div class="end">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/4a2c9fbebd4ccca9.png"
                      alt=""
                      class="img-end"
                    />
                  </div>
                </div>
              </div>
              <div style="position: relative" class="shares">
                <div class="share-head-person">
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/ee3218e2d2bbf6fa.png"
                    alt=""
                  />
                </div>

                <div class="share-detail-box">
                  <div class="name">
                    <p class="myname">區文詩 Angela</p>
                    <p class="pro">牙齒美白療程</p>
                  </div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/86a836934d935861.png"
                    alt=""
                    class="img-start"
                  />
                  <p>露齒笑打卡影相100分！</p>
                  <span
                    >最近做完牙齒美白，聽講呢個療程效果可以維持一年，今次仲唔俾我影返夠？</span
                  >
                  <div class="end">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/4a2c9fbebd4ccca9.png"
                      alt=""
                      class="img-end"
                    />
                  </div>
                </div>
              </div>
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
  .shares:nth-child(4) .share-detail-box {
    padding-bottom: 5px !important;
  }
  .share-video-box {
    .img-start {
      position: absolute;
      width: 50px;
      top: 134px;
      /* left: 132px; */
      right: 369px;
    }

    .share-detail-box .name .myname {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 42px;
      /* identical to box height */

      color: #666666;
    }
    .share-detail-box .name {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 48px;

      right: 250px;

      align-items: flex-start;
    }
    .share-detail-box .name .pro {
      position: absolute;
      white-space: pre;
      top: 44px;
      right: -172px;
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 35px;
      /* identical to box height */

      /* green */

      color: #aace79;
    }
    .share-detail-box {
      padding-left: 100px !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #fff;
      opacity: 1;
      height: 265px;
      margin: 0 10px;
      margin-top: 153px;
      margin-left: 620px;
      padding-bottom: 10px;
      padding: 45px 35px 23px 35px;
      p {
        white-space: pre;
      }
    }
  }
  .iframe {
    position: absolute;
    top: -26px;
    left: 0px;
    box-shadow: 0px 1px 16px 14px #e9f5fa;
  }
  .share-box {
    background: url('https://static.cmereye.com/imgs/2023/01/bcde67659fe5e0a2.png')
      no-repeat;
    background-size: 100% 100%;
    background-position: center;
    position: relative;
    z-index: 9;
    padding-bottom: 100px;

    .share-person-box {
      margin-top: 38px;

      display: grid;
      grid-auto-flow: row;
      grid-template-columns: repeat(2, 1fr);
      .shares {
        margin-top: 57px;
      }
    }
  }
  .more-btn:hover {
    background: #cdcdcd !important;
  }
  .weShare {
    .more-btn {
      cursor: pointer;
      margin-top: 99px;
      background: #ffffff;
      /* light grey */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      padding: 19px 143px;
      /* grey */

      color: #666666;
      border: 1px solid #cdcdcd;
    }
    position: relative;
    z-index: 9;
    ::v-deep .swiper-button-next,
    .swiper-button-prev {
      display: block !important;
    }
  }
  .share-detail-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: #fff;
    opacity: 1;
    height: 265px;
    margin: 0 10px;
    margin-top: 30px;
    padding-bottom: 10px;
    padding: 10px 35px 23px 35px;
    img {
      width: 10%;
    }
    .name {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      /* padding-top: 54px; */
      /* top: 14px; */
      position: absolute;
      top: 48px;
      right: 9px;
      .myname {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 35px;
        /* identical to box height */

        color: #666666;
      }
      .pro {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        /* identical to box height */

        /* green */

        color: #aace79;
      }
      .myname::before {
        content: '';
        border: 1px solid #ecb3ac;
        transform: rotate(90deg);
        margin-right: 11px;
      }
    }
    .end {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      /* identical to box height */

      /* pink */
      padding: 5px 42px 0px 42px;
      color: #ecb3ac;
    }
    .tesgy {
      line-height: 21px;
    }
    span {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      /* or 194% */
      text-align: justify;
      padding: 5px 42px;
      color: #666666;
    }
  }
  .share-sze {
    .name {
      display: flex;
      flex-direction: column;
      align-items: normal !important;
      position: absolute;
      top: 48px;
      right: 9px;
      .pro {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #aace79;
        position: absolute;
        white-space: pre;
        right: 0;
      }
      .myname {
        padding-right: 120px;
      }
    }
  }

  .share-head-person {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    img {
      z-index: 10;
    }
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
    background-image: url(https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/Group%20329.avif);
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
  .iframe {
    position: absolute;
    right: 0;
    top: 81vw;
    left: 0;
    display: flex;
    z-index: 15;
    justify-content: center;
  }
  .share-video-box {
    .share-detail-box .name .pro {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      padding: 5px 42px 0px 42px;
      position: absolute;
      top: 40px;
      right: -123px;
      color: #aace79;
      white-space: pre;
    }
  }
  .share-head-person {
    position: absolute;

    right: 16px;
    display: flex;

    img {
      z-index: 10;
    }
  }
  .share-box {
    background: url(https://static.cmereye.com/imgs/2023/02/0acab6955022b9a9.jpg)
      no-repeat;
    background-size: 100% 125%;
    background-position: center;
    position: relative;
    z-index: 9;
    padding-bottom: 100px;

    .share-person-box {
      display: flex;
      flex-direction: column;
      margin-top: 37vw;
      .shares {
        margin-top: 84px;
      }
    }
  }
  .more-btn:hover {
    background: #cdcdcd !important;
  }
  .weShare {
    margin-top: 48px;
    padding: 0;
    .more-btn {
      cursor: pointer;
      margin-top: 70px;
      background: #ffffff;
      /* light grey */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      padding: 19px 67px;
      /* grey */

      color: #666666;
      border: 1px solid #cdcdcd;
    }
    ::v-deep .swiper-slide {
      display: flex;
      justify-content: center;
    }
  }
  .share-top {
    margin-right: 51px;
  }

  .share-detail-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: #fff;
    opacity: 1;
    height: unset;
    margin-top: 80px;
    padding-bottom: 10px;
    padding: 27px 35px 27px 35px;
    position: relative;
    .img-start {
      width: 37px;
      position: absolute;
      top: -12px;
    }
    .img-end {
      width: 37px;
    }
    .name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: -95px;
      margin-left: 15px;
      /* right: 9px; */
      left: -41px;
      .myname {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 35px;
        /* identical to box height */
        padding: 5px 42px 0px 42px;
        color: #666666;
      }
      .pro {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        padding: 5px 42px 0px 42px;
        position: absolute;
        top: 40px;
        right: -56px;
        color: #aace79;
        white-space: pre;
      }
      .myname::before {
        content: '';
        border: 1px solid #ecb3ac;
        transform: rotate(90deg);
        margin-right: 11px;
      }
    }
    .end {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      /* identical to box height */

      /* pink */
      padding: 0;
      color: #ecb3ac;
    }
    .tesgy {
      line-height: 21px;
    }
    span {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      /* or 194% */
      text-align: justify;
      padding: 5px 0;

      color: #666666;
    }
  }
  .weShare {
    ::v-deep .swiper-button-prev {
      left: 0%;
      width: 50px;
      height: 64px;
      background: url(https://static.cmereye.com/imgs/2022/10/fc1dc1f50f29fad5.png)
        no-repeat;
      background-position: 0 0;
      background-size: 78%;
      z-index: 9999;
      position: absolute;
      top: 44%;
    }
    ::v-deep .swiper-button-prev::after {
      content: '' !important;
    }
  }
  .weShare {
    ::v-deep .swiper-button-next {
      right: -10px;
      left: unset;
      width: 50px;
      height: 64px;
      background: url(https://static.cmereye.com/imgs/2022/10/8fb86d8d6f1982ee.png)
        no-repeat;
      background-position: 0 0;
      background-size: 78%;
      z-index: 9999;
      position: absolute;
      top: 44%;
    }
    ::v-deep .swiper-button-next::after {
      content: '' !important;
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
  .share-video-box .share-detail-box {
    padding-left: 100px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    opacity: 1;
    height: 265px;
    margin: 0 10px;
    margin-top: 153px;
    margin-left: 648px;
    padding-bottom: 10px;
    padding: 45px 35px 23px 35px;
  }
  .iframe {
    position: absolute;
    top: -26px;
    left: -47px;
    box-shadow: 0px 1px 16px 14px #e9f5fa;
  }
  .share-video-box .share-detail-box .name {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 48px;
    right: 172px;
    align-items: flex-start;
  }
  .share-video-box .img-start {
    position: absolute;
    width: 50px;
    top: 134px;
    right: 306px;
  }
  .share-detail-box .name .myname {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 35px;
    color: #666666;
  }
  .share-detail-box .name .pro {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #aace79;
  }
}
</style>
