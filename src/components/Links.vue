<template>
  <div class="links-container">
    <div class="button">Chat</div>
    <div class="button">Record</div>
    <div class="green-btn">Go Live</div>
  </div>
</template>

<style lang="scss" scoped>
  .links-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 500px;
    padding: 8px;
    border: 2px solid #E5EAED;
    border-radius: 8px 8px 0 0;
    border-bottom: none;

    .button {
      background-color: #F5F8FA;
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      width: 60%;
      height: 40px;
      margin-right: 8px;
    }

    .green-btn {
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      width: 60%;
      height: 40px;
      background-color: #128079;
      color: white;
    }
  }
</style>