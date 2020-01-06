<template>
  <div class="footer">
    <footer class="py-4 bg-light text-white-50">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-4">
            <h4 class="text-primary">The Cart</h4>
            <p class="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, tempora?
            </p>
          </div>
          <ul class="col-lg-4 links">
            <h5>About Us</h5>
            <li class=""><a href="">Our Story</a></li>
            <li><a href="">Venue</a></li>
            <li><a href="">Other</a></li>
          </ul>
          <ul class="col-lg-4 links">
            <h5>Parters</h5>
            <li class=""><a href="">UNIQLO</a></li>
            <li><a href="">H.M</a></li>
            <li><a href="">Zara</a></li>
          </ul>
        </div>
        <small>Copyright &copy; the-cart</small>
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
.footer {
  a {
    text-decoration: none;
  }
}
.links {
  list-style-type: none;
}
</style>
