<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import form from '../composables/form/form.vue'
import 'swiper/css'
import type { Ref } from 'vue'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SwiperClass, { Autoplay, Pagination, Navigation, Scrollbar,Thumbs } from 'swiper'
import 'swiper/css/pagination' // 轮播图底面的小圆点
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/navigation'
const modules = [Autoplay, Pagination, Navigation, Scrollbar,Thumbs]
const thumbsSwiper = ref<SwiperClass>()
    const setThumbsSwiper = (swiper: SwiperClass) => {
      thumbsSwiper.value = swiper
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
const tableswiperOption = {
  slidesPerView: "1.1",
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
    Index: 0
})
// let currentIndex:number = 
function titelclick(index){
  
  currentIndex.Index = index
  // console.log(this.currentIndex);
}
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.porcelain_tiles.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.porcelain_tiles.description'),
    },
  ],
}))
let bigimgsrc = reactive([
  "https://static.cmereye.com/imgs/2022/11/4470dc6cbeede80f.jpg",
  "https://static.cmereye.com/imgs/2022/11/9b3e381f7d2d3ca4.jpg",
  "https://static.cmereye.com/imgs/2022/11/516557a11c87b513.jpg"
])
let imgsrc = reactive([
              "https://static.cmereye.com/imgs/2022/11/f743d8dbbdf29778.jpg",
              "https://static.cmereye.com/imgs/2022/11/d822c1644e615863.jpg",
              "https://static.cmereye.com/imgs/2022/11/ef651d3ee55bc6b7.jpg"])
let bigimgsrc2 = reactive([
  "https://static.cmereye.com/imgs/2022/11/eb3fd5b84863b0b6.jpg",
  "https://static.cmereye.com/imgs/2022/11/3291fce5d036fa37.jpg",
  "https://static.cmereye.com/imgs/2022/11/1b8d3a6d24f6f372.jpg"
])
let imgsrc2 = reactive([
                      "https://static.cmereye.com/imgs/2022/11/ac292df57993961d.jpg",
                      "https://static.cmereye.com/imgs/2022/11/89d022005e8b03e6.jpg",
                      "https://static.cmereye.com/imgs/2022/11/d4e4b782e854920e.jpg"])
let title = reactive(["中環中建大廈", "尖沙咀K11 ATELIER"])
let reForm = reactive({
  smilepartnerName: '',
  sex:'',
  Tel:'',
  Email:'',
  smilepartner_select: '經系統分析,該表單來自瓷貼片頁面,該用戶想查詢瓷貼片，来源地址：https://smilepartner.hk/veneer'
})

