(window["webpackJsonprtv-tumbnail-generator"]=window["webpackJsonprtv-tumbnail-generator"]||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=(n(17),n(18),n(19),n(2)),s=n.n(l),c=n(5),h=n(6),u=n(7),m=n(8),d=n(10),g=n(9),v=n(1),f=n(11),w=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(g.a)(t).call(this))).inputRef=i.a.createRef(),e.handleInputChange=e.handleInputChange.bind(Object(v.a)(e)),e.imagePaste=e.imagePaste.bind(Object(v.a)(e)),e.draw=e.draw.bind(Object(v.a)(e)),e.scrollHandler=e.scrollHandler.bind(Object(v.a)(e)),e.mouseMoveEvent=e.mouseMoveEvent.bind(Object(v.a)(e)),e.rtvLogo=new Image,e.rtvLogo.src="../../logoRtv.png",e.rtvLogo.addEventListener("load",function(){e.draw()}),e.imageInfo={x:0,y:0,width:1280,height:720},e.state={title:"Hallo",image:null,imageShow:null},e.mouseX=null,e.mouseY=null,e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(h.a)({},a,n),this.draw)}},{key:"changeDrawImage",value:function(e){var t=this;this.setState({imageShow:e},function(){t.imageShow=new Image,t.imageShow.src=t.state.imageShow,t.imageShow.addEventListener("load",function(){t.imageInfo.width=t.imageShow.width,t.imageInfo.height=t.imageShow.height,t.draw()})})}},{key:"imagePaste",value:function(){var e=Object(c.a)(s.a.mark(function e(){var t,n,a,i,o,r,l,c,h,u,m,d,g,v,f;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.read();case 3:t=e.sent,n=!0,a=!1,i=void 0,e.prev=7,o=t[Symbol.iterator]();case 9:if(n=(r=o.next()).done){e.next=51;break}l=r.value,e.prev=11,c=!0,h=!1,u=void 0,e.prev=15,m=l.types[Symbol.iterator]();case 17:if(c=(d=m.next()).done){e.next=29;break}if(!(g=d.value).includes("image")){e.next=26;break}return console.log(g),e.next=23,l.getType(g);case 23:v=e.sent,f=URL.createObjectURL(v),this.changeDrawImage(f);case 26:c=!0,e.next=17;break;case 29:e.next=35;break;case 31:e.prev=31,e.t0=e.catch(15),h=!0,u=e.t0;case 35:e.prev=35,e.prev=36,c||null==m.return||m.return();case 38:if(e.prev=38,!h){e.next=41;break}throw u;case 41:return e.finish(38);case 42:return e.finish(35);case 43:e.next=48;break;case 45:e.prev=45,e.t1=e.catch(11),console.error(e.t1,e.t1.message);case 48:n=!0,e.next=9;break;case 51:e.next=57;break;case 53:e.prev=53,e.t2=e.catch(7),a=!0,i=e.t2;case 57:e.prev=57,e.prev=58,n||null==o.return||o.return();case 60:if(e.prev=60,!a){e.next=63;break}throw i;case 63:return e.finish(60);case 64:return e.finish(57);case 65:e.next=70;break;case 67:e.prev=67,e.t3=e.catch(0),console.error(e.t3,e.t3.message);case 70:case"end":return e.stop()}},e,this,[[0,67],[7,53,57,65],[11,45],[15,31,35,43],[36,,38,42],[58,,60,64]])}));return function(){return e.apply(this,arguments)}}()},{key:"draw",value:function(){var e=this.inputRef.current.getContext("2d");e.fillStyle="white",e.fillRect(0,0,1280,720),null!==this.state.imageShow&&e.drawImage(this.imageShow,this.imageInfo.x,this.imageInfo.y,this.imageInfo.width,this.imageInfo.height);var t=new Path2D;e.fillStyle="white",t.moveTo(1280,0),t.lineTo(0,0),t.lineTo(1280,120),t.lineTo(1280,0),e.fill(t);t=new Path2D;e.fillStyle="red",t.moveTo(0,720),t.lineTo(1280,720),t.lineTo(0,600),t.lineTo(0,720),e.fill(t),e.fillStyle="white",e.font="60px Segoe UI",function(e,t,n,a,i,o){var r=50;do{r--,o.font=r+"px "+t}while(o.measureText(e).width>i);o.fillText(e,n,a)}(this.state.title,"fira sans",15,690,480,e);e.drawImage(this.rtvLogo,950,20,250,51500/878)}},{key:"scrollHandler",value:function(e){var t=1.01;e.deltaY<0&&(t=.99),this.imageInfo.width*=t,this.imageInfo.height*=t,this.draw()}},{key:"mouseMoveEvent",value:function(e){1===e.buttons?(null!==this.mouseX&&(this.imageInfo.x-=this.mouseX-e.clientX,this.imageInfo.y-=this.mouseY-e.clientY,this.draw()),this.mouseX=e.clientX,this.mouseY=e.clientY):(this.mouseX=null,this.mouseY=null)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleInputChange}),i.a.createElement("input",{type:"file",name:"image",value:this.state.image,onChange:this.handleInputChange})),i.a.createElement("button",{onClick:this.imagePaste},"Image van Klembord"),i.a.createElement("canvas",{style:{border:"2px solid black"},width:"1280px",height:"720px",onWheel:this.scrollHandler,onMouseMove:this.mouseMoveEvent,ref:this.inputRef}),i.a.createElement("button",{onClick:function(){var t=e.inputRef.current,n=document.createElement("a");document.body.appendChild(n),n.href=t.toDataURL(),n.download="Banner ".concat(e.state.title,".png"),n.click(),document.body.removeChild(n)}},"Download Banner"))}}]),t}(i.a.Component);var p=function(){return i.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.6c39f63f.chunk.js.map