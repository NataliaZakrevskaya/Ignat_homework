(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={container:"Common_container__wyolR",commonHeader:"Common_commonHeader__3Pc6h"}},function(e,a,t){e.exports={affairContainer:"Affairs_affairContainer__1rE2N",affair:"Affairs_affair__7nmDu",affairName:"Affairs_affairName__22TaX",priority:"Affairs_priority__YoyvZ",affairButton:"Affairs_affairButton__2-kwS",buttons:"Affairs_buttons__26zDJ",filterButton:"Affairs_filterButton__15idf",activeFilterButton:"Affairs_activeFilterButton__1jAhY"}},,,,function(e,a,t){e.exports={greetingContainer:"Greeting_greetingContainer__1PvcE",inputStr:"Greeting_inputStr__32kcC",norlamInput:"Greeting_norlamInput__cM5KI",errorInput:"Greeting_errorInput__1qNHJ",addButton:"Greeting_addButton__2CcaI",errorText:"Greeting_errorText__3VIoF"}},function(e,a,t){e.exports={privateStyleForContainer:"PrivateStyles_privateStyleForContainer__3ll1J",userString:"PrivateStyles_userString__3PjAc",buttons:"PrivateStyles_buttons__2OL8o",filterButton:"PrivateStyles_filterButton__3mxc1"}},,function(e,a,t){e.exports={container:"Style_container__NiDat",editableSpan:"Style_editableSpan__2nhGp",buttonsContainer:"Style_buttonsContainer__1x1HC"}},function(e,a,t){e.exports={messageContainer:"Message_messageContainer__1iy3O",avatar:"Message_avatar__2WHiO",img:"Message_img___ie_p",nameAndText:"Message_nameAndText__-oFSf",time:"Message_time__2H4X1"}},function(e,a,t){e.exports={messageContainer:"AlternativeMessage_messageContainer__yVEe5",avatar:"AlternativeMessage_avatar__3ZTQl",img:"AlternativeMessage_img__33sPs",nameAndText:"AlternativeMessage_nameAndText__1sTjS",time:"AlternativeMessage_time__3AAxz"}},,function(e,a,t){e.exports={input:"SuperInputText_input__1RKyL",superInput:"SuperInputText_superInput__3ruOu",errorInput:"SuperInputText_errorInput__1LYj-",error:"SuperInputText_error__3UsMA"}},function(e,a,t){e.exports={navLinkBlock:"Header_navLinkBlock__2tOaW",links:"Header_links__KYA9r"}},function(e,a,t){e.exports={default:"SuperButton_default__7K8oM",red:"SuperButton_red__30wnx",button:"SuperButton_button__HkYVH"}},function(e,a,t){e.exports={App:"App_App__3R90Q",appHeader:"App_appHeader__22wRU"}},function(e,a,t){e.exports={blue:"HW4_blue__2hq3J",column:"HW4_column__1VrQL",testSpanError:"HW4_testSpanError__3KT52"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2n5X4",spanClassName:"SuperCheckbox_spanClassName__2ATo-"}},function(e,a,t){e.exports={internalContainer:"hw7_internalContainer__3W5zp",selectContainer:"hw7_selectContainer__284le"}},,,function(e,a,t){e.exports={privateStyleForContainer:"PrivateStyles_privateStyleForContainer__pr1Sz"}},,function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),o=(t(31),t(18)),i=t.n(o),s=t(7),m=t(1);var u=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},d=t(12),p=t.n(d);var f=function(e){return r.a.createElement("div",{className:p.a.messageContainer},r.a.createElement("div",{className:p.a.avatar},r.a.createElement("img",{src:e.avatar,className:p.a.img,alt:"avatar"})),r.a.createElement("div",{className:p.a.nameAndText},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.message)),r.a.createElement("div",{className:p.a.time},e.time))},_=t(3),E=t.n(_),v=t(13),g=t.n(v);var h=function(e){return r.a.createElement("div",{className:g.a.messageContainer},r.a.createElement("div",{className:g.a.avatar},r.a.createElement("img",{src:e.avatar,className:g.a.img,alt:"avatar"})),r.a.createElement("div",{className:g.a.nameAndText},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.message)),r.a.createElement("div",{className:g.a.time},e.time))},b=[{avatar:"https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/344/external-avatar-encryption-xnimrodx-lineal-color-xnimrodx.png",name:"Masha Ivanova",message:"Hello! How are you?)",time:"22:00"},{avatar:"https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/344/external-avatar-fitness-and-gym-xnimrodx-lineal-color-xnimrodx.png",name:"Lena Petrova",message:"Good! How are you?)",time:"22:01"}];var C=function(){return r.a.createElement("div",{className:E.a.container},r.a.createElement("h2",{className:E.a.commonHeader},"HOMEWORK 1"),r.a.createElement(f,{avatar:b[0].avatar,name:b[0].name,message:b[0].message,time:b[0].time}),r.a.createElement(h,{avatar:b[1].avatar,name:b[1].name,message:b[1].message,time:b[1].time}))},N=t(2),O=t(4),k=t.n(O);var x=function(e){return r.a.createElement("div",{className:k.a.affair},r.a.createElement("span",{className:k.a.affairName},e.affair.name),r.a.createElement("span",{className:k.a.priority},e.affair.priority),r.a.createElement("button",{className:k.a.affairButton,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"DELETE"))};var y=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:k.a.affairContainer},r.a.createElement("div",null,a),r.a.createElement("div",{className:k.a.buttons},r.a.createElement("button",{className:"all"===e.filter?k.a.activeFilterButton:k.a.filterButton,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:"high"===e.filter?k.a.activeFilterButton:k.a.filterButton,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:"middle"===e.filter?k.a.activeFilterButton:k.a.filterButton,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:"low"===e.filter?k.a.activeFilterButton:k.a.filterButton,onClick:function(){e.setFilter("low")}},"Low")))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(S),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(N.a)(c,2),i=o[0],s=o[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,i);return r.a.createElement("div",{className:E.a.container},r.a.createElement("h2",{className:E.a.commonHeader},"HOMEWORK 2"),r.a.createElement(y,{data:m,setFilter:s,filter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},w=t(25),A=t(8),H=t.n(A),B=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?H.a.errorInput:H.a.norlamInput;return r.a.createElement("div",{className:H.a.greetingContainer},r.a.createElement("div",{className:H.a.inputStr},r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("button",{className:H.a.addButton,onClick:n},"add"),r.a.createElement("span",null,c)),r.a.createElement("div",{className:H.a.errorText},l))},T=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(N.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(null),m=Object(N.a)(s,2),u=m[0],d=m[1],p=a.length;return r.a.createElement(B,{name:o,setNameCallback:function(e){i(e.currentTarget.value.trim())},addUser:function(){""!==o?(d(null),t(o),alert("Hello ".concat(o," !"))):d("Enter valid name, please"),i("")},error:u,totalUsers:p})},M=t(34);var F=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:E.a.container},r.a.createElement("h2",{className:E.a.commonHeader},"HOMEWORK 3"),r.a.createElement(T,{users:t,addUserCallback:function(e){var a={_id:Object(M.a)(),name:e};l([a].concat(Object(w.a)(t)))}}))},I=t(6),P=t(15),D=t.n(P),K=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],W=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,s=Object(I.a)(e,K),m="".concat(D.a.error," ").concat(i||""),u="".concat(D.a.input," ").concat(c?D.a.errorInput:D.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},s)),c&&r.a.createElement("span",{className:m},c))},R=t(19),L=t.n(R),J=t(17),U=t.n(J),G=["red","className"],Y=function(e){var a=e.red,t=e.className,n=Object(I.a)(e,G),l="".concat(U.a.button," ").concat(a?U.a.red:U.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},z=t(20),V=t.n(z),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],X=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(I.a)(e,Q),o="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),s=Object(N.a)(i,2),m=s[0],u=s[1];return r.a.createElement("div",null,r.a.createElement("h2",{className:E.a.commonHeader},"HOMEWORK 4"),r.a.createElement("div",{className:L.a.column},r.a.createElement(W,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(W,{className:L.a.blue}),r.a.createElement(Y,null,"default"),r.a.createElement(Y,{red:!0,onClick:o},"delete "),r.a.createElement(Y,{disabled:!0},"disabled"),r.a.createElement(X,{checked:m,onChangeChecked:u},"some text "),r.a.createElement(X,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})))},Z=t(11),$=t.n(Z),ee=["autoFocus","onBlur","onEnter","spanProps"],ae=["children","onDoubleClick","className"],te=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(I.a)(e,ee),o=Object(n.useState)(!1),i=Object(N.a)(o,2),s=i[0],m=i[1],u=l||{},d=u.children,p=u.onDoubleClick,f=u.className,_=Object(I.a)(u,ae),E="".concat(s?$.a.input:$.a.editableSpan," ").concat(f);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(W,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),p&&p(e)},className:E},_),"\u270d ",d||c.value))};function ne(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function re(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}ne("test",{x:"A",y:1});re("test",{x:"",y:0});var le=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:$.a.container},r.a.createElement("h2",{className:E.a.commonHeader},"HOMEWORK 6"),r.a.createElement("div",null,r.a.createElement(te,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:$.a.buttonsContainer},r.a.createElement(Y,{onClick:function(){ne("editable-span-value",t)}},"save"),r.a.createElement(Y,{onClick:function(){l(re("editable-span-value",""))}},"restore")))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(j,null),r.a.createElement(F,null),r.a.createElement(q,null),r.a.createElement(le,null))},oe=["options","onChange","onChangeOption"],ie=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(I.a)(e,oe),c=a?a.map((function(e,a){return r.a.createElement("option",{key:e+"-"+a,value:e},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),a&&n&&n(e.currentTarget.value)}},l),c)},se=["type","name","options","value","onChange","onChangeOption"],me=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(I.a)(e,se),function(e){l&&l(e),c&&c(e.currentTarget.value),console.log(e.currentTarget.value)}),i=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",onChange:o,name:a,value:e,checked:n===e}),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},ue=t(21),de=t.n(ue),pe=["x","y","z"];var fe=function(){var e=Object(n.useState)(pe[1]),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"".concat(E.a.container," ").concat(de.a.internalContainer)},r.a.createElement("h2",{className:E.a.commonHeader},"HOMEWORK 7"),r.a.createElement("div",{className:de.a.selectContainer},r.a.createElement(ie,{options:pe,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(me,{name:"radio",options:pe,value:t,onChangeOption:l})))},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"sort":return"Up"===a.payload?e.slice().sort((function(e,a){return e.name>a.name?1:-1})):e.slice().sort((function(e,a){return e.name<a.name?1:-1}));case"check":return e.filter((function(e){return e.age>a.payload}));default:return e}},Ee=t(9),ve=t.n(Ee),ge=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(n.useState)(ge),a=Object(N.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,className:ve.a.userString},r.a.createElement("span",null,e.name)," ",r.a.createElement("span",null,e.age))}));return r.a.createElement("div",{className:"".concat(E.a.container," ").concat(ve.a.privateStyleForContainer)},r.a.createElement("h2",{className:E.a.commonHeader},"HOMEWORK 8"),r.a.createElement("div",null,c),r.a.createElement("div",{className:ve.a.buttons},r.a.createElement(Y,{className:ve.a.filterButton,onClick:function(){return l(_e(ge,{type:"sort",payload:"Up"}))}},"sort up"),r.a.createElement(Y,{className:ve.a.filterButton,onClick:function(){return l(_e(ge,{type:"sort",payload:"Down"}))}},"sort down"),r.a.createElement(Y,{className:ve.a.filterButton,onClick:function(){return l(_e(ge,{type:"check",payload:18}))}},"check 18")))};var be=function(){var e=Object(n.useState)(0),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(N.a)(c,2),i=(o[0],o[1]),s=Object(n.useState)(!1),m=Object(N.a)(s,2),u=m[0],d=m[1],p=function(){clearInterval(t),l(0)},f=(new Date).getHours(),_=f<10?"0"+f:f,E=(new Date).getMinutes(),v=E<10?"0"+E:E,g=(new Date).getSeconds(),h=g<10?"0"+g:g,b="".concat(_,":").concat(v,":").concat(h),C=(new Date).getDate(),O=+(new Date).getMonth()+1,k=(new Date).getFullYear(),x="".concat(C<10?"0"+C:C,".").concat(O<10?"0"+O:O,".").concat(k);return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},b),u&&r.a.createElement("div",null,x),r.a.createElement(Y,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(Y,{onClick:p},"stop"))},Ce=t(24),Ne=t.n(Ce);var Oe=function(){return r.a.createElement("div",{className:Ne.a.privateStyleForContainer},r.a.createElement("h2",{className:E.a.commonHeader},"homeworks 9"),r.a.createElement(be,null))};function ke(){return r.a.createElement("div",null,r.a.createElement(fe,null),r.a.createElement(he,null),r.a.createElement(Oe,null))}function xe(){return r.a.createElement("div",null,r.a.createElement("h1",null,"JuniorPlus"))}var ye="/pre-junior",Se="/junior",je="/junior-plus";var we=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(m.a,{to:ye})}),r.a.createElement(m.b,{path:ye,element:r.a.createElement(ce,null)}),"// add routes",r.a.createElement(m.b,{path:Se,element:r.a.createElement(ke,null)}),r.a.createElement(m.b,{path:je,element:r.a.createElement(xe,null)}),r.a.createElement(m.b,{element:function(){return r.a.createElement(u,null)}})))},Ae=t(16),He=t.n(Ae);var Be=function(){return r.a.createElement("div",{className:He.a.navLinkBlock},r.a.createElement(s.b,{to:ye},r.a.createElement("span",{className:He.a.links},"Pre-junior")),r.a.createElement(s.b,{to:Se},r.a.createElement("span",{className:He.a.links},"Junior")),r.a.createElement(s.b,{to:je},r.a.createElement("span",{className:He.a.links},"Junior-plus")),r.a.createElement("span",null,"Links"))};var Te=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(Be,null),r.a.createElement(we,null)))};var Me=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",{className:i.a.appHeader},"REACT HOMEWORK:"),r.a.createElement(Te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.85b6dce6.chunk.js.map