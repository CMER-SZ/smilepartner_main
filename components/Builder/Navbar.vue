<script lang="ts" setup>
import { IApp } from '~/utils/app'

// state
const app = useState<IApp>('app')
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)
const route = useRoute()
// lifecycle
let timer: NodeJS.Timer
onMounted(() => {
  if (!navbar.value) return

  // scroll
  if (route.path == '/case-sharing') {
    let { onScroll } = useSticky(navbar.value, 1400)
    // console.log(onScroll)  
    setTimeout(() => onScroll(), 50)
  } else {
    let { onScroll } = useSticky(navbar.value, 1000)
    // console.log(onScroll)  
    setTimeout(() => onScroll(), 50)
  }

  // console.log(onScroll)

  // setTimeout(() => onScroll(), 50)

  // on show on mobile
  setInterval(() => {
    // must in mobile
    const minW = 1024
    if (window.innerWidth < minW) {
      updateDrawerOptions()
    }
  }, 100)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

// methods
const updateDrawerOptions = () => {
  // drawer
  if (showDrawer.value || showOptions.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}
const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
const toggleOptions = (show?: boolean) => {
  if (show) {
    showOptions.value = show
  } else {
    showOptions.value = !showOptions.value
  }
}
</script>

<template>
  <div
    ref="navbar"
    class="header ease-in-out backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"
  >
    <div
      :class="[
        route.path == '/case-sharing'
          ? 'sharing_pc_style pcShow'
          : 'all_pc_style',
      ]"
    >
      <img
        src="https://static.cmereye.com/imgs/2023/02/f7e516891a98ed6c.png"
        alt=""
        class="pcShow"
      />
    </div>
    <div class="page_container">
      <div class="py-3 mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <!-- drawer:toggle -->
          <div
            v-if="$slots['drawer']"
            class="lg:hidden flex items-center self-center justify-center mr-2"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Drawer Menu"
              @click="toggleDrawer()"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-lg"
                aria-hidden="true"
              >
                <IconUil:bars v-if="!showDrawer" />
                <IconUil:times v-else />
              </span>
            </button>
          </div>
          <!-- title -->
          <slot name="title">
            <NuxtLink
              tag="a"
              class="head_logo mr-3 flex-none overflow-hidden md:w-auto text-md font-bold text-gray-900 dark:text-gray-200"
              :to="{ name: 'index' }"
            >
              <img
                src="https://static.cmereye.com/imgs/2022/11/90ac07fbab954283.png"
                alt=""
                srcset="
                  https://static.cmereye.com/static/lkximg/smilepartner/log.svg 400w,
                  https://static.cmereye.com/static/lkximg/smilepartner/log.svg 640w,
                  https://static.cmereye.com/imgs/2022/11/90ac07fbab954283.png
                "
              />
              <span class="sr-only">home</span>
              <!-- <span
                class="flex items-center text-left md:text-center justify-center"
                style="color: #666"
              >
                {{ app.name }} <br />
                {{ app.cn_name }}
              </span> -->
            </NuxtLink>
          </slot>
          <!-- menu -->
          <slot name="menu" />
          <!-- options:toggle -->
          <div
            v-if="$slots['options']"
            class="flex-1 flex justify-end lg:hidden z-999"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Options Menu"
              @click="toggleOptions()"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-sm"
                aria-hidden="true"
                v-if="showOptions === false"
              >
                <!-- <icon-fa-solid:ellipsis-v /> -->
                <img
                  src="https://static.cmereye.com/imgs/2022/10/78fc638be0111d35.png"
                  alt=""
                />
              </span>
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-sm"
                aria-hidden="true"
                v-else
              >
                <!-- <icon-fa-solid:ellipsis-v /> -->
                <img
                  src="https://static.cmereye.com/imgs/2022/10/80601e47a9b8dd5f.png"
                  alt=""
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Teleport to="#app-after">
        <Transition name="slide-fade-from-up" mode="out-in">
          <div
            v-if="showDrawer && $slots['drawer']"
            class="fixed lg:hidden bg-gray-100 dark:bg-slate-800 pt-12 top-0 left-0 w-screen h-screen z-30 flex flex-col"
          >
            <div class="flex-1 flex flex-col relative overflow-y-auto">
              <slot name="drawer" :toggle-drawer="toggleDrawer" />
            </div>
          </div>
        </Transition>

        <div v-if="showOptions && $slots['options']">
          <slot
            name="options"
            :toggle-options="toggleOptions"
            :show-options="showOptions"
          />
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.slide-fade-from-up-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-from-up-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-from-up-enter-from,
.slide-fade-from-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

a.router-link-active {
  font-weight: 400;
}
a.router-link-exact-active {
  color: #aace79;
}
html.dark {
  a.router-link-exact-active {
    color: theme('colors.white');
  }
}
@media screen and (min-width: 768px) {
  .sharing_pc_style {
    position: absolute;
    bottom: 140%;
    left: 50%;
  }
  .all_pc_style {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .header .head_logo img {
    width: 182px;
    max-width: 182px;
  }
  .all_pc_style {
    display: none;
  }
}
</style>
