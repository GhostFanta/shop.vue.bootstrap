import Vapi from "vuex-rest-api";

const productStore = new Vapi({
  baseURL: "http://localhost:3000"
})
  .get({
    action: "getProducts",
    property: "products",
    path: "/products"
  })
  .get({
    action: "getProductsById",
    property: "productDetail",
    path: ({ productId }) => `/products/${productId}`
  })
  .get({
    action: "getProductByCateogry",
    property: "products",
    path: "/products",
    queryParams: true
  })
  .get({
    action: "getFeaturedProducts",
    property: "featuredProducts",
    path: "/featuredProducts"
  })
  .getStore();

const states = {
  products: [],
  productDetail: null,
  featuredProducts: []
};

const mutations = {};

const actions = {};

const getters = {
  pending: state => state.pending,
  error: state => state.error,
  products: state => state.products,
  featuredProducts: state => state.featuredProducts,
  productDetail: state => state.productDetail
};

export default {
  namespaced: true,
  state: { ...states, ...productStore.state },
  getters: { ...getters, ...productStore.getters },
  actions: { ...actions, ...productStore.actions },
  mutations: { ...mutations, ...productStore.mutations }
};
