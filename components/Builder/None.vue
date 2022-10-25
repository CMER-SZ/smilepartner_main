<script lang="ts" setup>
import { IApp } from '~/utils/app'

// state
const app = useState<IApp>('app')
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)

// lifecycle
let timer: NodeJS.Timer
onMounted(() => {
  if (!navbar.value) return

  // scroll
  const { onScroll } = useSticky(navbar.value, 0)
  setTimeout(() => onScroll(), 50)

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
    class="header  ease-in-out   top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50    "
  >
  
  
    <div class="page_container sm:hidden ">
      <div class="py-3   mx-4 lg:mx-0">
        <div class="relative flex items-center  ">
          <!-- drawer:toggle -->
          <div class="head_banner_text_p"><div class="head_banner_img"><img class="m-auto" src="https://img.cmereye.com/i/2022/09/23/632d74a9e2ad7.png" alt="" srcset=""></div><h2 class="text-pink text-center text-xl sm:text-4xl mb-6">希瑪微笑矯齒</h2> </div>



         
        </div>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" >
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
  color: #AACE79;
}
html.dark {
  a.router-link-exact-active {
    color: theme('colors.white');
  }
}
</style>
