<template>
  <nuxt-link :to="to" class="app-link"
    ><span><slot /></span
  ></nuxt-link>
</template>

<script setup>
defineProps({
  to: String,
});
</script>

<style lang="scss" scoped>
.app-link {
  display: block;
  width: max-content;
  margin-top: rem(10px);
  margin-bottom: rem(10px);
  padding: rem(3px) rem(10px);
  color: inherit;
  border: 1px solid black;
  border-radius: rem(50px);
  font-weight: 600;
  font-size: rem(14px);
  text-decoration: none;
  transition: $transition;

  &:hover {
    background: $color-black;
    color: $color-white;
  }
}
</style>