(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n.n(a),c=n(4),r=n(5),s=n(8),l=n(6),u=n(1),o=n.n(u),p=(n(13),n(7)),d=(n(14),n(0)),m=function(t){var e=t.images,n=t.step,a=void 0===n?3:n,i=t.frameSize,c=void 0===i?3:i,r=t.itemWidth,s=void 0===r?130:r,l=t.animationDuration,o=void 0===l?1e3:l,m=t.infinite,h=Object(u.useState)(0),j=Object(p.a)(h,2),b=j[0],g=j[1],x=e.length*s,O="".concat(s*c,"px"),f="".concat(x,"px"),v="translateX(-".concat(b,"px)"),_=a*s,y=c*s,N=x-_-b,I=x-_-N,C={width:O},S={width:f,transform:v,transitionDuration:"".concat(o,"ms")};return Object(d.jsx)("div",{className:"Carousel",children:Object(d.jsxs)("div",{className:"container",style:C,children:[Object(d.jsx)("ul",{className:"Carousel__list",style:S,children:e.map((function(t,e){var n="".concat(e+1);return Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:t,id:n,alt:n,width:s,height:s})},n)}))}),Object(d.jsxs)("div",{className:"Carousel__buttons-box",children:[Object(d.jsx)("button",{type:"button",onClick:function(){b>0?g(I>=y?b-_:b-(y-_)):m&&g(x-y)},"data-cy":"prev",children:"Prev"}),Object(d.jsx)("button",{type:"button",onClick:function(){b<(e.length-c)*s?g(N>=y?b+_:b+(y-_)):m&&g(0)},"data-cy":"next",children:"Next"})]})]})})},h=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],currentStep:3,currentItemWidth:130,currentFrameWidth:3},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state.images,n=this.state.currentStep,a=this.state.currentItemWidth,i=this.state.currentFrameWidth;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"App__title-block",children:[Object(d.jsxs)("h1",{className:"App__header","data-cy":"title",children:["Carousel with",e.length,"images"]}),Object(d.jsxs)("div",{className:"App__inputs-container",children:[Object(d.jsx)("label",{htmlFor:"stepId",children:"Step"}),Object(d.jsx)("input",{type:"text",className:"App__input",id:"stepId",defaultValue:n,onChange:function(e){return t.setState({currentStep:+e.target.value})}}),Object(d.jsx)("label",{htmlFor:"itemId",children:"Item"}),Object(d.jsx)("input",{type:"text",className:"App__input",id:"itemId",defaultValue:a,onChange:function(e){return t.setState({currentItemWidth:+e.target.value})}}),Object(d.jsx)("label",{htmlFor:"frameId",children:"Frame"}),Object(d.jsx)("input",{type:"text",className:"App__input",id:"frameId",defaultValue:i,onChange:function(e){return t.setState({currentFrameWidth:+e.target.value})}})]})]}),Object(d.jsx)(m,{images:e,step:n,frameSize:i,itemWidth:a,animationDuration:1e3,infinite:!1})]})}}]),n}(o.a.Component),j=h;i.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6aae6311.chunk.js.map