(this["webpackJsonpfood-racipe"]=this["webpackJsonpfood-racipe"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),a=c(5),r=c.n(a),l=(c(12),c(4)),o=c.n(l),d=c(6),u=c(2),j=(c(14),function(e){var t=e.title,c=e.imgSrc,s=e.calories,i=e.ingredients;return Object(n.jsxs)("div",{className:"card mt-5",style:{width:"18rem"},children:[Object(n.jsx)("img",{src:c,className:"card-img-top",alt:c}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:t}),Object(n.jsx)("p",{className:"card-text",children:Math.round(s)})]}),Object(n.jsx)("ul",{className:"list-group list-group-flush",children:i.map((function(e){return Object(n.jsx)("li",{className:"list-group-item",children:e},e)}))})]})}),b=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(""),r=Object(u.a)(a,2),l=r[0],b=r[1],p=Object(s.useState)("chicken"),h=Object(u.a)(p,2),m=h[0],f=h[1];Object(s.useEffect)((function(){x(),b("")}),[m]);var x=function(){var e=Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("920ddb5b","&app_key=").concat("d8990b5525b40092edb4c924cb850f76"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"main",children:Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsx)("h1",{className:"text-center text-white",children:"Recipes App"}),Object(n.jsx)("div",{class:"d-flex justify-content-center",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(l)},children:[Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsx)("input",{style:{width:"500px"},type:"text",className:"form-control",placeholder:"Search Recipe",value:l,onChange:function(e){b(e.target.value)}})}),Object(n.jsx)("div",{class:"d-flex justify-content-center",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})}),Object(n.jsx)("div",{className:"d-flex justify-content-around flex-wrap",children:c.map((function(e){return Object(n.jsx)(j,{title:e.recipe.label,imgSrc:e.recipe.image,calories:e.recipe.calories,ingredients:e.recipe.ingredientLines},e.recipe.label)}))})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.61b5e43a.chunk.js.map