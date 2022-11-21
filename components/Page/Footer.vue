<script lang="ts" setup>
import p from './../../package.json'
import { IApp } from '~/utils/app'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'



const modules = [Autoplay, Pagination, Navigation, Scrollbar]
const swiperOption = {
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


const app = useState<IApp>('app')

const { t } = useLang()  
export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}
const menus = computed((): IMenuItem[] => [
{ type: 'link', text: t('pages.about.nav'), route: { name: 'about' } },
{ type: 'link', text: t('pages.treatment.nav'), route: { name: 'treatment' } },
{ type: 'link', text: t('pages.invisalign.nav'), route: { name: 'invisalign' } },
{ type: 'link', text: t('pages.teeth_whitening.nav'), route: { name: 'teeth_whitening' } },
{ type: 'link', text: t('pages.porcelain_tiles.nav'), route: { name: 'porcelain_tiles' } },
{ type: 'link', text: t('pages.case.nav'), route: { name: 'case' } },
{ type: 'link', text: t('pages.fees.nav'), route: { name: 'fees' } },
{ type: 'link', text: t('pages.contact.nav'), route: { name: 'contact' } },
 
])


</script>

<template>
  <footer class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2] bg-pink">
    <!-- <div class="footer_img pcShow">
          <p class="">優美、舒適診所環境</p> 
            <swiper 
              ref="mySwiper" 
              :modules="modules"
              :options="swiperOption" 
              :pagination="{ clickable: true }"
              :slides-per-view="7.5"
              :space-between="0"
              navigation
              :loop="true"
              :scrollbar="{ draggable: true }" >
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/7055a93f76072419.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/89d022005e8b03e6.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/d4e4b782e854920e.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/1e42918e9f67454b.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/588589915e7b81c6.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/f743d8dbbdf29778.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/8ed41047df5de982.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/d822c1644e615863.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/ef651d3ee55bc6b7.jpg" alt=""></swiper-slide>
          </swiper>
    </div>
    <div class="footer_img mbShow">
          <p class="">優美、舒適診所環境</p> 
            <swiper 
              ref="mySwiper" 
              :modules="modules"
              :options="swiperOption" 
              :pagination="{ clickable: true }"
              :slides-per-view="3"
              :space-between="0"
              navigation
              :loop="true"
              :scrollbar="{ draggable: true }" >
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/7055a93f76072419.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/89d022005e8b03e6.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/d4e4b782e854920e.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/1e42918e9f67454b.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/588589915e7b81c6.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/f743d8dbbdf29778.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/8ed41047df5de982.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/d822c1644e615863.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="https://static.cmereye.com/imgs/2022/11/ef651d3ee55bc6b7.jpg" alt=""></swiper-slide>
          </swiper>
    </div> -->
    <div class="foot_logo ">
      <div class="text-center sm:pt-24">
        <a href="https://cmermedical.com/">
          <img class="m-auto" src="https://img.cmereye.com/i/2022/09/26/6331b5379b7d0.png" alt="" srcset="">
<p class="text-white mt-4 sm:mt-0 text-xl sm:text-lg ">希瑪微笑矯齒，微笑生活有你</p>
        </a>
      </div>
    </div>

    <section
    style="display: none;"
      class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"
    >
      <div class="w-full py-4 text-center md:text-left">
      
        <div class="text-xs text-white dark:text-white foot_nav  md:flex items-center">
          
 


          <span
                v-for="(item, i) in menus"
                :key="i"
                class="mx-2 sm:mr-4  "
                :class="{
                  'pb-4 sm:pb-2 mb-2 text-sm md:pb-0 mb-0':
                    item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="flex-1 hover:text-green  "
                  >{{ item.text }}</Anchor
                >
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="xs"
                  class="flex-1 font-extrabold capitalize"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </span>

          
          <div
            class="flex flex-col md:flex-row space-x-2 items-center md:float-right"
          >
            <span class="text-center md:text-right flex md:ml-32 md:mr-72">
             <a href="http://"  target="_blank" rel="noopener noreferrer"><img class="mr-4" src="https://img.cmereye.com/i/2022/09/27/FB.svg" alt="" srcset=""></a>
               <a href="http://" target="_blank" rel="noopener noreferrer"> <img class="mr-4" src="https://img.cmereye.com/i/2022/09/27/IG.svg" alt="" srcset=""></a>
               <a href="http://" target="_blank" rel="noopener noreferrer"> <img src="https://img.cmereye.com/i/2022/09/27/YT.svg" alt="" srcset=""></a>
              
               
            </span>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="mt-12 md:m-0"> <img src="https://static.cmereye.com/imgs/2022/10/5087ce3b995db3dc.png" alt="" srcset=""></a>
          </div>
        </div>
      </div>
    </section> 

    <div class="fixed_button  sm:flex ">
      <a href="tel:9512 8192" class="bg-white fixed_button_info items-center justify-center transition duration-500  ease-in-out transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-md"> 
       <div class="fixed_img"><img src="https://img.cmereye.com/i/2022/09/28/6334083bf1b5a.png" alt="電話預約" ></div>
       <div class="fixed_text flex-col"><p class="text-primary text-md leading-none">電話預約</p><p class="leading-none   text-2xl text-pink">9512 8192</p> </div>  
      </a>
      <a href="https://api.whatsapp.com/send?phone=85295128192" target="_blank" class="bg-white fixed_button_info justify-end items-center  transition duration-500  ease-in-out transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-md"> 
       <div class="fixed_img"><img src="https://img.cmereye.com/i/2022/09/28/633407e1049ed.png" alt="WhatsApp" ></div>
       <div class="fixed_text flex-row "><p class="leading-none text-primary text-2xl text-green">WhatsApp</p> <span class="text-primary text-md  ">&nbsp;預約</span> </div>  
      </a>

 
    </div>



    
  </footer>
  


</template>
<style lang="scss"  scoped>
@media screen and(min-width:768px) {
  ::v-deep .swiper-pagination{
    display:none;
  }
  .footer_img{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 117px;
    justify-content: center;
    p{
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      /* identical to box height */

      text-align: center;
      padding: 20px 0;
      color: #FFFFFF;
    }
    img{
      // max-width: 338px
    }
  }
}

@media screen and(max-width:768px) {
  ::v-deep .swiper-pagination{
    display:none;
  }
  .footer_img{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 117px;
    justify-content: center;
    p{
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      /* identical to box height */

      text-align: center;
      padding: 20px 0;
      color: #FFFFFF;
    }
    // img{
    //   max-width: 338px
    // }
  }
}
</style>

 
