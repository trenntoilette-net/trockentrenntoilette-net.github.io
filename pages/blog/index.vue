<template>
  <div>
    <BlogHeader buttonText="Zu den Blogartikeln" image="/assets/images/blog/laughing-toiletpaper.jpg"
      title="Der Trockentrenntoiletten Blog"
      subtitle="<p>Auf unserem Blog findest du alle Neuigkeiten, Informationen, Tipps und Angebote rund um das Thema Trockentrenntoiletten. Viel Spaß beim Lesen!</p>" />

    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Blog
          </div>
          <h2 class="mb-5 h2">Die neuesten Blogbeiträge</h2>
        </div>
        <div class="row g-4 justify-content-center" id="article">
          <div class="col-lg-4 col-md-6" v-for="(article, index) in articles" :key="index">
            <BlogItem :article="article" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "/assets/data/config.json";

export default {
  name: "BlogIndex",
  data() {
    return {
      articles: config.blogArticles,
      config,
    };
  },
  head: {
    title: "Der Trockentrenntoiletten Blog: News, Tipps, Produkte",
    meta: [
      {
        hid: "descirption",
        name: "description",
        content: "Erfahre alles über Trockentrenntoiletten auf unserem Blog: News, Ratgeber und Tipps auf unserem Trockentrenntoiletten-Blog. Die neusten Produkte, Rabatte, uvm.",
      }
    ]
  }
};
</script>
