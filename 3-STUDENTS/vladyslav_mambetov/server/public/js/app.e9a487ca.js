(function(t){function s(s){for(var e,_,r=s[0],n=s[1],c=s[2],u=0,m=[];u<r.length;u++)_=r[u],Object.prototype.hasOwnProperty.call(i,_)&&i[_]&&m.push(i[_][0]),i[_]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);o&&o(s);while(m.length)m.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,s=0;s<l.length;s++){for(var a=l[s],e=!0,r=1;r<a.length;r++){var n=a[r];0!==i[n]&&(e=!1)}e&&(l.splice(s--,1),t=_(_.s=a[0]))}return t}var e={},i={app:0},l=[];function _(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,_),a.l=!0,a.exports}_.m=t,_.c=e,_.d=function(t,s,a){_.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},_.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},_.t=function(t,s){if(1&s&&(t=_(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(_.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)_.d(a,e,function(s){return t[s]}.bind(null,e));return a},_.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return _.d(s,"a",s),s},_.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},_.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var o=n;l.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"150c":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH5AUYDQUnzOnRSQAAAMdJREFUKM91ktERwiAQRJ+MDaSFWAKWgC3YCpYQW/A7XSQtUIK0kBb82XNOhJu5CbfcspeF07quNDEpD2U3gltHYAPeLjfhQ2JWU5KaKSfhuUeM2piAHbgBF3134blVPgNLQ7KowmySxe8Hd9Jz4IPh0f0GwRV1QDR8aolm+TwgGv5zPQEoztleGF5a4kOAWZ+k4muAV+tqkQFZTWmgvKi3mqI5Z/dm4xyq72qeNcFsihZF5N5bLY60AdfwPxGHFPwDrzr0e2UfhHE4GuQTXwwAAAAASUVORK5CYII="},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],_=a("2877"),r={},n=Object(_["a"])(r,i,l,!1,null,null,null),c=n.exports,o=a("8c4f"),u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"page",attrs:{id:"page"}},[a("Header",{attrs:{items:this.itemsBasket,goodCost:this.goodCost},on:{"remove-from-basket":t.removeFromBasket}}),a("Nav"),a("SectionPromo"),a("SectionProducts"),a("SectionCatalog",{on:{"add-to-basket":t.addToBasket}}),a("SectionOffer"),a("Subscribe"),a("Contacts"),a("Footer")],1),t._v(" "),a("PopUp")],1)},m=[],C=(a("7db0"),a("4160"),a("c975"),a("a434"),a("d3b7"),a("159b"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header center"},[t._m(0),e("div",{staticClass:"header__right"},[e("div",{staticClass:"header__bucket"},[e("div",{staticClass:"header__count",attrs:{id:"basket-count"}}),e("button",{attrs:{id:"basket-toggler"},on:{click:function(s){t.showBasket=!t.showBasket}}},[e("img",{staticClass:"header__cart",attrs:{src:a("cced"),alt:"cart"}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBasket,expression:"showBasket"}],staticClass:"drop",attrs:{id:"basket"}},[e("div",{attrs:{id:"basket-items"}},t._l(t.items,(function(s){return e("div",{key:s.productId,staticClass:"drop__box"},[e("a",{staticClass:"drop__img",attrs:{href:"single.html"}},[e("img",{attrs:{src:s.productImg,alt:"#",width:"72",height:"85"}})]),e("div",{staticClass:"drop__info"},[e("a",{staticClass:"drop__title",attrs:{href:"single.html"}},[t._v(" "+t._s(s.productName)+" ")]),e("img",{attrs:{src:a("c6e5"),alt:"#"}}),e("div",{staticClass:"drop__price"},[e("span",{staticClass:"drop__count"},[t._v(" "+t._s(s.amount)+" ")]),e("span",{staticClass:"drop__span"},[t._v(" x ")]),t._v(" $"+t._s(s.productPrice)+" ")])]),e("button",{staticClass:"drop__cancel fas fa-times-circle",attrs:{name:"remove"},on:{click:function(a){return t.$emit("remove-from-basket",s.productId)}}})])})),0),e("div",{staticClass:"drop__total"},[e("div",[t._v("TOTAL")]),e("div",{attrs:{id:"total-sum"}},[t._v("$"+t._s(t.goodCost))])]),e("a",{staticClass:"drop__link",attrs:{href:"checkout.html"}},[t._v("Checkout")]),e("a",{staticClass:"drop__link",attrs:{href:"#"}},[t._v("Go to cart")])])]),e("a",{staticClass:"header__link",attrs:{href:"#"}},[t._v("My Account")])])])}),d=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header__left"},[e("a",{staticClass:"logo",attrs:{href:""}},[e("img",{staticClass:"logo__img",attrs:{src:a("ede7"),alt:"logo"}}),e("span",{staticClass:"logo__text"},[t._v("BRAN"),e("span",{staticClass:"logo__text--last_letter"},[t._v("D")])])]),e("div",{staticClass:"header__form"},[e("button",{staticClass:"header__browse",attrs:{onclick:"displayMenu()"}},[t._v("Browse")]),e("input",{staticClass:"header__input",attrs:{type:"text",name:"name",placeholder:"Search for Item..."}}),e("button",{staticClass:"header__search"},[e("img",{attrs:{src:a("150c"),alt:"search"}})]),e("div",{staticClass:"mega_menu mega_menu--browse",attrs:{id:"mega_menu"}},[e("div",{staticClass:"mega_menu__column"},[e("h6",{staticClass:"mega_menu__title"},[t._v("Women")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Dresses")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters/Knits")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Jackets/Coats")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Blazers")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Denim")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Leggings/Pants")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Skirts/Shorts")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Accessories")])])]),e("h6",{staticClass:"mega_menu__title mega_menu__title--middle"},[t._v("Men")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tees/Tank tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Shirts/Polos")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweatshirts/Hoodies")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Blazers")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Jackets/vests")])])])])])])])}],f={props:["items","goodCost"],data:function(){return{showBasket:!1}}},A=f,g=Object(_["a"])(A,C,d,!1,null,null,null),v=g.exports,h=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"nav center"},[e("ul",{staticClass:"menu"},[e("li",{staticClass:"menu__list"},[e("a",{staticClass:"menu__link active",attrs:{href:"index.html"}},[t._v("Home")])]),e("li",{staticClass:"menu__list"},[e("a",{staticClass:"menu__link",attrs:{href:"product.html"}},[t._v("Man")]),e("div",{staticClass:"mega_menu"},[e("div",{staticClass:"mega_menu__column"},[e("h6",{staticClass:"mega_menu__title"},[t._v("Women")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Dresses")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters/Knits")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Jackets/Coats")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Blazers")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Denim")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Leggings/Pants")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Skirts/Shorts")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Accessories ")])])])]),e("div",{staticClass:"mega_menu__column"},[e("h6",{staticClass:"mega_menu__title"},[t._v("Women")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Dresses")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters/Knits")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Jackets/Coats")])])]),e("h6",{staticClass:"mega_menu__title mega_menu__title--middle"},[t._v("Women")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Dresses")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters/Knits")])])])]),e("div",{staticClass:"mega_menu__column"},[e("h6",{staticClass:"mega_menu__title"},[t._v("Women")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Dresses")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters/Knits")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Jackets/Coats")])])]),e("img",{attrs:{src:a("d681"),alt:"#"}})])])]),e("li",{staticClass:"menu__list"},[e("a",{staticClass:"menu__link",attrs:{href:"shoping_cart.html"}},[t._v("Women")])]),e("li",{staticClass:"menu__list"},[e("a",{staticClass:"menu__link",attrs:{href:"product.html"}},[t._v("Kids")])]),e("li",{staticClass:"menu__list"},[e("a",{staticClass:"menu__link",attrs:{href:"product.html"}},[t._v("Accoseriese")])]),e("li",{staticClass:"menu__list"},[e("a",{staticClass:"menu__link",attrs:{href:"product.html"}},[t._v("Featured")])]),e("li",{staticClass:"menu__list"},[e("a",{staticClass:"menu__link",attrs:{href:"product.html"}},[t._v("Hot Deals")]),e("div",{staticClass:"mega_menu mega_menu--left"},[e("div",{staticClass:"mega_menu__column"},[e("h6",{staticClass:"mega_menu__title"},[t._v("Women")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Dresses")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters/Knits")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Jackets/Coats")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Blazers")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Denim")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Leggings/Pants")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Skirts/Shorts")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Accessories ")])])])]),e("div",{staticClass:"mega_menu__column"},[e("h6",{staticClass:"mega_menu__title"},[t._v("Women")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Dresses")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters/Knits")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Jackets/Coats")])])]),e("h6",{staticClass:"mega_menu__title mega_menu__title--middle"},[t._v("Women")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Dresses")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters/Knits")])])])]),e("div",{staticClass:"mega_menu__column"},[e("h6",{staticClass:"mega_menu__title"},[t._v("Women")]),e("ul",{staticClass:"mega_menu__ul"},[e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Dresses")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Tops")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Sweaters/Knits")])]),e("li",{staticClass:"mega_menu__list"},[e("a",{staticClass:"mega_menu__link",attrs:{href:""}},[t._v("Jackets/Coats")])])]),e("img",{attrs:{src:a("d681"),alt:"#"}})])])])])])}],b={},k=Object(_["a"])(b,h,p,!1,null,null,null),w=k.exports,B=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"promo center"},[a("div",{staticClass:"promo__content"},[a("h1",{staticClass:"promo__suptitle"},[t._v("THE BRAND")]),a("h2",{staticClass:"promo__title"},[t._v("OF LUXERIOUS "),a("span",{staticClass:"promo__title--last_letter"},[t._v("FASHION")])])])])}],S={},O=Object(_["a"])(S,B,E,!1,null,null,null),x=O.exports,y=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"products center"},[a("div",{staticClass:"products__left"},[a("a",{staticClass:"products__item",attrs:{href:"#"}},[a("img",{staticClass:"products__img",attrs:{src:"https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_1.png",alt:"#"}}),a("div",{staticClass:"products__content"},[a("h4",{staticClass:"products__subtitle"},[t._v("hOT dEAl")]),a("h3",{staticClass:"products__title"},[t._v("FOR MEN")])])]),a("a",{staticClass:"products__item",attrs:{href:"#"}},[a("img",{staticClass:"products__img",attrs:{src:"https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_3.png",alt:"#"}}),a("div",{staticClass:"products__content"},[a("h4",{staticClass:"products__subtitle"},[t._v("LUXIROUS & trendy")]),a("h3",{staticClass:"products__title"},[t._v("ACCESORIES")])])])]),a("div",{staticClass:"products__right"},[a("a",{staticClass:"products__item",attrs:{href:"#"}},[a("img",{staticClass:"products__img",attrs:{src:"https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_2.png",alt:"#"}}),a("div",{staticClass:"products__content"},[a("h4",{staticClass:"products__subtitle"},[t._v("30% offer")]),a("h3",{staticClass:"products__title"},[t._v("women")])])]),a("a",{staticClass:"products__item",attrs:{href:"#"}},[a("img",{staticClass:"products__img",attrs:{src:"https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_4.png",alt:"#"}}),a("div",{staticClass:"products__content"},[a("h4",{staticClass:"products__subtitle"},[t._v("new arrivals")]),a("h3",{staticClass:"products__title"},[t._v("FOR kids")])])])])])}],D={},R=Object(_["a"])(D,y,I,!1,null,null,null),F=R.exports,U=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"catalog center"},[a("h3",{staticClass:"catalog__header"},[t._v("Featured Items")]),a("p",{staticClass:"catalog__header_text"},[t._v("Shop for items based on what we featured in this week")]),a("div",{staticClass:"catalog__main",attrs:{id:"catalog"}},t._l(t.items,(function(s){return a("div",{key:s.productId,staticClass:"catalog__item"},[a("button",{staticClass:"catalog__bucket",attrs:{name:"add"},on:{click:function(a){return t.$emit("add-to-basket",s)}}},[a("img",{staticClass:"catalog__hidden_img",attrs:{src:"https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg",alt:"#"}}),a("span",{staticClass:"catalog__hidden_text"},[t._v("Add to Cart")])]),a("div",{staticClass:"catalog__photo"},[a("img",{staticClass:"catalog__img",attrs:{src:s.productImg,alt:"#"}})]),a("div",{staticClass:"catalog__content"},[a("a",{staticClass:"catalog__name",attrs:{href:"#"}},[t._v(t._s(s.productName))]),a("div",{staticClass:"catalog__price"},[t._v(t._s(s.productPrice)+".00")])])])})),0),t._v(" "),t._m(0)])},K=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"catalog__button"},[a("a",{staticClass:"catalog__link",attrs:{href:"product.html"}},[t._v("Browse All Product"),a("i",{staticClass:"fas fa-long-arrow-alt-right"})])])}],G={data:function(){return{items:[],url:"/catalog"}},mounted:function(){var t=this;this.get(this.url).then((function(s){t.items=s}))},methods:{get:function(t){return fetch(t).then((function(t){return t.json()}))}}},T=G,W=Object(_["a"])(T,U,K,!1,null,null,null),Y=W.exports,L=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"offer center"},[e("div",{staticClass:"offer__left"},[e("img",{attrs:{src:a("57fb"),alt:"#"}}),e("div",{staticClass:"offer__content"},[e("h2",{staticClass:"offer_title"},[t._v("30% "),e("span",{staticClass:"offer__last_word"},[t._v("OFFER")])]),e("h3",{staticClass:"offer__subtitle"},[t._v("FOR WOMEN")])])]),e("div",{staticClass:"offer__right"},[e("article",{staticClass:"offer__services"},[e("div",{staticClass:"offer__icon"},[e("img",{attrs:{src:a("6ff8"),alt:"#"}})]),e("div",{staticClass:"offer__text"},[e("div",{staticClass:"offer__sevrice_name"},[t._v("Free Delivery")]),e("div",{staticClass:"offer__service_descript"},[t._v("Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.")])])]),e("article",{staticClass:"offer__services"},[e("div",{staticClass:"offer__icon"},[e("img",{attrs:{src:a("8c50"),alt:"#"}})]),e("div",{staticClass:"offer__text"},[e("div",{staticClass:"offer__sevrice_name"},[t._v("Sales & discounts")]),e("div",{staticClass:"offer__service_descript"},[t._v("Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.")])])]),e("article",{staticClass:"offer__services"},[e("div",{staticClass:"offer__icon"},[e("img",{attrs:{src:a("8618"),alt:"#"}})]),e("div",{staticClass:"offer__text"},[e("div",{staticClass:"offer__sevrice_name"},[t._v("Quality assurance")]),e("div",{staticClass:"offer__service_descript"},[t._v("Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.")])])])])])}],J={},N=Object(_["a"])(J,L,P,!1,null,null,null),Q=N.exports,j=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"subscribe"},[e("div",{staticClass:"subscribe__inner center"},[e("div",{staticClass:"subscribe__left"},[e("img",{staticClass:"subscribe__avatar",attrs:{src:a("b1d2"),alt:"#"}}),e("div",{staticClass:"subscribe__content"},[e("div",{staticClass:"subscribe__text"},[t._v("“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”")]),e("div",{staticClass:"subscribe__author"},[e("span",[t._v("Bin Burhan")]),t._v(" "),e("br"),t._v("Dhaka, Bd")])]),e("div",{staticClass:"subscribe__slider"},[e("div",{staticClass:"subscribe__slider_element"}),e("div",{staticClass:"subscribe__slider_element active"}),e("div",{staticClass:"subscribe__slider_element"})])]),e("div",{staticClass:"subscribe__right"},[e("div",{staticClass:"subscribe__title"},[t._v("Subscribe")]),e("div",{staticClass:"subscribe__subtitle"},[t._v(" FOR OUR NEWLETTER AND PROMOTION")]),e("form",{staticClass:"subscribe__form",attrs:{action:"post"}},[e("input",{staticClass:"subscribe__input",attrs:{type:"email",name:"subscribe",placeholder:"Enter Your Email"}}),e("button",{staticClass:"subscribe__btn"},[t._v("Subscribe")])])])])])}],M={},z=Object(_["a"])(M,j,H,!1,null,null,null),X=z.exports,V=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contacts center"},[e("div",{staticClass:"contacts__item contacts__item--brand"},[e("a",{staticClass:"logo",attrs:{href:"index.html"}},[e("img",{staticClass:"logo__img",attrs:{src:a("ede7"),alt:"logo"}}),e("span",{staticClass:"logo__text"},[t._v("BRAN"),e("span",{staticClass:"logo__text--last_letter"},[t._v("D")])])]),e("div",{staticClass:"contacts__text"},[e("p",{staticClass:"contacts__paragraph"},[t._v("Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.")]),e("p",{staticClass:"contacts__paragraph"},[t._v("Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.")])])]),e("nav",{staticClass:"contacts__item"},[e("div",{staticClass:"contacts__title"},[t._v("Company")]),e("ul",{staticClass:"contacts__list"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Home")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Shop")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("About")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("How It Works")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Brows All")])])])]),e("nav",{staticClass:"contacts__item"},[e("div",{staticClass:"contacts__title"},[t._v("INFORMATION")]),e("ul",{staticClass:"contacts__list"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Tearms & Condition")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("How to Buy")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("How to Sell")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Promotion")])])])]),e("nav",{staticClass:"contacts__item"},[e("div",{staticClass:"contacts__title"},[t._v("SHOP CATEGORY")]),e("ul",{staticClass:"contacts__list"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Men")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Women")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Child")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Apparel")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Contact")])])])])])}],Z={},$=Object(_["a"])(Z,V,q,!1,null,null,null),tt=$.exports,st=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__box center"},[a("div",{staticClass:"footer__copyright"},[t._v("©2020 Brand All Rights Reserved.")]),a("div",{staticClass:"footer__social"},[a("a",{staticClass:"social__item",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{staticClass:"social__item",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{staticClass:"social__item",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-linkedin-in"})]),a("a",{staticClass:"social__item",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-pinterest-p"})]),a("a",{staticClass:"social__item",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-google-plus-g"})])])])])}],et={},it=Object(_["a"])(et,st,at,!1,null,null,null),lt=it.exports,_t=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"popup",attrs:{id:"popup"}},[a("button",{staticClass:"popup__close",attrs:{id:"close"}},[a("i",{staticClass:"fa fa-close"})]),a("div",{staticClass:"popup__wrapper"},[a("button",{staticClass:"popup__prev",attrs:{id:"prev"}},[a("i",{staticClass:"fas fa-chevron-left"})]),a("img",{staticClass:"popup__main",attrs:{src:"",alt:"#",id:"main-pic"}}),a("button",{staticClass:"popup__next",attrs:{id:"next"}},[a("i",{staticClass:"fas fa-chevron-right"})])]),a("div",{staticClass:"popup__carousel",attrs:{id:"carousel",name:"carousel"}})])}],nt={},ct=Object(_["a"])(nt,_t,rt,!1,null,null,null),ot=ct.exports,ut={data:function(){return{itemsBasket:[],url:"/basket",showBasket:!1,goodCost:0}},name:"Index",components:{Header:v,Nav:w,SectionPromo:x,SectionProducts:F,SectionCatalog:Y,SectionOffer:Q,Subscribe:X,Contacts:tt,Footer:lt,PopUp:ot},methods:{addToBasket:function(t){var s=this.itemsBasket.find((function(s){return s.productId==t.productId}));s?s.amount++:this.itemsBasket.push(Object.assign({},t,{amount:1})),this.calculateGoodsCost()},removeFromBasket:function(t){var s=this.itemsBasket.find((function(s){return s.productId==t}));s.amount>1?s.amount--:this.itemsBasket.splice(this.itemsBasket.indexOf(s),1),this.calculateGoodsCost()},_get:function(t){return fetch(t).then((function(t){return t.json()}))},calculateGoodsCost:function(){var t=this;this.goodCost=0,this.itemsBasket.forEach((function(s){t.goodCost+=s.productPrice*s.amount}))}},mounted:function(){var t=this;this._get(this.url).then((function(s){t.itemsBasket=s.content,t.calculateGoodsCost()}))}},mt=ut,Ct=Object(_["a"])(mt,u,m,!1,null,null,null),dt=Ct.exports;e["a"].use(o["a"]);var ft=[{path:"/",name:"Index",component:dt}],At=new o["a"]({mode:"history",base:"/",routes:ft}),gt=At,vt=a("2f62");e["a"].use(vt["a"]);var ht=new vt["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("4989"),a("ab8b"),a("f5fb");e["a"].config.productionTip=!1,new e["a"]({router:gt,store:ht,render:function(t){return t(c)}}).$mount("#app")},"57fb":function(t,s,a){t.exports=a.p+"img/offer_main.74c534bf.png"},"6ff8":function(t,s,a){t.exports=a.p+"img/offer_icon_1.2ee1ded5.svg"},8618:function(t,s,a){t.exports=a.p+"img/offer_icon_3.810f76b9.svg"},"8c50":function(t,s,a){t.exports=a.p+"img/offer_icon_2.2d60c273.svg"},b1d2:function(t,s,a){t.exports=a.p+"img/avatar.29f7d267.png"},c6e5:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAMCAMAAAAAs46XAAAAAXNSR0IB2cksfwAAADNQTFRFAAAA569I369Q5K9I469I5K9I5K9I5K9I469I5K9I5K9I5K9J5K9J5K9I469I5q9J5K9Ke/X5ZAAAABF0Uk5TACAQ/0DwYMCAoOBwkNCwUDAUV2ffAAAA70lEQVR4nG2RWRbDIAhFVWTQJOr+V1vEKe0pH8mVw/AA57p5t+2F4YXhr9tD3F6k7WbZmNJG4ZOYYD8E8sIIuIp7gKUk4Omi7v3IAKslA6yWCWC1FODR5RLWYMh8Cwk/ishJsfA3AhfFxAgVFavrocPwhWUj8C/GVgvcLqxwbC/s4oaRuw6SJbqGXfgM12AXeOPK7APPzEuRLBHHwEPWMyY3czNELdh6h8TeRf/V8djfc6LnPP7UiN8drYaUsW1ddVNhzY7BVcahGDgS2kFuyERZ99HLIUWeZ0+9gbdvMjm6a42mjWLKqNeo0rWT1vgAey0IXnC894EAAAAASUVORK5CYII="},cced:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAdCAYAAADLnm6HAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH5AUYDQUlIuewZQAAAiZJREFUSMe91j9oFFEQBvDfxYgEBEOwionIFQYSK1EQwVQaRbCIFkIQKzsbFS1NYZtGRNDGWGilqKBYXIwoNhYKsVAQCSqoYKEhgnD+IWrx9vBl3ax7m1y+Zmfn7e73zcybeVupVqs3sN98fMcRXNVitGFbhn8VjraaHNoxiM2RbzuOYSu6MNNKAZVqtZr29eBdYh/EtVYKaMvwvceLxB5qJTmhBFmoYQC7c95ds0AAzWB2IQETOCGUYyDKSANjOLkECZhcKIJHqCd2Vhm6l4Ac+rI2YQO1hLyGPam1DqF9V5QgXY9LiX26PefBhoDBhLAerdXxoGTUY9E3LuZtooko2h0lydLoECYsXMenPAHP8SGx87qhGRxCZ2Kf5f9tVEuuSzEPKsKEhYeYKiKgUYZNWLdIAUPoj6MvIuAe5hJ7sWU4nlyncaeogBk8jSIoi/7o/Qv4VVQAf8uwS7m+JxztFXzFeLzQjIAubClB3onDiX0Zs/Fie4EPPMYX4fA5jzdNCujGaiHt59KLRQTMYRIHkgyUyQJh402XEQCjwn/iypLkP3AmayHvMFoWLPaHYlkEbMQ+9JbkqAhH97DQSU0JGMVL3MZrjJQgvyV00k28ktrEeXugB2/NHz4zWIvfBQXsxd2U7z52FslAr38nX1dWGnPQl+HbEN/kCXiGjynfFD43IWBCaMEYtfgmT0BdSOET/BSG0XAT5IS/6RGh9t9wBafiB/4AT3BeVosWbXYAAAAASUVORK5CYII="},d681:function(t,s,a){t.exports=a.p+"img/mega_menu.3b911237.png"},ede7:function(t,s){t.exports="data:image/png;base64,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"},f5fb:function(t,s,a){}});
//# sourceMappingURL=app.e9a487ca.js.map