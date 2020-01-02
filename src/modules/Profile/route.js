import Profile from "./pages/Profile";
import Auth from "./pages/Auth";

export default [
  { path: "/profile", name: "profile", component: Profile },
  { path: "/signup", name: "signup", component: Auth },
  { path: "/login", name: "login", component: Auth }
];
