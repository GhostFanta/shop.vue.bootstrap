<template>
  <div class="mb-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/home" class="navbar-brand">
        <h3 class="text-info">Ultimate Alex</h3>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="'#navbarSupported"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupporedContent">
        <router-link to="category" class="nav-link text-secondary mr-auto"
          >Shopping</router-link
        >
        <form action="" class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0 rounded-circle nav-button"
            type="submit"
          >
            <icon
              name="magnifying-glass"
              width="12"
              height="12"
              color="green"
            />
          </button>
        </form>
        <router-link
          tag="button"
          to="/favorites"
          class="btn btn-outline-danger rounded-circle m-1 "
        >
          <icon name="heart" width="12" height="12" color="red" />
        </router-link>

        <router-link
          tag="button"
          to="/profile"
          class="btn btn-outline-primary rounded-circle m-1"
        >
          <icon name="man" width="12" height="12" color="#007bff" />
        </router-link>
        <router-link
          tag="button"
          to="/cart"
          class="btn btn-outline-secondary rounded-circle m-1"
        >
          <icon name="shopping-card" width="12" height="12" color="primary" />
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="scss" scoped>
.navbar-brand {
  display: flex;
  text-decoration: none;
}

.nav-button:hover path {
  fill: white;
}
</style>
