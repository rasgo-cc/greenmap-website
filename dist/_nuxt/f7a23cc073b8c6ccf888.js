(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{304:function(e,t,n){"use strict";n.r(t);n(12);var r=n(59),c=(n(41),n(9)),l=n(13),o=n(14),d=n(60),f=n(34),v=n(61),h=n(22),_=n(3),m=n(296),y=n(299),O=function(e,t,n,desc){var r,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(c<3?r(l):c>3?r(t,n,l):r(t,n))||l);return c>3&&l&&Object.defineProperty(t,n,l),l},j=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(o.a)(t,[{key:"expandedClasses",get:function(){return this.expanded?"inverted":""}}]),t}(_.default);O([Object(m.Prop)({type:Object})],j.prototype,"place",void 0),O([Object(m.Prop)({type:Boolean,default:!1})],j.prototype,"expanded",void 0);var k=j=O([Object(m.Component)({components:{CollapseTransition:y.a}})],j),C=n(42),x=Object(C.a)(k,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card__header",class:e.expandedClasses},[n("div",{staticClass:"place__info"},[n("div",{staticClass:"place__name"},[e._v(e._s(e.place.name))]),e._v(" "),n("div",{staticClass:"place__category--supermarket",class:e.expandedClasses},[e._v("\n        Supermarket\n      ")])]),e._v(" "),n("div",{staticClass:"place__icon--supermaket",class:e.expandedClasses})]),e._v(" "),e.expanded?e._e():n("hr"),e._v(" "),n("div",{staticClass:"card__details"},[n("ul",[n("li",[n("i",{staticClass:"place-details__icon--address"}),e._v(e._s(e.place.address))])]),e._v(" "),n("collapse-transition",[e.expanded?n("ul",[e.place.hours?n("li",[n("i",{staticClass:"place-details__icon--hours"}),e._v(e._s(e.place.hours)+"\n        ")]):e._e(),e._v(" "),e.place.phone?n("li",[n("i",{staticClass:"place-details__icon--phone"}),e._v(e._s(e.place.phone)+"\n        ")]):e._e(),e._v(" "),e.place.website?n("li",[n("i",{staticClass:"place-details__icon--website"}),n("a",{attrs:{href:e.place.website,target:"_blank"}},[e._v(e._s(e.place.website))])]):e._e()]):e._e()])],1),e._v(" "),e.expanded?n("hr"):e._e(),e._v(" "),e.expanded?n("div",{staticClass:"card__footer"},[n("a",{attrs:{href:""}},[e._v("Do you see something wrong?")])]):e._e()])},[],!1,null,null,null).exports,w=function(e,t,n,desc){var r,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(c<3?r(l):c>3?r(t,n,l):r(t,n))||l);return c>3&&l&&Object.defineProperty(t,n,l),l},R=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),t}(_.default);w([Object(m.Prop)({type:String})],R.prototype,"name",void 0),w([Object(m.Prop)({type:String})],R.prototype,"category",void 0);var P=R=w([Object(m.Component)({})],R),S=Object(C.a)(P,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"marker-popup__wrapper"},[this._m(0),this._v(" "),t("div",{staticClass:"marker-popup__info"},[t("div",{staticClass:"place__name"},[this._v(this._s(this.name))]),this._v(" "),t("div",{staticClass:"place__category--supermarket"},[this._v("Supermarket")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"marker-popup__icon"},[t("div",{staticClass:"icon-place__supermarket--hover"})])}],!1,null,null,null).exports,I=function(e,t,n,desc){var r,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(c<3?r(l):c>3?r(t,n,l):r(t,n))||l);return c>3&&l&&Object.defineProperty(t,n,l),l},$=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).apply(this,arguments))).center=[38.731796,-9.139386],e.centerMoved=!1,e.showSearchHere=!1,e.$refs={map:Object},e}return Object(v.a)(t,e),Object(o.a)(t,[{key:"onUpdateCenter",value:function(data){this.center=data,this.showSearchHere=!0}},{key:"onSearchHere",value:function(){this.$emit("searchOn",this.center),this.showSearchHere=!1}},{key:"setCenter",value:function(e,t){console.log("setCenter",e,t),this.$refs.map.mapObject.flyTo([e,t],15)}},{key:"markerIconAnchor",value:function(marker){return marker.active?[25,72]:[16,48]}},{key:"markerIconImage",value:function(marker){return marker.active?"assets/img/pin-supermarket-selected.svg":"assets/img/pin-supermarket.svg"}},{key:"mapTileServerUrl",get:function(){return"https://api.mapbox.com/styles/v1/gerdadz/cjw6sxpsg41x81cog0v5rwuif/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VyZGFkeiIsImEiOiJjanc2c3duZ3MwM2U1NDZvN3Q2dWQ2bmZ5In0.il7tfDhcOuKzWITbIInacA"}}]),t}(_.default);I([Object(m.Prop)({type:Array,default:function(){return[]}})],$.prototype,"markers",void 0);var E=$=I([Object(m.Component)({components:{MarkerPopup:S}})],$),T=Object(C.a)(E,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map__wrapper"},[e.showSearchHere?n("button",{staticClass:"map__search-here",on:{click:e.onSearchHere}},[e._v("\n    Search This Area\n  ")]):e._e(),e._v(" "),n("no-ssr",[n("l-map",{ref:"map",attrs:{zoom:13,center:e.center},on:{"update:center":e.onUpdateCenter}},[n("l-tile-layer",{attrs:{url:e.mapTileServerUrl,attribution:"Thanks"}}),e._v(" "),n("l-control-attribution",{attrs:{prefix:"A custom prefix"}}),e._v(" "),e._l(e.markers,function(marker){return n("l-marker",{key:marker.name,attrs:{"lat-lng":marker.position}},[n("l-popup",[n("marker-popup",{attrs:{name:marker.name,category:"supermarket"}})],1),e._v(" "),n("l-icon",{attrs:{"icon-anchor":e.markerIconAnchor(marker)}},[n("img",{attrs:{src:e.markerIconImage(marker)}})])],1)})],2)],1)],1)},[],!1,null,null,null).exports,D=n(300),U=n.n(D),A=function(e,t,n,desc){var r,c=arguments.length,l=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(c<3?r(l):c>3?r(t,n,l):r(t,n))||l);return c>3&&l&&Object.defineProperty(t,n,l),l},H=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).apply(this,arguments))).dummy=U.a.range(12),e.results=[],e.expandedResult=null,e.$refs={map:T},e}return Object(v.a)(t,e),Object(o.a)(t,[{key:"onUpdateCenter",value:function(data){this.fetchPlaces(data.lat,data.lng)}},{key:"fetchPlaces",value:function(){var e=Object(c.a)(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.$get("".concat("http://157.230.12.88:8080/api","/places/search?lat=").concat(t,"&lng=").concat(n));case 2:r=e.sent,this.results=r.data;case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"expandResult",value:function(e){if(console.log("expandResult",e),this.expandedResult===e)this.expandedResult=null;else{this.expandedResult=e;var t=Object(r.a)(this.markers[e].position,2),n=t[0],c=t[1];this.$refs.map.setCenter(n,c)}}},{key:"mounted",value:function(){this.fetchPlaces(38.731796,-9.139386)}},{key:"markers",get:function(){var e=this;return this.results?this.results.map(function(data,t){return{position:[data.latitude,data.longitude],permalink:data.permalink,name:data.name,active:t===e.expandedResult}}):[]}}]),t}(_.default),M=H=A([Object(m.Component)({components:{TheMap:T,Card:x}})],H),Z=Object(C.a)(M,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"side"},[e.results.length>0?n("div",{staticClass:"results__summary"},[e._v("\n        "+e._s(e.results.length)+" Ecologic sources\n      ")]):e._e(),e._v(" "),n("div",{staticClass:"results"},e._l(e.results,function(t,r){return n("card",{key:r,attrs:{place:t,expanded:e.expandedResult==r},nativeOn:{click:function(t){return e.expandResult(r)}}})}),1)]),e._v(" "),n("div",{staticClass:"map-wrapper"},[n("the-map",{ref:"map",attrs:{markers:e.markers},on:{"update:center":e.onUpdateCenter}})],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav"},[t("div",{staticClass:"nav__content"},[t("div",{staticClass:"nav__logo"},[this._v("SourceMap")]),this._v(" "),t("div",{staticClass:"nav__menu"},[t("ul",[t("li",[t("a",{attrs:{href:""}},[this._v("What is this?")])]),this._v(" "),t("li",{staticClass:"highlight"},[t("a",{attrs:{href:""}},[this._v("Contribute")])])])])])])}],!1,null,null,null);t.default=Z.exports}}]);