(this["webpackJsonpmem-game"]=this["webpackJsonpmem-game"]||[]).push([[0],{19:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(3),s=c.n(a),r=c(5),i=c.n(r),o=c(8),u=c(10),j=c(2),l=c(0);function b(e){var t=e.sprite,c=e.name,n=e.id,a=e.saveCard,s=e.gameOver;return Object(l.jsxs)("div",{style:s?{pointerEvents:"none"}:null,id:"Cards",className:"nes-pointer nes-container with-title is-centered is-rounded",onClick:function(){return a(n)},children:[Object(l.jsx)("p",{className:"title",children:c}),Object(l.jsx)("img",{className:"sprite",src:t,alt:""})]})}function O(e){var t=e.userScore,c=e.gameOver,a=Object(n.useState)(0),s=Object(j.a)(a,2),r=s[0],i=s[1];Object(n.useEffect)((function(){var e=parseInt(localStorage.getItem("highScore"));i(e||0),O(r)}),[]);var o=Object(n.useState)(0),u=Object(j.a)(o,2),b=u[0],O=u[1];return Object(n.useEffect)((function(){t>r&&(O(t),localStorage.setItem("highScore",t))}),[c]),Object(l.jsx)("div",{className:"ScoreBoard",children:Object(l.jsxs)("button",{type:"button",className:"nes-btn is-primary",children:[c?Object(l.jsx)("h2",{className:"gameOver",children:c?"GAME OVER":null}):Object(l.jsxs)("h2",{className:"userScore",children:["Score:",t]}),Object(l.jsxs)("h2",{children:["HighScore:",b>r?b:r||0]})]})})}function d(){return Object(l.jsxs)("div",{className:"Footer",children:[Object(l.jsx)("div",{children:"Made with "})," ",Object(l.jsx)("i",{className:"nes-icon heart"})]})}function m(e){var t=e.gameOver;return Object(l.jsxs)("header",{children:[Object(l.jsxs)("div",{className:"nes",children:[Object(l.jsx)("i",{className:"nes-ash"}),Object(l.jsx)("div",{className:"nes-balloon from-left",children:"Help me find new pokemons"})]}),Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h1",{children:"PokeCards"}),Object(l.jsx)("h6",{children:"Gotta Catch 'Em All"})]}),Object(l.jsx)("i",{className:t?"vibrate nes-pointer nes-pokeball":"nes-pokeball",onClick:function(){return window.location.reload()}})]})}c(18),c(19);var f=c.p+"static/media/pika.a937902d.gif",h=c(24);function p(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),r=Object(j.a)(s,2),p=r[0],v=r[1],x=Object(n.useState)([]),g=Object(j.a)(x,2),S=g[0],N=g[1],k=Object(n.useState)(-1),w=Object(j.a)(k,2),E=w[0],y=w[1],C=Object(n.useState)(!1),I=Object(j.a)(C,2),A=I[0],M=I[1],B=Object(n.useState)([]),G=Object(j.a)(B,2),H=G[0],J=G[1],T=Object(n.useState)(!0),F=Object(j.a)(T,2),P=F[0],R=F[1],V=Object(n.useState)(!1),Y=Object(j.a)(V,2),_=Y[0],q=Y[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,a((function(e){return[].concat(Object(o.a)(e),[n])}));case 7:case"end":return e.stop()}}),e)})),c=1;case 2:if(!(c<100)){e.next=7;break}return e.delegateYield(t(c),"t0",4);case 4:c+=1,e.next=2;break;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){return J(c.slice(p,p+10))}),[c,S]),Object(n.useEffect)((function(){var e=setTimeout((function(){return R(!1)}),1500);return function(){return clearTimeout(e)}}),[]);var z=function(e){S.includes(e)?M(!0):N([].concat(Object(o.a)(S),[e]))};return Object(n.useEffect)((function(){v((function(e){return e+1})),J((function(e){return e.sort((function(){return Math.random()-.5}))})),q(!_),y(A?0:function(e){return e+1})}),[S]),P?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("img",{src:f,alt:"happy-pikachu"})}):Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{gameOver:A}),Object(l.jsx)(O,{userScore:E,gameOver:A}),Object(l.jsx)(h.a,{in:_,timeout:100,classNames:"my-node",children:Object(l.jsx)("main",{className:"container",children:H.map((function(e){return Object(l.jsx)(b,{id:e.id,sprite:e.sprites.front_default,name:e.forms[0].name,saveCard:z,gameOver:A},e.id)}))})}),Object(l.jsx)(d,{})]})}s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8b82ab8a.chunk.js.map