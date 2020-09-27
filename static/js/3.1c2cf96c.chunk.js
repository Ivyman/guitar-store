(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[3],{100:function(e,t,a){},101:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=(a(100),function(e){var t=e.amount,a=e.small,r=e.onAddToCart,c=e.onRemoveFromCart,l=e.list;return n.a.createElement("div",{className:"amount-control ".concat(a?"amount-control--small":""," ").concat(l?"amount-control--list":"")},t?n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:c,className:"amount-control__minus"},"-"),n.a.createElement("span",{className:"amount-control__number"},t),n.a.createElement("button",{onClick:r,className:"amount-control__plus"},"+")):n.a.createElement("button",{onClick:r,className:"amount-control__add"},"Add to cart"))});c.defaultName="AmountControl",c.defaultProps={amount:0,small:!1,list:!1};var l=c;t.a=l},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(7),l=a(2),o=(a(103),function(e){var t=e.thumb,a=e.name,r=e.category,o=e.productId,m=e.small,i=e.amount;return n.a.createElement("div",{className:"thumbnail-box ".concat(m?"thumbnail-box--small":"")},n.a.createElement("div",{className:"thumbnail-box__image"},0!==i&&n.a.createElement("span",{className:"thumbnail-box__item-amount"},i),n.a.createElement("img",{src:t,alt:a})),n.a.createElement("div",{className:"thumbnail-box__content"},n.a.createElement(c.b,{className:"thumbnail-box__title",to:l.g.product.link(o),target:"_blank"},a),n.a.createElement("p",{className:"thumbnail-box__category"},r)))});o.defaultName="ThumbnailBox",o.defaultProps={thumb:"",name:"Thumbnail",category:"No category",productId:0,small:!1,amount:0};var m=o,i=a(101),s=a(38),u=a(17),d=(a(104),function(e){var t=e.rwd,a=e.cartItems,r=e.small,c=e.onAddToCart,l=e.onRemoveFromCart,o=e.onRemoveAllItemsFromCart;return n.a.createElement("div",{className:"summary-list ".concat(t?"summary-list--rwd":"")},r&&(a.amount?n.a.createElement("table",{className:"summary-list__table"},n.a.createElement("tbody",null,a.orders.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,n.a.createElement(m,{small:!0,amount:e.quantity,productId:e.id,name:e.name,thumb:e.thumb,category:e.category})),n.a.createElement("td",null,Object(u.b)(e.totalItemPrice)))})),n.a.createElement("tr",{className:"summary-list__summary summary-list__summary--small"},n.a.createElement("td",{colSpan:"2"},"Summary:"," ",n.a.createElement("span",{className:"summary-list__summary-price"},Object(u.b)(a.totalPrice)))))):n.a.createElement(s.a,{message:"Add some items to your cart!"})),!r&&(a.amount?n.a.createElement("table",{className:"summary-list__table"},n.a.createElement("tbody",null,a.orders.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,n.a.createElement(m,{productId:e.id,name:e.name,thumb:e.thumb,category:e.category})),n.a.createElement("td",null,n.a.createElement(i.a,{small:!0,amount:e.quantity,onAddToCart:function(){return c({id:e.id,name:e.name,thumb:e.thumb,price:e.price,category:e.category.name})},onRemoveFromCart:function(){return l(e.id)}})),n.a.createElement("td",null,Object(u.b)(e.totalItemPrice)),n.a.createElement("td",{className:"text-center"},n.a.createElement("button",{onClick:function(){return o(e.id)},className:"close-button close-button--small"})))})),n.a.createElement("tr",{className:"summary-list__summary"},n.a.createElement("td",{colSpan:"4"},"Summary:"," ",n.a.createElement("span",{className:"summary-list__summary-price"},Object(u.b)(a.totalPrice)))))):n.a.createElement(s.a,{message:"Your cart is empty"})))});d.defaultName="SummaryList",d.defaultProps={onAddToCart:null,onRemoveFromCart:null,onRemoveAllItemsFromCart:null,cartItems:{amount:0,orders:[],totalPrice:0},rwd:!1,small:!1};var f=d;t.a=f},107:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=(a(105),function(e){var t=e.children,a=e.value,r=e.onChange,c=e.name,l=e.merge,o=e.hasError;return n.a.createElement("label",{className:"select ".concat(l?"select--merge":""," ").concat(o?"select--error":"")},n.a.createElement("select",{name:c,value:a,onChange:r},t))});c.defaultName="Select",c.defaultProps={name:"Select",merge:!1,hasError:!1};var l=c;t.a=l},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(32),c=a(33),l=a(35),o=a(34),m=a(36),i=a(0),s=a.n(i),u=a(22),d=a(37),f=a(2),h=a(17),p=(a(116),function(e){var t=e.message,a=e.appearance;return s.a.createElement("div",{className:"throbber  ".concat(a?"throbber--appearance":"")},s.a.createElement("p",{className:"throbber__message"},t),s.a.createElement("svg",{width:"100px",height:"30px",viewBox:"0 35 100 30",preserveAspectRatio:"xMidYMid"},s.a.createElement("defs",null,s.a.createElement("clipPath",{"ng-attr-id":"{{config.cpid}}",x:"0",y:"0",width:"100",height:"100",id:"lds-colorbar-cpid-9d2a9cfa91489"},s.a.createElement("path",{d:"M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z"}))),s.a.createElement("path",{fill:"none","ng-attr-stroke":"{{config.cf}}",strokeWidth:"2.7928",d:"M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z",stroke:"#5d5d5d"}),s.a.createElement("g",{"ng-attr-clip-path":"url(#{{config.cpid}})",clipPath:"url(#lds-colorbar-cpid-9d2a9cfa91489)"},s.a.createElement("g",{transform:"translate(7.1254 0)"},s.a.createElement("rect",{x:"-100",y:"0",width:"25",height:"100","ng-attr-fill":"{{config.c1}}",fill:"#f47e60"}),s.a.createElement("rect",{x:"-75",y:"0",width:"25",height:"100","ng-attr-fill":"{{config.c2}}",fill:"#f8b26a"}),s.a.createElement("rect",{x:"-50",y:"0",width:"25",height:"100","ng-attr-fill":"{{config.c3}}",fill:"#abbd81"}),s.a.createElement("rect",{x:"-25",y:"0",width:"25",height:"100","ng-attr-fill":"{{config.c4}}",fill:"#849b87"}),s.a.createElement("rect",{x:"0",y:"0",width:"25",height:"100","ng-attr-fill":"{{config.c1}}",fill:"#f47e60"}),s.a.createElement("rect",{x:"25",y:"0",width:"25",height:"100","ng-attr-fill":"{{config.c2}}",fill:"#f8b26a"}),s.a.createElement("rect",{x:"50",y:"0",width:"25",height:"100","ng-attr-fill":"{{config.c3}}",fill:"#abbd81"}),s.a.createElement("rect",{x:"75",y:"0",width:"25",height:"100","ng-attr-fill":"{{config.c4}}",fill:"#849b87"}),s.a.createElement("animateTransform",{attributeName:"transform",type:"translate",calcMode:"linear",values:"0;100",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})))))});p.defaultName="LoadBar",p.defaultProps={message:"Loading...",appearance:!1};var b=p,E=a(99);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(m){n=!0,c=m}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=a(107);a(117);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var _=function(e){var t=e.onSettingsChange,a=e.hasError,n=e.fieldsWithError,c=g(Object(i.useState)({name:"",email:"",phone:"",payment:"",delivery:"",country:"",postcode:"",city:"",address:""}),2),l=c[0],o=c[1],m=function(e,t){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,Object(r.a)({},t,e.target.value)))};return Object(i.useEffect)((function(){return t(l)}),[l]),s.a.createElement("form",{className:"checkout-form",onSubmit:function(e){return e.preventDefault()}},a&&s.a.createElement("p",{className:"checkout-form__error"},"Fill in correctly all fields below!"),s.a.createElement("fieldset",{className:"checkout-form__fieldset"},s.a.createElement("legend",{className:"checkout-form__legend"},"Contact information"),s.a.createElement("input",{className:"input ".concat(n.includes("name")?"input--error":""),name:"name",type:"text",placeholder:"Name",value:l.name,onChange:function(e){return m(e,"name")}}),s.a.createElement("input",{className:"input ".concat(n.includes("email")?"input--error":""),name:"email",type:"email",placeholder:"Email",value:l.email,onChange:function(e){return m(e,"email")}}),s.a.createElement("input",{className:"input ".concat(n.includes("phone")?"input--error":""),name:"phone",type:"tel",placeholder:"Phone",value:l.phone,onChange:function(e){return m(e,"phone")}})),s.a.createElement("fieldset",{className:"checkout-form__fieldset"},s.a.createElement("legend",{className:"checkout-form__legend"},"Payment method"),s.a.createElement("div",{className:"radio-boxes ".concat(n.includes("payment")?"radio-boxes--error":"")},f.e.map((function(e){return s.a.createElement("span",{key:e.value,className:"radio-boxes__item radio-boxes__item--".concat(e.value)},s.a.createElement("input",{id:e.value,name:"payment",type:"radio",value:e.value,onChange:function(e){return m(e,"payment")}}),s.a.createElement("label",{htmlFor:e.value},e.name))})))),s.a.createElement("fieldset",{className:"checkout-form__fieldset"},s.a.createElement("legend",{className:"checkout-form__legend"},"Delivery option"),s.a.createElement(y.a,{hasError:n.includes("delivery"),name:"delivery",value:l.delivery,onChange:function(e){return m(e,"delivery")}},s.a.createElement("option",{value:"",disabled:!0},"Select delivery"),f.c.map((function(e){return s.a.createElement("option",{key:e.value,value:e.value},e.name)})))),s.a.createElement("fieldset",{className:"checkout-form__fieldset"},s.a.createElement("legend",{className:"checkout-form__legend"},"Delivery address"),s.a.createElement("input",{type:"text",className:"input ".concat(n.includes("country")?"input--error":""),name:"country",placeholder:"Country",value:l.country,onChange:function(e){return m(e,"country")}}),s.a.createElement("input",{type:"number",className:"input ".concat(n.includes("postcode")?"input--error":""),name:"postcode",placeholder:"Postcode",value:l.postcode,onChange:function(e){return m(e,"postcode")}}),s.a.createElement("input",{type:"text",className:"input ".concat(n.includes("city")?"input--error":""),name:"city",placeholder:"City",value:l.city,onChange:function(e){return m(e,"city")}}),s.a.createElement("input",{className:"input ".concat(n.includes("address")?"input--error":""),name:"address",type:"text",placeholder:"Address",value:l.address,onChange:function(e){return m(e,"address")}})))};_.defaultName="CheckoutForm",_.defaultProps={hasError:!1,fieldsWithError:[]};var N=_,O=(a(118),function(e){var t=e.onSettingsChange,a=e.hasFormError,r=e.fieldsWithError;return s.a.createElement(N,{onSettingsChange:t,hasError:a,fieldsWithError:r})});O.defaultName="CheckoutSettings",O.defaultProps={hasFormError:!1,fieldsWithError:[]};var C=O,k=a(106),j=a(39),P=a(45);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),m=0;m<r;m++)c[m]=arguments[m];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={settingsForm:{},fieldsWithError:[],hasFormError:!1,showThrobber:!1},a.handleSettingsChange=function(e){a.setState({settingsForm:x({},e),fieldsWithError:[],hasFormError:!1})},a.handlePayClick=function(){var e={},t=[];Object.entries(a.state.settingsForm).forEach((function(a){t.push(!a[1].length&&a[0]),e[a[0]]=a[1]})),Object(h.c)(a.state.settingsForm)?(a.setState({showThrobber:!0}),a.props.setSummaryData(e),setTimeout((function(){return a.props.history.push(f.g.summary.link)}),2e3)):a.setState({hasFormError:!0,fieldsWithError:t},(function(){return Object(h.g)(!0)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.cartItems,t=this.state,a=t.hasFormError,r=t.showThrobber,n=t.fieldsWithError;return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{crumbs:[["Checkout"]]}),s.a.createElement("h1",{className:"main-subtitle"},"Checkout"),r?s.a.createElement(b,{appearance:!0,message:"Payment loading..."}):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"columns"},s.a.createElement(C,{fieldsWithError:n,hasFormError:a,onSettingsChange:this.handleSettingsChange}),s.a.createElement(k.a,{small:!0,cartItems:e})),s.a.createElement("div",{className:"space-between margin-top"},s.a.createElement(j.a,{back:!0,linkTo:f.g.catalog.link},"Continue shopping"),0!==e.amount&&s.a.createElement(j.a,{main:!0,onClick:this.handlePayClick},"Pay"))))}}]),t}(s.a.Component);S.defaultName="Checkout",S.defaultProps={amount:0,orders:[],totalPrice:0};var F=Object(u.b)((function(e){return{cartItems:Object(d.c)(e)}}),(function(e){return{setSummaryData:function(t){return e(Object(P.b)(t))}}}))(S);t.default=F},98:function(e,t,a){},99:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(7),l=a(2),o=(a(98),function(e){var t=e.crumbs;return n.a.createElement("ul",{className:"breadcrumbs"},n.a.createElement("li",{className:"breadcrumbs__item breadcrumbs__item--home"},n.a.createElement(c.b,{className:"breadcrumbs__item-link",to:l.g.home.link},"Home")),t.map((function(e,a){return t.length-1===a?n.a.createElement("li",{className:"breadcrumbs__item",key:e[0]},e[0]):n.a.createElement("li",{className:"breadcrumbs__item",key:e[0]},n.a.createElement(c.b,{className:"breadcrumbs__item-link",to:e[1]},e[0]))})))});o.defaultName="Breadcrumbs";var m=o;t.a=m}}]);
//# sourceMappingURL=3.1c2cf96c.chunk.js.map