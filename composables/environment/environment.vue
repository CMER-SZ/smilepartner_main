<script setup lang="ts">
import 'swiper/css'
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
let currentIndex = reactive({
  Index: 0,
})
// let currentIndex:number =
function titelclick(index) {
  currentIndex.Index = index
  // console.log(this.currentIndex);
}
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
</script>

<template>
  <div class="orthodontic_compete1 md:pb-80 pb-20">
    <div class="page_container">
      <div
        class="orthodontic_title text-left sm:text-center my-20 md:mb-14 sm:my-28"
      >
        <h2
          class="text-primary font-normal text-xl md:text-2xl inline-block relative"
        >
          診所環境
          <!--  -->
        </h2>
      </div>
      <div class="">
        <div class="thumb-example">
          <swiper
            class="top-swiper"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :modules="modules"
            :space-between="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
          >
            <swiper-slide
              class="slide"
              v-for="index in bigimgsrc"
              :key="index"
              v-if="currentIndex.Index === 0"
            >
              <img :src="index" />
            </swiper-slide>
            <swiper-slide
              class="slide"
              v-for="index in bigimgsrc2"
              :key="index"
              v-if="currentIndex.Index === 1"
            >
              <img :src="index" />
            </swiper-slide>
          </swiper>
          <div class="tab-control">
            <div
              class="tab-control-item"
              v-for="(item, index) in title"
              :key="item"
              :class="{ active: currentIndex.Index === index }"
              @click="titelclick(index)"
            >
              <span>{{ item }}</span>
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
            <swiper-slide
              class="slide"
              v-for="index in imgsrc"
              :key="index"
              v-if="currentIndex.Index === 0"
            >
              <img :src="index" />
            </swiper-slide>
            <swiper-slide
              class="slide"
              v-for="index in imgsrc2"
              :key="index"
              v-if="currentIndex.Index === 1"
            >
              <img :src="index" />
            </swiper-slide>
          </swiper>
          <div v-if="currentIndex.Index === 0">
            <div class="address-one">
              <div class="address-text-box">
                <div class="address-title">
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/67179a3499ccbda0.png"
                    alt=""
                  />
                  <span>中環中建大廈</span>
                </div>
                <div class="address">
                  <div class="address-img mbShow">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/9a2784791a429f43.jpg"
                      alt=""
                    />
                  </div>
                  <div class="adress-p">
                    <p>中環畢打街1-3號</p>
                    <p>中建大廈11樓1102室</p>
                  </div>

                  <div class="address-button">
                    <button>
                      <a
                        href="https://www.google.com.hk/maps/place/%E5%B8%8C%E7%91%AA%E7%89%99%E7%A7%91%E4%B8%AD%E5%BF%83+C-MER+DENTAL+CENTER+-+%E4%B8%AD%E7%92%B0/@22.2813716,114.1397419,15z/data=!4m5!3m4!1s0x3404016f97ba29a9:0x423d8adc379d3f71!8m2!3d22.2813716!4d114.1572514?hl=en-GB&shorturl=1"
                        ><span>Google 地圖</span></a
                      >
                    </button>
                    <button>
                      <a
                        href="https://map.baidu.com/poi/%E4%B8%AD%E5%BB%BA%E5%A4%A7%E5%8E%A6(%E7%9A%87%E5%90%8E%E5%A4%A7%E9%81%93%E4%B8%AD)/@12709241.45,2529344.61,19z?uid=23a79c43b905a6d476026901&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl"
                        ><span>百度地圖</span></a
                      >
                    </button>
                  </div>
                </div>
                <div class="address-time">
                  <div class="flex address-md-time">
                    <div class="mr-5">
                      <p>星期一至星期五</p>
                      <p>上午9:30 - 下午6:30</p>
                    </div>
                    <div class="md:mt-0 mt-2">
                      <p>星期六</p>
                      <p>上午9:30 - 下午5:30</p>
                    </div>
                  </div>
                  <p class="time mbShow">星期日及<br />公眾假期休息</p>
                </div>
                <p class="time pcShow">星期日及公眾假期休息</p>

                <div class="tel">
                  <div class="tel-num">
                    <a href="tel:95128192" class="flex items-center">
                      <p>TEL.</p>
                      <span>9512 8192</span>
                    </a>
                  </div>
                  <div class="address-button">
                    <button>
                      <a href="https://api.whatsapp.com/send?phone=85295128192"
                        ><span>WhatsApp 預約</span></a
                      >
                    </button>
                    <button>
                      <a href="#yyform"><span>填表預約</span></a>
                    </button>
                  </div>
                </div>
              </div>

              <div class="address-img pcShow">
                <img
                  src="https://static.cmereye.com/imgs/2023/01/9a2784791a429f43.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div v-if="currentIndex.Index === 1">
            <div class="address-two">
              <div class="address-text-box">
                <div class="address-title">
                  <img
                    src="https://static.cmereye.com/imgs/2023/01/67179a3499ccbda0.png"
                    alt=""
                  />
                  <span>尖沙咀 K11 ATELIER</span>
                </div>
                <div class="address">
                  <div class="address-img mbShow">
                    <img
                      src="https://static.cmereye.com/imgs/2023/01/27f749137582e9f9.jpg"
                      alt=""
                    />
                  </div>
                  <p>尖沙咀梳士巴利道18-24號</p>
                  <p>K11 ATELIER 辦公大樓1906室</p>
                  <div class="address-button">
                    <button>
                      <a
                        href="https://www.google.com.hk/maps/place/%E5%B8%8C%E7%91%AA%E7%89%99%E7%A7%91%E4%B8%AD%E5%BF%83+C-MER+DENTAL+CENTER+-+%E5%B0%96%E6%B2%99%E5%92%80/@22.289004,114.1620424,15z/data=!4m6!3m5!1s0x34040191e5178ed9:0x340edfebfd06e518!8m2!3d22.2933788!4d114.1739512!15sChvluIznkarniZnnp5HkuK3lv4PlsJbmspnlkoCSAQ1kZW50YWxfY2xpbmlj?hl=en-GB&shorturl=1"
                        ><span>Google 地圖</span></a
                      >
                    </button>
                    <button>
                      <a
                        href="https://map.baidu.com/poi/K11%20Atelier/@12711306.34,2530984.64,19z?uid=a4a66e1ce5f1bd4cf703b806&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl"
                        ><span>百度地圖</span></a
                      >
                    </button>
                  </div>
                </div>
                <div class="address-time-box">
                  <div class="address-time">
                    <div>
                      <p>星期一至星期二</p>
                      <p>上午9:30 - 下午7:00</p>
                    </div>
                    <div class="md:pl-5 md:pt-0 pt-2">
                      <p>星期三至星期五</p>
                      <p>上午9:00 - 下午6:00</p>
                    </div>
                    <div class="mbShow md:pt-0 pt-2">
                      <p>星期六</p>
                      <p>上午9:30 - 下午5:00</p>
                    </div>
                  </div>
                  <div>
                    <p class="time mbShow">星期日及<br />公眾假期休息</p>
                  </div>
                  <div class="liu pcShow">
                    <p>星期六</p>
                    <p>上午9:30 - 下午5:00</p>
                  </div>
                </div>

                <p class="time pcShow">星期日及公眾假期休息</p>
                <div class="tel">
                  <div class="tel-num">
                    <a href="tel:95128192" class="flex items-center">
                      <p>TEL.</p>
                      <span>9512 8192</span>
                    </a>
                  </div>
                  <div class="address-button">
                    <button>
                      <a href="https://api.whatsapp.com/send?phone=85295128192"
                        ><span>WhatsApp 預約</span></a
                      >
                    </button>
                    <button>
                      <a href="#yyform"><span>填表預約</span></a>
                    </button>
                  </div>
                </div>
              </div>

              <div class="address-img pcShow">
                <img
                  src="https://static.cmereye.com/imgs/2023/01/27f749137582e9f9.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- <span class="text-center address-env" style="display: flex;justify-content: center;">*瓷貼片服務由尖沙咀診所提供</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and(min-width:768px) {
  .orthodontic_compete1 {
    padding-bottom: 50rem;
  }
  .address-env {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    padding-top: 10px;
    /* Teeth Grey */

    color: #666666;
  }
  .tab-control .active {
    span {
      color: #ecb3ac !important;
    }
  }
  .tab-control {
    display: flex;
    justify-content: center;
    padding: 40px 0;
    cursor: pointer;
    .tab-control-item {
      padding: 0 20px;
      span {
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
        border-bottom: 1px solid #ecb3ac;
      }
    }
  }
  ::v-deep .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .thumb-example {
    height: 480px;
    background-color: #fff;
  }
  .swiper-slide {
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
  ::v-deep .swiper-pagination {
    display: none;
  }
  .orthodontic_form_background {
    /* Pink Light */
    background: #fcf4f2;
  }
  .address-one {
    display: flex;
    margin-top: 100px;
    .address-text-box {
      flex: 1;
    }
    .address-title {
      display: flex;
      align-items: center;
      span {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.2em;
        padding-left: 10px;
        color: #666666;
      }
    }
    .address {
      margin-top: 10px;
      padding: 9px 0px 7px 50px;
      p {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.2em;
        color: #666666;
      }
    }
    .address-button {
      margin-top: 17px;
      button {
        border: 1px solid #cdcdcd;
        padding: 9px;
        width: 170px;
        text-align: center;
        margin: 0 5px;
      }
      button:nth-child(2) {
        background: #cdcdcd;
      }
    }
    .address-time {
      position: relative;
      display: flex;
      padding-left: 50px;
      margin-top: 20px;
      justify-content: space-between;
      padding-bottom: 10px;
      p {
        font-family: 'Songti TC';
        font-style: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.2em;
        color: #666666;
      }
    }
    .address-md-time::after {
      content: '';
      width: 87%;
      height: 1px;
      display: block;
      margin: 0 auto;
      border-bottom: 1px solid #cdcdcd;
      padding: 1px;
      position: absolute;
      bottom: 0;
    }
    .time {
      font-family: 'Songti TC';
      font-style: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.2em;
      padding-left: 50px;
      padding-top: 10px;
      color: #666666;
    }
    .tel {
      padding-left: 50px;
      .tel-num {
        display: flex;
        padding: 19px 0 4px 0;
        align-items: center;
        p {
          font-family: 'Songti TC';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.2em;
          text-decoration-line: underline;
          color: #666666;
        }
        span {
          font-family: 'Songti SC';
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 42px;
          padding-left: 11px;
          color: #aace79;
        }
      }
      .address-button {
        margin-top: 2px;
      }
    }
  }
  .address-two {
    display: flex;
    margin-top: 100px;
    margin-bottom: 10px;
    .address-text-box {
      flex: 1;
    }
    .address-title {
      display: flex;
      align-items: center;
      span {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.2em;
        padding-left: 10px;
        color: #666666;
      }
    }
    .address {
      padding: 9px 0px 7px 50px;
      p {
        font-family: 'Songti TC';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.2em;
        color: #666666;
      }
    }
    .address-button {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      button {
        border: 1px solid #cdcdcd;
        padding: 9px;
        width: 170px;
        text-align: center;
        margin-right: 10px;
        span {
          font-family: 'Songti TC';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.1em;
          color: #666666;
        }
      }
      button:nth-child(2) {
        background: #cdcdcd;
      }
    }
    .address-time-box {
      padding-bottom: 10px;
      position: relative;
      .address-time {
        display: flex;
        padding-left: 50px;
        margin-top: 15px;
        justify-content: flex-start;
        .address-two .address-time p {
          font-family: 'Songti TC';
          font-style: normal;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.2em;
          color: #666666;
        }
      }
      .liu {
        padding-top: 15px;
        padding-left: 50px;
        p {
          font-family: 'Songti TC';
          font-style: normal;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.2em;
          color: #666666;
        }
      }
      .liu ::after {
        content: '';
        width: 73%;
        height: 1px;
        display: block;
        margin: 0 auto;
        border-bottom: 1px solid #cdcdcd;
        padding: 1px;
        position: absolute;
        bottom: 0;
      }
    }
    .time {
      font-family: 'Songti TC';
      font-style: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.2em;
      padding-left: 50px;
      padding-top: 10px;
      color: #666666;
    }
    .tel {
      padding-left: 50px;
      .tel-num {
        display: flex;
        padding: 10px 0 4px 0;
        align-items: center;
        p {
          font-family: 'Songti TC';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.2em;
          text-decoration-line: underline;
          color: #666666;
        }
        span {
          font-family: 'Songti SC';
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 42px;
          padding-left: 11px;
          color: #aace79;
        }
      }
      .address-button {
        margin-top: 2px;
        display: flex;
        flex-direction: row;
        button {
          border: 1px solid #cdcdcd;
          padding: 9px;
          width: 170px;
          text-align: center;
          margin-right: 5px;
          span {
            font-family: 'Songti TC';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 0.1em;
            color: #666666;
          }
        }
        button:nth-child(2) {
          background: #cdcdcd;
        }
      }
    }
  }
}
@media screen and(max-width:768px) {
  .address-env {
    font-family: 'Songti TC';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    padding-top: 15px;
    /* Teeth Grey */

    color: #666666;
  }
  .slide {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .tab-control .active {
    span {
      color: #ecb3ac !important;
    }
  }
  .tab-control {
    display: flex;
    justify-content: center;
    padding: 12px 0;
    cursor: pointer;
    .tab-control-item {
      padding: 0 20px;
      span {
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
        border-bottom: 1px solid #ecb3ac;
      }
    }
  }
  ::v-deep .swiper-button-prev:after {
    display: none;
  }

  ::v-deep .swiper-button-next:after {
    display: none;
  }
  .address-two,
  .address-one {
    .address-title {
      margin: 20px 0;
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
      }
    }
    .adress-p {
      color: #666;
      display: flex;
      font-family: 'Songti TC';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      justify-content: center;
      letter-spacing: 0.2em;
      line-height: 22px;
      padding-bottom: 30px;
      padding-top: 15px;
    }
    .address-button {
      display: flex;
      justify-content: space-around;
      button {
        border: 1px solid #cdcdcd;
        padding: 9px;
        text-align: center;
        width: 160px;
      }
      button:nth-child(2) {
        background: #CDCDCD;
      }
      .address-time {
        display: flex;
        margin-top: 50px;
        padding-bottom: 10px;
        padding-left: 15px;
      }
    }
    .address-time {
      display: flex;
      align-items: center;
      margin: 30px 0;
      padding: 0 8px;
    }
    .address-md-time {
      flex: 1;
      border-right: 1px solid #cdcdcd;
      display: flex;
      flex-direction: column;
      padding-right: 10px;
      p {
        color: #666;
        font-family: Songti TC;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 22px;
      }
    }
    .time {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      font-family: Songti TC;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.2em;
      line-height: 22px;
    }
    .tel {
      .tel-num {
        align-items: center;
        display: flex;
        padding: 19px 10px 17px;
        p {
          color: #666;
          font-family: 'Songti TC';
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 0.2em;
          line-height: 22px;
          -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
        }
        span {
          color: #aace79;
          font-family: 'Songti SC';
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 42px;
          padding-left: 11px;
        }
      }
    }
  }
  .address-two {
    .address-img {
      margin-bottom: 15px;
    }
    .address {
      text-align: center;
    }
    .address-button {
      margin-top: 10px;
    }
    .address-time-box {
      margin: 30px 0;
      display: flex;
      .address-time {
        margin: 0;
        flex-direction: column;
        flex: 1;
        border-right: 1px solid #ddd;
        padding: 0;
      }
      & > div:nth-child(2) {
        display: flex;
        flex: 1;
      }
    }
  }
}
</style>
