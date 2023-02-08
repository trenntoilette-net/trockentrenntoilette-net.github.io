<template>
    <div>
        <ZubehoerProductHeader productName="Kildwich Miscanthus Öko-Streu"
            textContent="Dank einer Fertigung aus 100 % Chinaschilf vertrauen Sie mit dem Miscanthus Öko-Streu von Kildwick auf einen schnell nachwachsenden und vollständig kompostierbaren Rohstoff. Mit einer sehr guten Saugfähigkeit und Geruchsunterdrückung entscheiden Sie sich für eine klimaneutrale und kostenbewusste Einstreu."
            productImage="/assets/images/zubehoer/einstreu/kildwick-miscanthus-oeko-einstreu.webp">
        </ZubehoerProductHeader>

        <!-- About Start -->
        <div class="container-xxl py-5" id="testbericht">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-8 fadeInUp" style="min-height: 400px">
                        <h2 class="mb-4">Testbericht</h2>

                        <p class="mb-4">
                            In diesem Testbericht stellen wir Ihnen die Miscanthus Einstreu von Kildwick vor, welcher
                            aus 100 % Chinaschilf besteht. Die Einstreu ist vollständig kompostierbar und somit eine
                            umweltfreundliche Alternative zu herkömmlichen Einstreu. Die Einstreu ist für die Nutzung in
                            jeglichen Trockentrenntoiletten geeignet und kann mit einer sehr guten Saugfähigkeit und
                            Geruchsunterdrückung überzeugen.
                        </p>

                        <h3 class="mb-3 mt-5 h5">Funktionalität</h3>

                        <p class="mb-4">
                            Die Miscanthus Einstreu von Kildwick ist auf eine Nutzung in jeglichen Trockentrenntoiletten
                            ausgelegt. Die feinen Holzspäne der Einstreu sind aus reinem Chinaschilf gefertigt, das als
                            organisches Material schnell nachwächst. Kildwick achtet bei Anzucht und Herstellung der
                            Einstreu auf einen strikten Verzicht von Pflanzenschutzmittel.
                        </p>

                        <h5 class="mb-3 mt-5">Anwendung</h5>

                        <p>
                            Füllen Sie zur Nutzung einfach zwei bis drei Handvoll der Einstreu in Ihre
                            Trockentrenntoilette und erleben Sie eine eine erheblichen Reduktion der Geruchsbildung.
                            Gleichzeitig ermöglicht die natürliche Einstreu eine Kompostierung Ihrer Toilettenabfälle.
                        </p>
                        <p>
                            Die Miscanthus Einstreu von Kildwick bleibt nach dem Öffnen der Transporttüte sehr
                            formstabil, so dass Sie kein Bröseln und unerwünschte Verunreinigungen fürchten müssen. Die
                            Handhabung ist somit denkbar einfach und sauber, wenn Sie Ihre Trenntoilette mit einem
                            vollständig kompostierbaren Naturmaterial betreiben möchten.
                        </p>

                        <h5 class="mb-3 mt-5">Testkriterien</h5>

                        <div class="row gy-2 gx-4 mb-5 mt-5">
                            <div class="col-sm-6">
                                <p class="mb-0">
                                    <i class="fa fa-check text-info me-2"></i>Einstreu aus 100 % Chinaschilf
                                </p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0">
                                    <i class="fa fa-check text-info me-2"></i>Organisches und klimaneutral hergestelltes
                                    Material
                                </p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0">
                                    <i class="fa fa-check text-info me-2"></i>Einstreu vollständig kompostierbar
                                </p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0">
                                    <i class="fa fa-check text-info me-2"></i>Anzucht des Rohstoffs ohne
                                    Pflanzenschutzmittel
                                </p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0">
                                    <i class="fa fa-check text-info me-2"></i>Für mehrere Dutzend Toilettengänge
                                    geeignet
                                </p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0">
                                    <i class="fa fa-check text-info me-2"></i>Entsorgung & Hygiene
                                </p>
                            </div>
                        </div>
                        <a class="btn btn-primary py-3 px-5" target="_blank" rel="nofollow noopener"
                            :href="product.shopLink">Bestellen</a>
                    </div>
                    <div class="col-lg-4 fadeInUp">
                        <ZubehoerProductCard :product="product" />
                        <div class="mt-5">
                            <a class="btn btn-primary py-3 px-5" target="_blank" rel="nofollow noopener"
                                :href="product.shopLink" style="display: block; width: 100%">Kildwick Online Shop</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->
    </div>
</template>

<script>
import products from "~/assets/einstreu.json";

export default {
    name: "KildWickMiscanthusEinstreu",
    head: {
        title: "Kildwick Miscanthus Einstreu im Test",
        meta: [
            {
                hid: "description",
                name: "description",
                content:
                    "Kildwick Miscanthus Einstreu im Test. Der Einstreu von Kildwick ist ein vollständig kompostierbares Naturprodukt welches wir ausgiebig getestet haben.",
            },
        ],
    },
    asyncData: () => {
        return {
            product: products.find((item) => item.name === "Kildwick Miscanthus Einstreu"),
        };
    },
    jsonld() {
        return {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@context": "https://schema.org/",
                    "@type": "Product",
                    name: this.product.name,
                    image: [
                        "https://www.trockentrenntoilette.net/assets/images/zubehoer/einstreu/kildwick-miscanthus-oeko-einstreu.webp",
                    ],
                    description:
                        "Kildwick Miscanthus Einstreu ist ein vollständig kompostierbares Naturprodukt, hergestellt aus Chinaschilf.",
                    sku: this.product.sku,
                    brand: {
                        "@type": "Brand",
                        name: this.product.brand,
                    },
                    review: {
                        "@type": "Review",
                        reviewRating: {
                            "@type": "Rating",
                            ratingValue: this.product.stars,
                            bestRating: this.product.stars,
                        },
                        author: {
                            "@type": "Organization",
                            name: "Trockentrenntoilette.net",
                        },
                    },
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: this.product.ratingValue.toString(),
                        reviewCount: this.product.reviewCount.toString(),
                    },
                    offers: {
                        "@type": "Offer",
                        url: "https://www.trockentrenntoilette.net/zubehoer/einstreu/kildwick-miscanthus-oeko-einstreu/",
                        priceCurrency: "EUR",
                        price: this.product.schemaPrice.toString(),
                        priceValidUntil: "2024-11-20",
                        itemCondition: "https://schema.org/NewCondition",
                        availability: "https://schema.org/InStock",
                    },
                },
                {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            item: {
                                "@id": "https://www.trockentrenntoilette.net/",
                                name: "Trockentrenntoiletten",
                            },
                        },
                        {
                            "@type": "ListItem",
                            position: 2,
                            item: {
                                "@id": "https://www.trockentrenntoilette.net/zubehoer/einstreu/kildwick-miscanthus-oeko-einstreu/",
                                name: this.product.name,
                            },
                        },
                    ],
                },
            ],
        };
    },
};
</script>
