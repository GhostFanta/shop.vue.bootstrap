import Market from "./pages/Market";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";

export default [
  { path: "/market", name: "market", component: Market },
  { path: "/category", name: "categories", component: CategoryPage },
  {
    path: "/product/:productId",
    name: "productDetail",
    component: ProductDetail
  }
];
