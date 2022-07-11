<template>
  <div>
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Testsieger
          </div>
          <h1 class="mb-5">Campingtoilette</h1>
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
      <div class="container pt-5">
        <div class="row g-5">
          <div class="col-lg-8 fadeInUp" style="min-height: 400px">
            <h2 class="mb-4">
              Nachhaltige Campingtoiletten namhafter Hersteller im Test
            </h2>
            <p class="mb-4">
              Für den nachhaltigen und vor allem hygienischen Gang zur Toilette
              auf Reisen ist eine
              <strong>Campingtoilette</strong> unverzichtbar. Doch die Auswahl
              stellt nicht nur dich vor eine große Herausforderung. Viele Kunden
              sind sich nicht im Klaren, welches Modell am ehesten die
              Bedürfnisse nach dem „stillen Örtchen“ befriedigt. Unsere Experten
              testen für dich die aktuellen Produkte namhafter Hersteller und
              liefern dir die perfekte Kaufentscheidung.
            </p>
            <p class="mb-4">
              Komplett ohne Wasser und Strom kommen dabei die sogenannten
              Campingtoiletten als
              <nuxt-link to="/" title="Trockentrenntoiletten"
                >Trockentrenntoiletten</nuxt-link
              >
              aus. Dabei werden die menschlichen Ausscheidungen strikt in
              Feststoffe und flüssige Stoffe getrennt. Das sorgt nicht nur für
              eine Vermeidung der Geruchsbelästigung, sondern liefert einen
              wichtigen Anteil hinsichtlich Nachhaltigkeit und Umweltbewusstsein
              – nicht nur für ambitionierte Camper.
            </p>
            <h3 class="mb-4">
              Diese Arten von Campingtoiletten existieren auf dem Markt
            </h3>
            <p class="mb-4">
              Grundsätzlich werden drei verschiedene Typen von Campingtoiletten
              unterschieden:
            </p>
            <div class="row gy-2 gx-4 mb-5 mt-5">
              <div class="col-12">
                <p class="mb-0">
                  <i class="fa fa-info text-info me-2"></i>Trockentrenntoilette
                </p>
                <div class="col-12">
                  <p class="mb-0">
                    <i class="fa fa-info text-info me-2"></i>Mobile
                    Chemietoiletten
                  </p>
                </div>
                <div class="col-12">
                  <p class="mb-0">
                    <i class="fa fa-info text-info me-2"></i>Kassettentoilette
                  </p>
                </div>
              </div>
            </div>
            <p class="mb-4">
              Eine Campingtoilette, welche auf der Basis einer Trockentoilette
              funktioniert, wird umgangssprachlich auch als „Komposttoilette“
              bezeichnet. Genau bei diesem Thema sorgen wir für dich für
              nachhaltige Informationen und testen die Produkte der Hersteller.
              Schließlich funktionieren diese Arten von mobilen Campingtoiletten
              völlig ohne den Einsatz von Chemikalien, Wasser und Strom.
            </p>
            <p class="mb-4">
              Nur ein nachhaltiges „stilles Örtchen“ sorgt für den perfekten
              Ausgleich mit der Natur und das gute Gefühl, einen wertvollen
              Beitrag für die Umwelt geleistet zu haben. Gerne stellen wir dir
              die besten Toiletten für Camper vor.
            </p>
            <p class="mb-4">
              Mobile Chemietoiletten hingegen – wie der Name schon vermuten
              lässt -, benötigen eine Sanitärflüssigkeit im Abwassertank, um die
              Ausscheidungen zu zersetzen. Zwar ist meistens kein Stromanschluss
              erforderlich, aber du benötigst zwingend Wasser für den
              Frischwassertank. Also völlig autark funktionieren diese Systeme
              nicht.
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
  name: "campingtoilette",
  head: {
    title: "Campingtoilette - Testsieger und Produkte",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Finde die richtige Campingtoilette. Testberichte, Produkte und Anbieter von Campingtoiletten für Wohnmobile, Camper oder Vans. Vor dem Kauf informieren.",
      },
    ],
  },
  asyncData() {
    let category = "Campingtoilette";
    return {
      products: products.filter((item) => item.category === category),
    };
  },
};
</script>
