(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,o,t){"use strict";t.r(o);t(151);var i=t(7),a=t.n(i),n=t(47),c=t.n(n),l=(t(46),t(72),t(73),t(0)),g=t.n(l),r=t(161),s=t(162),u=t.n(s),p=t(148),b=t.n(p),f=t(144),_=t(147),d=t(145),v=t(160),m=t(159).documentToHtmlString,h=t(194),x=[],j=v.createClient({space:"i9ffcls8piwd",accessToken:"0e901bffbe4847589adf6f981bf030c8d6071e5561d8a1ccd54114e98bc63191"});h.keys().forEach(function(e){var o={};o.src=h(e),o.width=4,o.height=3,x.push(o)});var E=function(e){function o(){var o;return(o=e.call(this)||this).state={currentImage:0,data:null},o.closeLightbox=o.closeLightbox.bind(c()(c()(o))),o.openLightbox=o.openLightbox.bind(c()(c()(o))),o.gotoNext=o.gotoNext.bind(c()(c()(o))),o.gotoPrevious=o.gotoPrevious.bind(c()(c()(o))),o}a()(o,e);var t=o.prototype;return t.componentDidMount=function(){var e,o=this;j.getEntry("4MykPA3pSoQaUGwGW0q82e").then(function(t){e=m(t.fields.bottiglieVasetti),o.setState({data:e})})},t.openLightbox=function(e,o){this.setState({currentImage:o.index,lightboxIsOpen:!0})},t.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},t.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},t.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},t.render=function(){var e=this.state.data;return g.a.createElement(f.a,null,g.a.createElement(_.a,null),g.a.createElement("div",{className:"wrapper"},g.a.createElement("div",{className:"container "+b.a.height100},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col"},g.a.createElement("div",{className:b.a.content+" container",dangerouslySetInnerHTML:{__html:e}})),g.a.createElement("div",{className:"container "+b.a.gallery},g.a.createElement(r.a,{photos:x,onClick:this.openLightbox,margin:12}),g.a.createElement(u.a,{images:x,onClose:this.closeLightbox,onClickPrev:this.gotoPrevious,onClickNext:this.gotoNext,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen}))))),g.a.createElement(d.a,null))},o}(g.a.Component);o.default=E},148:function(e,o,t){e.exports={title:"other-module--title--1Lwc_",post:"other-module--post--3Ec0d",content:"other-module--content--No76_",gallery:"other-module--gallery--3WCA1"}},158:function(e,o){},194:function(e,o,t){var i={"./luico-enologia_genova__bottiglie_200ml.jpg":195,"./luico-enologia_genova_bottiglie-grandi.jpg":196,"./luico-enologia_genova_bottiglie-olio.jpg":197,"./luico-enologia_genova_bottiglie-per-vino.jpg":198,"./luico-enologia_genova_bottiglie_100ml.jpg":199,"./luico-enologia_genova_bottiglie_40ml.jpg":200,"./luico-enologia_genova_bottiglie_500ml.jpg":201,"./luico-enologia_genova_vasi-bormioli.jpg":202,"./luico-enologia_genova_vasi-con-tappo-in-sughero.jpg":203,"./luico-enologia_genova_vasi-per-acciughe.jpg":204,"./luico-enologia_genova_vasi-piccoli.jpg":205,"./luico-enologia_genova_vasi-standard.jpg":206};function a(e){var o=n(e);return t(o)}function n(e){var o=i[e];if(!(o+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o}a.keys=function(){return Object.keys(i)},a.resolve=n,e.exports=a,a.id=194},195:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova__bottiglie_200ml-786d0619be0763a3199e118ce77dc193.jpg"},196:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_bottiglie-grandi-7c850fe0db9d4c5b34399cc188e2bf6e.jpg"},197:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_bottiglie-olio-8ee273a0f9c46a315208267b4f84ac61.jpg"},198:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_bottiglie-per-vino-58b2565b1fad6e8ea16283b4c0671cbb.jpg"},199:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_bottiglie_100ml-001b95273c23a2f8909b33fd76d3a076.jpg"},200:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_bottiglie_40ml-69f343e6404e352c05646e46a9e55fb3.jpg"},201:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_bottiglie_500ml-c8104e245894e5d899e94f792d28fd29.jpg"},202:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_vasi-bormioli-7ff0bb8a2358b3fa9984b3c8b24c92f0.jpg"},203:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_vasi-con-tappo-in-sughero-d64077661b32b4f9698a4a6a9d84063e.jpg"},204:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_vasi-per-acciughe-72c240b25bda15225b72f1c95b1e15e5.jpg"},205:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_vasi-piccoli-8a62eb72f2a7d920dfa01f2aef8c96e1.jpg"},206:function(e,o,t){e.exports=t.p+"static/luico-enologia_genova_vasi-standard-87bd7e0f25dcdba148a5a9d9c446f1ef.jpg"}}]);
//# sourceMappingURL=component---src-pages-bottiglie-vasetti-js-7e48c745f87cb7015606.js.map