(this.webpackJsonpfuntrivia=this.webpackJsonpfuntrivia||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),r=(n(9),n(2)),o=n(0);var l=function(e){return Object(o.jsx)("button",{className:"bg-blue b--light-blue br3 f2 pa2 ma2 grow",onClick:e.onClick,children:e.name})};var u=function(e){var t=Object(c.useState)(!0),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)({}),u=Object(r.a)(i,2),j=u[0],b=u[1],f=Object(c.useState)([]),O=Object(r.a)(f,2),d=O[0],h=O[1],g=Object(c.useState)(void 0),m=Object(r.a)(g,2),y=m[0],x=m[1],p=Object(c.useState)(0),v=Object(r.a)(p,2),S=v[0],C=v[1],N=Object(c.useState)(!1),I=Object(r.a)(N,2),w=I[0],k=I[1],A=Object(c.useCallback)((function(){s(!0),fetch(e.url,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){C(0),b(e.results[0]);var t=e.results[0].incorrect_answers;t.push(e.results[0].correct_answer),t.sort((function(){return.5-Math.random()})),h(t),s(!1)})).catch((function(e){S<3?C(S+1):k(!0)}))}),[S,e.url]);Object(c.useEffect)((function(){A()}),[A]);var _=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{name:"Play Again",onClick:function(){x(void 0),A()}}),Object(o.jsx)(l,{name:"Exit",onClick:function(){e.exit()}})]})};return a?Object(o.jsx)("img",{src:"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",alt:"loading"}):w?Object(o.jsxs)("div",{className:"w-75",children:[Object(o.jsx)("h1",{children:"An error has occurred"}),Object(o.jsx)(_,{})]}):Object(o.jsxs)("div",{className:"w-75",children:[Object(o.jsxs)("p",{className:"ma1 f4",children:["Category: ",j.category]}),Object(o.jsxs)("p",{className:"ma1 f4",children:["Difficulty: ",j.difficulty]}),Object(o.jsx)("p",{className:"ma1 f2",dangerouslySetInnerHTML:{__html:j.question}}),void 0===y?Object(o.jsx)("div",{className:"flex flex-wrap",children:d.map((function(t){return Object(o.jsx)("button",{className:"w-50 pa3 f3",onClick:function(){return function(t){x(t===j.correct_answer),t===j.correct_answer?e.onAnswer({easy:25,medium:50,hard:100}[j.difficulty]):e.onAnswer({easy:0,medium:-10,hard:-25}[j.difficulty])}(t)},dangerouslySetInnerHTML:{__html:t}},t)}))}):!0===y?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"green",children:"Correct"}),Object(o.jsx)(_,{})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"red",children:"Wrong"}),Object(o.jsx)("h2",{dangerouslySetInnerHTML:{__html:"The correct answer is "+j.correct_answer}}),Object(o.jsx)(_,{})]})]})},j=function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)("any"),u=Object(r.a)(i,2),j=u[0],b=u[1],f=Object(c.useState)("any"),O=Object(r.a)(f,2),d=O[0],h=O[1],g=Object(c.useState)("any"),m=Object(r.a)(g,2),y=m[0],x=m[1];Object(c.useEffect)((function(){fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){s(e.trivia_categories)}))}),[]),Object(c.useEffect)((function(){b(e.setting.type),h(e.setting.difficulty),x(e.setting.category)}),[e.setting.category,e.setting.difficulty,e.setting.type]);var p=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:e.id,children:e.label}),Object(o.jsx)("select",{className:"mv2",name:e.id,id:e.id,value:e.value,onChange:function(t){e.onChange(t.target.value)},children:e.options.map((function(e){var t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsx)("option",{value:n,children:c},n)}))})]})};return Object(o.jsxs)("div",{className:"flex flex-column w-40 f3",children:[Object(o.jsx)(p,{id:"type",label:"Type:",value:j,onChange:function(e){b(e)},options:[["any","Any"],["multiple","Multiple"],["boolean","True/False"]]}),Object(o.jsx)(p,{id:"difficulty",label:"Difficulty:",value:d,onChange:function(e){h(e)},options:[["any","Any"],["easy","Easy"],["medium","Medium"],["hard","Hard"]]}),Object(o.jsx)(p,{id:"category",label:"Category:",value:y,onChange:function(e){x(e)},options:[["any","Any"]].concat(a.map((function(e){return[e.id,e.name]})))}),Object(o.jsx)(l,{name:"Back",onClick:function(){e.onBack(j,d,y)}})]})};var b=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),b=i[0],f=i[1],O=Object(c.useState)(0),d=Object(r.a)(O,2),h=d[0],g=d[1],m=Object(c.useState)(0),y=Object(r.a)(m,2),x=y[0],p=y[1],v=Object(c.useState)(!1),S=Object(r.a)(v,2),C=S[0],N=S[1],I=Object(c.useState)({type:"multiple",category:"any",difficulty:"any"}),w=Object(r.a)(I,2),k=w[0],A=w[1];Object(c.useEffect)((function(){var e=localStorage.getItem("highscore");null!=e&&g(parseInt(e)),null!=sessionStorage.getItem("lastscore")&&N(!0);var t=localStorage.getItem("setting");null!=t&&A(JSON.parse(t))}),[]);var _=function(){var e=null;return C&&(e=Object(o.jsx)(l,{name:"Continue",onClick:function(){a(!0),p(parseInt(sessionStorage.getItem("lastscore")))}})),Object(o.jsxs)("div",{className:"flex flex-column",children:[Object(o.jsx)(l,{name:"Play",onClick:function(){a(!0)}}),e,Object(o.jsx)(l,{name:"Setting",onClick:function(){f(!0)}})]})};return Object(o.jsxs)("div",{className:"flex flex-column items-center justify-center vh-100 bg-lightest-blue relative",children:[Object(o.jsxs)("div",{className:"absolute top-0 right-0 ph4",children:[Object(o.jsxs)("h2",{children:["Highscore: ",h]}),Object(o.jsxs)("h2",{children:["Score: ",x]})]}),Object(o.jsx)("h1",{className:"f1",children:"Fun Trivia"}),n?Object(o.jsx)(u,{url:function(){var e="";"any"!==k.type&&(e="&type="+encodeURIComponent(k.type));var t="";"any"!==k.category&&(t="&category="+encodeURIComponent(k.category));var n="";return"any"!==k.difficulty&&(n="&difficulty="+encodeURIComponent(k.difficulty)),"https://opentdb.com/api.php?amount=1"+e+t+n}(),exit:function(){a(!1)},onAnswer:function(e){x+e===0||C||N(!0),x+e>h&&(g(x+e),localStorage.setItem("highscore",(x+e).toString())),sessionStorage.setItem("lastscore",x+e),p(x+e)}}):b?Object(o.jsx)(j,{onBack:function(e,t,n){f(!1),A({type:e,category:n,difficulty:t}),localStorage.setItem("setting",JSON.stringify({type:e,category:n,difficulty:t}))},setting:k}):Object(o.jsx)(_,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};n(11);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.baa96649.chunk.js.map