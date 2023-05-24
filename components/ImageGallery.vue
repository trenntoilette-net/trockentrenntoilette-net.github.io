<template>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 col-md-6 col-xs-6" v-for="(image, index) in images" :key="index">
                    <div class="card productImage" @click="openModal(image)">
                        <nuxt-img :src="image" class="card-img-top imageFit" alt="Trelino EVO S" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <!-- Modal -->
        <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <nuxt-img v-if="selectedImage" :src="selectedImage" alt="Selected Image" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ImageGallery',
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedImage: ''
        };
    },
    methods: {
        openModal(image) {
            this.selectedImage = image;
            var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        }
    }
}
</script>

<style scoped>
.productImage {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    cursor: pointer;
    /* Indicates the image is clickable */
    overflow: hidden;
    /* Prevents image overflow */
}

.imageFit {
    width: 100%;
    height: 200px;
    /* Adjust to desired height */
    object-fit: cover;
}
</style>
