(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var a=i(3),n=i.n(a),r=i(4),s=i(5),o=i(8),c=i(7),u=i(1),l=[{id:"tab-1",title:"Tab 1",content:"Some text 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur reiciendis iusto sit voluptatem, quasi corporis impedit consectetur amet ad cumque suscipit aliquam exercitationem necessitatibus pariatur. Tempora labore iure culpa id!"},{id:"tab-2",title:"Tab 2",content:"Some text 2 Unde eveniet soluta officiis praesentium, repellendus saepe ducimus, illo dolorum necessitatibus facere itaque. Dolores blanditiis commodi eos quaerat animi, inventore quidem repellat  Laborum pariatur placeat, porro, illum similique omnis, quam nobis in vitae corrupti hic ex inventore suscipit error harum?"},{id:"tab-3",title:"Tab 3",content:"Some text 3 Tempore, ea dolor error voluptatem pariatur laboriosam non minima rem. Voluptates veritatis tempora maxime, at dolores atque accusantium fugiat provident facilis, odit in tenetur esse corporis doloribus impedit! Repellendus inventore sunt illum aliquid qui expedita, perspiciatis commodi quae et nihil incidunt recusandae libero ratione cumque dolor fugit totam esse."}],d=(i(13),i(14),i(0)),b=function(e){var t=e.tabs,i=e.selectedTabId,a=e.onTabSelected;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"Tabs",children:t.map((function(e){return Object(d.jsx)("button",{className:"Tabs__tab ".concat(e.id===i.id&&"Tabs__tab--selected"),type:"button",onClick:function(){return a(e)},children:e.title},e.id)}))})})},m=function(e){Object(o.a)(i,e);var t=Object(c.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={selectedTab:l[0]},e.onTabSelected=function(t){e.setState({selectedTab:t})},e}return Object(s.a)(i,[{key:"render",value:function(){var e=this.state.selectedTab;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("h1",{children:["Selected tab is\xa0",e.title]}),Object(d.jsx)(b,{tabs:l,selectedTabId:e,onTabSelected:this.onTabSelected}),Object(d.jsx)("p",{children:e.content})]})}}]),i}(u.Component),p=m;n.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8e34d8da.chunk.js.map