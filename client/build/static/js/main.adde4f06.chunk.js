(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),a=n(30),o=n.n(a),r=(n(37),n(38),n(20)),l=n(3),d=n(4),j=n(6),m=n(5),h=(n(39),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"videoContainer",children:Object(c.jsxs)("video",{controls:!0,className:"videoContainer__video",poster:this.props.oneVideo.image,children:[Object(c.jsx)("source",{src:"../assets/Video/sample.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})}}]),n}(s.Component)),b=(n(40),n(41),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).convertTimeStamp=function(e){var t=new Date(e);return t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.oneVideo,t=e.channel,n=(e.comments,e.description),s=(e.duration,e.id,e.image,e.likes),i=e.timestamp,a=e.title,o=e.views;return Object(c.jsxs)("div",{className:"videoDescription",children:[Object(c.jsx)("h1",{children:Object(c.jsx)("b",{children:a})}),Object(c.jsxs)("div",{className:"videoDescription__details",children:[Object(c.jsxs)("div",{className:"videoDescription__details--left",children:[Object(c.jsx)("span",{children:Object(c.jsx)("b",{children:t})}),Object(c.jsx)("span",{children:this.convertTimeStamp(i)})]}),Object(c.jsxs)("div",{className:"videoDescription__details--right",children:[Object(c.jsx)("img",{src:"../assets/Icons/SVG/Icon-views.svg",alt:"views"}),Object(c.jsx)("span",{className:"videoDescription__details--rightViews",children:o}),Object(c.jsx)("img",{src:"../assets/Icons/SVG/Icon-likes.svg",alt:"like"}),Object(c.jsx)("span",{children:s})]})]}),Object(c.jsx)("p",{children:n})]})}}]),n}(s.Component)),u=(n(42),n(43),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).convertTimeStamp=function(e){var t=new Date(e);return t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()},e.deleteComment=function(){e.props.removeComment(e.props.item.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.item,t=e.comment,n=(e.id,e.likes,e.name),s=e.timestamp;return Object(c.jsxs)("div",{className:"commentItem",children:[Object(c.jsx)("div",{className:"commentItem__left",children:Object(c.jsx)("span",{className:"commentItem__left--avatar"})}),Object(c.jsxs)("div",{className:"commentItem__middle",children:[Object(c.jsxs)("p",{children:[" ",Object(c.jsx)("span",{className:"commentItem__middle--name",children:n})," ",Object(c.jsx)("span",{className:"commentItem__middle--date",children:this.convertTimeStamp(s)})," "]}),Object(c.jsx)("p",{children:t})]}),Object(c.jsx)("div",{className:"commentItem__right",children:Object(c.jsx)("span",{className:"commentItem__right--delete",children:Object(c.jsx)("i",{className:"fa fa-trash",onClick:this.deleteComment})})})]})}}]),n}(s.Component)),p=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.oneVideo.comments||[],n=t.map((function(t){return Object(c.jsx)(u,{item:t,videoId:e.props.oneVideo.id,removeComment:e.props.removeComment},t.id)}));return Object(c.jsxs)("div",{className:"comments",children:[Object(c.jsx)("p",{children:Object(c.jsxs)("b",{children:[Object(c.jsx)("span",{className:"comments__count",children:t.length})," Comment"]})}),Object(c.jsx)("div",{className:"comments__input",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("img",{src:"../assets/Images/Mohan-muruge.jpg",alt:"",className:"comments__input--avatar"}),Object(c.jsx)("input",{type:"text",className:"comments__input--input"}),Object(c.jsx)("button",{className:"comments__input--btn",children:"COMMENT"})]})}),n]})}}]),n}(s.Component),O=(n(44),n(45),n(12)),v=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.item,t=e.id,n=e.title,s=e.channel,i=e.image;return Object(c.jsx)(O.b,{to:"/videos/".concat(t),children:Object(c.jsxs)("div",{className:"videoItem",children:[Object(c.jsx)("div",{className:"videoItem__left",children:Object(c.jsx)("img",{src:i,alt:"",width:"100%",height:"100%"})}),Object(c.jsxs)("div",{className:"videoItem__right",children:[Object(c.jsx)("p",{className:"videoItem__right--title",children:n}),Object(c.jsx)("p",{className:"videoItem__right--publisher",children:s})]})]})})}}]),n}(s.Component),x=n(13),f=n.n(x),_=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={videos:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:8080/videos").then((function(t){e.setState({videos:t.data})}))}},{key:"render",value:function(){var e=this.state.videos.map((function(e){return Object(c.jsx)(v,{item:e},e.id)}));return Object(c.jsxs)("div",{className:"videoList",children:[Object(c.jsx)("h3",{children:"NEXT VIDEO"}),e]})}}]),n}(s.Component),g=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.oneVideo;return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"content__left",children:[Object(c.jsx)(b,{oneVideo:e}),Object(c.jsx)(p,{oneVideo:e,removeComment:this.props.removeComment})]}),Object(c.jsx)("div",{className:"content__right",children:Object(c.jsx)(_,{})})]})}}]),n}(s.Component),N=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={oneVideo:{}},e.removeComment=function(t){f.a.delete("http://localhost:8080/delete",{data:{videoId:e.state.oneVideo.id,commentId:t}}).then((function(t){e.setState({oneVideo:Object(r.a)(Object(r.a)({},e.state.oneVideo),{},{comments:t.data})})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:8080/videos/1af0jruup5gu").then((function(t){e.setState({oneVideo:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var n=this,c=this.props.match.params.id;t.oneVideo.id!==c&&f.a.get("http://localhost:8080/videos/".concat(c)).then((function(e){n.setState({oneVideo:e.data})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{oneVideo:this.state.oneVideo}),Object(c.jsx)(g,{oneVideo:this.state.oneVideo,removeComment:this.removeComment})]})}}]),n}(s.Component),C=n(2),y=(n(69),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).addVideo=function(e){e.preventDefault();var t=e.target.title.value,n=e.target.channel.value;f.a.post("http://localhost:8080/video/add",{title:t,channel:n}),window.location.href="/"},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"upload",children:[Object(c.jsx)("h2",{children:"Upload Video"}),Object(c.jsxs)("div",{className:"upload__video",children:[Object(c.jsx)("div",{className:"upload__video--left",children:Object(c.jsx)("img",{src:"./assets/Images/video-list-1.jpg",width:"100%",alt:"upload-img"})}),Object(c.jsx)("div",{className:"upload__video--right",children:Object(c.jsxs)("form",{onSubmit:this.addVideo,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",id:"title",name:"title"})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"channel",children:"Channel:"}),Object(c.jsx)("br",{}),Object(c.jsx)("textarea",{id:"channel",cols:"30",rows:"10",name:"channel"})]}),Object(c.jsx)("button",{id:"publish",children:"Publish"}),Object(c.jsx)(O.b,{to:"/",children:Object(c.jsx)("button",{id:"cancel",children:"Cancel"})})]})})]})]})}}]),n}(s.Component)),V=(n(70),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header__left",children:Object(c.jsx)(O.b,{to:"/",children:Object(c.jsx)("img",{src:"../assets/Logo/Logo-brainflix.png",alt:"logo"})})}),Object(c.jsxs)("div",{className:"header__right",children:[Object(c.jsxs)("form",{className:"header__right--form",children:[Object(c.jsx)("input",{type:"text",className:"header__right--input",placeholder:"Search..."}),Object(c.jsx)("button",{className:"header__right--button",children:Object(c.jsx)("i",{className:"fa fa-search header__right--search"})})]}),Object(c.jsx)(O.b,{to:"/upload",children:Object(c.jsx)("button",{className:"header__right--upload",children:"+ Upload"})})]})]})}}]),n}(s.Component));var I=function(){return Object(c.jsx)(O.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(V,{}),Object(c.jsxs)(C.d,{children:[Object(c.jsx)(C.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(C.a,{to:"/videos/1af0jruup5gu"})}}),Object(c.jsx)(C.b,{path:"/videos/:id",component:N}),Object(c.jsx)(C.b,{path:"/upload",component:y})]})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};n(71);o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),k()}},[[72,1,2]]]);
//# sourceMappingURL=main.adde4f06.chunk.js.map