<script setup>
import Sidebar from "./components/Sidebar.vue";
import StreamCanvas from "./components/StreamCanvas.vue";
import Modal from "./components/modal/Modal.vue";
import Links from "./components/Links.vue";
import { VueFinalModal, ModalsContainer } from 'vue-final-modal';
</script>

<template>
  <div class="container">
    <vue-final-modal
      name="sources"
      v-model="showModal"
      overlay-style="background-color: rgba(255, 255, 255, 0.7)"
      classes="modal-container"
      content-class="modal-content">
      <Modal />
    </vue-final-modal>
    <Sidebar />
    <StreamCanvas />
    <Links />
  </div>
</template>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));

    ::v-deep .modal-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ::v-deep .modal-content {
      display: flex;
      margin: 0 1rem;
      padding: 40px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.12);
      background: #fff;
    }
  }
</style>

<script>
export default {
  components: {
    VueFinalModal,
    ModalsContainer
  },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>
