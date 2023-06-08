(function(){"use strict";var t={993:function(t,n,i){var r=i(144),e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("Calculator")],1)},s=[],c=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"calculator"},[i("div",{staticClass:"display"},[t._v(t._s(t.current||"0"))]),t._v(" "),i("div",{staticClass:"btn",on:{click:t.clear}},[t._v("C")]),t._v(" "),i("div",{staticClass:"btn",on:{click:t.sign}},[t._v("+/-")]),t._v(" "),i("div",{staticClass:"btn",on:{click:t.percent}},[t._v("%")]),t._v(" "),i("div",{staticClass:"btn operator",on:{click:t.divide}},[t._v("÷")]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(n){t.append("7")}}},[t._v("7")]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(n){t.append("8")}}},[t._v("8")]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(n){t.append("9")}}},[t._v("9")]),t._v(" "),i("div",{staticClass:"btn operator",on:{click:t.times}},[t._v("x")]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(n){t.append("4")}}},[t._v("4")]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(n){t.append("5")}}},[t._v("5")]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(n){t.append("6")}}},[t._v("6")]),t._v(" "),i("div",{staticClass:"btn operator",on:{click:t.minus}},[t._v("-")]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(n){t.append("1")}}},[t._v("1")]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(n){t.append("2")}}},[t._v("2")]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(n){t.append("3")}}},[t._v("3")]),t._v(" "),i("div",{staticClass:"btn operator",on:{click:t.add}},[t._v("+")]),t._v(" "),i("div",{staticClass:"btn zero",on:{click:function(n){t.append("0")}}},[t._v("0")]),t._v(" "),i("div",{staticClass:"btn",on:{click:t.dot}},[t._v(".")]),t._v(" "),i("div",{staticClass:"btn operator",on:{click:t.equal}},[t._v("=")])])},o=[],a={data(){return{previous:null,current:"",operator:null,operatorClicked:!1}},methods:{clear(){this.current=""},sign(){this.current="-"===this.current.charAt(0)?this.current.slice(1):`-${this.current}`},percent(){this.current=""+parseFloat(this.current)/100},append(t){this.operatorClicked&&(this.current="",this.operatorClicked=!1),this.current=`${this.current}${t}`},dot(){-1===this.current.indexOf(".")&&this.append(".")},setPrevious(){this.previous=this.current,this.operatorClicked=!0},divide(){this.operator=(t,n)=>t/n,this.setPrevious()},times(){this.operator=(t,n)=>t*n,this.setPrevious()},minus(){this.operator=(t,n)=>t-n,this.setPrevious()},add(){this.operator=(t,n)=>t+n,this.setPrevious()},equal(){this.current=`${this.operator(parseFloat(this.current),parseFloat(this.previous))}`,this.previous=null}}},l=a,u=i(736),v=(0,u.Z)(l,c,o,!1,null,"5e5de9e9",null),p=v.exports,d={name:"app",components:{Calculator:p}},f=d,h=(0,u.Z)(f,e,s,!1,null,null,null),_=h.exports;r.Z.config.productionTip=!1,new r.Z({render:t=>t(_)}).$mount("#app")}},n={};function i(r){var e=n[r];if(void 0!==e)return e.exports;var s=n[r]={exports:{}};return t[r](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(n,r,e,s){if(!r){var c=1/0;for(u=0;u<t.length;u++){r=t[u][0],e=t[u][1],s=t[u][2];for(var o=!0,a=0;a<r.length;a++)(!1&s||c>=s)&&Object.keys(i.O).every((function(t){return i.O[t](r[a])}))?r.splice(a--,1):(o=!1,s<c&&(c=s));if(o){t.splice(u--,1);var l=e();void 0!==l&&(n=l)}}return n}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,e,s]}}(),function(){i.d=function(t,n){for(var r in n)i.o(n,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};i.O.j=function(n){return 0===t[n]};var n=function(n,r){var e,s,c=r[0],o=r[1],a=r[2],l=0;if(c.some((function(n){return 0!==t[n]}))){for(e in o)i.o(o,e)&&(i.m[e]=o[e]);if(a)var u=a(i)}for(n&&n(r);l<c.length;l++)s=c[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(u)},r=self["webpackChunkvue_calculator"]=self["webpackChunkvue_calculator"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(993)}));r=i.O(r)})();
//# sourceMappingURL=app.a86816b3.js.map