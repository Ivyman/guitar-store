(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[7],{115:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var l=a(32),n=a(33),r=a(35),m=a(34),c=a(36),u=a(0),s=a.n(u),o=a(22),i=a(37),d=function(e){return e.summary},E=a(38),b=a(39),y=a(2),h=a(17),f=(a(115),function(e){var t=e.data,a=t.cartItems,l=t.summaryData;return s.a.createElement("div",{className:"summary-sheet"},s.a.createElement("div",{className:"summary-sheet__hero"}),s.a.createElement("h2",{className:"summary-sheet__title"},"Summary Sheet"),s.a.createElement("table",{className:"summary-sheet__table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Contact information"),s.a.createElement("td",null,"Payment method"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,l.name),s.a.createElement("td",null,y.e.find((function(e){return e.value===l.payment})).name)),s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"2"},l.email)))),s.a.createElement("table",{className:"summary-sheet__table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Delivery address"),s.a.createElement("td",null,"Delivery option"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,l.country,", ",l.postcode),s.a.createElement("td",null,y.c.find((function(e){return e.value===l.delivery})).name)),s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"2"},l.address,", ",l.city)),s.a.createElement("tr",null,s.a.createElement("td",null,l.phone)))),s.a.createElement("table",{className:"summary-sheet__table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"3"},"Products"))),s.a.createElement("tbody",null,a.orders.map((function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.quantity),s.a.createElement("td",null,Object(h.b)(e.totalItemPrice)))}))),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"3",className:"summary-sheet__table-summary"},"Summary: ",s.a.createElement("span",null,Object(h.b)(a.totalPrice)))))),s.a.createElement("div",{className:"text-center"},s.a.createElement(b.a,{main:!0,linkTo:y.g.catalog.link},"Back to catalog")))});f.defaultName="SummaryList";var p=f,_=a(99),N=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cartItems,a=e.summaryData;return s.a.createElement(s.a.Fragment,null,t.amount?s.a.createElement(s.a.Fragment,null,s.a.createElement(_.a,{crumbs:[["Summary"]]}),s.a.createElement("h1",{className:"main-subtitle text-center"},"Thank you for choosing our store!"),s.a.createElement(p,{data:{cartItems:t,summaryData:a}})):s.a.createElement(E.a,{message:"No any data for showing yet!"}))}}]),t}(s.a.PureComponent);N.defaultName="Summary",N.defaultProps={cartItems:{amount:0,orders:[],totalPrice:0},summaryData:{}};var v=Object(o.b)((function(e){return{cartItems:Object(i.c)(e),summaryData:d(e)}}))(N);t.default=v},98:function(e,t,a){},99:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(7),m=a(2),c=(a(98),function(e){var t=e.crumbs;return n.a.createElement("ul",{className:"breadcrumbs"},n.a.createElement("li",{className:"breadcrumbs__item breadcrumbs__item--home"},n.a.createElement(r.b,{className:"breadcrumbs__item-link",to:m.g.home.link},"Home")),t.map((function(e,a){return t.length-1===a?n.a.createElement("li",{className:"breadcrumbs__item",key:e[0]},e[0]):n.a.createElement("li",{className:"breadcrumbs__item",key:e[0]},n.a.createElement(r.b,{className:"breadcrumbs__item-link",to:e[1]},e[0]))})))});c.defaultName="Breadcrumbs";var u=c;t.a=u}}]);
//# sourceMappingURL=7.3caa72ce.chunk.js.map