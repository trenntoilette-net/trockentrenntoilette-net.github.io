<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
            <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="{ active: index === 0 }">
                <nuxt-img :src="image" class="d-block w-100" alt="Trelino EVO S" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
  
<script>
export default {
    name: "CarouselComponent",
    props: {
        images: {
            type: Array,
            required: true
        }
    }
}
</script>
  
<style scoped>
.carousel-item {
    height: 600px;
    /* You can adjust this to your preferred height */
    overflow: hidden;
}

.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
}
</style>
  