(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{304:function(e,t,r){"use strict";r.r(t);r(12);var n=r(59),c=(r(41),r(9)),l=r(13),o=r(14),d=r(60),f=r(34),h=r(61),v=r(22),_=r(3),m=r(296),y=r(299),j=function(e,t,r,desc){var n,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(c<3?n(l):c>3?n(t,r,l):n(t,r))||l);return c>3&&l&&Object.defineProperty(t,r,l),l},O=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"expandedClasses",get:function(){return this.expanded?"inverted":""}}]),t}(_.default);j([Object(m.Prop)({type:Object})],O.prototype,"place",void 0),j([Object(m.Prop)({type:Boolean,default:!1})],O.prototype,"expanded",void 0);var k=O=j([Object(m.Component)({components:{CollapseTransition:y.a}})],O),C=r(42),x=Object(C.a)(k,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card__header",class:e.expandedClasses},[r("div",{staticClass:"place__info"},[r("div",{staticClass:"place__name"},[e._v(e._s(e.place.name))]),e._v(" "),r("div",{staticClass:"place__category--supermarket",class:e.expandedClasses},[e._v("\n        Supermarket\n      ")])]),e._v(" "),r("div",{staticClass:"place__icon--supermaket",class:e.expandedClasses})]),e._v(" "),e.expanded?e._e():r("hr"),e._v(" "),r("div",{staticClass:"card__details"},[r("ul",[r("li",[r("i",{staticClass:"place-details__icon--address"}),e._v(e._s(e.place.address))])]),e._v(" "),r("collapse-transition",[e.expanded?r("ul",[e.place.hours?r("li",[r("i",{staticClass:"place-details__icon--hours"}),e._v(e._s(e.place.hours)+"\n        ")]):e._e(),e._v(" "),e.place.phone?r("li",[r("i",{staticClass:"place-details__icon--phone"}),e._v(e._s(e.place.phone)+"\n        ")]):e._e(),e._v(" "),e.place.website?r("li",[r("i",{staticClass:"place-details__icon--website"}),r("a",{attrs:{href:e.place.website,target:"_blank"}},[e._v(e._s(e.place.website))])]):e._e()]):e._e()])],1),e._v(" "),e.expanded?r("hr"):e._e(),e._v(" "),e.expanded?r("div",{staticClass:"card__footer"},[r("a",{attrs:{href:""}},[e._v("Do you see something wrong?")])]):e._e()])},[],!1,null,null,null).exports,w=function(e,t,r,desc){var n,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(c<3?n(l):c>3?n(t,r,l):n(t,r))||l);return c>3&&l&&Object.defineProperty(t,r,l),l},R=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),t}(_.default);w([Object(m.Prop)({type:String})],R.prototype,"name",void 0),w([Object(m.Prop)({type:String})],R.prototype,"category",void 0);var P=R=w([Object(m.Component)({})],R),S=Object(C.a)(P,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"marker-popup__wrapper"},[this._m(0),this._v(" "),t("div",{staticClass:"marker-popup__info"},[t("div",{staticClass:"place__name"},[this._v(this._s(this.name))]),this._v(" "),t("div",{staticClass:"place__category--supermarket"},[this._v("Supermarket")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"marker-popup__icon"},[t("div",{staticClass:"icon-place__supermarket--hover"})])}],!1,null,null,null).exports,I=function(e,t,r,desc){var n,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(c<3?n(l):c>3?n(t,r,l):n(t,r))||l);return c>3&&l&&Object.defineProperty(t,r,l),l},$=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).apply(this,arguments))).center=[38.731796,-9.139386],e.centerMoved=!1,e.showSearchHere=!1,e.centerZoom=15,e.$refs={map:Object},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"onUpdateCenter",value:function(data){this.center=data,this.showSearchHere=!0}},{key:"onSearchHere",value:function(){this.$emit("searchHere",this.center),this.showSearchHere=!1}},{key:"setCenter",value:function(e,t){this.$refs.map.mapObject.flyTo([e,t],this.centerZoom)}},{key:"markerIconAnchor",value:function(marker){return marker.active?[25,72]:[16,48]}},{key:"markerIconImage",value:function(marker){return marker.active?"assets/img/pin-supermarket-selected.svg":"assets/img/pin-supermarket.svg"}},{key:"mapTileServerUrl",get:function(){return"https://api.mapbox.com/styles/v1/gerdadz/cjw6sxpsg41x81cog0v5rwuif/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VyZGFkeiIsImEiOiJjanc2c3duZ3MwM2U1NDZvN3Q2dWQ2bmZ5In0.il7tfDhcOuKzWITbIInacA"}}]),t}(_.default);I([Object(m.Prop)({type:Array,default:function(){return[]}})],$.prototype,"markers",void 0);var H=$=I([Object(m.Component)({components:{MarkerPopup:S}})],$),E=Object(C.a)(H,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"map__wrapper"},[e.showSearchHere?r("button",{staticClass:"map__search-here",on:{click:e.onSearchHere}},[e._v("\n    Search This Area\n  ")]):e._e(),e._v(" "),r("no-ssr",[r("l-map",{ref:"map",attrs:{zoom:13,center:e.center},on:{"update:center":e.onUpdateCenter}},[r("l-tile-layer",{attrs:{url:e.mapTileServerUrl,attribution:"Thanks"}}),e._v(" "),r("l-control-attribution",{attrs:{prefix:"A custom prefix"}}),e._v(" "),e._l(e.markers,function(marker){return r("l-marker",{key:marker.name,attrs:{"lat-lng":marker.position}},[r("l-popup",[r("marker-popup",{attrs:{name:marker.name,category:"supermarket"}})],1),e._v(" "),r("l-icon",{attrs:{"icon-anchor":e.markerIconAnchor(marker)}},[r("img",{attrs:{src:e.markerIconImage(marker)}})])],1)})],2)],1)],1)},[],!1,null,null,null).exports,T=r(300),D=r.n(T),Z=function(e,t,r,desc){var n,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(c<3?n(l):c>3?n(t,r,l):n(t,r))||l);return c>3&&l&&Object.defineProperty(t,r,l),l},A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).apply(this,arguments))).dummy=D.a.range(12),e.results=[],e.expandedResult=null,e.$refs={map:E},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"onSearchHere",value:function(data){console.log("onSearchHere"),this.fetchPlaces(data.lat,data.lng)}},{key:"fetchPlaces",value:function(){var e=Object(c.a)(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.$get("".concat("http://157.230.12.88:8080/api","/places/search?lat=").concat(t,"&lng=").concat(r));case 2:n=e.sent,this.results=n.data;case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"expandResult",value:function(e){if(console.log("expandResult",e),this.expandedResult===e)this.expandedResult=null;else{this.expandedResult=e;var t=Object(n.a)(this.markers[e].position,2),r=t[0],c=t[1];this.$refs.map.setCenter(r,c)}}},{key:"mounted",value:function(){this.fetchPlaces(38.731796,-9.139386)}},{key:"markers",get:function(){var e=this;return this.results?this.results.map(function(data,t){return{position:[data.latitude,data.longitude],permalink:data.permalink,name:data.name,active:t===e.expandedResult}}):[]}}]),t}(_.default),M=A=Z([Object(m.Component)({components:{TheMap:E,Card:x}})],A),U=Object(C.a)(M,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"side"},[e.results.length>0?r("div",{staticClass:"results__summary"},[e._v("\n        "+e._s(e.results.length)+" Ecologic sources\n      ")]):e._e(),e._v(" "),r("div",{staticClass:"results"},e._l(e.results,function(t,n){return r("card",{key:n,attrs:{place:t,expanded:e.expandedResult==n},nativeOn:{click:function(t){return e.expandResult(n)}}})}),1)]),e._v(" "),r("div",{staticClass:"map-wrapper"},[r("the-map",{ref:"map",attrs:{markers:e.markers},on:{searchHere:e.onSearchHere}})],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav"},[t("div",{staticClass:"nav__content"},[t("div",{staticClass:"nav__logo"},[this._v("SourceMap")]),this._v(" "),t("div",{staticClass:"nav__menu"},[t("ul",[t("li",[t("a",{attrs:{href:""}},[this._v("What is this?")])]),this._v(" "),t("li",{staticClass:"highlight"},[t("a",{attrs:{href:""}},[this._v("Contribute")])])])])])])}],!1,null,null,null);t.default=U.exports}}]);