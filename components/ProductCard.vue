<template>
  <div>
    <div class="sidebar-widget schedule-widget mt-5">
      <h5 class="mb-4">{{ product.name }}</h5>
      <ul class="list-unstyled">
        <li class="d-flex justify-content-between align-items-center">
          <a>Hersteller</a>
          <span
            ><NuxtLink :to="product.manufacturerLink">{{
              product.brand
            }}</NuxtLink></span
          >
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Material</a>
          <span>{{ product.material }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Maße</a>
          <span>{{ product.size }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Gewicht</a> <span>{{ product.weight }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Traglast</a> <span>{{ product.payload }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Funktion</a> <span>{{ product.function }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Bewertung</a>
          <div class="mb-1 mt-3">
            <small
              v-for="star in product.stars"
              :key="star"
              class="pl-3 fa fa-star text-primary"
            ></small>
            <small
              v-for="index in 5 - product.stars"
              :key="index"
              class="fa fa-star text-default"
            ></small>
          </div>
        </li>
        <hr />
      </ul>
      <div class="sidebar-contact-info mt-4">
        <p class="mb-0">Preis</p>
        <h3>{{ product.price }} EUR</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productcard",
  props: {
    product: Object,
  },
};
</script>
