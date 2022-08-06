<script>
import { useSources } from '@/stores/store';
export default {
  setup() {
    const store = useSources();

    return {
      store
    }
  },
}
</script>

<template>
  <div class="share-icons">
    <!-- Ideally, I would use :src to generate these imgs so I don't have so many. -->
    <!-- Each one has to set it's own state, so that's why it's like this. -->
    <div
      class="webcam-only icons"
      v-if="store.sharing.has('video-feed') && store.sharing.size === 1">
      <img
        src="../../assets/webcam-only_full-screen.png"
        alt="full screen"
        v-if="store.canvasView !== 'webcam-full'"
        @click="store.canvasView = 'webcam-full'" />
      <img
        src="../../assets/webcam-only_full-screen_selected.png"
        alt="full screen"
        v-if="store.canvasView === 'webcam-full'" />
      <img
        src="../../assets/webcam-only_60-percent.png"
        alt="60 percent width"
        v-if="store.canvasView !== 'webcam-60'"
        @click="store.canvasView = 'webcam-60'" />
      <img
        src="../../assets/webcam-only_60-percent_selected.png"
        alt="60 percent width"
        v-if="store.canvasView === 'webcam-60'" />
      <img
        src="../../assets/webcam-only_80-percent.png"
        alt="80 percent width"
        v-if="store.canvasView !== 'webcam-80'"
        @click="store.canvasView = 'webcam-80'" />
      <img
        src="../../assets/webcam-only_80-percent_selected.png"
        alt="80 percent width"
        v-if="store.canvasView === 'webcam-80'" />
    </div>
    <div
      class="screenshare-only icons"
      v-if="store.sharing.has('screenshare') && store.sharing.size === 1">
      <img
        src="../../assets/screenshare-image-only.png"
        alt="full screen" />
    </div>
    <div
      class="webcam-screenshare icons"
      v-if="store.sharing.size === 2">
      <img
        src="../../assets/webcam-screenshare_webcam-25-percent-left-align.png"
        alt="25 percent left align"
        v-if="store.canvasView !== 'webcam-screenshare-25-left'"
        @click="store.canvasView = 'webcam-screenshare-25-left'" />
      <img
        src="../../assets/webcam-screenshare_webcam-25-percent-left-align_selected.png"
        alt="25 percent left align"
        v-if="store.canvasView === 'webcam-screenshare-25-left'" />
      <img
        src="../../assets/webcam-screenshare_webcam-25-percent-right-align.png"
        alt="25 percent right align"
        v-if="store.canvasView !== 'webcam-screenshare-25-right'"
        @click="store.canvasView = 'webcam-screenshare-25-right'" />
      <img
        src="../../assets/webcam-screenshare_webcam-25-percent-right-align_selected.png"
        alt="25 percent right align"
        v-if="store.canvasView === 'webcam-screenshare-25-right'" />
      <img
        src="../../assets/webcam-33-percent_screenshare-66-percent.png"
        alt="33 percent webcam"
        v-if="store.canvasView !== 'webcam-screenshare-33'"
        @click="store.canvasView = 'webcam-screenshare-33'" />
      <img
        src="../../assets/webcam-33-percent_screenshare-66-percent_selected.png"
        alt="33 percent webcam"
        v-if="store.canvasView === 'webcam-screenshare-33'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .share-icons {
    width: 100%;

    .icons {
      display: flex;
      justify-content: center;

      img {
        margin-right: 16px;
        width: 60px;
        height: 40px;
        cursor: pointer;
      }
    }
  }
</style>