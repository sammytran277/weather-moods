(this["webpackJsonpweather-moods"]=this["webpackJsonpweather-moods"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/clear.bea32658.svg"},40:function(e,t,a){e.exports=a.p+"static/media/logo.e5f2b478.svg"},46:function(e,t,a){e.exports=a.p+"static/media/clouds.d0001cd6.svg"},47:function(e,t,a){e.exports=a.p+"static/media/rain.5cde9c93.svg"},48:function(e,t,a){e.exports=a.p+"static/media/snow.546540b4.svg"},52:function(e,t,a){e.exports=a(75)},57:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c);a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(31),s=a.n(l),i=a(39),m=a(14),u=a(80),h=(a(59),a(60),a(83)),d=a(82),E=a(40),p=a.n(E),f=function(){return r.a.createElement(h.a,{className:"custom-header",expand:"lg"},r.a.createElement(h.a.Brand,{href:"/weather-moods/"},r.a.createElement("img",{src:p.a,alt:"Weather Moods logo",width:"40",height:"40"}),r.a.createElement(h.a.Text,{className:"text-white ml-3"},"Weather Moods")),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(d.a.Link,{className:"text-white",href:"/weather-moods/"},"Home"),r.a.createElement(d.a.Link,{className:"text-white",href:"/weather-moods/about"},"About"),r.a.createElement(d.a.Link,{className:"text-white",href:"/weather-moods/contact"},"Contact"))))},w=(a(64),a(81)),b=a(77),g=a(15),v=a(25),y=["All Genres","Hip-Hop","Pop","Techno","R&B","Punk","Country","Indie","Latin","Jazz","Christian"],N=function(e){var t=e.setGenre,a=e.setUserInput,n=e.handleSubmit;return r.a.createElement("div",{className:"search-container"},r.a.createElement("h1",{className:"text-white mb-5 text-center"},"Need music based on the weather?"),r.a.createElement(w.a,{onSubmit:function(e){return n(e)}},r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{className:"text-white"},"1. Select your music genre"),r.a.createElement(w.a.Control,{as:"select",onChange:function(e){return t(e.target.value)}},y.map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{className:"text-white"},"2. Enter your city"),r.a.createElement(b.a,{onChange:function(e){return a(e.target.value)}},r.a.createElement(w.a.Control,{type:"text",placeholder:"City"}),r.a.createElement(b.a.Append,{onClick:function(e){return n(e)},className:"magnifying-glass-container"},r.a.createElement(b.a.Text,null,r.a.createElement(g.a,{icon:v.b})))))))},x=(a(68),a(84)),C=a(85),k=a(79),j=(a(69),a(78)),O=a(33),S=a.n(O),T=a(46),G=a.n(T),L=a(47),A=a.n(L),B=a(48),F=a.n(B),M=function(e){var t=e.data,a=e.unit,n=function(e){return"F"===a?Math.round(e):Math.round(5*(e-32)/9)};return r.a.createElement(C.a,{className:"col-md-1 col-sm-1"},r.a.createElement(C.a.Title,{className:"day"},function(){switch(new Date(1e3*t.dt).getDay()){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat";default:return"Error"}}()),r.a.createElement("img",{className:"weather-icon",src:function(){switch(t.weather[0].main.toLowerCase()){case"clear":return S.a;case"clouds":return G.a;case"rain":return A.a;case"snow":return F.a;default:return S.a}}(),alt:t.weather[0].main.toLowerCase(),height:"50",width:"50"}),r.a.createElement("div",{className:"temp-container"},r.a.createElement("span",{className:"temp-high"},n(t.temp.max)," \xb0",a),r.a.createElement("span",{className:"temp-low ml-2"},n(t.temp.min)," \xb0",a)),r.a.createElement(x.a.Toggle,{as:j.a,variant:"link",eventKey:"0"},r.a.createElement(g.a,{className:"arrow-down",icon:v.a})))},H=function(e){var t=Object(n.useState)("F"),a=Object(m.a)(t,2),c=a[0],o=a[1];return r.a.createElement(x.a,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Header,null,r.a.createElement("h2",{className:"mt-3 text-center"},"Seven day weather forecast for",r.a.createElement("span",{className:"city"}," "+e.city+", ")," in",r.a.createElement("span",{className:"F"===c?"":"inactive",style:{cursor:"pointer"},onClick:function(){return o("F")}}," \xb0F ")," |",r.a.createElement("span",{className:"C"===c?" ":"inactive",style:{cursor:"pointer"},onClick:function(){return o("C")}}," \xb0C"),":"),r.a.createElement(k.a,{className:"weather-container justify-content-center"},e.data.daily.slice(0,7).map((function(e){return r.a.createElement(M,{key:e.dt,data:e,unit:c})})))),r.a.createElement(x.a.Collapse,{eventKey:"0"},r.a.createElement(C.a.Body,null,"Hello! I'm the body"))))},I=(a(70),a(49)),W=function(){return r.a.createElement(h.a,{className:"custom-footer justify-content-center",expand:"lg",sticky:"bottom"},r.a.createElement(h.a.Text,{className:"text-white"},"Made with ",r.a.createElement("span",{className:"heart"},"\u2665")," by Sammy Tran",r.a.createElement("a",{href:"https://github.com/sammytran277/weather-moods",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{className:"ml-2",icon:I.a,color:"white"}))))},D=function(){var e=Object(n.useState)("All Genres"),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),h=l[0],d=l[1],E=Object(n.useState)(""),p=Object(m.a)(E,2),w=p[0],b=p[1],g=Object(n.useState)(null),v=Object(m.a)(g,2),y=v[0],x=v[1],C=Object(n.useState)(!1),k=Object(m.a)(C,2),j=k[0],O=k[1],S=function(e,t){""!==e&&""!==t&&T(t)},T=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),a="https://weather-moods-api.herokuapp.com/api/weather/".concat(t),e.next=4,fetch(a).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}));case 4:n=e.sent,console.log(n),x(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(N,{setGenre:c,setUserInput:b,handleSubmit:function(e){e.preventDefault(),d(w),S(a,w)}}),null!==y?r.a.createElement(H,{city:h,data:y}):j?r.a.createElement("div",{className:"loading"},"Getting your weather data...",r.a.createElement(u.a,{className:"ml-3 loading-spinner",animation:"border"})):r.a.createElement("div",{className:"loading"}),r.a.createElement(W,null))},J=(a(71),function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("h1",null,"ABOUT PAGE"),r.a.createElement(W,null))}),P=(a(72),function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("h1",null,"CONTACT"),r.a.createElement(W,null))}),U=a(50),z=a(6);o.a.render(r.a.createElement(U.a,{basename:"/weather-moods"},r.a.createElement(z.a,{exact:!0,path:"/",component:D}),r.a.createElement(z.a,{path:"/about",component:J}),r.a.createElement(z.a,{path:"/contact",component:P})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.9ee005ca.chunk.js.map