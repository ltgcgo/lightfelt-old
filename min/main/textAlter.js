"use strict";function wAlter(r,e){let t=Array.from(r),o=[],a=0,n="",l=0,c="";t.forEach((r,e)=>{switch(l){case 0:"$"==r&&(l=1);break;case 1:"{"==r?(a=e-1,l=2):l=0;break;case 2:"}"==r?(a++,o.push(new wAlter.alterItem(a,n,"")),a=0,n="",l=0):n+=r;break;default:throw new Error("Unknown mode $1 encountered at index $2.".replace("$1",l)).replace("$2",e)}});let s=0;return o.forEach(r=>{let e=r.start,o=r.name;console.log([e,o]),t.splice(e-1-s,o.length+3),console.log(r.start),r.start-=s,console.log(r.start),s+=o.length+3,console.log(t)}),s=0,o.forEach(r=>{e[r.name];if(void 0==e[r.name]||null==e[r.name])r.value=Array.from("ERR_NULL");else{let t=e[r.name];if(t.constructor==String)r.value=Array.from(t);else{if(t.constructor!=Number&&t.constructor!=BigInt)throw new TypeError('Value "$1" must not be an explicit object.').replace("$1",r.name);r.value=Array.from(t.toString())}}t.splice(r.start-1+s,0,...r.value),s+=r.value.length}),console.log(o),t.forEach(r=>{c+=r}),c}wAlter.alterItem=function(r,e,t){if(r.constructor!=Number)throw new TypeError('Value "start" must be a Number.');if(this.start=r,e.constructor!=String)throw new TypeError('Value "name" must be a String.');if(this.name=e,t.constructor==String)this.value=Array.from(t);else{if(t.constructor!=Number&&t.constructor!=BigInt)throw new TypeError('Value "value" must not be an explicit object.');this.value=Array.from(t.toString())}};