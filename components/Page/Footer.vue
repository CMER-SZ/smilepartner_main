<script lang="ts" setup>
import p from './../../package.json'
import { IApp } from '~/utils/app'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'

const modules = [Autoplay, Pagination, Navigation, Scrollbar]
const swiperOption = {
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
  {
    type: 'link',
    text: t('pages.treatment.nav'),
    route: { name: 'treatment' },
  },
  {
    type: 'link',
    text: t('pages.invisalign.nav'),
    route: { name: 'invisalign' },
  },
  {
    type: 'link',
    text: t('pages.teeth_whitening.nav'),
    route: { name: 'teeth_whitening' },
  },
  {
    type: 'link',
    text: t('pages.porcelain_tiles.nav'),
    route: { name: 'porcelain_tiles' },
  },
  { type: 'link', text: t('pages.case.nav'), route: { name: 'case' } },
  { type: 'link', text: t('pages.fees.nav'), route: { name: 'fees' } },
  { type: 'link', text: t('pages.contact.nav'), route: { name: 'contact' } },
])
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
</script>

<template>
  <footer
    class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2] bg-pink"
    style="z-index: 999"
  >
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

    <div class="foot_logo">
      <div class="flex md:flex-row flex-col md:mt-12">
        <div class="flex justify-center text-center px-3">
          <NuxtLink href="/"
            ><p
              class="text-white md:mt-4 sm:mt-0 md:text-xl sm:text-lg text-lg footer"
            >
              主頁
            </p></NuxtLink
          >
        </div>
        <div class="flex justify-center text-center px-3">
          <NuxtLink to="/clear-aligners"
            ><p
              class="text-white md:mt-4 mt-8 sm:mt-0 md:text-xl sm:text-lg text-lg footer"
            >
              隱形牙箍全方位矯齒
            </p></NuxtLink
          >
        </div>
        <div class="flex justify-center text-center px-3">
          <NuxtLink to="/clear-aligners-lite"
            ><p
              class="text-white md:mt-4 mt-8 sm:mt-0 md:text-xl sm:text-lg text-lg footer"
            >
              隱形牙箍簡易版
            </p></NuxtLink
          >
        </div>
        <div class="flex justify-center text-center px-3">
          <NuxtLink to="/clear-aligners-child"
            ><p
              class="text-white md:mt-4 mt-8 sm:mt-0 md:text-xl sm:text-lg text-lg footer"
            >
              隱形牙箍兒童專線
            </p></NuxtLink
          >
        </div>
        <div class="flex justify-center text-center px-3">
          <NuxtLink to="/veneer"
            ><p
              class="text-white md:mt-4 mt-8 sm:mt-0 md:text-xl sm:text-lg text-lg footer"
            >
              即日瓷貼片
            </p></NuxtLink
          >
        </div>
        <div class="flex justify-center text-center px-3">
          <NuxtLink to="/teeth-whitening"
            ><p
              class="text-white md:mt-4 mt-8 sm:mt-0 md:text-xl sm:text-lg text-lg footer"
            >
              牙齒美白
            </p></NuxtLink
          >
        </div>
        <div class="flex justify-center text-center px-3">
          <NuxtLink to="/contact-us"
            ><p
              class="text-white md:mt-4 mt-8 sm:mt-0 md:text-xl sm:text-lg text-lg footer"
            >
              聯絡我們
            </p></NuxtLink
          >
        </div>
      </div>
      <div class="text-center sm:pt-20 pt-10">
        <a href="#">
          <img
            class="m-auto"
            src="https://img.cmereye.com/i/2022/09/26/6331b5379b7d0.png"
            alt=""
            srcset=""
          />
          <p class="text-white mt-4 sm:mt-0 text-xl sm:text-lg">
            希瑪微笑矯齒，微笑生活有你
          </p>
        </a>
        <div class="flex justify-center mt-8">
          <a
            href="https://www.facebook.com/smilepartner.cmer/?ref=page_internal-"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-face"
            ><img
              class="mx-3"
              src="https://img.cmereye.com/i/2022/09/27/FB.svg"
              alt=""
              srcset=""
          /></a>
          <a
            href="https://www.instagram.com/cmersmilepartner/"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-IG"
          >
            <img
              class="mx-3"
              src="https://img.cmereye.com/i/2022/09/27/IG.svg"
              alt=""
              srcset=""
          /></a>
          <a
            href="https://www.youtube.com/@smilepartner_hk"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-YT"
          >
            <img
              class="mx-3"
              src="https://img.cmereye.com/i/2022/09/27/YT.svg"
              alt=""
              srcset=""
          /></a>
        </div>
        <div class="foot_logo_xima">
          <NuxtLink href="https://cmermedical.com/" class="foot_xima">
            <img
              src="https://static.cmereye.com/imgs/2022/12/8ba2b5c7d916332f.png"
              alt=""
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <section
      style="display: none"
      class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"
    >
      <div class="w-full py-4 text-center md:text-left">
        <div
          class="text-xs text-white dark:text-white foot_nav md:flex items-center"
        >
          <span
            v-for="(item, i) in menus"
            :key="i"
            class="mx-2 sm:mr-4"
            :class="{
              'pb-4 sm:pb-2 mb-2 text-sm md:pb-0 mb-0': item.type === 'link',
            }"
          >
            <Anchor
              v-if="item.type === 'link'"
              :to="item.route ? item.route : undefined"
              :href="item.href ? item.href : undefined"
              class="flex-1 hover:text-green"
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
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-face"
                ><img
                  class="mr-4"
                  src="https://img.cmereye.com/i/2022/09/27/FB.svg"
                  alt=""
                  srcset=""
              /></a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-IG"
              >
                <img
                  class="mr-4"
                  src="https://img.cmereye.com/i/2022/09/27/IG.svg"
                  alt=""
                  srcset=""
              /></a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-YT"
              >
                <img
                  src="https://img.cmereye.com/i/2022/09/27/YT.svg"
                  alt=""
                  srcset=""
              /></a>
            </span>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-12 md:m-0"
            >
              <img
                src="https://static.cmereye.com/imgs/2022/10/5087ce3b995db3dc.png"
                alt=""
                srcset=""
            /></a>
          </div>
        </div>
      </div>
    </section>

    <div class="fixed_button sm:flex pcShow">
      <a
        href="tel:9512 8192"
        class="iphone bg-white fixed_button_info items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-md"
      >
        <div class="fixed_img">
          <img
            src="https://img.cmereye.com/i/2022/09/28/6334083bf1b5a.png"
            alt="電話預約"
          />
        </div>
        <div class="fixed_text flex-col">
          <p class="text-primary text-md leading-none">電話預約</p>
          <p class="leading-none text-2xl text-pink">9512 8192</p>
        </div>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=85295128192"
        id="goWhatsApp"
        target="_blank"
        class="WhatsApp pcShow bg-white fixed_button_info justify-end items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-md"
      >
        <div class="fixed_img WhatsApp">
          <img
            src="https://img.cmereye.com/i/2022/09/28/633407e1049ed.png"
            alt="WhatsApp"
            class="WhatsApp"
          />
        </div>
        <div class="fixed_text flex-row WhatsApp">
          <p class="WhatsApp leading-none text-primary text-2xl text-green">WhatsApp</p>
          <span class="WhatsApp text-primary text-md">&nbsp;預約</span>
        </div>
      </a>
      <a
        href="#yyform"
        class="goForm bg-white fixed_button_info items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-md"
      >
        <div class="fixed_img">
          <img
            src="https://static.cmereye.com/imgs/2022/11/16386373ca307530.png"
            alt="填表預約"
          />
        </div>
        <div class="fixed_text flex-col">
          <p class="text-primary text-md leading-none">填表預約</p>
        </div>
      </a>
      <!-- <a
        class="goForm bg-white fixed_button_info items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-md"
      >
        <div class="fixed_img wechat">
          <img
            src="https://static.cmereye.com/imgs/2023/09/95b767bee9bbc060.png"
            alt="WeChat"
          />
        </div>
        <div class="fixed_text flex-col">
          <p class="text-primary text-md leading-none">WeChat</p>
        </div>
      </a> -->
      <a
        @click="setTop()"
        class="mt-12 bg-white fixed_button_info items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-md set-top"
      >
        <div class="fixed_img">
          <img
            src="https://static.cmereye.com/imgs/2022/11/fdb210114f23d899.png"
            alt="返回頂部"
          />
        </div>
        <div class="fixed_text flex-col">
          <p class="text-primary text-md leading-none">返回頂部</p>
        </div>
      </a>
    </div>

    <div class="mbShow flex mb-buttom-box">
      <a
        href="tel:9512 8192"
        class="iphone bg-white fixed_button_info items-center justify-center"
      >
        <div class="fixed_img">
          <img
            src="https://img.cmereye.com/i/2022/09/28/6334083bf1b5a.png"
            alt="電話預約"
          />
        </div>
        <div class="fixed_text flex-col pt-2">
          <p class="text-primary text-md leading-none">電話預約</p>
        </div>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=85295128192"
        target="_blank"
        class="WhatsApp bg-white fixed_button_info justify-end items-center"
      >
        <div class="WhatsApp fixed_img pt-1">
          <img
            src="https://static.cmereye.com/imgs/2022/11/4f6f2c4e1008ef29.png"
            class="WhatsApp"
            alt="WhatsApp"
          />
        </div>
        <div class="fixed_text WhatsApp flex-row pt-1">
          <p class="text-primary WhatsApp text-md">WhatsApp預約</p>
        </div>
      </a>
      <a
        href="#yyform"
        class="goForm bg-white fixed_button_info items-center justify-center"
      >
        <div class="fixed_img">
          <img
            src="https://static.cmereye.com/imgs/2022/11/16386373ca307530.png"
            alt="填表預約"
          />
        </div>
        <div class="fixed_text flex-col pt-2">
          <p class="text-primary text-md leading-none">填表預約</p>
        </div>
      </a>
      <!-- <a
        class="goForm bg-white fixed_button_info items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-md"
      >
        <div class="fixed_img wechat">
          <img
            src="https://static.cmereye.com/imgs/2023/09/46339a50e805dedf.png"
            alt="WeChat"
          />
        </div>
        <div class="fixed_text flex-col">
          <p class="text-primary text-md leading-none">WeChat</p>
        </div>
      </a> -->
    </div>
    <div
      class="fixed_button sm:flex mbShow"
      style="top: 174vw; top: auto; bottom: 90px"
    >
      <a
        @click="setTop()"
        class="bg-white fixed_button_info items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-md set-top"
      >
        <div class="fixed_img">
          <img
            src="https://static.cmereye.com/imgs/2022/11/fdb210114f23d899.png"
            alt="返回頂部"
          />
        </div>
        <div class="fixed_text flex-col">
          <p class="text-primary text-md leading-none">返回頂部</p>
        </div>
      </a>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@media screen and(min-width:768px) {
  // .wechat {
  //   padding: 10px;
  // }
  .foot_logo {
    height: 510px;
    justify-content: flex-start;
  }
  .foot_logo_xima {
    position: absolute;
    right: 150px;
    padding-top: 22px;
  }
  .set-top {
    cursor: pointer;
  }
  ::v-deep .swiper-pagination {
    display: none;
  }
  .footer_img {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 117px;
    justify-content: center;
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      /* identical to box height */

      text-align: center;
      padding: 20px 0;
      color: #ffffff;
    }
    img {
      // max-width: 338px
    }
  }
}

@media screen and(max-width:768px) {
  .foot_logo_xima {
    display: flex;
    justify-content: center;
    padding: 72px 64px;
  }
  .foot_logo p::before {
    height: 0;
  }
  .mb-buttom-box {
    display: flex;
    justify-content: center;
    background: #ffffff;
    border: 1px solid #cdcdcd;
    border-radius: 20px;
    z-index: 9999;
    width: 93%;
    position: fixed;
    bottom: 15px;
    left: 15px;
    /* right: 15px; */
    /* margin: 0; */
    box-shadow: 1px 0px 10px -4px;
    a {
      flex: 1;
      padding: 5px 14px;
      display: flex;
      flex-direction: column;
      &>div:nth-child(2){
        p{
          font-size: 14px;
          min-height: 30px;
          display: flex;
          align-items: center;
          text-align: center;
        }
      }
    }
  }
  ::v-deep .swiper-pagination {
    display: none;
  }
  .footer_img {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 117px;
    justify-content: center;
    p {
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      /* identical to box height */

      text-align: center;
      padding: 20px 0;
      color: #ffffff;
    }
    // img{
    //   max-width: 338px
    // }
  }
}
</style>
