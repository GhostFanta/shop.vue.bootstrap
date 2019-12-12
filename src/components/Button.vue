<template>
  <div>
    <button
      :class="{
        rounded: rounded,
        'btn-outline': outlined
      }"
      @click="handleClick"
    />
  </div>
</template>
<script>
export default {
  name: "ZButton",
  props: {
    outlined: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.btn-outline {
  color: inherit;
  background-color: inherit;
  background-image: none;
  border-color: inherit;
}

.btn-outline:hover {
  color: #fff;
  background-color: inherit;
  border-color: inherit;
}

.btn-outline:focus,
.btn-outline-primary.focus {
  box-shadow: -2 0 0 0.2rem;
}

.btn-outline.disabled,
.btn-outline-primary:disabled {
  color: inherit;
  background-color: transparent;
}

.btn-outline:not(:disabled):not(.disabled):active,
.btn-outline:not(:disabled):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #005bff;
  border-color: #005bff;
}

.btn-outline:not(:disabled):not(.disabled):active:focus,
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: -2 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
</style>