const checkForm = (e) => {
  if(reForm.smilepartnerName === '' || reForm.sex === '' || reForm.Tel === '' || reForm.Email === '' ){
   
    alert("請完善信息！")
    e.preventDefault();
  }else{
    alert("提交成功！")
    setTimeout(()=>{
      clearInfo()
    },500)
    return true
  }
}
const clearInfo = () =>{
    reForm.smilepartnerName = ''
    reForm.sex = ''
    reForm.Tel = ''
    reForm.Email = ''
    // reForm.smilepartner_select = ''
}
</script>
  <template>
 
  <div class="page_body_header z-0">
    <div class="page_body_header_banner">
      <img
        class="page_body_header_banner_img sm:invisible"
        src="https://static.cmereye.com/imgs/2022/11/ea7549556b5ed67d.jpg"
        srcset="
        https://static.cmereye.com/imgs/2022/11/251ee3578eb999a7.png 400w,
          https://static.cmereye.com/imgs/2022/11/251ee3578eb999a7.png 640w,
          https://static.cmereye.com/imgs/2022/11/ea7549556b5ed67d.jpg
        "
      />
      <div class="page_body_header_fixed">
        <div class="head_booking inline-block float-right">
          <a :href="$t('banners.booking')" target="_blank" class="head_button"
            ><p class="md:pt-1 text-primary">
              {{ $t('banners.invisalign_text') }}
            </p>
            <span class="text-green md:text-3xl sm:ml-3">
              {{ $t('banners.number') }}
            </span>
          </a>
        </div>
        <div class="head_banner_text justify-self-center">
          <div class="head_banner_text_p">
            <div class="head_banner_img">
              <img
                class="m-auto"
                src="https://img.cmereye.com/i/2022/09/23/632d74a9e2ad7.png"
                alt=""
                srcset=""
              />
            </div>
            <h2 class="text-pink text-center text-4xl mb-6">希瑪微笑矯齒</h2>
            <div class="flex items-center justify-center my-4">
              <p class="p-fast">即日<br>特快</p> 
              <img class="" src="https://static.cmereye.com/imgs/2022/11/6c599297d15d53bb.png" alt="">
            </div>
            
              <p>{{ $t('banners.porcelain_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <slot name="header">
    <PageNavbar />
  </slot>
  <!-- sm:py-38 -->
  <div class="page_orthodontic pb-20 ">
    <div class="">
      <div
        class="
          orthodontic_title

          step_title
          text-center
          sm:text-center
          md:mb-20
          py-10
          z-10
        "
      >
        <h2
          class="
            text-primary
            font-normal
            text-xl
            md:text-2xl
            inline-block
            relative
          "
        >
        最快即日完成、註冊牙醫主理 
        </h2>
      </div>

      <div class="orthodontic_step page_container">
        <div class="flex_between_items_start">
          <div class="sm:w-6/13">
            <h4 class="py-2 text-lg font-normal"></h4>
            <p class="text-md py-5">
              Smile Partner瓷貼片療程由註冊牙醫全程貼心主理，配合先進儀器，為你度身打造出自然亮白的瓷貼片，令你可以安心地在最快一日之內，達成不同程度的牙齒外觀追求，展現全新自信笑容！ <br>
              <!-- <span class="py-2> </span> -->
            </p>
            <span >*歡迎於以下表格填寫個人聯絡電話，查詢瓷牙貼片價錢。</span>

          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/11/a7cadf88977436fb.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <!-- <div class="flex_between_items_start">
          <div class="sm:w-6/13">
            <h4 class="py-5 text-lg font-normal">6大信心保證</h4>
            <p class="text-md">
              1. 專業微笑線設計 <br>
              2. 多種顏色通透自然 <br>
              3. 五年特長專業保護 <br>
              4. 知名歐洲物料 <br>
              5. 度身訂造牙貼設計 <br>
              6. 0.3-0.5mm 超薄耐用

            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/11/9dc8fcfb2fe082cf.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div> -->
      </div>
    </div>
    
  

    <div class="md:mt-20">
    
      <div class="orthodontic_step page_container">
        <div
        class="
          orthodontic_title
          
          text-center
          sm:text-center

       
          z-10
        "
      >
        <h2
          class="
            text-primary
            font-normal
            text-xl
            md:text-2xl
            inline-block
            relative
            six_pro
          "
        >
        5大信心保證  
        </h2>
      </div>
    
        <div class="mb-20 .orthodontic_box_grid">
          <h3></h3>
          <div class="md:flex md:justify-center md:flex-row mt-24 grid grid-cols-2 orthodontic_box" style="white-space: pre;">
          <div class="mx-8 flex flex-col">
            <img src="https://static.cmereye.com/imgs/2022/11/585a103b2e5c6ee7.png" alt="" >
            <p class="md:mt-6 mt-3 mb-2">知名歐洲物料</p>
          </div>
          <div class="mx-8 flex flex-col items-center"><img src="https://static.cmereye.com/imgs/2022/11/47389cb1a675614b.png" alt="">
            <p class="md:mt-6 mt-3 mb-2">近乎真牙通透自然</p></div>
          <div class="mx-8 flex flex-col items-center"><img src="https://static.cmereye.com/imgs/2022/11/7cbcde77a3778fb1.png" alt="">
            <p class="md:mt-6 mt-3 mb-2">1.0mm堅固耐用</p></div>
          <div class="mx-8 flex flex-col items-center"><img src="https://static.cmereye.com/imgs/2022/11/6e029b05ccdbcc33.png" alt="">
            <p class="md:mt-6 mt-3 mb-2">即日度身訂造牙貼片</p></div>
          <div class="mx-8 flex flex-col items-center"><img src="https://static.cmereye.com/imgs/2022/11/28fc758182a1df81.png" alt="">
            <p class="md:mt-6 mt-3 mb-2">專屬微笑線設計</p></div>
          <!-- <div class="mx-8 flex flex-col items-center"><img src="https://static.cmereye.com/imgs/2022/11/f2d170aa10bacf76.png" alt="">
            <p class="md:mt-6 mt-3 mb-2"> 5年貼心保養</p></div> -->

        </div>
        </div>
      </div>


      <div class="orthodontic_form_background">
      <div class="orthodontic_form page_container py-20">
      <p
        class="text-center text-lg text-primary font-normal tracking-widest-2x"
      >
        填寫你的資料，
      </p>
      <h4
        class="
          text-center text-xl text-pink
          font-normal
          tracking-widest-2x
          mb-4
          sm:mb-20
        "
      >
        展開專屬牙齒美容旅程！
      </h4>
      <iframe  id="my" name="my" style="display:none"></iframe>
      <form action="https://send.pageclip.co/oLDloEgenkRMGb9ZYDIO4wlarrwjxsBu/SmilepartnerForm" method="POST" @submit="checkForm" target="my">
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
                  class="
                    h-8
                    pl-2
                    mt-1
                    block
                    w-full
                    border-gray-300 border-1
                    sm:text-sm
                    text-primary
                  "
                />
              </div>

              <div class="col-span-6 sm:col-span-3 ">
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
                      class="
                        h-4
                        w-4
                        border-gray-300 border-1
                        text-green
                        focus:ring-green focus:outline-none
                      "
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
                      class="
                        h-4
                        w-4
                        border-gray-300
                        text-green
                        focus:ring-green focus:outline-none
                      "
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
                      class="
                        h-4
                        w-4
                        border-gray-300
                        text-green
                        focus:ring-green focus:outline-none
                      "
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
                  class="
                    h-8
                    pl-2
                    mt-1
                    block
                    w-full
                    border-gray-300 border-1
                    text-primary
                    sm:text-sm
                  "
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
                  class="
                    h-8
                    pl-2
                    mt-1
                    block
                    w-full
                    border-gray-300 border-1
                    text-primary
                    sm:text-sm
                  "
                />
              </div>

              <div class="col-span-6 sm:col-span-6 form_selcet_service" style="display:none">
                <input type="text" name="smilepartner_select" v-model="reForm.smilepartner_select">
                
                
              </div>
            </div>
          </div>
          <div class="px-4 sm:mt-20 text-center sm:px-6">
            <button
              type="submit"
              class="
                inline-flex
                justify-center
                border
                text-pink
                py-2
                px-30
                text-xl
                font-medium
                bg-white
                border-gray-300
                hover:bg-pink 
                hover:text-white
                focus:outline-none focus:ring-2 focus:ring-offset-2
                submitBut
              "
              
              
            >
              提 交
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>



        <div class="orthodontic_step page_container">
        <div class="flex_between_items_start_continue flex_between_items_start">
          <div class="sm:w-6/13 continue_box">
            <h4 class="py-5 text-lg font-normal">知名歐洲物料</h4>
            <p class="text-md">
              採用德國進口CEREC Tessera™ 物料，獲ISO優質認證。
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/11/a19f898f099d413d.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <div class="flex_between_items_start_continue flex_between_items_start">
          <div class="sm:w-6/13 continue_box">
            <h4 class="py-5 text-lg font-normal">多種顏色、近乎真牙般通透自然 </h4>
            <p class="text-md">
              我們採用的瓷貼片有多種牙齒顏色選擇，可呈現出近乎真牙般的光澤及通透度，貼合你對牙齒外觀的想像及追求。
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/11/443983d7e9d112fc.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <div class="flex_between_items_start_continue flex_between_items_start">
          <div class="sm:w-6/13 continue_box">
            <h4 class="py-5 text-lg font-normal">1.0mm堅固耐用</h4>
            <p class="text-md pb-5">
              瓷貼片堅硬度高達700 Mpa以上，媲美牙齒琺瑯質，不易斷裂，耐用度可長達10年或以上*。<br>
            </p>
            <p>*耐用度視乎患者個別情況，如身體狀況、後續保養等；如有任何疑問，請聯絡你的牙科醫生。 </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/11/b1861b61ec3fe299.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <div class="flex_between_items_start_continue flex_between_items_start">
          <div class="sm:w-6/13 continue_box">
            <h4 class="py-5 text-lg font-normal">即日度身訂造牙貼片</h4>
            <p class="text-md pb-5">
              使用先進儀器，全方位掃描牙齒，並經註冊牙醫及牙科技術員討論及修改後，精準設計出切合你牙齒及需求的瓷牙貼片，最快即日*便可完成療程。<br>
            </p>
            <p>*療程時間需視乎你的牙齒情況；如有疑問，請向牙科醫生諮詢。</p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/11/7c4f640489024f55.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <div class="flex_between_items_start_continue flex_between_items_start">
          <div class="sm:w-6/13 continue_box">
            <h4 class="py-5 text-lg font-normal">專屬微笑線設計</h4>
            <p class="text-md">
              運用先進技術，助牙醫為你設計出專屬的微笑曲線，展現自信笑容無難度 。 
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/11/d9fc2eb4839f1fa4.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <!-- <div class="flex_between_items_start_continue flex_between_items_start">
          <div class="sm:w-6/13 continue_box">
            <h4 class="py-5 text-lg font-normal">5年保養服務</h4>
            <p class="text-md">
              我們提供5年完善療程後保養服務，確保瓷牙貼片的品質，令享受療程後的你安心又放心。  
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/11/1d94770271774589.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div> -->
      </div>
    </div>
    <div class="orthodontic_condition">
      <div class="page_container">
        <div class="orthodontic_title text-left sm:text-center my-20">
          <h2
            class="
              text-primary
              font-normal
              text-xl
              md:text-2xl
              inline-block
              relative
            "
          >
            你有以下情況嗎？
          </h2>
        </div>
        <p
          class="
            sm:mb-20
            mb-2
            text-primary text-center
            font-bold
            text-base
            tracking-widest-2x
          "
        >
          <!-- 隱適美能伴你矯正以
          <span class="text-2xl text-green">展露自信笑容</span> -->
        </p>
        <div class="orthodontic_pic_scroll pcShow">
          <div class="orthodontic_pic grid grid-cols-4 sm:flex sm:gap-0">
            <div class="text-center">
              <img
                src="https://static.cmereye.com/imgs/2022/11/76e080989686c6a3.jpg"
                alt=""
              />
            </div>
            
            <div class="text-center">
              <img
                src="https://static.cmereye.com/imgs/2022/11/4a19e51e853ba665.jpg"
                alt=""
              />
            </div>
            <div class="text-center">
              <img
                class=""
                src="https://static.cmereye.com/imgs/2022/11/16aeb97c17dee646.jpg"
                alt=""
              />
            </div>
            
            <div class="text-center">
              <img
                class=""
                src="https://static.cmereye.com/imgs/2022/11/7fb0c55d9630275d.jpg"
                alt=""
              />
            </div>
            <div class="text-center">
              <img
                class=""
                src="https://static.cmereye.com/imgs/2022/11/5bd826a6d6bbdbe1.jpg"
                alt=""
              />
            </div>
            <div class="text-center">
              <img
                class=""
                src="https://static.cmereye.com/imgs/2022/11/c2bb81bdd01c39be.jpg"
                alt=""
              />
            </div>
            
          </div>
        </div>
        <div class="mbShow mb-20 orthodontic_swiper">
          <div class="mt-5" >
            <swiper 
              ref="mySwiper" 
              :modules="modules"
              :options="swiperOption" 
              :pagination="{ clickable: true }"
              :loop="true"
              :slides-per-view="1"
              :space-between="50"
              navigation
              :scrollbar="{ draggable: true }" >
              <swiper-slide>
                <div class="orthodontic_pic pic-one" >
                  <div class="text-center">
              <img
                src="https://static.cmereye.com/imgs/2022/11/76e080989686c6a3.jpg"
                alt=""
              />
            </div>
            
            <div class="text-center">
              <img
                src="https://static.cmereye.com/imgs/2022/11/4a19e51e853ba665.jpg"
                alt=""
              />
            </div>
              </div>
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_pic  pic-two" >
                  <div class="text-center">
                    <img
                      class=""
                      src="https://static.cmereye.com/imgs/2022/11/16aeb97c17dee646.jpg"
                      alt=""
                    />
                  </div>
                  
                  <div class="text-center">
                    <img
                      class=""
                      src="https://static.cmereye.com/imgs/2022/11/7fb0c55d9630275d.jpg"
                      alt=""
                    />
                  </div>
               </div> 
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_pic pic-three" >
                <div class="text-center">
                  <img
                    class=""
                    src="https://static.cmereye.com/imgs/2022/09/579ae24e57592617.jpg"
                    alt=""
                  />
                </div>
                <div class="text-center">
                  <img
                    class=""
                    src="https://static.cmereye.com/imgs/2022/09/01f77a4acaf0ed44.jpg"
                    alt=""
                  />
                </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_pic pic-four" >
                  <div class="text-center">
              <img
                class=""
                src="https://static.cmereye.com/imgs/2022/11/5bd826a6d6bbdbe1.jpg"
                alt=""
              />
            </div>
            <div class="text-center">
              <img
                class=""
                src="https://static.cmereye.com/imgs/2022/11/c2bb81bdd01c39be.jpg"
                alt=""
              />
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

    <div class="orthodontic_compete  mb:pb-28 pcShow">
      <div class="page_container ">
        <div class="flex  flex-col">
        
          <div class="w-full  compete_bac pcShow px-16">
            <div
            class="orthodontic_title text-left sm:text-center mt-32 cipian_one_title"
          >
            <h2
              class="
                text-primary
                font-normal
                text-xl
                md:text-2xl
                inline-block
                relative
              "
            >
            瓷貼片過程一覽
            </h2>
          </div>
            <div class="compete_one"> 
            <img src="https://static.cmereye.com/imgs/2022/10/12403c3c5397b595.png" alt="">
            <p class="">醫生會先為你檢查牙齒及牙周健康，確保無口腔問題如牙周病</p>
            </div>
            <div class="compete_two"> 
              <img src="https://static.cmereye.com/imgs/2022/10/fc164c87854c5a6f.png" alt="">
              <p class="">拍攝X光片，全方位分析你的牙齒及笑容比例，了解你對療程嘅需求同期望</p>             
            </div>
            <div class="compete_three"> 
              <img src="https://static.cmereye.com/imgs/2022/10/b882ae46d0f992d1.png" alt="">
            <p class="">微量修磨牙齒表面及印製牙模，以度身設計及訂製專屬瓷牙貼片</p>
            </div>
            <div class="compete_four"> 
              <img src="https://static.cmereye.com/imgs/2022/10/b3524555988cee46.png" alt="">
              <p class="">安裝瓷牙貼片，檢查貼片黏合程度及顏色，再作精準微調</p>             
            </div>
            <div class="compete_bac_box"> 
              <img src="https://static.cmereye.com/imgs/2022/11/2c52f2c14320f071.jpg" alt="" class="compete_bac_1">
            </div>
            
            
          </div>
          <!-- <div class="mt-5 mbShow" >
            <swiper
              ref="mySwiper"
              :modules="modules"
              :options="swiperOption" 
              :pagination="{ clickable: true }"
              :loop="true"
              :slides-per-view="1"
              :space-between="50"
              navigation
              :scrollbar="{ draggable: true }" >
              <swiper-slide>
                <div class=" orthodontic_compete_pic" >
                <div class="text-center">
                  <img
                    src="https://static.cmereye.com/imgs/2022/10/6b55d7c2d34414c5.jpg"
                    alt=""
                  />
                  <img src="https://static.cmereye.com/imgs/2022/10/12403c3c5397b595.png" alt="" class="compete_num">
                  <p class="mt-7">   
                  <span class="text-pink">生活中各種重要時刻，<br/>都有不同的牙齒外觀追求，</span><br/>
                  希瑪美容牙科中心致力滿足你在人生各階段的不同需求，
                  提供高品質及多元化的貼心美容牙科服務，
                  包括矯齒、瓷貼片及美白牙齒服務，致力陪伴你尋找專屬自信笑容。</p>
                </div>
              </div>
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_compete_pic" >
                  <div class="text-center">
                  <img
                    src="https://static.cmereye.com/imgs/2022/10/6b55d7c2d34414c5.jpg"
                    alt=""
                  />
                  <img src="https://static.cmereye.com/imgs/2022/10/12403c3c5397b595.png" alt="" class="compete_num">
                  <p class="mt-7">   
                  <span class="text-pink">生活中各種重要時刻，<br/>都有不同的牙齒外觀追求，</span><br/>
                  希瑪美容牙科中心致力滿足你在人生各階段的不同需求，
                  提供高品質及多元化的貼心美容牙科服務，
                  包括矯齒、瓷貼片及美白牙齒服務，致力陪伴你尋找專屬自信笑容。</p>
                </div>
               </div> 
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_compete_pic " >
                  <div class="text-center">
                  <img
                    src="https://static.cmereye.com/imgs/2022/10/6b55d7c2d34414c5.jpg"
                    alt=""
                  />
                  <img src="https://static.cmereye.com/imgs/2022/10/12403c3c5397b595.png" alt="" class="compete_num">
                  <p class="mt-7">   
                  <span class="text-pink">生活中各種重要時刻，<br/>都有不同的牙齒外觀追求，</span><br/>
                  希瑪美容牙科中心致力滿足你在人生各階段的不同需求，
                  提供高品質及多元化的貼心美容牙科服務，
                  包括矯齒、瓷貼片及美白牙齒服務，致力陪伴你尋找專屬自信笑容。</p>
                </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_compete_pic pic-four" >
                  <div class="text-center">
                  <img
                    src="https://static.cmereye.com/imgs/2022/10/6b55d7c2d34414c5.jpg"
                    alt=""
                  />
                  <img src="https://static.cmereye.com/imgs/2022/10/12403c3c5397b595.png" alt="" class="compete_num">
                  <p class="mt-7">   
                  <span class="text-pink">生活中各種重要時刻，<br/>都有不同的牙齒外觀追求，</span><br/>
                  希瑪美容牙科中心致力滿足你在人生各階段的不同需求，
                  提供高品質及多元化的貼心美容牙科服務，
                  包括矯齒、瓷貼片及美白牙齒服務，致力陪伴你尋找專屬自信笑容。</p>
                </div>
                </div>
              </swiper-slide>
            </swiper>
          </div> -->

        </div>
      </div>
    </div>



    <div class="orthodontic_compete pb-20">
      <div class="page_container">
        <div
          class="
            orthodontic_title
            text-left
            sm:text-center
            my-24
            mb-14
            sm:my-28
          "
        >
          <h2
            class="
              text-primary
              font-normal
              text-xl
              md:text-2xl
              inline-block
              relative
            "
          >
          各類牙齒美白大比拼
          </h2>
        </div>
        <div class="orthodontic_table_scroll pcShow">
          <div class="orthodontic_table grid grid-cols-15">
            
            <div>
              Smile Partner全瓷貼片療程
            </div>
            <div></div>
            <div class="mx-1">免磨牙牙貼片療程</div>
            <div>藍光牙齒美白</div>
            
             
            <div>療程原理</div>
            <div>
              把度身訂製的瓷貼片黏附於牙齒表層，改善牙齒的形狀、長度、外觀及顏色
            </div>
           
            <div class="mx-1">把牙貼片黏附於牙齒表層，改善牙齒的形狀、長度、外觀及顏色</div>
             <div>將專用美白溶液塗上牙齒表面，以藍光照射數次，進行氧化還原作用，達到美白牙齒的效果</div>
            <div>磨牙程度</div>
            <div class="mx-1">聲稱不用磨牙</div>
            <div>
              打磨牙齒表面最多 0.3-0.5mm^
            </div>
           <div>/</div>
             <div>
              持久度*
            </div>
            <div>
              10年以上 
            </div>
            <div class="mx-1">大多使用樹脂貼片，一般容易染色，不太持久</div>
            <div>可維持至少1年</div>
            <div>
              副作用
            </div>
            <div>沒有</div>
            <div class="mx-1">安裝貼片後，有可能出現爆牙，甚至繼而導致蛀牙、貼片掉落等問題</div>
            <div>容易形成敏感牙齒</div>
            <!-- <div>療程後保養</div>
            <div>5年</div>
            <div class="mx-1">5年</div>
            <div>沒有保養</div> -->
    
          </div>
          <p class="flex justify-center mt-6 text-center">^輕輕磨走牙齒表面，可令瓷貼片更貼合真牙<br>
          *持久度視乎患者個別情況，如身體狀況、後續保養等；如有任何疑問，請聯絡你的牙科醫生。</p>
        </div>
        <div class="mbShow orthodontic_table_swiper">
          <swiper 
              ref="mySwiper" 
              :modules="modules"
              :options="tableswiperOption" 
              :pagination="{ clickable: true }"
              :slides-per-view="1"
              :space-between="50"
              navigation
              :scrollbar="{ draggable: true }" >
              <swiper-slide>
                <div class="orthodontic_table grid grid-cols-15">
            
            <div>
              Smile Partner全瓷貼片療程
            </div>
            <div></div>
            <div class="">免磨牙牙貼片療程</div>
            <div>藍光牙齒美白</div>
            
             
            <div>療程原理</div>
            <div>
              把度身訂製的瓷貼片黏附於牙齒表層，改善牙齒的形狀、長度、外觀及顏色
            </div>
           
            <div class="">把牙貼片黏附於牙齒表層，改善牙齒的形狀、長度、外觀及顏色</div>
             <div>將專用美白溶液塗上牙齒表面，以藍光照射數次，進行氧化還原作用，達到美白牙齒的效果</div>
            <div>磨牙程度</div>
            <div class="">聲稱不用磨牙</div>
            <div>
              打磨牙齒表面最多 0.3-0.5mm^
            </div>
           <div>/</div>
             <div>
              持久度*
            </div>
            <div>
              10年以上 
            </div>
            <div class="">大多使用樹脂貼片，一般容易染色，不太持久。</div>
            <div>可維持至少1年</div>
            <div>
              副作用
            </div>
            <div>沒有</div>
            <div class="">安裝貼片後，有可能出現爆牙，甚至繼而導致蛀牙、貼片掉落等問題</div>
            <div>容易形成敏感牙齒</div>
            <!-- <div>療程後保養</div>
            <div>5年</div>
            <div class="">1年</div>
            <div>沒有保養</div> -->
    
          </div>
          
              </swiper-slide>
              <swiper-slide></swiper-slide>
              <p class="mt-6 text-center">^輕輕磨走牙齒表面，可令瓷貼片更貼合真牙<br>
              *持久度視乎患者個別情況，如身體狀況、後續保養等；如有任何疑問，請聯絡你的牙科醫生。</p>
          </swiper>
          
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
              class="
                text-primary
                font-normal
                text-xl
                md:text-2xl
                inline-block
                relative
              "
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
                    class="
                      flex
                      w-full
                      justify-between
                      px-4
                      py-2
                      text-left text-lg
                      font-medium
                      focus:outline-none
                    "
                  >
                    <span :class="open ? 'text-pink' : 'text-primary'"
                      >瓷貼片一般建議要做幾顆，效果才好？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    考慮到露齒笑時牙齒的協調性，多建議同時期處理約6至8顆牙齒，這樣牙齒看起來會較為和諧。
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
                    class="
                      flex
                      w-full
                      justify-between
                      px-4
                      py-2
                      text-left text-lg
                      font-medium
                      focus:outline-none
                    "
                  >
                    <span :class="open ? 'text-pink' : 'text-primary'"
                      >瓷貼片會不會引致牙齒敏感？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    牙齒敏感狀況因人而異，一般做瓷貼片後大約1至2個星期，牙齒會比較敏感，不過隨著牙齒適應貼片後，便會逐漸消失。而牙醫在開始療程前，亦會先為患者全面檢查牙齒及牙周健康，以評估是否適合做瓷貼片。
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
                    class="
                      flex
                      w-full
                      justify-between
                      px-4
                      py-2
                      text-left text-lg
                      font-medium
                      focus:outline-none
                    "
                  >
                    <span :class="open ? 'text-pink' : 'text-primary'"
                      >如何護理瓷貼片？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    瓷貼片耐用度高，研究指好好保養更可以有長達10年或以上壽命，其中包括：維持良好的潔齒習慣、定期覆診，避免咬太堅硬食物及太用力刷牙。
                  </DisclosurePanel>
                </div>
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="orthodontic_compete1 md:pb-80">
      <div class="page_container">
        <div
          class="
            orthodontic_title
            text-left
            sm:text-center
            my-24
            md:mb-14
            sm:my-28
          "
        >
          <h2
            class="
              text-primary
              font-normal
              text-xl
              md:text-2xl
              inline-block
              relative
            "
          >
          優美、舒適診所環境
             <!--  -->
          </h2>
        </div>
          <div class="">
           
          <div class="thumb-example" >
            <swiper
              class="top-swiper"
              :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff'
              }"
              :modules="modules"
              :space-between="10"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiper }"
            >
            <swiper-slide class="slide" v-for="index in bigimgsrc" :key="index" v-if="currentIndex.Index === 0">
              <img :src="index" />
            </swiper-slide>
            <swiper-slide class="slide" v-for="index in bigimgsrc2" :key="index" v-if="currentIndex.Index === 1">
              <img :src="index" />
            </swiper-slide>
            </swiper>
             <div class="tab-control ">
              <div class="tab-control-item"
                v-for="(item, index) in title "
                :key="item"
                :class="{active: currentIndex.Index === index}"
                @click="titelclick(index)"
              >
                <span>{{item}}</span>
              </div>
            </div>
            <swiper
              
              class="thumbs-swiper"
              :modules="modules"
              :space-between="10"
              :slides-per-view="3"
              :watch-slides-progress="true"
              :prevent-clicks="false"
              :prevent-clicks-propagation="false"
              @swiper="setThumbsSwiper"
            >
            <swiper-slide class="slide" v-for="index in imgsrc" :key="index" v-if="currentIndex.Index === 0">
              <img :src="index" />
            </swiper-slide>
            <swiper-slide class="slide" v-for="index in imgsrc2" :key="index" v-if="currentIndex.Index === 1">
              <img :src="index" />
            </swiper-slide>
          </swiper>
          </div>
          <!-- <div class="thumb-example" >
            <swiper
            
              class="top-swiper"
              :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff'
              }"
              :modules="modules"
              :space-between="10"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiper }"
            >
            <swiper-slide class="slide" v-for="index in imgsrc" :key="index">
              <img :src="index" />
            </swiper-slide>
            </swiper>
             <div class="tab-control">
              <div class="tab-control-item"
                v-for="(item, index) in title "
                :key="item"
                :class="{active: currentIndex.Index === index}"
                @click="titelclick(index)"
              >
              
                <span>{{item}}--{{currentIndex.Index}}</span>
              </div>
            </div>
            <swiper
              class="thumbs-swiper"
              :modules="modules"
              :space-between="10"
              :slides-per-view="3"
              :watch-slides-progress="true"
              :prevent-clicks="false"
              :prevent-clicks-propagation="false"
              @swiper="setThumbsSwiper"
            >
            <swiper-slide class="slide" v-for="index in imgsrc" :key="index">
              <img :src="index" />
            </swiper-slide>
          </swiper>
          </div> -->
        </div>
      </div>
    </div>
  </div>
 
