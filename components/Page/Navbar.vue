<script lang="ts" setup>
import { IApp } from '~/utils/app'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const { t } = useLang()
const app = useState<IApp>('app')
const menus = computed((): any[] => [
  { type: 'link', text: t('pages.about.nav'), route: { name: 'about' } },
  { type: 'link', text: t('pages.treatment.nav'), route: { name: 'treatment' } },
  { type: 'link', text: t('pages.invisalign.nav'), route: { name: 'invisalign' } , 
    submenu:[ { type: 'link', text: t('pages.invisalign.submenu.nav1.nav'), route: { name: 'invisalign' }},
    { type: 'link', text: t('pages.invisalign.submenu.nav2.nav'), route: { name: 'invisalign' }},
    { type: 'link', text: t('pages.invisalign.submenu.nav3.nav'), route: { name: 'invisalign' }},
    ]
  },
  { type: 'link', text: t('pages.teeth_whitening.nav'), route: { name: 'teeth_whitening' } },
  { type: 'link', text: t('pages.porcelain_tiles.nav'), route: { name: 'porcelain_tiles' } },
  { type: 'link', text: t('pages.case.nav'), route: { name: 'case' } },
  { type: 'link', text: t('pages.fees.nav'), route: { name: 'fees' } },
  { type: 'link', text: t('pages.contact.nav'), route: { name: 'contact' } },
])
</script>

<template>
  <BuilderNavbar>
    <template #banner>
      <div
        class="headbar text-primary text-xs text-center py-1 px-4 lg:px-8 capitalize"
      >
       
        <span class="mr-1 ">
          {{ $t('banners.welcome', { app_name: app.name }) }}
        </span>
        <Anchor
          class="underline font-bold"
          :text="$t('others.learn_more')"
          href="https://github.com/vikim540/nuxt3-cmer"
        />
      </div>
    </template>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li class="transition duration-500  ease-in-out transform hover:translate-y-2 " v-for="(item, i) in menus" :key="i">
             
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="hover:no-underline text-lg font-normal text-primary hover:text-green hover:dark:text-green 
                capitalize"
                >{{ item.text }}
                
              </Anchor> 
              <div class="itemMenu"> 
                <ul>
                  <li class="mb-2 text-primary text-green text-lg"  v-for="(items, j) in item.submenu" :key="j">
                    <a href="">{{items.text}}</a>

                  </li>
                </ul>
               </div>
              <!-- <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="font-extrabold capitalize"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
              /> -->
            </li>
          </ul>
        </nav>

        <!-- 翻译 主题等 -->
        <!-- <div
          class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Anchor
            class="hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center"
            href="https://github.com/vikim540/nuxt3-cmer"
            title="Github"
          >
            <IconMdi:github-face />
          </Anchor>
        </div> -->
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @onClose="toggleOptions(false)"  class="py-0 px-0">
        <ActionSheetBody>
          <ActionSheetHeader  />
          <nav class="leading-6 font-semibold ">
            <ul class="flex flex-col meau_ul">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex "
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 ':
                    item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="flex-1 hover:no-underline capitalize"
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
              </li>
            </ul>
          </nav>
        
        </ActionSheetBody>
        

        <!-- <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />  -->
        <div class=" head_booking inline-block"> 
          <a :href=" $t('banners.booking')" target="_blank" class="head_button">
            <p class="md:pt-1 text-primary"> {{ $t('banners.invisalign_text')  }} </p> 
            <span class="text-green md:text-3xl sm:ml-3" style="font-size: 26px;padding: 2px 10px;">  {{ $t('banners.number')  }} </span> </a> 
          </div>
          <div class="menu_icon">
            <a href=""><img src="https://static.cmereye.com/static/lkximg/cmerdental_backup/FB.svg" alt=""></a>
            <a href=""><img src="https://static.cmereye.com/static/lkximg/cmerdental_backup/IG.svg" alt=""></a>
            <a href=""><img src="https://static.cmereye.com/static/lkximg/cmerdental_backup/YT.svg" alt=""></a>
          </div>
     </ActionSheet>
      
    </template>
  </BuilderNavbar>
</template>
<style lang="scss" scoped>
.header  .transition.duration-500 .itemMenu{display: none;opacity: 0;}
.header  .transition.duration-500:hover .itemMenu{display: block;opacity: 1;width: 100%;min-height: 100px;
    position: absolute;z-index: -5;
    left: 0;
    right: 0;
    top: 0px;}
    .header  .transition.duration-500:hover .itemMenu ul{width: 100%;height: 100%;}   

.header  .transition.duration-500:hover .itemMenu li{list-style: none;text-align: center;}
.header  .transition.duration-500:hover .itemMenu a{display: block;}
.header  .transition.duration-500:hover .itemMenu li a::before{display: none;opacity: 0;}
.head_booking{
  display: flex;
  justify-content: center;
}
.head_button{
  width: 70%;
  margin-top: 50px;
}
.menu_icon{
  display: flex;
  justify-content: center;
  margin-top: 37px !important;
  img{
    padding: 0 15px;
  }
}
.meau_ul{
    display: grid;
    grid-template-columns: 1fr minmax(150px,1fr);  // 第一个参数最小值,第二个最大值
    white-space: nowrap;
    li{
      margin: 7vw 5vw;
      font-family: 'Songti TC';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      text-align: center;   
      /* grey */
      color: #666666;
      border-color: #AACE79
         
    }
    
}
.itemMenu{
    display: flex;
    justify-content: center;
    opacity: 1;
    ul{
      position: absolute;
      top: 39px;
    }
}
</style>