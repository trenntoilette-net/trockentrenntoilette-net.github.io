<template>
  <div>
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Testsieger
          </div>
          <h1 class="mb-5">Gartentoilette</h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div
            v-for="product in products"
            :key="product"
            class="col-lg-4 fadeInUp"
          >
            <ProductItem :product="product" class="mt-5" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-xxl py-5">
      <div class="row">
        <div class="col-lg-12 fadeInUp">
          <div class="section-title bg-white text-start text-primary pe-3">
            Finde die richtige
          </div>
          <h1 class="mb-4">Gartentoilette</h1>
          <p class="mb-4">
            Wir sind dein Ratgeber für Trockentrenntoiletten. Wir testen
            Hersteller, Produkte und liefern dir die Infos die du benötigst, um
            die passende Trockentrenntoilette zu finden.
          </p>
          <p class="mb-4">
            Unsere Tests beinhalten mehrere Kriterien denen wir gründlich auf
            den Grund gehen. Dabei kommen folgende Testkritieren zum Einsatz:
          </p>
          <a class="btn btn-primary py-3 px-5 mt-2" href="#testsieger"
            >Zu den Testsiegern</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "~/assets/products.json";

export default {
  name: "gartentoilette",
  head: {
    title: "Gartentoilette - Testsieger und Produkte",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Finde die richtige Gartentoilette. Testberichte, Produkte und Anbieter von Trockentrenntoiletten im Außenbereich. Vor dem Kauf informieren.",
      },
    ],
  },
  asyncData() {
    let category = "Gartentoilette";
    return {
      products: products.filter((item) => item.category === category),
    };
  },
};
</script>
