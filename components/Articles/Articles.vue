<template>
  <main class="container">
    <div v-if="articles" class="articles">
      <Article
        v-for="(article, index) in articles"
        :key="article.id"
        :article="article"
        :index="index"
        :class="{ featured: index === 0 }"
      />
    </div>
    <div v-else class="articles articles-skeleton">
      <ArticleSkeleton
        v-for="(item, index) in 10"
        :key="index"
        :class="{ featured: index === 0 }"
        :index="index"
      />
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import Article from "./Article.vue";
import ArticleSkeleton from "../ArticlesSkeleton/ArticleSkeleton.vue";

const baseUrl = "https://hacker-news.firebaseio.com/v0";
const articles = ref(null);

onMounted(async () => {
  articles.value = await getArticles();
});

const getArticles = async () => {
  let articles = [];

  const articlesIds = await getArticlesIds();
  for (let index = 0; index < articlesIds.length; index++) {
    let articleId = articlesIds[index];
    await axios
      .get(`${baseUrl}/item/${articleId}.json`)
      .then(async (response) => {
        let article = response.data;
        article.karma = await getAuthorKarma(article.by);
        articles.push(article);
      })
      .catch((error) => console.error(error));
  }

  return sortArticles(articles);
};

const getArticlesIds = async () => {
  let articlesIds = [];
  await axios
    .get(`${baseUrl}/topstories.json`)
    .then((response) => {
      articlesIds = response.data;
    })
    .catch((error) => console.error(error));

  const shuffledArticlesIds = articlesIds.sort(() => 0.5 - Math.random());

  return shuffledArticlesIds.slice(0, 10);
};

const getAuthorKarma = async (authorId) => {
  const response = await axios.get(`${baseUrl}/user/${authorId}.json`);

  return response.data?.karma;
};

const sortArticles = (articles) => {
  const sortedArticles = articles.sort((a, b) => a.score - b.score);

  return sortedArticles;
};
</script>

<style lang="scss" scoped>
.articles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-top: $header-height;
  padding-top: 40px;
  padding-bottom: 40px;

  @include media("<=tablet") {
    grid-template-columns: repeat(2, 1fr);
  }
  @include media("<=l-phone") {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>