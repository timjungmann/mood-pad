(this["webpackJsonplocal-blog-react"]=this["webpackJsonplocal-blog-react"]||[]).push([[0],{16:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(10),a=n.n(s),i=(n(16),n(2)),r=Object(c.createContext)(),l=Object(c.createContext)(),o=Object(c.createContext)(),j=n(3),d=n(7),u=n(0);function b(){var e=Object(c.useContext)(r),t=e.posts,n=e.setPosts,s=Object(c.useContext)(o),a=(s.show,s.setShow),l=s.setEdit,j=Object(c.useState)(""),d=Object(i.a)(j,2),b=d[0],O=d[1];return t.map((function(e){return Object(u.jsx)("div",{className:"Post-container",children:Object(u.jsxs)("div",{className:"Post",style:{backgroundColor:e.color},children:[Object(u.jsxs)("div",{onClick:function(){return a(e)},className:"post-header",children:[Object(u.jsx)("small",{children:e.time}),Object(u.jsx)("h4",{children:e.title})]}),Object(u.jsx)("div",{className:"post-body",children:Object(u.jsx)("p",{children:e.content})}),Object(u.jsxs)("div",{className:"post-footer",children:[Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)("div",{onClick:function(){return l(e)},children:"\u270f\ufe0f"}),Object(u.jsx)("div",{onClick:function(){return t=e.id,void O(b==t?"":t);var t},children:"\u274c"}),b==e.id?Object(u.jsxs)("p",{className:"sure",children:["delete? ",Object(u.jsx)("span",{onClick:function(){return function(e){var c=t.filter((function(t){return t.id!=e}));n(c)}(e.id)},className:"yes",children:"y"})," / ",Object(u.jsx)("span",{onClick:function(){return O("")},className:"no",children:"n"})]}):null]}),""!=e.updated?Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["updated ",e.updated]})}):null]})]})},e.id)}))}var O=n(9),h=n.n(O);function x(){return Object(u.jsxs)("h1",{children:["It's ",Object(u.jsx)(h.a,{format:"HH:mm:ss",ticking:!0})," right now, what are you up to?"]})}var m=n(4),v=n.n(m);function f(){return v()().format("MMMM Do YYYY [at] HH:mm:ss")}function p(e){var t=e.setAll,n=Object(c.useContext)(r),s=n.posts,a=n.setPosts,o=Object(c.useContext)(l),b=o.color,O=o.setColor,h=Object(c.useState)(""),x=Object(i.a)(h,2),m=x[0],v=x[1],p=Object(c.useState)(""),C=Object(i.a)(p,2),g=C[0],N=C[1];return Object(u.jsxs)("div",{className:"Create",children:[Object(u.jsxs)("div",{className:"color",children:[Object(u.jsx)("input",{type:"range",min:"100",max:"255",value:b.r,className:"slider",id:"red",onChange:function(e){return O(Object(j.a)(Object(j.a)({},b),{},{r:e.target.value}))}}),Object(u.jsx)("input",{type:"range",min:"100",max:"255",value:b.g,className:"slider",id:"green",onChange:function(e){return O(Object(j.a)(Object(j.a)({},b),{},{g:e.target.value}))}}),Object(u.jsx)("input",{type:"range",min:"100",max:"255",value:b.b,className:"slider",id:"blue",onChange:function(e){return O(Object(j.a)(Object(j.a)({},b),{},{b:e.target.value}))}})]}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a([{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),title:m,content:g,time:""+f(),updated:"",color:"rgba(".concat(b.r,", ").concat(b.g,", ").concat(b.b,", .8)")}].concat(Object(d.a)(s))),O({r:255,g:255,b:255}),t(!0),v(""),N("")},autoComplete:"off",children:[Object(u.jsx)("div",{className:"title",children:"Title"}),Object(u.jsx)("input",{type:"text",name:"title",onChange:function(e){return v(e.target.value)},value:m,placeholder:"title...",maxLength:"35"}),Object(u.jsx)("div",{className:"title",children:"Content"}),Object(u.jsx)("textarea",{name:"content",onChange:function(e){return N(e.target.value)},value:g,placeholder:"content..."}),Object(u.jsx)("div",{}),Object(u.jsx)("button",{type:"submit",disabled:!(m.length>=1&&g.length>=1),children:"Create a post"})]})]})}function C(e){var t=e.entry,n=Object(c.useContext)(r),s=n.posts,a=n.setPosts,l=Object(c.useContext)(o),j=l.show,d=l.setShow,b=l.setEdit,O=Object(c.useState)(""),h=Object(i.a)(O,2),x=h[0],m=h[1];return Object(c.useEffect)((function(){var e=function(e){return"Escape"===e.key?d(""):null};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),Object(u.jsx)("div",{className:"modal",children:Object(u.jsxs)("div",{className:"modal-inner-container",children:[Object(u.jsx)("div",{onClick:function(){return d("")},className:"close",children:"\xd7"}),Object(u.jsxs)("div",{className:"modal-inner",style:{backgroundColor:"".concat(t.color)},children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("small",{children:t.time}),Object(u.jsx)("h4",{children:t.title})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsx)("p",{children:t.content})}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsxs)("div",{className:"modal-icons",children:[Object(u.jsx)("div",{onClick:function(){b(j),d("")},children:"\u270f\ufe0f"}),Object(u.jsx)("div",{onClick:function(){return e=t.id,void m(x==e?"":e);var e},children:"\u274c"}),x==t.id?Object(u.jsxs)("p",{className:"sure",children:["delete? ",Object(u.jsx)("span",{onClick:function(){return function(e){var t=s.filter((function(t){return t.id!=e}));d(""),a(t)}(t.id)},className:"yes",children:"y"})," / ",Object(u.jsx)("span",{onClick:function(){return m("")},className:"no",children:"n"})]}):null]}),""!=t.updated?Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["updated ",t.updated]})}):null]})]})]})})}function g(e){var t=e.entry,n=Object(c.useContext)(r),s=n.posts,a=n.setPosts,l=Object(c.useContext)(o),j=(l.show,l.setShow),b=l.edit,O=l.setEdit,h=Object(c.useState)(t.title),x=Object(i.a)(h,2),m=x[0],v=x[1],p=Object(c.useState)(t.content),C=Object(i.a)(p,2),g=C[0],N=C[1],y=Object(c.useState)(""),k=Object(i.a)(y,2),w=k[0],S=k[1],E=Object(c.useState)(""),P=Object(i.a)(E,2),M=P[0],L=P[1],Y=Object(c.useState)(!1),H=Object(i.a)(Y,2),A=H[0],D=H[1];function I(){if(t.title!==m||t.content!==g){var e=s.filter((function(e){return e.id!=t.id})),n={id:t.id,title:m,content:g,time:t.time,updated:""+f(),color:t.color};a([n].concat(Object(d.a)(e))),A||j(n),O("")}else j(b),O("")}function J(){v(t.title),N(t.content),D(!1),O("")}return Object(c.useEffect)((function(){var e=function(e){return"Escape"===e.key?j(""):null};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),Object(u.jsx)("div",{className:"modal",children:Object(u.jsxs)("div",{className:"modal-inner-container",children:[Object(u.jsx)("div",{onClick:function(){t.title!==m||t.content!==g?D(!0):(D(!1),O(""))},className:"close",children:"\xd7"}),A?Object(u.jsxs)("div",{className:"change",children:["save?",Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"yes",onClick:I,children:"y"})," / ",Object(u.jsx)("span",{className:"no",onClick:J,children:"n"})]}):null,Object(u.jsxs)("div",{className:"modal-inner",style:{backgroundColor:"".concat(t.color)},children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("small",{children:t.time}),Object(u.jsx)("input",{onChange:function(e){return v(e.target.value)},value:m,type:"text",maxLength:"35"})]}),Object(u.jsx)("div",{className:"modal-body modal-edit-body",children:Object(u.jsx)("textarea",{onChange:function(e){return N(e.target.value)},value:g})}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsxs)("div",{className:"modal-icons",children:[Object(u.jsx)("div",{onClick:function(){return e=t.id,void(t.title!==m||t.content!==g?(L(M==e?"":e),S("")):(j(b),O("")));var e},children:"\u2705"}),Object(u.jsx)("div",{onClick:function(){return e=t.id,S(w==e?"":e),void L("");var e},children:"\u274c"}),w==t.id?Object(u.jsxs)("p",{className:"sure",children:["delete? ",Object(u.jsx)("span",{onClick:function(){return function(e){var t=s.filter((function(t){return t.id!=e}));O(""),a(t)}(t.id)},className:"yes",children:"y"})," / ",Object(u.jsx)("span",{onClick:function(){return S("")},className:"no",children:"n"})]}):null,M==t.id?Object(u.jsxs)("p",{className:"sure",children:["save? ",Object(u.jsx)("span",{onClick:I,className:"yes",children:"y"})," / ",Object(u.jsx)("span",{onClick:J,className:"no",children:"n"})]}):null]}),""!=t.updated?Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["updated ",t.updated]})}):null]})]})]})})}function N(){var e=Object(c.useContext)(r),t=e.posts,n=(e.setPosts,Object(c.useContext)(o)),s=n.edit,a=(n.setEdit,Object(c.useContext)(o)),i=a.show;a.setShow;return Object(u.jsxs)(u.Fragment,{children:[""!=i?Object(u.jsx)(C,{entry:i}):null,""!=s?Object(u.jsx)(g,{entry:s}):null,Object(u.jsx)("div",{className:"show-posts",children:t.length>0?Object(u.jsx)(b,{}):Object(u.jsx)("p",{children:"no entries yet..."})})]})}var y=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)({r:255,g:255,b:255}),j=Object(i.a)(a,2),d=j[0],b=j[1],O=Object(c.useState)(!1),h=Object(i.a)(O,2),m=h[0],v=h[1],f=Object(c.useState)(!1),C=Object(i.a)(f,2),g=C[0],y=C[1],k=Object(c.useState)(""),w=Object(i.a)(k,2),S=w[0],E=w[1],P=Object(c.useState)(""),M=Object(i.a)(P,2),L=M[0],Y=M[1];return Object(u.jsx)("div",{className:"App",style:{backgroundColor:"rgb(".concat(d.r,", ").concat(d.g,", ").concat(d.b,", .8)"),overflowY:"".concat(""!=L||""!=S?"hidden":""),paddingRight:"".concat(""!=L||""!=S?"55px":"")},children:Object(u.jsx)(o.Provider,{value:{show:L,setShow:Y,edit:S,setEdit:E},children:Object(u.jsx)(r.Provider,{value:{posts:n,setPosts:s},children:Object(u.jsxs)(l.Provider,{value:{color:d,setColor:b},children:[Object(u.jsx)(x,{}),Object(u.jsxs)("h2",{onClick:function(){return v(!m)},children:["Make an entry ",m?"\u25b4":"\u25be"]}),m?Object(u.jsx)(p,{setAll:y}):null,Object(u.jsxs)("h2",{onClick:function(){return y(!g)},children:["Show all entries ",g?"\u25b4":"\u25be"]}),g?Object(u.jsx)(N,{}):null]})})})})};a.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0f70d6ab.chunk.js.map