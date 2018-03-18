// Author: Hannes Hofmann, URL: http://uwr1.de/, License: BSD
function loadJS(u){document.write('<script type="text/javascript" src="'+u+'"></script>');}

loadJS('https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js');
// load actual uwr1 API scripts
document.write('<link href="https://uwr1cdn2.appspot.com/css/uwr1-api-liga.css" rel="stylesheet" type="text/css" />');

// LAB.js (LABjs :: Loading And Blocking JavaScript) | v1.0.1 (c) Kyle Simpson | MIT License
(function(m){var o="string",x="head",H="body",W="script",r="readyState",j="preloaddone",y="loadtrigger",I="srcuri",t="preload",X="complete",z="done",A="which",E="onreadystatechange",Y="onload",J="hasOwnProperty",e=null,h=true,i=false,p=m.document,bu=p.location,Z=m.ActiveXObject,u=m.setTimeout,ba=m.clearTimeout,K=function(a){return p.getElementsByTagName(a)},L=Object.prototype.toString,M=function(){},B={},N={},bb=/^[^?#]*\//.exec(bu.href)[0],bc=/^\w+\:\/\/\/?[^\/]+/.exec(bb)[0],bv=K(W),bd=m.opera&&L.call(m.opera)=="[object Opera]",be=(function(a){a[a]=a+"";return a[a]!=a+""})(new String("__count__")),v={cache:!(be||bd),order:be||bd,xhr:h,dupe:h,preserve:i,base:"",which:x};v[t]=h;B[x]=K(x);B[H]=K(H);function O(a){return L.call(a)==="[object Function]"}function P(a,b){var c=/^\w+\:\/\//,d;if(typeof a!==o)a="";if(typeof b!==o)b="";d=(c.test(a)?"":b)+a;return((c.test(d)?"":(d.charAt(0)==="/"?bc:bb))+d)}function bw(a){return(P(a).indexOf(bc)===0)}function bx(a){var b=0,c;while(c=bv[b++]){if(typeof c.src===o&&a===P(c.src)&&c.getAttribute("rel")!==t)return h}return i}function F(s,k){s=!(!s);if(k==e)k=v;var bf=i,C=s&&k[t],bg=C&&k.cache,G=C&&k.order,bh=C&&k.xhr,by=k.preserve,bz=k.which,bA=k.base,bi=M,Q=i,w,q=h,l={},R=[],S=null;C=bg||bh||G;function bj(a,b){if((a[r]&&a[r]!==X&&a[r]!=="loaded")||b[z]){return i}a[Y]=a[E]=e;return h}function T(a,b,c){c=!(!c);if(!c&&!(bj(a,b)))return;b[z]=h;for(var d in l){if(l[J](d)&&!(l[d][z]))return}bf=h;bi()}function bk(a){if(O(a[y])){a[y]();a[y]=e}}function bB(a,b){if(!bj(a,b))return;b[j]=h;u(function(){B[b[A]][0].removeChild(a);bk(b)},0)}function bC(a,b){if(a[r]===4){a[E]=M;b[j]=h;u(function(){bk(b)},0)}}function U(f,g,n,D,bD,bl,bm){u(function(){if(B[f[A]][0]===e){u(arguments.callee,25);return}var c=p.createElement(W),d=function(a,b){c.setAttribute(a,b)};d("type",n);d("rel",bD);if(typeof D===o)d("charset",D);if(O(bl)){c[Y]=c[E]=function(){bl(c,f)};d("src",g)}B[f[A]][0].appendChild(c);if(typeof bm===o){c.text=bm;T(c,f,h)}},0)}function bn(a,b,c,d){N[a[I]]=h;U(a,b,c,d,"",T)}function bo(a,b,c,d){var f=arguments;if(q&&a[j]==e){a[j]=i;U(a,b,"text/html",d,t,bB)}else if(!q&&a[j]!=e&&!a[j]){a[y]=function(){bo.apply(e,f)}}else if(!q){bn.apply(e,f)}}function bp(a,b,c,d){var f=arguments,g;if(q&&a[j]==e){a[j]=i;g=a.xhr=(Z?new Z("Microsoft.XMLHTTP"):new m.XMLHttpRequest());g[E]=function(){bC(g,a)};g.open("GET",b);g.send("")}else if(!q&&a[j]!=e&&!a[j]){a[y]=function(){bp.apply(e,f)}}else if(!q){N[a[I]]=h;U(a,b,c,d,"",e,a.xhr.responseText);a.xhr=e}}function bq(a){if(a.allowDup==e)a.allowDup=k.dupe;var b=a.src,c=a.type,d=a.charset,f=a.allowDup,g=P(b,bA),n,D=bw(g);if(typeof c!==o)c="text/javascript";if(typeof d!==o)d=e;f=!(!f);if(!f&&((N[g]!=e)||(q&&l[g])||bx(g))){if(l[g]!=e&&l[g][j]&&!l[g][z]&&D){T(e,l[g],h)}return}if(l[g]==e)l[g]={};n=l[g];if(n[A]==e)n[A]=bz;n[z]=i;n[I]=g;Q=h;if(!G&&bh&&D)bp(n,g,c,d);else if(!G&&bg)bo(n,g,c,d);else bn(n,g,c,d)}function br(a){R.push(a)}function V(a){if(s&&!G)br(a);if(!s||C)a()}function bs(a){var b=[],c;for(c=0;c<a.length;c++){if(L.call(a[c])==="[object Array]")b=b.concat(bs(a[c]));else b[b.length]=a[c]}return b}w={script:function(){ba(S);var b=bs(arguments),c=w;if(by){for(var d=0;d<b.length;d++){if(d===0){V(function(){bq((typeof b[0]===o)?{src:b[0]}:b[0])})}else c=c.script(b[d]);c=c.wait()}}else{V(function(){for(var a=0;a<b.length;a++){bq((typeof b[a]===o)?{src:b[a]}:b[a])}})}S=u(function(){q=i},5);return c},wait:function(a){ba(S);q=i;if(!O(a))a=M;var b=F(h,k),c=b.trigger,d=function(){try{a()}catch(err){}c()};delete b.trigger;var f=function(){if(Q&&!bf)bi=d;else u(d,0)};if(s&&!Q)br(f);else V(f);return b}};w.block=w.wait;if(s){w.trigger=function(){var a=0,b;while(b=R[a++])b();R=[]}}return w}function bt(a){var b,c={},d={"UseCachePreload":"cache","UseLocalXHR":"xhr","UsePreloading":t,"AlwaysPreserveOrder":"preserve","AllowDuplicates":"dupe"},f={"AppendTo":"which","BasePath":"base"};for(b in d)f[b]=d[b];c.order=!(!v.order);for(b in f){if(f[J](b)&&v[f[b]]!=e)c[f[b]]=(a[b]!=e)?a[b]:v[f[b]]}for(b in d){if(d[J](b))c[d[b]]=!(!c[d[b]])}if(!c[t])c.cache=c.order=c.xhr=i;c.which=(c.which===x||c.which===H)?c.which:x;return c}m.$LAB={setGlobalDefaults:function(a){v=bt(a)},setOptions:function(a){return F(i,bt(a))},script:function(){return F().script.apply(e,arguments)},wait:function(){return F().wait.apply(e,arguments)}};m.$LAB.block=m.$LAB.wait;(function(a,b,c){if(p[r]==e&&p[a]){p[r]="loading";p[a](b,c=function(){p.removeEventListener(b,c,i);p[r]=X},i)}})("addEventListener","DOMContentLoaded")})(window);
$LAB
   .script('https://uwr1cdn2.appspot.com/js/uwr1-api.js')
   .script('https://uwr1cdn2.appspot.com/js/uwr1-api-liga-v2.js');
