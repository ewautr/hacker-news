<template>
  <article class="article">
    <div class="image-container"></div>
    <div class="text-container">
      <h2></h2>
      <p></p>
      <p class="short"></p>
      <ArticleAuthorSkeleton />
    </div>
  </article>
</template>

<script setup>
import ArticleAuthorSkeleton from "./ArticleAuthorSkeleton.vue";

defineProps({
  index: Number,
});
</script>

<style lang="scss" scoped>
.article {
  width: 100%;

  background: rgba($color-white, 0.8);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);

  &.featured {
    grid-column: 1/4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(40px);

    @include media("<=tablet") {
      grid-column: auto;
      display: block;
    }

    .image-container {
      height: rem(400px);
      grid-column: 1/3;
      margin-bottom: 0;

      @include media("<=tablet") {
        height: rem(200px);
      }
    }
  }
  .image-container {
    width: 100%;
    height: rem(200px);
    animation: pulseBg 1s infinite;
    margin-bottom: 10px;
  }
  .text-container {
    padding: rem(16px);
    h2,
    p {
      width: 100%;
      height: rem(20px);
      margin-bottom: rem(10px);
      animation: pulseBg 1s infinite;
    }
    .short {
      width: 60%;
    }
  }
}

@keyframes pulseBg {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #eaeaea;
  }
  100% {
    background-color: #eee;
  }
}
</style>