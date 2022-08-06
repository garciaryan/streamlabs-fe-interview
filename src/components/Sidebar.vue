<script setup>
import MediaSource from './MediaSource.vue';
</script>

<template>
  <div class="sidebar-container">
    <div class="add-source">
      Add Source
    </div>
    <MediaSource @show-modal="$vfm.show('sources')" />
  </div>
</template>

<style scoped lang="scss">
  .sidebar {
    &-container {
      grid-column: span 3 / span 3;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-right: 2px solid #E5EAED;
      padding: 16px;

      .add-source {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        width: 100%;
        height: 40px;
        background-color: #128079;
        color: white;
        font-weight: bold;
        margin-bottom: 16px;
      }
    }
  }
</style>