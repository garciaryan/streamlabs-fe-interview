
<script>
import { useSources } from '@/stores/store';
export default {
  setup() {
    const store = useSources();

    return {
      store
    }
  },
  methods: {
    uploadPhoto(type) {
      this.$refs[type].click();
    },
    savePhoto(type, e) {
      let file = e.target.files[0];
      let reader = new FileReader();

      if (!file) return;

      reader.readAsDataURL(file);
      reader.addEventListener('loadend', ev => {
        this.store[type] = reader.result;
        this.$vfm.hide('sources');
      })
    }
  }
}
</script>

<template>
  <div class="modal">
    <div class="title">
      Add a new media source
    </div>
    <div class="options">
      <div class="option" @click="uploadPhoto('screenshare')">
        <input type="file" ref="screenshare" hidden @change="savePhoto('screenshare', $event)" />
        <div class="subtitle">Screenshare</div>
        <p>Share your entire screen, window or a specific Chrome tab</p>
      </div>
      <div class="option" @click="uploadPhoto('video-feed')">
        <input type="file" ref="video-feed" hidden @change="savePhoto('feed', $event)" />
        <div class="subtitle">Video Feed</div>
        <p>Share a feed of your in-built webcam and microphone. If you do not have a webcam, you can use a “virtual” webcam such as Streamlabs Desktop virtual camera</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal {
    height: 350px;
    width: 600px;
    display: flex;
    flex-direction: column;;
    align-items: center;

    .title {
      color: black;
      font-weight: bold;
      font-size: 20px;
      margin: 40px 0;
    }

    .options {
      display: flex;

      .option {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F5F8FA;
        height: 244px;
        width: 207px;
        text-align: center;
        padding: 0 32px;

        &:first-child {
          margin-right: 32px;
        }

        .subtitle {
          font-weight: bold;
          font-size: 16px;
        }

        p {
          font-weight: 400;
          color: #757575;
        }
      }
    }
  }
</style>
