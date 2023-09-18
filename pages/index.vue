<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import youtubePlay from '../composables/youtubePlayer/index.vue'
import form from '../composables/form/form.vue'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
import 'swiper/css/pagination' // 轮播图底面的小圆点
import { createApp } from 'vue'

const modules = [Autoplay, Pagination, Navigation, Scrollbar]
const videoArray = [{ src: 'https://www.youtube.com/watch?v=3Aa6VnRgQow' }]

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
const videoSwiperOption = {
  // watchSlidesProgress: true,
  // slidesPerView: 'auto',
  // centeredSlides: true,
  // loop: true,
  // loopedSlides: 5,
  // autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    //clickable :true,
  },
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
// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  // title: capitalize(t('pages.index.title')),
  title: '希瑪微笑矯齒 | 提供各種牙齒美容服務',
  meta: [
    {
      name: 'description',
      content: t('pages.index.description'),
    },
  ],
}))

const reForm = reactive({
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
    return true
  }
}
</script>

<template>
  <div>
    <div class="mbShow">
      <slot name="header">
        <PageNavbar />
      </slot>
    </div>
    <!-- Google tag (gtag.js) -->
    <div class="page_body_header z-0">
      <div class="page_body_header_banner">
        <!-- 移动端图暂时未更换，因为设计不上班 2023.9.8 -->
        <img
          class="page_body_header_banner_img sm:invisible"
          src="https://static.cmereye.com/imgs/2023/09/977f661d1787e16c.jpg"
          srcset="
            https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/Group%20322.avif 400w,
            https://static.cmereye.com/static/lkximg/cmerdental_backup/sharing/Group%20322.avif 640w,
            https://static.cmereye.com/imgs/2023/09/977f661d1787e16c.jpg
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
              <div class="head_banner_img">
                <img
                  class="m-auto"
                  src="https://static.cmereye.com/imgs/2022/10/58b320176831a3c1.png"
                  alt=""
                  srcset=""
                />
              </div>
              <!-- <h2 class="text-pink text-centee12r text-4xl mb-6">希瑪微笑矯齒</h2> -->
              <p class="head_banner_desc_one">
                {{ $t('banners.main_desc_one') }}
              </p>
              <p class="head_banner_desc_two">
                {{ $t('banners.main_desc_two') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <slot name="header">
      <PageNavbar class="pcShow" />
    </slot>

    <div class="page_orthodontic pb-20 sm:py-38 md:mt-0 mt-10">
      <div class="">
        <div
          class="orthodontic_title step_title text-center sm:text-center mb-20 z-10"
        >
          <h2
            class="text-primary font-normal text-xl md:text-2xl inline-block relative"
          >
            最新消息
          </h2>
        </div>

        <div class="orthodontic_step page_container">
          <div class="mb-20 orthodontic_swiper">
            <div class="mt-5">
              <swiper
                ref="mySwiper"
                :modules="modules"
                :options="swiperOption"
                :pagination="{ clickable: true }"
                :loop="true"
                :autoplay="{ delay: 5000 }"
                :slides-per-view="1"
                :space-between="50"
                navigation
                :scrollbar="{ draggable: true }"
              >
                <swiper-slide>
                  <div class="orthodontic_pic">
                    <div class="text-center">
                      <nuxt-link
                        href="https://smilepartner.hk/clear-aligners"
                        class="banner_home_page"
                      >
                        <img
                          src="https://static.cmereye.com/imgs/2023/04/abfb54e9371283ac.jpg"
                          class="banner_home_page"
                          srcset="
                            https://static.cmereye.com/imgs/2023/03/d2069aab52930dc3.jpg 400w,
                            https://static.cmereye.com/imgs/2023/03/d2069aab52930dc3.jpg 640w,
                            https://static.cmereye.com/imgs/2023/04/abfb54e9371283ac.jpg
                          "
                          alt=""
                        />
                      </nuxt-link>
                    </div>
                  </div>
                </swiper-slide>
                <!-- <swiper-slide>
                  <div class="orthodontic_pic">
                    <div class="text-center">
                      <nuxt-link href="https://smilepartner.hk/clear-aligners">
                        <img
                          src="https://static.cmereye.com/imgs/2023/01/759ee2d2643dab62.jpg"
                          srcset="
                            https://static.cmereye.com/imgs/2023/01/4630d1c3a38ff1a3.jpg 400w,
                            https://static.cmereye.com/imgs/2023/01/4630d1c3a38ff1a3.jpg 640w,
                            https://static.cmereye.com/imgs/2023/01/759ee2d2643dab62.jpg
                          "
                          alt=""
                        />
                      </nuxt-link>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="orthodontic_pic">
                    <div class="text-center">
                      <nuxt-link href="https://smilepartner.hk/clear-aligners">
                        <img
                          src="https://static.cmereye.com/imgs/2023/01/759ee2d2643dab62.jpg"
                          srcset="
                            https://static.cmereye.com/imgs/2023/01/4630d1c3a38ff1a3.jpg 400w,
                            https://static.cmereye.com/imgs/2023/01/4630d1c3a38ff1a3.jpg 640w,
                            https://static.cmereye.com/imgs/2023/01/759ee2d2643dab62.jpg
                          "
                          alt=""
                        />
                      </nuxt-link>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="orthodontic_pic">
                    <div class="text-center">
                      <nuxt-link href="https://smilepartner.hk/clear-aligners">
                        <img
                          src="https://static.cmereye.com/imgs/2023/01/759ee2d2643dab62.jpg"
                          srcset="
                            https://static.cmereye.com/imgs/2023/01/4630d1c3a38ff1a3.jpg 400w,
                            https://static.cmereye.com/imgs/2023/01/4630d1c3a38ff1a3.jpg 640w,
                            https://static.cmereye.com/imgs/2023/01/759ee2d2643dab62.jpg
                          "
                          alt=""
                        />
                      </nuxt-link>
                    </div>
                  </div>
                </swiper-slide> -->

                <!-- <div slot="pagination" class="swiper-pagination"></div>
              <div slot="button-prev" class="swiper-button-prev"></div>
              <div slot="button-next" class="swiper-button-next"></div> -->
              </swiper>
            </div>
          </div>
        </div>
      </div>

      <div class="orthodontic_compete pb-28">
        <div class="page_container">
          <div class="flex md:flex-row flex-col">
            <div
              class="orthodontic_title text-left sm:text-center sm:-my-16 sm:my-28 md:pb-0 pb-20"
            >
              <h2
                class="text-primary font-normal text-xl md:text-2xl inline-block relative"
              >
                選擇我們
              </h2>
            </div>
            <div class="w-full sm:px-4 compete_bac pcShow">
              <div class="compete_one">
                <img
                  src="https://static.cmereye.com/imgs/2022/10/12403c3c5397b595.png"
                  alt=""
                />
                <p class="">
                  <span class="text-pink">上市公司旗下中心</span><br />
                  「希瑪微笑矯齒」屬上市公司「香港希瑪眼科集團」旗下的牙齒美容品牌，絕無隱藏收費、不硬銷。
                </p>
              </div>
              <div class="compete_two">
                <img
                  src="https://static.cmereye.com/imgs/2022/10/fc164c87854c5a6f.png"
                  alt=""
                />
                <p class="">
                  <span class="text-pink">註冊牙醫主理！療程更高效、安心</span
                  ><br />
                  本中心所有療程均由註冊牙醫主理，開始療程前會先為你全面檢查口腔及牙齦狀況，了解你的需要，同時亦會解釋相關療程風險，令你可以安心享受高效又安全的牙齒美容服務。
                </p>
              </div>
              <div class="compete_three">
                <img
                  src="https://static.cmereye.com/imgs/2022/10/b882ae46d0f992d1.png"
                  alt=""
                />

                <p class="">
                  <span class="text-pink"
                    >致力滿足你生活上各種專屬牙齒外觀追求</span
                  ><br />
                  我們提供高品質及多元化的牙齒美容服務，包括隱形牙箍矯齒、即日瓷貼片、美白牙齒服務(如激光美白、藍光美白、診所漂牙、家居牙齒美白套裝)，為你度身設計合適的療程，致力滿足你生活上遇到的各種專屬牙齒外觀追求。
                </p>
              </div>

              <div class="compete_bac_box">
                <img
                  src="https://static.cmereye.com/imgs/2022/10/621597fce2389c32.jpg"
                  alt=""
                  class="compete_bac_1"
                />
                <img
                  src="https://static.cmereye.com/imgs/2022/10/78d8c98e73ff22d3.jpg"
                  alt=""
                  class="compete_bac_2"
                />
              </div>
            </div>

            <div
              class="mt-5 mbShow"
              style="display: flex; justify-content: center"
            >
              <img
                style="position: absolute"
                src="https://static.cmereye.com/imgs/2022/12/aec63414f48ca32b.jpg"
                alt=""
              />
              <swiper
                ref="mySwiper"
                :modules="modules"
                :options="swiperOption"
                :pagination="{ clickable: true }"
                :slides-per-view="1"
                :space-between="50"
                navigation
                :scrollbar="{ draggable: true }"
              >
                <swiper-slide>
                  <div class="orthodontic_compete_pic">
                    <div
                      class="text-center"
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 29vw;
                      "
                    >
                      <img
                        src="https://static.cmereye.com/imgs/2022/10/12403c3c5397b595.png"
                        alt=""
                        class="mb-4"
                      />
                      <p class="">
                        <span class="text-pink">上市公司旗下中心</span><br />
                        希瑪微笑矯齒」屬上市公司<br />
                        「香港希瑪眼科集團」旗下的牙齒美容品牌，<br />
                        絕無隱藏收費、不硬銷。
                      </p>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="orthodontic_compete_pic">
                    <div
                      class="text-center"
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 29vw;
                      "
                    >
                      <img
                        src="https://static.cmereye.com/imgs/2022/10/fc164c87854c5a6f.png"
                        alt=""
                        class="mb-4"
                      />
                      <p class="">
                        <span class="text-pink"
                          >註冊牙醫主理！療程更高效、安心</span
                        ><br />
                        本中心所有療程均由註冊牙醫主理，
                        開始療程前會先為你全面檢查口腔及牙齦狀況，
                        了解你的需要，同時亦會解釋相關療程風險，
                        令你可以安心享受高效又安全的牙齒美容服務。
                      </p>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="orthodontic_compete_pic">
                    <div
                      class="text-center"
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 29vw;
                      "
                    >
                      <img
                        src="https://static.cmereye.com/imgs/2022/10/b882ae46d0f992d1.png"
                        alt=""
                        class="mb-4"
                      />
                      <p class="">
                        <span class="text-pink"
                          >致力滿足你生活上<br />各種專屬牙齒外觀追求</span
                        ><br />
                        我們提供高品質及多元化的牙齒美容服務，
                        包括隱形牙箍矯齒、即日瓷貼片、美白牙齒服務
                        (如激光美白、藍光美白、診所漂牙、家居牙齒美白套裝)，
                        為你度身設計合適的療程，致力滿足你生活上遇到嘅各種專屬牙齒外觀追求。
                      </p>
                    </div>
                  </div>
                </swiper-slide>

                <!-- <div slot="pagination" class="swiper-pagination"></div>
              <div slot="button-prev" class="swiper-button-prev"></div>
              <div slot="button-next" class="swiper-button-next"></div> -->
              </swiper>
            </div>
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
                牙科服務
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
                      <nuxt-link to="/clear-aligners"
                        ><span
                          :class="open ? 'text-pink' : 'text-primary'"
                          class="serve"
                          >隱形牙箍全方位矯齒</span
                        ></nuxt-link
                      >
                    </DisclosureButton>
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
                      <nuxt-link to="/clear-aligners-lite"
                        ><span
                          :class="open ? 'text-pink' : 'text-primary'"
                          class="serve"
                          >隱形牙箍簡易版</span
                        ></nuxt-link
                      >
                    </DisclosureButton>
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
                      <nuxt-link to="/clear-aligners-child"
                        ><span
                          :class="open ? 'text-pink' : 'text-primary'"
                          class="serve"
                          >隱形牙箍兒童專線</span
                        ></nuxt-link
                      >
                    </DisclosureButton>
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
                      <nuxt-link to="/veneer"
                        ><span
                          :class="open ? 'text-pink' : 'text-primary'"
                          class="serve"
                          >即日瓷貼片</span
                        ></nuxt-link
                      >
                    </DisclosureButton>
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
                      <nuxt-link to="/teeth-whitening"
                        ><span
                          :class="open ? 'text-pink' : 'text-primary'"
                          class="serve"
                          >牙齒美白<br />激光、藍光、診所美白、家居牙齒美白套裝</span
                        ></nuxt-link
                      >
                    </DisclosureButton>
                  </div>
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="page_container">
        <div
          class="orthodontic_title text-left sm:text-center my-24 mb-14 sm:my-28"
        >
          <h2
            class="text-primary font-normal text-xl md:text-2xl inline-block relative"
          >
            專屬你的美齒護理
          </h2>
        </div>
        <p
          class="sm:mb-20 mb-4 text-primary text-center font-bold text-base tracking-widest-2x"
        >
          選擇適合您
          <span class="text-2xl text-green">生活方式</span>
          的美齒療程
        </p>
        <div class="Care_img">
          <div class="care_img_box">
            <img
              src="https://static.cmereye.com/imgs/2022/10/7f8895e774c0707d.png"
              srcset="
                https://static.cmereye.com/imgs/2022/10/06b5fee535ab9140.png 400w,
                https://static.cmereye.com/imgs/2022/10/06b5fee535ab9140.png 640w,
                https://static.cmereye.com/imgs/2022/10/7f8895e774c0707d.png
              "
              alt=""
              class="care_img_1"
            />
            <div class="mask1"><p>學 生</p></div>
            <img
              src="https://static.cmereye.com/imgs/2022/10/f09fc5cd9511de5f.png"
              srcset="
                https://static.cmereye.com/imgs/2022/10/4c51f846df956df4.png 400w,
                https://static.cmereye.com/imgs/2022/10/4c51f846df956df4.png 640w,
                https://static.cmereye.com/imgs/2022/10/f09fc5cd9511de5f.png
              "
              alt=""
              class="care_img_2"
            />
            <div class="mask2"><p>準新人</p></div>
          </div>

          <div class="care_img_box">
            <img
              src="https://static.cmereye.com/imgs/2022/10/64517be15bcb9dc6.png"
              srcset="
                https://static.cmereye.com/imgs/2022/10/ee5b353eca6112b5.png 400w,
                https://static.cmereye.com/imgs/2022/10/ee5b353eca6112b5.png 640w,
                https://static.cmereye.com/imgs/2022/10/64517be15bcb9dc6.png
              "
              alt=""
              class="care_img_3"
            />
            <div class="mask3"><p>職場人士</p></div>
            <img
              src="https://static.cmereye.com/imgs/2022/10/fa09cd31cee010d0.png"
              srcset="
                https://static.cmereye.com/imgs/2022/10/9ee5394e01c6bb50.png 400w,
                https://static.cmereye.com/imgs/2022/10/9ee5394e01c6bb50.png 640w,
                https://static.cmereye.com/imgs/2022/10/fa09cd31cee010d0.png
              "
              alt=""
              class="care_img_4"
            />
            <div class="mask4"><p>父 母</p></div>
          </div>
        </div>
      </div> -->
      <div class="">
        <div class="">
          <div
            class="orthodontic_title text-left sm:text-center my-24 mborthodontic_title"
          >
            <h2
              class="text-primary font-normal text-xl md:text-2xl inline-block relative"
            >
              個案分享
            </h2>
          </div>
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
                    <p class="title_pc_style">陽光型男Model</p>
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

              <div class="share-video-box">
                <div class="iframe2">
                  <iframe
                    class="pcShow"
                    width="695"
                    height="391.68"
                    src="https://www.youtube.com/embed/n0rCzW3nqh4"
                    title="【#SmilePartner隱形牙箍】上鏡、食嘢、運動零煩惱！靚女Model分享揀箍牙療程貼士"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    class="mbShow"
                    width="335"
                    height="188.79"
                    src="https://www.youtube.com/embed/n0rCzW3nqh4"
                    title="【#SmilePartner隱形牙箍】上鏡、食嘢、運動零煩惱！靚女Model分享揀箍牙療程貼士"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                <div class="share-detail-box share-top mt_10">
                  <div class="name2">
                    <p class="title_pc_style">演員兼廣告女神</p>
                    <p class="myname2">張敏潔 Kit</p>
                    <p class="pro2">隱適美全方位矯齒療程</p>
                  </div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/86a836934d935861.png"
                      alt=""
                      class="img-start2"
                    />
                    <p>牙醫全程跟進, 箍得又靚又安心</p>
                    <span
                      >度身訂造箍牙療程, 根據我嘅工作需要, 幫我調整附件粒粒,
                      令到我笑嘅時候更自然, 好貼心！</span
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
              </div>
              <!-- <span class="more-btn">查看更多</span> -->
            </div>
          </div>
        </div>
      </div>
      <component :is="form"></component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.submitBut:hover {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;
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
  background-image: url(https://static.cmereye.com/imgs/2022/10/80592775cbe20252.jpg);
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

.orthodontic_condition {
  background-image: url(https://static.cmereye.com/imgs/2022/10/2d63c3e1571ac84d.jpg);
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
  left: -70px;
  margin-top: 2px;
  font-family: 'initial';
}
// .page_orthodontic  .flex_between_items_start .sticky_step:nth-child(1) h4::before{content: 'Step 1';}
// .page_orthodontic  .flex_between_items_start .sticky_step:nth-child(2) h4::before{content: 'Step 2';}
// .page_orthodontic  .flex_between_items_start .sticky_step:nth-child(3) h4::before{content: 'Step 3';}
.page_orthodontic .flex_between_items_start:nth-child(1) > div h4::before {
  content: 'Step 1';
}
.page_orthodontic .flex_between_items_start:nth-child(2) > div h4::before {
  content: 'Step 2';
}
.page_orthodontic .flex_between_items_start:nth-child(3) > div h4::before {
  content: 'Step 3';
}

@media screen and(min-width:768px) {
  .mt_10 {
    margin-top: 315px !important;
  }
  .share-video-box {
    .img-start2 {
      position: absolute;
      width: 50px;
      top: 715px;
      /* left: 132px; */
      right: 369px;
    }

    .share-detail-box {
      .name2 {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 560px;
        right: 15%;
        align-items: flex-start;
        .title_pc_style {
          background: #ecb3ac;
          color: #fff;
          padding: 3px 10px;
          font-family: 'Songti TC';
          font-size: 21.228px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        .myname2 {
          font-family: 'Songti TC';
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 42px;
          color: #666666;
          padding-left: 0;
        }
        .pro2 {
          white-space: pre;
          font-family: 'Songti TC';
          font-style: normal;
          font-weight: 700;
          font-size: 25px;
          line-height: 35px;
          color: #aace79;
          position: relative;
          left: 45px;
        }
      }
    }
    .share-detail-box {
      padding-left: 100px !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #fff;
      opacity: 1;
      height: 220px;
      margin: 0 10px;
      margin-top: 200px;
      margin-left: 620px;
      padding-bottom: 10px;
      padding: 45px 35px 23px 35px;
      p {
        white-space: pre;
        padding: 0;
      }
      span {
        padding: 0;
      }
    }
  }
  .iframe2 {
    position: absolute;
    top: 516px;
    left: 0px;
    box-shadow: 0px 1px 16px 14px #e9f5fa;
  }

  .orthodontic_faq_list .border-pink::before,
  .orthodontic_faq_list .py-6:hover::before {
    width: 30px;
    height: 30px;
    left: 0;
    position: absolute;
    content: '';
    margin-top: 18px;
    // left: 234px;
    background-image: url(https://img.cmereye.com/i/2022/09/26/6331a9659c644.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .share-video-box {
    .img-start {
      position: absolute;
      width: 50px;
      top: 180px;
      right: 369px;
    }
    .share-detail-box {
      .name {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 20px;
        right: 15%;
        align-items: flex-start;
        .title_pc_style {
          color: #fff;
          background: #ecb3ac;
          font-family: 'Songti TC';
          font-size: 21.228px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          padding: 3px 10px;
        }
        .myname {
          font-family: 'Songti TC';
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 42px;
          color: #666666;
          padding-left: 0;
        }
        .pro {
          white-space: pre;
          font-family: 'Songti TC';
          font-style: normal;
          font-weight: 700;
          font-size: 25px;
          line-height: 35px;
          color: #aace79;
          position: relative;
          left: 45px;
        }
      }
    }
    .share-detail-box {
      padding-left: 100px !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #fff;
      opacity: 1;
      height: 220px;
      margin: 0 10px;
      margin-top: 200px;
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
    background-size: 100% 230%;
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
    .myname2::before {
      content: '';
      border: 1px solid #ecb3ac;
      transform: rotate(90deg);
      margin-right: 11px;
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

  .xinyongka {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    /* identical to box height, or 167% */

    text-align: center;

    color: #666666;
  }
  ::v-deep .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none !important;
  }
  ::v-deep .swiper-button-prev:after {
    display: none !important;
  }
  //  pc strat
  .mbShow {
    display: none !important;
  }

  .text-pink {
    /* regular font 18 */

    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    /* pink */

    color: #ecb3ac;
  }

  //视频分享
  .youtube-video {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .videoShow {
    ::v-deep .swiper-button-prev {
      left: 35%;
      width: 50px;
      height: 64px;
      background: url(https://static.cmereye.com/imgs/2022/10/fc1dc1f50f29fad5.png)
        no-repeat;
      background-position: 0 0;
      background-size: 100%;
      z-index: 9999;
      position: absolute;
      top: 38%;
    }

    ::v-deep .swiper-button-next {
      left: 62%;
      width: 50px;
      height: 64px;
      background: url(https://static.cmereye.com/imgs/2022/10/8fb86d8d6f1982ee.png)
        no-repeat;
      background-position: 0 0;
      background-size: 100%;
      z-index: 9999;
      position: absolute;
      top: 38%;
    }

    .swiper {
      width: 100%;
      height: 100%;
    }
    ::v-deep .swiper-slide {
      text-align: left;
      font-size: 18px;
      align-content: flex-start !important;
      // background: #fff;
      flex-direction: column;
      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      iframe {
        width: 100%;
        height: 70%;
      }
      .video_detail {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        display: none;
        padding-top: 6px;
        color: #666666;
        &::after {
          content: '';
          position: absolute;
          display: block;
          left: 0px;
          width: 2px;
          height: 38px;
          bottom: 3px;
          background-color: #ecb3ac;
        }
        p {
          margin-left: 5px;
        }
      }
      // width: 380.44px ;
      //  height: 194.82px ;
    }
    ::v-deep .swiper-slide-duplicate {
      //   width: 380.44px ;
      // height: 194.82px ;
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      iframe {
        width: 100%;
        height: 70%;
      }
    }
    ::v-deep .swiper-slide-active {
      // width: 428.67px !important ;
      // height: 241.51px !important;
      padding-top: 31px;
      iframe {
        width: 100%;
        height: 100%;
      }
      .video_detail {
        display: block;
      }
    }
    .swiper-slide img {
      display: block;
      width: 80%;
      height: 80%;
      object-fit: cover;
    }

    .swiper {
      width: 100%;
      height: 300px;
      margin: 20px auto;
    }
    .append-buttons {
      text-align: center;
      margin-top: 20px;
    }

    .append-buttons button {
      display: inline-block;
      cursor: pointer;
      border: 1px solid #007aff;
      color: #007aff;
      text-decoration: none;
      padding: 4px 10px;
      border-radius: 4px;
      margin: 0 10px;
      font-size: 13px;
    }

    ::v-deep .swiper-wrapper {
      align-items: center !important;
    }
  }

  //選擇我們
  .orthodontic_compete {
    .compete_one {
      position: absolute;
      width: 52%;
      margin: 45px 0 0 58px;
      img {
        position: absolute;
        margin: 0 0 0px 57px;
      }
      p {
        margin-top: 66px;
        margin-left: 111px;
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
      }
    }
    .compete_two {
      position: absolute;
      width: 52%;
      display: flex;
      flex-direction: row-reverse;
      margin-top: 244px;
      img {
        position: absolute;
        margin: 27px 0 0 11px;
      }
      p {
        margin-top: 57px;
        margin-right: 57px;
        margin-left: 57px;
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
      }
    }
    .compete_three {
      position: absolute;
      width: 52%;
      margin: 455px 0 0 96px;
      img {
        position: absolute;
        margin: 15px 0 0px 20px;
      }
      p {
        margin-top: 57px;
        margin-left: 57px;
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
      }
    }
    .compete_four {
      position: absolute;
      width: 52%;
      display: flex;
      flex-direction: row-reverse;
      margin-top: 625px;
      margin-left: 31px;
      img {
        position: absolute;
        margin: 27px 0 0 11px;
      }
      p {
        margin-top: 57px;
        margin-left: 57px;
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
      }
    }
    h2 {
      writing-mode: vertical-lr;
      padding-top: 100px;
      line-height: 30px;
      letter-spacing: 0.2em;
    }
  }
  .compete_bac {
    .compete_bac_box {
      float: right;
    }
    .compete_bac_1 {
      margin-left: 227px;
      top: 25px;
      position: relative;
    }
    .compete_bac_2 {
      margin-top: 22px;
      margin-left: 10px;
    }
  }
  //專屬你的美齒護理
  .Care_img > div .care_img_box {
    position: relative;
  }
  .care_img_box .mask1 {
    position: absolute;
    background: rgba 0, 0, 0, 0.7;
    background-image: url(https://static.cmereye.com/imgs/2022/10/01de6daf55f9f05c.png);
    background-repeat: no-repeat;
    background-size: 391px 497px;
    z-index: 999;
    width: 50%;
    height: 50%;
    left: 183px;
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 56px;
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffffff;
      margin: 164px 127px;
    }
  }
  .mask1:hover {
    opacity: 0;
    overflow: hidden;
    transition: all ease-in-out 1s 0s;
  }
  .mask2:hover {
    overflow: hidden;
    opacity: 0;
    transition: all ease-in-out 1s 0s;
  }
  .mask3:hover {
    overflow: hidden;
    opacity: 0;
    transition: all ease-in-out 1s 0s;
  }
  .mask4:hover {
    overflow: hidden;
    opacity: 0;
    transition: all ease-in-out 1s 0s;
  }
  .care_img_box .mask2 {
    position: absolute;
    background: rgba 0, 0, 0, 0.7;
    background-image: url(https://static.cmereye.com/imgs/2022/10/a7d0427c390c094e.png);
    background-repeat: no-repeat;
    background-size: 497px 391px;
    z-index: 999;
    width: 50%;
    height: 390px;
    left: 183px;
    /* bottom: -96px; */
    top: 758px;
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 56px;
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffffff;
      margin: 164px 127px;
    }
  }
  .care_img_box .mask3 {
    position: absolute;
    background: rgba 0, 0, 0, 0.7;
    background-image: url(https://static.cmereye.com/imgs/2022/10/ce387977f1defac0.png);
    background-repeat: no-repeat;
    background-size: 498px 391px;
    z-index: 999;
    width: 50%;
    height: 391px;
    left: 467px;
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 56px;
      /* identical to box height */

      letter-spacing: 0.2em;
      white-space: nowrap;
      color: #ffffff;
      margin: 164px 149px 164px 219px;
    }
  }
  .care_img_box .mask4 {
    position: absolute;
    background: rgba 0, 0, 0, 0.7;
    background-image: url(https://static.cmereye.com/imgs/2022/10/d75e9767a88da3bf.png);
    background-repeat: no-repeat;
    background-size: 392px 495px;
    z-index: 999;
    width: 390px;
    height: 100%;
    left: 574px;
    top: 653px;
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 56px;
      /* identical to box height */
      white-space: pre;
      letter-spacing: 0.2em;

      color: #ffffff;
      margin: 271px 158px 164px 150px;
    }
  }
  .Care_img {
    display: flex;
    justify-content: center;
    padding-bottom: 844px;
    img {
      max-width: 100%;
      height: fit-content;
    }
    .care_img_1 {
      // opacity: 0.3;
    }
    .care_img_1:hover {
      opacity: 1;
    }
    // .care_img_box{position: absolute;}
    .care_img_1 {
      position: absolute;
      left: 183px;
      mask-image: url('https://static.cmereye.com/imgs/2022/10/01de6daf55f9f05c.png')
        linear-gradient(-45deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 50%) !important;

      // mask-image: url('https://static.cmereye.com/imgs/2022/10/01de6daf55f9f05c.png') !important; /*referencing to the element generated and defined in SVG code*/
    }
    .care_img_2 {
      position: absolute;
      top: 758px;
      left: 183px;
    }
    .care_img_3 {
      position: absolute;
      left: 468px;
      height: 391px;
      width: 496px;
    }
    .care_img_4 {
      position: absolute;
      top: 652px;
      left: 573px;
    }
  }
  //主页轮播图
  .step_title {
    position: initial;
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

    ::v-deep .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 0;
      left: 0;
      width: 100%;
      padding-top: 50px;
    }
    ::v-deep .swiper-pagination {
      position: relative;
    }
    ::v-deep .swiper {
      padding-bottom: 10px;
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

  .page_body_header_banner {
    background-image: url(https://static.cmereye.com/imgs/2023/09/977f661d1787e16c.jpg);
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100%;
    background-position-y: inherit;
    background-attachment: fixed;
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
      width: 100%;
      float: left;
      height: 100%;
      justify-self: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      .head_banner_text_p {
        position: absolute;
        z-index: -20;
        left: 10%;
        max-width: 720px;
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 35px;
        color: #666666;
        margin-top: -10%;
        display: flex;
      }
      .head_banner_desc_one {
        writing-mode: vertical-lr;
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 35px;
        color: #666666;
        padding-top: 58px;
      }
      .head_banner_desc_two {
        writing-mode: vertical-lr;
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 35px;
        color: #666666;
      }
    }
  }
}
@media screen and(max-width:768px) {
  .page_body_header_fixed {
    padding: 30px 50px;
    position: absolute;
    width: 100%;
    height: auto;
    top: 5%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9;
  }
  .share-video-box {
    position: relative;
  }
  .mt_10 {
    margin-top: 331px !important;
  }
  .mborthodontic_title {
    margin-left: 15px;
  }
  .iframe {
    position: absolute;
    right: 0;
    bottom: -173px;
    left: 0;
    display: flex;
    z-index: 15;
    justify-content: center;
  }
  .iframe2 {
    position: absolute;
    right: 0;
    bottom: -173px;
    left: 0;
    display: flex;
    z-index: 15;
    justify-content: center;
  }
  .share-video-box {
    .share-detail-box .name2 {
      .pro2 {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        padding: 5px 42px 0px 42px;
        position: absolute;
        top: 40px;
        right: 0;
        color: #aace79;
        white-space: pre;
      }
    }
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
      right: 0;
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
    background: url('https://static.cmereye.com/imgs/2023/01/bcde67659fe5e0a2.png')
      no-repeat;
    background-size: 376% 230%;
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
    margin-right: 20px;
  }

  .img-start2 {
    width: 37px;
    position: absolute;
    top: -12px;
  }
  .name2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: -95px;
    margin-left: 15px;
    /* right: 9px; */
    left: -41px;
    .myname2 {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 35px;
      /* identical to box height */
      padding: 5px 42px 0px 42px;
      color: #666666;
    }
    .pro2 {
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
    .myname2::before {
      content: '';
      border: 1px solid #ecb3ac;
      transform: rotate(90deg);
      margin-right: 11px;
    }
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

  ::v-deep .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    content: '';
  }
  ::v-deep .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: '';
  }
  //头部
  .page_body_header_banner {
    // padding-bottom: 158px;
    .head_banner_img {
      display: block;
      margin: 33px 0 0 -32px;
    }
  }
  .page_body_header_banner .head_banner_desc_one {
    position: absolute;
    z-index: -20;
    right: 0;
    max-width: 717px;
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #666666;
    padding: 0 15px;
    writing-mode: vertical-lr;
    top: 42%;
    left: 70%;
    letter-spacing: 12px;
    width: fit-content;
    background-color: #fff;
    padding: 10px 1px;
    margin: 0 10px;
  }
  .page_body_header_banner .head_banner_desc_two {
    position: absolute;
    z-index: -20;
    right: 0;
    max-width: 717px;
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #666666;
    padding: 0 15px;
    writing-mode: vertical-lr;
    top: 35%;
    left: 79%;
    letter-spacing: 12px;
    width: fit-content;
    background-color: #fff;
    padding: 10px 1px;
    margin: 0 10px;
  }

  .orthodontic_swiper::after {
    display: none !important;
    position: absolute;
    content: '';
    width: 12.5vw;
    height: 6.7vw;
    background-image: url(https://static.cmereye.com/imgs/2022/10/803bb00d210adb52.png);
    bottom: 46px;
    left: 0;
    right: 0;
    margin: auto;
    background-size: 100%;
    background-repeat: no-repeat;
    animation: translateX 1s ease-in-out alternate infinite;
  }

  // 选择我们
  .orthodontic_compete .page_container::before {
    display: none;
  }
  .orthodontic_compete_pic {
    padding: 50px 0;
    img {
      // width: 100%;
    }
    .compete_num {
      width: 28%;
      position: absolute;
      top: 47%;
      left: 31%;
    }
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
      color: #666666;
    }
  }
  .orthodontic_compete .page_container::after {
    position: absolute;
    content: '';
    width: 12.5vw;
    height: 6.7vw;
    background-image: url(https://img.cmereye.com/i/2022/09/27/6332b6a7ada01.png);
    bottom: -34px;
    left: 0;
    right: 0;
    margin: auto;
    background-size: 100%;
    background-repeat: no-repeat;
    animation: translateX 1s ease-in-out alternate infinite;
  }

  // 处理点点
  .orthodontic_compete {
    ::v-deep
      .swiper-horizontal
      > .swiper-pagination-bullets
      .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets
      .swiper-pagination-bullet {
      margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 29px);
    }

    ::v-deep .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 0;
      left: 0;
      width: 100%;
      padding-top: 50px;
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
      background: #e6f0d7;
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
      background-color: #aace79;
    }
    ::v-deep .swiper-pagination-bullet:nth-child(3)::after {
      height: 0px;
    }
    ::v-deep .swiper-pagination-bullet:nth-child(4)::after {
      height: 0px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      opacity: var(--swiper-pagination-bullet-opacity, 1);
      background: #aace79 !important;
    }
  }

  //牙科服务
  .orthodontic_faq {
    background: url(https://static.cmereye.com/imgs/2022/10/296d55bc25eba3b6.png)
      no-repeat;
    background-size: cover;
    background-position: top !important;
    background-repeat: no-repeat !important;
    // background-attachment: fixed !important;
  }

  .Care_img {
    display: flex;
    height: 99.5vw;
    img {
      position: absolute;
    }
    .care_img_box {
      .care_img_1 {
        width: 50vw;
        left: 0;
      }
      .care_img_2 {
        width: 63.3vw;
        /* height: 50vw; */
        left: 0;
        bottom: 0;
      }
      .care_img_3 {
        right: 0;
        /* height: 46vw; */
        width: 64vw;
      }
      .care_img_4 {
        width: 50.4vw;
        height: 63vw;
        right: 0;
        bottom: 0;
      }
    }
  }

  //蒙版
  .care_img_box .mask1 {
    position: absolute;
    background: rgba 0, 0, 0, 0.7;
    background-image: url(https://static.cmereye.com/imgs/2022/10/4b0e4d68c1deb8b0.png);
    background-repeat: no-repeat;
    background-size: 50.2vw 63.5vw;
    z-index: 999;
    width: 52vw;
    height: 65vw;
    left: 0;
    p {
      font-family: 'Songti TC';
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 19.2308px;
      line-height: 27px;
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffffff;
      margin: 20vw 18vw;
    }
  }
  .mask1:hover {
    opacity: 0;
    overflow: hidden;
    transition: all ease-in-out 1s 0s;
  }
  .mask2:hover {
    overflow: hidden;
    opacity: 0;
    transition: all ease-in-out 1s 0s;
  }
  .mask3:hover {
    overflow: hidden;
    opacity: 0;
    transition: all ease-in-out 1s 0s;
  }
  .mask4:hover {
    overflow: hidden;
    opacity: 0;
    transition: all ease-in-out 1s 0s;
  }
  .care_img_box .mask2 {
    position: absolute;
    background: rgba 0, 0, 0, 0.7;
    background-image: url(https://static.cmereye.com/imgs/2022/10/f8aeadf6c2a35cbf.png);
    background-repeat: no-repeat;
    background-size: 63.4vw 49.8vw;
    z-index: 999;
    width: 65vw;
    height: 49.8vw;
    left: 0px;
    bottom: 0;
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 19.2308px;
      line-height: 27px;
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffffff;
      margin: 23vw 18vw;
    }
  }
  .care_img_box .mask3 {
    position: absolute;
    background: rgba 0, 0, 0, 0.7;
    background-image: url(https://static.cmereye.com/imgs/2022/10/76a5f34fa2e81746.png);
    background-repeat: no-repeat;
    background-size: 64vw 50vw;
    z-index: 999;
    width: 64vw;
    height: 54.4vw;
    right: 0;
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 19.2308px;
      line-height: 27px;
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffffff;
      margin: 22vw 30vw;
      white-space: pre;
    }
  }

  .care_img_box .mask4 {
    position: absolute;
    background: rgba 0, 0, 0, 0.7;
    background-image: url(https://static.cmereye.com/imgs/2022/10/9c1aa611dbb1992c.png);
    background-repeat: no-repeat;
    background-size: 50.5vw 63.5vw;
    z-index: 999;
    width: 50.4vw;
    height: 63.3vw;
    right: 0;
    bottom: 0;
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 700;
      font-size: 19.2308px;
      line-height: 27px;
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffffff;
      margin: 36vw 21vw;
      white-space: pre;
    }
  }

  //视频分享
  .youtube-video {
    width: 240px;
    display: flex;
    align-items: center;
  }

  .orthodontic_table {
    width: 148vw;
    margin: auto;
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

  .orthodontic_pic {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .orthodontic_pic > div {
    width: calc((100% - 0px) / 3);
    margin-bottom: 0px;
  }
  .orthodontic_pic > div img {
    width: 100%;
  }
  //分享
  .orthodontic_condition {
    background-image: url(https://static.cmereye.com/imgs/2022/10/67c6ed7f7bf50479.png);
    background-size: 100% 100% !important;
    background-position: top;
    background-repeat: no-repeat;
  }

  //轮播
  .orthodontic_condition {
    ::v-deep .swiper-button-prev {
      left: 4%;
      width: 50px;
      height: 64px;
      background: url(https://static.cmereye.com/imgs/2022/10/fc1dc1f50f29fad5.png)
        no-repeat;
      background-position: 0 0;
      background-size: 100%;
      z-index: 9999;
      position: absolute;
      top: 38%;
    }

    ::v-deep .swiper-button-next {
      left: 79%;
      width: 50px;
      height: 64px;
      background: url(https://static.cmereye.com/imgs/2022/10/8fb86d8d6f1982ee.png)
        no-repeat;
      background-position: 0 0;
      background-size: 100%;
      z-index: 9999;
      position: absolute;
      top: 38%;
    }

    .swiper {
      width: 100%;
      height: 100%;
    }

    ::v-deep .swiper-slide {
      iframe {
        width: 192px;
        height: 108px;
      }
      text-align: left;
      font-size: 18px;
      align-content: flex-start !important;
      // background: #fff;
      flex-direction: column;
      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      .video_detail {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        display: none;
        color: #666666;
        &::after {
          content: '';
          position: absolute;
          display: block;
          left: 0px;
          width: 2px;
          height: 47px;
          bottom: 37px;
          background-color: #ecb3ac;
        }
        p {
          margin-left: 5px;
          margin-top: 10px;
        }
      }
      // width: 380.44px ;
      //  height: 194.82px ;
    }
    ::v-deep .swiper-slide-prev {
      display: flex !important;
      align-content: flex-end !important;
      flex-direction: row;
      justify-content: flex-end !important;
      transform: translate(7vw);
      iframe {
        width: 192px;
        height: 108px;
      }
    }
    ::v-deep .swiper-slide-duplicate {
      //   width: 380.44px ;
      // height: 194.82px ;
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ::v-deep .swiper-slide-active {
      // width: 428.67px !important ;
      // height: 241.51px !important;
      iframe {
        width: 240px;
        height: 135px;
        margin-top: 31px;
      }
      .video_detail {
        display: block;
      }
    }
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper {
      width: 100%;
      height: 300px;
      margin: 20px auto;
    }
    .append-buttons {
      text-align: center;
      margin-top: 20px;
    }

    .append-buttons button {
      display: inline-block;
      cursor: pointer;
      border: 1px solid #007aff;
      color: #007aff;
      text-decoration: none;
      padding: 4px 10px;
      border-radius: 4px;
      margin: 0 10px;
      font-size: 13px;
    }

    ::v-deep .swiper-wrapper {
      align-items: center !important;
    }
  }
  .orthodontic_condition::before {
    display: none;
  }
  .orthodontic_condition .orthodontic_pic_scroll {
    padding-bottom: 0;
  }
}
@media only screen and (max-width: 1440px) and (min-width: 800px) {
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
    top: 180px;
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
