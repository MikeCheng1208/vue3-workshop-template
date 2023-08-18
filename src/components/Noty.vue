<template lang="pug">
.layout
  .blocks
    .noty-block
      .message {{ message }}
</template>

<script setup>
import { useRef } from "vue";

const message = useRef(message);
</script>

<style lang="scss" scoped>
.layout {
  width: 320px;
  max-height: 90vh;
  overflow: hidden;
  z-index: 9999;
  position: fixed;
  right: 40px;
  bottom: 25px;
  display: flex;
  flex-direction: column-reverse;

  .blocks {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .noty-block {
    box-sizing: border-box;
    width: 320px;
    height: fit-content;
    min-height: 64px;
    border-radius: 3px;
    padding: 10px;
    margin-top: 10px;

    cursor: pointer;
    user-select: none;

    display: flex;
    position: relative;
  }
}
</style>
