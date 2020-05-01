(function(e){function t(t){for(var r,i,s=t[0],l=t[1],p=t[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,p||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var m=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("br"),a("br"),a("br"),a("br"),a("b-container",{attrs:{fluid:""}},[a("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[a("b-navbar-brand",{attrs:{to:{name:"Home",params:{currentPage:1}}}},[a("b-icon-code-slash",{staticClass:"d-inline-block align-top",attrs:{"font-scale":"1.5"}}),e._v(" Single Page Application Employees ")],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:{name:"About"}}},[e._v("About")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit",variant:"outline-info"}},[e._v("Search")])],1)],1)],1)],1)],1)},s=[],l=a("2877"),p={},m=Object(l["a"])(p,i,s,!1,null,null,null),c=m.exports,d={components:{NavBar:c}},u=d,b=Object(l["a"])(u,n,o,!1,null,null,null),f=b.exports,v=a("8c4f"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-row",[a("b-col",{attrs:{md:""}},[a("PagesNavBar",{attrs:{currentPage:e.currentPage}})],1)],1)],1)},h=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"overflow-auto"},[a("b-pagination-nav",{attrs:{"link-gen":e.linkGen,"number-of-pages":e.pages,"use-router":"","first-number":"","last-number":"",align:"center",pills:""}}),a("div",{staticClass:"float-right"},[a("span",{staticClass:"badge badge-dark"},[e._v("PerPage: ")]),a("select",{directives:[{name:"model",rawName:"v-model.number",value:e.perPage,expression:"perPage",modifiers:{number:!0}}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(t){var a="_value"in t?t._value:t.value;return e._n(a)}));e.perPage=t.target.multiple?a:a[0]}}},[a("option",[e._v("5")]),a("option",[e._v("10")]),a("option",[e._v("25")]),a("option",[e._v("50")]),a("option",[e._v("100")])])]),a("TableEmployees",{attrs:{employees:e.employees,isBusy:e.isBusy},on:{"emit-refresh-tbl":e.linkGen}})],1)},_=[],k=(a("a9e3"),a("bc3a")),E=a.n(k),x=E.a.create({baseURL:"https://spa-java-api.herokuapp.com/spapp/emp",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),I={getPaginatedEmployees:function(e,t){return x.get("/paginated/"+e+"/"+t)},getTotalEmployees:function(){return x.get("/pages")},updateEmployee:function(e){return x.put("/update/"+e.empId,{empId:e.empId,empName:e.empName,empActive:e.empActive,emp_dpId:{dpId:e.emp_dpId.dpId,dpName:e.emp_dpId.dpName}})}},w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{attrs:{hover:"",responsive:"","sort-icon-left":"","sticky-header":"500px",items:e.employees,fields:e.fields,small:e.small,"head-variant":e.headVariant,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"no-sort-reset":"",busy:e.isBusy},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-info my-2"},[a("b-spinner",{staticClass:"align-middle"}),a("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"cell(details)",fn:function(t){return[a("div",[a("EmployeeDetails",{attrs:{employee:t.item},on:{"refresh-table":e.emitRefresh}})],1)]}},{key:"cell(empActive)",fn:function(t){return[t.value?a("b-badge",{attrs:{variant:"primary"}},[e._v("YES")]):a("b-badge",{attrs:{variant:"danger"}},[e._v("NO")])]}}])}),a("div",[e._v(" Sorting By: "),a("b",[e._v(e._s(e.sortBy))]),e._v(" , Sort Direction: "),a("b",[e._v(e._s(e.sortDesc?"Descending":"Ascending"))])])],1)},P=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-"+e.employee.empId,expression:"`modal-${employee.empId}`"}],attrs:{size:"sm",variant:"link"}},[e._v(" View ")]),a("b-modal",{attrs:{id:"modal-"+e.employee.empId,centered:"","header-bg-variant":"dark","header-text-variant":"light","footer-bg-variant":"dark","footer-text-variant":"light","button-size":"sm",title:"Employee Details","no-stacking":""},scopedSlots:e._u([{key:"modal-footer",fn:function(t){t.ok;var r=t.cancel;return[a("b-button",{attrs:{size:"sm",variant:"outline-light"},on:{click:function(e){return r()}}},[e._v(" Cancel ")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"2nd-modal-"+e.employee.empId,expression:"`2nd-modal-${employee.empId}`"}],attrs:{size:"sm",variant:"outline-primary"}},[e._v(" Edit ")])]}}])},[a("b-card",[a("b-card-text",[e.employee.empActive?a("span",[a("b-avatar",{attrs:{badge:"Yes","badge-variant":"primary"}})],1):a("span",[a("b-avatar",{attrs:{badge:"No","badge-variant":"danger"}})],1),a("b",[a("span",[e._v(" "+e._s(e.employee.empName)+" ")])])]),a("b-card-text",[a("b",[e._v("Department: ")]),a("b-badge",{attrs:{variant:"info"}},[e._v(" "+e._s(e.employee.emp_dpId.dpName))])],1)],1)],1),a("b-modal",{attrs:{id:"2nd-modal-"+e.employee.empId,centered:"","header-bg-variant":"dark","header-text-variant":"light","footer-bg-variant":"dark","footer-text-variant":"light","button-size":"sm",title:"Edit Employee"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var r=t.cancel;return[a("b-button",{attrs:{variant:"outline-light"},on:{click:function(e){return r()}}},[e._v(" Cancel ")])]}}])},[a("EmployeeEditForm",{attrs:{employee:e.employee},on:{"hide-modal":e.hideModal}})],1)],1)},N=[],A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form",{on:{submit:e.onSubmit}},[a("b-form-group",{attrs:{id:"employee-name-group",label:"Employee Name:","label-for":"employee-name"}},[a("b-form-input",{attrs:{id:"employee-name",required:"",placeholder:"Enter name",state:e.nameValidation},model:{value:e.orgEmp.empName,callback:function(t){e.$set(e.orgEmp,"empName",t)},expression:"orgEmp.empName"}}),a("b-form-invalid-feedback",{attrs:{state:e.nameValidation}},[e._v(" Employee name should be 3-15 characters long. ")]),a("b-form-valid-feedback",{attrs:{state:e.nameValidation}},[e._v(" Looks Good. ")])],1),a("b-form-group",[a("b-form-checkbox",{attrs:{name:"is-employee-active",switch:""},model:{value:e.orgEmp.empActive,callback:function(t){e.$set(e.orgEmp,"empActive",t)},expression:"orgEmp.empActive"}},[e._v(" is Active "),e.orgEmp.empActive?a("b-badge",{attrs:{variant:"primary"}},[e._v("YES")]):a("b-badge",{attrs:{variant:"danger"}},[e._v("NO")])],1)],1),a("b-form-group",[a("b-form-select",{attrs:{state:e.departmentValidation},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v(" -- Please select a department -- ")])]},proxy:!0}]),model:{value:e.orgEmp.emp_dpId,callback:function(t){e.$set(e.orgEmp,"emp_dpId",t)},expression:"orgEmp.emp_dpId"}},e._l(e.departments,(function(t){return a("b-form-select-option",{key:t.dpId,attrs:{value:t}},[e._v(" "+e._s(t.dpName)+" ")])})),1)],1),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:e.isReady}},[e._v(" Update ")])],1)],1)},B=[],O=E.a.create({baseURL:"https://spa-java-api.herokuapp.com/spapp/dep",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),S={getAllDepartments:function(){return O.get("/all")}},V={props:{employee:{type:Object,required:!0}},data:function(){return{departments:[],orgEmp:Object}},created:function(){var e=this;this.orgEmp={empId:this.employee.empId,empName:this.employee.empName,empActive:this.employee.empActive,emp_dpId:this.employee.emp_dpId},S.getAllDepartments().then((function(t){e.departments=t.data})).catch((function(e){console.log(e.response)}))},computed:{nameValidation:function(){return this.orgEmp.empName.length>2&&this.orgEmp.empName.length<16},departmentValidation:function(){return null!==this.orgEmp.emp_dpId},isReady:function(){return!(this.nameValidation&&this.departmentValidation)}},methods:{onSubmit:function(e){var t=this;e.preventDefault(),I.updateEmployee(this.orgEmp).then((function(e){t.$emit("hide-modal",e.data)})).catch((function(e){console.log(e.response)}))}}},C=V,$=Object(l["a"])(C,A,B,!1,null,null,null),T=$.exports,D={components:{EmployeeEditForm:T},props:{employee:{type:Object,required:!0}},methods:{hideModal:function(e){this.$emit("refresh-table",e),this.$bvModal.hide("2nd-modal-".concat(this.employee.empId))}}},z=D,M=Object(l["a"])(z,j,N,!1,null,null,null),R=M.exports,q={components:{EmployeeDetails:R},props:{employees:{Type:Array,required:!0},isBusy:Boolean},data:function(){return{sortBy:"empId",sortDesc:!1,small:!0,headVariant:"light",boxTwo:"",fields:[{key:"details",label:""},{key:"empId",label:"Id",sortable:!0},{key:"empName",label:"Name",sortable:!0},{key:"emp_dpId.dpName",label:"Department",sortable:!0},{key:"empActive",label:"isActive"}]}},methods:{emitRefresh:function(e){var t=this;this.boxTwo="",this.$bvModal.msgBoxOk("Employee with id: ".concat(e.empId," was updated successfully"),{title:"Confirmation",size:"sm",buttonSize:"sm",okVariant:"outline-success",headerClass:"p-2 border-bottom-0",headerBgVariant:"dark",headerTextVariant:"light",footerClass:"p-2 border-top-0",footerBgVariant:"dark",footerTextVariant:"light",centered:!0}).then((function(e){t.boxTwo=e})).catch((function(e){console.log(e)})),this.$emit("emit-refresh-tbl")}}},G=q,H=Object(l["a"])(G,w,P,!1,null,null,null),L=H.exports,U={props:{currentPage:{type:[Number,String],required:!0}},components:{TableEmployees:L},data:function(){return{perPage:10,pages:5,employees:[]}},beforeUpdate:function(){var e=this;I.getTotalEmployees().then((function(t){e.pages=Math.ceil(t.data/e.perPage)})).catch((function(t){console.log(t.response),e.pages=1}))},methods:{linkGen:function(e){return this.updateTable(),{name:"Home",params:{currentPage:e}}},updateTable:function(){var e=this;I.getPaginatedEmployees(this.currentPage,this.perPage).then((function(t){e.employees=t.data})).catch((function(t){e.employees=[],console.log(t.response)}))}},computed:{isBusy:function(){return 0===this.employees.length}}},F=U,Y=Object(l["a"])(F,y,_,!1,null,null,null),J=Y.exports,K={props:["currentPage"],components:{PagesNavBar:J}},Q=K,W=Object(l["a"])(Q,g,h,!1,null,null,null),X=W.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("b-container",[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{md:"8"}},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{attrs:{title:"FrontEnd GitHub Repo",footerBgVariant:"dark","body-bg-variant":"dark","body-text-variant":"light"}},[a("b-card-text",[e._v(" This repository contains the Vue.js project. ")]),a("b-button",{attrs:{href:"https://github.com/BalthazRBlake/single-page-app-vue",target:"_blank",variant:"outline-info"}},[e._v("Visit ")])],1),a("b-card",{attrs:{title:"Back End App",footerBgVariant:"dark","body-bg-variant":"dark","body-text-variant":"light"}},[a("b-card-text",[e._v(" Here you can get the API Swagger Documentation for the available endpoints. ")]),a("b-button",{attrs:{href:"https://spa-java-api.herokuapp.com",variant:"outline-info"}},[e._v("Visit ")])],1)],1)],1)],1)],1)],1)},ee=[],te={},ae=Object(l["a"])(te,Z,ee,!1,null,null,null),re=ae.exports;r["default"].use(v["a"]);var ne=[{path:"/employees/:currentPage",name:"Home",component:X,props:!0},{path:"/",redirect:"/employees/1"},{path:"/about",name:"About",component:re}],oe=new v["a"]({mode:"history",base:"/",routes:ne}),ie=oe,se=a("2f62");r["default"].use(se["a"]);var le=new se["a"].Store({state:{},mutations:{},actions:{},modules:{}}),pe=a("5f5b"),me=a("b1e0");a("f9e3"),a("2dd8");r["default"].use(pe["a"]),r["default"].use(me["a"]),r["default"].config.productionTip=!1,new r["default"]({router:ie,store:le,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.f0c865fd.js.map