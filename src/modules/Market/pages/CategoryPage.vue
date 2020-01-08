<template>
  <div class="category-page z-container mb-5">
    <div class="category-row">
      <div class="category-col">
        <div class="link-container">
          <router-link :to="{ path: '/market' }">
            <img
              :src="'https://i.ibb.co/dDrKmzW/resize-2020-1-8.jpg'"
              class="img-fluid"
            />
            <h3 class="text-left text-dark">All Stylish Clothes</h3>
          </router-link>
        </div>
        <div class="link-container">
          <router-link :to="{ path: '/market' }">
            <img
              :src="'https://i.ibb.co/QJxZPYT/resize-2020-1-8.jpg'"
              class="img-fluid"
            />
            <h3 class="text-left text-dark">Accessories</h3>
          </router-link>
        </div>
      </div>
      <div class="category-col">
        <div class="link-container panel-men">
          <router-link :to="{ path: '/market', query: { category: 'men' } }">
            <img
              :src="'https://i.ibb.co/Zm7GBMJ/resize-2019-12-12-2.jpg'"
              class="img-fluid"
            />
            <h3 class="text-right text-light">Men</h3>
          </router-link>
        </div>
        <div class="link-container panel-women">
          <router-link :to="{ path: '/market', query: { category: 'women' } }">
            <img
              :src="'https://i.ibb.co/R0wHL76/resize-2019-12-12-1.jpg'"
              class="img-fluid"
            />
            <h3 class="text-right text-dark">Women</h3>
          </router-link>
        </div>
      </div>
      <div class="category-col">
        <div class="link-container panel-kids">
          <router-link :to="{ path: '/market', query: { category: 'kids' } }">
            <img
              :src="'https://i.ibb.co/5jPxXNY/resize-2019-12-12-3.jpg'"
              class="img-fluid"
            />
            <h3 class="text-right text-light">Kids</h3>
          </router-link>
        </div>

        <div class="link-container panel-babies">
          <router-link :to="{ path: '/market', query: { category: 'babies' } }">
            <img :src="'https://i.ibb.co/BymD9Tq/baby.jpg'" class="img-fluid" />
            <h3 class="text-right text-dark">Babies</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryPage",
  props: {}
};
</script>
<style lang="scss" scoped>
.category-page {
  a {
    text-decoration: none;
  }
  .category-col {
    padding: 5px;
    img {
      margin-top: 12px;
    }
    .link-container {
      position: relative;
      margin: 5px;
      h3 {
        font-size: 18px;
        position: absolute;
        top: 15px;
        left: 10px;
      }
    }
  }

  .category-row {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 4fr);
  }

  .category-row div:nth-child(0) {
    grid-row: 1/2;
    grid-column: 0/1;
  }

  .category-row div:nth-child(1) {
    grid-column: 1/2;
  }
  .category-row div:nth-child(2) {
    grid-column: 2/3;
  }

  .category-row .category-row:after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>
