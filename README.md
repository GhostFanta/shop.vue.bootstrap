# The Cart

[![Netlify Status](https://api.netlify.com/api/v1/badges/f1c4b271-f167-4e3a-93bf-48c08878a610/deploy-status)](https://app.netlify.com/sites/shop-zc/deploys)

#### Product Brief Description:

> Fully responsive online shop based on vue stack.

## Demo

Please click [here](https://shop-zc.netlify.com/home) for a live demo.
(Click 'Back to our site' since ssl encrypted API is still under development.)
use

```
{
    Email: test@alex.me,
    Password:123456
}
```

to login.

## Tool Chain:

- Base: Vue
- UI: Bootstrap
- State Management: Vuex
- Routing: Vue-Router
- Form Validation: VeeValidate
- Notification: vue-notification
- API: vuex-rest-api

## Features:

- [x] Login/Signup Form.
  - [x] Form Validation
  - [x] Notification
- [x] ShoppingCart
  - [ ] Add/Remove item.
  - [ ] Modify the amount of a product.
- [x] Product Filtering(filtered by category, price, tags)
  - [x] Filter by Category
  - [x] Filter by Price
  - [ ] Filter by Tags
- [ ] Advanced Product Search

## Get started

#### Project setup

```
npm install
```

#### Run project in dev mode and start mock backend service

```
npm run back
npm run serve
```

#### Compiles and minifies for production

```
npm run build
```

#### Lints & fixes files

```
npm run lint
```

#### Recompile SVG icons

```
npm run svg
```
