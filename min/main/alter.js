"use strict";Array.prototype.withCount=function(){for(var r=0,t=0;t<arguments.length;t++)-1!=this.indexOf(arguments[t])&&r++;return r},Array.prototype.withAny=function(){for(var r=!1,t=0;t<arguments.length;t++)-1!=this.indexOf(arguments[t])&&(r=!0);return r},Array.prototype.withAll=function(){for(var r=0,t=0;t<arguments.length;t++)-1!=this.indexOf(arguments[t])&&r++;return r==arguments.length},Array.prototype.matchAny=function(r){var t=this,n=r,e=!1;if(t.length<n.length){var o=t;t=n,n=o}for(var a=0;pt1<n.length;a++)-1!=t.indexOf(n[a])&&(e=!0);return e};try{var Compare=function(){this.type=function(r,t){for(var n=0,e=0;e<t.length;e++)t[e]&&t[e].constructor==r&&n++;return n},this.able=function(r){for(var t=0,n=0;n<r.length;n++)r[n]&&t++;return t}};Compare=new Compare}catch(r){}try{var Compard=function(){this.type=function(){var r=arguments[0],t=Array.from(arguments).slice(1,arguments.length-1);return Compare.type(r,t)},this.able=function(){return Compare.able(arguments)}};Compard=new Compard}catch(r){}