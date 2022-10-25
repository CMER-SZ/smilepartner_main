<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import YouTubePlayer from "youtube-player";
const props = defineProps({
  id: { type: String, default: "" },
  src: { type: String, required: true },
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 }
});
const emit = defineEmits(["ended", "play", "pause"]);
onMounted(() => {
  initPlayer();
  loadPlayer();
});
onBeforeUnmount(() => {
  player && player.destroy();
});
const getVideoId = () => {
  try {
    const url = new URL(props.src);
    return url.searchParams.get("v") || "";
  } catch (error) {
    return "";
  }
};
let player = null;
const initPlayer = () => {
  try {
    
    player = YouTubePlayer(`youtube-${props.id}`, {
      host: "https://www.youtube.com",
      width: props.width,
      height: props.height,
      videoId: getVideoId(),
      playsinline: 1,
      rel: 0
    }); 
    // 实现iframe页面嵌套并进行web页面和嵌套的iframe之间进行跨域通信 
  window.addEventListener("message", receiveMessage, false);
  } catch (error) {
    console.log(error);
  }
};
const receiveMessage = (event) =>
{
  // 我们能信任信息来源吗？
  if (event.origin !== "https://www.youtube.com")
    return;
 
  // event.source 就当前弹出页的来源页面
  // event.data 是 "hello there!"
 
  // 假设你已经验证了所受到信息的origin (任何时候你都应该这样做), 一个很方便的方式就是把enent.source
  // 作为回信的对象，并且把event.origin作为targetOrigin
  event.source.postMessage("hi there yourself!  the secret response " +
                           "is: rheeeeet!",
                           event.origin);
}

const loadPlayer = () => {
  try {
      player.loadVideoById(getVideoId());
  } catch (error) {
    console.log(error);
  }
};
const play = () => player && player.playVideo();
const pause = () => player && player.pauseVideo();
// -1（未开始）0（已结束）1（正在播放）2（已暂停）3（正在缓冲）5（视频已插入）
let stateChangeListener;
const addStateChange = () => {
  stateChangeListener = player?.on("stateChange", (event) => {
    if (event.data === 0) emit("ended");
    if (event.data === 1) emit("play");
    if (event.data === 2) emit("pause");
  });
};
const removeStateChange = () => {
  if (stateChangeListener) player?.off(stateChangeListener);
};
watch(
  () => props.src,
  () => loadPlayer()
);

</script>
<template>
  <div class="youtube-video">
    <div :id="'youtube-' + id"></div>
  </div>
</template>
<style lang="scss" scoped>
.youtube-video {
  width: 100%;
  overflow: hidden;
}
</style>