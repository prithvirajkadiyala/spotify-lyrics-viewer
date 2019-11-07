(window["webpackJsonpspotify-lyrics-viewer-client"]=window["webpackJsonpspotify-lyrics-viewer-client"]||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/spotify-logo-round.d154494c.png"},52:function(e,t,n){e.exports=n.p+"static/media/banner.ba112450.png"},62:function(e,t,n){e.exports=n(94)},67:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),l=(n(67),n(9)),c=n(16),s=n(17),u=n.n(s),m=n(23),f=n(121),d=n(109),p=n(120),g=n(108),y=n(33),h=n.n(y),E=function(e){var t=e.user,n=e.onLoggedInClick;return r.a.createElement(g.a,{variant:"outline-secondary",onClick:function(){null===t?Object(c.navigate)("/spotify-authorization"):n&&n()}},r.a.createElement("img",{src:null!==t&&void 0!==t.images&&t.images.length>0?t.images[0].url:h.a,alt:null!==t&&void 0!==t.images&&t.images.length>0?t.display_name+" Logo":"Spotify Logo Round",style:{height:20,width:20},className:"mr-2 rounded-circle"}),null!==t?t.display_name:"Sign In With Spotify")},v=n(52),b=n.n(v),k={"/":"Home","/about":"About"},j=function(e){var t=e.user,n=e.onLogout,a=Object(c.usePath)(),i=function(e){return function(){return Object(c.navigate)(e)}};return r.a.createElement(f.a,{collapseOnSelect:!0,expand:"md",bg:"light",variant:"light",sticky:"top"},r.a.createElement(d.a,null,r.a.createElement(f.a.Brand,{onClick:i("/")},r.a.createElement("img",{src:b.a,height:"30",className:"d-inline-block align-top",alt:"Emotionify Banner Logo",style:{cursor:"pointer"}})),r.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},Object.keys(k).map((function(e){return r.a.createElement(p.a.Link,{key:e,href:"#",onClick:i(e),active:a===e},k[e])}))),r.a.createElement(p.a,null,r.a.createElement(E,{user:t,onLoggedInClick:function(){window.confirm("Are you sure you want to logout?")&&n()}})))))},w=n(110),N=n(111),S=function(){return r.a.createElement(d.a,null,r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(N.a,{className:"col-md-10 col-lg-8"},r.a.createElement("h2",{className:"text-center"},"About"),r.a.createElement("p",null,"Spotify Lyrics Viewer is a tool that allows you to view the lyrics of the current playing song on Spotify."),r.a.createElement("p",null,"To do this, we first log you into Spotify so we can see the current song playing. The title and artist are then used to try and find the lyrics on ",r.a.createElement("a",{href:"https://genius.com/"},"GENIUS")," and whatever lyrics matched the best are displayed to you."),r.a.createElement("p",null,"Please note that the lyrics returned may not be for the current playing song in some situations due the the lyrics not existing on GENIUS or the fact that the current playing songs title has some extra content to it aside from the actual title."))))},O=n(112),T=n(11),x=n(124),A=n(122),_=n(113),C=n(114),L=n(115),P=n(116),U=Object(T.a)({rail:{borderRadius:4,height:8},root:{color:"#52af77",height:8},thumb:{"&:focus,&:hover,&$active":{boxShadow:"inherit"},backgroundColor:"#fff",border:"2px solid currentColor",height:20,marginLeft:-12,marginTop:-6,width:20},track:{borderRadius:4,height:8}})(x.a),M=function(e,t){return m.a.error(JSON.parse(t.responseText).error.message,{position:"bottom-center",heading:e,hideAfter:20,onClick:function(e){return e()}})},I=function(e){var t=e.albumArtUrl,n=e.title,i=e.artist,o=e.album,c=e.durationMs,s=e.progressMs,m=e.isPlaying,f=e.spotifyToken,d=Object(a.useState)(0),p=Object(l.a)(d,2),g=p[0],y=p[1],h=Object(a.useState)(!1),E=Object(l.a)(h,2),v=E[0],b=E[1],k=Object(a.useState)(null),j=Object(l.a)(k,2),w=j[0],N=j[1],S=void 0===c?0:c;Object(a.useEffect)((function(){v||y(s)}),[v,s]),Object(a.useEffect)((function(){null!==w&&clearTimeout(w);return N(setInterval((function(){!v&&m&&y((function(e){return Math.min(e+500,S)}))}),500)),function(){null!==w&&clearTimeout(w)}}),[v,m]);return r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"130px 230px 1fr",maxWidth:700,margin:"auto",background:"#f3f3f3"}},r.a.createElement("div",{className:"m-1"},t?r.a.createElement("img",{src:t,alt:"".concat(o," Album Art"),className:"w-100"}):r.a.createElement("div",{className:"d-flex justify-content-center align-items-center h-100"},r.a.createElement(O.a,{animation:"border"}))),r.a.createElement("div",{className:"ml-1 d-flex flex-column justify-content-center"},r.a.createElement("p",{className:"m-1"},n),r.a.createElement("p",{className:"m-1"},i),r.a.createElement("p",{className:"m-1"},o)),r.a.createElement("div",{className:"p-3 align-self-center"},r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement(A.a,{onClick:function(){if(f){var e=new u.a;e.setAccessToken(f),e.skipToPrevious().catch((function(e){return M("Failed to Skip to Previous Song",e)}))}},className:"p-2"},r.a.createElement(_.a,{fontSize:"large"})),r.a.createElement(A.a,{onClick:function(){if(f){var e=new u.a;e.setAccessToken(f),m?e.pause().catch((function(e){return M("Failed to Pause",e)})):e.play().catch((function(e){return M("Failed to Play",e)}))}},className:"p-2"},m?r.a.createElement(C.a,{fontSize:"large"}):r.a.createElement(L.a,{fontSize:"large"})),r.a.createElement(A.a,{onClick:function(){if(f){var e=new u.a;e.setAccessToken(f),e.skipToNext().catch((function(e){M("Failed to Skip to Next Song",e)}))}},className:"p-2"},r.a.createElement(P.a,{fontSize:"large"}))),r.a.createElement(U,{valueLabelDisplay:"off",value:g,min:0,max:S,onMouseDown:function(){return b(!0)},onMouseUp:function(){if(b(!1),f){var e=new u.a;e.setAccessToken(f),e.seek(g).catch((function(e){return M("Failed to Seek",e)}))}},onChange:function(e,t){return y(Array.isArray(t)?t[0]:t)},className:"py-1"}))))},F=function(e){var t=e.current,n=e.token;return r.a.createElement(d.a,null,r.a.createElement(I,{albumArtUrl:h.a,title:"Advertisement",artist:"Spotify",album:"",durationMs:3e4,progressMs:null!==t.progress_ms?t.progress_ms:0,isPlaying:t.is_playing,spotifyToken:n}))},R=function(){return r.a.createElement(d.a,{className:"text-center"},r.a.createElement("h2",null,"Error"),r.a.createElement("p",null,"An unexpected error ocurred"))},z=n(57),D=n.n(z),B=n(117),W=n(119),J=n(118),G=n(123),H=(n(92),Object(B.a)({lyrics:{fontSize:18,lineHeight:"1.7em",whiteSpace:"pre-wrap"},root:{margin:"auto",maxWidth:700,position:"relative"},toggleSearchButton:{margin:"-6px -6px 0 0",position:"absolute",right:0,top:0}})),V=function(e){var t=e.lyrics,n=e.lyricsArtist,i=e.lyricsTitle,o=e.geniusUrl,c=H(),s=Object(a.useRef)(null),u=Object(a.useRef)(null),m=Object(a.useState)(""),f=Object(l.a)(m,2),d=f[0],p=f[1],y=Object(a.useState)(!1),h=Object(l.a)(y,2),E=h[0],v=h[1];Object(a.useEffect)((function(){if(null!==s.current){var e=new D.a(s.current);e.unmark(),""!==d&&e.mark(d)}}),[d,t]),Object(a.useEffect)((function(){E&&null!==u.current&&u.current.focus()}),[E]);var b=function(){return v((function(e){return!e}))};return r.a.createElement("div",{className:"".concat(c.root," text-center")},E?r.a.createElement(J.a,{className:"mb-3"},r.a.createElement(G.a,{ref:u,onChange:function(e){return p(void 0===e.currentTarget.value?"":e.currentTarget.value)},value:d,placeholder:"Search lyrics you heard to find your position...",className:"text-center"}),r.a.createElement(J.a.Append,null,r.a.createElement(g.a,{variant:"outline-secondary",onClick:b},"Close"))):r.a.createElement(A.a,{className:c.toggleSearchButton,onClick:b},r.a.createElement(W.a,{fontSize:"small"})),t?r.a.createElement("div",null,r.a.createElement("div",{className:c.lyrics,ref:s},t),r.a.createElement("div",{className:"mt-4 text-left"},r.a.createElement("a",{href:"https://genius.com".concat(o),target:"_blank"},"Lyrics for ",i," by ",n))):r.a.createElement(O.a,{animation:"border"}))},$=function(){return r.a.createElement(d.a,null,r.a.createElement(I,{albumArtUrl:void 0,title:"",artist:"",album:"",durationMs:0,progressMs:0,isPlaying:!1,spotifyToken:void 0}),r.a.createElement("div",{className:"mt-3"},r.a.createElement(V,{lyrics:void 0,lyricsArtist:void 0,lyricsTitle:void 0,geniusUrl:void 0})))},Y=function(){return r.a.createElement(d.a,{className:"text-center"},r.a.createElement("h2",null,"No Song is Playing"),r.a.createElement("p",null,"A song must be playing on Spotify for lyrics to be displayed.",r.a.createElement("br",null),"Also make sure you are not using a private session."))},q=function(e){var t=e.current,n=e.lyricDetails,a=e.token,i=t.item?t.item.album.images[0].url:void 0,o=t.item?t.item.name:void 0,l=t.item?t.item.artists.map((function(e){return e.name})).join(", "):void 0,c=t.item?t.item.album.name:void 0,s=null!==t.item?t.item.duration_ms:0,u=null!==t.progress_ms?t.progress_ms:0,m=t.is_playing;return r.a.createElement(d.a,null,r.a.createElement(I,{albumArtUrl:i,title:o,artist:l,album:c,durationMs:s,progressMs:u,isPlaying:m,spotifyToken:a}),r.a.createElement("div",{className:"mt-3"},r.a.createElement(V,{lyrics:n?n.content:void 0,lyricsArtist:n?n.artist:void 0,lyricsTitle:n?n.title:void 0,geniusUrl:n?n.geniusUrl:void 0})))},K=function(e){var t=e.user;return r.a.createElement(d.a,{className:"text-center"},r.a.createElement("h2",null,"Spotify Lyrics Viewer"),r.a.createElement("p",null,"To get access to your current playing song, you need to sign into Spotify."),r.a.createElement(E,{user:t}))},Q={api:{root:"https://spotify-lyrics-viewer.herokuapp.com",spotify_authentication_route:"/api/spotify/authenticate"}};var X=function(e){var t=e.token,n=e.user,i=Object(a.useState)("Loading"),o=Object(l.a)(i,2),c=o[0],s=o[1],f=Object(a.useState)(void 0),d=Object(l.a)(f,2),p=d[0],g=d[1],y=Object(a.useState)(null),h=Object(l.a)(y,2),E=h[0],v=h[1],b=function(e){var t=new u.a;t.setAccessToken(e),t.getMyCurrentPlayingTrack().then((function(e){s(""===e?"NotPlaying":e)})).catch((function(e){s("Error"),m.a.error(JSON.parse(e.responseText).error.message,{position:"bottom-center",heading:"Failed to Get Current Song",hideAfter:20,onClick:function(e){return e()}})}))};return Object(a.useEffect)((function(){null!==t?b(t.value):s("Loading")}),[t]),Object(a.useEffect)((function(){if(null!==E&&clearTimeout(E),"NotPlaying"!==c&&"Loading"!==c&&"Error"!==c&&c.item){var e=c.item.duration_ms-(null===c.progress_ms?0:c.progress_ms)+500;v(setTimeout((function(){null!==t&&b(t.value)}),e))}return function(){null!==E&&clearTimeout(E)}}),[c]),Object(a.useEffect)((function(){var e=setInterval((function(){null!==t&&b(t.value)}),5e3);return function(){return clearTimeout(e)}}),[t]),Object(a.useEffect)((function(){"NotPlaying"!==c&&"Loading"!==c&&"Error"!==c&&c.item?void 0!==p&&c.item.id===p.spotifyId||(g(void 0),function(e,t){var n={artist:e,title:t};return fetch("".concat(Q.api.root,"/api/genius/lyrics?").concat(new URLSearchParams(n))).then((function(e){return e.json()}))}(c.item.artists[0].name,c.item.name).then((function(e){null!==c.item&&g({artist:e.artist,content:e.lyrics,geniusUrl:e.geniusUrl,spotifyId:c.item.id,title:e.title})}))):g(void 0)}),[c]),null===n?r.a.createElement(K,{user:n}):"Loading"===c?r.a.createElement($,null):"NotPlaying"===c?r.a.createElement(Y,null):"Error"===c?r.a.createElement(R,null):"ad"===c.currently_playing_type?r.a.createElement(F,{current:c,token:null===t?void 0:t.value}):r.a.createElement(q,{current:c,lyricDetails:p,token:null===t?void 0:t.value})},Z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not Found"))},ee=function(e){var t=e.onNewToken,n=window.location.search,a=r.a.createElement(r.a.Fragment,null);if(""===n)window.location.href=Q.api.root+Q.api.spotify_authentication_route,a=r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{animation:"border"}),r.a.createElement("p",{className:"lead"},"Redirecting"));else{var i=new URLSearchParams(n.substr(1)),o=i.get("access_token"),l=i.get("expires_at");null!==o&&null!==l?(t(o,parseInt(l,10)),Object(c.navigate)("/"),a=r.a.createElement("p",{className:"lead"},"Token received")):a=r.a.createElement("p",{className:"lead"},"Incorrect URL parameters")}return r.a.createElement(d.a,{className:"text-center"},r.a.createElement("h1",null,"Spotify Authorization"),a)},te=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(null),s=Object(l.a)(o,2),f=s[0],d=s[1],p=Object(a.useState)(null),g=Object(l.a)(p,2),y=g[0],h=g[1];Object(a.useEffect)((function(){if(null===n)d(null);else{var e=new u.a;e.setAccessToken(n.value),e.getMe().then((function(e){return d(e)})).catch((function(e){return m.a.error("Could not get your profile. Make sure you are connected to the internet and that your token is valid.",{position:"bottom-center",heading:"Error When Fetching Your Profile",hideAfter:20,onClick:function(e){return e()}})}))}}),[n]),Object(a.useEffect)((function(){if(null!==y&&clearTimeout(y),null!==n){var e=n.expiry.getTime()-(new Date).getTime()-6e4;h(setTimeout((function(){fetch("".concat(Q.api.root,"/api/spotify/refresh-token"),{credentials:"include"}).then((function(e){return 200===e.status?e.json():null})).then((function(e){null!==e?E(e.access_token,e.expires_at):(m.a.warn("Unable to keep logged into Spotify. Please log back in.",{position:"bottom-center",heading:"Spotify Login Expired",hideAfter:20,onClick:function(e){return e()}}),v())}))}),e))}return function(){null!==y&&clearTimeout(y)}}),[n]),Object(a.useEffect)((function(){fetch("".concat(Q.api.root,"/api/spotify/token"),{credentials:"include"}).then((function(e){return 200===e.status?e.json():null})).then((function(e){null!==e&&E(e.access_token,e.expires_at)}))}),[]);var E=function(e,t){i({expiry:new Date(t),value:e})},v=function(){i(null),fetch("".concat(Q.api.root,"/api/session"),{credentials:"include",method:"DELETE"})},b={"/":function(){return r.a.createElement(X,{token:n,user:f})},"/about":function(){return r.a.createElement(S,null)},"/spotify-authorization":function(){return r.a.createElement(ee,{onNewToken:E})},"/spotify-authorization/":function(){return r.a.createElement(ee,{onNewToken:E})}},k=Object(c.useRoutes)(b);return Object(c.useRedirect)("/about/","/about"),r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{user:f,onLogout:v}),r.a.createElement("div",{className:"my-3"},k||r.a.createElement(Z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.97da0824.chunk.js.map