(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{133:function(e,n,t){"use strict";t.r(n);t(298),t(299),t(72),t(47),t(159),t(46);var a=t(7),r=t.n(a),c=t(0),s=t.n(c),l=t(301),i=t.n(l),o=t(145),m=t(149),u=t(146),p=t(398),f=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={images:!1},t}r()(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this;p.createClient({space:"4hdczd41xjc6",accessToken:"c00c5d9432352d25f5061332e3777f2932d20f1244fd89a0940a1ec15422b75c"}).getEntries({content_type:"gallery"}).then(function(e){return e.items}).then(function(e){var n=[];return Object.keys(e).map(function(t){var a={};a.link=e[t].fields.link,a.name=e[t].fields.name,a.image=e[t].fields.image.fields.file.url,n.push(a)}),n}).then(function(n){return e.setState({images:n})}).catch(console.error)},t.render=function(){var e=this.state.images;return s.a.createElement(o.a,null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"container "+i.a.height100},s.a.createElement(m.a,null),s.a.createElement("h1",null,s.a.createElement("span",{className:""+i.a.highlight},"Sponsor")),s.a.createElement("div",{className:"row"},e?Object.keys(e).map(function(n,t){return s.a.createElement("div",{className:"col "+i.a.sponsor,key:t},s.a.createElement("a",{href:e[n].link,target:"_blank"},s.a.createElement("img",{src:e[n].image,alt:""}),s.a.createElement("h2",null,e[n].name)))}):null))),s.a.createElement(u.a,null))},n}(s.a.Component);n.default=f},301:function(e,n,t){e.exports={height100:"sponsor-module--height100--Sor76",sponsor:"sponsor-module--sponsor--W11-J"}},396:function(e,n){}}]);
//# sourceMappingURL=component---src-pages-sponsor-js-b342d2e338ed8711b99b.js.map