webpackJsonp([0x758a40cb69e9],{729:function(e,t,n){var r=n(482),o=r(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},1019:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),d=n(2),p=r(d),m=n(5),y=r(m),h=n(1027),b=r(h),v=function(e){function t(){var e,n,r,o;a(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={color:null},r._setRandomColor=function(){var e=r.props.suffixes,t=Math.floor(Math.random()*(e.length-1))+1;r.setState({color:e[t]})},o=n,l(r,o)}return u(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.random&&this._setRandomColor()}},{key:"componentWillReceiveProps",value:function(e){!e.random||this.props.src===e.src&&this.props.icon===e.icon?this.props.random&&!e.random&&this.setState({color:null}):this._setRandomColor()}},{key:"_getColor",value:function(e,t,n){return e?"md-avatar--"+e:t&&!n?"md-avatar--default":"md-avatar--"+n}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.contentStyle,r=e.contentClassName,a=e.src,l=e.alt,u=e.icon,c=e.children,f=e.suffix,d=e.suffixes,p=e.iconSized,m=e.role,h=(e.random,o(e,["className","contentStyle","contentClassName","src","alt","icon","children","suffix","suffixes","iconSized","role","random"])),b=void 0;return b=a?s.default.createElement("img",{src:a,alt:l,role:m,style:n,className:(0,y.default)("md-avatar-img",r)}):s.default.createElement("div",{style:n,className:(0,y.default)("md-avatar-content",r)},u||c),s.default.createElement("div",i({},h,{className:(0,y.default)("md-inline-block md-avatar",this._getColor(f,d,this.state.color),{"md-avatar--icon-sized":p},t)}),b)}}]),t}(f.PureComponent);v.propTypes={className:p.default.string,contentStyle:p.default.object,contentClassName:p.default.string,src:(0,b.default)(p.default.string,"role","alt"),alt:p.default.string,icon:p.default.node,children:p.default.node,random:p.default.bool,suffixes:p.default.arrayOf(p.default.string),suffix:p.default.string,iconSized:p.default.bool,role:p.default.oneOf(["presentation"])},v.defaultProps={suffixes:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"]},t.default=v},620:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0;var o=n(1019),a=r(o);t.default=a.default,t.Avatar=a.default},736:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(1021),s=r(f),d=n(254),p=r(d),m=n(1028),y=r(m),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.context,t=e.expanded,n=e.onExpandClick,r=e.icon,o=e.tooltipPosition,a=e.tooltipLabel,l=e.tooltipDelay;return c.default.createElement(p.default,{icon:!0,className:(0,y.default)({flipped:t},"md-collapser--card"),onClick:n,tooltipLabel:a,tooltipDelay:l,tooltipPosition:o,iconEl:r})}}]),t}(i.Component);h.contextTypes=s.default,t.default=h},408:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),d=n(2),p=r(d),m=n(5),y=r(m),h=n(213),b=r(h),v=n(1020),_=r(v),g=n(736),O=r(g),w=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.style,r=e.className,a=e.title,l=e.subtitle,u=e.expander,c=e.isExpander,d=e.children,p=(e.avatar,o(e,["id","style","className","title","subtitle","expander","isExpander","children","avatar"])),m=this.props.avatar;if(m){var h=f.Children.only(m).props.className;m=(0,f.cloneElement)(m,{className:(0,y.default)("md-avatar--card",h)})}return s.default.createElement("div",i({},p,{style:n,className:(0,y.default)("md-card-title",{"md-card-title--primary":!m},r)}),m,s.default.createElement(_.default,{id:t,title:a,subtitle:l,avatar:!!m}),d,c||u&&s.default.createElement(O.default,null))}}]),t}(f.Component);w.propTypes={id:p.default.oneOfType([p.default.number,p.default.string]),style:p.default.object,className:p.default.string,title:p.default.node.isRequired,subtitle:p.default.node,children:p.default.node,avatar:p.default.element,expander:p.default.bool,isExpander:(0,b.default)(p.default.bool,"Use `expander` instead")},t.default=w},1020:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(2),s=r(f),d=n(5),p=r(d),m=n(739),y=r(m),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.subtitle,r=e.avatar,o=this.props.title;return o=c.default.createElement("h2",{id:t,className:(0,p.default)("md-card-title--title",{"md-card-title--large":!r},(0,y.default)({text:!0})),tabIndex:t?-1:null},o),n?c.default.createElement("div",{className:(0,p.default)("md-card-title--title-block",{"md-card-title--one-line":r})},o,c.default.createElement("h3",{className:"md-card-title--title "+(0,y.default)({hint:!0})},n)):o}}]),t}(i.PureComponent);h.propTypes={id:s.default.oneOfType([s.default.number,s.default.string]),title:s.default.node.isRequired,subtitle:s.default.node,avatar:s.default.bool},t.default=h},1022:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),d=n(2),p=r(d),m=n(5),y=r(m),h=n(213),b=r(h),v=n(255),_=r(v),g=function(e){function t(){var e,n,r,o;a(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={hover:!1},r._handleMouseEnter=function(e){r.props.onMouseEnter&&r.props.onMouseEnter(e),r.setState({hover:!0})},r._handleMouseLeave=function(e){r.props.onMouseLeave&&r.props.onMouseLeave(e),r.setState({hover:!1})},o=n,l(r,o)}return u(t,e),c(t,[{key:"render",value:function(){var e=this.state.hover,t=this.props,n=t.label,r=t.className,a=t.labelStyle,l=t.labelClassName,u=t.avatar,c=t.children,f=t.removable,d=t.remove,p=t.onClick,m=t.rotateIcon,h=t.iconClassName,b=(t.removeIconChildren,t.removeIconClassName,o(t,["label","className","labelStyle","labelClassName","avatar","children","removable","remove","onClick","rotateIcon","iconClassName","removeIconChildren","removeIconClassName"])),v=void 0;if(f||d){var g=(0,y.default)("md-chip-icon",{"md-chip-icon--rotate":m,"md-chip-text--hover":e});s.default.isValidElement(c)?(v=s.default.Children.only(c),v=s.default.cloneElement(v,{className:(0,y.default)(g,v.props.className)})):v=s.default.createElement(_.default,{className:g,iconClassName:h},c)}return s.default.createElement("button",i({type:"button"},b,{className:(0,y.default)("md-chip",{"md-chip--avatar":u,"md-chip--remove":f,"md-chip--hover":e},r),onClick:d||p,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave}),u,s.default.createElement("span",{style:a,className:(0,y.default)("md-chip-text",{"md-chip-text--hover":e},l)},n),v)}}]),t}(f.PureComponent);g.propTypes={style:p.default.object,className:p.default.string,labelStyle:p.default.object,labelClassName:p.default.string,rotateIcon:p.default.bool,children:p.default.node,label:p.default.node.isRequired,removable:p.default.bool,avatar:p.default.element,onClick:p.default.func,onMouseEnter:p.default.func,onMouseLeave:p.default.func,iconClassName:(0,b.default)(p.default.string,"Use the `children` prop as a single FontIcon or SVGIcon instead"),remove:(0,b.default)(p.default.func,"Use `removable` and `onClick` instead"),removeIconChildren:(0,b.default)(p.default.node,"Use `children` instead"),removeIconClassName:(0,b.default)(p.default.string,"Use `children` prop as a single FontIcon or SVGIcon instead")},g.defaultProps={rotateIcon:!0,children:s.default.createElement(_.default,null,"add_circle")},t.default=g},1023:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Chip=void 0;var o=n(1022),a=r(o);t.default=a.default,t.Chip=a.default},427:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.FontIcon=void 0;var o=n(255),a=r(o);t.default=a.default,t.FontIcon=a.default},1024:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t,n){for(var r,o=e[t],a=arguments.length,l=Array(a>3?a-3:0),u=3;u<a;u++)l[u-3]=arguments[u];var i=(r=y.default.string).isRequired.apply(r,[e,t,n].concat(l));return i||2===o.split("-").length||(i=new Error("Your provided an `"+t+"` prop to the "+n+" that is not a valid "+("aspect ratio `"+o+"`. This should be in the form of '{width}-{height}'."))),i}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),p=r(d),m=n(2),y=r(m),h=n(5),b=r(h),v=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.component,n=e.className,r=e.children,l=e.forceAspect,u=e.aspectRatio,i=(e.expandable,a(e,["component","className","children","forceAspect","aspectRatio","expandable"]));return p.default.createElement(t,f({},i,{className:(0,b.default)("md-media",o({},"md-media--"+u,l),n)}),r)}}]),t}(d.PureComponent);v.propTypes={className:y.default.string,children:y.default.node,forceAspect:y.default.bool,aspectRatio:c,expandable:y.default.bool,component:y.default.oneOfType([y.default.func,y.default.string]).isRequired},v.defaultProps={forceAspect:!0,aspectRatio:"16-9",component:"section"},t.default=v},1025:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),d=n(2),p=r(d),m=n(5),y=r(m),h=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=o(e,["className","component"]);return s.default.createElement(n,i({className:(0,y.default)("md-media-overlay",t)},r))}}]),t}(f.PureComponent);h.propTypes={style:p.default.object,className:p.default.string,children:p.default.node,component:p.default.oneOfType([p.default.func,p.default.string]).isRequired},h.defaultProps={component:"div"},t.default=h},2255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MediaOverlay=t.Media=void 0;var o=n(1024),a=r(o),l=n(1025),u=r(l);t.default=a.default,t.Media=a.default,t.MediaOverlay=u.default},1027:function(e,t){"use strict";function n(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(t,r,o,a,l){for(var u=function(e){return"undefined"!=typeof t[e]},i=o||"<<anonymous>>",c=l||r,f="undefined"!=typeof t[r],s=[c].concat(n),d=arguments.length,p=Array(d>5?d-5:0),m=5;m<d;m++)p[m-5]=arguments[m];var y=e.apply(void 0,[t,r,o,a,l].concat(p));return y||!f||s.filter(u).length||(y=new Error("One of the following props are required to make `"+i+"` accessible "+("for users of assistive technologies such as screen readers when using the `"+c+"` ")+("prop. `"+s.join("`, `")+"`."))),y}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},1028:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t,n=e.flipped,r=e.suffix,a=e.suffixFlipped,l=arguments.length,i=Array(l>1?l-1:0),c=1;c<l;c++)i[c-1]=arguments[c];return u.default.apply(void 0,["md-collapser",(t={"md-collapser--flipped":n&&(!a||!r)},o(t,"md-collapser--"+r,r),o(t,"md-collapser--"+r+"-flipped",r&&n&&a),t)].concat(i))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var l=n(5),u=r(l)},1179:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),i=r(u),c=n(1180),f=r(c),s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:""+t.node.fields.slug,title:t.node.frontmatter.title,cover:t.node.frontmatter.cover,date:t.node.frontmatter.date,tags:t.node.frontmatter.tags,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this,t=this.getPostList();return i.default.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},i.default.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},t.map(function(t){return i.default.createElement(f.default,{key:t.title,postInfo:t,langKey:e.props.langKey})})))},t}(i.default.Component);t.default=s,e.exports=t.default},1180:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),i=r(u),c=n(426),f=r(c),s=n(408),d=r(s),p=n(425),m=r(p),y=n(620),h=r(y),b=n(407),v=r(b),_=n(427),g=r(_),O=n(120),w=r(O),j=n(2255),E=r(j),P=n(743),x=r(P);n(2165);var M=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={mobile:!0},r.handleResize=r.handleResize.bind(r),r}return l(t,e),t.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},t.prototype.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},t.prototype.render=function(){var e=this.props,t=e.postInfo,n=e.langKey,r=this.state.mobile,o=r,a=t.cover.startsWith("/")?""+t.cover:t.cover,l=r?162:225;return i.default.createElement(f.default,{key:t.path,raise:!0,className:"md-grid md-cell md-cell--12"},i.default.createElement(w.default,{style:{textDecoration:"none"},to:t.path},i.default.createElement(E.default,{style:{backgroundImage:"url("+a+")",height:l+"px"},className:"post-preview-cover"},i.default.createElement(j.MediaOverlay,null,i.default.createElement(d.default,{title:t.title},i.default.createElement(m.default,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),i.default.createElement(d.default,{expander:o,avatar:i.default.createElement(h.default,{icon:i.default.createElement(g.default,{iconClassName:"fa fa-calendar"})}),title:"Published on "+t.date,subtitle:t.timeToRead+" min read"}),i.default.createElement(v.default,{expandable:o},t.excerpt,i.default.createElement(x.default,{tags:t.tags,langKey:n})))},t}(u.Component);t.default=M,e.exports=t.default},2165:function(e,t){},743:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(729),a=r(o),l=n(1),u=r(l),i=n(120),c=r(i),f=n(1023),s=r(f);n(798);var d=function(e){var t=e.tags,n=e.langKey;return u.default.createElement("div",{className:"post-tag-container"},t&&t.map(function(e){return u.default.createElement(c.default,{key:e,style:{textDecoration:"none"},to:"/"+n+"/"+(0,a.default)(e)},u.default.createElement(s.default,{label:e,className:"post-preview-tags"}))}))};t.default=d,e.exports=t.default},798:function(e,t){},1193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n(1),a=r(o),l=n(406),u=r(l),i=n(1179),c=r(i),f=n(109),s=r(f),d=function(e){var t=e.pathContext.tag,n=e.pathContext.langKey,r=e.data.allMarkdownRemark.edges;return a.default.createElement("div",{className:"tag-container"},a.default.createElement(u.default,null,a.default.createElement("title",null,'Posts tagged as "'+t+'" | '+s.default.siteTitle),a.default.createElement("link",{rel:"canonical",href:s.default.siteUrl+"/"+t})),a.default.createElement(c.default,{postEdges:r,langKey:n}))};t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-js-660cb11834c58a50b2a4.js.map