<template>
  <div>
    <footer class="py-4 bg-light text-white-50">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-4">
            <h4 class="text-primary">Shop.vue.bootstrap</h4>
            <p class="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, tempora?
            </p>
          </div>
          <ul class="col-lg-4 links">
            <h5>Links</h5>
            <li class=""><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
          </ul>
          <ul class="col-lg-4 links">
            <h5>Links</h5>
            <li class=""><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
          </ul>
        </div>
        <small>Copyright &copy; shop.vue.bootstrap</small>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
.links {
  list-style-type: none;
}
</style>
