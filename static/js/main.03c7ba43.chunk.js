(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),i=(t(61),t(47)),s=t(3),m=(t(62),t(63),t(48)),o=t.n(m),u=t(49),d=t.n(u),p=t(12),E=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,c=e.children;return r.a.createElement(E.Provider,{value:Object(n.useReducer)(a,t)},c)},g=function(){return Object(n.useContext)(E)},h=t(32),v=t.n(h),b=(v.a.initializeApp({apiKey:"AIzaSyBQ0Nhk2rwWwuO0MDRtTE1D5wRjdxSZasg",authDomain:"bharath-f0aed.firebaseapp.com",databaseURL:"https://bharath-f0aed.firebaseio.com",projectId:"bharath-f0aed",storageBucket:"bharath-f0aed.appspot.com",messagingSenderId:"1031495910458",appId:"1:1031495910458:web:1b0c11770b3db84ad12103",measurementId:"G-RCG82QGEXZ"}).firestore(),v.a.auth());var f=function(){var e=g(),a=Object(s.a)(e,2),t=a[0],n=t.basket,c=t.user;return a[1],r.a.createElement("div",{className:"header"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"header__logo",alt:"",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{className:"header__searchInput",type:"text",placeholder:"Search..."}),r.a.createElement(o.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(p.b,{to:!c&&"/login"},r.a.createElement("div",{onClick:function(e){c&&b.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",c?c.email:"Guest"),r.a.createElement("span",{className:"header__optionLineTwo"},c?"Sign Out":"Sign In"," "))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"}," & Orders")),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),r.a.createElement(p.b,{to:"/checkout"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(d.a,null),r.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))},N=(t(79),t(80),t(50)),O=t.n(N);var S=function(e){var a=e.id,t=e.title,n=e.price,c=e.image,l=e.rating,i=g(),m=Object(s.a)(i,2),o=(m[0].basket,m[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,t," "),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,n," ")),r.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,a){return r.a.createElement("p",null,r.a.createElement(O.a,null)," ")})))),r.a.createElement("img",{alt:"",src:c}),r.a.createElement("button",{onClick:function(e){o({type:"ADD_TO_BASKET",item:{id:a,title:t,price:n,image:c,rating:l}})}},"Add to Cart"))};var k=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("img",{className:"home__image",alt:"",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"}),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"123454321",title:"The lean startup: How constant Innovation Creates Radically Successful Businesss Paperback",rating:5,price:19.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}),r.a.createElement(S,{id:"123454321332",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",rating:4,price:239,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"1234563562",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",rating:3,price:98.99,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),r.a.createElement(S,{id:"123454321321211",title:"Amazon Echo (3rd generation0 | Start speaker with Alexa, Charcoal Fabric",rating:5,price:98.99,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),r.a.createElement(S,{id:"123454777332",title:"New Apple ipad Pro (12-inch, Wi-Fi, 128GB) - Silver (4th Generation)",rating:4,price:598.99,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"1232355454321332",title:"Samsung LC49RSSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WOHQ 5120 x 14440",rating:4,price:1094.98,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"}))))},j=t(4),y=(t(81),t(82),t(30)),C=t.n(y),w=t(36),A=t(20),B=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},x=function(e,a){switch(a.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(w.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(w.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:n});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:a.user});default:return e}};var P=function(){var e=Object(j.f)(),a=g(),t=Object(s.a)(a,2),n=t[0].basket;return t[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(C.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",null===n||void 0===n?void 0:n.length," items): ",r.a.createElement("strong",null,e," ")),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:B(n),displayType:"text",thousandSeperator:!0,prefix:"$"}),r.a.createElement("button",{onClick:function(a){return e.push("/payment")}},"Proceed to Checkout"))},T=(t(84),t(51)),I=t.n(T);var L=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,l=e.rating,i=g(),m=Object(s.a)(i,2),o=(m[0].basket,m[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",alt:"",src:n}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},t," "),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c," ")),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,a){return r.a.createElement("p",null,r.a.createElement(I.a,null)," ")}))),r.a.createElement("button",{onClick:function(){o({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Cart")))},z=t(52),R=Object(n.forwardRef)((function(e,a){var t=g(),n=Object(s.a)(t,2),c=n[0],l=c.basket,i=c.user;n[1];return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{alt:"",className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42392668_.jpg"}),r.a.createElement("div",{ref:a},r.a.createElement("h3",null,"Hello ",null===i||void 0===i?void 0:i.email," "),r.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),l.map((function(e){return r.a.createElement(z.a,null,r.a.createElement(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating}))})))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(P,null)))}));t(85);var G=function(){var e=Object(j.f)(),a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),o=m[0],u=m[1];return r.a.createElement("div",{className:"login"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"login__logo",alt:"login-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",null,r.a.createElement("h5",null,"Email:"),r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"email"}),r.a.createElement("h5",null,"Password:"),r.a.createElement("input",{type:"password",value:o,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{onClick:function(a){a.preventDefault(),b.signInWithEmailAndPassword(c,o).then((function(a){a&&e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton"},"Sign In")),r.a.createElement("p",null,"By signing you agree to ",r.a.createElement("strong",null,"Amazon-Bharath")," conditions of use & sale . Please see our privacy Notice, our cookies Notice and our Interest-Based Ads Notice"),r.a.createElement("button",{onClick:function(a){a.preventDefault(),b.createUserWithEmailAndPassword(c,o).then((function(a){a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account"," ")))},D=t(24),U=t.n(D),M=t(35),K=(t(87),t(19)),W=t(53),X=t.n(W).a.create({baseURL:"..."});var H=function(){var e=Object(j.f)(),a=g(),t=Object(s.a)(a,2),c=t[0],l=c.basket,i=c.user,m=(t[1],Object(K.useStripe)()),o=Object(K.useElements)(),u=Object(n.useState)(!1),d=Object(s.a)(u,2),E=d[0],_=d[1],h=Object(n.useState)(""),v=Object(s.a)(h,2),b=v[0],f=v[1],N=Object(n.useState)(null),O=Object(s.a)(N,2),S=O[0],k=O[1],y=Object(n.useState)(!0),w=Object(s.a)(y,2),A=w[0],x=w[1],P=Object(n.useState)(!0),T=Object(s.a)(P,2),I=T[0],z=T[1],R=function(){var e=Object(M.a)(U.a.mark((function e(a){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),f(!0);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(M.a)(U.a.mark((function e(){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X({method:"post",url:"/payments/create?total=".concat(100*B(l))});case 2:a=e.sent,z(a.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout (",r.a.createElement(p.b,{to:"/checkout"},null===l||void 0===l?void 0:l.length," items "),")"),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery address : ")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,null===i||void 0===i?void 0:i.email," "),r.a.createElement("p",null,"123 Silk Board"),r.a.createElement("p",null,"Bangalore, India"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review items and delivery!!")),r.a.createElement("div",{className:"payment__items"},l.map((function(e){return r.a.createElement(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:R},r.a.createElement(K.CardElement,{onChange:function(a){x(a.empty),k(a.error?a.error.message:"");m.confirmCardPayment(I,{payment_method:{card:o.getElement(K.CardElement)}}).then((function(a){a.response;_(!0),k(null),f(!1),e.replace("/orders")}))}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement(C.a,{renderText:function(e){return r.a.createElement("h3",null,"Order Total :",e," ")},decimalScale:2,value:B(l),displayType:"text",thousandSeperator:!0,prefix:"$"}),r.a.createElement("button",{disabled:b||A||E},r.a.createElement("span",null,b?r.a.createElement("p",null,"Processing"):"Buy Now"," "))),S&&r.a.createElement("div",null,S," "))))))},F=t(54),Q=Object(F.a)("pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL");var $=function(){var e=g(),a=Object(s.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/login"},r.a.createElement(G,null)),r.a.createElement(j.a,{path:"/payment"},r.a.createElement(f,null),r.a.createElement(K.Elements,{stripe:Q},r.a.createElement(H,null))),r.a.createElement(j.a,{path:"/checkout"},r.a.createElement(f,null),r.a.createElement(R,null)),r.a.createElement(j.a,{path:"/"},r.a.createElement(f,null),r.a.createElement(k,null)))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,{initialState:{basket:[],user:null},reducer:x},r.a.createElement($,null))),document.getElementById("root"))},56:function(e,a,t){e.exports=t(105)},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},87:function(e,a,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.03c7ba43.chunk.js.map