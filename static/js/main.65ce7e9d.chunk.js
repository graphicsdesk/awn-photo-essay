(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){e.exports=t(249)},164:function(e,a){},166:function(e,a){},201:function(e,a){},202:function(e,a){},249:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(100),r=t.n(o),s=t(8),m=t.n(s),l=t(103),c=t.n(l),d=t(104),h=t(105),p=t(109),u=t(106),g=t(110),f=t(53),w=t(52),x=t(108),y=m()({navbar:{display:"flex",justifyContent:"center",paddingTop:"13px",paddingBottom:"9px",background:"#fff",width:"100%"},logo:{height:"17px"}})(function(e){var a=e.classes;return i.a.createElement("div",{className:a.navbar},i.a.createElement("a",{href:"http://columbiaspectator.com"},i.a.createElement("img",{className:a.logo,src:"https://s3.amazonaws.com/spec-imagehosting/spectator-logo.png",alt:"Columbia Spectator Logo"})))}),b=m()({header:{marginBottom:"80vh",marginTop:"31vh"},headline:{textAlign:"center",padding:"0 12%",fontFamily:"Merriweather",fontSize:"2.5rem",lineHeight:1.5,color:"#333",margin:0,marginBottom:"1.7rem"},meta:{margin:"0 auto",maxWidth:"650px",textAlign:"center"},byline:{fontSize:"0.93rem",fontFamily:"Open Sans",color:"#777",margin:0,fontWeight:300,marginBottom:"5px","& a":{color:"#777",textDecoration:"none","&:hover":{textDecoration:"underline"}}},smallButMightyLine:{margin:"35px auto 25px auto",width:"80px",height:"1px",backgroundColor:"#ddd"},timestamp:{fontSize:"0.8rem",fontFamily:"Open Sans",padding:"0 10%",margin:"0 auto",color:"#aaa",fontWeight:300,lineHeight:1.6,"& a":{color:"#aaa",textDecoration:"none","&:hover":{textDecoration:"underline"}}},"@media (max-width: 991px)":{title:{width:"92%"}},"@media (max-width: 767px)":{header:{padding:"42px 0",marginTop:"24vh",background:"rgba(255, 255, 255, 0.9)"},smallButMightyLine:{backgroundColor:"#aaa"},byline:{color:"#333",fontWeight:400,"& a":{color:"#333"}},timestamp:{color:"#333",fontSize:".75rem",fontWeight:400,"& a":{color:"#333"}}},"@media (max-width: 575px)":{headline:{fontSize:"2.1rem"}}})(function(e){var a=e.classes;return i.a.createElement("div",{className:a.header},i.a.createElement("p",{className:a.headline},"Why they came to celebrate the life of Peter Awn"),i.a.createElement("div",{className:a.meta},i.a.createElement("p",{className:a.byline},"Reporting by"," ",i.a.createElement("a",{href:"https://www.columbiaspectator.com/contributors/Valeria-Escobar/"},"Valeria Escobar")," ","and"," ",i.a.createElement("a",{href:"https://www.columbiaspectator.com/contributors/Emma-James/"},"Emma James")),i.a.createElement("p",{className:a.byline},"Photography by Rya Inman"),i.a.createElement("div",{className:a.smallButMightyLine}),i.a.createElement("p",{className:a.timestamp},"May 15, 2019",i.a.createElement("br",null),"GRAPHICS BY"," ",i.a.createElement("a",{href:"https://www.columbiaspectator.com/contributors/Jason-Kao/"},"JASON KAO"))))});Object(x.a)("#make-me-rad-n-sticky");var v=window.innerWidth>575?.5:.8,E={position:"absolute",maxWidth:"95%",maxHeight:"93%",transitionDuration:".6s",boxShadow:"-1px 3px 10px -1px rgba(0,0,0,0.75)"},S={main:{padding:"0 15px",marginBottom:"2rem",fontFamily:"Helvetica",display:"flex",justifyContent:"space-evenly"},graphic:{transform:"translate3d(0, 0, 0)",flexBasis:"60%",position:"sticky",width:"100%",height:"100vh",top:0,alignSelf:"flex-start",display:"flex",justifyContent:"center",alignItems:"center"},img:Object(f.a)({},E,{visibility:"visible",opacity:1}),hideImg:Object(f.a)({},E,{visibility:"hidden",opacity:0}),scroller:{flexBasis:"40%",position:"relative"},step:{margin:"0 auto",maxWidth:"420px",padding:"17px",marginBottom:"80vh"},text:{fontFamily:"Merriweather",fontSize:"1.05rem",margin:"1.2rem 0 1rem 0",lineHeight:"1.8"},"@media (max-width: 767px)":{main:{display:"block"},scroller:{paddingTop:0,zIndex:"1",transform:"translateY(-100vh)"},step:{backgroundColor:"rgba(255, 255, 255, 0.9)"},img:{maxWidth:"100%",maxHeight:"100%"},hideImg:{maxWidth:"100%",maxHeight:"100%"},text:{justifyContent:"center",textAlign:"center",fontSize:"1rem"}}},k=function(e){function a(e){var t;Object(d.a)(this,a),(t=Object(p.a)(this,Object(u.a)(a).call(this,e))).onStepEnter=function(e){var a=e.data;t.setState({image:a})};var n=e.classes,o=e.slides;t.images=[];var r=null;return t.steps=o.reduce(function(e,a){var o=a.type,s=a.value;return"image"===o?t.images.push(r=s):"text"===o&&e.push(i.a.createElement(w.b,{data:r,key:s},i.a.createElement("div",{className:n.step},s.split("[NEWLINE]").map(function(e){return i.a.createElement("p",{className:n.text,key:e},e.trim())})))),e},[]),t.state={image:t.images[0]},t}return Object(g.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.state.image,a=this.props.classes;return i.a.createElement("div",{className:a.main},i.a.createElement("div",{className:a.graphic},this.images.map(function(t){return i.a.createElement("img",{key:t,className:e===t?a.img:a.hideImg,src:t})})),i.a.createElement("div",{className:a.scroller},i.a.createElement(y,null),i.a.createElement(b,null),i.a.createElement(w.a,{offset:v,onStepEnter:this.onStepEnter},this.steps)))}}]),a}(n.Component),N=m()(S)(k),W=(m()({text:{lineHeight:1.9,fontSize:"1.05rem",fontFamily:"Merriweather",margin:"0 auto 1.3rem auto",maxWidth:"600px",padding:"0 15px","& a":{textDecoration:"none",color:"#5ec2c2",borderBottomColor:"#5ec2c2",borderBottomWidth:0},"& a:hover":{borderBottomWidth:"1px"},"& b":{display:"block",margin:"0 auto",textTransform:"uppercase",fontSize:"1.2rem",textAlign:"center"}}})(function(e){var a=e.classes,t=e.text;return i.a.createElement("p",{className:a.text,dangerouslySetInnerHTML:{__html:t}})}),m()({container:{width:"70vw",margin:"2rem auto",maxWidth:"900px"},image:{width:"100%",marginBottom:"10px"},caption:{fontFamily:"Open Sans",fontWeight:400,fontSize:"0.88rem",color:"#aaa",margin:0,padding:"0 15px"},"@media (max-width: 991px)":{container:{width:"80vw"}},"@media (max-width: 680px)":{container:{width:"auto"}}})(function(e){var a=e.classes,t=e.text,n=(t=t.substring(7)).indexOf(","),o=t.substring(0,n),r=t.substring(n+2);return i.a.createElement("div",{className:a.container},i.a.createElement("img",{className:a.image,src:o,alt:r}),r&&i.a.createElement("p",{className:a.caption},r))}),m()({Break:{margin:"3rem auto",borderTop:"1px solid #ddd",maxWidth:"600px",padding:"0 15px"}})(function(e){var a=e.classes;e.text;return i.a.createElement("div",{className:a.Break})}),c.a.load("\n\n[+copy]\n\nimage: https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RTCVTHKADBDZXMMHFWSNMRYCNE.png\n\nDerrick Wilder, GS \u201805, said Awn was instrumental in his decision to return to school through General Studies nearly 20 years after he graduated from high school. Prior to GS, Wilder pursued a career in professional dance even ran his own company. [NEWLINE] \u201cI was unsure if I wanted to return at school after starting a professional life, and after [a conversation with Awn], I was put at ease. People often say, \u2018my door\u2019s always open,\u2019 and it\u2019s just a saying. His door was actually always open no matter when you showed up. \u2026 He started to plant the seeds in how you could make a change in how you behave,\u201d Wilder said. \n\n\u201cHaving people in a big institution make you feel like you\u2019re a part of it, regardless of where you come from and who you were, and make you proud of all those things that sometimes can be seen as something holding you back [was what Awn did]. He makes you flourish into who you are. ... He made GS be what GS is. He is the school, he is GS,\u201d Ana Almanzar, GS\u201907, said. \n\nimage: https://int.nyt.com/data/tap-stories/assets/5c06dc9c94db960001b82f84/7330bdb1f80111e88828fb98e26a0fcb-img.jpg\n\nAnnie Cardelus, GS \u201891, met Awn at an alumni event. She wore a pink and grey striped sock in honor of his style. \u201cHe was just funny, charismatic, energetic. [He] loved General Studies\u2014he was a community builder. I\u2019m here to represent the community he built,\u201d Cardelus said.  \n\nAwn, Joan Arnold, GS \u201872, said, was the one who influenced her to trek across the world through their conversations. Though Arnold did not know Awn personally during her time as and undergraduate, she met eventually him at an alumni event. \u201cI just love Dean Awn. He was the one that interested me to go to the Middle East; Morocco and Turkey.\u201d Arnold said. \n\n[]\n").copy),A=m()({App:{}})(function(e){var a=e.classes;return i.a.createElement("div",{className:a.App},i.a.createElement(N,{slides:W}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(248);r.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,1,2]]]);
//# sourceMappingURL=main.65ce7e9d.chunk.js.map