(window.webpackJsonp=window.webpackJsonp||[]).push([[25,8,9],{258:function(t){t.exports=JSON.parse('[{"brand":"TROBOLO","name":"TROBOLO Einstreu","linkTo":"/zubehoer/einstreu/trobolo-einstreu/","linkTitle":"TROBOLO Einstreu für die Trockentrenntoilette","price":"19,90","liter":25,"material":["80% Kiefer","20% Erle"],"numberOfUsage":"85-115","shopLink":"https://trobolo.com/de/produkte/einstreu/","manufacturerLink":"/hersteller/trobolo/","category":"Einstreu","reviewCount":599,"ratingValue":4.9,"stars":5,"image":"/assets/images/zubehoer/einstreu/trobolo-einstreu.webp","schemaPrice":19.9,"sku":"ESXX1325","mpn":"23963"}]')},261:function(t,e,n){"use strict";n.r(e);var r={name:"zubehoerproductheader",props:{productName:String,textContent:String,productImage:String}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[n("div",{staticClass:"position-relative h-100"},[n("img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{src:t.productImage,alt:t.productName}})])]),t._v(" "),n("div",{staticClass:"col-lg-6 fadeInUp"},[n("h6",{staticClass:"section-title bg-white text-start text-primary pe-3"},[t._v("\n            Testbericht\n          ")]),t._v(" "),n("h1",{staticClass:"mb-4"},[t._v(t._s(t.productName))]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n            "+t._s(t.textContent)+"\n          ")]),t._v(" "),n("a",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{href:"#testbericht"}},[t._v("Zum Testbericht")])])])])])])}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var r={name:"productcard",props:{product:Object}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sidebar-widget schedule-widget mt-5"},[n("h5",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},[n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Hersteller")]),t._v(" "),n("span",[n("NuxtLink",{attrs:{to:t.product.manufacturerLink}},[t._v(t._s(t.product.brand))])],1)]),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Material")]),t._v(" "),n("span",[t._v(t._s(t.product.material.join(", ")))])]),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Nutzungen")]),t._v(" "),n("span",[t._v(t._s(t.product.numberOfUsage))])]),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Kategorie")]),t._v(" "),n("span",[n("NuxtLink",{attrs:{to:"/zubehoer/"+t.product.category.toLowerCase()+"/"}},[t._v("\n            "+t._s(t.product.category))])],1)]),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Bewertung")]),t._v(" "),n("div",{staticClass:"mb-1 mt-3"},[t._l(t.product.stars,(function(t){return n("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return n("small",{key:t,staticClass:"fa fa-star text-default"})}))],2)]),t._v(" "),n("hr")]),t._v(" "),n("div",{staticClass:"sidebar-contact-info mt-4"},[n("p",{staticClass:"mb-0"},[t._v("Preis")]),t._v(" "),n("h3",[t._v(t._s(t.product.price)+" EUR")])])])])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);n(184),n(10),n(30);var r=n(258),c={name:"TROBOLO Einstreu",head:{title:"TROBOLO Einstreu im Test",meta:[{hid:"description",name:"description",content:"Der Einstreu für Trockentrenntoiletten von TROBOLO besteht zu 80% aus Kiefer und 20% aus Erle. Wir testen den Einstreu aus der Eigenproduktion von TROBLO."}]},asyncData:function(){return{product:r.find((function(t){return"TROBOLO Einstreu"===t.name}))}},jsonld:function(){return{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org/","@type":"Product",name:this.product.name,image:["https://www.trockentrenntoilette.net/assets/images/zubehoer/einstreu/trobolo-einstreu.webp"],description:"Der Einstreu für Trockentrenntoiletten von TROBOLO besteht zu 80% aus Kiefer und 20% aus Erle. Lieferung im ökologischen Kraftpapiersack",sku:this.product.sku,mpn:this.product.mpn,brand:{"@type":"Brand",name:this.product.brand},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:String(this.product.stars),bestRating:String(this.product.stars)},author:{"@type":"Organization",name:"Trockentrenntoilette.net"}},aggregateRating:{"@type":"AggregateRating",ratingValue:String(this.product.ratingValue),reviewCount:String(this.product.reviewCount)},offers:{"@type":"Offer",url:"https://www.trockentrenntoilette.net/zubehoer/einstreu/trobolo-einstreu/",priceCurrency:"EUR",price:String(this.product.schemaPrice),priceValidUntil:"2024-11-20",itemCondition:"https://schema.org/NewCondition",availability:"https://schema.org/InStock"}},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.trockentrenntoilette.net/",name:"Trockentrenntoiletten"}},{"@type":"ListItem",position:2,item:{"@id":"https://www.trockentrenntoilette.net/zubehoer/einstreu/trobolo-einstreu/",name:this.product.name}}]}]}}},o=n(18),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ZubehoerProductHeader",{attrs:{productName:"TROBOLO Einstreu im Test",textContent:"Der Trockentoiletten Einstreu von TROBOLO besteht zu 80% aus Kiefer und 20% aus Erle. TROBOLO stellt den Einstreu selbst her. Er dient der Geruchsunterdrückung für Trockentrenntoiletten.",productImage:t.product.image}}),t._v(" "),n("div",{staticClass:"container-xxl py-5",attrs:{id:"testbericht"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-8 fadeInUp",staticStyle:{"min-height":"400px"}},[n("h2",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n            Der Einstreu von TROBOLO dient dem Einsatz in einer\n            Trockentrenntoilette. Er dient der Bindung der Feuchtigkeit und\n            unterdrückt die Geruchsentwicklung. TROBOLO stellt den Einstreu\n            selbst aus Holzspänen her. Der Einstreu besteht aus 80 % Kiefer\n            und 20 % Erle und duftet angenehm nach Holz.\n          ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n            Hilfreich ist der Einstreu vor allem dann, wenn man eine kleine\n            Trockentrenntoilette oder Campingtoilette besitzt, da die\n            Luftzirkulation geringer ist. Weiterhin macht Einstreu in wärmeren\n            Gebieten Sinn, vor allem weil die Geruchsentwicklung aufgrund der\n            höheren Temperaturen stärker ist.\n          ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n            Der Einstreu von TROBOLO umfasst 25 Liter. Er wird in einem\n            ökologischen Kraftpapiersack geliefert. Die Nutzung soll laut\n            TROBOLO für 85-115 Nutzungen ausreichen. In unserem Test erwies\n            sich aber bereits eine kleine Menge Einstreu als\n            Geruchsneutralisator, sodass wir die Nutzungsanzahl höher\n            einschätzen würden. Unterstützt wird die geringere Notwendigkeit\n            des Materials vor allem aber durch den angenehmen Duft nach Holz.\n          ")]),t._v(" "),t._m(0),t._v(" "),n("a",{staticClass:"btn btn-primary py-3 px-5",attrs:{target:"_blank",rel:"nofollow noopener",href:this.product.shopLink}},[t._v("Bestellen")])]),t._v(" "),n("div",{staticClass:"col-lg-4 fadeInUp"},[n("ZubehoerProductCard",{attrs:{product:t.product}}),t._v(" "),n("div",{staticClass:"mt-5"},[n("a",{staticClass:"btn btn-primary py-3 px-5",staticStyle:{display:"block",width:"100%"},attrs:{target:"_blank",rel:"nofollow noopener",href:this.product.shopLink}},[t._v("TROBOLO Online Shop")])])],1)])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row gy-2 gx-4 mb-5 mt-5"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Einstreu aus 80%\n                Kiefer und 20% Erle\n              ")]),t._v(" "),n("div",{staticClass:"col-12"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("25 Liter Einstreu\n                ")])])]),t._v(" "),n("div",{staticClass:"col-12"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("85 - 115 Nutzungen\n              ")])]),t._v(" "),n("div",{staticClass:"col-12"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Holzduft\n              ")])]),t._v(" "),n("div",{staticClass:"col-12"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Packung besteht aus\n                ökologischem Kraftpapiersack\n              ")])]),t._v(" "),n("div",{staticClass:"col-12"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Bindet Feuchtigkeit\n              ")])]),t._v(" "),n("div",{staticClass:"col-12"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-check text-info me-2"}),t._v("Unterdrückt die\n                Geruchsentwicklung\n              ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ZubehoerProductHeader:n(261).default,ZubehoerProductCard:n(262).default})}}]);