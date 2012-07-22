var Gb,Hb;
G(u,j,m,{escapeRegExp:function(){return R(this)},escapeURL:function(a){return a?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(a){return a?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},unescapeHTML:function(){return this.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},encodeBase64:function(){return Gb(this)},decodeBase64:function(){return Hb(this)},each:function(a,b){var c,
d;if(z(a)){b=a;a=/[\s\S]/g}else if(a)if(E(a))a=s(R(a),"gi");else{if(F(a))a=s(a.source,sa(a,"g"))}else a=/[\s\S]/g;c=this.match(a)||[];if(b)for(d=0;d<c.length;d++)c[d]=b.call(this,c[d],d,c)||c[d];return c},shift:function(a){var b="";a=a||0;this.codes(function(c){b+=u.fromCharCode(c+a)});return b},codes:function(a){for(var b=[],c=0;c<this.length;c++){var d=this.charCodeAt(c);b.push(d);a&&a.call(this,d,c)}return b},chars:function(a){return this.each(a)},words:function(a){return this.trim().each(/\S+/g,
a)},lines:function(a){return this.trim().each(/^.*$/gm,a)},paragraphs:function(a){var b=this.trim().split(/[\r\n]{2,}/);return b=b.map(function(c){if(a)var d=a.call(c);return d?d:c})},startsWith:function(a,b){if(L(b))b=j;var c=F(a)?a.source.replace("^",""):R(a);return s("^"+c,b?"":"i").test(this)},endsWith:function(a,b){if(L(b))b=j;var c=F(a)?a.source.replace("$",""):R(a);return s(c+"$",b?"":"i").test(this)},isBlank:function(){return this.trim().length===0},has:function(a){return this.search(F(a)?
a:R(a))!==-1},add:function(a,b){b=L(b)?this.length:b;return this.slice(0,b)+a+this.slice(b)},remove:function(a){return this.replace(a,"")},reverse:function(){return this.split("").reverse().join("")},compact:function(){return this.trim().replace(/([\r\n\s\u3000])+/g,function(a,b){return b==="\u3000"?b:" "})},at:function(){return ta(this,arguments,j)},from:function(a){return this.slice(a)},to:function(a){if(L(a))a=this.length;return this.slice(0,a)},dasherize:function(){return this.underscore().replace(/_/g,
"-")},underscore:function(){return this.replace(/[-\s]+/g,"_").replace(u.Inflector&&u.Inflector.acronymRegExp,function(a,b){return(b>0?"_":"")+a.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(a){return this.underscore().replace(/(^|_)([^_]+)/g,function(b,c,d,e){b=d;b=(c=u.Inflector)&&c.acronyms[b];b=E(b)?b:void 0;e=a!==m||e>0;if(b)return e?b:b.toLowerCase();return e?d.capitalize():d})},spacify:function(){return this.underscore().replace(/_/g,
" ")},stripTags:function(){var a=this;H(arguments.length>0?arguments:[""],function(b){a=a.replace(s("</?"+R(b)+"[^<>]*>","gi"),"")});return a},removeTags:function(){var a=this;H(arguments.length>0?arguments:["\\S+"],function(b){b=s("<("+b+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");a=a.replace(b,"")});return a},truncate:function(a,b,c,d){var e="",g="",f=this.toString(),i="["+ra()+"]+",h="[^"+ra()+"]*",k=s(i+h+"$");d=L(d)?"...":u(d);if(f.length<=a)return f;switch(c){case "left":a=f.length-a;e=d;f=f.slice(a);
k=s("^"+h+i);break;case "middle":a=P(a/2);g=d+f.slice(f.length-a).trimLeft();f=f.slice(0,a);break;default:a=a;g=d;f=f.slice(0,a)}if(b===m&&this.slice(a,a+1).match(/\S/))f=f.remove(k);return e+f+g},pad:function(a,b){return oa(b,a)+this+oa(b,a)},padLeft:function(a,b){return oa(b,a)+this},padRight:function(a,b){return this+oa(b,a)},first:function(a){if(L(a))a=1;return this.substr(0,a)},last:function(a){if(L(a))a=1;return this.substr(this.length-a<0?0:this.length-a)},repeat:function(a){var b="",c=0;if(D(a)&&
a>0)for(;c<a;){b+=this;c++}return b},toNumber:function(a){var b=this.replace(/,/g,"");return b.match(/\./)?parseFloat(b):parseInt(b,a||10)},capitalize:function(a){var b;return this.toLowerCase().replace(a?/[\s\S]/g:/^\S/,function(c){var d=c.toUpperCase(),e;e=b?c:d;b=d!==c;return e})},assign:function(){var a={};H(arguments,function(b,c){if(la(b))na(a,b);else a[c+1]=b});return this.replace(/\{([^{]+?)\}/g,function(b,c){return ma(a,c)?a[c]:b})},namespace:function(a){a=a||ba;I(this.split("."),function(b,
c){return!!(a=a[c])});return a}});G(u,j,m,{insert:u.prototype.add});
(function(a){if(this.btoa){Gb=this.btoa;Hb=this.atob}else{var b=/[^A-Za-z0-9\+\/\=]/g;Gb=function(c){var d="",e,g,f,i,h,k,n=0;do{e=c.charCodeAt(n++);g=c.charCodeAt(n++);f=c.charCodeAt(n++);i=e>>2;e=(e&3)<<4|g>>4;h=(g&15)<<2|f>>6;k=f&63;if(isNaN(g))h=k=64;else if(isNaN(f))k=64;d=d+a.charAt(i)+a.charAt(e)+a.charAt(h)+a.charAt(k)}while(n<c.length);return d};Hb=function(c){var d="",e,g,f,i,h,k=0;if(c.match(b))throw Error("String contains invalid base64 characters");c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");
do{e=a.indexOf(c.charAt(k++));g=a.indexOf(c.charAt(k++));i=a.indexOf(c.charAt(k++));h=a.indexOf(c.charAt(k++));e=e<<2|g>>4;g=(g&15)<<4|i>>2;f=(i&3)<<6|h;d+=u.fromCharCode(e);if(i!=64)d+=u.fromCharCode(g);if(h!=64)d+=u.fromCharCode(f)}while(k<c.length);return d}}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
