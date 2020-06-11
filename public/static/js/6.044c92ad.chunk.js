(this["webpackJsonpjumbo-react"]=this["webpackJsonpjumbo-react"]||[]).push([[6],{442:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(457),l=a(458),s=function(e,t,a){return 0===a?"#/":"#/"+e.split(t)[0]+t};t.a=function(e){var t=e.title,a=e.match.path.substr(1),n=a.split("/");return c.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},c.a.createElement("h2",{className:"title mb-3 mb-sm-0"},t),c.a.createElement(r.a,{className:"mb-0",tag:"nav"},n.map((function(e,t){return c.a.createElement(l.a,{active:n.length===t+1,tag:n.length===t+1?"span":"a",key:t,href:s(a,e,t)},function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},457:function(e,t,a){"use strict";var n=a(1),c=a(23),r=a(0),l=a.n(r),s=a(2),i=a.n(s),o=a(60),u=a.n(o),m=a(15),d={tag:m.d,listTag:m.d,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,s=e.children,i=e.tag,o=e.listTag,d=e["aria-label"],p=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.b)(u()(t),r),g=Object(m.b)(u()("breadcrumb",a),r);return l.a.createElement(i,Object(n.a)({},p,{className:b,"aria-label":d}),l.a.createElement(o,{className:g},s))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},458:function(e,t,a){"use strict";var n=a(1),c=a(23),r=a(0),l=a.n(r),s=a(2),i=a.n(s),o=a(60),u=a.n(o),m=a(15),d={tag:m.d,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.active,s=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(m.b)(u()(t,!!r&&"active","breadcrumb-item"),a);return l.a.createElement(s,Object(n.a)({},i,{className:o,"aria-current":r?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},t.a=p},502:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));var n=a(8),c=a(56),r=function(){return function(e){e({type:n.j}),c.a.get("/categories").then((function(t){var a=t.data;e({type:n.k}),e({type:n.c,payload:a.categories})})).catch((function(t){e({type:n.i,payload:t.message})}))}},l=function(e){return function(t){t({type:n.j}),c.a.delete("/category/".concat(e)).then((function(e){var a=e.data;t({type:n.k}),t({type:n.c,payload:a.categories})})).catch((function(e){t({type:n.i,payload:e.message})}))}}},791:function(e,t,a){"use strict";a.r(t);var n=a(19),c=a(20),r=a(22),l=a(21),s=a(0),i=a.n(s),o=a(442),u=(a(4),a(27)),m=a(502),d=a(415),p=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e,c){var r;return Object(n.a)(this,a),(r=t.call(this,e,c))._isMounted=!1,r.onClickHandle=function(e){r.props.deleteCategory(e)},r.state={data:[]},r}return Object(c.a)(a,[{key:"componentWillMount",value:function(){this._isMounted=!0,this._isMounted&&this.props.getCategories()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;console.log("CategoryPage props : ",this.props);var t=this.props.categoryList||[];return i.a.createElement("div",{className:"app-wrapper"},i.a.createElement(o.a,{match:this.props.match,title:"Category Page"}),i.a.createElement("div",{className:"row mb-md-3"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"jr-card"},i.a.createElement("div",{className:"jr-card-header d-flex align-items-center"},i.a.createElement("h3",{className:"mb-0"},"Category List")),i.a.createElement("div",{className:"table-responsive-material"},i.a.createElement("table",{className:"default-table table-bordered table table-md table-hover"},i.a.createElement("thead",{className:"th-border-b"},i.a.createElement("tr",null,i.a.createElement("th",null,"No"),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Description"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,t.map((function(t,a){return"admin"===t.role&&"btn-success","content"===t.role&&"btn-info",i.a.createElement("tr",{key:a},i.a.createElement("td",null,a+1),i.a.createElement("td",null,t.name),i.a.createElement("td",null,t.description),i.a.createElement("td",null,i.a.createElement(d.a,{variant:"contained",color:"secondary",className:"mr-2",onClick:function(){return e.onClickHandle(t.id)}},"Delete")))})))))))))}}]),a}(i.a.Component);t.default=Object(u.c)((function(e){return{categoryList:e.category.categoryList}}),{getCategories:m.b,deleteCategory:m.a})(p)}}]);
//# sourceMappingURL=6.044c92ad.chunk.js.map