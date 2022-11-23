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

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.invisalign.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.invisalign.description'),
    },
  ],
}))
</script>
  
  <template>
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
                src="https://static.cmereye.com/imgs/2022/11/9e64b3567ac0900b.png"
                alt=""
                srcset=""
              />
            </div>
            <!-- <h2 class="text-pink text-center text-4xl mb-6">希瑪微笑矯齒</h2> -->
            <div target="_blank" class="text-pink text-center flex justify-center mt-4 items-center banner_top_mb">
              <img src="https://static.cmereye.com/imgs/2022/11/3d98c18da0512c50.png" alt="">
              <span class="md:text-5xl">隱適美 ‧ 易</span>
            </div>
            <p class="pt-8">我們選用的隱適美．易(Invisalign Go)療程，以同廠隱適美科技，全程由註冊牙醫跟進，為你集中排靚最多上下顎各12隻前排牙齒，高效快捷，適合想簡單排齊前牙、預算有限的你。</p>
            <br>
            <p class="teshu_mb">*矯齒療程時間因人而異，如有疑問，請諮詢你的牙科醫生。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <slot name="header">
    <PageNavbar />
  </slot>

  <div class="page_orthodontic pb-20 ">
    <div class="">
      <div
        class="
          orthodontic_title
          step_title
          text-center
          sm:text-center
          sm:mb-20
          mb-5
          mt-5
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
        隱適美·易矯齒過程
        </h2>
      </div>

      <div class="orthodontic_step page_container">
        <div class="flex_between_items_start">
          <div class="sm:w-6/13">
            <h4 class="py-5 text-lg font-normal">諮詢並檢查個人牙齒狀況</h4>
            <p class="text-md">
              牙醫與患者諮詢和溝通之後，會先為牙齒拍照、照X光片，以及做口腔內掃瞄或牙模套印，以建立牙齒資料，之後就會詳細講解令患者明白整個療程過程及效果。
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
              經牙醫專業診斷，為患者度身訂造3D矯齒治療方案。
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
              隱適美會將牙醫治療方案製作成一系列沿牙齦剪裁的專屬牙箍，再寄至牙醫診所。之後就會聯絡患者到診所試戴及評估效果。
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
      <div class="flex flex-col items-center">
        <p
          class="
            sm:mb-20
            mb-4
            text-primary text-center
            font-bold
            text-base
            tracking-widest-2x
          "
        >
        

        適合有
          <span class="text-2xl text-green">簡單至一般</span>前排牙齒問題的你
        </p>
        <iframe class="pcShow" width="1020" height="573" src="https://www.youtube.com/embed/3Aa6VnRgQow" title="【#希瑪牙科中心中環中建大廈店】1分鐘帶你參觀希瑪牙科中環店📽️📺👀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="mbShow" width="100%" height="220" src="https://www.youtube.com/embed/3Aa6VnRgQow" title="【#希瑪牙科中心中環中建大廈店】1分鐘帶你參觀希瑪牙科中環店📽️📺👀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              :loop="true"
              :slides-per-view="1"
              :space-between="50"
              navigation
              :scrollbar="{ draggable: true }" >
              <swiper-slide>
                <div class="orthodontic_pic pic-one" >
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
              </div>
              </swiper-slide>
              <swiper-slide>
                <div class="orthodontic_pic  pic-two" >
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
              </swiper-slide>
              <!-- <div slot="pagination" class="swiper-pagination"></div>
              <div slot="button-prev" class="swiper-button-prev"></div>
              <div slot="button-next" class="swiper-button-next"></div> -->
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <component :is="form"></component>
    <div class="orthodontic_compete pb-12">
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
          隱適美‧易VS隱適美全方位矯齒療程
          </h2>
        </div>
        <div class="orthodontic_table_scroll pcShow">
          <div class="orthodontic_table grid grid-cols-10">
            <div><img
                src="https://static.cmereye.com/imgs/2022/11/a34aafa2198d4d5d.png"
                alt=""
                srcset=""
              /></div>
            <div></div>
            <div>
              <img
                src="https://img.cmereye.com/i/2022/09/26/633187b4536a0.png"
                alt=""
                srcset=""
              />
            </div>
            <div>
              適合簡單至一般矯齒個案，針對矯正前排上下共24隻牙齒
            </div>
            <div>適合個案</div>
            <div>可處理簡單至複雜矯齒個案，矯正全部牙齒，包括咬合、倒及等問題</div>
            <div>價格一般較隱適美全方位矯齒療程優惠</div>
            <div>療程費用</div>
            <div>希瑪微笑矯齒 × 隱適美推出限定體驗價</div>
            <div>
              最快6個月*
            </div>
            <div>療程時間</div>
            <div>
              平均 12 – 18 個月
            </div>
          </div>
        </div>
        <div class="mbShow orthodontic_table_swiper">
          <swiper 
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
            <div>
              <img
                src="https://static.cmereye.com/imgs/2022/11/a34aafa2198d4d5d.png"
                alt=""
                srcset=""
              />
            </div>
            <div></div>
            <div><img
                src="https://img.cmereye.com/i/2022/09/26/633187b4536a0.png"
                alt=""
                srcset=""
              /></div>
            <div>
              適合簡單至一般矯齒個案，針對矯正前排上下共24隻牙齒
            </div>
            <div>適合個案</div>
            <div>可處理簡單至複雜矯齒個案，矯正全部牙齒，包括咬合、倒及等問題</div>
            <div>價格一般較隱適美全方位矯齒療程優惠</div>
            <div>療程費用</div>
            <div>希瑪微笑矯齒 × 隱適美推出限定體驗價</div>
            <div>
              最快6個月*
            </div>
            <div>療程時間</div>
            <div>
              平均 12 – 18 個月 
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
                      >Invisalign Go隱適美‧易只矯正一部分牙齒，安全嗎？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    牙醫會按你的實際牙齒情況及需求，以評估是否適合此療程。而Invisalign Go 使用同廠隱適美科技，累積多年科研的技術，而且全程有註冊牙醫監測跟進，確保箍牙療程有效又安全。
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
                      >為何相比隱適美全方位矯齒療程，Invisalign Go隱適美‧易價格比較優惠？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    Invisalign Go隱適美‧易為Invisalign全方位矯齒的簡易版，主要針對簡單至一般的前排牙齒排列問題，移動最多24隻前排牙齒，但亦同時有註冊牙醫主理、設計及監察，適合想排齊前排牙齒、曾進行矯齒但牙齒有輕微走位，以及預算有限的你。
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
  .page_body_header_banner{background-image: url(https://static.cmereye.com/imgs/2022/11/856bd9160def90b3.jpg);background-size: 100% auto;background-repeat: no-repeat;background-position: top;background-attachment: fixed;
 width:100%; 
  .page_body_header_fixed{ padding: 70px 130px;position: fixed;width: 100%;height:35vw;top: 0;left: 0;right: 0;margin: auto;}
  .head_booking{font-family: 'Songti TC';}
  .head_banner_text{position: relative; z-index: -5; width: 50%; float: right; height: 100%; justify-self: center; display: flex; justify-content: flex-end; align-items: center;position: absolute;right: 0;top:0;
   .head_banner_text_p{position: absolute;z-index: -20; left: 0; max-width: 720px;font-family: 'Songti TC'; font-style: normal; font-weight: 400; font-size: 18px; line-height: 35px; /* or 194% */ color: #666666;margin-top: -100px;}
  }
}
}
@media screen and(max-width:768px) {
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
  .page_body_header_banner .head_banner_text .teshu_mb{
    position: absolute;
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
    bottom: 0;
  }
  .banner_top_mb{
    img{width: 80%;}
    span{white-space: pre;font-weight: 400;
    font-size: 20.2508px;
    line-height: 28px;}
  }
  .page_body_header_banner{height: 82vh;}
  .page_body_header_banner .head_banner_text{margin-top: 85%}
  .page_body_header_fixed .head_banner_text_p .head_banner_img, .page_body_header_fixed .head_banner_text_p h2{    display: block;}
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
</style>
  