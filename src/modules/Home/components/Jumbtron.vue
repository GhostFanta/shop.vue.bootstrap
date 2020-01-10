<template>
  <div class="z-jumbtron container-fluid">
    <section class="section-main">
      <div class="section-main-title">
        <h1>The Cart</h1>
      </div>
      <div class="section-main-description">
        <p>
          THE MOST EFFORTLESS WAY TO MAKE YOUR PURCHASE CONVENIENT.
        </p>
      </div>
      <div class="section-main-small">
        <small
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          quis id est qui architecto illo vitae ullam a iste aliquam?</small
        >
      </div>
      <div class="section-main-btn">
        <button class="btn btn-outline-dark">Read More</button>
      </div>
      <div class="section-img"></div>
    </section>
  </div>
</template>
<script>
export default {
  name: "HomeJumbtron"
};
</script>
<style lang="scss" scoped>
.container-fluid {
  margin: 0 0 20px 0;
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .section-main {
    background: transparent;
    width: 100%;
    height: 70vh;
    display: grid;
    grid-template-columns: 100px 200px 200px 150px 1fr;
    grid-template-rows: 150px 80px 50px 50px 1fr;
    grid-column-gap: 0;
    grid-row-gap: 0;
    animation: animation 0.3s linear 0.3s 1 both fadeInRight;
  }

  .section-main-title {
    grid-area: 2/2/3/4;
    display: flex;
    font-size: 128px;
    font-weight: bold;
    align-items: center;
    justify-content: left;
  }

  .section-main-description {
    grid-area: 3 / 2 / 4 / 5;
  }

  .section-main-small {
    grid-area: 4/2/5/4;
  }
  .section-main-btn {
    grid-area: 5/2/6/3;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 50px;
  }
  .section-img {
    grid-area: 1/4/6/6;
    z-index: -1;
    background-image: linear-gradient(to left, rgba(255, 0, 0, 0), white),
      url("https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  }
}
</style>
