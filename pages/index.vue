<template>
  <div>
    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 fadeInUp" style="min-height: 400px">
            <div class="position-relative h-100">
              <nuxt-img
                class="img-fluid position-absolute w-100 h-100"
                src="/assets/images/trockentrenntoiletten-im-test.png"
                format="webp"
                quality="90"
                alt="Testsieger Trockentrenntoiletten"
                style="object-fit: cover; object-position: center bottom"
              />
            </div>
          </div>
          <div class="col-lg-6 fadeInUp">
            <div class="section-title bg-white text-start text-primary pe-3">
              Das Informationsportal für
            </div>
            <h1 class="mb-4">Trockentrenntoiletten</h1>
            <p class="mb-4">
              Wir sind dein Ratgeber für Trockentrenntoiletten. Wir testen
              Hersteller, Produkte und liefern dir die Infos die du benötigst,
              um die passende Trockentrenntoilette zu finden.
            </p>
            <p class="mb-4">
              Unsere Tests beinhalten mehrere Kriterien denen wir gründlich auf
              den Grund gehen. Dabei kommen folgende Testkritieren zum Einsatz:
            </p>
            <div class="row gy-2 gx-4 mb-4">
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Funktionalität
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Materialien
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Nachhaltigkeit
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Geruchsentwicklung
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Komfort
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Entsorgung
                  & Hygiene
                </p>
              </div>
            </div>
            <a class="btn btn-primary py-3 px-5 mt-2" href="#testsieger"
              >Zu den Testsiegern</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <!-- Testsieger Start -->
    <div class="container-xxl py-5" id="testsieger">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Trockentrenntoiletten
          </div>
          <h4 class="mb-5 h2">Testsieger</h4>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in featured"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div>
    <!-- Testsieger End -->

    <!-- Vorteile Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Gründe
          </div>
          <h2 class="mb-5 h2">Vorteile von Trockentrenntoiletten</h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-water text-primary mb-4"></i>
                <div class="mb-3 h5">Wasserfrei</div>
                <p>Eine Trockentrenntoilette kommt komplett ohne Wasser aus</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-sun text-primary mb-4"></i>
                <div class="mb-3 h5">Autark</div>
                <p>Sie benötigen keine zusätzlichen Sanitäranschlüsse</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-ban text-primary mb-4"></i>
                <div class="mb-3 h5">Keine Chemie</div>
                <p>Dank Trenneinsatz ist keine Chemie notwendig</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-recycle text-primary mb-4"></i>
                <div class="mb-3 h5">Nachhaltig</div>
                <p>
                  Benutzen Sie die Ausscheidungen als nährstoffreichen Kompost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Vorteile End -->

    <!-- Hersteller Start -->
    <div class="container-xxl py-5 category" id="hersteller">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Trockentrenntoiletten
          </div>
          <h3 class="mb-5 h2">Hersteller</h3>
        </div>
        <div class="row g-3">
          <div class="col-lg-7 col-md-6">
            <div class="row g-3">
              <div class="col-lg-12 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/hersteller/trobolo/"
                  title="Mehr über TROBOLO erfahren"
                >
                  <div class="grayscaleContainer">
                    <img
                      class="img-fluid grayscale"
                      src="/assets/images/hersteller/trobolo.webp"
                      alt="TROBOLO"
                    />
                    <div class="overlay">
                      <div class="overlayText">TROBOLO</div>
                    </div>
                  </div>
                  <div
                    class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style="margin: 1px"
                  >
                    <div class="m-0 h5">TROBOLO</div>
                    <!-- <small class="text-primary">Deutschland</small> -->
                  </div>
                </NuxtLink>
              </div>
              <div class="col-lg-6 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/hersteller/trelino/"
                  title="Mehr über Trelino erfahren"
                >
                  <div class="grayscaleContainer">
                    <img
                      class="img-fluid grayscale"
                      src="/assets/images/hersteller/trelino.webp"
                      alt="Trelino"
                    />
                    <div class="overlay">
                      <div class="overlayText">Trelino</div>
                    </div>
                  </div>
                  <div
                    class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style="margin: 1px"
                  >
                    <div class="m-0 h5">Trelino</div>
                    <!-- <small class="text-primary">49 Courses</small> -->
                  </div>
                </NuxtLink>
              </div>
              <div class="col-lg-6 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/hersteller/kildwick/"
                  title="Mehr über Kildwick erfahren"
                >
                  <div class="grayscaleContainer">
                    <img
                      class="img-fluid grayscale"
                      src="/assets/images/hersteller/kildwick.webp"
                      alt="Trelino"
                    />
                    <div class="overlay">
                      <div class="overlayText">Kildwick</div>
                    </div>
                  </div>
                  <div
                    class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style="margin: 1px"
                  >
                    <div class="m-0 h5">Kildwick</div>
                    <!-- <small class="text-primary">49 Courses</small> -->
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 zoomIn" style="min-height: 350px">
            <button class="position-relative d-block h-100 overflow-hidden">
              <div class="grayscaleContainer">
                <img
                  class="img-fluid grayscale"
                  src="/assets/images/hersteller/meinetrenntoilette.webp"
                  alt="MeineTrenntoilette"
                />
                <div class="overlay">
                  <div class="overlayText">Meine Trenntoilette</div>
                </div>
              </div>
              <div
                class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style="margin: 1px"
              >
                <div class="m-0 h5">Meine Trenntoilette</div>
                <!-- <small class="text-primary">Deutschland</small> -->
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Hersteller End -->

    <!-- Innenbereich Start -->
    <div class="container-xxl py-5" id="produkte">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Trockentrenntoiletten
          </div>
          <div class="mb-5 h2">Innenbereich</div>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in innenbereich"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div>
    <!-- Innenbereich End -->

    <!-- Gartentoiletten Start -->
    <div class="container-xxl py-5" id="gartentoiletten">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Trockentrenntoiletten
          </div>
          <h5 class="mb-5 h2">Gartentoiletten</h5>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in gartentoiletten"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div>
    <!-- Gartentoiletten End -->

    <!-- Campingtoiletten Start -->
    <div class="container-xxl py-5" id="campingtoiletten">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Trockentrenntoiletten
          </div>
          <h6 class="mb-5 h2">Campingtoiletten</h6>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in campingtoiletten"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div>
    <!-- Campingtoiletten End -->

    <!-- Team Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Team
          </div>
          <div class="mb-5 h2">Unsere Experten</div>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="/assets/images/img/team-1.jpg"
                  alt=""
                />
              </div>
              <!-- <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div> -->
              <div class="text-center p-4">
                <div class="mb-0 h5">Ringo Hülsmann</div>
                <small>Der "Toilettenkönig"</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="/assets/images/img/team-2.jpg"
                  alt=""
                />
              </div>
              <!-- <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div> -->
              <div class="text-center p-4">
                <div class="mb-0 h5">Leonie Meyer</div>
                <small>Biologin</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="/assets/images/img/team-3.jpg"
                  alt=""
                />
              </div>
              <!-- <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div> -->
              <div class="text-center p-4">
                <div class="mb-0 h5">Markus Baum</div>
                <small>Ökologe</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="/assets/images/img/team-4.jpg"
                  alt=""
                />
              </div>
              <!-- <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="social-media"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div> -->
              <div class="text-center p-4">
                <div class="mb-0 h5">Anh Tanaka</div>
                <small>Innenarchitektin</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Team End -->

    <!-- Seo Text -->
    <SeoTextIndex />
    <!-- Seo Text End -->

    <!-- FAQ -->
    <FAQ
      :faqs="faqs"
      faqTitle="Häufig gestellte Fragen zum Thema Trockentrenntoiletten"
    />
  </div>
</template>

<script>
import products from "~/assets/products.json";
import { faqs } from "~/assets/data/config.json";

export default {
  name: "IndexPage",
  head: {
    title: "Trockentrenntoilette - Produkte & Testsieger",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Testberichte und Empfehlungen für die richtige Trockentrenntoilette. Hersteller und Produktvergleich. Vor dem Kauf informieren. Das Vergleichsportal.",
      },
    ],
  },
  data() {
    return {
      faqs,
    };
  },
  asyncData: () => {
    return {
      featured: products.filter((x) => x.featured == 1 && x.winner == 1),
      innenbereich: products.filter(
        (x) => x.featured && x.category == "Innenbereich"
      ),
      gartentoiletten: products.filter(
        (x) => x.featured && x.category == "Gartentoilette"
      ),
      campingtoiletten: products.filter(
        (x) => x.featured && x.category == "Campingtoilette"
      ),
    };
  },
};
</script>
