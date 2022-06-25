<template>
  <div class="article-author">
    <img
      :src="`https://randomuser.me/api/portraits/women/${Math.floor(
        Math.random() * 100
      )}.jpg`"
      alt="Author profile image"
      class="author-image"
    />
    <div class="author-info">
      <p>{{ name }}</p>
      <p v-if="karma" class="font-label">karma: {{ karma }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  karma: Number | null,
});
</script>

<style lang="scss" scoped>
.article-author {
  display: flex;
  gap: rem(10px);
  align-items: center;
  margin: rem(20px) 0;

  .author-image {
    border-radius: 100%;
    width: rem(40px);
  }
}
</style>