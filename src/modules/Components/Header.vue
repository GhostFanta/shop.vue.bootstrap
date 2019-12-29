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
        <router-link to="/category" class="nav-link text-secondary mr-auto"
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
            <icon name="magnifying-glass" width="12" height="12" />
          </button>
        </form>
        <router-link
          tag="button"
          to="/favorites"
          class="btn btn-outline-danger rounded-circle m-1 "
        >
          <icon class="header-favorite" name="heart" width="12" height="12" />
        </router-link>

        <router-link
          tag="button"
          to="/profile"
          class="btn btn-outline-primary rounded-circle m-1"
        >
          <icon class="header-portfolio" name="man" width="12" height="12" />
        </router-link>
        <router-link
          tag="button"
          to="/cart"
          class="btn btn-outline-secondary rounded-circle m-1"
        >
          <icon name="shopping-card" width="12" height="12" />
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
.navbar {
  .nav-button {
    fill: green;
  }
  .nav-button:hover {
    svg {
      fill: white;
    }
  }
  .header-favorite {
    fill: red;
  }
  .header-favorite:hover {
    svg {
      fill: white;
    }
  }
  .header-portfolio {
    fill: #007bff;
  }
  .btn:hover {
    svg {
      fill: white !important;
    }
  }
}
.navbar-brand {
  display: flex;
  text-decoration: none;
}
</style>
