<template>
  <div>
    <div class="sidebar-widget schedule-widget mt-5">
      <h5 class="mb-4">{{ manufacturer.brand }}</h5>
      <ul class="list-unstyled">
        <li class="d-flex justify-content-between align-items-center">
          <a>Firmensitz</a> <span>{{ manufacturer.location }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Produkte</a>
          <span>{{ manufacturer.products }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Email</a> <span>{{ manufacturer.email }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Telefon</a> <span>{{ manufacturer.phone }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <a>Webseite</a> <span>{{ manufacturer.url }}</span>
        </li>
        <hr />
      </ul>
      <div class="sidebar-contact-info mt-4">
        <p class="mb-0">Preis-Leistungs-Verhältnis</p>
        <div class="mb-1 mt-3">
          <small
            v-for="star in manufacturer.stars"
            :key="star"
            class="pl-3 fa fa-star text-primary"
          ></small>
          <small
            v-for="index in 5 - manufacturer.stars"
            :key="index"
            class="fa fa-star text-default"
          ></small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "manufacturercard",
  props: {
      manufacturer: Object
  },
};
</script>
