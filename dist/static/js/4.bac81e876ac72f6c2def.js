webpackJsonp([4],{"0IpB":function(t,i,e){"use strict";function n(t){e("jbVz")}Object.defineProperty(i,"__esModule",{value:!0});var a=e("WfYl"),s=e("bm/b"),r=e("0HdQ"),o=n,l=r(a.a,s.a,!1,o,"data-v-222ed162",null);i.default=l.exports},"84Q5":function(t,i,e){i=t.exports=e("BkJT")(!0),i.push([t.i,".listview[data-v-3afb42ac]{position:relative;width:100%;height:100%;overflow:hidden;background:#fff}.listview .list-group[data-v-3afb42ac]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-3afb42ac]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:#000;background:#f2f2f2}.listview .list-group .list-group-item[data-v-3afb42ac]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-3afb42ac]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-3afb42ac]{margin-left:20px;color:#000;font-size:14px}.listview .list-shortcut[data-v-3afb42ac]{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:hsla(0,0%,100%,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-3afb42ac]{padding:3px;line-height:1;color:#000;font-size:12px}.listview .list-shortcut .item.current[data-v-3afb42ac]{color:#31c27c}.listview .list-fixed[data-v-3afb42ac]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-3afb42ac]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:#000;background:#f2f2f2}.listview .loading-container[data-v-3afb42ac]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["D:/Users/lilingHua/IdeaProjects/player/src/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,WAAY,AACZ,kBAAoB,CACrB,AACD,wDACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,WAAY,AACZ,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,mCAAoC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,8BAAkC,AAClC,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,WAAY,AACZ,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,WAAY,AACZ,kBAAoB,CACrB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"listview.vue",sourcesContent:["\n.listview[data-v-3afb42ac] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #fff;\n}\n.listview .list-group[data-v-3afb42ac] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-3afb42ac] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: #000;\n  background: #f2f2f2;\n}\n.listview .list-group .list-group-item[data-v-3afb42ac] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-3afb42ac] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-3afb42ac] {\n  margin-left: 20px;\n  color: #000;\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-3afb42ac] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(255,255,255,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-3afb42ac] {\n  padding: 3px;\n  line-height: 1;\n  color: #000;\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-3afb42ac] {\n  color: #31c27c;\n}\n.listview .list-fixed[data-v-3afb42ac] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-3afb42ac] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: #000;\n  background: #f2f2f2;\n}\n.listview .loading-container[data-v-3afb42ac] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},"9CT+":function(t,i,e){i=t.exports=e("BkJT")(!0),i.push([t.i,".singer[data-v-222ed162]{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["D:/Users/lilingHua/IdeaProjects/player/src/components/singer/singer.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"singer.vue",sourcesContent:["\n.singer[data-v-222ed162] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])},"Sgn/":function(t,i,e){"use strict";function n(){var t=r()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function a(t){var i=r()({},l.b,{hostUin:0,platform:"yqq",needNewCode:0,order:"listen",begin:0,num:100,songstatus:1,singermid:t});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,l.c)}i.b=n,i.a=a;var s=e("aA9S"),r=e.n(s),o=e("Gak4"),l=e("T452")},TV1K:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("scroll",{ref:"listview",staticClass:"listview",attrs:{"listen-scroll":t.listenScroll,"probe-type":t.probeType,data:t.data},on:{scroll:t.scroll}},[e("ul",t._l(t.data,function(i){return e("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[e("h2",{staticClass:"list-group-title"},[t._v(t._s(i.title))]),t._v(" "),e("uL",t._l(i.items,function(i){return e("li",{staticClass:"list-group-item",on:{click:function(e){t.selectItem(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i.name))])])}))],1)})),t._v(" "),e("div",{staticClass:"list-shortcut",on:{touchstart:function(i){i.stopPropagation(),i.preventDefault(),t.onShortcutTouchStart(i)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),t.onShortcutTouchMove(i)},touchend:function(t){t.stopPropagation()}}},[e("ul",t._l(t.shortcutList,function(i,n){return e("li",{staticClass:"item",class:{current:t.currentIndex===n},attrs:{"data-index":n}},[t._v(t._s(i)+"\n      ")])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[e("div",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle)+" ")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[e("loading")],1)])},a=[],s={render:n,staticRenderFns:a};i.a=s},WXOf:function(t,i,e){var n=e("84Q5");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("72a5658d",n,!0)},WfYl:function(t,i,e){"use strict";var n=e("4YfN"),a=e.n(n),s=e("sODj"),r=e("Sgn/"),o=e("T452"),l=e("0aAL"),A=e("9rMa"),c=e("F4+m");i.a={mixins:[c.b],data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:a()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.singer.style.bottom=i,this.$refs.list.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;Object(r.b)().then(function(i){i.code===o.a&&(t.singers=t._normalizeSinger(i.data.list))})},_normalizeSinger:function(t){var i={hot:{title:"热门",items:[]}};t.forEach(function(t,e){e<10&&i.hot.items.push(new l.a({name:t.Fsinger_name,id:t.Fsinger_mid}));var n=t.Findex;i[n]||(i[n]={title:n,items:[]}),i[n].items.push(new l.a({name:t.Fsinger_name,id:t.Fsinger_mid}))});var e=[],n=[];for(var a in i){var s=i[a];s.title.match(/[a-zA-Z]/)?e.push(s):"热门"===s.title&&n.push(s)}return e.sort(function(t,i){return t.title.charCodeAt(0)-i.title.charCodeAt(0)}),n.concat(e)}},Object(A.d)({setSinger:"SET_SINGER"})),components:{ListView:s.a}}},"bm/b":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"singer",staticClass:"singer"},[e("list-view",{ref:"list",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),e("router-view")],1)},a=[],s={render:n,staticRenderFns:a};i.a=s},cQna:function(t,i,e){"use strict";var n=e("qwAB"),a=e("y/jF"),s=e("3Q4o");i.a={props:{data:{type:Array,default:[]}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},created:function(){this.probeType=3,this.listenScroll=!0,this.touch={},this.listHeight=[]},methods:{selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var i=Object(s.b)(t.target,"index"),e=t.touches[0];this.touch.y1=e.pageY,this.touch.anchorIndex=i,this._scrollTo(i)},onShortcutTouchMove:function(t){var i=t.touches[0];this.touch.y2=i.pageY;var e=(this.touch.y2-this.touch.y1)/18|0,n=parseInt(this.touch.anchorIndex)+e;this._scrollTo(n)},refresh:function(){this.$refs.listview.refresh()},scroll:function(t){this.scrollY=t.y},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,i=0;this.listHeight.push(i);for(var e=0;e<t.length;e++){i+=t[e].clientHeight,this.listHeight.push(i)}},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var i=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var e=0;e<i.length-1;e++){var n=i[e],a=i[e+1];if(-t>=n&&-t<a)return this.currentIndex=e,void(this.diff=a+t)}this.currentIndex=i.length-2},diff:function(t){var i=t>0&&t<30?t-30:0;this.fixedTop!==i&&(this.fixedTop=i,this.$refs.fixed.style.transform="translate3d(0,"+i+"px,0)")}},components:{Scroll:n.a,Loading:a.a}}},jbVz:function(t,i,e){var n=e("9CT+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("afc333f4",n,!0)},sODj:function(t,i,e){"use strict";function n(t){e("WXOf")}var a=e("cQna"),s=e("TV1K"),r=e("0HdQ"),o=n,l=r(a.a,s.a,!1,o,"data-v-3afb42ac",null);i.a=l.exports}});
//# sourceMappingURL=4.bac81e876ac72f6c2def.js.map