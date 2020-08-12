(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(9),c=(a(0),a(186)),b={id:"tracks",title:"Tracks",sidebar_label:"Tracks"},l={id:"version-5.1.1/web/tracks",title:"Tracks",description:"GetSeveralTracks",source:"@site/versioned_docs/version-5.1.1/web/tracks.md",permalink:"/SpotifyAPI-NET/docs/web/tracks",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/tracks.md",version:"5.1.1",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1597215713,sidebar_label:"Tracks",sidebar:"version-5.1.1/someSidebar",previous:{title:"Search",permalink:"/SpotifyAPI-NET/docs/web/search"},next:{title:"Utilities",permalink:"/SpotifyAPI-NET/docs/web/utilities"}},i=[{value:"GetSeveralTracks",id:"getseveraltracks",children:[]},{value:"GetTrack",id:"gettrack",children:[]},{value:"GetAudioAnalysis",id:"getaudioanalysis",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"getseveraltracks"},"GetSeveralTracks"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Get Spotify catalog information for multiple tracks based on their Spotify IDs.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ids"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A list of the Spotify IDs for the tracks. Maximum: 50 IDs."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'new List<String> {"6Y1CLPwYe7zvI8PJiWVz6T"}'))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"market"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(c.b)("p",null,"Returns a ",Object(c.b)("inlineCode",{parentName:"p"},"SeveralTracks")," object which has one property, ",Object(c.b)("inlineCode",{parentName:"p"},"List<FullTrack> Tracks")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Usage")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'SeveralTracks severalTracks = _spotify.GetSeveralTracks(new List<String> {"6Y1CLPwYe7zvI8PJiWVz6T"});\nseveralTracks.Tracks.ForEach(track => Console.WriteLine(track.Name));\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"gettrack"},"GetTrack"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Get Spotify catalog information for a single track identified by its unique Spotify ID.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The Spotify ID for the track."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"6Y1CLPwYe7zvI8PJiWVz6T"'))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"market"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(c.b)("p",null,"Returns a ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#track-object-full"}),"FullTrack")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Usage")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'FullTrack track = _spotify.GetTrack("6Y1CLPwYe7zvI8PJiWVz6T");\nConsole.WriteLine(track.Name);\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"getaudioanalysis"},"GetAudioAnalysis"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Get a detailed audio analysis for a single track identified by its unique Spotify ID.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The Spotify ID for the track."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"6Y1CLPwYe7zvI8PJiWVz6T"'))))),Object(c.b)("p",null,"Returns a AudioAnalysis. This object is currently lacking Spotify documentation but archived ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20160528174915/http://developer.echonest.com/docs/v4/_static/AnalyzeDocumentation.pdf"}),"EchoNest documentation")," is relevant."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Usage")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'AudioAnalysis analysis = _spotify.GetAudioAnalysis("6Y1CLPwYe7zvI8PJiWVz6T");\nConsole.WriteLine(analysis.Meta.DetailedStatus);\n')))}p.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),O=r,d=s["".concat(b,".").concat(O)]||s[O]||u[O]||c;return a?n.a.createElement(d,l({ref:t},o,{components:a})):n.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);