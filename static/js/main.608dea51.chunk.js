(this.webpackJsonpfuntrivia=this.webpackJsonpfuntrivia||[]).push([[0],{22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(15),i=n.n(s),r=(n(22),n(4)),o=n(2),l=n(1);var u=function(e){return Object(l.jsx)("button",{className:"bg-blue b--light-blue br3 f2 pa2 ma2 grow",onClick:e.onClick,children:e.name})};var j=function(e){var t=Object(c.useState)(!0),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)({}),o=Object(r.a)(i,2),j=o[0],b=o[1],f=Object(c.useState)([]),d=Object(r.a)(f,2),h=d[0],O=d[1],g=Object(c.useState)(void 0),m=Object(r.a)(g,2),y=m[0],p=m[1],x=Object(c.useState)(0),v=Object(r.a)(x,2),S=v[0],C=v[1],N=Object(c.useState)(!1),I=Object(r.a)(N,2),w=I[0],k=I[1],A=Object(c.useCallback)((function(){s(!0),fetch(e.url,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){C(0),b(e.results[0]);var t=e.results[0].incorrect_answers;t.push(e.results[0].correct_answer),t.sort((function(){return.5-Math.random()})),O(t),s(!1)})).catch((function(e){S<3?C(S+1):k(!0)}))}),[S,e.url]);Object(c.useEffect)((function(){A()}),[A]);var _=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{name:"Play Again",onClick:function(){p(void 0),A()}}),Object(l.jsx)(u,{name:"Exit",onClick:function(){e.exit()}})]})};return a?Object(l.jsx)("img",{src:"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",alt:"loading"}):w?Object(l.jsxs)("div",{className:"w-75",children:[Object(l.jsx)("h1",{children:"An error has occurred"}),Object(l.jsx)(_,{})]}):Object(l.jsxs)("div",{className:"w-75",children:[Object(l.jsxs)("p",{className:"ma1 f4",children:["Category: ",j.category]}),Object(l.jsxs)("p",{className:"ma1 f4",children:["Difficulty: ",j.difficulty]}),Object(l.jsx)("p",{className:"ma1 f2",dangerouslySetInnerHTML:{__html:j.question}}),void 0===y?Object(l.jsx)("div",{className:"flex flex-wrap",children:h.map((function(t){return Object(l.jsx)("button",{className:"w-50 pa3 f3",onClick:function(){return function(t){p(t===j.correct_answer),t===j.correct_answer?e.onAnswer({easy:25,medium:50,hard:100}[j.difficulty]):e.onAnswer({easy:0,medium:-10,hard:-25}[j.difficulty])}(t)},dangerouslySetInnerHTML:{__html:t}},t)}))}):!0===y?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"green",children:"Correct"}),Object(l.jsx)(_,{})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"red",children:"Wrong"}),Object(l.jsx)("h2",{dangerouslySetInnerHTML:{__html:"The correct answer is "+j.correct_answer}}),Object(l.jsx)(_,{})]})]})},b=function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)("any"),o=Object(r.a)(i,2),j=o[0],b=o[1],f=Object(c.useState)("any"),d=Object(r.a)(f,2),h=d[0],O=d[1],g=Object(c.useState)("any"),m=Object(r.a)(g,2),y=m[0],p=m[1];Object(c.useEffect)((function(){fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){s(e.trivia_categories)}))}),[]),Object(c.useEffect)((function(){b(e.setting.type),O(e.setting.difficulty),p(e.setting.category)}),[e.setting.category,e.setting.difficulty,e.setting.type]);var x=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{htmlFor:e.id,children:e.label}),Object(l.jsx)("select",{className:"mv2",name:e.id,id:e.id,value:e.value,onChange:function(t){e.onChange(t.target.value)},children:e.options.map((function(e){var t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(l.jsx)("option",{value:n,children:c},n)}))})]})};return Object(l.jsxs)("div",{className:"flex flex-column w-40 f3",children:[Object(l.jsx)(x,{id:"type",label:"Type:",value:j,onChange:function(e){b(e)},options:[["any","Any"],["multiple","Multiple"],["boolean","True/False"]]}),Object(l.jsx)(x,{id:"difficulty",label:"Difficulty:",value:h,onChange:function(e){O(e)},options:[["any","Any"],["easy","Easy"],["medium","Medium"],["hard","Hard"]]}),Object(l.jsx)(x,{id:"category",label:"Category:",value:y,onChange:function(e){p(e)},options:[["any","Any"]].concat(a.map((function(e){return[e.id,e.name]})))}),Object(l.jsx)(u,{name:"Back",onClick:function(){e.onBack(j,h,y)}})]})};var f=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),f=i[0],d=i[1],h=Object(c.useState)(!1),O=Object(r.a)(h,2),g=O[0],m=O[1],y=Object(c.useState)({type:"multiple",category:"any",difficulty:"any"}),p=Object(r.a)(y,2),x=p[0],v=p[1],S=Object(o.f)();Object(c.useEffect)((function(){var e=localStorage.getItem("highscore");null!=e&&a(parseInt(e)),null!=sessionStorage.getItem("lastscore")&&m(!0);var t=localStorage.getItem("setting");null!=t&&v(JSON.parse(t))}),[]);var C=function(){var e=null;return g&&(e=Object(l.jsx)(u,{name:"Continue",onClick:function(){S.push("/trivia"),d(parseInt(sessionStorage.getItem("lastscore")))}})),Object(l.jsxs)("div",{className:"flex flex-column",children:[Object(l.jsx)(u,{name:"Play",onClick:function(){S.push("/trivia"),d(0)}}),e,Object(l.jsx)(u,{name:"Setting",onClick:function(){S.push("/setting")}})]})};return Object(l.jsxs)("div",{className:"flex flex-column items-center justify-center vh-100 bg-lightest-blue relative",children:[Object(l.jsxs)("div",{className:"absolute top-0 right-0 ph4",children:[Object(l.jsxs)("h2",{children:["Highscore: ",n]}),Object(l.jsxs)("h2",{children:["Score: ",f]})]}),Object(l.jsx)("h1",{className:"f1",children:"Fun Trivia"}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/trivia",children:Object(l.jsx)(j,{url:function(){var e="";"any"!==x.type&&(e="&type="+encodeURIComponent(x.type));var t="";"any"!==x.category&&(t="&category="+encodeURIComponent(x.category));var n="";return"any"!==x.difficulty&&(n="&difficulty="+encodeURIComponent(x.difficulty)),"https://opentdb.com/api.php?amount=1"+e+t+n}(),exit:function(){S.push("/")},onAnswer:function(e){f+e===0||g||m(!0),f+e>n&&(a(f+e),localStorage.setItem("highscore",(f+e).toString())),sessionStorage.setItem("lastscore",f+e),d(f+e)}})}),Object(l.jsx)(o.a,{path:"/setting",children:Object(l.jsx)(b,{onBack:function(e,t,n){S.push("/"),v({type:e,category:n,difficulty:t}),localStorage.setItem("setting",JSON.stringify({type:e,category:n,difficulty:t}))},setting:x})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(C,{})})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},h=(n(29),n(12));i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h.a,{children:Object(l.jsx)(f,{})})}),document.getElementById("root")),d()}},[[30,1,2]]]);
//# sourceMappingURL=main.608dea51.chunk.js.map