(window["webpackJsonprtv-tumbnail-generator"]=window["webpackJsonprtv-tumbnail-generator"]||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(4),l=n.n(i),s=(n(17),n(18),n(19),n(2)),r=n.n(s),c=n(5),u=n(6),d=n(7),h=n(8),m=n(10),g=n(9),v=n(1),f=n(11),p=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(g.a)(t).call(this))).mouseDown=[],e.inputRef=o.a.createRef(),e.handleInputChange=e.handleInputChange.bind(Object(v.a)(e)),e.imagePaste=e.imagePaste.bind(Object(v.a)(e)),e.draw=e.draw.bind(Object(v.a)(e)),e.scrollHandler=e.scrollHandler.bind(Object(v.a)(e)),e.mouseMoveEvent=e.mouseMoveEvent.bind(Object(v.a)(e)),e.dowloaden=e.dowloaden.bind(Object(v.a)(e)),e.clearAllInterVals=e.clearAllInterVals.bind(Object(v.a)(e)),e.rtvLogo=new Image,e.rtvLogo.src="../../logoRtv.png",e.rtvLogo.addEventListener("load",function(){e.draw()}),e.imageInfo={x:0,y:0,width:1280,height:720},e.uitleg={1:"Voeg een afbeelding toe door een bestand te kiezen of een afbeelding van het klembord toe te voegen.",2:"Gebruik de knoppen om de afbeelding goed te zetten. Of sleep de afbeelding om hem te verplaatsen.",3:"Voeg een titel toe.",4:"Als je tevreden bent met de Thumbnail klik op 'Download Thumbnail'."},e.state={title:"Verander deze tekst",stateImage:null,step:1},e.mouseX=null,e.mouseY=null,e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleInputChange",value:function(e){var t=this,n=e.target,a="checkbox"===n.type?n.checked:n.value,o=n.name;if("stateImage"===o)if(this.isEI())this.changeDrawImage(a);else if(e.target.files[0].type.includes("image")){var i=document.querySelector("input[type=file]").files[0];console.log(i);var l=new FileReader;l.addEventListener("load",function(){t.changeDrawImage(l.result)},!1),i&&l.readAsDataURL(i)}else alert("Het bestand dat u wilde toevoegen is geen afbeelding");else this.setState(Object(u.a)({},o,a),this.draw)}},{key:"changeDrawImage",value:function(e){var t=this;this.setState({stateImage:e},function(){t.Image=new Image,t.Image.src=t.state.stateImage,t.Image.addEventListener("load",function(){t.imageInfo.width=t.Image.width,t.imageInfo.height=t.Image.height,t.draw()})})}},{key:"imagePaste",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n,a,o,i,l,s,c,u,d,h,m,g,v,f;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.read();case 3:t=e.sent,n=!0,a=!1,o=void 0,e.prev=7,i=t[Symbol.iterator]();case 9:if(n=(l=i.next()).done){e.next=54;break}s=l.value,e.prev=11,c=!0,u=!1,d=void 0,e.prev=15,h=s.types[Symbol.iterator]();case 17:if(c=(m=h.next()).done){e.next=32;break}if(!(g=m.value).includes("image")){e.next=28;break}return console.log(g),e.next=23,s.getType(g);case 23:v=e.sent,f=URL.createObjectURL(v),this.changeDrawImage(f),e.next=29;break;case 28:alert("U heeft geen geldige afbeelding gekopie\xebrd.");case 29:c=!0,e.next=17;break;case 32:e.next=38;break;case 34:e.prev=34,e.t0=e.catch(15),u=!0,d=e.t0;case 38:e.prev=38,e.prev=39,c||null==h.return||h.return();case 41:if(e.prev=41,!u){e.next=44;break}throw d;case 44:return e.finish(41);case 45:return e.finish(38);case 46:e.next=51;break;case 48:e.prev=48,e.t1=e.catch(11),console.error(e.t1,e.t1.message);case 51:n=!0,e.next=9;break;case 54:e.next=60;break;case 56:e.prev=56,e.t2=e.catch(7),a=!0,o=e.t2;case 60:e.prev=60,e.prev=61,n||null==i.return||i.return();case 63:if(e.prev=63,!a){e.next=66;break}throw o;case 66:return e.finish(63);case 67:return e.finish(60);case 68:e.next=73;break;case 70:e.prev=70,e.t3=e.catch(0),console.error(e.t3,e.t3.message);case 73:case"end":return e.stop()}},e,this,[[0,70],[7,56,60,68],[11,48],[15,34,38,46],[39,,41,45],[61,,63,67]])}));return function(){return e.apply(this,arguments)}}()},{key:"draw",value:function(){var e=this.inputRef.current.getContext("2d");e.fillStyle="white",e.fillRect(0,0,1280,720),null!==this.state.stateImage&&e.drawImage(this.Image,this.imageInfo.x,this.imageInfo.y,this.imageInfo.width,this.imageInfo.height);e.beginPath(),e.moveTo(1280,0),e.lineTo(0,0),e.lineTo(1280,120),e.lineTo(1280,0),e.fillStyle="white",e.fill(),e.beginPath(),e.moveTo(0,720),e.lineTo(1280,720),e.lineTo(0,600),e.lineTo(0,720),e.fillStyle="red",e.fill(),e.fillStyle="white",e.font="60px Segoe UI",function(e,t,n,a,o,i){var l=50;do{l--,i.font=l+"px "+t}while(i.measureText(e).width>o);i.fillText(e,n,a)}(this.state.title,"fira sans",15,690,480,e);e.drawImage(this.rtvLogo,950,20,250,51500/878)}},{key:"scrollHandler",value:function(e){var t=1.01;e.deltaY<0&&(t=.99),this.imageInfo.width*=t,this.imageInfo.height*=t,this.draw()}},{key:"moveButtonHandler",value:function(e,t){var n=this;return function(a){var o=setInterval(function(){n.imageInfo.x-=2*e,n.imageInfo.y-=2*t,n.draw()},50);n.mouseDown.push(o)}}},{key:"scaleButtonHandler",value:function(e){var t=this;return function(n){var a=setInterval(function(){console.log("scale");var n=1.01;e||(n=.99),t.imageInfo.width*=n,t.imageInfo.height*=n,t.draw()},50);t.mouseDown.push(a)}}},{key:"mouseMoveEvent",value:function(e){1===e.buttons?(null!==this.mouseX&&(this.imageInfo.x-=this.mouseX-e.clientX,this.imageInfo.y-=this.mouseY-e.clientY,this.draw()),this.mouseX=e.clientX,this.mouseY=e.clientY):(this.mouseX=null,this.mouseY=null)}},{key:"dowloaden",value:function(){if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(this.inputRef.current.msToBlob(),"Banner '".concat(this.state.title,"'.png"));else{var e=this.inputRef.current,t=document.createElement("a");document.body.appendChild(t),t.href=e.toDataURL(),t.download="Banner '".concat(this.state.title,"'.png"),t.click(),document.body.removeChild(t)}}},{key:"clearAllInterVals",value:function(){this.mouseDown.forEach(function(e){return clearInterval(e)}),this.mouseDown=[]}},{key:"isEI",value:function(){return!!document.documentMode||(console.log(window.navigator.userAgent),!1)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"ThumbnailPage"},!this.isEI()&&o.a.createElement("p",{style:{textAlign:"center"}},"Helaas je internetprogramma is niet geschikt voor deze website en werkt momenteel dus niet. Er wordt aan gewerkt om dit op te lossen, in de tussentijd probeer Google Chrome,Safari of Firefox bijvoorbeeld."),o.a.createElement("header",null,o.a.createElement("p",{className:"uitleg"},this.uitleg[this.state.step]),o.a.createElement("div",{className:"editFields"},o.a.createElement("label",{style:{display:3!==this.state.step?"none":""}},"Thumbnail Text: ",o.a.createElement("input",{className:"titleInput",type:"text",name:"title",value:this.state.title,onChange:this.handleInputChange})),o.a.createElement("label",{style:{display:1!==this.state.step?"none":""}}," Kies Afbeelding: ",o.a.createElement("input",{className:"fileInput",type:"file",name:"stateImage",accept:"image/*",onChange:this.handleInputChange})),o.a.createElement("label",{style:{display:1!==this.state.step?"none":""}},"Plak gekopie\xebrde Afbeelding: ",o.a.createElement("button",{onClick:this.imagePaste}," ",o.a.createElement("i",{className:"material-icons",style:{fontSize:14}},"content_paste"),"  Afbeedling van klembord")),o.a.createElement("button",{onClick:this.dowloaden,className:"downloadButton",style:{display:4!==this.state.step?"none":""}},o.a.createElement("i",{className:"material-icons"},"get_app")," Download Thumbnail")),o.a.createElement("div",{className:"imageChanger",style:{display:2!==this.state.step?"none":""}},o.a.createElement("div",{className:"imagePosition changeGroup"},o.a.createElement("p",null,"Verander Positie:"),o.a.createElement("div",{className:"changeButtons"},o.a.createElement("i",{className:"material-icons",onTouchStart:this.moveButtonHandler(0,1),onTouchEnd:this.clearAllInterVals,onMouseLeave:this.clearAllInterVals,onMouseDown:this.moveButtonHandler(0,1),onMouseUp:this.clearAllInterVals},"keyboard_arrow_up"),o.a.createElement("i",{className:"material-icons",onTouchStart:this.moveButtonHandler(0,-1),onTouchEnd:this.clearAllInterVals,onMouseLeave:this.clearAllInterVals,onMouseDown:this.moveButtonHandler(0,-1),onMouseUp:this.clearAllInterVals},"keyboard_arrow_down"),o.a.createElement("i",{className:"material-icons",onTouchStart:this.moveButtonHandler(1,0),onTouchEnd:this.clearAllInterVals,onMouseLeave:this.clearAllInterVals,onMouseDown:this.moveButtonHandler(1,0),onMouseUp:this.clearAllInterVals},"keyboard_arrow_left"),o.a.createElement("i",{className:"material-icons",onTouchStart:this.moveButtonHandler(-1,0),onTouchEnd:this.clearAllInterVals,onMouseLeave:this.clearAllInterVals,onMouseDown:this.moveButtonHandler(-1,0),onMouseUp:this.clearAllInterVals},"keyboard_arrow_right"))),o.a.createElement("div",{className:"imageScale changeGroup"},o.a.createElement("p",null,"Verander Grootte:"),o.a.createElement("div",{className:"changeButtons"},o.a.createElement("i",{className:"material-icons",onTouchStart:this.scaleButtonHandler(!0),onTouchEnd:this.clearAllInterVals,onMouseLeave:this.clearAllInterVals,onMouseDown:this.scaleButtonHandler(!0),onMouseUp:this.clearAllInterVals},"add"),o.a.createElement("i",{className:"material-icons",onTouchStart:this.scaleButtonHandler(!1),onTouchEnd:this.clearAllInterVals,onMouseLeave:this.clearAllInterVals,onMouseDown:this.scaleButtonHandler(!1),onMouseUp:this.clearAllInterVals},"remove")))),o.a.createElement("div",{className:"stepButtons"},o.a.createElement("button",{style:{display:1===this.state.step?"none":""},onClick:function(){return e.setState(function(e){return{step:e.step-1}})}},"Stap Terug"),o.a.createElement("button",{style:{display:4===this.state.step?"none":""},onClick:function(){return e.setState(function(e){return{step:e.step+1}})}},"Volgende Stap"),o.a.createElement("button",{style:{display:4!==this.state.step?"none":""},onClick:function(){return e.setState(function(e){return{step:1,title:"Verander deze tekst",stateImage:null}},e.draw)}},"Opnieuw"))),o.a.createElement("canvas",{style:{border:"2px solid black"},width:"1280px",height:"720px",onMouseMove:this.mouseMoveEvent,ref:this.inputRef}))}}]),t}(o.a.Component);var w=function(){return o.a.createElement(p,null)},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");b?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):I(t,e)})}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.1b3f642f.chunk.js.map