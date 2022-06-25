<template>
  <header
    class="header"
    :class="{
      scrolled,
      hide: hideHeader,
    }"
  >
    <div class="container">
      <h1 class="font-menu">Hacker News</h1>
    </div>
  </header>
</template>

<script setup>
import throttle from "lodash/throttle";

const scrolled = ref(false);
const hideHeader = ref(false);

onMounted(() => {
  let previousScrollPosition = window.pageYOffset;
  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    scrolled.value = currentScrollPosition > 141;
    hideHeader.value =
      scrolled.value && previousScrollPosition < currentScrollPosition;
    previousScrollPosition = currentScrollPosition;
  };
  const throttledHandleScroll = throttle(handleScroll, 100);

  handleScroll();
  window.addEventListener("scroll", throttledHandleScroll);
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  background: $color-white;
  z-index: 12;
  transition: $transition;

  @include media("<desktop") {
    height: auto;
  }

  &.scrolled::after,
  &:hover::after {
    opacity: 0.1;
  }

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: $color-black;
    transition: $transition;
    opacity: 0;
  }

  &.hide {
    transform: translateY(-100%);
  }

  &.scrolled,
  &:hover {
    background: $color-white;
  }
}

.container {
  display: flex;
  align-items: center;
  height: $header-height;

  @include media("<desktop") {
    height: 75px;
  }

  @include media("<desktop") {
    justify-content: space-between;
  }
}
</style>