(window.webpackJsonp=window.webpackJsonp||[]).push([[31,10,11],{253:function(t){t.exports=JSON.parse('[{"brand":"TROBOLO","name":"TROBOLO Einstreu","linkTo":"/zubehoer/einstreu/trobolo-einstreu/","linkTitle":"TROBOLO Einstreu für die Trockentrenntoilette","price":"19,90","liter":25,"material":["80% Kiefer","20% Erle"],"numberOfUsage":"85-115","shopLink":"https://trobolo.com/de/produkte/einstreu/","manufacturerLink":"/hersteller/trobolo/","category":"Einstreu","reviewCount":599,"ratingValue":4.9,"stars":5,"image":"/assets/images/zubehoer/einstreu/trobolo-einstreu.webp","schemaPrice":19.9,"sku":"ESXX1325","mpn":"23963"},{"brand":"Kildwick","name":"Kildwick Miscanthus Einstreu","linkTo":"/zubehoer/einstreu/kildwick-miscanthus-oeko-einstreu/","linkTitle":"Kildwick Miscanthus Einstreu für die Trockentrenntoilette","price":"14,90","liter":17,"material":["Chinaschilf"],"numberOfUsage":"50","shopLink":"https://www.kildwick.com/de/miscanthus-oeko-streu","manufacturerLink":"/hersteller/kildwick/","category":"Einstreu","reviewCount":134,"ratingValue":4.4,"stars":4,"image":"/assets/images/zubehoer/einstreu/kildwick-miscanthus-oeko-einstreu.webp","schemaPrice":14.9,"sku":"8720165056019","mpn":"8720165056019"}]')},258:function(t,e,n){"use strict";n.r(e);var r={name:"zubehoerproductheader",props:{productName:String,textContent:String,productImage:String}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[n("div",{staticClass:"position-relative h-100"},[n("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{src:t.productImage,alt:t.productName,quality:"90",format:"webp"}})],1)]),t._v(" "),n("div",{staticClass:"col-lg-6 fadeInUp"},[n("h6",{staticClass:"section-title bg-white text-start text-primary pe-3"},[t._v("\n            Testbericht\n          ")]),t._v(" "),n("h1",{staticClass:"mb-4"},[t._v(t._s(t.productName))]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n            "+t._s(t.textContent)+"\n          ")]),t._v(" "),n("a",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{href:"#testbericht"}},[t._v("Zum Testbericht")])])])])])])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var r={name:"productcard",props:{product:Object}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sidebar-widget schedule-widget mt-5"},[n("h5",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},[n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Hersteller")]),t._v(" "),n("span"),t._v(" "),n("NuxtLink",{attrs:{to:t.product.manufacturerLink}},[t._v(t._s(t.product.brand))])],1),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Material")]),t._v(" "),n("span",[t._v(t._s(t.product.material.join(", ")))])]),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Nutzungen")]),t._v(" "),n("span",[t._v(t._s(t.product.numberOfUsage))])]),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Kategorie")]),t._v(" "),n("span",[n("NuxtLink",{attrs:{to:"/zubehoer/"+t.product.category.toLowerCase()+"/"}},[t._v("\n            "+t._s(t.product.category))])],1)]),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Bewertung")]),t._v(" "),n("div",{staticClass:"mb-1 mt-3"},[t._l(t.product.stars,(function(t,e){return n("small",{key:e,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return n("small",{key:t,staticClass:"fa fa-star text-default"})}))],2)]),t._v(" "),n("hr")]),t._v(" "),n("div",{staticClass:"sidebar-contact-info mt-4"},[n("p",{staticClass:"mb-0"},[t._v("Preis")]),t._v(" "),n("h3",[t._v(t._s(t.product.price)+" EUR")])])])])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);n(184),n(10),n(30),n(79);var r=n(253),c={name:"KildWickMiscanthusEinstreu",head:{title:"Kildwick Miscanthus Einstreu im Test",meta:[{hid:"description",name:"description",content:"Kildwick Miscanthus Einstreu im Test. Der Einstreu von Kildwick ist ein vollständig kompostierbares Naturprodukt welches wir ausgiebig getestet haben."}]},asyncData:function(){return{product:r.find((function(t){return"Kildwick Miscanthus Einstreu"===t.name}))}},jsonld:function(){return{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org/","@type":"Product",name:this.product.name,image:["https://www.trockentrenntoilette.net/assets/images/zubehoer/einstreu/kildwick-miscanthus-oeko-einstreu.webp"],description:"Kildwick Miscanthus Einstreu ist ein vollständig kompostierbares Naturprodukt, hergestellt aus Chinaschilf.",sku:this.product.sku,brand:{"@type":"Brand",name:this.product.brand},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:this.product.stars,bestRating:this.product.stars},author:{"@type":"Organization",name:"Trockentrenntoilette.net"}},aggregateRating:{"@type":"AggregateRating",ratingValue:this.product.ratingValue.toString(),reviewCount:this.product.reviewCount.toString()},offers:{"@type":"Offer",url:"https://www.trockentrenntoilette.net/zubehoer/einstreu/kildwick-miscanthus-oeko-streu/",priceCurrency:"EUR",price:this.product.schemaPrice.toString(),priceValidUntil:"2024-11-20",itemCondition:"https://schema.org/NewCondition",availability:"https://schema.org/InStock"}},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.trockentrenntoilette.net/",name:"Trockentrenntoiletten"}},{"@type":"ListItem",position:2,item:{"@id":"https://www.trockentrenntoilette.net/zubehoer/einstreu/kildwick-miscanthus-oeko-streu/",name:this.product.name}}]}]}}},l=n(18),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ZubehoerProductHeader",{attrs:{productName:"Kildwich Miscanthus Öko-Streu",textContent:"Dank einer Fertigung aus 100 % Chinaschilf vertrauen Sie mit dem Miscanthus Öko-Streu von Kildwick auf einen schnell nachwachsenden und vollständig kompostierbaren Rohstoff. Mit einer sehr guten Saugfähigkeit und Geruchsunterdrückung entscheiden Sie sich für eine klimaneutrale und kostenbewusste Einstreu.",productImage:"/assets/images/zubehoer/einstreu/kildwick-miscanthus-oeko-einstreu.webp"}}),t._v(" "),n("div",{staticClass:"container-xxl py-5",attrs:{id:"testbericht"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-8 fadeInUp",staticStyle:{"min-height":"400px"}},[n("h2",{staticClass:"mb-4"},[t._v("Testbericht")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n                        In diesem Testbericht stellen wir Ihnen die Miscanthus Einstreu von Kildwick vor, welcher\n                        aus 100 % Chinaschilf besteht. Die Einstreu ist vollständig kompostierbar und somit eine\n                        umweltfreundliche Alternative zu herkömmlichen Einstreu. Die Einstreu ist für die Nutzung in\n                        jeglichen Trockentrenntoiletten geeignet und kann mit einer sehr guten Saugfähigkeit und\n                        Geruchsunterdrückung überzeugen.\n                    ")]),t._v(" "),n("h3",{staticClass:"mb-3 mt-5 h5"},[t._v("Funktionalität")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n                        Die Miscanthus Einstreu von Kildwick ist auf eine Nutzung in jeglichen Trockentrenntoiletten\n                        ausgelegt. Die feinen Holzspäne der Einstreu sind aus reinem Chinaschilf gefertigt, das als\n                        organisches Material schnell nachwächst. Kildwick achtet bei Anzucht und Herstellung der\n                        Einstreu auf einen strikten Verzicht von Pflanzenschutzmittel.\n                    ")]),t._v(" "),n("h5",{staticClass:"mb-3 mt-5"},[t._v("Anwendung")]),t._v(" "),n("p",[t._v("\n                        Füllen Sie zur Nutzung einfach zwei bis drei Handvoll der Einstreu in Ihre\n                        Trockentrenntoilette und erleben Sie eine eine erheblichen Reduktion der Geruchsbildung.\n                        Gleichzeitig ermöglicht die natürliche Einstreu eine Kompostierung Ihrer Toilettenabfälle.\n                    ")]),t._v(" "),n("p",[t._v("\n                        Die Miscanthus Einstreu von Kildwick bleibt nach dem Öffnen der Transporttüte sehr\n                        formstabil, so dass Sie kein Bröseln und unerwünschte Verunreinigungen fürchten müssen. Die\n                        Handhabung ist somit denkbar einfach und sauber, wenn Sie Ihre Trenntoilette mit einem\n                        vollständig kompostierbaren Naturmaterial betreiben möchten.\n                    ")]),t._v(" "),n("h5",{staticClass:"mb-3 mt-5"},[t._v("Testkriterien")]),t._v(" "),t._m(0),t._v(" "),n("a",{staticClass:"btn btn-primary py-3 px-5",attrs:{target:"_blank",rel:"nofollow noopener",href:t.product.shopLink}},[t._v("Bestellen")])]),t._v(" "),n("div",{staticClass:"col-lg-4 fadeInUp"},[n("ZubehoerProductCard",{attrs:{product:t.product}}),t._v(" "),n("div",{staticClass:"mt-5"},[n("a",{staticClass:"btn btn-primary py-3 px-5",staticStyle:{display:"block",width:"100%"},attrs:{target:"_blank",rel:"nofollow noopener",href:t.product.shopLink}},[t._v("Kildwick Online Shop")])])],1)])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row gy-2 gx-4 mb-5 mt-5"},[n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Einstreu aus 100 % Chinaschilf\n                            ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Organisches und klimaneutral hergestelltes\n                                Material\n                            ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Einstreu vollständig kompostierbar\n                            ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Anzucht des Rohstoffs ohne\n                                Pflanzenschutzmittel\n                            ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Für mehrere Dutzend Toilettengänge\n                                geeignet\n                            ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Entsorgung & Hygiene\n                            ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ZubehoerProductHeader:n(258).default,ZubehoerProductCard:n(259).default})}}]);