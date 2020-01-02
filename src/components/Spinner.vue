<template>
  <div class="spinner">
    <div :class="{ small: small, normal: normal, large: large }" />
    <div :class="{ small: small, normal: normal, large: large }" />
    <div :class="{ small: small, normal: normal, large: large }" />
    <div :class="{ small: small, normal: normal, large: large }" />
  </div>
</template>
<script>
export default {
  name: "Spinner",
  props: {
    small: { type: Boolean, default: false },
    normal: { type: Boolean, default: false },
    large: { type: Boolean, default: false }
  }
};
</script>
<style lang="scss" scoped>
.spinner {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 30px;

  .small {
    width: 16px;
    height: 16px;
    border: 2px solid #0c5460;
    border-color: #0c5460 transparent transparent transparent;
  }
  .normal {
    width: 32px;
    height: 32px;
    border: 4px solid #0c5460;
    border-color: #0c5460 transparent transparent transparent;
  }
  .large {
    width: 64px;
    height: 64px;
    border: 8px solid #0c5460;
    border-color: #0c5460 transparent transparent transparent;
  }

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    margin: 8px;

    border-radius: 50%;
    animation: ringing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
}

.spinner div:nth-child(1) {
  animation-delay: -0.45s;
}

.spinner div:nth-child(2) {
  animation-delay: -0.3s;
}

.spinner div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes ringing {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
