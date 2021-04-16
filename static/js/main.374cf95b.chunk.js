(this["webpackJsonppokemon-store"]=this["webpackJsonppokemon-store"]||[]).push([[0],{35:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);a(35);var c=a(0),n=a.n(c),r=a(11),s=a.n(r),o=a(8),i=a(1);var d=function(){var e=n.a.useContext(S).state.cartCounter;return Object(i.jsx)("nav",{className:"navbar sticky-top navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:"Pokemon Store"}),Object(i.jsx)("div",{className:"d-flex",children:e?Object(i.jsxs)("span",{className:"cart-items-counter badge badge-warning",children:["Cart items ",Object(i.jsx)("span",{id:"cart-counter-badge","data-testid":"cart-counter",className:"cart-number-counter badge badge-pill badge-info",children:e})]}):Object(i.jsxs)("span",{className:"cart-items-counter badge badge-danger",children:["Cart items ",Object(i.jsx)("span",{id:"cart-counter-badge","data-testid":"cart-counter",className:"cart-number-counter badge badge-pill badge-dark",children:e})]})})]})})},l=a(12),j=a.n(l),u=a(16);var b=function(e){var t=e.type;return Object(i.jsx)("span",{"data-testid":"type",className:"badge bg-".concat(t," type mb-1"),children:t})};var m=function(e){var t=e.url,a=n.a.useState(null),c=Object(o.a)(a,2),r=c[0],s=c[1],d=n.a.useContext(S).dispatch;function l(e){var t=e;return t.types=function(e){var t=[];return e.forEach((function(e){t.push(e.type.name)})),t}(t.types),t}return n.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,s(l(c));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r?Object(i.jsx)("div",{className:"col mb-3 pokemon-card",children:Object(i.jsxs)("div",{className:"card h-100 text-center",children:[Object(i.jsx)("img",{src:"".concat("https://pokeres.bastionbot.org/images/pokemon/").concat(r.id,".png"),alt:"Pokemon cover",className:"card-img-top"}),Object(i.jsxs)("div",{className:"card-body text-center pb-0 pt-2",children:[Object(i.jsx)("h6",{className:"card-title",children:r.name}),Object(i.jsx)("div",{className:"card-text",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"text-muted",children:"Price:"})," ",Object(i.jsxs)("span",{className:"badge badge-pill badge-info",children:["$",r.id]})]})})]}),Object(i.jsx)("div",{className:"d-flex text-center types",children:r.types.map((function(e,t){return Object(i.jsx)(b,{type:e},t)}))}),Object(i.jsx)("button",{className:"btn btn-dark btn-sm mt-2",onClick:function(){var e={name:r.name,id:"".concat(Date.now(),"-").concat(r.id),price:r.id};d({type:"ADD_TO_CART",payload:{cartItem:e}})},children:"Add to cart"})]})}):Object(i.jsx)("p",{children:"...loading"})},p="https://pokeapi.co/api/v2/pokemon/",O="?limit=130";var x=function(){var e=n.a.useState(null),t=Object(o.a)(e,2),a=t[0],c=t[1];return n.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p).concat(O));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a?Object(i.jsx)("div",{className:"row",children:a.map((function(e){return Object(i.jsx)(m,{url:e.url},"".concat(Date.now,"-").concat(e.name))}))}):Object(i.jsx)("p",{children:"loading..."})},h=a(53),v=a(54),f=a(50);var y=function(e){var t=e.pokemon,a=t.id,c=t.name,r=n.a.useContext(S).dispatch;return Object(i.jsxs)(v.a.Item,{className:"d-flex cart-item",children:[Object(i.jsx)("span",{children:c}),Object(i.jsx)(f.a,{variant:"danger",onClick:function(){r({type:"REMOVE_FROM_CART",payload:{id:a}})},className:"btn-sm",children:"Remove"})]})},k=a(29),N=a.n(k);var g=function(){var e=n.a.useContext(S),t=e.state,a=t.cartTotal,c=t.cartPokemons,r=t.cartCounter,s=e.dispatch;function o(e,t){s({type:"PURCHASE_POKEMONS"})}return Object(i.jsxs)(h.a,{children:[Object(i.jsx)(h.a.Header,{children:"My shoping cart"}),Object(i.jsxs)(h.a.Body,{children:[Object(i.jsx)(h.a.Title,{children:"Pokemons to buy"}),Object(i.jsx)(v.a,{className:"cart-list",children:c.map((function(e,t){return Object(i.jsx)(y,{pokemon:e},"".concat(Date.now(),"-").concat(t))}))}),Object(i.jsxs)("p",{className:"mt-3",children:[Object(i.jsx)("span",{className:"text-muted",children:"Total: "}),"$",a]}),Object(i.jsxs)("p",{className:"mt-3",children:[Object(i.jsx)("span",{"data-testid":"quantity",className:"text-muted",children:"Quantity: "}),r]}),r?Object(i.jsx)(N.a,{stripeKey:"pk_test_51IgPFIDe0R2uWmYJNoX8Y6RMR5PcSMJDV2pGvsK4oaLBh9Qvhg8ilB5bCbZFuU7lZzQGNOa7LQwc0FJ2jx6NIX6P00WaulSfPX",token:o}):Object(i.jsx)(N.a,{disabled:!0,stripeKey:"pk_test_51IgPFIDe0R2uWmYJNoX8Y6RMR5PcSMJDV2pGvsK4oaLBh9Qvhg8ilB5bCbZFuU7lZzQGNOa7LQwc0FJ2jx6NIX6P00WaulSfPX",token:o})]})]})};var P=function(e){var t=e.pokemon,a=t.id,c=t.name,r=n.a.useContext(S).dispatch;return Object(i.jsxs)(v.a.Item,{className:"d-flex cart-item",children:[Object(i.jsx)("span",{children:c}),Object(i.jsx)(f.a,{variant:"danger",onClick:function(){r({type:"REMOVE_FROM_MY_POKEMONS",payload:{id:a}})},className:"btn-sm",children:"Remove"})]})};var C=function(){var e=n.a.useContext(S).state.myPokemons;return Object(i.jsxs)(h.a,{children:[Object(i.jsx)(h.a.Header,{children:"Pokemons"}),Object(i.jsxs)(h.a.Body,{children:[Object(i.jsx)(h.a.Title,{children:"My purchased pokemons"}),e.length?Object(i.jsx)(v.a,{children:e.map((function(e,t){return Object(i.jsx)(P,{pokemon:e},"".concat(Date.now(),"-").concat(t))}))}):Object(i.jsx)("p",{"data-testid":"empty-list",children:"You haven't bought any pokemon yet"})]})]})},R=a(52),M=a(51);var _=function(){var e=n.a.useState("pokemon-list"),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(R.a,{id:"controlled-tab-example",activeKey:a,onSelect:function(e){return c(e)},className:"mb-3",children:[Object(i.jsx)(M.a,{eventKey:"pokemon-list",title:"Pokemon List",children:Object(i.jsx)(x,{})}),Object(i.jsx)(M.a,{eventKey:"my-pokemons",title:"My pokemons",children:Object(i.jsx)(C,{})}),Object(i.jsx)(M.a,{eventKey:"cart",title:"Cart",children:Object(i.jsx)(g,{})})]})})},E=a(26),T=a(10);var w=function(e,t){switch(t.type){case"ADD_TO_CART":var a=t.payload.cartItem,c=t.payload.cartItem.price;return Object(T.a)(Object(T.a)({},e),{},{cartTotal:e.cartTotal+c,cartCounter:e.cartCounter+1,cartPokemons:[a].concat(Object(E.a)(e.cartPokemons))});case"REMOVE_FROM_CART":var n=t.payload.id,r=e.cartPokemons.find((function(e){return e.id==n})).price;return Object(T.a)(Object(T.a)({},e),{},{cartTotal:e.cartTotal-r,cartCounter:e.cartCounter-1,cartPokemons:e.cartPokemons.filter((function(e){return e.id!==n}))});case"REMOVE_FROM_MY_POKEMONS":var s=t.payload.id;return Object(T.a)(Object(T.a)({},e),{},{myPokemons:e.myPokemons.filter((function(e){return e.id!==s}))});case"PURCHASE_POKEMONS":return{cartTotal:0,cartCounter:0,myPokemons:[].concat(Object(E.a)(e.cartPokemons),Object(E.a)(e.myPokemons)),cartPokemons:[]};default:return e}},S=n.a.createContext({cartTotal:0,cartCounter:0,myPokemons:[],cartPokemons:[]});var D=function(){var e=n.a.useContext(S),t=n.a.useReducer(w,e),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(i.jsxs)(S.Provider,{value:{state:c,dispatch:r},children:[Object(i.jsx)(d,{}),Object(i.jsx)(_,{})]})},I=(a(47),document.getElementById("root"));s.a.render(Object(i.jsx)(D,{}),I)}},[[48,1,2]]]);
//# sourceMappingURL=main.374cf95b.chunk.js.map