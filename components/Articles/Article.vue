<template>
  <article class="article" data-aos="fade-up">
    <div class="image-container">
      <p class="date">
        <Calendar /> <span>{{ getDate(article.time) }}</span>
      </p>
      <img :src="`assets/images/${index}.jpeg`" alt="" class="image" />
    </div>
    <div class="text-container">
      <div class="text">
        <h2>{{ article.title }}</h2>
        <div class="score">
          <Star /><span>{{ article.score }}</span>
        </div>
        <AppLink :to="`/${article.id}`">Read more...</AppLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import Calendar from "~/assets/icons/calendar.svg";
import Star from "~/assets/icons/star.svg";

defineProps({
  article: Object,
  index: Number,
});

const getDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("da-DK");
};

onMounted(() => {
  AOS.init();
});
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  display: flex;
  flex-direction: column;
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
    margin-bottom: rem(10px);

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .date {
      display: flex;
      gap: rem(5px);
      align-items: center;
      position: absolute;
      top: rem(16px);
      left: rem(16px);
      padding: rem(5px) rem(10px);
      background: $color-white;
      font-size: rem(12px);
      border-radius: rem(10px);
      font-weight: 600;

      svg {
        width: rem(12px);
      }
    }
  }
  .text-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;

    .score {
      font-weight: 600;
      display: flex;
      gap: rem(2px);
      align-items: center;
      border-top: 1px solid #0000002b;
      margin-top: rem(10px);
      padding-top: rem(10px);

      svg {
        width: 15px;
        fill: #de9419;
      }
    }
  }
}
</style>