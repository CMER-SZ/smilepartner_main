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
const fromhere = ref('經系統分析,該表單來自隱形牙箍簡易版頁面,来源地址：https://smilepartner.hk/clear-aligners-lite')
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
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.clear-aligners-lite.title')),
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
        src="https://img.cmereye.com/i/2022/09/27/633271306fae1.jpg"
        srcset="
        https://static.cmereye.com/imgs/2022/11/ab0ebce6b437ed99.jpg 400w,
        https://static.cmereye.com/imgs/2022/11/ab0ebce6b437ed99.jpg 640w,
          https://img.cmereye.com/i/2022/09/22/632c2c39558fe.jpg
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
                src="https://static.cmereye.com/imgs/2022/12/40d44e5b79aa59f9.png"
                alt=""
                srcset=""
              />
            </div>
            <!-- <h2 class="text-pink text-center text-4xl mb-6">希瑪微笑矯齒</h2> -->
            <div target="_blank" class="text-pink text-center flex justify-center mt-4 items-center banner_top_mb">
              <img src="https://static.cmereye.com/imgs/2022/11/3d98c18da0512c50.png" 
              alt="">
              <span class="md:text-5xl">隱形牙箍簡易版</span>
            </div>
            <div class="banner-text">
            <p class="pt-8">我們選用的隱形牙箍簡易版療程，全程由註冊牙醫跟進，以知名隱形牙箍品牌科技，為你集中排靚最多上下顎各12隻前排牙齒，高效快捷，適合想簡單排齊前牙、預算有限的你。
            </p>
            <p class="teshu_mb">*矯齒療程時間因人而異，如有疑問，請諮詢你的牙科醫生。</p>
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
    <PageNavbar class="pcShow" />
  </slot>



  <div class="page_orthodontic md:pb-20 ">
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
        隱形牙箍簡易版矯齒過程
        </h2>
      </div>

      <div class="orthodontic_step page_container">
        <div class="flex_between_items_start">
          <div class="sm:w-6/13">
            <h4 class="py-5 text-lg font-normal">諮詢並檢查個人牙齒狀況</h4>
            <p class="text-md">
              牙醫與患者諮詢後，會先為牙齒照X光片，以及做口腔內掃瞄或牙模套印，以建立牙齒資料，評估隱形牙箍簡易版療程，能否可達到你對矯正牙齒的期望。
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://img.cmereye.com/i/2022/09/27/63325fb6cdf6e.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <div class="flex_between_items_start">
          <div class="sm:w-6/13">
            <h4 class="py-5 text-lg font-normal">訂制矯齒計劃</h4>
            <p class="text-md">
              經牙醫診斷後，會為你度身設計專屬的箍牙療程計劃，以及詳細講解令患者明白整個療程過程及效果。
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://img.cmereye.com/i/2022/09/27/63325fb6521da.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <div class="flex_between_items_start">
          <div class="sm:w-6/13">
            <h4 class="py-5 text-lg font-normal">訂製牙套並開始療程</h4>
            <p class="text-md">
              我們選用的隱形牙箍品牌會將牙醫治療方案製作成一系列沿牙齦剪裁的專屬牙箍，試戴後無問題，療程便正式開始。期間牙醫會全程跟進你的矯齒情況、需要時會為你調整，亦會解答你的疑問，令療程安全又放心。
            </p>
          </div>
          <div class="sm:w-6/13">
            <img
              src="https://img.cmereye.com/i/2022/09/27/63325fb5dff4d.jpg"
              class="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
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
        

        適合有
          <span class="text-2xl text-green">簡單至一般</span>前排牙齒問題的你
        </p>
        <iframe class="pcShow" width="999" height="563" src="https://www.youtube.com/embed/3Aa6VnRgQow" title="【#希瑪牙科中心中環中建大廈店】1分鐘帶你參觀希瑪牙科中環店📽️📺👀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="mbShow" width="100%" height="220" src="https://www.youtube.com/embed/3Aa6VnRgQow" title="【#希瑪牙科中心中環中建大廈店】1分鐘帶你參觀希瑪牙科中環店📽️📺👀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
     

    </div>

    <div class="orthodontic_condition" style="margin-top: 0 !important;">
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
        <div class="orthodontic_pic_scroll pcShow">
          <div class="orthodontic_pic grid grid-cols-4 sm:flex sm:gap-0">
            <div class="text-center">
              <img
                class=""
                src="https://static.cmereye.com/imgs/2022/09/682634db00b9874c.jpg"
                alt=""
              />
            </div>
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
                src="https://static.cmereye.com/imgs/2022/09/01a51e8b05c043fc.jpg"
                alt=""
              />
            </div>
            <div class="text-center">
              <img
                class=""
                src="https://static.cmereye.com/imgs/2022/09/264a2b69f5567fa3.jpg"
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
              :slides-per-view="1"
              :space-between="50"
              navigation
              :scrollbar="{ draggable: true }" >
              <swiper-slide>
                <div class="orthodontic_pic pic-one" >
                  <div class="text-center mt-5">
                    <img
                      class=""
                      src="https://static.cmereye.com/imgs/2022/09/682634db00b9874c.jpg"
                      alt=""
                    />
                  </div>
                  <div class="text-center">
                    <img
                      class=""
                      src="https://static.cmereye.com/imgs/2022/09/579ae24e57592617.jpg"
                      alt=""
                    />
                  </div>
              </div>
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_pic  pic-two" >
                  <div class="text-center mt-5">
                    <img
                      class=""
                      src="https://static.cmereye.com/imgs/2022/09/01a51e8b05c043fc.jpg"
                      alt=""
                    />
                  </div>
                  <div class="text-center">
                    <img
                      class=""
                      src="https://static.cmereye.com/imgs/2022/09/264a2b69f5567fa3.jpg"
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
    <component :is="form" :smilepartner_from="fromhere"></component>
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
    <div class="orthodontic_compete pb-12">
      <div class="page_container">
        <div
          class="
            orthodontic_title
            text-left
            sm:text-center
            my-16
            sm:mb-14
            sm:my-28
          "
        >
          <h2
            class="
              text-primary
              font-normal
              text-lg
              md:text-2xl
              inline-block
              relative
            "
          >
          隱形牙箍簡易版VS隱形牙箍全方位矯齒療程
          </h2>
        </div>
        <div class="orthodontic_table_scroll pcShow">
          <div class="orthodontic_table grid grid-cols-10">
            <div>隱形牙箍簡易版</div>
            <div></div>
            <div>隱形牙箍全方位矯齒</div>
            <div>
              適合簡單至一般矯齒個案，針對矯正前排上下共24隻牙齒
            </div>
            <div>適合個案</div>
            <div>可處理簡單至複雜矯齒個案，矯正全部牙齒，包括咬合、倒及等問題</div>
            <div>價格一般較隱形牙箍全方位矯齒療程優惠</div>
            <div>療程費用</div>
            <div>限定體驗價</div>
            <div>
              最快6個月*
            </div>
            <div>療程時間</div>
            <div>
              平均 12 – 18 個月*
            </div>
          </div>
          <span class="mt-12 flex justify-center">*矯齒療程時間因人而異，如有疑問，請諮詢你的牙科醫生。</span>
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
              :scrollbar="{ draggable: true }" >
              <swiper-slide>
            <div class="orthodontic_table grid grid-cols-10">
            <div>隱形牙箍簡易版</div>
            <div></div>
            <div>隱形牙箍全方位矯齒</div>
            <div>
              適合簡單至一般矯齒個案，針對矯正前排上下共24隻牙齒
            </div>
            <div>適合個案</div>
            <div>可處理簡單至複雜矯齒個案，矯正全部牙齒，包括咬合、倒及等問題</div>
            <div>價格一般較隱形牙箍全方位矯齒療程優惠</div>
            <div>療程費用</div>
            <div>限定體驗價</div>
            <div>
              最快6個月*
            </div>
            <div>療程時間</div>
            <div>
              平均 12 – 18 個月* 
            </div>
            <!-- <div>
              收集及擁有來自全球隱適美使用者資料庫，超過1200萬大數據不斷更新及調整矯正技術，提高成效及舒適度
            </div>
            <div>數據支援</div>
            <div>未有收集資料庫或使用者數據甚少</div>
            <div>
              配合SmartForce
              專利附件粒粒，能精細移動牙齒及控制牙腳移動，令療程更加有效
            </div>
            <div>移動附件及預測技術</div>
            <div>少量或沒有</div> -->
            
          </div>
          
              </swiper-slide>
              <span class="mt-12  justify-center">*矯齒療程時間因人而異，如有疑問，請諮詢你的牙科醫生。</span>
              <swiper-slide></swiper-slide>
              
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
                      >隱形牙箍簡易版只矯正一部分牙齒，安全嗎？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    牙醫會按你的實際牙齒情況及需求，以評估是否適合此療程。而隱形牙箍簡易版累積多年科研的技術，而且全程有註冊牙醫監測跟進，確保箍牙療程有效又安全。
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
                      >為何相比隱適美全方位矯齒療程，隱形牙箍簡易版價格比較優惠？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    隱形牙箍簡易版為隱形牙箍全方位矯齒療程的副線，主要針對簡單至一般的前排牙齒排列問題，移動最多24隻前排牙齒，但亦同時有註冊牙醫主理、設計及監察，適合想排齊前排牙齒、曾進行矯齒但牙齒有輕微走位，以及預算有限的你。
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
  content: '輕度牙縫過大';
}
.orthodontic_pic .text-center:nth-child(2):after {
  content: '輕度咬合不正';
}
.orthodontic_pic .text-center:nth-child(3):after {
  content: '輕度錯咬';
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
  .orthodontic_condition{
    background-image: url(https://img.cmereye.com/i/2022/09/26/6331701920fdd.jpg);
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  margin-top: 368px;
  padding-top: 192px;
  }
  .page_orthodontic{
    iframe{
    position: absolute;
    margin-top: 59px;
  }
  }
  
  .page_body_header_banner{background-image: url(https://static.cmereye.com/imgs/2022/11/729232658bd1ddb4.jpg);background-size: 100% auto;background-repeat: no-repeat;background-position: top;background-attachment: fixed;
 width:100%; 
  .page_body_header_fixed{ padding: 70px 130px;position: fixed;width: 100%;height:35vw;top: 0;left: 0;right: 0;margin: auto;}
  .head_booking{font-family: 'Songti TC';}
  .head_banner_text{position: relative; z-index: -5; width: 50%; float: right; height: 100%; justify-self: center; display: flex; justify-content: flex-end; align-items: center;position: absolute;right: 0;top:0;
   .head_banner_text_p{position: absolute;z-index: -20; left: 0; max-width: 720px;font-family: 'Songti TC'; font-style: normal; font-weight: 400; font-size: 18px; line-height: 35px; /* or 194% */ color: #666666;margin-top: -100px;}
  }
}
}
@media screen and(max-width:768px) {

 
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
    bottom: 45px;
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
    img{width: 73%;}
    span{white-space: pre;font-weight: 400;
    font-size: 20.2508px;
    line-height: 28px;}
  }
  .page_body_header_banner{ height: 227vw;}
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
  content: '輕度牙縫過大';
}
.pic-one .text-center:nth-child(2):after {
  content: '輕度咬合不正';
}
.pic-two .text-center:nth-child(1):after {
  content: '輕度錯咬';
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
</style>
  