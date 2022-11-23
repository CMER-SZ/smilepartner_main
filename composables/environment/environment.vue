<script setup lang="ts">
import 'swiper/css'
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
    let currentIndex = reactive({
    Index: 0
})
// let currentIndex:number = 
function titelclick(index){
  
  currentIndex.Index = index
  // console.log(this.currentIndex);
}
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
</script>

<template>
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
        </div>
      </div>
    </div>
</template>



<style lang="scss" scoped>
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
}
</style>