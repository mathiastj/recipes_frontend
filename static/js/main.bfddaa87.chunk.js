(this.webpackJsonprecipes_frontend=this.webpackJsonprecipes_frontend||[]).push([[0],{359:function(e,t,a){e.exports=a(519)},364:function(e,t,a){},366:function(e,t,a){},519:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(0),c=a.n(r),o=a(15),l=a.n(o),i=(a(364),a(132)),s=a.n(i),u=a(216),m=a(106),d=a(107),f=a(117),g=a(116),E=a(326),p=a.n(E),v=a(327),h=a.n(v),b=a(224),j=a.n(b),O=a(599),y=a(598),k=a(226),w=a(284),P=a(606),x=a(579),S=a(603),N=a(611),_=a(329),I=a(601),C=a(600),B=a(590),M=a(591),A=a(609),D=a(608),W=a(594),z=a(602),q=a(596),J=a(605),L=a(610),T=a(228),G=(a(366),a(181)),R=Object(G.a)({text:{fontWeight:"bold",alignContent:"center",fontSize:"2rem"},root:{"text-align":"center"}}),U=function(e){var t=R(),a=e.record;return c.a.createElement("div",{className:t.root},c.a.createElement("span",{className:t.text},a.title))},$=a(227),F=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.rating,t=5,a=0;return e&&(t=5-Number(e),a=e>5?5:e),t<0&&(t=0),e?c.a.createElement("span",null,Object($.a)(Array(a)).map((function(){return c.a.createElement("span",null,"\u2605")})),Object($.a)(Array(t)).map((function(){return c.a.createElement("span",null,"\u2606")}))):""}}]),a}(r.PureComponent),H=Object(G.a)({"text-left":{float:"left","text-align":"left",width:"33%"},"text-center":{float:"left","text-align":"center",width:"34%"},"text-right":{float:"left","text-align":"right",width:"33%"},root:{paddingBlock:"3rem"}}),K=function(e){var t=H(),a=e.record,n=a.rating,r=a.servings,o=a.duration_free;return c.a.createElement("div",{className:t.root},c.a.createElement("span",{className:t["text-left"]},c.a.createElement(F,{rating:n})),c.a.createElement("span",{className:t["text-center"]},r," servings"),c.a.createElement("span",{className:t["text-right"]},o))},Q=a(575),V=Object(G.a)({label:{fontWeight:"bold",fontSize:"1.25rem",display:"block",marginBottom:"0.75rem"},root:{paddingBlock:"1rem"}}),X=function(e){var t=V(),a=e.source;return c.a.createElement("div",{className:t.root},c.a.createElement("span",{className:t.label},function(e){return"ingredients"===e?"Ingredients":"Directions"}(a)),c.a.createElement(Q.a,Object.assign({source:!0},e)))},Y=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.record.rating;return c.a.createElement(F,{rating:e})}}]),a}(r.PureComponent),Z=function(e){var t=e.record;return c.a.createElement("span",null,t?"".concat(t.title):"")},ee=[Object(w.d)(),Object(w.c)(1),Object(w.b)(5)],te=function(e){return c.a.createElement(P.a,e,c.a.createElement(x.a,{label:"Search titles",source:"title",alwaysOn:!0}),c.a.createElement(x.a,{label:"Search ingredients",source:"ingredients",alwaysOn:!0}),c.a.createElement(S.a,{label:"Category",source:"category_id",reference:"categories",allowEmpty:!0},c.a.createElement(N.a,{optionText:"name"})))},ae=function(e){return c.a.createElement(_.a,Object.assign({rowsPerPageOptions:[10,25,50,100]},e))},ne=function(e){return c.a.createElement(I.a,Object.assign({},e,{filters:c.a.createElement(te,null),bulkActionButtons:!1,perPage:100,pagination:c.a.createElement(ae,null)}),c.a.createElement(C.a,{rowClick:"show"},c.a.createElement(B.a,{source:"title"}),c.a.createElement(Y,{source:"rating"}),c.a.createElement(M.a,{source:"servings"}),c.a.createElement(A.a,{source:"category_id",reference:"categories"},c.a.createElement(B.a,{source:"name"}))))},re=function(e){return c.a.createElement(D.a,Object.assign({},e,{title:c.a.createElement(Z,null)}),c.a.createElement(W.a,null,c.a.createElement(U,{source:"title"}),c.a.createElement(K,null),c.a.createElement(X,Object.assign({source:"ingredients"},e)),c.a.createElement(X,Object.assign({source:"directions"},e))))},ce=[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]],oe=function(){return c.a.createElement(z.a,null,c.a.createElement(x.a,{source:"title"}),c.a.createElement(q.a,{source:"rating",validate:ee}),c.a.createElement(q.a,{source:"servings"}),c.a.createElement(x.a,{source:"duration_free",label:"Duration"}),c.a.createElement(S.a,{source:"category_id",reference:"categories"},c.a.createElement(N.a,{optionText:"name"})),c.a.createElement(T.a,{source:"ingredients",toolbar:ce}),c.a.createElement(T.a,{source:"directions",toolbar:ce}))},le=function(e){return c.a.createElement(J.a,Object.assign({},e,{title:c.a.createElement(Z,null)}),oe())},ie=function(e){return c.a.createElement(L.a,Object.assign({},e,{title:c.a.createElement(Z,null)}),oe())},se=a(597),ue=function(e){return c.a.createElement(L.a,e,c.a.createElement(z.a,null,c.a.createElement(x.a,{source:"name"})))},me=function(e){return c.a.createElement(I.a,e,c.a.createElement(C.a,{rowClick:"edit"},c.a.createElement(B.a,{source:"name"})))},de=function(e){return c.a.createElement(J.a,e,c.a.createElement(z.a,null,c.a.createElement(x.a,{source:"name"})))},fe=function(e){return c.a.createElement(D.a,e,c.a.createElement(W.a,null,c.a.createElement(B.a,{source:"name"}),c.a.createElement(se.a,{source:"created_at"}),c.a.createElement(se.a,{source:"updated_at"})))},ge={login:function(e){var t=e.username,a=e.password;return"foodGoesNomNom"!==t?Promise.reject():(localStorage.setItem("key",a),window.location.reload(),Promise.resolve())},logout:function(){return localStorage.removeItem("key"),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("key"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("key")?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve()}},Ee={getList:function(){return Promise.resolve({data:[]})},getOne:function(){return Promise.resolve(null)},getMany:function(){return Promise.resolve(null)},getManyReference:function(){return Promise.resolve(null)},create:function(){return Promise.resolve(null)},update:function(){return Promise.resolve(null)},updateMany:function(){return Promise.resolve(null)},delete:function(){return Promise.resolve(null)},deleteMany:function(){return Promise.resolve(null)}},pe=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={dataProvider:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("key")){e.next=4;break}return this.setState({dataProvider:Ee}),e.abrupt("return");case 4:return a={"content-type":"application/json","x-hasura-admin-secret":t},n=new k.a({uri:"https://floating-meadow-53258.herokuapp.com/v1/graphql",headers:a}),e.next=8,j()({client:n});case 8:r=e.sent,this.setState({dataProvider:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("key"),null!==this.state.dataProvider||!t){e.next=9;break}return a={"content-type":"application/json","x-hasura-admin-secret":t},n=new k.a({uri:"https://floating-meadow-53258.herokuapp.com/v1/graphql",headers:a}),e.next=7,j()({client:n});case 7:r=e.sent,this.setState({dataProvider:r});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.dataProvider;return e?c.a.createElement(O.a,{dataProvider:e,authProvider:ge},c.a.createElement(y.a,{name:"recipes",show:re,list:ne,edit:le,create:ie,icon:p.a}),c.a.createElement(y.a,{name:"categories",show:fe,list:me,edit:de,create:ue,icon:h.a})):c.a.createElement("div",null,"Loading")}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(n.a,null,c.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[359,1,2]]]);
//# sourceMappingURL=main.bfddaa87.chunk.js.map