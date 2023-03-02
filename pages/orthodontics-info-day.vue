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
  title: capitalize(t('pages.orthodontics.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.orthodontics.description'),
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
          src="https://static.cmereye.com/imgs/2023/01/893b7183218da994.jpg"
          srcset="
            https://static.cmereye.com/imgs/2023/01/e95241522f910f10.jpg 400w,
            https://static.cmereye.com/imgs/2023/01/e95241522f910f10.jpg 640w,
            https://static.cmereye.com/imgs/2023/01/893b7183218da994.jpg
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
          <div class="head_banner_date">
            <img
              src="https://static.cmereye.com/static/lkximg/smilepartner/date.svg"
              srcset="
                https://static.cmereye.com/imgs/2023/02/a62d99af787f3198.png
              "
              alt=""
            />
          </div>
          <div class="head_banner_text justify-self-center">
            <div class="head_banner_text_p">
              <div class="head_banner_img" style="display: block">
                <div class="head_text_img">
                  <img
                    class="m-auto"
                    src="https://static.cmereye.com/imgs/2023/01/8bb90e1811a303c5.png"
                    alt=""
                  />
                  <p class="text-pink">箍牙資訊日</p>
                  <p class="point">
                    <!-- <a href="https://forms.gle/nb9gUEx14RmBMpRa9">立即報名</a>
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/f3a5bb3be1987933.png"
                      alt=""
                    /> -->
                    <a href="https://forms.gle/nb9gUEx14RmBMpRa9">
                      <img
                        src="https://static.cmereye.com/imgs/2023/01/eb0d383e2745082b.png"
                        alt=""
                      />
                    </a>
                  </p>
                </div>
                <div class="banner-text">
                  <span>
                    牙齒不齊或有咬合問題？箍牙療程或可幫你解決！箍牙資訊日當天會有3大焦點活動，包括專人分享箍牙資訊、為參加者即場提供口腔掃描檢查，以及一對一諮詢，為你解答疑問。有意開始矯齒療程的你，即刻填表參加啦！名額有限，先到先得。
                  </span>
                </div>
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

    <div class="page_orthodontic sm:pt-38 md:mt-0 mt-10">
      <div class="page_container flex md:flex-row pcShow">
        <div class="page_container">
          <div class="orthodontic_title step_title md:mb-20 z-10">
            <h2
              class="text-primary font-normal text-xl md:text-2xl inline-block relative"
            >
              活動流程
            </h2>
          </div>
        </div>
        <div class="back-img mt-10">
          <div class="">
            <div class="flex md:flex-row py-20 mb-box">
              <div>
                <div class="huodong-step">
                  <div class="steo-box">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/8fb6d07f065729e8.png"
                      alt=""
                    />
                    <div class="step-text">
                      <p class="light-pink">
                        <span class="light-pink">
                          進行口腔掃描檢查及口腔全景X光影像檢查，
                        </span>
                      </p>
                      <p>以建立你的牙齒資料，包括牙齒排列及牙槽骨狀況等</p>
                    </div>
                  </div>

                  <!-- <img
                    src="https://static.cmereye.com/imgs/2023/02/dfc264624e1b15be.jpg"
                    alt=""
                    class="mbShow"
                  />" -->
                  <div class="steo-box">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/6d5510d0e0c0fe66.png"
                      alt=""
                    />
                    <div class="step-text">
                      <p>
                        前往牙科診療室，<span class="light-pink">檢查口腔</span>
                      </p>
                    </div>
                  </div>
                  <div class="steo-box">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/556289dbc42a7d41.png"
                      alt=""
                    />
                    <div class="step-text">
                      <p>
                        <span class="light-pink">解說及分析檢查結果，</span>
                      </p>
                      <p>並了解你的療程期望等，再作出初步療程建議</p>
                    </div>
                  </div>
                </div>
                <div class="details_to">
                  <p>我們提供3大矯齒療程：</p>
                  <div class="details_text">
                    <a
                      href="https://smilepartner.hk/clear-aligners"
                      class="btn"
                    >
                      <div class="flex items-center btn-t justify-center;">
                        <span class="pr-2" style="color: #666">
                          隱形牙箍全方位矯齒
                        </span>
                        <img
                          src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div class="details_text">
                    <a
                      href="https://smilepartner.hk/clear-aligners-lite"
                      class="btn"
                    >
                      <div class="flex items-center btn-t justify-center;">
                        <span class="pr-2" style="color: #666">
                          隱形牙箍簡易版
                        </span>
                        <img
                          src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div class="details_text">
                    <a
                      href="https://smilepartner.hk/clear-aligners-child"
                      class="btn"
                    >
                      <div class="flex items-center btn-t justify-center;">
                        <span class="pr-2" style="color: #666">
                          隱形牙箍兒童專線
                        </span>
                        <img
                          src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="huodong-img-box pcShow">
                <div class="img-huodong">
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/dfc264624e1b15be.jpg"
                    alt=""
                  />
                </div>
                <div class="img-huodong">
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/aff4e7ec0ef5d705.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mbShow">
        <div
          class="orthodontic_title step_title md:mb-20 z-10 page_container"
          style="padding-left: 44px"
        >
          <h2
            class="text-primary font-normal text-xl md:text-2xl inline-block relative"
          >
            活動流程
          </h2>
        </div>
        <div class="back-img mt-10">
          <div class="">
            <div class="flex md:flex-row py-20 mb-box">
              <div>
                <div class="huodong-step">
                  <div class="steo-box page_container">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/8fb6d07f065729e8.png"
                      alt=""
                    />
                    <div class="step-text">
                      <p>
                        <span class="light-pink"
                          >進行口腔掃描檢查及口腔全景X光影像檢查，</span
                        >
                        以建立你的牙齒資料，包括牙齒排列及牙槽骨狀況等
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/02/dfc264624e1b15be.jpg"
                    alt=""
                  />
                  <div class="steo-box step-two page_container">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/6d5510d0e0c0fe66.png"
                      alt=""
                    />
                    <div class="step-text">
                      <p>
                        前往牙科診療室，<br /><span class="light-pink"
                          >牙醫會為你檢查口腔</span
                        >
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/aff4e7ec0ef5d705.jpg"
                    alt=""
                  />
                  <div class="steo-box">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/556289dbc42a7d41.png"
                      alt=""
                    />
                    <div class="step-text pt-10">
                      <p>
                        <span class="light-pink"
                          >牙醫會為你解說及分析檢查結果，</span
                        >並了解你的療程期望等，再作出初步療程建議
                      </p>
                    </div>
                  </div>
                </div>
                <div class="details_to">
                  <p class="text-center pt-5">我們提供3大矯齒療程：</p>
                  <div class="details_text">
                    <a
                      href="https://smilepartner.hk/clear-aligners"
                      class="btn"
                    >
                      <div class="flex items-center btn-t justify-center;">
                        <span class="pr-2" style="color: #666">
                          隱形牙箍全方位矯齒
                        </span>
                        <img
                          src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div class="details_text">
                    <a
                      href="https://smilepartner.hk/clear-aligners-lite"
                      class="btn"
                    >
                      <div class="flex items-center btn-t justify-center;">
                        <span class="pr-2" style="color: #666">
                          隱形牙箍簡易版
                        </span>
                        <img
                          src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <div class="details_text">
                    <a
                      href="https://smilepartner.hk/clear-aligners-child"
                      class="btn"
                    >
                      <div class="flex items-center btn-t justify-center;">
                        <span class="pr-2" style="color: #666">
                          隱形牙箍兒童專線
                        </span>
                        <img
                          src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page_container">
        <div
          class="orthodontic_title_step text-center sm:text-center md:pb-10 py-8 z-10 page_container"
        >
          <h2
            class="text-primary font-normal text-xl md:text-2xl inline-block relative"
          >
            參加方法
          </h2>
        </div>
        <div class="join-box">
          <div class="flex items-end join join-form">
            <a href="https://forms.gle/nb9gUEx14RmBMpRa9" class="flex">
              <img
                src="https://static.cmereye.com/imgs/2023/01/bf7f41e9bfcb4d23.png"
                alt=""
              />
              <span>填表報名</span>
            </a>
          </div>
          <div class="flex items-end join join-phone">
            <a href="tel:9512 8192" class="flex">
              <img
                src="https://static.cmereye.com/imgs/2023/01/3427fbfce5722fa2.png"
                alt=""
              />
              <span>致電報名</span>
            </a>
          </div>
          <div class="flex items-end join join-whats">
            <a href="https://bit.ly/3GR2yuP" class="flex">
              <img
                src="https://static.cmereye.com/imgs/2023/01/6a64a5e2e37617f9.png"
                alt=""
              />
              <span>WhatsApp報名</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.light-pink {
  color: #e59297;
  font-weight: 550;
}
.orthodontic_form_background {
  /* Pink Light */
  background: #fcf4f2;
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
  align-items: center;
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
.head_text_img {
  .text-pink {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 39.1823px;
    line-height: 55px;
    /* identical to box height */

    /* pink */

    color: #ecb3ac;
  }
  .point {
    display: flex;
    justify-content: center;
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 38.0384px;
    line-height: 53px;

    /* white */

    color: #ffffff;
    // background: url('https://static.cmereye.com/imgs/2023/01/1c17925e09477b10.png')
    //   no-repeat;
    // background-size: 100%;
    // transform: matrix(0.97, 0, -0.28, 1, 0, 0);
  }
}
.banner-text {
  text-align: left;
  padding-top: 30px;
}

@media screen and(min-width:768px) {
  .light-pink {
    color: #e59297;
    font-weight: 550;
    font-size: 18px;
  }
  ///小圆圈
  .head_banner_date {
    display: flex;
    left: 35%;
    position: absolute;
    text-align: center;

    width: 297px;
    height: 297px;
    align-items: center;
    justify-content: center;
  }
  .head_banner_date p:nth-child(1) {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 55px;
    /* identical to box height */
    border-bottom: 2px solid #eeada4;
    /* pink */

    color: #eeada4;
  }
  .head_banner_date p:nth-child(2) {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }
  .head_banner_date span {
    color: #fff;
    background-color: #eeada4;
    padding: 5px 10px;
  }
  .head_banner_date p:nth-child(4) {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    padding-top: 10px;
  }
  .head_banner_date p:nth-child(5) {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 33px;
  }
  /// 小圆圈
  .join-form:hover span {
    color: #ecb3ac;
  }
  .join-form:hover img {
    content: url('https://static.cmereye.com/imgs/2023/01/b4644f39e39fbe9f.png');
  }
  .join-phone:hover span {
    color: #ecb3ac;
  }
  .join-phone:hover img {
    content: url('https://static.cmereye.com/imgs/2023/01/f7834ff1fcd5e5bc.png');
  }
  .join-whats:hover span {
    color: #ecb3ac;
  }
  .join-whats:hover img {
    content: url('https://static.cmereye.com/imgs/2023/01/8305ececbea592a2.png');
  }
  .join-box {
    display: flex;
    justify-content: space-around;
  }
  .join {
    border-bottom: 1px solid #666666;
    padding: 10px 38px;
    margin-bottom: 80px;
    cursor: pointer;
    span {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      /* identical to box height */

      display: flex;
      align-items: center;
      text-align: center;

      /* Teeth Grey */
      padding-left: 10px;
      color: #666666;
    }
  }
  .page_body_header_banner .head_banner_text .head_banner_text_p {
    text-align: center;
  }
  .page_body_header_banner .head_banner_text .head_banner_text_p p {
    padding: 6px 0;
  }
  .details_to {
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: #666666;
    }
  }
  .steo-box {
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 25px;
      color: #666666;
    }
  }
  .steo-box:nth-child(3) {
    margin-top: 142px;
    margin-bottom: 73px;
  }
  .steo-box:nth-child(2) .step-text {
    position: absolute;
    right: 98px;
    top: -16px;
  }
  .steo-box:nth-child(2) img {
    position: absolute;
    left: 33px;
    top: -57px;
  }
  .steo-box {
    display: flex;
    position: relative;
    margin-bottom: 100px;
    img {
      position: absolute;
      left: -65px;
      top: -57px;
    }
  }
  .huodong-img-box {
    flex: 0.9;
  }
  .img-huodong {
    padding: 13px 0;
  }
  .page_orthodontic .orthodontic_title h2 {
    padding-top: 33px;
  }
  .page_orthodontic .orthodontic_title {
    writing-mode: vertical-lr;
    /* padding-top: 100px; */
    line-height: 30px;
    /* padding-right: 33px; */
    letter-spacing: 0.2em;
    width: max-content;
  }
  .page_orthodontic .orthodontic_title h2::before {
    position: absolute;
    content: '';
    left: 0;
    background-image: url(https://img.cmereye.com/i/2022/09/26/h2_title.svg);
    width: 59px;
    height: 74px;
    background-repeat: no-repeat;
    background-size: 100%;
    left: -22px;
    top: 0;
    bottom: 73px;
    margin: auto;
    z-index: -2;
  }
  .page_orthodontic .orthodontic_title_step h2::before {
    position: absolute;
    content: '';
    left: 0;
    background-image: url(https://img.cmereye.com/i/2022/09/26/h2_title.svg);
    width: 59px;
    height: 74px;
    background-repeat: no-repeat;
    background-size: 100%;
    left: -104px;
    right: 0;
    bottom: -10px;
    display: flex;
    margin: auto;
    z-index: -2;
    justify-content: center;
  }

  .details_to {
    flex: 1;
    .details_text {
      width: 434px;
      p {
        /* regular font 18 */

        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;

        /* green */

        color: #666666;
      }
      .btn {
        .btn-t {
          width: 350px;
          padding: 19px 0;
          display: flex;
          text-align: center;
          margin-top: 24px;
          background: #ffffff;
          border: 1px solid #cdcdcd;
          justify-content: center;
        }
      }
    }
    .btn:hover .btn-t {
      background: #ecb3ac;
      /* light grey */

      border: 1px solid #cdcdcd;
    }
    .btn:hover .btn-t span {
      color: #fff !important;
    }
    .btn:hover .btn-t img {
      content: url('https://static.cmereye.com/imgs/2023/01/b26885e327668c8b.png');
    }
  }
  .back-img {
    .parent_box {
      .work_z_person {
        display: flex;
        justify-content: flex-end;
        img {
          width: 66% !important;
        }
      }
    }
    .work_z_person_box {
      flex: 1.2;
      position: relative;
      .work_z_person {
        z-index: 11;
        position: relative;
        img {
          width: 50%;
        }
      }
      .w_person_left {
        img {
          width: 70% !important;
        }
      }
      .w_coff_left {
        position: absolute;
        bottom: 100px !important;
        right: -15px !important;
        z-index: 10;
        img {
          width: 90% !important;
        }
      }
      .new_flower {
        bottom: 208px !important;
        right: -15px !important;
      }
    }
  }

  .swiper-box {
    background-color: #fff;
    position: relative;
    z-index: 9;
    .title {
      margin: auto;
      padding-top: 139px;
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
    background-image: url(https://static.cmereye.com/imgs/2023/01/893b7183218da994.jpg);
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
        margin-top: 0px;
      }
    }
  }
}
@media screen and(max-width:768px) {
  ///小圆圈
  .head_banner_date {
    display: flex;
    right: 10px;

    top: 117px;
    position: absolute;
    text-align: center;
    color: #ecb3ac;

    align-items: center;
    justify-content: center;
  }
  .head_banner_date p:nth-child(1) {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 38px;
    /* identical to box height */
    border-bottom: 2px solid #eeada4;
    /* pink */

    color: #eeada4;
  }
  .head_banner_date p:nth-child(2) {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
  .head_banner_date span {
    color: #fff;
    background-color: #eeada4;
    padding: 5px 10px;
  }
  .head_banner_date p:nth-child(4) {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    padding-top: 10px;
  }
  .head_banner_date p:nth-child(5) {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
  /// 小圆圈
  .page_orthodontic .orthodontic_title_step h2 {
    text-align: center;
  }
  .page_orthodontic .orthodontic_title_step h2::before {
    position: absolute;
    content: '';
    left: 0;
    background-image: url(https://img.cmereye.com/i/2022/09/26/h2_title.svg);
    width: 59px;
    height: 74px;
    background-repeat: no-repeat;
    background-size: 100%;
    left: -104px;
    right: 0;
    bottom: -10px;
    display: flex;
    margin: auto;
    z-index: -2;
    justify-content: center;
  }
  .join-form:hover span {
    color: #ecb3ac;
  }
  .join-form:hover img {
    content: url('https://static.cmereye.com/imgs/2023/01/b4644f39e39fbe9f.png');
  }
  .join-phone:hover span {
    color: #ecb3ac;
  }
  .join-phone:hover img {
    content: url('https://static.cmereye.com/imgs/2023/01/f7834ff1fcd5e5bc.png');
  }
  .join-whats:hover span {
    color: #ecb3ac;
  }
  .join-whats:hover img {
    content: url('https://static.cmereye.com/imgs/2023/01/8305ececbea592a2.png');
  }
  .join-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }
  .join {
    border-bottom: 1px solid #666666;
    padding: 10px 0;
    text-align: center;
    width: 100%;
    margin-bottom: 33px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    span {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      /* identical to box height */

      display: flex;
      align-items: center;
      text-align: center;

      /* Teeth Grey */
      padding-left: 10px;
      color: #666666;
    }
  }
  .banner-text {
    text-align: left;
    padding-top: 155px;
    span {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
      /* or 194% */

      text-align: justify;

      color: #666666;
    }
  }
  .steo-box:nth-child(1) img {
    padding-left: 10px;
  }
  .head_text_img {
    .text-pink {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 39.1823px;
      line-height: 55px;
      /* identical to box height */

      /* pink */
      margin: 4px 0;
      color: #ecb3ac !important;
    }
    .point {
      display: flex;

      color: #ffffff !important;
      // background: url(https://static.cmereye.com/imgs/2023/01/1c17925e09477b10.png)
      //   no-repeat;
      // background-size: 68%;
      // padding: 5px 0;
      // background-position: center;
      // transform: matrix(0.97, 0, -0.28, 1, 0, 0);
    }
  }
  .page_body_header_banner .head_banner_text p {
    position: initial !important;
  }
  .details_to {
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: #666666;
    }
  }
  .steo-box {
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: #666666;
    }
  }
  .step-two {
    position: relative;
    .step-text {
      position: absolute;
      left: 112px;
      bottom: 13px;
    }
  }

  .steo-box {
    display: flex;
    flex-direction: row;
    padding: 18px 15px;
  }
  .head_banner_img {
    position: relative;
  }
  .head_banner_img img {
    max-width: 100% !important;
  }
  .head_text_img {
    position: absolute;
    top: -107px;
    left: 0;
    right: 0;
    text-align: center;
  }
  .orthodontic_condition::before {
    position: absolute;
    content: '';
    width: 12.5vw;
    height: 6.7vw;
    background-image: url(https://img.cmereye.com/i/2022/09/27/6332aefd894d4.png);
    bottom: -33px;
    left: 0;
    right: 0;
    margin: auto;
    background-size: 100%;
    background-repeat: no-repeat;
    animation: translateX 1s ease-in-out alternate infinite;
  }
  .swiper {
    padding-bottom: 62px;
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
    ::v-deep .swiper-pagination-bullet:nth-child(4)::after {
      height: 0px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      opacity: var(--swiper-pagination-bullet-opacity, 1);
      background: #ecb3ac !important;
    }
  }

  .orthodontic_table_swiper {
    ::v-deep .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 82px;
      left: 49px;
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

  ::v-deep .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none !important;
  }
  ::v-deep .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none !important;
  }
  ::v-deep .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: '' !important;
  }
  // 蒙版
  .type_box:hover .mask1 {
    opacity: 0;
    overflow: hidden;
    transition: all ease-in-out 1s 0s;
  }
  .type_box:hover .mask2 {
    opacity: 0;
    overflow: hidden;
    transition: all ease-in-out 1s 0s;
  }
  .type_box:hover .mask3 {
    opacity: 0;
    overflow: hidden;
    transition: all ease-in-out 1s 0s;
  }
  .type_box:hover .mask4 {
    opacity: 0;
    overflow: hidden;
    transition: all ease-in-out 1s 0s;
  }
  .type_box {
    position: relative;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
    display: flex;
    justify-content: center;
    .mask1 {
      position: absolute;
      background: rgba 0, 0, 0, 0.7;
      background-image: url(https://static.cmereye.com/imgs/2023/01/ebe92ef248ef0d3a.png);
      background-repeat: no-repeat;
      background-size: unset;
      background-position: center;
      z-index: 999;
      width: 100%;
      height: 88%;
      top: 8px;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;

        color: #ffffff;
      }
    }
    .mask2 {
      position: absolute;
      background: rgba 0, 0, 0, 0.7;
      background-image: url(https://static.cmereye.com/imgs/2023/01/73542f811a9c134a.png);
      background-repeat: no-repeat;

      background-size: 94%;

      background-position: center;
      z-index: 999;
      width: 100%;
      height: 88%;
      top: 8px;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;

        color: #ffffff;
      }
    }
    .mask3 {
      position: absolute;
      background: rgba 0, 0, 0, 0.7;
      background-image: url(https://static.cmereye.com/imgs/2023/01/316c5a2148216735.png);
      background-repeat: no-repeat;
      background-size: unset;
      background-position: center;
      z-index: 999;
      width: 100%;
      height: 88%;
      top: 8px;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;

        color: #ffffff;
      }
    }
    .mask4 {
      position: absolute;
      background: rgba 0, 0, 0, 0.7;
      background-image: url(https://static.cmereye.com/imgs/2023/01/e5a4f2a232b11430.png);
      background-repeat: no-repeat;
      background-size: unset;
      background-position: center;
      z-index: 999;
      width: 100%;
      height: 88%;
      top: 8px;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;

        color: #ffffff;
      }
    }
  }
  // 蒙版 end
  .title {
    margin: auto;
  }
  .pos-re {
    position: relative;
  }
  .mb-box {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    padding-top: 5px;
  }
  .mb-box-two {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    padding-top: 10vw;
    padding-top: 107vw;
  }
  .mb-box-three {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    padding-top: 100vw;
  }
  .mb-box-four {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    padding-top: 75vw;
  }
  .new_mb_box {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
  }
  .details_to {
    flex: 1;
    .details_text {
      p {
        /* regular font 18 */

        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;

        /* green */

        color: #666666;
      }
      .btn {
        .btn-t {
          width: 350px;
          padding: 19px 0;
          display: flex;
          text-align: center;
          margin: 34px auto 0 auto;
          background: #ffffff;
          border: 1px solid #cdcdcd;
          justify-content: center;
        }
      }
    }
    .btn:hover .btn-t {
      background: #ecb3ac;
      /* light grey */

      border: 1px solid #cdcdcd;
    }
    .btn:hover .btn-t span {
      color: #fff !important;
    }
    .btn:hover .btn-t img {
      content: url('https://static.cmereye.com/imgs/2023/01/b26885e327668c8b.png') !important;
    }
  }
  .back-img {
    .parent_box {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      .work_z_person {
        display: flex;
        justify-content: flex-end;
        img {
          width: 66% !important;
        }
      }
    }
    .work_z_person_box_mb {
      position: absolute;
      left: 0;
      top: -44px;
      width: 100%;
    }
    .mb_person_box {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0px;
    }
    .work_z_person_box {
      flex: 1.2;

      .work_z_person {
        z-index: 11;
        position: relative;
        img {
          width: 55%;
        }
      }
      .w_person_left {
        img {
          width: 70% !important;
        }
      }
      .w_coff_left {
        position: absolute;
        left: 40vw !important;
        top: 27vw !important;
        z-index: 10;
        img {
          width: 100% !important;
        }
      }
      .new_flower {
        bottom: -18vw !important;
        right: 0 !important;
      }
    }
  }

  .page_body_header_banner .page_body_header_fixed {
    padding: 0px 20px 0px 20px !important;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -4% !important;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9;
  }
  .page_md_con {
    padding-left: 0;
    padding-right: 0;
  }
  .address-title {
    padding-left: 15px;
  }
  .address-one .address-time {
    padding-left: 15px;
    padding-right: 15px;
  }
  .address-two .address-time {
    padding-left: 15px;
    padding-right: 15px;
  }
  .tel-num {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
  .page_body_header_banner {
    height: 200vw;
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
    // padding-left: 12vw;
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
    margin-top: 128%;
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
  .head_banner_date {
    left: 27%;
  }
  .banner-text {
    text-align: left;
    padding-top: 8px !important;
    width: 96%;
    line-height: 27px;
  }
  .head_banner_img .head_text_img {
    img {
      max-width: 79% !important;
    }
    p {
      font-size: 19px;
      line-height: 29px;
    }
    .point {
      width: 55%;
      text-align: center;
      margin: 0 auto;
    }
  }
  .steo-box img {
    position: absolute;
    left: -34px;
    top: -57px;
  }
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
@media (min-width: 2000px) and (max-width: 2580px) {
  .page_body_header_banner .head_banner_text {
    height: 70%;
  }
}
</style>
