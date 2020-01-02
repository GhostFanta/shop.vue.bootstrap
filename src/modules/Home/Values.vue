<template>
  <div class="values mb-5">
    <h1 class="text-dark text-center">Smokin' Sexy Style!!</h1>
    <div class="row values-items mt-5">
      <div class="col-md-4">
        <h3 class="text-center">Adipisicing</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, unde!
        </p>
      </div>
      <div class="col-md-4 value-middle">
        <h3 class="text-center">Consectetur</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor maxime
          nemo nobis sit temporibus veniam, voluptates! Dolorum hic illum
          provident.
        </p>
      </div>
      <div class="col-md-4">
        <h3 class="text-center">Facilis</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          consequuntur cum dolor et facilis fugiat harum numquam odio quia sed.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Values"
};
</script>
<style lang="scss" scoped>
.values {
  .value-middle {
    border-style: solid;
    border-width: 0 5px 0 5px;
  }
  @media (max-width: 53em) {
    .value-middle {
      border-style: solid;
      border-width: 5px 0 5px 0;
    }
  }
}
</style>
