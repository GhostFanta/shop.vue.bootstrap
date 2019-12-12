<template>
  <div class="category-page container">
    <div class="row panel-all">
      <div class="col-5 mr-4">
        <router-link :to="{ path: '/market' }">
          <img
            :src="'https://i.ibb.co/dDNCP99/resize-2019-12-12-4.jpg'"
            class="img-fluid"
          />
          <h3 class="text-left text-info">All Stylish Clothes</h3>
        </router-link>
        <router-link :to="{ path: '/market' }">
          <img
            :src="'https://i.ibb.co/GVrFL4v/resize-2019-12-12-5.jpg'"
            class="img-fluid"
          />
          <h3 class="text-left text-secondary">Accessories</h3>
        </router-link>
      </div>
      <div class="col-6">
        <div class="row panel-men ">
          <router-link :to="{ path: '/market', query: { category: 'men' } }">
            <img
              :src="'https://i.ibb.co/Zm7GBMJ/resize-2019-12-12-2.jpg'"
              class="img-fluid"
            />
            <h3 class="text-right text-primary">Men</h3>
          </router-link>
        </div>
        <div class="row panel-women">
          <router-link :to="{ path: '/market', query: { category: 'women' } }">
            <img
              :src="'https://i.ibb.co/R0wHL76/resize-2019-12-12-1.jpg'"
              class="img-fluid"
            />
            <h3 class="text-right text-danger">Women</h3>
          </router-link>
        </div>
        <div class="row panel-kids">
          <router-link :to="{ path: '/market', query: { category: 'kids' } }">
            <img
              :src="'https://i.ibb.co/5jPxXNY/resize-2019-12-12-3.jpg'"
              class="img-fluid"
            />
            <h3 class="text-right text-dark">Kids</h3>
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
.panel-men {
  color: white;
}
.panel-men > h2 {
  float: right;
}

.panel-all {
  a {
    text-decoration: none;
  }
}

.panel-men {
  a {
    text-decoration: none;
  }

  img {
    max-width: 400px;
  }
}

.panel-women {
  a {
    text-decoration: none;
  }

  img {
    max-width: 400px;
  }
}
.panel-kids {
  a {
    text-decoration: none;
  }

  img {
    max-width: 400px;
  }
}
</style>
