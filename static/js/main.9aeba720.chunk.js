(this["webpackJsonpmem-game"]=this["webpackJsonpmem-game"]||[]).push([[0],{16:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(3),a=c.n(s),r=(c(16),c(5)),i=c.n(r),o=c(8),u=c(10),j=c(2),l=c(25),b=c(0);function O(e){var t=e.sprite,c=e.name,s=e.id,a=e.saveCard,r=Object(n.useState)(!1),i=Object(j.a)(r,2),o=i[0],u=i[1];return Object(b.jsx)("div",{className:"cards",onClick:function(){return u(!0)},children:Object(b.jsx)(l.a,{in:o,timeout:200,classNames:"my-node",children:Object(b.jsxs)("div",{id:"Cards",className:"nes-pointer nes-container with-title is-centered is-rounded",onClick:function(){return a(s)},children:[Object(b.jsx)("p",{className:"title",children:c}),Object(b.jsx)("img",{className:"sprite",src:t,alt:""})]})})})}function d(e){var t=e.userScore,c=e.gameOver,s=Object(n.useState)(0),a=Object(j.a)(s,2),r=a[0],i=a[1];Object(n.useEffect)((function(){var e=parseInt(localStorage.getItem("highScore"));i(e||0),O(r)}),[]);var o=Object(n.useState)(0),u=Object(j.a)(o,2),l=u[0],O=u[1];return Object(n.useEffect)((function(){t>r&&(O(t),localStorage.setItem("highScore",t))}),[c]),Object(b.jsx)("div",{className:"ScoreBoard",children:Object(b.jsxs)("button",{type:"button",className:"nes-btn is-primary",children:[c?Object(b.jsx)("h2",{className:"gameOver",children:c?"GAME OVER":null}):Object(b.jsxs)("h2",{className:"userScore",children:["Score:",t]}),Object(b.jsxs)("h2",{children:["HighScore:",l>r?l:r||0]})]})})}function m(){return Object(b.jsxs)("div",{className:"Footer",children:[Object(b.jsx)("div",{children:"Made with "})," ",Object(b.jsx)("i",{className:"nes-icon heart"})]})}function f(e){var t=e.gameOver;return Object(b.jsxs)("header",{children:[Object(b.jsxs)("div",{className:"nes",children:[Object(b.jsx)("i",{className:"nes-ash"}),Object(b.jsx)("div",{className:"nes-balloon from-left",children:"Help me find new pokemons"})]}),Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h1",{children:"PokeCards"}),Object(b.jsx)("h6",{children:"Gotta Catch 'Em All"})]}),Object(b.jsx)("i",{className:t?"vibrate nes-pointer nes-pokeball":"nes-pokeball",onClick:function(){return window.location.reload()}})]})}c(21),c(22);var h=c.p+"static/media/pika.a937902d.gif";function p(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),r=Object(j.a)(a,2),l=r[0],p=r[1],x=Object(n.useState)([]),v=Object(j.a)(x,2),S=v[0],N=v[1],g=Object(n.useState)(-1),k=Object(j.a)(g,2),w=k[0],E=k[1],C=Object(n.useState)(!1),y=Object(j.a)(C,2),I=y[0],A=y[1],M=Object(n.useState)(!0),B=Object(j.a)(M,2),G=B[0],H=B[1],J=Object(n.useState)([]),T=Object(j.a)(J,2),F=T[0],P=T[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s((function(e){return[].concat(Object(o.a)(e),[n])}));case 7:case"end":return e.stop()}}),e)})),c=1;case 2:if(!(c<100)){e.next=7;break}return e.delegateYield(t(c),"t0",4);case 4:c+=1,e.next=2;break;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var e=setTimeout((function(){return H(!1)}),1e3);return function(){return clearTimeout(e)}}),[]),Object(n.useEffect)((function(){return P(c.slice(l,l+10))}),[c,S]);var R=function(e){S.includes(e)?A(!0):N([].concat(Object(o.a)(S),[e]))};return Object(n.useEffect)((function(){P((function(e){return e.sort((function(){return Math.random()-.5}))})),p((function(e){return e+.5})),E(I?0:function(e){return e+1})}),[I,S]),G?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("img",{src:h,alt:"happy-pikachu"})}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{gameOver:I}),Object(b.jsx)(d,{userScore:w,gameOver:I}),Object(b.jsx)("main",{className:"container",style:I?{pointerEvents:"none"}:null,children:F.map((function(e){return Object(b.jsx)(O,{id:e.id,sprite:e.sprites.front_default,name:e.forms[0].name,saveCard:R},e.id)}))}),Object(b.jsx)(m,{})]})}a.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9aeba720.chunk.js.map