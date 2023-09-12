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
  // console.log('312===========')
  setTimeout(() => {
    GetRequest()
  }, 1000)

  // setTop()
})
function GetRequest() {
  const result = window.location.href.split('#')[1]
  console.log('res====', result)
  // window.location.hash = result
  if (result === 'student') {
    console.log('========document', document.getElementById('student'))
    document.getElementById('student')?.scrollIntoView(true)
    // document.getElementById('student').scrollIntoView(true)
  } else if (result === 'office-worker') {
    document.getElementById('office-worker')?.scrollIntoView(true)
  } else if (result === 'the-engaged-and-newly-weds') {
    document.getElementById('the-engaged-and-newly-weds')?.scrollIntoView(true)
  } else if (result === 'parent') {
    document.getElementById('parent')?.scrollIntoView(true)
  }
}
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
  title: capitalize(t('pages.treatment.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.treatment.description'),
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
          src="https://static.cmereye.com/static/lkximg/smilepartner/banner_pc_tr.avif"
          srcset="
            https://static.cmereye.com/static/lkximg/smilepartner/banner_mb.avif    400w,
            https://static.cmereye.com/static/lkximg/smilepartner/banner_mb.avif    640w,
            https://static.cmereye.com/static/lkximg/smilepartner/banner_pc_tr.avif
          "
        />
        <div class="page_body_header_fixed">
          <div class="head_booking inline-block float-right text-center">
            <a :href="$t('banners.booking')" target="_blank" class="head_button"
              ><p class="md:pt-1 text-primary">
                {{ $t('banners.invisalign_text') }}
              </p>
              <span class="text-green-light md:text-3xl sm:ml-3">
                {{ $t('banners.number') }}
              </span>
            </a>
            <span class="mt-1 xinyongka">指定信用卡可享免息分期</span>
          </div>

          <div class="head_banner_text justify-self-center">
            <div class="head_banner_text_p">
              <div class="head_banner_img" style="display: block">
                <p>切合你生活的療程</p>
                <div class="head_text_img">
                  <img
                    class="m-auto"
                    src="https://static.cmereye.com/imgs/2023/01/09863c98c9f4a085.png"
                    alt=""
                  />
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
    <div class="swiper-box">
      <div class="page_container">
        <div class="title">
          <img
            src="https://static.cmereye.com/imgs/2023/01/46421c979cd43756.png"
            alt=""
          />
        </div>
        <div class="pcShow flex pt-10 justify-center">
          <div class="type_box">
            <a href="#student">
              <img
                src="https://static.cmereye.com/imgs/2023/01/92c142ccc5a8b6b7.png"
                alt=""
              />
              <div class="mask1">
                <p>學生</p>
              </div>
            </a>
          </div>
          <div class="type_box">
            <a href="#office-worker">
              <img
                src="https://static.cmereye.com/imgs/2023/01/d2be299e4dd6d2bf.png"
                alt=""
              />
              <div class="mask2">
                <p>職場人士</p>
              </div>
            </a>
          </div>
          <div class="type_box">
            <a href="#the-engaged-and-newly-weds">
              <img
                src="https://static.cmereye.com/static/lkximg/smilepartner/clear03.avif"
                alt=""
              />
              <div class="mask3">
                <p>準新人</p>
              </div>
            </a>
          </div>
          <div class="type_box">
            <a href="#parent">
              <img
                src="https://static.cmereye.com/imgs/2023/01/6f6539b047699993.png"
                alt=""
              />
              <div class="mask4">
                <p>父 母</p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="mbShow mb-20 orthodontic_swiper orthodontic_condition swiper-piont"
        >
          <div class="mt-5">
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
                <div class="type_box">
                  <a href="#student">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/92c142ccc5a8b6b7.png"
                      alt=""
                    />
                    <div class="mask1">
                      <p>學生</p>
                    </div>
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="type_box">
                  <a href="#office-worker">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/d2be299e4dd6d2bf.png"
                      alt=""
                      class="img_work"
                    />
                    <div class="mask2">
                      <p>職場人士</p>
                    </div>
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="type_box">
                  <a href="#the-engaged-and-newly-weds">
                    <img
                      src="https://static.cmereye.com/static/lkximg/smilepartner/clear03.avif"
                      alt=""
                    />
                    <div class="mask3">
                      <p>準新人</p>
                    </div>
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide
                ><div class="type_box">
                  <a href="#parent">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/6f6539b047699993.png"
                      alt=""
                    />
                    <div class="mask4">
                      <p>父 母</p>
                    </div>
                  </a>
                </div></swiper-slide
              >

              <!-- <div slot="pagination" class="swiper-pagination"></div>
              <div slot="button-prev" class="swiper-button-prev"></div>
              <div slot="button-next" class="swiper-button-next"></div> -->
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="page_orthodontic sm:pt-38 md:mt-0 mt-10">
      <div class="page_container" id="student">
        <div class="orthodontic_title step_title mb-20 z-10">
          <h2
            class="text-primary font-normal text-xl md:text-2xl inline-block relative"
          >
            中學生/大學生/青少年
          </h2>
        </div>
      </div>
      <div class="back-img mt-10">
        <div class="">
          <div class="flex flex-row py-20 mb-box page_container">
            <div class="details_to">
              <div class="details_text">
                <p>
                  <span class="text-green-light">想快速排齊前排牙齒，</span>
                </p>
                <p>
                  與同學朋友相處、影相時盡情露齒笑，而且<span
                    class="text-green-light"
                    >預算有限？</span
                  >
                </p>
                <a
                  href="https://smilepartner.hk/clear-aligners-lite"
                  class="btn"
                >
                  <div class="flex items-center btn-t student justify-center;">
                    <span class="pr-2 text-grap"> 隱形牙箍簡易版 </span>
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div class="details_text mt-20">
                <p class="md:pr-10">
                  <span class="text-green-light"
                    >想改善一般至複雜的牙齒排列問題</span
                  >
                  如倒及、開咬等， 但介意
                  <span class="text-green-light"
                    >傳統鋼箍不夠美觀，甚至會影響學校日常生活，</span
                  >
                  如飲食、運動、吹樂器？
                </p>
                <a href="https://smilepartner.hk/clear-aligners" class="btn">
                  <div class="flex items-center btn-t student justify-center;">
                    <span class="pr-2 text-grap"> 隱形牙箍全方位矯齒 </span>
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
            <div class="work_z_person_box work_z_person_box_mb">
              <div class="work_z_person">
                <img
                  src="https://static.cmereye.com/imgs/2023/09/835b0d52fff13306.png"
                  alt=""
                />
              </div>
              <div class="run_z_person">
                <img
                  src="https://static.cmereye.com/imgs/2023/09/94a0198506bb89f5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="page_container" id="office-worker">
            <div class="orthodontic_title mb-20 z-10 md:mt-28">
              <h2
                class="text-primary font-normal text-xl md:text-2xl inline-block relative"
              >
                職場人士
              </h2>
            </div>
          </div>
          <div class="pos-re">
            <div class="flex py-10 flex-row-reverse mb-box-two page_container">
              <div class="details_to flex flex-row flex-col items-center">
                <div class="details_text">
                  <p><span class="text-green-light">在職場上，</span></p>
                  <p>想給予同事或合作客戶一個整齊得體的印象</p>
                  <p>言談間露出整齊的牙齒，</p>
                  <span class="text-green-light">展現自信體面笑容？</span>
                  <a href="https://smilepartner.hk/clear-aligners" class="btn">
                    <div class="flex items-center btn-t zhic justify-center;">
                      <span class="pr-2 text-grap"> 隱形牙箍全方位矯齒 </span>
                      <img
                        src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                        alt=""
                      />
                    </div>
                  </a>
                  <a
                    href="https://smilepartner.hk/clear-aligners-lite"
                    class="btn"
                  >
                    <div class="flex items-center btn-t zhic justify-center;">
                      <span class="pr-2 text-grap"> 隱形牙箍簡易版 </span>
                      <img
                        src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div class="details_text mt-10">
                  <p class="">
                    <span class="text-green-light">
                      一日飲一杯咖啡提神，不知不覺令牙黃問題纏身，</span
                    >
                  </p>
                  <p>怕因此影響與客戶會面時的形象，</p>
                  <p>
                    <span class="text-green-light">想快速令牙齒變得亮白？</span>
                  </p>
                  <a href="https://smilepartner.hk/teeth-whitening" class="btn">
                    <div class="flex items-center btn-t zhic justify-center;">
                      <span class="pr-2 text-grap"> 牙齒美白 </span>
                      <img
                        src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div class="details_text mt-10">
                  <p>想在職場上時刻展露完美自信笑容？</p>
                  <p>
                    <span class="text-green-light"
                      >一次過解決牙齒美白、形狀，甚至微型矯正？</span
                    >
                  </p>
                  <a href="https://smilepartner.hk/veneer" class="btn">
                    <div class="flex items-center btn-t zhic justify-center;">
                      <span class="pr-2 text-grap"> 即日瓷貼片 </span>
                      <img
                        src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div class="work_z_person_box mb_person_box">
                <div class="work_z_person w_person_left">
                  <img
                    src="https://static.cmereye.com/imgs/2023/09/160e9eb3619b4631.png"
                    alt=""
                  />
                </div>
                <div class="run_z_person w_coff_left">
                  <img
                    src="https://static.cmereye.com/static/lkximg/smilepartner/work_person2.avif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="page_container" id="the-engaged-and-newly-weds">
            <div class="orthodontic_title mb-20 z-10 mt-28">
              <h2
                class="text-primary font-normal text-xl md:text-2xl inline-block relative"
              >
                準新人
              </h2>
            </div>
          </div>
          <div class="pos-re">
            <div class="flex flex-row py-10 page_container mb-box-three">
              <div class="details_to">
                <div class="details_text">
                  <p>
                    <span class="text-green-light">
                      婚禮上當然要展現最佳狀態！
                    </span>
                  </p>
                  <p>想牙齒變整齊，但不想牙箍容易被人察覺，影響外觀，</p>
                  <p>
                    <span class="text-green-light">
                      甚至結婚飲宴飲食受限?
                    </span>
                  </p>
                  <a href="https://smilepartner.hk/clear-aligners" class="btn">
                    <div class="flex items-center btn-t newr justify-center;">
                      <span class="pr-2 text-grap"> 隱形牙箍全方位矯齒 </span>
                      <img
                        src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div class="details_text mt-10">
                  <p>
                    <span class="text-green-light">想短時間排齊前排牙齒，</span>
                  </p>
                  <p>影婚紗相時盡情展現幸福燦爛笑容？</p>
                  <a
                    href="https://smilepartner.hk/clear-aligners-lite"
                    class="btn"
                  >
                    <div class="flex items-center btn-t newr justify-center;">
                      <span class="pr-2 text-grap"> 隱形牙箍簡易版 </span>
                      <img
                        src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div class="details_text mt-10">
                  <p>
                    需要
                    <span class="text-green-light">快速亮白牙齒，</span>
                  </p>
                  <p>
                    來搭配專屬你剪裁的<span class="text-green-light"
                      >純白婚紗？</span
                    >
                  </p>
                  <a href="https://smilepartner.hk/teeth-whitening" class="btn">
                    <div class="flex items-center btn-t newr justify-center;">
                      <span class="pr-2 text-grap"> 牙齒美白 </span>
                      <img
                        src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div class="details_text mt-10">
                  <p>身為婚禮上的「女主角」，</p>
                  <p>
                    想擁有<span class="text-green-light"
                      >黃金比例微笑曲線的牙齒，</span
                    >
                  </p>
                  <p>
                    盡情展現<span class="text-green-light"
                      >明星般完美笑容，</span
                    >
                  </p>
                  <p>成為全場曯目的焦點？</p>
                  <a href="https://smilepartner.hk/veneer" class="btn">
                    <div class="flex items-center btn-t newr justify-center;">
                      <span class="pr-2 text-grap"> 即日瓷貼片 </span>
                      <img
                        src="https://static.cmereye.com/imgs/2023/01/268c25be03de5682.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div class="work_z_person_box new_mb_box">
                <div class="work_z_person">
                  <img
                    src="https://static.cmereye.com/imgs/2023/09/8137fab164e2a11d.png"
                    alt=""
                  />
                </div>
                <div class="run_z_person new_flower">
                  <img
                    src="https://static.cmereye.com/static/lkximg/smilepartner/new_flower.avif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="page_container" id="parent">
            <div class="orthodontic_title mb-20 z-10 mt-28">
              <h2
                class="text-primary font-normal text-xl md:text-2xl inline-block relative"
              >
                父母/兒童
              </h2>
            </div>
          </div>
          <div class="pos-re">
            <div class="flex py-20 flex-row page_container mb-box-four">
              <div class="work_z_person_box parent_box">
                <div class="work_z_person">
                  <img
                    src="https://static.cmereye.com/static/lkximg/smilepartner/play.avif"
                    alt=""
                  />
                </div>
                <div class="run_z_person">
                  <img
                    src="https://static.cmereye.com/static/lkximg/smilepartner/child.avif"
                    alt=""
                  />
                </div>
              </div>
              <div class="details_to flex flex-col items-center">
                <div class="details_text">
                  <p>
                    <span class="text-green-light"
                      >家長注意，小朋友牙齒不整齊非小事，</span
                    >
                  </p>
                  <p>不但影響外觀及自信，甚至咀嚼及說話發音，嚴重可致面歪！</p>
                  <p class="pt-10">
                    <span class="text-green-light"
                      >想把握矯齒黃金期(6至10歲)，</span
                    >
                  </p>
                  <p>
                    及早改善簡單至複雜的早期兒童牙齒問題，如牙縫過大、錯咬、
                  </p>
                  <p>牙弓狹小令牙齒擠迫不齊？</p>
                  <a
                    href="https://smilepartner.hk/clear-aligners-child"
                    class="btn"
                  >
                    <div class="flex items-center btn-t child justify-center;">
                      <span class="pr-2 text-grap"> 隱形牙箍兒童專線 </span>
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

    <!-- sm:py-38 -->
    <div class="page_orthodontic md:pb-20">
      <div class="md:mt-0">
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
                            class="h-4 w-4 border-gray-300 border-1 text-green-light focus:ring-green focus:outline-none"
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
                            class="h-4 w-4 border-gray-300 text-green-light focus:ring-green focus:outline-none"
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
                            class="h-4 w-4 border-gray-300 text-green-light focus:ring-green focus:outline-none"
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
                            class="h-4 w-4 border-gray-300 text-green-light focus:ring-green focus:outline-none"
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
                            class="h-4 w-4 border-gray-300 text-green-light focus:ring-green focus:outline-none"
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
                            class="h-4 w-4 border-gray-300 text-green-light focus:ring-green focus:outline-none"
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
                            class="h-4 w-4 border-gray-300 text-green-light focus:ring-green focus:outline-none"
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
.text-green-light {
  color: #95c05b;
}
.text-grap {
  color: #666;
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
  .details_to {
    flex: 1;
    .details_text {
      width: 434px;
      span {
        font-size: 18px;
      }
      p {
        /* regular font 18 */

        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
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
          margin-top: 34px;
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
      color: #fff;
    }
    .btn:hover .btn-t img {
      content: url('https://static.cmereye.com/imgs/2023/01/b26885e327668c8b.png');
    }
  }
  .back-img {
    background-image: url(https://static.cmereye.com/imgs/2023/09/7b3f5227910a45a7.jpg);
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top;
    // background-attachment: fixed;
    width: 100%;
    .parent_box {
      .work_z_person {
        display: flex;
        justify-content: flex-end;
        img {
          width: 66% !important;
        }
      }
      .run_z_person {
        position: absolute;
        bottom: -29px;
        right: unset !important;
        z-index: 10;
        img {
          width: 95%;
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
          width: 100%;
        }
      }
      // .w_person_left {
      //   img {
      //     width: 70% !important;
      //   }
      // }
      .w_coff_left {
        position: absolute;
        bottom: 20px !important;
        right: -25px !important;
        z-index: 10;
        img {
          width: 90% !important;
        }
      }
      .new_flower {
        bottom: 88px !important;
        right: -95px !important;
      }
      .run_z_person {
        position: absolute;
        bottom: -80px;
        right: -26px;
        z-index: 10;
        img {
          width: 95%;
        }
      }
    }
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
    .mask1 {
      position: absolute;
      background: rgba 0, 0, 0, 0.7;
      background-image: url(https://static.cmereye.com/imgs/2023/01/ebe92ef248ef0d3a.png);
      background-repeat: no-repeat;
      background-size: 238px 122px;
      z-index: 999;
      width: 100%;
      height: 87%;
      top: 8px;
      left: 8px;
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
      background-size: 326px 122px;
      z-index: 999;
      width: 100%;
      height: 87%;
      top: 8px;
      left: 8px;
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
      background-size: 239px 122px;
      z-index: 999;
      width: 100%;
      height: 87%;
      top: 8px;
      left: 8px;
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
      background-size: 282px 122px;
      z-index: 999;
      width: 100%;
      height: 87%;
      top: 8px;
      left: 8px;
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
    background-image: url(https://static.cmereye.com/static/lkximg/smilepartner/banner_pc_tr.avif);
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
  .head_banner_img {
    position: relative;
  }
  .head_banner_img img {
    max-width: 100% !important;
  }
  .head_text_img {
    position: absolute;
    top: 38px;
    left: -56px;
    right: 0;
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
  .type_box .img_work {
    width: 343px;
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
      background-size: 254px 129px;
      background-position: center;
      z-index: 999;
      width: 100%;
      height: 89%;
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

      background-size: 325px 127px;
      background-position: center;
      z-index: 999;
      width: 100%;
      height: 89%;
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
      background-size: 254px 129px;
      background-position: center;
      z-index: 999;
      width: 100%;
      height: 89%;
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
      background-size: 298px 130px;
      background-position: center;
      z-index: 999;
      width: 100%;
      height: 89%;
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
    padding-top: 69vw;
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
      color: #fff;
    }
    .btn:hover .btn-t img {
      content: url('https://static.cmereye.com/imgs/2023/01/b26885e327668c8b.png');
    }
  }
  .back-img {
    background-image: url(https://static.cmereye.com/imgs/2023/09/7b3f5227910a45a7.jpg);
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top;
    // background-attachment: fixed;
    width: 100%;
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
      .run_z_person {
        position: absolute;
        bottom: -92px !important;
        right: 41vw !important;
        z-index: 10;
        left: 0 !important;
        img {
          width: 100%;
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
          width: 100%;
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
      .run_z_person {
        position: absolute;
        bottom: -31px;
        left: 40vw;
        z-index: 10;
        img {
          width: 100%;
        }
      }
    }
  }

  .page_body_header_banner .page_body_header_fixed {
    padding: 0px 0px 30px 48px !important;
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
    height: 135vw;
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
  .type_box {
    position: relative;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
    .mask1 {
      position: absolute;
      background: rgba 0, 0, 0, 0.7;
      background-image: url(https://static.cmereye.com/imgs/2023/01/ebe92ef248ef0d3a.png);
      background-repeat: no-repeat;
      background-size: 211px 107px;
      z-index: 999;
      width: 100%;
      height: 87%;
      top: 8px;
      left: 8px;
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
      background-size: 288px 107px;
      z-index: 999;
      width: 100%;
      height: 87%;
      top: 8px;
      left: 8px;
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
      background-size: 211px 107px;
      z-index: 999;
      width: 100%;
      height: 87%;
      top: 8px;
      left: 8px;
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
      background-size: 249px 107px;
      z-index: 999;
      width: 100%;
      height: 87%;
      top: 8px;
      left: 8px;
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