</template>
  
  <style lang="scss" scoped>
  
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
.orthodontic_table {
  max-width: 940px;
  margin: auto;
}
.orthodontic_table > div {
  height: 130px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
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
.orthodontic_table > div:nth-child(3),
.orthodontic_table > div:nth-child(4) {
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
.orthodontic_table > div:nth-child(7),
 .orthodontic_table > div:nth-child(8) {
  background: rgb(238, 245, 228);
  // background: rgb(248, 228, 224);
}

.orthodontic_table > div:nth-child(6n + 6) {
  background: rgb(251, 240, 238);
}
.orthodontic_table > div:nth-child(6n + 9) {
    // background: rgb(238, 245, 228);
}

.orthodontic_table > div:nth-child(3n + 1) {
  grid-column: span 4 / span 4;
}
.orthodontic_table > div:nth-child(11) {
  grid-column: span 4 / span 4;
  background-color: rgb(248, 228, 224);
}
.orthodontic_table > div:nth-child(12) {
  grid-column: span 4 / span 4;
  background: rgb(224, 237, 206);
}
.orthodontic_table > div:nth-child(10) {
  grid-column: span 4 / span 4;
  background: rgb(224, 237, 206);
}
.orthodontic_table > div:nth-child(2), 
.orthodontic_table > div:nth-child(5),
.orthodontic_table > div:nth-child(9),
.orthodontic_table > div:nth-child(13),
.orthodontic_table > div:nth-child(17),
.orthodontic_table > div:nth-child(21)
{
  grid-column: span 2 / span 2 !important;
  font-size: 18px;
  background-color: #fff;
}
.orthodontic_table > div:nth-child(3n + 3) {
  grid-column: span 4 / span 4;
}
.orthodontic_table > div:nth-child(7n + 9)::before {
  width: 95px;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  background-color: #ecb3ac;
  position: absolute;
  content: '';
}
.orthodontic_table > div:nth-child(13)::before {
  width: 95px;
  height: 1px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #ecb3ac;
  position: absolute;
  content: '';
}
.orthodontic_table > div:nth-child(17)::before {
  width: 95px;
  height: 1px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #aace79;
  position: absolute;
  content: '';
}
// .orthodontic_table > div:nth-child(6n + 7)::after {
//   width: 95px;
//   height: 1px;
//   left: 0;
//   right: 0;
//   top: 0;
//   margin: auto;
//   background-color: #aace79;
//   position: absolute;
//   content: '';
// }
.orthodontic_table > div:nth-child(5)::after {
  width: 95px;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  background-color: #aace79;
  position: absolute;
  content: '';
}
.orthodontic_table > div:nth-child(13)::after {
  width: 95px;
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


.orthodontic_compete .page_container{position: relative;}
.page_orthodontic .flex_between_items_start:nth-child(1) > div h4::before {
  content: ' ';
}

.page_orthodontic .flex_between_items_start:nth-child(3) > div h4::before {
  // content: 'Step 2';
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/deda966d1aaa92c1.png) no-repeat;
}
.page_orthodontic .flex_between_items_start:nth-child(4) > div h4::before {
  // content: 'Step 2';
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/deda966d1aaa92c1.png) no-repeat;
}
.page_orthodontic .flex_between_items_start_continue:nth-child(1) > div h4::before {
  // content: 'Step 3';
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/deda966d1aaa92c1.png) no-repeat;
}
.page_orthodontic .flex_between_items_start_continue:nth-child(2) > div h4::before {
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/75d9cd0d33de2d35.png) no-repeat;
}
.page_orthodontic .flex_between_items_start_continue:nth-child(3) > div h4::before {
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/9fd89cf90984354a.png) no-repeat;
}
.page_orthodontic .flex_between_items_start_continue:nth-child(4) > div h4::before {
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/e43a24f5931f8d8f.png) no-repeat;
}
.page_orthodontic .flex_between_items_start_continue:nth-child(5) > div h4::before {
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/bcb122d078269f66.png) no-repeat;
}
.page_orthodontic .flex_between_items_start_continue:nth-child(6) > div h4::before {
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/e43a24f5931f8d8f.png) no-repeat;
}
.page_orthodontic .flex_between_items_start_continue:nth-child(7) > div h4::before {
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/bcb122d078269f66.png) no-repeat;
}
.page_orthodontic .flex_between_items_start_continue:nth-child(8) > div h4::before {
  top:8px;
  width: 50px;
  height: 50px;
  background: url(https://static.cmereye.com/imgs/2022/11/5f2b9d4f44128741.png) no-repeat;
}
@media screen and(min-width:768px) {
  .tab-control .active{
    span{
      color: #ECB3AC !important;
    }
  }
  .tab-control{
    display: flex;
    justify-content: center;
    padding: 40px 0;
    cursor: pointer;
    .tab-control-item{
      padding: 0 20px;
      span{
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
        border-bottom: 1px solid #ECB3AC;
      }
    }
  }
  ::v-deep .swiper-button-next, .swiper-button-prev{
    display: none;
  }
    .thumb-example {
    height: 480px;
    background-color: #fff;
  }
  .swiper-slide{
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
    ::v-deep .swiper-pagination{
    display:none;
  }
  .orthodontic_form_background{/* Pink Light */
  background: #FCF4F2;
 }
  // 瓷貼片過程一覽
  .cipian_one_title{
    display: flex;
    margin-left: 28%;
  }
  .compete_bac .compete_bac_box{
    float: right;
  }
  .orthodontic_compete .compete_one{
    position: absolute;
    width: 47%;
    margin: 19px 0 0 58px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    p{
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
  .orthodontic_compete .compete_two{
    position: absolute;
    width: 52%;
    display: flex;
    margin-top: 161px;
    flex-direction: row-reverse;
    padding-left: 57px;
    p{
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
  .orthodontic_compete .compete_four{
    position: absolute;
    width: 52%;
    display: flex;
    margin-top: 375px;
    flex-direction: row-reverse;
    padding-left: 57px;
    align-items: flex-end;
    p{
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
  .orthodontic_compete .compete_three{
    position: absolute;
    width: 42%;
    margin: 269px 0 0 96px;
    display: flex;
    align-items: flex-end;
    p{
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
  // 即日特快全瓷牙貼片 顶部小圆
 .p-fast{
    position: unset;
    left: 19%;
    height: 100px;
    width: 100px;
    font-family: "Songti TC";
    font-style: normal;
    font-weight: 500;
    font-size: 29px;
    line-height: 37px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ECB3AC;
    background: #fff;
    border-radius: 50%;
    justify-content: center;
    box-shadow: 0px 0px 3.36508px 3px rgba(226, 163, 156, 0.3);
 }
  .continue_box {
    h4{
      padding-left: 56px;
    }
    p{
      padding-left: 56px;
    }
  }
  .orthodontic_table > div:nth-child(4n+4){grid-column: span 5/span 5;}
  .orthodontic_table>div:nth-child(1){order: 2;}
.orthodontic_table>div:nth-child(2){order: 1;}
.orthodontic_table>div:nth-child(3){order: 3;}
.orthodontic_table>div:nth-child(4){order: 4; background: #aace79;} 
.orthodontic_table>div:nth-child(5){order: 4} 
.orthodontic_table>div:nth-child(6){order: 6} 
.orthodontic_table>div:nth-child(7){order: 8} 
.orthodontic_table>div:nth-child(8){order: 8} 
.orthodontic_table>div:nth-child(9){order: 9} 
.orthodontic_table>div:nth-child(10){order: 11}  
.orthodontic_table>div:nth-child(11){order: 10} 
.orthodontic_table>div:nth-child(12){order: 12} 
.orthodontic_table>div:nth-child(13){order: 14} 
.orthodontic_table>div:nth-child(14){order: 14;grid-column: span 4/span 4;    background: rgb(251, 240, 238); } 
.orthodontic_table>div:nth-child(15){order: 15;  background: rgb(238, 245, 228); } 
.orthodontic_table>div:nth-child(16){order: 16;background: rgb(238, 245, 228);} 
.orthodontic_table>div:nth-child(16)::before{height: 0;}
.orthodontic_table>div:nth-child(17){order: 17} 
.orthodontic_table>div:nth-child(18){order: 18;background: rgb(248, 228, 224); } 
.orthodontic_table>div:nth-child(19){order: 19; background: rgb(224, 237, 206); } 
.orthodontic_table>div:nth-child(20){order: 20;
    background: rgb(224, 237, 206); } 
  .orthodontic_table>div:nth-child(21){order: 21;grid-column: span 2/span 2; } 
  .orthodontic_table>div:nth-child(21)::after{
    width: 95px;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #ecb3ac;
    position: absolute;
    content: "";
  }
   .orthodontic_table>div:nth-child(22){order: 22;grid-column: span 4/span 4; } 
   .orthodontic_table>div:nth-child(23){order: 23;grid-column: span 4/span 4;  background: rgb(238, 245, 228);} 
   .orthodontic_table>div:nth-child(23)::before{
    height: 0;
   }
   .orthodontic_table>div:nth-child(24){order: 24;grid-column: span 5/span 5;  background: rgb(238, 245, 228);} 
    .page_body_header{background-image: url(https://static.cmereye.com/imgs/2022/11/de166a90eedeb7fd.jpg);background-size: 100% auto;background-repeat: no-repeat;background-position: top;background-attachment: fixed;
 width:100%; }
  .page_body_header_banner{background-image: url(https://static.cmereye.com/imgs/2022/11/8b566367bafbbf32.png);background-repeat: no-repeat;background-position: top;background-attachment: fixed;
 width:100%; 
  .page_body_header_fixed{ padding: 70px 130px;position: fixed;width: 100%;height:35vw;top: 0;left: 0;right: 0;margin: auto;}
  .head_booking{font-family: 'Songti TC';}
  .head_banner_text{position: relative; z-index: -5; width: 50%; float: right; height: 87%; justify-self: center; display: flex; justify-content: flex-end; align-items: center;position: absolute;right: 0;top:0;
   .head_banner_text_p{position: absolute;z-index: -20; left: 0; max-width: 720px;font-family: 'Songti TC'; font-style: normal; font-weight: 400; font-size: 18px; line-height: 35px; /* or 194% */ color: #666666;margin-top: -100px;}
  }
}
}
@media screen and(max-width:768px) {

    .slide {

      img {
 
        width: 100%;
        height: 100%;
        
      }
    }
  
  .tab-control .active{
    span{
      color: #ECB3AC !important;
    }
  }
  .tab-control{
    display: flex;
    justify-content: center;
    padding: 12px 0;
    cursor: pointer;
    .tab-control-item{
      padding: 0 20px;
      span{
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
        border-bottom: 1px solid #ECB3AC;
      }
    }
  }
  ::v-deep .swiper-button-prev:after {
    display: none;
  }
  
  ::v-deep .swiper-button-next:after{
    display: none;
  }
  .page_body_header_banner .head_banner_text .p-fast{
    position: unset;
    left: 19%;
    height: 17vw;
    width: 17vw;
    font-family: "Songti TC";
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ECB3AC;
    background: #fff;
    border-radius: 50%;
    justify-content: center;
    box-shadow: 0px 0px 3.36508px 3px rgb(226 163 156 / 30%);
 }
  .orthodontic_box img{
    max-width: 20vw;
  }
  .orthodontic_title .six_pro::after{
    position: absolute;
    left: -40px;
    right: 0;
    top: 76px;
    width: 90vw;
    content: "";
    height: 1px;
    background: #666666;
  }
  .orthodontic_box > div{
    width: calc((100% - 0px) / 2);
    margin-bottom: 2vw;
    display: flex;
    align-items: center;
    width: auto;
  }
  .continue_box {
    h4{
      padding-left: 13vw;
    }
    p{
      padding-left: 13vw;
    }
  }
  .page_body_header_banne{
    padding-bottom: 96px;
  }
  .orthodontic_title{
    padding-left: 12vw;
    text-align: inherit;

    h2{
      padding-left: 0vw;

    }
  }
  .orthodontic_step .flex_between_items_start div{
    padding-left: 0 ;
  }
  .orthodontic_compete .swiper-slide{padding-bottom: 28px;}
  .orthodontic_table{padding-bottom: 0 !important;}
  .orthodontic_table > div:nth-child(4n+4){grid-column: span 5/span 5;}
  .orthodontic_table>div:nth-child(1){order: 2;}
.orthodontic_table>div:nth-child(2){order: 1;}
.orthodontic_table>div:nth-child(3){order: 3;}
.orthodontic_table>div:nth-child(4){order: 4; background: #aace79;} 
.orthodontic_table>div:nth-child(5){order: 4} 
.orthodontic_table>div:nth-child(6){order: 6} 
.orthodontic_table>div:nth-child(7){order: 8} 
.orthodontic_table>div:nth-child(8){order: 8} 
.orthodontic_table>div:nth-child(9){order: 9} 
.orthodontic_table>div:nth-child(10){order: 11}  
.orthodontic_table>div:nth-child(11){order: 10} 
.orthodontic_table>div:nth-child(12){order: 12} 
.orthodontic_table>div:nth-child(13){order: 14} 
.orthodontic_table>div:nth-child(14){order: 14;grid-column: span 4/span 4;    background: rgb(251, 240, 238); } 
.orthodontic_table>div:nth-child(15){order: 15;  background: rgb(238, 245, 228); } 
.orthodontic_table>div:nth-child(16){order: 16;background: rgb(238, 245, 228);} 
.orthodontic_table>div:nth-child(16)::before{height: 0;}
.orthodontic_table>div:nth-child(17){order: 17} 
.orthodontic_table>div:nth-child(18){order: 18;background: rgb(248, 228, 224); } 
.orthodontic_table>div:nth-child(19){order: 19; background: rgb(224, 237, 206); } 
.orthodontic_table>div:nth-child(20){order: 20;
    background: rgb(224, 237, 206); } 
  .orthodontic_table>div:nth-child(21){order: 21;grid-column: span 2/span 2; } 
  .orthodontic_table>div:nth-child(21)::after{
    width: 95px;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #ecb3ac;
    position: absolute;
    content: "";
  }
   .orthodontic_table>div:nth-child(22){order: 22;grid-column: span 4/span 4; } 
   .orthodontic_table>div:nth-child(23){order: 23;grid-column: span 4/span 4;  background: rgb(238, 245, 228);} 
   .orthodontic_table>div:nth-child(23)::before{
    height: 0;
   }
   .orthodontic_table>div:nth-child(24){order: 24;grid-column: span 5/span 5;  background: rgb(238, 245, 228);} 

  .page_body_header_banner .head_banner_text{display: flex;  justify-content: center;}
    .page_body_header_banner{    padding-bottom: 95px;}


  .orthodontic_table {
    width: 148vw;
  margin: auto;
}
.orthodontic_swiper{
  ::v-deep .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap,29px);
    
}
::v-deep .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,15px));
    height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,15px));
    display: inline-block;
    border-radius: 50%;
    background: #F6D9D6;
    opacity: var(--swiper-pagination-bullet-opacity, 1);

     
}
::v-deep .swiper-pagination-bullet:after{
  content: "";
    display: inline-block;
    position: relative;
    top: -8px;
    left: 14px;
    width: 60px;
    height: 2px;
    background-color: #ECB3AC;
    
}
::v-deep .swiper-pagination-bullet:nth-child(4)::after{
  height: 0px;
}
::v-deep .swiper-pagination-bullet-active{
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: #ECB3AC !important;
}
}

.orthodontic_table_swiper{

  ::v-deep .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 82px;
    left: 49px;
    width: 100%;
    // top: 161vw;
  }

  ::v-deep .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap,29px);
    
}
::v-deep .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,10px));
    height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,10px));
    display: inline-block;
    border-radius: 50%;
    background: #EEF5E4;
    opacity: var(--swiper-pagination-bullet-opacity, 1);

     
}
::v-deep .swiper-pagination-bullet:after{
  content: "";
    display: inline-block;
    position: relative;
    top: -11px;
    left: 8px;
    width: 60px;
    height: 2px;
    background-color: #AACE79;
    
}
::v-deep .swiper-pagination-bullet:nth-child(2)::after{
  height: 0px;
}
::v-deep .swiper-pagination-bullet-active{
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: #AACE79 !important;
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
  content: '牙齒過小';
}
.pic-three  .text-center:nth-child(1):after {
  content: '四環素牙';
}
.pic-three  .text-center:nth-child(2):after {
  content: '齒列擠擁';
}
.pic-four .text-center:nth-child(1):after {
  content: '牙齒縫隙過大';
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
@media (min-width:1400px) and (max-width:1600px) {
  .page_body_header_banner .head_banner_text{
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
  .header:after{
    content: "";
    background-image: url(https://img.cmereye.com/i/2022/09/26/63314f0598440.png);
    background-repeat: repeat-x;
    background-position: center 20px;
    height: 96px;
    width: 100%;
    position: absolute;
    z-index: -11;
    left: 0px;
    bottom: 0px;
    animation-name: wave1;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    -webkit-animation-name: wave1;
    -webkit-animation-duration: 20s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }
  .header:before {
    content: "";
    background-image: url(https://img.cmereye.com/i/2022/09/26/63314ea491c4a.png);
    background-repeat: repeat-x;
    background-position: center 20px;
    height: 96px;
    width: 100%;
    position: absolute;
    z-index: -12;
    left: 0px;
    bottom: 0px;
    animation-name: wave2;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    -webkit-animation-name: wave2;
    -webkit-animation-duration: 20s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
}
}
</style>
  