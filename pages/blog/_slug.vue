<template>
    <div>
        <BlogHeader buttonText="Beitrag lesen" :image="article.mainImage" :title="article.title"
            :subtitle="article.subtitle" />

        <div class="container-xxl py-5" id="article">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-12 fadeInUp" style="min-height: 400px">
                        <div class="section-title bg-white text-start text-primary pe-3 text-center">
                            {{ article.date }}
                        </div>

                        <section>
                            <template v-for="(item, index) in article.content">
                                <div v-if="item.type == 'paragraph'" class="pt-3 pb-3">
                                    <h1>{{ item.title }}</h1>
                                    <p class="mb-4 pt-3" v-html="item.content"></p>
                                </div>
                                <div v-else-if="item.type == 'image'" class="pt-5 pb-5">
                                    <img :src="item.filename" :alt="item.title" class="img-fluid" />
                                    <figcaption class="text-center">{{ item.title }}</figcaption>
                                </div>
                            </template>

                        </section>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-lg-6 offset-lg-3">
                        <nuxt-link class="btn btn-lg btn-primary py-3 px-5 d-block" to="/#produkte"
                            title="Trockentrenntoilette kaufen"><span class="h1" style="color: #fff">Trockentrenntoiletten
                                ansehen</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    async asyncData({ params, $content }) {
        console.log(params.slug)
        const articles = await $content("blog").where({ slug: params.slug, publish: true }).fetch()
        console.log(articles)
        return { article: articles[0] }
    },
    head() {
        return {
            title: this.article.seoTitle,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.article.metaDescription
                },
                // any other meta tags you want
            ]
        }
    },
    jsonld() {
        if (!this.article.faq) {
            return {}
        }

        const faqData = this.article.faq.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        }));

        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData,
        };
    }
}
</script>
