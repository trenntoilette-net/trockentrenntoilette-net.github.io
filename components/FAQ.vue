<template>
  <div v-if="faqData">
    <!-- Hersteller Start -->
    <div class="container-xxl py-5 category" id="hersteller">
      <div class="container">
        <div>
          <h1 class="mb-4 h2">
            {{ faqTitle }}
          </h1>
        </div>
        <div class="accordion" id="basicAccordion">
          <div
            class="accordion-item"
            v-for="(item, index) in faqData"
            :key="index"
          >
            <h2 class="accordion-header" :id="'heading' + index">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + index"
                aria-expanded="false"
                :aria-controls="'collapseOne' + index"
              >
                {{ item.name }}
              </button>
            </h2>
            <div
              :id="'collapse' + index"
              class="accordion-collapse collapse"
              :aria-labelledby="'heading' + index"
              data-bs-parent="#basicAccordion"
            >
              <div class="accordion-body">
                {{ item.acceptedAnswer.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hersteller End -->
  </div>
</template>

<script>
import { create } from "domain";

function createFAQitems(faqs) {
  const faqItems = faqs.map((item, index) => {
    return {
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    };
  });

  return faqItems;
}

export default {
  name: "FaqPage",
  props: {
    faqs: {
      type: Array,
    },
    faqTitle: {
      type: String,
    },
  },
  data() {
    return {
      faqData: createFAQitems(this.faqs),
    };
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: createFAQitems(this.faqs),
        },
      ],
    };
  },
};
</script>
