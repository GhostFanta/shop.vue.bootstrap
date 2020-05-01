<template>
  <footer
    class="flex mt-5 py-4 bg-light flex-row align-items-center justify-content-center"
  >
    <small>
      copyright &copy; Alex.AI 2019. Build with &#127925; using Vue.js
    </small>
  </footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
footer {
  position: sticky;
  bottom: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  width: 100vw;

  & > small {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
}
</style>
