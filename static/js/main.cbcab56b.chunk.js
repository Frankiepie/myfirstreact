(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{19:function(e,t,c){},30:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(20),r=c.n(s),l=(c(30),c(0)),o=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:"LONELY TOONS"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/#/employees",children:"Members"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/#/add",children:"Add member"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},i=c(6),d=c(2),j=c(5),b=c(21),h=c.n(b).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),u=function(){return h.get("/employees")},m=function(e){return h.post("/employees",e)},O=function(e){return h.put("/employees",e)},x=function(e){return h.get("/employees/".concat(e))},f=function(e){return h.delete("/employees/".concat(e))},p=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),o=r[0],i=r[1],b=Object(n.useState)(""),h=Object(j.a)(b,2),u=h[0],f=h[1],p=Object(d.f)(),v=Object(d.g)().employeeId;Object(n.useEffect)((function(){v&&x(v).then((function(e){a(e.data.name),i(e.data.location),f(e.data.department)})).catch((function(e){console.error("What went wrong?",e)}))}),[]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Add Employee"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"nameField",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"nameField",placeholder:"Add Member Name",onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"locationField",className:"form-label",children:"Color"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"locationField",placeholder:"Add Member Color",onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"departmentField",className:"form-label",children:"Show"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"departmentField",placeholder:"Add Member Show",onChange:function(e){return f(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-secondary",onClick:function(e){return function(e){e.preventDefault(),v?O({employeeId:v,name:c,location:o,department:u}).then((function(e){console.log("Updated.",e.data),p("/employees")})).catch((function(e){console.error("What went wrong?")})):m({name:c,location:o,department:u}).then((function(e){console.log("Successfully added.",e.data),p("/employees")})).catch((function(e){console.error("What went wrong?")}))}(e)},children:"Save a Member"})]})]})},v=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){s()}));var s=function(){u().then((function(e){a(e.data)})).catch((function(){console.log("Error. Sad.")}))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Lonely Toon Squad "}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{class:"table-secondary",children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Color"}),Object(l.jsx)("td",{children:"Show"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-flex",children:[Object(l.jsx)(i.b,{className:"btn btn-primary",to:"/edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.employeeId,void f(t).then((function(e){console.log("Successful deletion."),s()})).catch((function(e){console.error("What went wrong?",e)}));var t},children:"Delete"})]})})]},e.employeeId)}))})]})})]})},g=(c.p,c(19),c(22)),y=c(23),N=c(25),C=c(24),S=function(e){Object(N.a)(c,e);var t=Object(C.a)(c);function c(){var e;return Object(g.a)(this,c),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(y.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{class:"btn btn-dark",onClick:this.addCounter,children:"Click Me!"}),Object(l.jsxs)("p",{class:"fw-bold",children:["Sad Boi Reax = ",this.state.count]})]})}}]),c}(a.a.Component);var k=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{className:"App-logo",src:"https://data.whicdn.com/images/129264456/original.gif",alt:"logo"}),Object(l.jsx)("p",{children:"Lonely Toons"}),Object(l.jsx)(S,{})]})})},w=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Page Not Found!"})})},F=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{basename:"/",children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/",element:Object(l.jsx)(k,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/myfirstreact",element:Object(l.jsx)(k,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/employees",element:Object(l.jsx)(v,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/add",element:Object(l.jsx)(p,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/edit/:employeeId",element:Object(l.jsx)(p,{})}),Object(l.jsx)(d.a,{exact:!0,path:"*",element:Object(l.jsx)(w,{})})]})})})};var A=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(F,{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(50);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),I()}},[[51,1,2]]]);
//# sourceMappingURL=main.cbcab56b.chunk.js.map