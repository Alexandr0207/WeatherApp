(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){},11:function(e,a,t){e.exports={inp:"_3ESOH",header:"_2sIS6",location:"teVei",author:"_1dQhf",search:"_26LWE",time_info:"_3B3R2",form:"INyHE",city:"_1VPJO",time:"NOOQA"}},16:function(e,a,t){e.exports={knopk:"_3hr18",knopka:"_1kUtc",knopkk:"_3FQFn",list:"_8INH5"}},20:function(e,a,t){e.exports={list:"_1xDAO",lilist:"O50NW",bttn:"_1113m",favor:"BAUbv",item:"_1isD1",span:"_26bPU"}},27:function(e,a,t){e.exports={info:"_2T-rN",oneDay:"_1Nz8R",vh:"_FU8O",img:"_3TIVr"}},28:function(e,a,t){e.exports={App:"_3Ge-C",load:"W9xtm",loading:"_2QRo5",five:"_1UXrc"}},298:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(87),c=t.n(r),o=t(300),l=(t(104),t(98)),s=t(57),m=t.n(s),d=t(88),u=t(39),p=t(40),f=t(45),h=t(41),v=t(46),g=t(18),A=t.n(g),E=t(42),y=t.n(E),k=t(5),N=t.n(k),w=t(11),b=t.n(w),D=t(89),x=t.n(D),L=t(90),_=t.n(L),I=function(e){e.temp,e.pressure,e.humidity,e.temp_min,e.temp_max,e.query;var a=e.changedInput,t=e.fetchData,n=e.date,r=e.location,c=e.city;return i.a.createElement("header",null,i.a.createElement("p",{className:b.a.author},"Made by Zhuk"),i.a.createElement("div",{className:b.a.header},i.a.createElement("form",{className:b.a.form,onSubmit:t},i.a.createElement("input",{className:b.a.inp,onChange:a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",name:"name",type:"text",id:""}),i.a.createElement("img",{className:b.a.search,src:_.a,onClick:t,alt:"search"})),i.a.createElement("div",{className:b.a.time_info},i.a.createElement("div",{className:b.a.time},n),i.a.createElement("p",{className:b.a.city},r,",",c),i.a.createElement("img",{src:x.a,className:b.a.location,alt:""}))))},O=t(27),S=t.n(O),C=function(e){var a=e.data,t=(e.fetchData,e.temp),n=e.pressure,r=e.humidity,c=e.temp_min,o=e.temp_max,l=e.sunrise,s=e.sunset,m=e.wind;return i.a.createElement("div",{className:S.a.vh},i.a.createElement("div",{className:S.a.oneDay},i.a.createElement("div",{className:S.a.info},i.a.createElement("img",{className:S.a.img,src:"http://openweathermap.org/img/w/".concat(a.weather[0].icon,".png"),alt:"Weattherd"}),i.a.createElement("div",null,i.a.createElement("p",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",t.toFixed(0),"\xb0"),i.a.createElement("p",null,"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",n,"\u043c\u043c"),i.a.createElement("p",null,"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",r,"%"),i.a.createElement("p",null,"min \xb0C: ",c,"\xb0"),i.a.createElement("p",null,"max \xb0C: ",o,"\xb0"),i.a.createElement("p",null,"\u0412\u043e\u0441\u0445\u043e\u0434 \u0441\u043e\u043b\u043d\u0446\u0430: ",N.a.unix(l).format("HH:mm")," \u043f\u043e \u043c\u0435\u0441\u0442\u043d\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),i.a.createElement("p",null,"\u0417\u0430\u0445\u043e\u0434 \u0441\u043e\u043b\u043d\u0446\u0430: ",N.a.unix(s).format("HH:mm")," \u043f\u043e \u043c\u0435\u0441\u0442\u043d\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),i.a.createElement("p",null,"\u0412\u0435\u0442\u0435\u0440: ",m,"\u043c/\u0441")))))},M=t(20),G=t.n(M),J=t(91),F=t.n(J),H=function(e){var a=e.favorList,t=e.clickFavoriteList,n=e.deletLi,r=e.favorListFunk;return i.a.createElement("div",{className:G.a.favor},i.a.createElement("button",{className:G.a.bttn,onClick:r},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),i.a.createElement("ul",{className:G.a.list},a.map(function(e){return i.a.createElement("li",{className:G.a.lilist,onClick:t,id:e,key:e},e,i.a.createElement("img",{className:G.a.span,src:F.a,alt:"remove",onClick:n,"data-id":e}))})))},Q=t(28),U=t.n(Q),j=t(92),B=t.n(j),P=t(93),W=t.n(P),R=(t(156),function(){return i.a.createElement("div",null)}),T=t(301),q=t(299),K=t(9),Z=t.n(K),V=function(e){var a=e.array,t=e.isLoading;return i.a.createElement("div",null,t?i.a.createElement("div",{className:Z.a.load},i.a.createElement(y.a,{type:"Bars",color:"#fff",height:80,width:80}),i.a.createElement("p",{className:Z.a.loading},"LOADING...")):i.a.createElement("div",{className:Z.a.five},i.a.createElement("div",{className:Z.a.divr},a.map(function(e){return i.a.createElement("div",{className:Z.a.den},i.a.createElement("h2",{className:Z.a.yeardate},0===e.length?null:N.a.unix(e[0].dt).format("dddd")),i.a.createElement("div",{className:Z.a.divd},e.map(function(e){return i.a.createElement("div",{className:Z.a.fiveDayn},i.a.createElement("h3",null,N.a.unix(e.dt).format("MMMM DD \u0447\u0438\u0441\u043b\u043e HH:mm")),i.a.createElement("div",{className:Z.a.icon},i.a.createElement("img",{className:Z.a.img,src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"Weattherd"}),i.a.createElement("p",{className:Z.a.desc},e.weather[0].description)),i.a.createElement("p",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",Math.round(e.main.temp),"\xb0"),i.a.createElement("p",null,"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",(e.main.pressure/1.33).toFixed(2),"\u043c\u043c"),i.a.createElement("p",null,"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",e.main.humidity,"%"),i.a.createElement("p",null,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430: ",e.wind.speed.toFixed(1),"\u043c/\u0441"))})))}))))},X=t(94),z=t(96),Y=t.n(z),$=function(e){var a={labels:[],datasets:[{label:"\u041d\u0430 \u0441\u043b\u0435\u0434\u0443\u0449\u0438\u0435 5 \u0434\u043d\u0435\u0439",backgroundColor:"rgba(1, 126, 24, 0.53)",borderColor:"#ff6384",data:e.chart}]};return i.a.createElement("div",null,i.a.createElement("div",{className:Y.a.ddd},i.a.createElement(X.a,{data:a,options:{tooltips:{mode:"index"},legend:{position:"top",display:!0,backgroundColor:"rgb(255,255,255)",labels:{fontColor:"white",fontSize:20}},title:{display:!0,text:"\u0413\u0440\u0430\u0444\u0438\u043a \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b",position:"top",fontColor:"white",opacity:"1",fontSize:20}}})))},ee=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).state={data:[],isLoading:!0,array:[]},t.gete=function(){for(var e=[],a=function(a){var n=N()().add(a,"day").startOf("day").format("X"),i=N()().add(a,"day").endOf("day").format("X"),r=t.state.data.list.filter(function(e){return e.dt>n&&e.dt<i});e.push(r),console.log(e)},n=0;n<5;n++)a(n);t.setState({array:e})},t.fetchFiveDay=function(e){e&&e.preventDefault();var a=t.props.input;A.a.get("https://api.openweathermap.org/data/2.5/forecast?APPID=c60dd86e9ebff9397278842665cf0376&q=".concat(a||"Kiev","&units=metric&lang=ru")).then(function(e){t.setState({data:e.data,isLoading:!1}),console.log("weathereewe",e)}).then(function(e){t.gete()}).catch(function(e){e&&A.a.get("https://api.openweathermap.org/data/2.5/forecast?APPID=c60dd86e9ebff9397278842665cf0376&q=".concat(a||"Kiev","&units=metric&lang=ru")).then(function(e){t.setState({data:e.data,isLoading:!1}),console.log("weathereewe",e.data)}),console.log(e)})},t}return Object(v.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){this.fetchFiveDay()}},{key:"componentDidUpdate",value:function(e){e.input!==this.props.input&&this.fetchFiveDay()}},{key:"render",value:function(){var e=this.state,a=e.array,t=e.isLoading,n=a.map(function(e){return e.map(function(e){return e.main.temp})}).reduce(function(e,a){return e.concat(a)},[]);return console.log("chart",n),N.a.locale("ru"),console.log(N.a.locale()),i.a.createElement("div",null,i.a.createElement(R,null),i.a.createElement(T.a,null,i.a.createElement(q.a,{exact:!0,path:"/WeatherApp/fiveDay",render:function(){return i.a.createElement(V,{array:a,isLoading:t})}}),i.a.createElement(q.a,{path:"/WeatherApp/fiveDay/chart",render:function(){return i.a.createElement($,{chart:n})}})))}}]),a}(n.Component),ae=t(16),te=t.n(ae),ne=t(302),ie=function(){return i.a.createElement("div",{className:te.a.lise},i.a.createElement("ul",{className:te.a.list},i.a.createElement("li",null,i.a.createElement(ne.a,{className:te.a.knopk,to:"/WeatherApp/"},"1 \u0434\u0435\u043d\u044c ",i.a.createElement("span",{className:te.a.knopk},"| "))),i.a.createElement("li",null,i.a.createElement(ne.a,{className:te.a.knopk,to:"/WeatherApp/fiveDay"},"  5 \u0434\u043d\u0435\u0439")),i.a.createElement("li",null,i.a.createElement(ne.a,{className:te.a.knopkk,to:"/WeatherApp/fiveDay/chart"},i.a.createElement("span",{className:te.a.knopk},"|")," \u0413\u0440\u0430\u0444\u0438\u043a"))))},re=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).state={input:"",geo:{},favorList:JSON.parse(localStorage.getItem("favorList"))||[],data:{},isLoading:!0,validateInput:!1,fetchError:!1,backGroundUrl:"",date:"",location:"",city:"",id:"",input2:"",modal:!1},t.fetchData=function(e){e&&e.preventDefault();var a=t.state.input;Promise.all([A.a.get("https://api.openweathermap.org/data/2.5/weather?APPID=c60dd86e9ebff9397278842665cf0376&q=".concat(a||"Kiev","&units=metric")),A.a.get("https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&per_page=199&q=".concat(a||"Kiev"))]).then(function(e){t.setState({data:e[0].data,isLoading:!1,backGroundUrl:e[1].data.hits[Math.floor(Math.random()*e[1].data.hits.length)].largeImageURL,location:e[0].data.name,city:e[0].data.sys.country,input2:t.state.input}),console.log("weather",e[0]),console.log("photos",e[1].data.hits)}).catch(function(e){e&&A.a.get("https://api.openweathermap.org/data/2.5/weather?APPID=c60dd86e9ebff9397278842665cf0376&q=".concat(a||"Kiev","&units=metric")).then(function(e){t.setState({data:e.data,isLoading:!1,backGroundUrl:"Dzhulynka"===a?W.a:B.a,location:e.data.name,city:e.data.sys.country,input2:t.state.input})}),console.log(e)})},t.time=function(){setInterval(function(){var e=N()().format("HH:mm:ss");t.setState({date:e})},0)},t.changedInput=function(e){var a=e.target.value;t.setState({input:a})},t.clickFavoriteList=function(){var e=Object(d.a)(m.a.mark(function e(a){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.target.id,e.next=3,t.setState({input:n});case 3:t.fetchData(),console.log("click");case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.favorListFunk=function(e){if(""!==t.state.input)if(t.state.favorList.includes(t.state.input))alert("\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435! \u0422\u0430\u043a\u043e\u0439 \u0433\u043e\u0440\u043e\u0434 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435!");else{var a=t.state.input;t.setState(function(e){return{favorList:Object(l.a)(e.favorList).concat([a])}});var n=JSON.parse(localStorage.getItem("favorList"))||[];n.push(a),localStorage.setItem("favorList",JSON.stringify(n))}},t.deletLi=function(e){e.stopPropagation(),console.log(e.target);var a=e.target.dataset.id,n=JSON.parse(localStorage.getItem("favorList")).filter(function(e){return e!==a});localStorage.setItem("favorList",JSON.stringify(n)),t.setState({favorList:n}),console.log("dwaa")},t}return Object(v.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){this.time(),this.fetchData()}},{key:"render",value:function(){var e=this,a=this.state,t=a.data,n=a.input,r=a.backGroundUrl,c=a.date,o=a.location,l=a.city,s=a.input2,m=a.favorList;return i.a.createElement("div",{className:U.a.App,style:{backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(".concat(r,")")}},this.state.isLoading?i.a.createElement("div",{className:U.a.load},i.a.createElement(y.a,{type:"Bars",color:"#fff",height:80,width:80}),i.a.createElement("p",{className:U.a.loading},"LOADING...")):i.a.createElement("div",{className:U.a.cde},i.a.createElement(I,{data:this.state.data,key:t.id,query:n,changedInput:this.changedInput,fetchData:this.fetchData,date:c,location:o,city:l}),i.a.createElement(ie,null),i.a.createElement(H,{favorList:m,clickFavoriteList:this.clickFavoriteList,deletLi:this.deletLi,favorListFunk:this.favorListFunk}),i.a.createElement(T.a,null,i.a.createElement(q.a,{exact:!0,path:"/WeatherApp/",render:function(){return i.a.createElement(C,{fetchData:e.fetchData,data:e.state.data,temp:t.main.temp,pressure:t.main.pressure,humidity:t.main.humidity,temp_min:t.main.temp_min,temp_max:t.main.temp_max,sunrise:t.sys.sunrise,sunset:t.sys.sunset,wind:t.wind.speed})}}),i.a.createElement(q.a,{path:"/WeatherApp/fiveDay",render:function(){return i.a.createElement(ee,{data:e.state.data.list,input:s,temp:t.list,pressure:t.list,humidity:t.list,temp_min:t.list,temp_max:t.list,wind:t.list})}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(o.a,null,i.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,a,t){e.exports=t.p+"static/media/ss.7c5131d8.svg"},9:function(e,a,t){e.exports={fiveDayn:"_3Iv4o",den:"_2HyEX",icon:"_1n-7I",desc:"a2O31",yeardate:"_2k0g-",load:"_3HNPn",loading:"_39GkZ",divr:"_3bDJb",divd:"_2gkio"}},90:function(e,a,t){e.exports=t.p+"static/media/search.c5eb8909.svg"},91:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiDBoMFQPKqgQZAAAAwUlEQVQY04WROw7CQBBDrYXcAYmC3Ai24RaQywASJEhQwQlouQVCQcqm5teR9lEkC+EjmM6yx/J4JEn0ODHBSJKEYcyJripoKYjISTAShhhHRIH1ZF8iJCemwQxHKNGnwIozg8olJGePo1PhAWcxI6X9EGwfZJuUqTAsOHiBH1rsWNEsky6eDm+kJBGQsanRGzICDxosv2yvvfUb+SL4l/z64+5LvTVH8tGahOXGEMe81vmQG9YH6XJkXPvYiGP5sTvH+c+jTKqw/wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMi0yNlQxMToyMTowMyswMTowMCsnKq8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTItMjZUMTE6MjE6MDMrMDE6MDBaepITAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},92:function(e,a,t){e.exports=t.p+"static/media/backround.c0e27aa7.jpg"},93:function(e,a,t){e.exports=t.p+"static/media/Dzhul.3bb8a020.jpg"},96:function(e,a,t){e.exports={ddd:"g4RvO"}},99:function(e,a,t){e.exports=t(298)}},[[99,2,1]]]);
//# sourceMappingURL=main.25bf4196.chunk.js.map