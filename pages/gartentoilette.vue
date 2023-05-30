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
          <div v-for="product in products" :key="product" class="col-lg-4 fadeInUp">
            <ProductItem :product="product" class="mt-5" />
          </div>
        </div>
      </div>
      <div class="container pt-5">
        <div class="row g-5">
          <div class="col-lg-8 fadeInUp" style="min-height: 400px">
            <h2 class="mb-4">
              Gartentoiletten - das Beste für dich und die Umwelt
            </h2>
            <p class="mb-4">
              Die Auswahl an <strong>Gartentoiletten</strong> ist riesig. Doch
              welche passt zu dir und deinem Leben? Wir wollen dir das
              langwierige Vergleichen ersparen und testen für dich die aktuellen
              Modelle beliebter Hersteller auf Herz und Nieren.
            </p>
            <p class="mb-4">
              Egal, ob Schrebergarten oder abgelegenes Gartenhaus, eine
              <nuxt-link to="/">Trockentrenntoilette</nuxt-link> bietet absolute
              Unabhängigkeit. Du musst weder auf Abwasser-Gesetze achten, noch
              dich sorgen, ob du der Umwelt schadest. In unserem Ratgeber
              erfährst du alles Wissenswerte, um dich schnell und unkompliziert
              entscheiden zu können.
            </p>
            <h3 class="mb-4 h2">
              Gartentoiletten im Check - das Wichtigste auf einen Blick
            </h3>
            <p class="mb-4">
              Dank ihrer langjährigen Erfahrung wissen unsere ExpertInnen
              bestens Bescheid, worauf es KundInnen bei Kauf und Nutzung einer
              Gartentoilette ankommt. Sie nehmen für dich verschiedenste
              Produkte genauer unter die Lupe und prüfen vollkommen
              unvoreingenommen deren Stärken und Schwächen. Bekannte Marken wie
              <nuxt-link to="/hersteller/trobolo/" title="TROBOLO">TROBOLO</nuxt-link>,
              <nuxt-link to="/hersteller/kildwick/" title="Kildwick">Kildwick</nuxt-link>, MeineTrenntoilette und
              <nuxt-link to="/hersteller/trelino/">Trelino</nuxt-link> werden zu
              speziellen Kriterien bewertet. Neben Komfort, Geruchsbildung oder
              Entsorgung, achten die Profis auf Nachhaltigkeit, Funktionalität
              sowie die verwendeten Materialien bei der Produktion. Nicht
              zuletzt spielt auch der Preis eine entscheidende Rolle.
            </p>
            <h4 class="mb-4 h2">
              Klare Vorteile für dich und deinen Beitrag zum Umweltschutz
            </h4>
            <p class="mb-4">
              Wusstest du zum Beispiel, dass laut Bundeskleingartengesetz eine
              Toilette im Garten eigentlich eine Abwassergrube benötigt? Wir
              stellen dir im Folgenden unterschiedliche Gartentoiletten vor, die
              nicht nur ohne einen Anschluss an die Kanalisation auskommen,
              sondern sogar komplett ohne Wasser betrieben werden. So schonen
              sie nicht nur die Umwelt, sondern auch deinen Geldbeutel. Neben
              den unzähligen persönlichen Vorteilen kann eine
              Trockentrenntoilette auch nützlich für deinen Garten sein. Dort
              lassen sich Ausscheidungen beispielsweise ganz einfach
              kompostieren, was anschließend als wertvoller Humus verwendet
              werden kann. Da die hier vorgestellten Gartentoiletten auf
              jegliche Chemie verzichten, kann auch der Urin verdünnt mit Wasser
              als Rasendünger verwendet werden. Wer die Hinterlassenschaften
              aber lieber anderweitig loswerden will, kann diese problemlos in
              der nächsten Toilette bzw. im Restmüll entsorgen.
            </p>
            <p class="lead mb-4">
              Unser Ziel ist es, dich bestmöglich bei deiner Entscheidung zu
              unterstützen.
            </p>
          </div>
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
      products: products.filter((item) => item.category === category && item.published),
    };
  },
};
</script>
