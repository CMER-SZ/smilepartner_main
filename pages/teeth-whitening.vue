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
// let currentIndex:number =
function titelclick(index) {
  currentIndex.Index = index
  // console.log(this.currentIndex);
}
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.teeth_whitening.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.teeth_whitening.description'),
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
  smilepartner_select:
    '經系統分析,該表單來自牙齒美白療程頁面,該用戶想查詢，来源地址：https://smilepartner.hk/teeth_whitening',
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
          src="https://static.cmereye.com/imgs/2022/11/ea7549556b5ed67d.jpg"
          srcset="
            https://static.cmereye.com/imgs/2022/12/806d9f813d502af5.jpg 400w,
            https://static.cmereye.com/imgs/2022/12/806d9f813d502af5.jpg 640w,
            https://static.cmereye.com/imgs/2022/11/ea7549556b5ed67d.jpg
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
            <!-- <span class="mt-1 xinyongka">指定信用卡可享免息分期</span> -->
          </div>

          <div class="head_banner_text justify-self-center">
            <div class="head_banner_text_p">
              <div class="head_banner_img" style="display: block">
                <img
                  class="m-auto"
                  src="https://static.cmereye.com/imgs/2022/12/1d4b609847311215.png"
                  alt=""
                />
              </div>
              <h2
                class="text-pink text-center text-4xl mb-6"
                style="display: none"
              >
                希瑪微笑矯齒
              </h2>
              <div class="flex banner-title">
                <img
                  class=""
                  src="https://static.cmereye.com/imgs/2022/12/f20429a5cbffeea6.png"
                  alt=""
                />
                <span class="text-pink">4大牙齒美白療程</span>
              </div>

              <p>{{ $t('banners.teeth_whitening') }}</p>
              <div
                class="text-center mbShow"
                style="margin-top: 54vw; display: flex; flex-direction: column"
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

    <slot name="header">
      <PageNavbar class="pcShow" />
    </slot>

    <div class="situation_container page_orthodontic">
      <div class="page_container">
        <div
          class="orthodontic_title text-left text-center mt-16 sm:mb-0 sm:mt-38"
          style="text-align: center !important; padding: 0 !important"
        >
          <h2
            class="text-primary font-normal text-lg md:text-2xl inline-block relative"
          >
            你有以下情況嗎？
          </h2>
          <p
            class="sm:mb-10 mb-10 mt-14 text-primary text-center font-bold text-base tracking-widest-2x text-iframe-one mb-text"
          >
            牙齒美白可解決<br class="mbShow" />以下情況所致的
            <span class="text-xl text-green">牙齒變色問題</span>
          </p>
        </div>

        <div class="flex mb-2 situation_box flex-col md:flex-row">
          <div class="mx-5 flex flex-col items-center">
            <img
              src="https://static.cmereye.com/imgs/2022/12/7b0b5fe53b5f2f97.png"
              alt=""
            />
            <span style="color: #666">經常吸煙</span>
            <span class="text-green">令牙齒變啡黑</span>
          </div>
          <div class="mx-5 flex flex-col items-center">
            <img
              src="https://static.cmereye.com/imgs/2022/12/116897202681cd31.png"
              alt=""
            />
            <span style="color: #666">飲用深色飲品</span>
            <span class="text-pink">令牙齒變啡黑</span>
          </div>
          <div class="mx-5 flex flex-col items-center">
            <img
              src="https://static.cmereye.com/imgs/2022/12/5795df714e54a927.png"
              alt=""
            />
            <span style="color: #666">年齡增長，牙齒老化</span>
            <span class="text-green">牙齒自然變黃</span>
          </div>
        </div>
      </div>
    </div>
    <div class="orthodontic_compete page_orthodontic pb-12">
      <div class="page_container">
        <div
          class="orthodontic_title text-left text-center my-16 sm:mb-14 sm:my-28"
          style="text-align: center !important"
        >
          <h2
            class="text-primary font-normal text-lg md:text-2xl inline-block relative"
          >
            4大美白牙齒療程<br class="mbShow" />
            跟牙黃ByeBye！
          </h2>
        </div>
        <div class="orthodontic_table_scroll pcShow">
          <div class="orthodontic_table grid grid-cols-10">
            <div>原 理</div>
            <div></div>
            <div>優點</div>
            <div>
              利用激光能量激活專用美白劑，將牙齒內外的牙漬及色素分子清除，達到深層亮白效果，而激光比藍光的能量較高較集中，故過程只需約30分鐘，效果可維持至少1年
            </div>
            <div style="text-align: center">激光<br />美白療程</div>
            <div>快速改善牙齒顏色，成效及安全性較高</div>
            <div>
              在牙齒表面塗上專用美白溶液，以藍光照射牙齒數次，以進行氧化還原作用，達到美白效果，過程約1小時，效果可維持約1年
            </div>
            <div style="text-align: center">藍光<br />美白療程</div>
            <div>快速改善牙齒顏色</div>
            <div>過程與藍光美白療程相近</div>
            <div style="text-align: center">診所<br />美白療程</div>
            <div>過程中不需照燈程序</div>
            <div>
              牙醫會先為你的牙齒取模，以度身訂造美白牙膠，然後可根據指示，在家自行以高濃度美白溶液配合美白牙膠進行療程，但效果不及診所進行的牙齒美白療程高
            </div>
            <div>家居牙齒<br />美白套裝</div>
            <div>可自行在家美白牙齒、價格較低</div>
          </div>
        </div>
        <div class="mbShow orthodontic_table_swiper">
          <swiper
            class="mySwiper"
            ref="mySwiper"
            :modules="modules"
            :options="tableswiperOption"
            :pagination="{ clickable: true }"
            :slides-per-view="1.2"
            :space-between="50"
            navigation
            :scrollbar="{ draggable: true }"
          >
            <swiper-slide>
              <div class="orthodontic_table grid grid-cols-10">
                <div>原 理</div>
                <div></div>
                <div>優點</div>
                <div>
                  利用激光能量激活專用美白劑，將牙齒內外的牙漬及色素分子清除，達到深層亮白效果，而激光比藍光的能量較高較集中，故過程只需約30分鐘，效果可維持至少1年
                </div>
                <div style="text-align: center">激光<br />美白療程</div>
                <div>快速改善牙齒顏色，成效及安全性較高</div>
                <div>
                  在牙齒表面塗上專用美白溶液，以藍光照射牙齒數次，以進行氧化還原作用，達到美白效果，過程約1小時，效果可維持約1年
                </div>
                <div style="text-align: center">藍光<br />美白療程</div>
                <div>快速改善牙齒顏色</div>
                <div>過程與藍光美白療程相近</div>
                <div style="text-align: center">診所<br />美白療程</div>
                <div>過程中不需照燈程序</div>
                <div>
                  牙醫會先為你的牙齒取模，以度身訂造美白牙膠，然後可根據指示，在家自行以高濃度美白溶液配合美白牙膠進行療程，但效果不及診所進行的牙齒美白療程高
                </div>
                <div>家居牙齒美白套裝</div>
                <div>可自行在家美白牙齒、價格較低</div>
              </div>
            </swiper-slide>
            <swiper-slide></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-col items-center anli-photo-box-head">

      <p
        class="sm:mb-14 mb-10 text-primary text-center font-bold text-base tracking-widest-2x text-iframe-one"
      >
        <span class="text-2xl text-green">真實個案</span>
        相片
      </p>
      <div class="flex pcShow">
        <div class="flex px-4 anli-photo-box">
          <img
            src="https://static.cmereye.com/imgs/2022/12/09a518d75b7bbcb0.jpg"
            alt=""
          />
          <img
            src="https://static.cmereye.com/imgs/2022/12/767a34c0308d030f.jpg"
            alt=""
          />
        </div>
        <div class="flex px-4 anli-photo-box">
          <img
            src="https://static.cmereye.com/imgs/2022/12/bfeb85198745ea3f.jpg"
            alt=""
          />
          <img
            src="https://static.cmereye.com/imgs/2022/12/9045f8172a0ed798.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="page_container anli-photo">
        <div class="mbShow orthodontic_table_swiper orthodontic_swiper_point">
          <swiper
            ref="mySwiper"
            :modules="modules"
            :options="swiperOptionRew"
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :space-between="0"
            navigation
            :scrollbar="{ draggable: true }"
          >
            <swiper-slide>
              <img
                src="https://static.cmereye.com/imgs/2022/12/09a518d75b7bbcb0.jpg"
                alt=""
                style="padding: 10px 20px"
              />
              <img
                src="https://static.cmereye.com/imgs/2022/12/767a34c0308d030f.jpg"
                alt=""
                style="padding: 10px 20px"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://static.cmereye.com/imgs/2022/12/bfeb85198745ea3f.jpg"
                alt=""
                style="padding: 10px 20px"
              />
              <img
                src="https://static.cmereye.com/imgs/2022/12/9045f8172a0ed798.jpg"
                alt=""
                style="padding: 10px 20px"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>

    </div> -->

    <div class="share-box md:pt-20">
      <div class="page_container flex flex-col items-center weShare">
        <!-- <div class=" anli-photo"> -->

        <p
          class="sm:mb-14 mb-10 text-primary text-center font-bold text-base tracking-widest-2x text-iframe-one"
        >
          顧客
          <span class="text-2xl text-green">感受分享</span>
        </p>
        <div class="share-person-box">
          <div style="position: relative" class="shares">
            <div class="share-head-person">
              <img
                src="https://static.cmereye.com/imgs/2023/01/ea9aa991fde648b6.png"
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
          <div style="position: relative" class="shares">
            <div class="share-head-person">
              <img
                src="https://static.cmereye.com/imgs/2023/01/7fcc277e9aa1e3e5.png"
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
                src="https://static.cmereye.com/imgs/2023/01/b2249fa4edadc2c8.png"
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
                src="https://static.cmereye.com/imgs/2023/01/0155aa39a7879542.png"
                alt=""
              />
            </div>

            <div class="share-detail-box share-sze">
              <div class="name">
                <p class="myname">Szeci</p>
                <div>
                  <p class="pro">牙齒美白療程</p>
                </div>
              </div>
              <img
                src="https://static.cmereye.com/imgs/2023/01/86a836934d935861.png"
                alt=""
                class="img-start"
              />
              <p>過程快、牙醫講解仔細</p>
              <span class="tesgy"
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
        </div>
        <!-- <span class="more-btn">查看更多</span> -->
      </div>
    </div>

    <!-- sm:py-38 -->
    <div class="page_orthodontic md:pb-20">
      <div class="md:mt-0">
        <div class="orthodontic_form_background md:mb-0" id="yyform">
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
                        v-model="reForm.smilepartner_select"
                      />
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

      <div class="orthodontic_faq pb-20">
        <div class="page_container">
          <div class="flex">
            <div
              class="orthodontic_title text-left sm:text-center sm:my-16 sm:my-28"
            >
              <h2
                class="text-primary font-normal text-xl md:text-2xl inline-block relative"
              >
                常見問題
              </h2>
            </div>

            <div class="w-full sm:px-4 pt-10 sm:pt-20">
              <div class="mx-auto w-full rounded-2xl p-2 orthodontic_faq_list">
                <Disclosure v-slot="{ open }">
                  <div
                    :class="
                      open
                        ? 'border-t-1 border-b-1 py-6 border-pink'
                        : 'border-t-1 border-b-1 py-6 border-primary'
                    "
                  >
                    <DisclosureButton
                      class="flex w-full justify-between px-4 py-2 text-left text-lg font-medium focus:outline-none"
                    >
                      <span :class="open ? 'text-pink' : 'text-primary'"
                        >美白牙齒時，牙齒會感到酸軟？</span
                      >
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-4 pb-2 text-md text-primary"
                    >
                      進行牙齒美白療程，會否出現牙齒敏感情況因人而異。有些人牙齒較為敏感，療程期間或完成療程後，牙齒或會出現暫時性的酸軟感覺，不過會隨時間會慢慢恢復正常。
                    </DisclosurePanel>
                  </div>
                </Disclosure>

                <Disclosure v-slot="{ open }">
                  <div
                    :class="
                      open
                        ? 'border-t-1 border-b-1 py-6 border-pink'
                        : 'border-t-1 border-b-1 py-6 border-primary'
                    "
                  >
                    <DisclosureButton
                      class="flex w-full justify-between px-4 py-2 text-left text-lg font-medium focus:outline-none"
                    >
                      <span :class="open ? 'text-pink' : 'text-primary'"
                        >美白牙齒後，應如何護理？</span
                      >
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-4 pb-2 text-md text-primary"
                    >
                      · 1星期內避免進食刺激性食物及飲品<br />
                      · 3星期內避免進食色素較多的食物及飲品<br />
                      · 養成健康生活習慣，盡量避免吸煙<br />
                      · 早晚刷牙，進食後清潔口腔，保持口腔清潔衛生<br />
                    </DisclosurePanel>
                  </div>
                </Disclosure>

                <Disclosure v-slot="{ open }">
                  <div
                    :class="
                      open
                        ? 'border-t-1 border-b-1 py-6 border-pink'
                        : 'border-t-1 border-b-1 py-6 border-primary'
                    "
                  >
                    <DisclosureButton
                      class="flex w-full justify-between px-4 py-2 text-left text-lg font-medium focus:outline-none"
                    >
                      <span :class="open ? 'text-pink' : 'text-primary'"
                        >哪些人不建議進行牙齒美白療程？</span
                      >
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-4 pb-2 text-md text-primary"
                    >
                      進行療程前，牙醫會為你進行洗牙及檢查牙齒，如有蛀牙、牙齒敏感等牙齒問題，又或懷孕婦女，都不建議接受牙齒美白療程。
                    </DisclosurePanel>
                  </div>
                </Disclosure>
              </div>
            </div>
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
  background-image: url(https://static.cmereye.com/imgs/2022/12/76f36768a3094875.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.orthodontic_table {
  max-width: 940px;
  margin: auto;
}
.orthodontic_table > div {
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 23px;
  font-family: 'Songti TC';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  text-align: justify; /* grey */
  color: #666666;
  position: relative;
}
.orthodontic_table > div:nth-child(1),
.orthodontic_table > div:nth-child(2),
.orthodontic_table > div:nth-child(3) {
  height: 50px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.orthodontic_table > div:nth-child(1) {
  background: #ecb3ac;
}
.orthodontic_table > div:nth-child(2) {
  background: #fff;
}
.orthodontic_table > div:nth-child(3) {
  background: #aace79;
}
.orthodontic_table > div:nth-child(6n + 4),
.orthodontic_table > div:nth-child(4) {
  background: rgb(251, 240, 238);
}
.orthodontic_table > div:nth-child(6n + 7),
.orthodontic_table > div:nth-child(7) {
  background: rgb(248, 228, 224);
}

.orthodontic_table > div:nth-child(6n + 6) {
  background: rgb(238, 245, 228);
}
.orthodontic_table > div:nth-child(6n + 9) {
  background: rgb(224, 237, 206);
}

.orthodontic_table > div:nth-child(3n + 1) {
  grid-column: span 4 / span 4;
}
.orthodontic_table > div:nth-child(3n + 2) {
  grid-column: span 2 / span 2;
  font-size: 18px;
}
.orthodontic_table > div:nth-child(3n + 3) {
  grid-column: span 4 / span 4;
}
.orthodontic_table > div:nth-child(6n + 8)::before {
  width: 80px;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  background-color: #ecb3ac;
  position: absolute;
  content: '';
}
.orthodontic_table > div:nth-child(11)::before {
  width: 80px;
  height: 1px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #ecb3ac;
  position: absolute;
  content: '';
}
.orthodontic_table > div:nth-child(14)::after {
  width: 80px;
  height: 1px;
  left: 0;
  right: 0;
  bottom: 0px;
  margin: auto;
  background-color: #aace79;
  position: absolute;
  content: '';
}
.orthodontic_table > div:nth-child(17)::before {
  width: 80px;
  height: 1px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #ecb3ac;
  position: absolute;
  content: '';
}
.orthodontic_table > div:nth-child(6n + 5)::after {
  width: 80px;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  background-color: #aace79;
  position: absolute;
  content: '';
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

.page_orthodontic .flex_between_items_start:nth-child(1) > div h4::before {
  content: ' ';
}

.page_orthodontic .flex_between_items_start:nth-child(3) > div h4::before {
  // content: 'Step 2';
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/deda966d1aaa92c1.png)
    no-repeat;
}
.page_orthodontic .flex_between_items_start:nth-child(4) > div h4::before {
  // content: 'Step 2';
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/deda966d1aaa92c1.png)
    no-repeat;
}
.page_orthodontic
  .flex_between_items_start_continue:nth-child(1)
  > div
  h4::before {
  // content: 'Step 3';
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/deda966d1aaa92c1.png)
    no-repeat;
}
.page_orthodontic
  .flex_between_items_start_continue:nth-child(2)
  > div
  h4::before {
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/75d9cd0d33de2d35.png)
    no-repeat;
}
.page_orthodontic
  .flex_between_items_start_continue:nth-child(3)
  > div
  h4::before {
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/9fd89cf90984354a.png)
    no-repeat;
}
.page_orthodontic
  .flex_between_items_start_continue:nth-child(4)
  > div
  h4::before {
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/e43a24f5931f8d8f.png)
    no-repeat;
}
.page_orthodontic
  .flex_between_items_start_continue:nth-child(5)
  > div
  h4::before {
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/bcb122d078269f66.png)
    no-repeat;
}
.page_orthodontic
  .flex_between_items_start_continue:nth-child(6)
  > div
  h4::before {
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/e43a24f5931f8d8f.png)
    no-repeat;
}
.page_orthodontic
  .flex_between_items_start_continue:nth-child(7)
  > div
  h4::before {
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/bcb122d078269f66.png)
    no-repeat;
}
.page_orthodontic
  .flex_between_items_start_continue:nth-child(8)
  > div
  h4::before {
  top: 8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/5f2b9d4f44128741.png)
    no-repeat;
}

