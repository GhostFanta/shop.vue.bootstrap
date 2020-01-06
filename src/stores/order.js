import Vapi from "vuex-rest-api";

const orders = new Vapi({
  baseURL: "https://159.203.17.226:443"
})
  .get({
    action: "getOrders",
    property: "orders",
    path: "/orders"
  })
  .get({
    action: "getOrder",
    property: "order",
    path: ({ orderId }) => `/orders/${orderId}`
  })
  .get({
    action: "getCart",
    property: "cart",
    path: ({ userId }) => `/cart/${userId}`
  })
  .post({
    action: "addItemToCart",
    property: "item",
    path: ({ userId }) => `/cart/${userId}`
  })
  .patch({
    action: "updateCart",
    property: "cart",
    path: ({ userId }) => `/cart/${userId}`
  })
  .delete({
    action: "clearCart",
    property: "item",
    path: ({ userId }) => `/cart/${userId}`
  })
  .getStore();

const state = {
  orders: [],
  order: {},
  cart: []
};

const getters = {
  pending: state => state.pending,
  cart: state => state.cart,
  orders: state => state.orders,
  order: state => state.order
};

export default {
  namespaced: true,
  state: { ...state, ...orders.state },
  getters: { ...getters, ...orders.getters },
  mutations: { ...orders.mutations },
  actions: { ...orders.actions }
};
