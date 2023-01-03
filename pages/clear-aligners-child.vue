<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import environmentVue from '~~/composables/environment/environment.vue'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
import form from '../composables/newform/form.vue'
import 'swiper/css/pagination' // 轮播图底面的小圆点
const modules = [Autoplay, Pagination, Navigation, Scrollbar]
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
const fromhere = ref('經系統分析,該表單來自隱形牙箍兒童專線頁面,来源地址：https://smilepartner.hk/clear-aligners-child')
// compiler macro
definePageMeta({
  layout: 'page',
})
onMounted(() => {
  console.log('312');
  
  setTop()
})
const setTop = () => {
  let s =document.documentElement.scrollTop;
// 定时器 每10ms执行一次
let timer=window.setInterval(function (){
            // 每次走50
            s-=50;
            //  到顶部后清除定时器  必须清定时器  不然就死循环了
            if (s<0){
                window.clearInterval(timer);
            }
            window.scrollTo(0,s);
        },10);                
     
  
}
useHead(() => ({
  title: capitalize(t('pages.case.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.invisalign.description'),
    },
  ],
}))
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
        src="https://static.cmereye.com/imgs/2022/12/29afff14b9956318.jpg"
        srcset="
        https://static.cmereye.com/imgs/2022/12/05526e1f035e9857.png 400w,
        https://static.cmereye.com/imgs/2022/12/05526e1f035e9857.png 640w,
        https://static.cmereye.com/imgs/2022/12/29afff14b9956318.jpg
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
            <div class="head_banner_img">
              <img
                class="m-auto"
                src="https://static.cmereye.com/imgs/2022/12/33dab0ecfc325e9a.png"
                alt=""
                srcset=""
              />
            </div>
            <!-- <h2 class="text-pink text-center text-4xl mb-6">希瑪微笑矯齒</h2> -->
            <div target="_blank" class="text-pink text-center flex justify-center mt-4 items-center banner_top_mb">
              <img src="https://static.cmereye.com/imgs/2022/12/398e13e885db0aa2.png" 
               alt="">
              <span class="md:text-5xl">隱形牙箍兒童專線</span>
            </div>
            <div class="banner-text">
            <p class="pt-8">專為正值換牙及發育時期小朋友設計的矯齒療程，在註冊牙醫跟進下，證實能改善簡單至複雜的早期兒童牙齒問題，如牙縫過大、錯咬、牙弓狹小令牙齒擠迫不齊等，讓你的小朋友於成長路上能盡情展現燦爛笑容。
            </p>
            <div class=" text-center mbShow"  style="    margin: 7vw 10vw;display: flex;flex-direction: column;">
          <a :href="$t('banners.booking')" target="_blank" class="head_button"
            ><p class="pt-1 text-primary" style="position: unset;padding:0;">
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
  </div>

  <slot name="header">
    <PageNavbar  class="pcShow"/>
  </slot>

 
<div class="page_orthodontic md:pb-20  ">
  <div class="page_container">
    <div
        class="
          orthodontic_title
          justify-center
          text-center
          sm:text-center
          mt-5
          py-14
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
            pcShow
          "
        >
        隱形牙箍兒童專線3大優點
        </h2>
        <h2
          class="
            text-primary
            font-normal
            text-xl
            md:text-2xl
            inline-block
            relative
            mbShow
          "
          style="text-align: initial;"
        >
        隱形牙箍兒童專線<br>3大優點
        </h2>
      </div>
      <div class="md:flex Advantages" >
        <div class="Advantages-box">
          <img src="https://static.cmereye.com/imgs/2022/12/f16c338cee491f14.png" alt="">
          <div>
            <p class="text-center text-green mt-3">無礙日常活動</p>
            <span> 相比傳統鋼箍，隱形牙箍可以避免鋼線或骨釘刮傷口腔，同時小朋友於吹奏樂器、做運動、演講時，都可以除低隱形牙箍，切合日常需要，無阻他們的多元興趣發展！</span>
          </div>
        </div>
        <div class="Advantages-box">
          <img src="https://static.cmereye.com/imgs/2022/12/9286f395893e34df.png" alt="">
          <div>
            <p class="text-center text-pink mt-3">有效了解小朋友佩戴牙箍時間</p>
            <span> 可於隱形牙箍上加上藍色依從性顯示點，方便你隨時檢查小朋友佩戴牙箍時間是否足夠，確保有最佳矯齒效果。</span>
          </div>
        </div>
        <div class="Advantages-box">
          <img src="https://static.cmereye.com/imgs/2022/12/36845ddc0f1516c0.png" alt="">
          <div>
            <p class="text-center text-green mt-3">複雜問題都可解決</p>
            <span>我們選用的隱形牙箍有「輔助翼托」設計，可達到將下顎向前移的作用，有效改善小朋友哨牙等問題。</span>
          </div>
        </div>
      </div>
  </div>
  
