(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(17),c=n.n(r),a=(n(23),n(4)),s=n.n(a),l=n(5),u=n(3),p=n(0),d=function(){return Object(p.jsx)("div",{id:"page-home",children:Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)("main",{style:{backgroundColor:"gray",paddingTop:"5px",paddingBottom:"5px",paddingLeft:"10px",paddingRight:"10px",display:"flex",justifyContent:"space-between"},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{color:"white",marginTop:"5px",marginBottom:"5px",fontSize:"20px"},children:"Painel Administrativo"}),Object(p.jsx)("p",{style:{color:"white",marginTop:"0px",marginBottom:"5px",fontSize:"12px"},children:"Adicione abaixo equipes para o site, n\xe3o esque\xe7a do nome de quem recomendou"})]}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)("p",{style:{marginBottom:"2px",fontSize:"15px",marginTop:"2px"},children:"Precisa adicionar uma chave"}),Object(p.jsx)("button",{style:{width:"80px",height:"30px"},children:"Chave"})]})]})})})},x=n(18),h=n.n(x),b=JSON.parse(function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText}("https://api-team-na.herokuapp.com/json_chars"));var j=function(){var e=Object(o.useState)(b),t=Object(u.a)(e,2),n=t[0],i=(t[1],Object(o.useState)({token:"tetetoken",equipes:[]})),r=Object(u.a)(i,2),c=r[0],a=r[1],x=Object(o.useState)(),j=Object(u.a)(x,2),g=j[0],m=j[1],f=Object(o.useState)(""),O=Object(u.a)(f,2),y=O[0],v=O[1],w=Object(o.useState)([null,null,null]),C=Object(u.a)(w,2),k=C[0],S=C[1],T=Object(o.useState)([null,null,null]),I=Object(u.a)(T,2),L=I[0],B=I[1],A=Object(o.useState)(""),E=Object(u.a)(A,2),R=E[0],q=E[1],D=Object(o.useState)(""),N=Object(u.a)(D,2),H=N[0],z=N[1],F=Object(o.useState)(""),J=Object(u.a)(F,2),M=J[0],P=J[1];function _(){return(_=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"selecao"==t.target.className&&(t.target.id==g?m(null):m(t.target.id));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(l.a)(s.a.mark((function e(t){var n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=k,(o=L)[g]=t.foto,n[g]=t.nome,S(n),B(o),q("b"==R?"":"b");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("inserindo"),t=c,n={OBJETIVO:"MISS\xd5ES  ","CHAR 1":k[0],"CHAR 2":k[1],"CHAR 3":k[2],ESTRATEGIA:H,RECOMENDADO:M},t.equipes.push(n),a(t),m(),v(""),S([null,null,null]),B([null,null,null]),z(""),P(""),v(""),q("b"==R?"":"b");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c),t=c,a({token:"tetetoken",equipes:[]}),e.next=5,h.a.put("https://api-team-na.herokuapp.com/add_chars",t);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(o.useEffect)((function(){console.log(H)}));var K={width:"60px",height:"60px",backgroundColor:"grey"},Q={width:"60px",height:"60px",border:"2px solid blue"},U={height:"50px",width:"50px",marginLeft:"3px"},W={overflow:"auto",height:"200px",width:"500px",border:"2px solid black",paddingTop:"5px",display:null!=g?"block":"none"},Y={height:"60px",width:"60px",backgroundImage:"url(".concat(L[0],")"),backgroundSize:"cover",border:0==g?"2px solid blue":""},Z={height:"60px",width:"60px",backgroundImage:"url(".concat(L[1],")"),backgroundSize:"cover",border:1==g?"2px solid blue":""},$={height:"60px",width:"60px",backgroundImage:"url(".concat(L[2],")"),backgroundSize:"cover",border:2==g?"2px solid blue":""},ee={height:"40px"};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d,{}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsxs)("div",{style:{width:"80%",height:"600px",backgroundColor:"#1114",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsxs)("div",{onClick:function(e){return function(e){return _.apply(this,arguments)}(e)},style:{marginTop:"20px",display:"flex",width:"200px",justifyContent:"space-between",marginBottom:"10px"},children:[Object(p.jsx)("div",{id:"0",className:"selecao",style:null!=L[0]?Y:0==g?Q:K}),Object(p.jsx)("div",{id:"1",className:"selecao",style:null!=L[1]?Z:1==g?Q:K}),Object(p.jsx)("div",{id:"2",className:"selecao",style:null!=L[2]?$:2==g?Q:K})]}),Object(p.jsx)("input",{id:"caixa_busca",value:y,placeholder:"Digite o nome do personagem",onChange:function(e){v(e.target.value)},style:{marginBottom:"20px",width:"300px"}}),Object(p.jsx)("div",{style:W,children:n.filter((function(e){return e.nome.toLowerCase().includes(y.toLowerCase())})).map((function(e){return Object(p.jsx)("img",{onClick:function(t){return function(e){return G.apply(this,arguments)}(e)},style:U,src:e.foto})}))}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:["Estrategia:",Object(p.jsx)("textarea",{value:H,onChange:function(e){z(e.target.value)},style:{width:"500px",height:"100px",marginTop:"10px"}})]}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"10px"},children:["recomendado por :",Object(p.jsx)("input",{placeholder:"Nome do player",value:M,onChange:function(e){P(e.target.value)},style:{marginBottom:"20px",width:"200px",marginTop:"10px"}})]}),Object(p.jsx)("button",{disabled:null==(k[0]&&k[1]&&k[2])||""==H||""==M,style:{marginBottom:"40px"},onClick:function(e){return function(){return V.apply(this,arguments)}()},children:"Inserir"})]}),Object(p.jsxs)("div",{style:{overflow:"auto",backgroundColor:"#1119",width:"20%",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"10px"},children:[console.log("ok"),c.equipes.map((function(e,t){return Object(p.jsxs)("div",{style:{backgroundColor:"rgb(162 157 157)",height:"40px",width:"120px",marginBottom:"10px"},children:[Object(p.jsx)("img",{style:ee,src:n.filter((function(t){return t.nome.toLowerCase()==e["CHAR 1"].toLowerCase()}))[0].foto}),Object(p.jsx)("img",{style:ee,src:n.filter((function(t){return t.nome.toLowerCase()==e["CHAR 2"].toLowerCase()}))[0].foto}),Object(p.jsx)("img",{style:ee,src:n.filter((function(t){return t.nome.toLowerCase()==e["CHAR 3"].toLowerCase()}))[0].foto})]},t)})),Object(p.jsx)("button",{disabled:c.equipes.length<=0,onClick:function(e){return function(){return X.apply(this,arguments)}()},children:"Enviar"})]})]})]})};var g=function(){return Object(p.jsx)(j,{})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.a60041de.chunk.js.map