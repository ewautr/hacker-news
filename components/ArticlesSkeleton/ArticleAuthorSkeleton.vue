<template>
  <div class="article-author">
    <div class="author-image" />
    <div class="author-info">
      <p></p>
      <p class="short"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-author {
  display: flex;
  gap: rem(10px);
  align-items: center;
  margin: rem(20px) 0;

  .author-image {
    border-radius: 100%;
    width: rem(40px);
    height: rem(40px);
    animation: pulseBg 1s infinite;
  }

  .author-info {
    width: 100%;
    p {
      width: 60%;
      height: rem(15px);
      margin-bottom: rem(5px);
      animation: pulseBg 1s infinite;
    }
    .short {
      width: 30%;
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