</div>
<div class="page_orthodontic orthodontic_compete md:pb-64 pb-28">
      <div class="page_container ">
        <div
        class="
          orthodontic_title
          text-center
          sm:text-center
          mt-5
          py-14
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
        小朋友牙齒不齊非小事
        </h2>
      </div>
        <div class="flex md:flex-row flex-col">
        
          <div class="w-full sm:px-4 compete_bac pcShow">
            <div class="compete_bac_box"> 
              <img src="https://static.cmereye.com/imgs/2022/12/5ddf8e49fc959140.jpg" alt="" class="compete_bac_1">
              <img src="https://static.cmereye.com/imgs/2022/12/111bd9beff5dca62.png" alt="" class="compete_bac_2">
            </div>
            <div class="compete_one"> 
            <img src="https://static.cmereye.com/imgs/2022/10/12403c3c5397b595.png" alt="">
            <p class="">   
                  <span class="text-pink">影響外觀、自信</span><br>
                  小朋友可能因牙齒排列問題，而不敢露齒笑，繼而或會影響他們的自信。</p>
            </div>
            <div class="compete_two"> 
              <img src="https://static.cmereye.com/imgs/2022/10/fc164c87854c5a6f.png" alt="">
              <p class="">   
                  <span class="text-pink">影響咀嚼及說話發音，嚴重可致面歪</span><br>
                  牙齒「錯咬」問題嚴重可致咀嚼困難，甚至影響說話發音，更有可能導致面歪，繼而需要進行調整顎骨手術。</p>             
            </div>
            <div class="compete_three"> 
            <img src="https://static.cmereye.com/imgs/2022/10/b882ae46d0f992d1.png" alt="">
            <p class="">   
                  <span class="text-pink">增加患上牙疾的風險</span><br>
                  牙齒不齊，日常較難徹底清潔牙齒，長久下來增加患上蛀牙及牙周病等牙齒疾病的風險。</p>
            </div>
            
          </div>
          <div class="mt-5 mbShow"  style="display: flex;justify-content: center;">
            <img
                    style="
                    position: absolute;
                    "
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
              :scrollbar="{ draggable: true }" >
             
              <swiper-slide>
                <div class=" orthodontic_compete_pic" >
                <div class="text-center"
                style="display: flex;flex-direction: column;align-items: center; padding-bottom: 18vw;   padding-top: 39vw;">
                <img src="https://static.cmereye.com/imgs/2022/10/12403c3c5397b595.png" alt="" class="mb-4">
                <p class="">   
                  <span class="text-pink ">影響外觀、自信</span><br>
                  小朋友可能因牙齒排列問題，而不敢露齒笑，繼而或會影響他們的自信。</p>
                </div>
              </div>
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_compete_pic" >
                  <div class="text-center" style="display: flex;flex-direction: column;align-items: center; padding-bottom: 18vw;   padding-top: 39vw;">      
                    <img src="https://static.cmereye.com/imgs/2022/10/fc164c87854c5a6f.png" alt=""  class="mb-4">
              <p class="">   
                  <span class="text-pink">影響咀嚼及說話發音，嚴重可致面歪</span><br>
                  牙齒「錯咬」問題嚴重可致咀嚼困難，甚至影響說話發音，更有可能導致面歪，繼而需要進行調整顎骨手術。</p>             
                </div>
               </div> 
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_compete_pic " >
                  <div class="text-center" style="display: flex;flex-direction: column;align-items: center; padding-bottom: 18vw;   padding-top: 39vw;">     
                    <img src="https://static.cmereye.com/imgs/2022/10/b882ae46d0f992d1.png" alt=""  class="mb-4">
            <p class="">   
                  <span class="text-pink">增加患上牙疾的風險</span><br>
                  牙齒不齊，日常較難徹底清潔牙齒，長久下來增加患上蛀牙及牙周病等牙齒疾病的風險。</p>
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
  <div class="page_orthodontic md:pb-20 ">
    <div class="flex flex-col items-center" style="display: none;">
        <p
          class="
            sm:mb-14
            mb-10
            text-primary text-center
            font-bold
            text-base
            tracking-widest-2x
            text-iframe-one
          "
        >
        

          把握  
          <span class="text-2xl text-green">矯齒黃金期</span>
          減低
          <span class="text-2xl text-green">治療複雜性</span>
        </p>
        <iframe class="pcShow" width="999" height="563" src="https://www.youtube.com/embed/3Aa6VnRgQow" title="【#希瑪牙科中心中環中建大廈店】1分鐘帶你參觀希瑪牙科中環店📽️📺👀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="mbShow" width="100%" height="220" src="https://www.youtube.com/embed/3Aa6VnRgQow" title="【#希瑪牙科中心中環中建大廈店】1分鐘帶你參觀希瑪牙科中環店📽️📺👀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    <div class="orthodontic_condition1" style="padding-top: 0; margin-top:0;">
      <component :is="form" :smilepartner_from="fromhere"></component>
    </div>
    <div class="page_container">
      <div
        class="
          orthodontic_title
          step_title
          text-center
          sm:text-center
          mt-5
          py-14
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
        隱形牙箍兒童專線流程
        </h2>
      </div>

      <div class="orthodontic_step page_container">
        <div class="flex_between_items_start">
          <div class="sm:w-6/13">
            <h4 class="py-5 text-lg font-normal">諮詢並檢查小朋友牙齒狀況</h4>
            <p class="text-md">
              牙醫與家長諮詢和溝通之後，會先為小朋友牙齒拍照、照X光片，以及做口腔內掃瞄或牙模套印，以建立牙齒資料，之後就會詳細講解令家長及小朋友明白整個療程過程及效果。
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/12/25a46e35ee52278b.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <div class="flex_between_items_start">
          <div class="sm:w-6/13">
            <h4 class="py-5 text-lg font-normal">訂制矯齒計劃</h4>
            <p class="text-md">
              經牙醫專業診斷，為小朋友度身訂造3D矯齒治療方案。
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/12/2d37e0c26b2e2d27.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <div class="flex_between_items_start">
          <div class="sm:w-6/13">
            <h4 class="py-5 text-lg font-normal">訂製牙套並開始療程</h4>
            <p class="text-md">
              我們選用的隱形牙箍品牌會將牙醫治療方案製作成一系列沿牙齦剪裁的專屬牙箍，再寄至牙醫診所。之後就會聯絡家長，陪同小朋友到診所試戴及評估效果。
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://static.cmereye.com/imgs/2022/12/dbea10115d15eb4f.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    
     

    </div>
    <div class="orthodontic_share">
      <div class="page_container_show">
        <div class="orthodontic_title text-center sm:text-center my-20 justify-center">
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
            成功個案分享
          </h2>
        </div>
        <iframe class="pcShow" width="999" height="563" src="https://www.youtube.com/embed/ljaszj7v-rM" title="#我希望我嘅牙齒變得… | Invisalign 隱適美 | 個案分享 X 陽光型男Model 賀邦Bron👦🏻" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="mbShow" width="100%" height="220" src="https://www.youtube.com/embed/ljaszj7v-rM" title="#我希望我嘅牙齒變得… | Invisalign 隱適美 | 個案分享 X 陽光型男Model 賀邦Bron👦🏻" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
                      >小朋友應在換牙後，才進行矯齒療程嗎？</span>
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    小朋友的牙齒排列問題不可小看，愈遲改善，影響範圍就愈廣泛。及早開始矯齒，不但有助減低治療複雜性，改善面型同輪廓等問題都會較有效。
                    建議家長可以考慮在小朋友約7歲的換牙階段，找牙醫做相關檢查及評估。
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
                      >隱形牙箍兒童專線矯齒療程安全嗎？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    我們選用的隱形牙箍得到美國FDA認證其安全性，採用獲專利物料及專屬附件粒粒，可針對小朋友細小的牙冠，給予輕柔持續的移動力，亦能控制牙冠及牙腳安全移動。
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
  background-image: url(https://img.cmereye.com/i/2022/09/26/63318e7a7c60a.jpg);
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
.orthodontic_table > div:nth-child(11)::before{
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
.orthodontic_pic .text-center:nth-child(1):after {
  content: '牙縫過大';
}
.orthodontic_pic .text-center:nth-child(2):after {
  content: '開  咬';
}
.orthodontic_pic .text-center:nth-child(3):after {
  content: '錯咬/反咬合';
}
.orthodontic_pic .text-center:nth-child(4):after {
  content: '前排齒列擠擁';
}
.orthodontic_pic {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.orthodontic_pic > div {
    width: calc((100% - 100px) / 4);
    margin-bottom: 70px;
    margin-left: 10px;
    margin-right: 10px;
}
.orthodontic_pic > div img {
  margin: auto;
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
  
// 处理点点

  // 小朋友牙齒不齊非小事
  .page_orthodontic{
  .compete_one {
    position: absolute;
    width: 52%;
    right: 18px;
    margin: 45px 0 0 58px;
    img{position: absolute;margin: 0 0 0px 12px;}
    p{margin-top: 57px;
    margin-left: 57px;
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;}
    }
    .compete_two {
      position: absolute;
    width: 44%;
    display: flex;
    right: 16px;
    margin-top: 235px;
    img{position: absolute;margin: -20px 0 0 -30px;}
    p{margin-top: 57px;
    margin-left: 57px;
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;}
    }
    .compete_three{
      position: absolute;
      width: 38%;
      right: 0;
      margin: 443px 0 0 96px;
      img{position: absolute; margin: 15px 0 0px -14px;}
      p{margin-top: 57px;
      margin-left: 57px;
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;}
    }
}
  .compete_bac{
  .compete_bac_box{float: left;}
  .compete_bac_1{top: 25px;position: relative;}
  .compete_bac_2{    margin-top: -132px;
    margin-left: 298px;
    /* position: fixed; */
    position: absolute;}
}

.Advantages-box{
  padding: 0 14px;
  height: auto;
    flex: 1;
    p{
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      margin-bottom: 30px;
    }
    span{
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
      /* or 194% */
      margin-top: 30px;
      text-align: justify;
    }
}

  .orthodontic_share{
  background-image: url(https://static.cmereye.com/imgs/2022/11/adb8a15c4a48e57b.jpg);
  background-size: 100% 100%;
  background-position: top;
  background-repeat: no-repeat;
  padding-bottom: 80px;
  iframe{
    margin: 0 auto;
    position: relative !important;
  }
}
  .teshu_mb{
    margin-top: 22px;
  }
  .flex_between_items_start{
    margin-bottom: 50px !important;
  }
  .orthodontic_condition1{
  margin-top: 343px;
  padding-top: 192px;
  }
  .page_orthodontic{
    iframe{
    position: absolute;
    margin-top: 59px;
  }
  }
  
  .page_body_header_banner{background-image: url(https://static.cmereye.com/imgs/2022/12/29afff14b9956318.jpg);background-size: 100% auto;background-repeat: no-repeat;background-position: top;background-attachment: fixed;
 width:100%; 
  .page_body_header_fixed{ padding: 70px 130px;position: fixed;width: 100%;height:35vw;top: 0;left: 0;right: 0;margin: auto;}
  .head_booking{font-family: 'Songti TC';}
  .head_banner_text{position: relative; z-index: -5; width: 50%; float: right; height: 100%; justify-self: center; display: flex; justify-content: flex-end; align-items: center;position: absolute;right: 0;top:0;
   .head_banner_text_p{position: absolute;z-index: -20; left: 0; max-width: 720px;font-family: 'Songti TC'; font-style: normal; font-weight: 400; font-size: 18px; line-height: 35px; /* or 194% */ color: #666666;margin-top: -100px;}
  }
}
}
@media screen and(max-width:768px) {
  // 处理点点
.orthodontic_compete{
  ::v-deep .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap,29px);
  
}

::v-deep .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 50px;
  }

  ::v-deep .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,15px));
    height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,15px));
    display: inline-block;
    border-radius: 50%;
    background: #E6F0D7;
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
    background-color: #AACE79;
    
}
::v-deep .swiper-pagination-bullet:nth-child(3)::after{
  height: 0px;
}
::v-deep .swiper-pagination-bullet-active{
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: #AACE79 !important;
}
}
  .Advantages-box{
  height: auto;
    flex: 1;
    margin-bottom: 30px;

    p{
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      margin-bottom: 30px;
    }
    span{
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
      /* or 194% */
      margin-top: 30px;
      text-align: justify;
    }
}
  .orthodontic_share{
  background-image: url(https://static.cmereye.com/imgs/2022/11/683d18bbf920d3ee.png);
  background-size: 100% 100%;
  background-position: top;
  background-repeat: no-repeat;
  padding-bottom: 80px;
  iframe{
    margin: 0 auto;
    position: relative !important;
  }
}
  .orthodontic_step .flex_between_items_start > div:nth-child(1) h4::after{    position: absolute;
    left: -69px;
    right: 0;
    top: 0;
    width: 124%;
    content: "";
    height: 1px;
    background: #666666;}
  .mySwiper{padding-bottom: 109px;}
  .text-iframe-one{
    margin-left: 17vw;
    margin-right: 17vw;
  }
  .banner-text{
    position: absolute;
    left: 0;
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
  justify-content: flex-start;
}
  .orthodontic_compete .page_container::before{
    position: absolute;
    content: "";
    width: 12.5vw;
    height: 6.7vw;
    background-image: url(https://img.cmereye.com/i/2022/09/27/6332b6a7ada01.png);
    bottom: -37px;
    left: 0;
    right: 0;
    margin: auto;
    background-size: 100%;
    background-repeat: no-repeat;
    animation: translateX 1s ease-in-out alternate infinite;
  }
  ::v-deep .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{display: none;}
  ::v-deep .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{display: none;}
  .orthodontic_title{
    display: flex;
    padding-left: 10vw;
  }
  .page_body_header_banner .head_banner_text p{    position: relative;padding-top: 20px;}
  .page_body_header_banner .head_banner_text .teshu_mb{
    // position: absolute;
    z-index: -20;
    left: 0;
    max-width: 700px;
    font-family: "Songti TC";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    color: #666666;
    padding: 0 15px;
    padding-top: 20px;
  }
  .banner_top_mb{
    img{width: 75%;}
    span{white-space: pre;font-weight: 400;
    font-size: 20.2508px;
    line-height: 28px;}
  }
  .page_body_header_banner{ height: 202vw;}
  .page_body_header_banner .head_banner_text{margin-top: 85%}
  .page_body_header_fixed .head_banner_text_p .head_banner_img, .page_body_header_fixed .head_banner_text_p h2{    display: block;}
  .orthodontic_table {
    width: 148vw;
    margin: auto;
    padding-bottom: 26px;
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
::v-deep .swiper-pagination-bullet:nth-child(2)::after{
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
    left: 10px;
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
  content: '牙縫過大';
}
.pic-one .text-center:nth-child(2):after {
  content: '開  咬';
}
.pic-two .text-center:nth-child(1):after {
  content: '錯咬/反咬合';
}
.pic-two .text-center:nth-child(2):after {
  content: '前排齒列擠擁';
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
@media  only screen and (max-width: 1540px) and (min-width: 800px) {
  .page_body_header_banner .head_banner_text{
    height: 80% !important;
    width: 58% !important;
  }
  .teshu_mb{
    margin-top: 0px;
  }
  .page_body_header_banner .head_banner_text .head_banner_text_p p{
    padding-top: 1px;    
    font-size: 14px;
  }
}
@media screen and (min-width: 2400px) and (max-width: 2880px) {
  .page_body_header_banner .head_banner_text{
    top: -106px !important;
  }
}
</style>
  