.weShare {
  ::v-deep .swiper-button-prev {
    left: 30%;
    width: 50px;
    height: 64px;
    background: url(https://static.cmereye.com/imgs/2022/10/fc1dc1f50f29fad5.png)
      no-repeat;
    background-position: 0 0;
    background-size: 100%;
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
    left: 66%;
    width: 50px;
    height: 64px;
    background: url(https://static.cmereye.com/imgs/2022/10/8fb86d8d6f1982ee.png)
      no-repeat;
    background-position: 0 0;
    background-size: 100%;
    z-index: 9999;
    position: absolute;
    top: 44%;
  }
  ::v-deep .swiper-button-next::after {
    content: '' !important;
  }
}
@media screen and(min-width:768px) {
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
  ::v-deep .swiper-slide {
    display: flex;
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
  .situation_box {
    img {
      margin-bottom: 14px;
    }
    span {
      /* regular font 18 */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
    }
  }

  .share-box {
    background: url('https://static.cmereye.com/imgs/2023/01/bcde67659fe5e0a2.png')
      no-repeat;
    background-size: 100% 230%;
    background-position: center;
    position: relative;
    z-index: 9;
    padding-bottom: 100px;

    .share-person-box {
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
  .orthodontic_compete {
    background-color: #fff;
    position: relative;
    z-index: 9;
  }
  .anli-photo-box-head {
    background-color: #fff;
    position: relative;
    z-index: 9;
    padding-top: 82px;
    padding-bottom: 82px;
  }
  .head_banner_img {
    margin-top: 36px;
    margin-bottom: 10px;
  }
  .banner-title {
    display: flex;
    align-items: center;
    margin: 28px 0;
    span {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 39.1823px;
      line-height: 55px;
      /* identical to box height */

      /* pink */

      color: #ecb3ac;
    }
  }

  .step_title {
    margin: 0;
  }
  .anli-photo-box-head {
    .anli-photo-box {
      img {
        padding: 5px;
      }
    }
  }

  .orthodontic_pic .text-center:nth-child(1):after {
    content: '牙齒排列不整齊';
  }
  .orthodontic_pic .text-center:nth-child(2):after {
    content: '牙齒變色';
  }
  .orthodontic_pic .text-center:nth-child(3):after {
    content: '牙齒出現磨損';
  }
  .orthodontic_pic .text-center:nth-child(4):after {
    content: '牙齒縫隙過大';
  }
  .orthodontic_pic .text-center:nth-child(5):after {
    content: '牙齒過小';
  }
  .orthodontic_pic .text-center:nth-child(6):after {
    content: '四環素牙';
  }
  .orthodontic_pic .text-center:nth-child(7):after {
    content: '齒列擠擁';
  }
  .compete_bac_1 {
    padding-left: 192px;
    position: absolute;
  }
  .compete_bac_2 {
    padding-top: 205px;
  }
  .orthodontic_step {
    padding-top: 54px;
  }
  .form_width {
    padding: 20px 130px;
  }
  .tab-control .active {
    span {
      color: #ecb3ac !important;
    }
  }
  .tab-control {
    display: flex;
    justify-content: center;
    padding: 40px 0;
    cursor: pointer;
    .tab-control-item {
      padding: 0 20px;
      span {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        /* Teeth Grey */
        color: #666666;
        border-bottom: 1px solid #ecb3ac;
      }
    }
  }
  ::v-deep .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .thumb-example {
    height: 480px;
    background-color: #fff;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  .top-swiper,
  .thumbs-swiper {
    .slide {
      // img {
      //   display: block;
      //   width: 100%;
      //   height: 100%;
      //   object-fit: cover;
      // }
    }
  }
  .top-swiper {
    height: 80%;
    width: 100%;
    .slide {
      display: flex;
      justify-content: center;
    }
  }
  .thumbs-swiper {
    // height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
    .slide {
      width: 25%;
      height: 100%;
      opacity: 1;
      &:not(.swiper-slide-thumb-active) {
        opacity: 1;
      }
    }
  }
  ::v-deep .swiper-pagination {
    display: none;
  }
  .orthodontic_form_background {
    /* Pink Light */
    background: #fcf4f2;
  }
  // 瓷貼片過程一覽
  .cipian_one_title {
    display: flex;
    margin-left: 28%;
  }
  .compete_bac .compete_bac_box {
    float: right;
  }
  .compete_bac_1 {
    padding-left: 192px;
    position: absolute;
  }
  .compete_bac_2 {
    padding-top: 205px;
  }
  .orthodontic_compete2 .compete_one {
    position: absolute;
    width: 47%;
    margin: 19px 0 0 58px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    p {
      /* regular font 18 */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;

      /* Teeth Grey */

      color: #666666;
    }
  }
  .orthodontic_compete2 .compete_two {
    position: absolute;
    width: 52%;
    display: flex;
    margin-top: 161px;
    flex-direction: row-reverse;
    padding-left: 57px;
    p {
      /* regular font 18 */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;

      /* Teeth Grey */

      color: #666666;
    }
  }
  .orthodontic_compete2 .compete_four {
    position: absolute;
    width: 52%;
    display: flex;
    margin-top: 375px;
    flex-direction: row-reverse;
    padding-left: 57px;
    align-items: flex-end;
    p {
      /* regular font 18 */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;

      /* Teeth Grey */

      color: #666666;
    }
  }
  .orthodontic_compete2 .compete_three {
    position: absolute;
    width: 42%;
    margin: 269px 0 0 96px;
    display: flex;
    align-items: flex-end;
    p {
      /* regular font 18 */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;

      /* Teeth Grey */

      color: #666666;
    }
  }

  .continue_box {
    h4 {
      padding-left: 56px;
    }
    p {
      padding-left: 56px;
    }
  }

  .page_body_header {
    background-image: url(https://static.cmereye.com/imgs/2022/12/daa6bb7827233993.jpg);
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: fixed;
    width: 100%;
  }
  .page_body_header_banner {
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
        margin-top: -100px;
      }
    }
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

@media screen and(max-width:768px) {
  .mb-text {
    margin-top: 50px;
    margin-bottom: 0px;
  }
  .situation_container {
    margin-top: 60px;
  }
  .orthodontic_compete .page_container::before {
    bottom: 3px !important;
  }

  .situation_box {
    img {
      margin-bottom: 14px;
    }
    span {
      /* regular font 18 */

      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
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
    background: url('https://static.cmereye.com/imgs/2023/01/bcde67659fe5e0a2.png')
      no-repeat;
    background-size: 220% 230%;
    background-position: center;
    position: relative;
    z-index: 9;
    padding-bottom: 100px;

    .share-person-box {
      display: flex;
      flex-direction: column;
      .shares {
        margin-top: 57px;
      }
    }
  }
  .more-btn:hover {
    background: #cdcdcd !important;
  }
  .weShare {
    margin-top: 48px;

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

  .share-detail-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: #fff;
    opacity: 1;
    height: unset;
    margin: 0 10px;
    margin-top: 80px;
    padding-bottom: 10px;
    padding: 27px 35px 14px 35px;
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
        /* identical to box height */
        padding: 5px 42px 0px 42px;
        /* green */
        position: absolute;
        top: 40px;
        right: 93px;
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
  .orthodontic_table > div:nth-child(3n + 2) {
    grid-column: span 2 / span 2;
    font-size: 16px;
  }
  .orthodontic_table > div {
    height: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 23px;
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    text-align: justify; /* grey */
    color: #666666;
    position: relative;
    justify-content: flex-start;
  }
  .orthodontic_table {
    width: 148vw;
    margin: auto;
    padding-bottom: 26px;
  }
  .banner-title {
    display: flex;
    align-items: center;
    margin: 24px 0;
    img {
      width: 50%;
    }
    span {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;

      /* pink */

      color: #ecb3ac;
    }
  }
  .orthodontic_table_swiper {
    .swiper {
      padding-bottom: 33px;
    }
  }
  .anli-photo {
    .swiper-slide {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .swiper {
      height: 141vw;
    }
    ::v-deep .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 9px !important;
    }
    .page_container::before {
      bottom: -19px !important;
    }
  }
  .anli-photo::before {
    position: absolute;
    content: '';
    width: 12.5vw;
    height: 6.7vw;
    background-image: url(https://img.cmereye.com/i/2022/09/27/6332b6a7ada01.png);
    bottom: -23px;
    left: 0;
    right: 0;
    margin: auto;
    background-size: 100%;
    background-repeat: no-repeat;
    animation: translateX 1s ease-in-out alternate infinite;
  }

  // .swiper-backface-hidden .swiper-slide{
  //   display: flex;
  //  flex-direction: column;
  //   align-items: center;
  // }
  .orthodontic_step {
    .flex_between_items_start {
      // align-items: flex-end !important;
      .img-box-step {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      .w-full {
        width: 86% !important;
      }
    }
  }
  .orthodontic_compete2 .page_container {
    position: relative;
  }
  .compete_bac_box {
    position: relative;
  }
  .compete_bac_1 {
    position: absolute;
    width: 76%;
    right: 0;
  }
  .compete_bac_2 {
    width: 76%;
    padding-top: 40vw;
  }
  .orthodontic_compete2 .compete_one {
    display: flex;
    align-items: flex-end;
    padding: 14px 0;
    p {
      /* regular font 18 */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;

      /* Teeth Grey */

      color: #666666;
    }
  }
  .orthodontic_compete2 .compete_two {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    padding: 14px 0;
    p {
      /* regular font 18 */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;

      /* Teeth Grey */

      color: #666666;
    }
  }
  .orthodontic_compete2 .compete_four {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    padding: 14px 0;
    p {
      /* regular font 18 */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;

      /* Teeth Grey */

      color: #666666;
    }
  }
  .orthodontic_compete2 .compete_three {
    display: flex;
    align-items: flex-end;
    padding: 14px 0;
    p {
      /* regular font 18 */
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;

      /* Teeth Grey */

      color: #666666;
    }
  }

  .slide {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .tab-control .active {
    span {
      color: #ecb3ac !important;
    }
  }
  .tab-control {
    display: flex;
    justify-content: center;
    padding: 12px 0;
    cursor: pointer;
    .tab-control-item {
      padding: 0 20px;
      span {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        /* Teeth Grey */
        color: #666666;
        border-bottom: 1px solid #ecb3ac;
      }
    }
  }
  ::v-deep .swiper-button-prev:after {
    display: none;
  }

  ::v-deep .swiper-button-next:after {
    display: none;
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
    margin-top: 103% !important;
  }
  .page_body_header_banner {
    padding-bottom: 280px;
  }

  .orthodontic_swiper {
    ::v-deep
      .swiper-horizontal
      > .swiper-pagination-bullets
      .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets
      .swiper-pagination-bullet {
      margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 29px);
    }
    ::v-deep .swiper-pagination-bullet {
      width: var(
        --swiper-pagination-bullet-width,
        var(--swiper-pagination-bullet-size, 15px)
      );
      height: var(
        --swiper-pagination-bullet-height,
        var(--swiper-pagination-bullet-size, 15px)
      );
      display: inline-block;
      border-radius: 50%;
      background: #f6d9d6;
      opacity: var(--swiper-pagination-bullet-opacity, 1);
    }
    ::v-deep .swiper-pagination-bullet:after {
      content: '';
      display: inline-block;
      position: relative;
      top: -8px;
      left: 14px;
      width: 60px;
      height: 2px;
      background-color: #ecb3ac;
    }
    ::v-deep .swiper-pagination-bullet:nth-child(3)::after {
      height: 0px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      opacity: var(--swiper-pagination-bullet-opacity, 1);
      background: #ecb3ac !important;
    }
  }
  .orthodontic_swiper_point {
    ::v-deep .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: -5px;
      left: 4px;
      width: 100%;
      // top: 161vw;
    }

    ::v-deep
      .swiper-horizontal
      > .swiper-pagination-bullets
      .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets
      .swiper-pagination-bullet {
      margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 29px);
    }
    ::v-deep .swiper-pagination-bullet {
      width: var(
        --swiper-pagination-bullet-width,
        var(--swiper-pagination-bullet-size, 10px)
      );
      height: var(
        --swiper-pagination-bullet-height,
        var(--swiper-pagination-bullet-size, 10px)
      );
      display: inline-block;
      border-radius: 50%;
      background: #eef5e4;
      opacity: var(--swiper-pagination-bullet-opacity, 1);
    }
    ::v-deep .swiper-pagination-bullet:after {
      content: '';
      display: inline-block;
      position: relative;
      top: -11px;
      left: 8px;
      width: 60px;
      height: 2px;
      background-color: #aace79;
    }
    ::v-deep .swiper-pagination-bullet:nth-child(2)::after {
      height: 0px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      opacity: var(--swiper-pagination-bullet-opacity, 1);
      background: #aace79 !important;
    }
  }
  .orthodontic_table_swiper {
    ::v-deep .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 38px;
      left: 4px;
      width: 100%;
      // top: 161vw;
    }

    ::v-deep
      .swiper-horizontal
      > .swiper-pagination-bullets
      .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets
      .swiper-pagination-bullet {
      margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 29px);
    }
    ::v-deep .swiper-pagination-bullet {
      width: var(
        --swiper-pagination-bullet-width,
        var(--swiper-pagination-bullet-size, 10px)
      );
      height: var(
        --swiper-pagination-bullet-height,
        var(--swiper-pagination-bullet-size, 10px)
      );
      display: inline-block;
      border-radius: 50%;
      background: #eef5e4;
      opacity: var(--swiper-pagination-bullet-opacity, 1);
    }
    ::v-deep .swiper-pagination-bullet:nth-child(2)::after {
      content: '';
      display: inline-block;
      position: relative;
      top: -11px;
      left: 8px;
      width: 60px;
      height: 0px;
      background-color: #aace79;
    }
    ::v-deep .swiper-pagination-bullet:after {
      content: '';
      display: inline-block;
      position: relative;
      top: -11px;
      left: 8px;
      width: 60px;
      height: 2px;
      background-color: #aace79;
    }
    ::v-deep .swiper-pagination-bullet:nth-child(3)::after {
      height: 0px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      opacity: var(--swiper-pagination-bullet-opacity, 1);
      background: #aace79 !important;
    }
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
  .pic-one .text-center:nth-child(1):after {
    content: '牙齒排列不整齊';
  }
  .pic-one .text-center:nth-child(2):after {
    content: '牙齒變色';
  }
  .pic-two .text-center:nth-child(1):after {
    content: '牙齒出現磨損';
  }
  .pic-two .text-center:nth-child(2):after {
    content: '牙齒縫隙過大';
  }
  .pic-three .text-center:nth-child(1):after {
    content: '四環素牙';
  }
  .pic-three .text-center:nth-child(2):after {
    content: '齒列擠擁';
  }
  .pic-four .text-center:nth-child(1):after {
    content: '牙齒過小';
  }
  .pic-four .text-center:nth-child(2):after {
    content: '四環素牙';
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
    height: 96%;
    justify-self: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 117px;
    top: 87px;
  }
  //   .header:after{
  //     content: "";
  //     background-image: url(https://img.cmereye.com/i/2022/09/26/63314f0598440.png);
  //     background-repeat: repeat-x;
  //     background-position: center 20px;
  //     height: 96px;
  //     width: 100%;
  //     position: absolute;
  //     z-index: -11;
  //     left: 0px;
  //     bottom: 0px;
  //     animation-name: wave1;
  //     animation-duration: 20s;
  //     animation-timing-function: linear;
  //     animation-iteration-count: infinite;
  //     -webkit-animation-name: wave1;
  //     -webkit-animation-duration: 20s;
  //     -webkit-animation-timing-function: linear;
  //     -webkit-animation-iteration-count: infinite;
  //   }
  //   .header:before {
  //     content: "";
  //     background-image: url(https://img.cmereye.com/i/2022/09/26/63314ea491c4a.png);
  //     background-repeat: repeat-x;
  //     background-position: center 20px;
  //     height: 96px;
  //     width: 100%;
  //     position: absolute;
  //     z-index: -12;
  //     left: 0px;
  //     bottom: 0px;
  //     animation-name: wave2;
  //     animation-duration: 20s;
  //     animation-timing-function: linear;
  //     animation-iteration-count: infinite;
  //     -webkit-animation-name: wave2;
  //     -webkit-animation-duration: 20s;
  //     -webkit-animation-timing-function: linear;
  //     -webkit-animation-iteration-count: infinite;
  // }
}
@media only screen and (max-width: 1540px) and (min-width: 800px) {
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
  .head_banner_img img {
    max-width: 100% !important;
  }
  .banner-title {
    span {
      font-size: 35.1823px !important;
    }
  }
}
</style>
