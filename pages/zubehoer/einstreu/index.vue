<template>
  <div>
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Testsieger
          </div>
          <h1 class="mb-5">Einstreu für die Trockentrenntoilette</h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div
            v-for="product in products"
            :key="product"
            class="col-lg-4 fadeInUp"
          >
            <ZubehoerProductItem :product="product" class="mt-5" />
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row g-5">
        <div class="col-lg-8 offset-lg-2 fadeInUp" style="min-height: 400px">
          <h2 class="mb-4">
            Autarke Toilettennutzung dank Einstreu für die Trockentrenntoilette
          </h2>
          <p class="mb-4">
            Wer eine Trockentrenntoilette nutzt oder nutzen möchte, wird schnell auf
            das Thema <strong>Einstreu</strong> stoßen. Einstreu erfüllt nämlich eine wichtige
            Funktion in diesem Zusammenhang. Konkret zieht Einstreu
            Restfeuchtigkeit aus den festen Ausscheidungen und trägt somit zur
            <strong>geruchlosen Funktionsweise von Trockentrenntoiletten</strong> bei.
          </p>
          <p class="mb-4">
            In diesem Artikel widmen wir uns voll und ganz dieser wichtigen
            Substanz und zeigen dir, welche Vorteile die Nutzung von Einstreu
            gegenüber alternativen Methoden mit sich bringt.
          </p>
          <h3 class="mb-4 h2">Alle Vorteile von Einstreu im Überblick</h3>
          <p class="mb-4">
            <ul>
              <li>Ermöglicht geruchlose Toilettennutzung</li>
              <li>Dient zusätzlich als Sichtschutz</li>
              <li>Lässt sich samt Kot kompostieren</li>
              <li>Benötigt keinen Strom</li>
              <li>Verzicht auf schädliche Chemikalien</li>
            </ul>
          </p>
          <p class="mb-4">
            Der Trennmechanismus deiner Trockentrenntoilette sorgt bereits dafür, dass die Geruchsentwicklung stark unterbunden wird. Unangenehme Gerüche entstehen nämlich erst dann, wenn Kot und Urin sich miteinander vermischen. 
          </p>
          <p class="mb-4">
            Mit Einstreu wird die Geruchsentwicklung nicht nur gehemmt, sondern zu 100% verhindert. Einstreu besteht aus saugfähigem Material. Dieses gibt man nach einem Toilettengang über die festen Ausscheidungen und so wird jegliche Flüssigkeit, die sich im Kot befindet, herausgezogen. Der trockene Kot riecht dann überhaupt nicht mehr.  
          </p>
          <p class="mb-4">
            Als Nebeneffekt wirkt die Einstreu zusätzlich als Sichtschutz. Wer in die geöffnete Trockentrenntoilette schaut, sieht also keine unappetitlichen Hinterlassenschaften, sondern lediglich die Einstreu. 
          </p>
          <h4 class="mb-4 h2">Übrigens: Das Gemisch aus Kot und Einstreu lässt sich hervorragend kompostieren.</h4>
          <p class="mb-4">
            Wer eine Trockentrenntoilette mit Abluftsystem nutzt, kann auf Einstreu verzichten. Hier sorgt die elektrische Entlüftung für die Geruchlosigkeit. Allerdings muss man bedenken, dass man bei dieser Variante auf Strom angewiesen ist und somit nicht gänzlich autark ist.
          </p>
          <p class="mb-4">
            Eine weitere Alternative zur Einstreu sind chemische Zusatzstoffe. Jedoch wird Chemie in aller Regel nicht im Zusammenhang mit Trockentrenntoiletten verwendet, sondern mit Chemietoiletten. Da bei Chemietoiletten keine Trennung von Kot und Urin erfolgt, müssen hier schon sehr starke, umweltschädliche Chemikalien zum Einsatz kommen, um den Geruch der Ausscheidungen zu minimieren. Dafür riecht man dann aber leider die Chemikalien.  
          </p>
          <h5 class="mb-4 h2">Fazit</h5>
          <p class="lead mb-4">
            Wer seine Trockentrenntoilette gänzlich autark nutzen und von Wasser, Strom und Chemie unabhängig sein möchte, ist mit Einstreu bestens beraten. Die kostengünstige Substanz besteht meist aus Holzspänen oder ähnlichen natürlichen Materialien, so dass weder dein Geldbeutel noch die Umwelt belastet wird. Dennoch stellt die Einstreu effektiv sicher, dass du deine Trockentrenntoilette hygienisch und geruchsfrei nutzen kannst. Eine super Sache also!
          </p>
          <p class="lead mb-4">
             Auf <nuxt-link to="/" title="Trockentrenntoilette.net">Trockentrenntoilette.net</nuxt-link> listen wir ausschließlich qualitativen Einstreu renommierter Hersteller wie <nuxt-link to="/hersteller/trobolo/" title="TROBOLO">TROBOLO</nuxt-link>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "~/assets/einstreu.json";

export default {
  name: "einstreu",
  head: {
    title: "Einstreu für die Trockentrenntoilette",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Das richtige Einstreu für die Trockentrenntoilette. Markenprodukte im Test: Material, Geruchsentwicklung, Nutzungsanzahl. Produktvergleich und Empfehlungen.",
      },
    ],
  },
  asyncData() {
    return {
      products,
    };
  },
};
</script>
