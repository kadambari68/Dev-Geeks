(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,n){e.exports=n(347)},347:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(55),i=n.n(o),r=n(35),g=n(137),c=n(138),s=n(142),p=n(141),m=n(18),d=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).path=[{lat:12.9802347063322,lng:77.5907760360903,bearing:-20.5784744283754},{lat:12.9793774204024,lng:77.5910979011596,bearing:17.1118088152409},{lat:12.9795865148043,lng:77.5911622741734,bearing:70.6690312217414},{lat:12.9797746996155,lng:77.5916987159555,bearing:38.1233134168197},{lat:12.9801301594259,lng:77.5919776656823,bearing:-45.7414247345699},{lat:12.9798374278543,lng:77.5922780730802,bearing:16.0994201411847},{lat:12.9791683258247,lng:77.5920849540387,bearing:35.6916527554558},{lat:12.9787501361417,lng:77.5917845466407,bearing:58.0502467067782},{lat:12.9784155838887,lng:77.5912481048586,bearing:64.0233912454979},{lat:12.9784783124705,lng:77.5913768508863,bearing:45.7412428776673},{lat:12.9783319457552,lng:77.5912266471873,bearing:-69.926654677622},{lat:12.978394674358,lng:77.591054985817,bearing:16.3413468751341},{lat:12.9779555738058,lng:77.5909262397893,bearing:54.6749460887583},{lat:12.9776210204837,lng:77.5904541710211,bearing:64.0233096712307},{lat:12.9774746532636,lng:77.5901537636231,bearing:65.5464053454266},{lat:12.9761573444059,lng:77.5872569779997,bearing:-66.4029340594377},{lat:12.9764291706147,lng:77.5866347055324,bearing:-48.4630801907934},{lat:12.9766382674962,lng:77.5863986711483,bearing:-54.992843944921},{lat:12.9771191896563,lng:77.5857120256672,bearing:-60.0659370316888}],e.state={progress:[],directions:null},e.stops=[{lat:12.9802347063322,lng:77.5907760360903,id:"stop1"},{lat:12.9787501361417,lng:77.5917845466407,id:"stop2"},{lat:12.9771191896563,lng:77.5857120256672,id:"stop3"}],e.velocity=100,e.initialDate=new Date,e.getDistance=function(){return(new Date-e.initialDate)/1e3*e.velocity},e.componentDidMount=function(){e.interval=window.setInterval(e.moveObject,1e3)},e.componentWillUnmount=function(){console.log("CLEAR........"),window.clearInterval(e.interval)},e.moveObject=function(){var t=e.getDistance();if(t){var n=e.path.filter(function(e){return e.distance<t}),a=e.path.find(function(e){return e.distance>t});if(!a)return e.setState({progress:n}),void window.clearInterval(e.interval);var l=n[n.length-1],o=new window.google.maps.LatLng(l.lat,l.lng),i=new window.google.maps.LatLng(a.lat,a.lng),r=a.distance-l.distance,g=(t-l.distance)/r,c=window.google.maps.geometry.spherical.interpolate(o,i,g);n=n.concat(c),e.setState({progress:n})}},e.componentWillMount=function(){e.calculatePath(),console.log(e.path)},e.calculatePath=function(){e.path=e.path.map(function(e,t,n){if(0===t)return Object(r.a)(Object(r.a)({},e),{},{distance:0});var a=e.lat,l=e.lng,o=new window.google.maps.LatLng(a,l),i=n[0],g=i.lat,c=i.lng,s=new window.google.maps.LatLng(g,c),p=window.google.maps.geometry.spherical.computeDistanceBetween(o,s);return Object(r.a)(Object(r.a)({},e),{},{distance:p})})},e.startSimmulator=function(){console.log("RELOAD THE COMPONENT.....")},e.componentDidUpdate=function(){var t=e.getDistance();if(t){var n,a,l=e.path.filter(function(e){return e.distance<t}),o=e.path.find(function(e){return e.distance>t});o?(n=l[l.length-1],a=o):(n=l[l.length-2],a=l[l.length-1]);var i=new window.google.maps.LatLng(n.lat,n.lng),r=new window.google.maps.LatLng(a.lat,a.lng),g=window.google.maps.geometry.spherical.computeHeading(i,r)-90,c=document.querySelector('[src="'.concat("https://images.vexels.com/media/users/3/154573/isolated/preview/bd08e000a449288c914d851cb9dae110-hatchback-car-top-view-silhouette-by-vexels.png",'"]'));c&&(c.style.transform="rotate(".concat(g,"deg)"))}},e.render=function(){var t={url:"https://images.vexels.com/media/users/3/154573/isolated/preview/bd08e000a449288c914d851cb9dae110-hatchback-car-top-view-silhouette-by-vexels.png",scaledSize:new window.google.maps.Size(30,30),anchor:new window.google.maps.Point(15,15),scale:.7};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.GoogleMap,{defaultZoom:16,defaultCenter:{lat:e.path[0].lat,lng:e.path[0].lng}},l.a.createElement("button",{onClick:e.startSimmulator},"Start Simmulator"),l.a.createElement(m.Polyline,{traffic:new window.google.maps.TrafficLayer,path:e.path,options:{strokeColor:"#0088FF",strokeWeight:6,strokeOpacity:.6}}),e.stops.map(function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Marker,{key:e.id,position:{lat:e.lat,lng:e.lng},title:e.id,label:"".concat(t+1)}))}),e.state.progress&&l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Polyline,{path:e.state.progress,options:{strokeColor:"pink"}}),l.a.createElement(m.Marker,{icon:t,position:e.state.progress[e.state.progress.length-1]}))))},e}return Object(g.a)(n)}(l.a.Component),u=Object(m.withScriptjs)(Object(m.withGoogleMap)(d)),w="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyA5Lt3E5gYb-lfogvaSpCrvCpocLqHwNOI"),h=function(){return l.a.createElement(u,{googleMapURL:w,loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"600px",width:"600px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})})},b=document.getElementById("root");i.a.render(l.a.createElement(h,null),b)}},[[143,1,2]]]);
//# sourceMappingURL=main.8e79c4e8.chunk.js.map