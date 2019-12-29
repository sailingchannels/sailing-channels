webpackJsonp([12],{"./app/components/Suggest/Suggest.css":function(e,n,t){var o=t("./node_modules/css-loader/index.js!./app/components/Suggest/Suggest.css");"string"==typeof o&&(o=[[e.i,o,""]]);var s={};s.transform=void 0;t("./node_modules/style-loader/lib/addStyles.js")(o,s);o.locals&&(e.exports=o.locals)},"./app/components/Suggest/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/index.js"),l=t("./app/components/OffsetMenu/index.js"),r=t("./app/components/OffsetSocial/index.js"),c=t("./app/components/Logo/index.js"),u=t("./node_modules/react-loadable/lib/index.js"),d=t.n(u),p=d()({loader:function(){return t.e(25).then(t.bind(null,"./app/components/ChannelMissingTester/index.js"))},loading:function(){return null}}),h=t("./app/actions/MeActions.js"),f=t("./app/stores/MeStore.js"),g=d()({loader:function(){return t.e(21).then(t.bind(null,"./app/components/SuggestChannels/index.js"))},loading:function(){return null}}),m=t("./node_modules/react-router-dom/index.js"),b=t("./node_modules/react-cookie/index.js"),v=t.n(b),y=t("./node_modules/jquery/dist/jquery.js"),S=t.n(y),j=(t("./app/components/Suggest/Suggest.css"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,s){var a=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=s;else if(i>1){for(var r=Array(i),c=0;c<i;c++)r[c]=arguments[c+3];t.children=r}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}()),w=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),x=j(r.a,{}),_=j(c.a,{className:"hidden-xs hidden-sm"}),k=j(l.a,{}),C=j("div",{className:"col-md-3"}),N=j("h1",{className:"content-h1"},void 0,"Suggest a channel"),O=j("p",{},void 0,"There are currently ",j("span",{id:"statChannels"})," channels and"," ",j("span",{id:"statVideos"})," videos listed in this site."),M=j("p",{},void 0,"Know of any sailing channels that are not listed here? Well, that's brilliant! You can use the form below to check and suggest a channel for the list:"),T=j(p,{}),P=j("p",{},void 0,"There are currently ",j("span",{id:"statChannels"})," channels and"," ",j("span",{id:"statVideos"})," videos listed in this site."),E=j("center",{},void 0,j("a",{href:"/oauth2callback",className:"btn btn-raised btn-sm btn-danger yt-login",title:"Sign in"},void 0,"Sign In with ",j("i",{className:"fa fa-youtube"})," YouTube"),j(m.Link,{className:"btn btn-link show btn-more-info",to:"/signin"},void 0,"More info"),j("p",{},void 0,"If you login with your YouTube account,",j("br",{}),"you can easily suggest channels from this page:"),j("p",{},void 0," "),j(m.Link,{to:"/signin"},void 0,j("img",{className:"feature-backdrop",width:"80%",alt:"Suggestion Feature",src:"https://cdn.jsdelivr.net/gh/sailingchannels/website@9783a9b7/public/img/features/suggest.png"}))),L=j("div",{className:"col-md-3"}),V=function(e){function n(e){o(this,n);var t=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state=f.a.getState(),t.onChange=t.onChange.bind(t),t}return a(n,e),w(n,[{key:"componentDidMount",value:function(){var e=this;document.title="Suggest a channel | Sailing Channels",f.a.listen(this.onChange),this.setState({me:v.a.load("me")?JSON.parse(v.a.load("me").replace("j:","")):null},function(){0===e.state.subscriptions.length&&e.state.me&&h.a.getSubscriptions()}),S.a.get("/api/stats",function(e){S()("#statChannels").html(e.channels),S()("#statVideos").html(e.videos)})}},{key:"componentWillUnmount",value:function(){f.a.unlisten(this.onChange)}},{key:"onChange",value:function(e){this.setState(e)}},{key:"replaceX",value:function(e){e.target.href=e.target.href.replace(/x/g,"")}},{key:"render",value:function(){return j("div",{className:"container"},void 0,x,_,k,j("div",{className:"row content-row"},void 0,C,j("div",{className:"col-md-6"},void 0,N,this.state.me?j("div",{},void 0,O,M,T,j(g,{subscriptions:this.state.subscriptions})):j("div",{},void 0,P,j("p",{},void 0,"Know of any sailing channels that are not listed here? Well, that's brilliant! Send an email with the link to the channel to"," ",j("a",{href:"mailto:ahoyx@sailingx-channels.com",onMouseOver:this.replaceX.bind(this),className:"reverse",title:"Send an email to sailing-channels"},void 0,"moc.slennahc-gnilias@yoha")),E)),L))}}]),n}(i.Component);n.default=V},"./node_modules/css-loader/index.js!./app/components/Suggest/Suggest.css":function(e,n,t){n=e.exports=t("./node_modules/css-loader/lib/css-base.js")(void 0),n.push([e.i,".feature-backdrop{-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.2);-moz-box-shadow:0 0 20px 0 rgba(0,0,0,.2);box-shadow:0 0 20px 0 rgba(0,0,0,.2);border:1px solid #ddd}",""])}});