(window.webpackJsonp=window.webpackJsonp||[]).push([[33,7,8,9],{300:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(113).default)("71bb2962",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n(300)},302:function(t,e,n){var r=n(112)((function(i){return i[1]}));r.push([t.i,".side_togle{cursor:pointer}.navbar-vertical.navbar-expand-xs .navbar-collapse,.navbar-vertical.navbar-expand-xs.fixed-start{overflow:hidden}.flex-row{flex-direction:row}.collapse-nb{display:block!important}#iconNavbarSidenav{cursor:pointer}",""]),r.locals={},t.exports=r},303:function(t,e,n){"use strict";n.r(e);var r={name:"AdminTemplate",props:{page:{type:String,default:""},modulo:{type:String,default:""}},mounted:function(){null==localStorage.getItem("userAuth")&&this.$router.push("/auth/login"),this.$nextTick((function(){}))}},o=n(46),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("BaseAside"),t._v(" "),e("main",{staticClass:"main-content position-relative max-height-vh-100 h-100 border-radius-lg"},[e("BaseNav",{attrs:{page:t.page,modulo:t.modulo}}),t._v(" "),e("div",{staticClass:"container-fluid py-4"},[t._t("body"),t._v(" "),e("BaseFooter")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseAside:n(310).default,BaseNav:n(304).default,BaseFooter:n(305).default})},304:function(t,e,n){"use strict";n.r(e);var r={props:{page:{type:String,default:""},modulo:{type:String,default:""}},data:function(){return{theme:"light-version",user:{},window:{width:0,height:0}}},methods:{SideToggle:function(){var body=document.body;body.classList.add("g-sidenav-show","bg-gray-100"),body.classList.contains("g-sidenav-hidden")?body.classList.remove("g-sidenav-hidden"):body.classList.add("g-sidenav-hidden")},Logout:function(){var t=this;this.$swal.fire({title:"Atención",text:"¿Desea cerrar sesión?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sí, cerrar sesión"}).then((function(e){e.isConfirmed&&(localStorage.removeItem("userAuth"),t.$router.push("/auth/login"))}))},hideSideNav:function(){var t=document.getElementById("sidenav-main");t.classList.contains("d-none")?t.classList.remove("d-none"):t.classList.add("d-none"),document.getElementById("sidenav-main").classList.remove("dark-version"==this.theme?"bg-white":"bg-dark"),document.getElementById("sidenav-main").classList.add("dark-version"==this.theme?"bg-dark":"bg-white")},DarkMode:function(){var t=localStorage.getItem("theme.pos"),body=document.body;null!=t?(body.classList.contains("dark-version")?(body.classList.remove("dark-version"),t="light-version",localStorage.setItem("theme.pos",t)):(body.classList.remove("light-version"),t="dark-version",localStorage.setItem("theme.pos",t)),this.theme=t,body.classList.add(t),document.getElementById("sidenav-main").classList.remove("dark-version"==this.theme?"bg-white":"bg-dark"),document.getElementById("sidenav-main").classList.add("dark-version"==this.theme?"bg-dark":"bg-white")):localStorage.setItem("theme.pos","dark-version")}},mounted:function(){var t=this;this.$nextTick((function(){var e=localStorage.getItem("userAuth");t.user=JSON.parse(e)}))}},o=(n(301),n(46)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main-content position-relative max-height-vh-100 h-100 border-radius-lg"},[e("nav",{staticClass:"navbar navbar-main navbar-expand-lg position-sticky mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky",staticStyle:{"background-color":"#050a440d"},attrs:{id:"navbarBlur","data-scroll":"true"}},[e("div",{staticClass:"container-fluid py-1 px-3"},[e("nav",{staticClass:"navbar navbar-main navbar-expand-lg position-sticky mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky",staticStyle:{"margin-top":"-1px!important","padding-left":"20px!important","padding-right":"20px!important"},attrs:{id:"navbarBlur","data-scroll":"true"}},[e("a",{staticClass:"opacity-3 text-dark",attrs:{href:"javascript:;"}},[e("svg",{staticStyle:{"margin-top":"-6px!important"},attrs:{width:"20px",height:"20px",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("title",[t._v("Módulo")]),t._v(" "),e("g",{attrs:{id:"页面-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{id:"Development",transform:"translate(-96.000000, -48.000000)","fill-rule":"nonzero"}},[e("g",{attrs:{id:"web_fill",transform:"translate(96.000000, 48.000000)"}},[e("path",{attrs:{d:"M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",id:"MingCute","fill-rule":"nonzero"}}),t._v(" "),e("path",{attrs:{d:"M19,4 C20.1046,4 21,4.89543 21,6 L21,18 C21,19.1046 20.1046,20 19,20 L5,20 C3.89543,20 3,19.1046 3,18 L3,6 C3,4.89543 3.89543,4 5,4 L19,4 Z M19,10 L5,10 L5,17 C5,17.51285 5.38604429,17.9355092 5.88337975,17.9932725 L6,18 L18,18 C18.51285,18 18.9355092,17.613973 18.9932725,17.1166239 L19,17 L19,10 Z M6,6 C5.44772,6 5,6.44772 5,7 C5,7.55228 5.44772,8 6,8 C6.55228,8 7,7.55228 7,7 C7,6.44772 6.55228,6 6,6 Z M9,6 C8.44772,6 8,6.44772 8,7 C8,7.55228 8.44772,8 9,8 C9.55228,8 10,7.55228 10,7 C10,6.44772 9.55228,6 9,6 Z M12,6 C11.4477,6 11,6.44772 11,7 C11,7.55228 11.4477,8 12,8 C12.5523,8 13,7.55228 13,7 C13,6.44772 12.5523,6 12,6 Z",id:"形状",fill:"#09244B"}})])])])])]),t._v(" "),e("a",{staticClass:"opacity-5 text-dark",staticStyle:{"padding-left":"5px!important"},attrs:{href:"javascript:void(0);"}},[t._v(t._s(t.page)+" / ")]),t._v(" "),e("a",{staticClass:"font-weight-bolder mb-0",staticStyle:{"padding-left":"5px!important"}},[t._v(" "+t._s(t.modulo))])]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 collapse-nb",attrs:{id:"navbar"}},[e("div",{staticClass:"ms-md-auto pe-md-3 d-flex align-items-center"}),t._v(" "),e("ul",{staticClass:"navbar-nav justify-content-end flex-row"},[e("li",{staticClass:"nav-item d-flex align-items-center"},[e("abbr",{attrs:{title:"Nombre de usuario"}},[e("a",{staticClass:"nav-link text-body font-weight-bold px-0",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"fa fa-user me-sm-1"}),t._v(" "),e("span",{staticClass:"d-sm-inline d-none"},[t._v(t._s(t.user.nombre))])])])]),t._v(" "),e("li",{staticClass:"nav-item px-3 d-flex align-items-center"},[e("abbr",{attrs:{title:"Cambiar vista Dark-Mode"}},[e("a",{staticClass:"nav-link text-body font-weight-bold px-0",attrs:{href:"javascript:;"},on:{click:function(e){return t.DarkMode()}}},["light-version"==t.theme?e("i",{staticClass:"fa fa-moon fixed-plugin-button-nav cursor-pointer"}):e("i",{staticClass:"fa fa-sun fixed-plugin-button-nav cursor-pointer"}),t._v(" "),e("span",{staticClass:"d-sm-inline d-none"},[t._v("Cambiar vista")])])])]),t._v(" "),e("li",{staticClass:"nav-item d-flex align-items-center"},[e("abbr",{attrs:{title:"Cerrar sesión"}},[e("a",{staticClass:"nav-link text-body font-weight-bold px-0",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.Logout()}}},[e("i",{staticClass:"fa fa-sign-out"}),t._v(" "),e("span",{staticClass:"d-sm-inline d-none"},[t._v("Cerrar sesión")])])])]),t._v(" "),e("li",{staticClass:"nav-item d-xl-none ps-3 d-flex align-items-center"},[e("a",{staticClass:"nav-link text-body p-0",attrs:{href:"javascript:;",id:"iconNavbarSidenav"},on:{click:function(e){return t.hideSideNav()}}},[t._m(0)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidenav-toggler-inner"},[e("i",{staticClass:"sidenav-toggler-line"}),t._v(" "),e("i",{staticClass:"sidenav-toggler-line"}),t._v(" "),e("i",{staticClass:"sidenav-toggler-line"})])}],!1,null,null,null);e.default=component.exports},305:function(t,e,n){"use strict";n.r(e);var r=n(46),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer pt-3"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row align-items-center justify-content-lg-between"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"copyright text-center text-sm text-muted text-lg-start"},[t._v("\n             Elaborado por estudiantes del curso especializado en \n         \n               "),e("a",{staticClass:"font-weight-bold",attrs:{href:"https://uls.edu.sv/sitioweb/carreras/facultad-de-ciencias-del-hombre-y-la-naturaleza/licenciatura-en-ciencias-de-la-computacion",target:"_blank"}},[t._v("Desarrollo de aplicaciones con Framework Laravel y VueJs,")]),t._v("\n               Universidad Luterana Salvadoreña - ULS Mayo 2023.\n               \n             ")])])])])])}],!1,null,null,null);e.default=component.exports},517:function(t,e,n){"use strict";n.r(e);n(42),n(35),n(41),n(15),n(65),n(34),n(66);var r=n(10),o=n(26),l=(n(64),n(311)),c=n(313);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(l.c)("required",v(v({},c.e),{},{message:"*Campo requerido"})),Object(l.c)("email",c.b),Object(l.c)("integer",c.c),Object(l.c)("between",c.a);var m={components:{ValidationProvider:l.b,ValidationObserver:l.a},name:"IndexPage",head:function(){return{title:"Nueva marca"}},data:function(){return{model:{nombre:""},apiUrl:"marcas",page:"Configuración",modulo:"Marcas"}},methods:{enviar:function(){var t=this;this.$refs.formMarcas.validate().then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return t.$swal.fire({icon:"error",title:"Validación de datos",text:"Para continuar llene los campos requeridos"}),e.abrupt("return");case 3:return t.load=!0,e.prev=4,e.next=7,t.$api.$post(t.apiUrl,t.model);case 7:r=e.sent,console.log(r),t.$router.back(),t.$swal.fire({icon:"success",title:"Datos guardados!",showDenyButton:!1,text:"SIGESCO",showConfirmButton:!1,timerProgressBar:!0,timer:2e3,confirmButtonText:!0}).then((function(e){e.isConfirmed&&t.$router.back()})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:return e.prev=16,t.load=!1,e.finish(16);case 19:t.firstName=t.lastName=t.email="",t.$nextTick((function(){t.$refs.formMarcas.reset()}));case 21:case"end":return e.stop()}}),e,null,[[4,13,16,19]])})));return function(t){return e.apply(this,arguments)}}())}},mounted:function(){this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case 1:case"end":return t.stop()}}),t)}))))}},f=m,h=n(46),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("AdminTemplate",{attrs:{page:t.page,modulo:t.modulo}},[e("div",{attrs:{slot:"body"},slot:"body"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-8 col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h3",[t._v("Agregar nueva marca")])]),t._v(" "),e("div",{staticClass:"card-body"},[e("ValidationObserver",{ref:"formMarcas"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"row",attrs:{slot:"body"},slot:"body"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group col-12"},[e("label",{attrs:{for:""}},[t._v("Nombre de la marca")]),t._v(" "),e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.nombre,expression:"model.nombre"}],staticClass:"form-control",attrs:{type:"text",name:"nombre",id:""},domProps:{value:t.model.nombre},on:{input:function(e){e.target.composing||t.$set(t.model,"nombre",e.target.value)}}}),t._v(" "),e("span",{staticStyle:{color:"red","font-weight":"bold","font-size":"15px"}},[t._v(t._s(r[0]))])]}}])})],1)])]),t._v(" "),e("br"),t._v(" "),e("hr",{staticClass:"horizontal dark mt-0;",staticStyle:{"margin-top":"-1px"}}),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("button",{staticClass:"btn btn-info btn-sm w-100",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("Regresar\n                                                ")])]),t._v(" "),e("div",{staticClass:"col-6"},[e("button",{staticClass:"btn btn-dark btn-sm w-100",attrs:{type:"button"},on:{click:function(e){return t.enviar()}}},[t._v("Guardar")])])])])])])],1)])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminTemplate:n(303).default})}}]);