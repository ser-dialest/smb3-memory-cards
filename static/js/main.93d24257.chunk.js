(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Mushroom",image:"./images/mushroom3.png"},{id:2,name:"Fire Flower",image:"./images/flower3.png"},{id:3,name:"Starman",image:"./images/star3.png"},{id:4,name:"Leaf",image:"./images/leaf3.png"},{id:5,name:"Tanooki Suit",image:"./images/tanooki3.png"},{id:6,name:"Frog Suit",image:"./images/frog3.png"},{id:7,name:"Cloud",image:"./images/cloud3.png"},{id:8,name:"1-UP",image:"./images/1up3.png"},{id:9,name:"Whistle",image:"./images/whistle3.png"},{id:10,name:"Music Box",image:"./images/music3.png"},{id:11,name:"P-Wing",image:"./images/pwing3.png"},{id:12,name:"Hammer",image:"./images/hammer3.png"}]},,,function(e,a,t){e.exports=t.p+"static/media/smb3_text.711608e1.wav"},function(e,a,t){e.exports=t.p+"static/media/smb3_flip.f1ceaab0.wav"},function(e,a,t){e.exports=t.p+"static/media/smb3_match.17822b91.wav"},function(e,a,t){e.exports=t.p+"static/media/smb3_miss.f44e0265.wav"},function(e,a,t){e.exports=t.p+"static/media/smb3_bgm.a950c25e.mp3"},,function(e,a,t){e.exports=t(27)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAACECAYAAAAOVQzuAAACV0lEQVR4Xu3YTU4iUQBG0a55L8WhAxfBcllEDxy6FOd27ETyML6keLl0gBxHSKhLceoDf7Zfw9efw++P8Xu39wm8HN+3r0eebnzeAXQf4PdHAV1zmx51Bjpb5fPhKX7ax8q9Ht9+fEEb0LULDXTNbXrULlBv8zX1EffsLQ8U6JpAfNTFC519XsTndfO52TsY6OKlA7oINzvsKqDjXwXx+d5kbvw9HWhwiYAGiLP/wFlogGuhAaKFxohAgV5RIE77DAUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8S5qy80Pt+7yj0fnn4839fj2+n+7dIrcFcC8ckCvVXQ+LweLnfxW/7hBOIXBPR/gY7PM/sAjs/lbnPjKscXcfZTHuj+6wt0v9WuR05Bx6PH30l3VT3on8DL8X37ojjd+LwD6NpCgK65TY8aQf8Cj4qkEoPbSeUAAAAASUVORK5CYIIA"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(8),c=t.n(s),r=(t(21),t(14)),o=t(1),C=t(2),l=t(4),u=t(3),m=t(5),f=t(9),p=t.n(f),w=(t(22),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={cursor:"none"},t}return Object(m.a)(a,e),Object(C.a)(a,[{key:"hoverOn",value:function(){new Audio(p.a).play(),this.setState({cursor:"inline"})}},{key:"hoverOff",value:function(){this.setState({cursor:"none"})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"card",id:this.props.id,onClick:this.props.handleShuffle,style:{backgroundPositionX:this.props.backX},onMouseEnter:function(){return e.hoverOn()},onMouseLeave:function(){return e.hoverOff()}},i.a.createElement("img",{className:"cursor",src:t(23),alt:"",style:{display:this.state.cursor}}),i.a.createElement("img",{alt:this.props.name,src:this.props.image,style:{display:this.props.cardDisplay}}))}}]),a}(i.a.Component));t(24);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(25);var d=function(e){return i.a.createElement("div",{className:"scores"},i.a.createElement("span",null,"Score ",e.score),i.a.createElement("span",null,"High Score ",e.highScore))},g=t(6),U=t(10),Q=t.n(U),A=t(11),v=t.n(A),b=t(12),k=t.n(b),y=t(13),S=t.n(y),E=(t(26),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={start:!0,cards:g,clickedCards:[],score:0,highScore:0,faceUp:!1,backX:0,cardDisplay:"none",clickable:!1},t}return Object(m.a)(a,e),Object(C.a)(a,[{key:"handleShuffle",value:function(e){var a=this;if(this.state.clickable){if(this.state.clickedCards.includes(e))new Audio(k.a).play(),this.setState({score:0,clickedCards:[]});else new Audio(v.a).play(),this.setState({score:this.state.score+1,clickedCards:[].concat(Object(r.a)(this.state.clickedCards),[e]),clickable:!1},function(){a.state.score>a.state.highScore&&a.setState({highScore:a.state.score})});this.flipCard(this.state.faceUp)}}},{key:"flipCard",value:function(e){var a,t=this,n=0,i=function e(i){if(n<157){switch(n){case 70:case 75:case 80:case 85:case 90:if(t.setState({backX:t.state.backX+84*a}),70===n)new Audio(Q.a).play();70!==n||t.state.faceUp||(t.setState({cardDisplay:"none"}),t.setState({cards:g.sort(function(){return Math.random()-.5})})),90===n&&(t.state.faceUp?t.setState({cardDisplay:"flex",clickable:!0}):t.flipCard(t.state.faceUp))}n++,requestAnimationFrame(e)}};e?(a=1,this.setState({faceUp:!1},function(){return requestAnimationFrame(i)})):(a=-1,this.setState({faceUp:!0},function(){return requestAnimationFrame(i)}))}},{key:"componentDidMount",value:function(){this.state.faceUp||this.flipCard(!1),this.state.start&&this.setState({start:!1},function(){var e=new Audio(S.a);e.loop=!0,e.play()})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(d,{score:this.state.score,highScore:this.state.highScore}),i.a.createElement(h,null,this.state.cards.map(function(a){return i.a.createElement(w,{id:a.id,name:a.name,image:a.image,handleShuffle:function(){return e.handleShuffle(a.id)},backX:e.state.backX+"px",cardDisplay:e.state.cardDisplay})})))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.93d24257.chunk.js.map