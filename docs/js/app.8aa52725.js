(function(){"use strict";var t={219:function(t,n,a){var e=a(751),o=a(641);function r(t,n,a,e,r,i){var u=(0,o.g2)("app-header"),c=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.eW)(" ] "),(0,o.bF)(u),(0,o.bF)(c)],64)}var i=function(t){return(0,o.Qi)("data-v-17ec75d6"),t=t(),(0,o.jt)(),t},u={class:"header-container"},c=i((function(){return(0,o.Lk)("div",{class:"header-item"},[(0,o.Lk)("div",{class:"logo"},"家計簿アプリ"),(0,o.Lk)("nav",null,[(0,o.Lk)("a",{href:"/"},"ホーム"),(0,o.Lk)("a",{href:"/input"},"家計簿入力")])],-1)})),s=[c];function l(t,n,a,e,r,i){return(0,o.uX)(),(0,o.CE)("div",u,s)}var d={name:"AppHeader"},v=a(262);const m=(0,v.A)(d,[["render",l],["__scopeId","data-v-17ec75d6"]]);var f=m,p={name:"App",components:{AppHeader:f}};const h=(0,v.A)(p,[["render",r]]);var k=h,X=a(220),b={class:"container"};function L(t,n,a,e,r,i){var u=(0,o.g2)("month-amount-section"),c=(0,o.g2)("total-amount-section"),s=(0,o.g2)("amount-detail-section");return(0,o.uX)(),(0,o.CE)("div",b,[(0,o.bF)(u,{class:"test"}),(0,o.bF)(c,{class:"test"}),(0,o.bF)(s,{class:"test max",details:e.testDetail},null,8,["details"])])}const Y={class:"month-amount-section-container"},_=(0,o.Fv)('<div class="month-amount-section-item" data-v-05c57432><div class="amount-area" data-v-05c57432><div class="amount" data-v-05c57432>X月の使用金額：XXX,XXXX円</div></div><div class="compare-area" data-v-05c57432><div class="compare" data-v-05c57432>先月よりYYY,YYY円節約できました</div><a href="" class="other-month" data-v-05c57432> ＞他の月の使用金額を確認する</a></div></div>',1),A=[_];function g(t,n){return(0,o.uX)(),(0,o.CE)("div",Y,A)}const y={},C=(0,v.A)(y,[["render",g],["__scopeId","data-v-05c57432"]]);var O=C,E={class:"month-amount-section-container"},F=(0,o.Fv)('<div class="month-amount-section-item" data-v-ff665074><div class="amount-area" data-v-ff665074><div class="amount" data-v-ff665074>総資産残高：XXX,XXXX円</div></div><div class="compare-area" data-v-ff665074><div class="compare" data-v-ff665074>現金：YYY,YYY円</div><div class="compare" data-v-ff665074>〇〇銀行：YYY,YYY円</div></div></div>',1),j=[F];function w(t,n,a,e,r,i){return(0,o.uX)(),(0,o.CE)("div",E,j)}var I={name:"TotalAmountSection"};const x=(0,v.A)(I,[["render",w],["__scopeId","data-v-ff665074"]]);var S=x,T=a(33),D=function(t){return(0,o.Qi)("data-v-24388c98"),t=t(),(0,o.jt)(),t},P=D((function(){return(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"使用日"),(0,o.Lk)("th",null,"品目"),(0,o.Lk)("th",null,"品名"),(0,o.Lk)("th",null,"金額"),(0,o.Lk)("th",null,"口座"),(0,o.Lk)("th",null,"メモ")])],-1)}));function N(t,n,a,e,r,i){return(0,o.uX)(),(0,o.CE)("table",null,[P,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.details,(function(t){return(0,o.uX)(),(0,o.CE)("tr",{key:t},[(0,o.Lk)("td",null,(0,T.v_)(t.date),1),(0,o.Lk)("td",null,(0,T.v_)(t.item),1),(0,o.Lk)("td",null,(0,T.v_)(t.itemeName),1),(0,o.Lk)("td",null,(0,T.v_)(t.amount),1),(0,o.Lk)("td",null,(0,T.v_)(t.account),1),(0,o.Lk)("td",null,(0,T.v_)(t.memo),1)])})),128))])])}var H={name:"AmountDetailSection",props:{details:{type:Object}}};const K=(0,v.A)(H,[["render",N],["__scopeId","data-v-24388c98"]]);var Q=K,M={name:"AmountTop",components:{MonthAmountSection:O,TotalAmountSection:S,AmountDetailSection:Q},setup:function(){var t=[{date:"2020/1/1",item:"食品",itemName:"CoCo壱",amount:"800",account:"現金",memo:""},{date:"2020/1/1",item:"食品",itemName:"吉野家",amount:"600",account:"PayPay",memo:""}];return{testDetail:t}}};const W=(0,v.A)(M,[["render",L],["__scopeId","data-v-50378554"]]);var q=W,z=[{path:"/",name:"home",component:q}],B=(0,X.aE)({history:(0,X.LA)(""),routes:z}),G=B;(0,e.Ef)(k).use(G).mount("#app")}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(n,e,o,r){if(!e){var i=1/0;for(l=0;l<t.length;l++){e=t[l][0],o=t[l][1],r=t[l][2];for(var u=!0,c=0;c<e.length;c++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](e[c])}))?e.splice(c--,1):(u=!1,r<i&&(i=r));if(u){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[e,o,r]}}(),function(){a.d=function(t,n){for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};a.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,r,i=e[0],u=e[1],c=e[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(o in u)a.o(u,o)&&(a.m[o]=u[o]);if(c)var l=c(a)}for(n&&n(e);s<i.length;s++)r=i[s],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(l)},e=self["webpackChunkamount_app"]=self["webpackChunkamount_app"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=a.O(void 0,[504],(function(){return a(219)}));e=a.O(e)})();
//# sourceMappingURL=app.8aa52725.js.map