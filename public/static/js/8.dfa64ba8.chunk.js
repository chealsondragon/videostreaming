(this["webpackJsonpjumbo-react"]=this["webpackJsonpjumbo-react"]||[]).push([[8],{442:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(457),r=t(458),s=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return l.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},l.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),l.a.createElement(c.a,{className:"mb-0",tag:"nav"},n.map((function(e,a){return l.a.createElement(r.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:s(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},457:function(e,a,t){"use strict";var n=t(1),l=t(23),c=t(0),r=t.n(c),s=t(2),i=t.n(s),o=t(60),d=t.n(o),m=t(15),u={tag:m.d,listTag:m.d,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,s=e.children,i=e.tag,o=e.listTag,u=e["aria-label"],p=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(m.b)(d()(a),c),b=Object(m.b)(d()("breadcrumb",t),c);return r.a.createElement(i,Object(n.a)({},p,{className:h,"aria-label":u}),r.a.createElement(o,{className:b},s))};p.propTypes=u,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},458:function(e,a,t){"use strict";var n=t(1),l=t(23),c=t(0),r=t.n(c),s=t(2),i=t.n(s),o=t(60),d=t.n(o),m=t(15),u={tag:m.d,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.active,s=e.tag,i=Object(l.a)(e,["className","cssModule","active","tag"]),o=Object(m.b)(d()(a,!!c&&"active","breadcrumb-item"),t);return r.a.createElement(s,Object(n.a)({},i,{className:o,"aria-current":c?"page":void 0}))};p.propTypes=u,p.defaultProps={tag:"li"},a.a=p},463:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=function(e){var a=e.heading,t=e.children,n=e.styleName,c=e.cardStyle,r=e.childrenStyle,s=e.headerOutside,i=e.headingStyle;return l.a.createElement("div",{className:"".concat(n)},s&&l.a.createElement("div",{className:"jr-entry-header"},l.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&l.a.createElement("div",{className:"entry-description"},t[0])),l.a.createElement("div",{className:"jr-card ".concat(c)},!s&&a&&l.a.createElement("div",{className:"jr-card-header ".concat(i)},l.a.createElement("h3",{className:"card-heading"},a),t.length>1&&l.a.createElement("div",{className:"sub-heading"},t[0])),l.a.createElement("div",{className:"jr-card-body ".concat(r)},t.length>1?t[1]:t)))};a.a=c,c.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},796:function(e,a,t){"use strict";t.r(a);var n=t(19),l=t(20),c=t(22),r=t(21),s=t(0),i=t.n(s),o=t(442),d=t(463),m=t(415),u=t(56),p=t(27),h=t(8),b=[],g=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this))._isMounted=!1,e.onHandleClick=function(a){e.props.deleteVideo(a)},e.state={data:b},e}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this._isMounted=!0,this._isMounted&&this.props.getVideos()}},{key:"render",value:function(){var e=this;console.log("VideoPage props : ",this.props);var a=this.props.videoList||[];return i.a.createElement("div",{className:"app-wrapper"},i.a.createElement(o.a,{match:this.props.match,title:"Video Page"}),i.a.createElement("div",{className:"row"},i.a.createElement(d.a,{styleName:"col-lg-12",heading:"Video Content"},i.a.createElement("div",{className:"table-responsive-material"},i.a.createElement("table",{className:"default-table table-unbordered table table-sm table-hover"},i.a.createElement("thead",{className:"th-border-b"},i.a.createElement("tr",null,i.a.createElement("th",null,"No"),i.a.createElement("th",null,"Title"),i.a.createElement("th",null,"Category"),i.a.createElement("th",null,"Description"),i.a.createElement("th",null,"Rating"),i.a.createElement("th",null,"Views"),i.a.createElement("th",null,"Created At"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,a.map((function(a,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,t+1),i.a.createElement("td",null,a.title),i.a.createElement("td",null,i.a.createElement("span",{className:"badge badge-light"},a.category.name)),i.a.createElement("td",null,a.description),i.a.createElement("td",null,a.rating),i.a.createElement("td",null,a.views),i.a.createElement("td",null,a.created_at),i.a.createElement("td",null,i.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){return e.onHandleClick(a.id)}},"Remove")))}))))))))}}]),t}(i.a.Component);a.default=Object(p.c)((function(e){return{videoList:e.video.videoList}}),{getVideos:function(){return function(e){e({type:h.j}),u.a.get("/videos").then((function(a){var t=a.data;e({type:h.k}),e({type:h.z,payload:t.videos})})).catch((function(a){e({type:h.i,payload:a.message})}))}},deleteVideo:function(e){return function(a){a({type:h.j}),u.a.delete("/video/".concat(e)).then((function(e){var t=e.data;a({type:h.k}),a({type:h.z,payload:t.videos})})).catch((function(e){a({type:h.i,payload:e.message})}))}}})(g)}}]);
//# sourceMappingURL=8.dfa64ba8.chunk.js.map