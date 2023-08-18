<template>
    <h1>{{ article.title }}</h1>
    <!-- rest of the code ... -->
</template>
  
<script>
export default {
    async asyncData({ params, $content }) {
        const articles = await $content("articles").where({ slug: params.slug }).fetch()
        return { article: articles[0] }
    }
}
</script>
