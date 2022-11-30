<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
import form from '../composables/newform/form.vue'
import environment from '../composables/environment/environment.vue'
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
let reForm = reactive({
  smilepartnerName: '',
  sex:'',
  Tel:'',
  Email:'',
  smilepartner_select: '經系統分析,該表單來自隱適美·限定體驗價頁面,来源地址：https://smilepartner.hk/invisalign'
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
        src="https://img.cmereye.com/i/2022/09/27/633271306fae1.jpg"
        srcset="
          https://img.cmereye.com/i/2022/09/27/633271306fae1.jpg 400w,
          https://img.cmereye.com/i/2022/09/27/633271306fae1.jpg 640w,
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
                src="https://static.cmereye.com/imgs/2022/11/9094aac5df24575e.png"
                alt=""
                srcset=""
              />
            </div>
            <!-- <h2 class="text-pink text-center text-4xl mb-6">希瑪微笑矯齒</h2> -->
            <a href="https://api.whatsapp.com/send?phone=85295128192" target="_blank" class="text-pink text-center flex md:flex-row flex-col justify-center mb-4">
              <img src="https://static.cmereye.com/imgs/2022/11/9791c8842c83e633.png" alt="" class="mbShow">
              <img src="https://static.cmereye.com/imgs/2022/10/d73465bed88552d2.png" alt="">
            </a>
            <p>{{ $t('banners.invisalign_desc') }}</p>
            <div class=" text-center mbShow"  style="margin-top: 55vw;display: flex;flex-direction: column;">
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

  <slot name="header">
    <PageNavbar />
  </slot>

  <div class="page_orthodontic ">
    <div class="">
      

      <div class="orthodontic_step page_container">
        <div
        class="
        orthodontic_title
          step_title
          md:text-center
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
          隱適美矯齒過程
        </h2>
      </div>
        <!-- <div class="  flex_between_items_start">
     <div class=" sm:w-6/13">
      <div class="sticky_step">
      <h4 class="py-5 text-lg font-normal ">諮詢並檢查個人牙齒狀況</h4>
      <p class="text-md ">牙醫與患者諮詢和溝通之後，會先為牙齒拍照、照X光片，以及做口腔內掃瞄或牙模套印，以建立牙齒資料，之後就會詳細講解令患者明白整個療程過程及效果。</p>

    </div><div class="sticky_step">
      <h4 class="py-5 text-lg font-normal ">訂制矯齒計劃</h4>
      <p class="text-md">經牙醫專業診斷，為患者度身訂造3D矯齒治療方案。</p>
    </div>
    <div class="sticky_step">
      <h4 class="py-5 text-lg font-normal ">訂製牙套並開始療程</h4>
      <p class="text-md">隱適美會將牙醫治療方案製作成一系列沿牙齦剪裁的專屬牙箍，再寄至牙醫診所。之後就會聯絡患者到診所試戴及評估效果。</p>
    </div> 
    <div class="sticky_step">
      <p class="text-md"></p>
    </div> 
     </div>
     <div class="sm:w-6/13">
        <img src="https://img.cmereye.com/i/2022/09/27/63325fb6cdf6e.jpg" class="w-full mb-10" alt="">
        <img src="https://img.cmereye.com/i/2022/09/27/63325fb6521da.jpg" class="w-full mb-10" alt="">
        <img src="https://img.cmereye.com/i/2022/09/27/63325fb5dff4d.jpg" class="w-full" alt="">
        
     </div>
      </div>  -->

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
            mb-4
            text-primary text-center
            font-bold
            text-base
            tracking-widest-2x
          "
        >
          隱適美能伴你矯正以
          <span class="text-2xl text-green">展露自信笑容</span>
        </p>
        <div class="orthodontic_pic_scroll pcShow">
          <div class="orthodontic_pic grid grid-cols-4 sm:flex sm:gap-0">
            <div class="text-center">
              <img
                src="https://static.cmereye.com/imgs/2022/09/740b1b8b89cf5b02.jpg"
                alt=""
              />
            </div>
            <div class="text-center">
              <img
                src="https://static.cmereye.com/imgs/2022/09/0be93ac8bb7767dc.jpg"
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
                src="https://static.cmereye.com/imgs/2022/09/01f77a4acaf0ed44.jpg"
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
                <div class="text-center">
                  <img
                    src="https://static.cmereye.com/imgs/2022/09/740b1b8b89cf5b02.jpg"
                    alt=""
                  />
                </div>
                <div class="text-center">
                  <img
                    src="https://static.cmereye.com/imgs/2022/09/0be93ac8bb7767dc.jpg"
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
                    src="https://static.cmereye.com/imgs/2022/09/682634db00b9874c.jpg"
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
    <div class="orthodontic_form_background" id="yyform">
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
          sm:mb-12
          
        "
      >
        展開專屬牙齒美容旅程！
      </h4>
      <iframe  id="my" name="my" style="display:none"></iframe>
      <form action="https://send.pageclip.co/oLDloEgenkRMGb9ZYDIO4wlarrwjxsBu/SmilepartnerForm" method="POST" @submit="checkForm" target="my">
        <div class="overflow-hidden sm:rounded-md">
          <div class=" py-5  max-w-5xl  form_width">
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
          <div class="px-4 sm:mt-12 text-center sm:px-6 mt-2">
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


    <div class="orthodontic_compete pb-10 md:pb-28">
      <div class="page_container">
        <div
          class="
            orthodontic_title
            text-left
            sm:text-center
            my-24
            mb-14
            sm:my-24
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
            隱適美VS其他透明牙箍大比拼！
          </h2>
        </div>
        <div class="orthodontic_table_scroll pcShow">
          <div class="orthodontic_table grid grid-cols-10">
            <div>
              <img
                src="https://img.cmereye.com/i/2022/09/26/633187b4536a0.png"
                alt=""
                srcset=""
              />
            </div>
            <div></div>
            <div>其他隱形牙箍</div>
            <div>
              利用具專利復合層物料製造牙箍，配以U型剪裁貼合牙齦，度身訂造，較為舒適
            </div>
            <div>舒適度</div>
            <div>物料為無乳膠或醫用塑料，牙箍剪裁較平面</div>
            <div>輕微、中度至複雜的個案</div>
            <div>適用個案</div>
            <div>處理輕微至中度複雜的個案</div>
            <div>
              由註冊牙醫評估及設計療程。每6至8星期覆診，定期跟進矯齒效果及進度
            </div>
            <div>療程跟進</div>
            <div>
              獲註冊牙醫最少3次會診，當中註冊牙醫僅初次面診，甚至沒有註冊牙醫診症及跟進
            </div>
            <div>
              收集及擁有來自全球隱適美使用者資料庫，超過1200萬大數據不斷更新及調整矯正技術，提高成效及舒適度
            </div>
            <div>數據支援</div>
            <div>未有收集資料庫或使用者數據甚少</div>
            <div>
              配合SmartForce
              專利附件粒粒，能精細移動牙齒及控制牙腳移動，令療程更加有效
            </div>
            <div>移動附件及預測技術</div>
            <div>少量或沒有</div>
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
                src="https://img.cmereye.com/i/2022/09/26/633187b4536a0.png"
                alt=""
                srcset=""
              />
            </div>
            <div></div>
            <div>其他隱形牙箍</div>
            <div>
              利用具專利復合層物料製造牙箍，配以U型剪裁貼合牙齦，度身訂造，較為舒適
            </div>
            <div>舒適度</div>
            <div>物料為無乳膠或醫用塑料，牙箍剪裁較平面</div>
            <div>輕微、中度至複雜的個案</div>
            <div>適用個案</div>
            <div>處理輕微至中度複雜的個案</div>
            <div>
              由註冊牙醫評估及設計療程。每6至8星期覆診，定期跟進矯齒效果及進度
            </div>
            <div>療程跟進</div>
            <div>
              獲註冊牙醫最少3次會診，當中註冊牙醫僅初次面診，甚至沒有註冊牙醫診症及跟進
            </div>
            <div>
              收集及擁有來自全球隱適美使用者資料庫，超過1200萬大數據不斷更新及調整矯正技術，提高成效及舒適度
            </div>
            <div>數據支援</div>
            <div>未有收集資料庫或使用者數據甚少</div>
            <div>
              配合SmartForce
              專利附件粒粒，能精細移動牙齒及控制牙腳移動，令療程更加有效
            </div>
            <div>移動附件及預測技術</div>
            <div>少量或沒有</div>
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
                      >需要整天配戴隱形牙箍嗎？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    建議用家必須每天配戴隱形牙箍 20 至 22 小時才能確保療程成效。
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
                      >隱形牙箍療程多久？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    視乎個別患者的矯齒複雜程度、牙齒移動速度，隱適美隱形牙箍療程時間因人而異。一般而言，最快大約3個月就可以見到矯齒成效，而整個療程就平均需要1年至2年，如個案較為複雜，就可能需2年或以上。
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
                      >隱形牙箍有沒有年齡限制？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    隱適美隱形牙箍療程並無年齡限制，只要經牙醫評估後個案適合便能進行療程。
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
                      >戴隱形牙箍要戒口？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    隱適美隱形牙箍用家可以在進食之前，除下牙箍，除非牙醫有特別指示，否則的話在日常飲食上無特別限制。
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
                      >戴上隱形牙箍會有痛楚嗎？</span
                    >
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-md text-primary">
                    隱適美牙箍以漸進緩和的矯正力道移動你的牙齒，相比其他矯正療程引起的痛楚較低。而某些使用者會於剛戴上新牙箍數天內或會感到緊繃的感覺，此為牙齒移動的跡象，不適感亦會於數天後消失。
                  </DisclosurePanel>
                </div>
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>

   
  <component :is="environment"></component>
  </div>
</template>
  
  <style lang="scss" scoped>
 
   .orthodontic_form_background{/* Pink Light */
  background: #FCF4F2;
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
  content: '咬合過深';
}
.orthodontic_pic .text-center:nth-child(2):after {
  content: '倒  及';
}
.orthodontic_pic .text-center:nth-child(3):after {
  content: '錯咬/反咬合';
}
.orthodontic_pic .text-center:nth-child(4):after {
  content: '牙縫過大';
}
.orthodontic_pic .text-center:nth-child(5):after {
  content: '開  咬';
}
.orthodontic_pic .text-center:nth-child(6):after {
  content: '齒列擠擁';
}
.orthodontic_pic .text-center:nth-child(7):after {
  content: '前排齒列擠擁';
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
  .xinyongka{
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    /* identical to box height, or 167% */

    text-align: center;

    color: #666666;
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
  .form_width{
  padding: 20px 130px;
  margin: 0 auto;
 }
  .page_body_header_banner{background-image: url(https://img.cmereye.com/i/2022/09/22/632c2c39558fe.jpg);background-size: 100% auto;background-repeat: no-repeat;background-position: top;background-attachment: fixed;
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
  ::v-deep .swiper-button-next:after{
    display: none !important;
  }
  ::v-deep .swiper-button-prev:after{
    display: none !important;
  }
  .orthodontic_compete .page_container::before{
    height: 25.7vw !important;
  }
  .page_body_header_banner{
    height: 203vw;
  }
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
  content: '咬合過深';
}
.pic-one .text-center:nth-child(2):after {
  content: '倒  及';
}
.pic-two .text-center:nth-child(1):after {
  content: '錯咬/反咬合';
}
.pic-two .text-center:nth-child(2):after {
  content: '牙縫過大';
}
.pic-three  .text-center:nth-child(1):after {
  content: '開  咬';
}
.pic-three  .text-center:nth-child(2):after {
  content: '齒列擠擁';
}
.pic-four .text-center:nth-child(1):after {
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
  