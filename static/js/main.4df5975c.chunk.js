(this.webpackJsonpphotodiary=this.webpackJsonpphotodiary||[]).push([[0],{26:function(e,a,t){e.exports=t(46)},31:function(e,a,t){},32:function(e){e.exports=JSON.parse("{}")},33:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){e.exports=t.p+"static/media/logo.3091d205.png"},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),o=t.n(l),c=(t(31),t(11)),i=t(4),m=t(12),s=t(13),u=t(16),E=t(15),d=(t(32),t(33),t(23)),p=(t(34),t(35),function(e){var a={duration:3e3,transitionDuration:1700,prevArrow:r.a.createElement("span",null),nextArrow:r.a.createElement("span",null)};return r.a.createElement("div",{className:"slide-container"},r.a.createElement("div",{id:"navbar-content"},r.a.createElement(d.Fade,a,["bg1","bg2","bg3","bg4"].map((function(e){return r.a.createElement("div",{className:"each-fade bg-image "+e},r.a.createElement("nav",{id:"navbar"},r.a.createElement("a",{href:"/",id:"homeLink"},r.a.createElement("img",{id:"logo",src:t(36),alt:"logo"})),r.a.createElement("div",{id:"menu"},r.a.createElement(c.b,{to:"/#/o-mnie"},"O MNIE"),r.a.createElement(c.b,{to:"/#/oferta"},"OFERTA"),r.a.createElement(c.b,{to:"/#/kontakt"},"KONTAKT"))))})))))}),f=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{id:"content"},"Home"))}}]),t}(r.a.Component),h=function(e){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{id:"content"},"About"))},v=function(e){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{id:"content"},"Offer"))},b=t(14),g=t(47),k=t(48),w=t(49),y=t(50),O=t(51),j=t(52),N=(t(42),function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).submitForm=n.submitForm.bind(Object(b.a)(n)),n.state={status:""},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state.status;return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{id:"content"},r.a.createElement(g.a,null,r.a.createElement(k.a,null,r.a.createElement("h1",null,"Kontakt do mnie"),r.a.createElement("a",{href:"mailto:anna.nogalska@interia.eu",className:"a-link"},r.a.createElement("i",{class:"icon fas fa-envelope"}),r.a.createElement("p",null,"anna.nogalska@interia.eu")),r.a.createElement("i",{class:"icon fas fa-phone"}),r.a.createElement("p",null,"123 456 789"),r.a.createElement("a",{href:"https://www.instagram.com/annanogalska.photodiary/",className:"a-link"},r.a.createElement("i",{class:"icon fab fa-instagram",id:"instagram-icon"}),r.a.createElement("p",null,"@annanogalska.photodiary")),r.a.createElement("a",{href:"https://www.facebook.com/annanogalska.photodiary/",className:"a-link"},r.a.createElement("i",{class:"icon fab fa-facebook"}),r.a.createElement("p",null,"fb.com/annanogalska.photodiary")),r.a.createElement("div",{className:"separator"},r.a.createElement("hr",null))),r.a.createElement(k.a,{md:"6",xs:"12"},r.a.createElement("h3",null,"Napisz do mnie"),r.a.createElement(w.a,{onSubmit:this.submitForm,action:"https://formspree.io/xvowddrj",method:"POST"},r.a.createElement(y.a,null,"Imi\u0119 i Nazwisko:"),r.a.createElement(O.a,{type:"text",name:"name"}),r.a.createElement(y.a,null,"Email:"),r.a.createElement(O.a,{type:"email",name:"email"}),r.a.createElement(y.a,null,"Wiadomo\u015b\u0107:"),r.a.createElement(O.a,{type:"textarea",name:"message",rows:"4",style:{resize:"none"}}),r.a.createElement("div",{className:"buttonArea"},"SUCCESS"===e?r.a.createElement("p",null,"Dzi\u0119kuj\u0119 za wiadomo\u015b\u0107!"):r.a.createElement(j.a,null,"Wy\u015blij"),"ERROR"===e&&r.a.createElement("p",null,"Wyst\u0105pi\u0142 b\u0142\u0105d - spr\xf3buj ponownie p\xf3\u017aniej.")))))))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),r=new XMLHttpRequest;r.open(t.method,t.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},r.send(n)}}]),t}(r.a.Component));t(43),t(44),t(45);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{basename:"/"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:f}),r.a.createElement(i.a,{path:"/o-mnie",exact:!0,component:h}),r.a.createElement(i.a,{path:"/oferta",component:v}),r.a.createElement(i.a,{path:"/kontakt",component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.4df5975c.chunk.js.map