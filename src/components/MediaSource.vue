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
  <div class="media-source-container">
    <div
      v-if="store.feed"
      class="media-source thumbnail"
      :style="{ backgroundImage: `linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #000000 100%), url(${store.feed})` }">
      <div
        class="button"
        :class="{ 'button-remove': store.sharing.has('video-feed') }"
        @click="store.setSharing('video-feed')">
        {{ store.sharing.has('video-feed') ? 'Hide on stream' : 'Show on stream' }}
      </div>
      <span class="thumbnail-text">My video feed</span>
    </div>
    <div
      v-if="store.screenshare"
      class="media-source thumbnail"
      :style="{ backgroundImage: `linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #000000 100%), url(${store.screenshare})` }">
      <div
        class="button"
        :class="{ 'button-remove': store.sharing.has('screenshare') }"
        @click="store.setSharing('screenshare')">
        {{ store.sharing.has('screenshare') ? 'Hide on stream' : 'Show on stream' }}
      </div>
      <span class="thumbnail-text">My screen feed</span>
    </div>
    <div
      v-if="!store.screenshare || !store.feed"
      class="media-source"
      @click="$emit('showModal')">
      <font-awesome-icon icon="fa-solid fa-plus" size="lg" />
      <div class="media-source-title">Add media source</div>
      <p class="media-source-subtitle">Screenshare, Camera</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .media-source-container {
    width: 100%;
  }

  .media-source {
    cursor: pointer;
    width: 100%;
    height: 200px;
    background-color: #F5F8FA;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;

    &.thumbnail {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: white;
      position: relative;

      .button {
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        width: 60%;
        height: 40px;
        background-color: #128079;
        color: white;
        margin-bottom: 16px;

        &-remove {
          background-color: white;
          color: #F34848;
        }
      }

      .thumbnail-text {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-bottom: 10px;
        margin-left: 10px;
      }

    }

    .fa-plus {
      color: #128079;
    }

    &-title {
      font-weight: bold;
      font-size: 14px;
      color: black;
      margin: 8px 0;
    }

    &-subtitle {
      font-weight: 400;
      font-size: 10px;
      color: #757575;
      margin-top: 0;
    }
  }
</style>