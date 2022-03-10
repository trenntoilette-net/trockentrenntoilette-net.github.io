<template>
  <div>
    <div>
      <div class="sidebar-widget schedule-widget mt-5">
        <h5 class="mb-4">{{ productName }}</h5>
        <ul class="list-unstyled">
          <li class="d-flex justify-content-between align-items-center">
            <a href="#">Marke</a> <span>{{ brand }}</span>
          </li>
          <hr />
          <li class="d-flex justify-content-between align-items-center">
            <a href="#">Material</a>
            <span>{{ material }}</span>
          </li>
          <hr />
          <li class="d-flex justify-content-between align-items-center">
            <a href="#">Maße</a>
            <span>Höhe 497 - Tiefe 470 - Breite 330 mm</span>
          </li>
          <hr />
          <li class="d-flex justify-content-between align-items-center">
            <a href="#">Gewicht</a> <span>160 kg</span>
          </li>
          <hr />
          <li class="d-flex justify-content-between align-items-center">
            <a href="#">Traglast</a> <span>200 kg</span>
          </li>
          <hr />
          <li class="d-flex justify-content-between align-items-center">
            <a href="#">Funktion</a> <span>Trennsystem</span>
          </li>
          <hr />
          <li class="d-flex justify-content-between align-items-center">
            <a href="#">Bewertung</a>
            <div class="mb-1 mt-3">
              <small
                class="fa fa-star text-primary"
                v-for="index in stars"
                :key="index"
              ></small>
              <small
                class="fa fa-star text-default"
                v-for="x in offset"
                :key="x"
              ></small>
            </div>
          </li>
          <hr />
        </ul>
        <div class="sidebar-contact-info mt-4">
          <p class="mb-0">Preis</p>
          <h3>429,00 EUR</h3>
        </div>
      </div>
    </div>
    <div>
      <!-- <nuxt-img
                class="img-fluid"
                src="assets/images/feature-trockentrenntoilette-trobolo-luweblœm.webp"
                alt="TROBOLO LuweBlœm"
              /> -->
    </div>
    <div class="mt-5">
      <a
        class="btn btn-primary py-3 px-5"
        target="_blank"
        rel="nofollow noopener"
        href="https://trobolo.com/de/produkte/terabloem/"
        style="display: block; width: 100%"
        >TROBOLO Online Shop</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "productcard",
  props: {
    productName: String,
    brand: String,
    material: String,
    stars: Number,
  },
  data: () => ({
    stars: Number.parseInt(this.stars),
    offset: 5 - this.stars
  }),
};
</script>
