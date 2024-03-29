// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.components.sidebar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('example.utils.http_fx');
example.components.sidebar.item_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["#666",(14),(300),"transparent","pointer",(10),"block","relative","1px solid #eee","Helvetica Neue",(40),(2)]);
example.components.sidebar.sidebar_view = (function example$components$sidebar$sidebar_view(){
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"transparent"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Helvetica Neue",new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(18),new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,component_state){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/");
});})(current_select,component_state))
], null),"5v5 POSITIONS"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,component_state){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/heros/roles/hard-carry");
});})(current_select,component_state))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.item_style], null),"THE HARD CARRY"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,component_state){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/heros/roles/semi-carry");
});})(current_select,component_state))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.item_style], null),"THE SOLO, GANKER, OR SEMI-CARRY"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,component_state){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/heros/roles/soloist");
});})(current_select,component_state))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.item_style], null),"THE OFFLANER OR SUICIDE SOLO"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,component_state){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/heros/roles/roaming-support");
});})(current_select,component_state))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.item_style], null),"THE ROAMING SUPPORT OR JUNGLER"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,component_state){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/heros/roles/hard-support");
});})(current_select,component_state))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.item_style], null),"THE HARD SUPPORT OR BABYSITTER)"], null)], null);
});
;})(component_state))
});

//# sourceMappingURL=sidebar.js.map?rel=1536537359449
