(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{278:function(t,e,r){var content=r(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("447b5994",content,!0,{sourceMap:!1})},279:function(t,e,r){"use strict";r.r(e);var o={name:"productitem",props:{product:Object}},l=(r(280),r(18)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:t.product.linkTo,title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid product-image",attrs:{src:t.product.image,alt:t.product.name,format:"webp",quality:"90"}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:t.product.linkTo,title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),r("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(t.product.price)+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5 product-name"},[t._v(t._s(t.product.name))])]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),t.product.manufacturerLink?r("NuxtLink",{attrs:{to:t.product.manufacturerLink,title:t.product.brand}},[t._v(t._s(t.product.brand))]):t._e()],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/"+t.product.category.toLowerCase()+"/"}},[t._v("\n          "+t._s(t.product.category))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,r){"use strict";r(278)},281:function(t,e,r){var o=r(56)(!1);o.push([t.i,".course-item{display:flex;flex-direction:column;height:100%}.product-image{max-height:400px;min-height:400px;-o-object-fit:cover;object-fit:cover}",""]),t.exports=o}}]);