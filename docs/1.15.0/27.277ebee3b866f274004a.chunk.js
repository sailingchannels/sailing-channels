webpackJsonp([27],{"./app/components/SuggestButton/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("./node_modules/react/index.js"),s=n.n(i),u=n("./app/helpers/http.js"),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=l("a",{className:"btn btn-default"},void 0,l("i",{className:"fa fa-check"})," Done"),p=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={status:null},n}return a(t,e),c(t,[{key:"onClick",value:function(){this.setState({status:"suggested"}),(new u.a).post({url:"/api/channel/suggest",data:JSON.stringify({channel:this.props.channel}),headers:{"Content-Type":"application/json"},type:"POST",dataType:"json",cache:!1},function(e,t){})}},{key:"render",value:function(){return null===this.state.status?l("button",{className:"btn btn-default btn-raised",style:{padding:"8px 20px"},onClick:this.onClick.bind(this)},void 0,"Suggest"):"suggested"==this.state.status?f:void 0}}]),t}(s.a.PureComponent);t.default=p}});