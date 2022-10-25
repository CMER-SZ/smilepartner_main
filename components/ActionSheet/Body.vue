<template>
  <div
    class="backdrop-blur supports-backdrop-blur:bg-white/60 p-4 rounded overflow-y-auto"
  >
    <slot />
  </div>
</template>
<style>
.backdrop-blur{
  backdrop-filter: blur(2px) !important;
}
</style>