webpackJsonp([1],{"/gMO":function(t,s){},0:function(t,s){},"0F3C":function(t,s){},"1g2b":function(t,s){},"2Bmz":function(t,s){},"76E/":function(t,s){},I77z:function(t,s){},Ia6j:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW");var a={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]};var r=e("VU/8")(a,n,!1,function(t){e("qcZY")},null,null).exports,o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title1"},[s("div",{staticClass:"line"}),this._v(" "),s("div",{staticClass:"text"},[this._v(this._s(this.tit))]),this._v(" "),s("div",{staticClass:"line"})])},staticRenderFns:[]};var l=e("VU/8")({props:["tit"]},o,!1,function(t){e("I77z")},null,null).exports,c={props:{seller:{type:Object}},data:function(){return{detailShow:!1,msg:"优惠信息",msg1:"商家公告"}},methods:{showDetail:function(){this.detailShow=!0},closeDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},components:{star:r,tit:l}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n          "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n        ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("tit",{attrs:{tit:t.msg}}),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e(),t._v(" "),e("tit",{attrs:{tit:t.msg1}}),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])],1)]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.closeDetail}},[e("i",{staticClass:"el-icon-close"})])])])],1)},staticRenderFns:[]};var d={data:function(){return{seller:{id:(t={},(s=window.location.search.match(/[?&][^?&]+=[^?&]]+/g))&&s.forEach(function(s){var e=s.substring(1).split("="),i=e[0],a=e[1];t[i]=a}),e={id:123123},console.log(e),e.id)}};var t,s,e},created:function(){var t=this;this.$http.get("/sell/static/data.json").then(function(s){0===(s=s.body).errno&&(t.seller=s.data,console.log(t.seller))})},components:{"v-header":e("VU/8")(c,v,!1,function(t){e("kMQE")},null,null).exports}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]};var p=e("VU/8")(d,u,!1,function(t){e("2Bmz")},null,null).exports,h=e("/ocq"),f=e("GQaK"),_={props:{food:{type:Object}},methods:{addCart:function(t){console.log("click"),t._constructed&&(this.food.count?this.food.count++:i.default.set(this.food,"count",1),this.$emit("cart-add",t.target))},decreaseCart:function(){this.food.count&&this.food.count--}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){t.decreaseCart()}}},[e("span",{staticClass:"inner el-icon-remove-outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add el-icon-circle-plus",on:{click:function(s){return s.stopPropagation(),t.addCart(s)}}})],1)},staticRenderFns:[]};var m=e("VU/8")(_,C,!1,function(t){e("xu4p")},null,null).exports,g={data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},props:{selectFoods:{type:Array,default:function(){return[{price:10,count:2}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice&&this.totalPrice>0?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice>=this.minPrice?"enough":"not-enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new f.a(t.$refs.listContent,{click:!0})}),s}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.getElementsByClassName("inner-hook")[0];r.style.webkitTransform="translate3d("+a+"px,0,0)",r.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)",t.addEventListener("transitionend",s)})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice)}},components:{cartcontrol:m}},w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon iconfont icon-gouwuchekong",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v(t._s(t.totalPrice)+"元")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice))])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n                "+t._s(t.payDesc)+"\n                ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,i){return e("div",[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:function(s){t.empty()}}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.count*s.price))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:function(s){t.hideList()}}})])],1)},staticRenderFns:[]};var y=e("VU/8")(g,w,!1,function(t){e("gvZt")},null,null).exports;function x(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:b(a))}return s}function b(t){return("00"+t).substr(t.length)}var k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var T=e("VU/8")({},k,!1,function(t){e("Ia6j")},null,null).exports,$={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:function(){return!0}},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},data:function(){return{myselectType:this.selectType,myonlyContent:this.onlyContent}},methods:{select:function(t){event._constructed&&(this.myselectType=t,this.$emit("increment","selectType",this.myselectType))},toggleContent:function(t){t._constructed&&(this.myonlyContent=!this.myonlyContent,this.$emit("increment","onlyContent",this.myonlyContent))}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}},S={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingSelect"},[e("div",{staticClass:"rating-type"},[e("div",{staticClass:"block positive",class:{active:2===t.myselectType},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("div",{staticClass:"block positive",class:{active:0===t.myselectType},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("div",{staticClass:"block negative",class:{active:1===t.myselectType},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.myonlyContent},on:{click:function(s){t.toggleContent(s)}}},[e("span",{staticClass:"el-icon-circle-check"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var E=e("VU/8")($,S,!1,function(t){e("0F3C")},null,null).exports,N={filters:{formatDate:function(t){return x(new Date(t),"yyyy-MM-dd hh:mm")}},props:{food:{type:Object}},data:function(){return{selectType:2,showFlag:!1,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},components:{cartcontrol:m,split:T,ratingSelect:E},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new f.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(){console.log("click"),event._constructed&&(i.default.set(this.food,"count",1),this.$emit("cart.add",event.target))},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},incrementTotal:function(t,s){var e=this;this[t]=s,this.$nextTick(function(){e.scroll.refresh()})}}},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:function(s){t.hide()}}},[e("span",{staticClass:"el-icon-arrow-left"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",{staticClass:"rating"},[t._v("月售"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v(t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v(t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],staticClass:"buy",on:{click:t.addFirst}},[t._v("加入购物车")])]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingSelect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{increment:t.incrementTotal}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,alt:"",width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:0===s.rateType,expression:"rating.rateType===0"}],staticClass:"iconfont icon-zan1"}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:1===s.rateType,expression:"rating.rateType===1"}],staticClass:"iconfont icon-zan"}),t._v(" "),e("span",[t._v(t._s(s.text))])])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-ratings"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]};var P=e("VU/8")(N,F,!1,function(t){e("s+NB")},null,null).exports,M={props:{seller:{type:Object}},components:{shopcart:y,cartcontrol:m,food:P},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.$http.get("/sell/static/data.json").then(function(s){0==(s=s.body).errno&&(t.goods=s.data,t._initScroll(),t.$nextTick(function(){t._calculateHeight()}))}),this.classMap=["decrease","discount","guarantee","invoice","special"]},methods:{cartAdd:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},selectMenu:function(t){console.log(t);var s=this.$refs.foodWrapper.getElementsByClassName("food-list-hook")[t];this.foodScroll.scrollToElement(s,300)},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},_initScroll:function(){var t=this;this.menuScroll=new f.a(this.$refs.menuWrapper,{click:!0}),this.foodScroll=new f.a(this.$refs.foodWrapper,{click:!0,probeType:3}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i)}}},[e("div",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"v.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\r\n        ")])])}))]),t._v(" "),e("div",{ref:"foodWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月销"+t._s(s.sellCount))]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{"cart-add":t.cartAdd}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var z=e("VU/8")(M,R,!1,function(t){e("/gMO")},null,null).exports,D={filters:{formatDate:function(t){return x(new Date(t),"yyyy-MM-dd hh:mm")}},props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},components:{star:r,split:T,ratingSelect:E},methods:{needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},incrementTotal:function(t,s){var e=this;this[t]=s,this.$nextTick(function(){e.scroll.refresh()})}},created:function(){var t=this;this.$http.get("/sell/static/data.json").then(function(s){0==(s=s.body).errno&&(t.ratings=s.data,t.$nextTick(function(){t.scroll=new f.a(t.$refs.ratings,{click:!0})}))})}},H={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate))])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("div",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("div",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"deliveryTime"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingSelect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{increment:t.incrementTotal}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,alt:"",width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"deliveryTime"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend||s.recommend.length,expression:"rating.recommend || rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"iconfont icon-zan1"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}))])],1)])},staticRenderFns:[]};var j=e("VU/8")(D,H,!1,function(t){e("czEr")},null,null).exports,B=e("mvHQ"),V=e.n(B);var O={props:{seller:{type:Object}},data:function(){var t,s,e,i;return{favorite:(t=this.seller.id,s="favorite",e=!1,(i=window.localStorage.__seller__)&&(i=JSON.parse(i)[t])&&i[s]||e)}},computed:{favoriteText:function(){return this.favorite?"已收藏":"未收藏"}},components:{star:r,split:T},watch:{seller:function(){this._initScroll(),this._initPic()}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},methods:{toggleFavorite:function(t){var s,e,i,a;t._constructed&&(s=this.seller.id,e="favorite",i=this.favorite,(a=window.localStorage.__seller__)?(a=JSON.parse(a))[s]||(a[s]={}):(a={})[s]={},a[s][e]=i,window.localStorage.__seller__=V()(a))},_initScroll:function(){var t=this;this.scroll?this.scroll.refresh():this.$nextTick(function(){t.scroll=new f.a(t.$refs.seller,{click:!0})})},_initPic:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new f.a(t.$refs.picWrapper,{scrollX:!0,eventPassThrough:"vertical"})})}}},mounted:function(){this._initScroll(),this._initPic()}},U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:function(s){t.toggleFavorite(s)}}},[e("span",{staticClass:"iconfont icon-aixin",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"support"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,alt:"",width:"120",height:"90"}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s,i){return e("li",{staticClass:"info-item border-1px"},[t._v(t._s(s))])}))])],1)])},staticRenderFns:[]};var L=e("VU/8")(O,U,!1,function(t){e("cns7")},null,null).exports;i.default.use(h.a);var W=[{path:"/goods",component:z},{path:"/ratings",component:j},{path:"/seller",component:L}],Y=new h.a({routes:W}),I=e("8+8L"),q=e("zL8q"),A=e.n(q);e("tvR6"),e("1g2b"),e("76E/");i.default.use(I.a),i.default.use(A.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:Y,VueResource:I.a,render:function(t){return t(p)}})},cns7:function(t,s){},czEr:function(t,s){},gvZt:function(t,s){},kMQE:function(t,s){},qcZY:function(t,s){},"s+NB":function(t,s){},tvR6:function(t,s){},xu4p:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.b952503442530b75c5ec.js.map