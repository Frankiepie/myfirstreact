(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{19:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(20),l=n.n(s),r=(n(30),n(0)),o=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(r.jsxs)("div",{class:"container-fluid",children:[Object(r.jsx)("a",{class:"navbar-brand",href:"#",children:"ICS2608"}),Object(r.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(r.jsxs)("div",{class:"navbar-nav",children:[Object(r.jsx)("a",{class:"nav-link",href:"/myfirstreact/",children:"Home"}),Object(r.jsx)("a",{class:"nav-link",href:"/myfirstreact/#/employees",children:"Employees"}),Object(r.jsx)("a",{class:"nav-link",href:"/myfirstreact/#/add",children:"Add employee"}),Object(r.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},i=n(6),d=n(2),j=n(5),b=n(21),h=n.n(b).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),m=function(){return h.get("/employees")},u=function(e){return h.post("/employees",e)},O=function(e){return h.put("/employees",e)},p=function(e){return h.get("/employees/".concat(e))},x=function(e){return h.delete("/employees/".concat(e))},f=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),l=Object(j.a)(s,2),o=l[0],i=l[1],b=Object(c.useState)(""),h=Object(j.a)(b,2),m=h[0],x=h[1],f=Object(d.f)(),v=Object(d.g)().employeeId;Object(c.useEffect)((function(){v&&p(v).then((function(e){a(e.data.name),i(e.data.location),x(e.data.department)})).catch((function(e){console.error("something went wrong!",e)}))}),[]);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h3",{children:"Add Employee"}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"nameField",className:"form-label",children:"Name"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"nameField",placeholder:"Add Employee Name",onChange:function(e){return a(e.target.value)}})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"locationField",className:"form-label",children:"Location"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"locationField",placeholder:"Add Employee location",onChange:function(e){return i(e.target.value)}})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"departmentField",className:"form-label",children:"Department"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"departmentField",placeholder:"Add Employee Department",onChange:function(e){return x(e.target.value)}})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),v?O({employeeId:v,name:n,location:o,department:m}).then((function(e){console.log("updated employee",e.data),f("/employees")})).catch((function(e){console.error("Something went wrong!")})):u({name:n,location:o,department:m}).then((function(e){console.log("added new employee",e.data),f("/employees")})).catch((function(e){console.error("Something went wrong!")}))}(e)},children:"Save"})]})]})},v=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){s()}));var s=function(){m().then((function(e){a(e.data)})).catch((function(){console.log("Erroar. mamaya na lang ulit ^.^V")}))};return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h3",{children:"List of Employees "}),Object(r.jsx)("div",{children:Object(r.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{class:"table-danger",children:[Object(r.jsx)("td",{children:"Name"}),Object(r.jsx)("td",{children:"Location"}),Object(r.jsx)("td",{children:"Department"}),Object(r.jsx)("td",{children:"Action"})]})}),Object(r.jsx)("tbody",{children:n.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.department}),Object(r.jsx)("td",{children:e.location}),Object(r.jsx)("td",{children:Object(r.jsxs)("div",{className:"d-grid gap-2 d-md-flex",children:[Object(r.jsx)(i.b,{className:"btn btn-primary",to:"/edit/".concat(e.employeeId),children:"Update"}),Object(r.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.employeeId,void x(t).then((function(e){console.log("successfully deleted employee!"),s()})).catch((function(e){console.error("something went wrong!",e)}));var t},children:"Delete"})]})})]},e.employeeId)}))})]})})]})},y=(n.p,n(19),n(22)),g=n(23),N=n(25),k=n(24),C=function(e){Object(N.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(y.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{class:"btn btn-dark",onClick:this.addCounter,children:"Click Me!"}),Object(r.jsxs)("p",{class:"fw-bold",children:["Sad Boi Reax = ",this.state.count]})]})}}]),n}(a.a.Component);var w=function(){return Object(r.jsx)("div",{className:"Home",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{className:"App-logo",src:"https://data.whicdn.com/images/129264456/original.gif",alt:"logo"}),Object(r.jsx)("p",{children:"Lonely Toons"}),Object(r.jsx)(C,{})]})})},S=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Page Not Found!"})})},F=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{basename:"/",children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",element:Object(r.jsx)(w,{})}),Object(r.jsx)(d.a,{exact:!0,path:"/myfirstreact",element:Object(r.jsx)(w,{})}),Object(r.jsx)(d.a,{exact:!0,path:"/employees",element:Object(r.jsx)(v,{})}),Object(r.jsx)(d.a,{exact:!0,path:"/add",element:Object(r.jsx)(f,{})}),Object(r.jsx)(d.a,{exact:!0,path:"/edit/:employeeId",element:Object(r.jsx)(f,{})}),Object(r.jsx)(d.a,{exact:!0,path:"*",element:Object(r.jsx)(S,{})})]})})})};var A=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(F,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),s(e),l(e)}))};n(50);l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),E()}},[[51,1,2]]]);
//# sourceMappingURL=main.2af43b18.chunk.js.map