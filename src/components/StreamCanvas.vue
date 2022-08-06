<script>
import Share from '../components/sharing/Share.vue';

import { useSources } from '@/stores/store';
export default {
  setup() {
    const store = useSources();

    return {
      store
    }
  },
  components: {
    Share
  },
}
</script>
<template>
  <div class="stream-container">
    <div
      class="stream-canvas"
      :class="{ 'stream-canvas-split': store.canvasView === 'webcam-screenshare-33' }">
      <div
        v-if="store.sharing.has('video-feed') && !store.sharing.has('screenshare')"
        class="canvas-image"
        :class="{
          'full': store.canvasView === 'webcam-full',
          'sixty': store.canvasView === 'webcam-60',
          'eighty': store.canvasView === 'webcam-80',
        }"
        :style="{ backgroundImage: `url(${store.feed})` }"></div>
      <div
        v-if="store.sharing.has('screenshare') && !store.sharing.has('video-feed')"
        class="canvas-image"
        :class="{ 'full': store.canvasView === 'screenshare-full'}"
        :style="{ backgroundImage: `url(${store.screenshare})` }"></div>
      <div
        v-if="store.sharing.has('screenshare') && store.sharing.has('video-feed')"
        class="canvas-image"
        :class="{
            'full': store.canvasView !== 'webcam-screenshare-33',
            'bg-left': store.canvasView === 'webcam-screenshare-33'
          }"
        :style="{ backgroundImage: `url(${store.screenshare})` }">
        <div
          v-if="store.canvasView !== 'webcam-screenshare-33'"
          :class="{
            'left': store.canvasView === 'webcam-screenshare-25-left',
            'right': store.canvasView === 'webcam-screenshare-25-right',
            }"
            class="pip"
            :style="{ backgroundImage: `url(${store.feed})` }"></div>
      </div>
      <div
        class="split"
        :style="{ backgroundImage: `url(${store.feed})` }"
        v-if="store.canvasView === 'webcam-screenshare-33'"></div>
    </div>
    <Share />
  </div>
</template>

<style scoped lang="scss">
  .stream {
    &-container {
      grid-column: span 9 / span 9;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px;
    }

    &-canvas {
      width: 100%;
      aspect-ratio: 16 / 9;
      max-width: 1500px;
      background-color: black;
      margin-bottom: 32px;
      display: flex;
      justify-content: center;
      align-items: center;

      &-split {
        justify-content: left;

        .canvas-image {
          width: 66%;
          height: 80%;
        }

        .split {
          margin-left: 8px;
          width: 33%;
          height: 80%;
          aspect-ratio: 16 / 9;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }

      .canvas-image {
        aspect-ratio: 16 / 9;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;

        &.bg-left {
          background-position: left;
        }

        .pip {
          height: 20%;
          aspect-ratio: 16 / 9;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          position: absolute;
          margin-bottom: 24px;
          bottom: 0;

          &.left {
            margin-left: 16px;
          }

          &.right {
            margin-right: 16px;
            right: 0;
          }
        }
      }

      .full {
        width: 100%;
        height: 100%;
      }

      .sixty {
        width: 60%;
        height: 60%;
      }

      .eighty {
        width: 80%;
        height: 80%;
      }
    }
  }
</style>