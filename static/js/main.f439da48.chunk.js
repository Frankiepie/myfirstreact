(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{11:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),l=(n(30),n.p,n(11),n(0)),o=n(21),i=n(22),d=n(25),b=n(24),j=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{class:"btn btn-dark",onClick:this.addCounter,children:"Click Me!"}),Object(l.jsxs)("p",{class:"fw-bold",children:["Sad Boi Reax = ",this.state.count]})]})}}]),n}(a.a.Component),u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"/myfirstreact",children:"Lonely Toons"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact",children:"My Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/employees",children:"Members"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/add",children:"Add Member"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},m=n(8),h=n(2),O=n(23),f=n.n(O).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),x=n(5),p=function(){return f.get("/employees")},v=function(e){return f.post("/employees",e)},g=function(e){return f.put("/employees",e)},y=function(e){return f.get("/employees/".concat(e))},k=function(e){return f.delete("/employees/".concat(e))},N=n.p+"static/media/wall.e06ab9a7.jpg",w=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}));var r=function(){p().then((function(e){a(e.data)})).catch((function(){console.log("sorry it stopped working. godbless")}))};return Object(l.jsx)("div",{style:{backgroundImage:"url(".concat(N,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"100vh"},children:Object(l.jsxs)("div",{children:["\xa0",Object(l.jsx)("h2",{class:"fw-bold",children:"Members"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("table",{className:"table",border:"1",children:[Object(l.jsx)("thead",{className:"table table-dark",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{class:"fw-bold",children:"Name"}),Object(l.jsx)("td",{class:"fw-bold",children:"Nickname"}),Object(l.jsx)("td",{class:"fw-bold",children:"Instrument"}),Object(l.jsx)("td",{class:"fw-bold",children:"Action"})]})}),n.map((function(e){return Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{className:"table-light",children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{class:"d-grid gap-2 d-md-flex",children:[Object(l.jsx)(m.b,{className:"btn btn-primary",to:"/myfirstreact/edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(t){return n=e.employeeId,void k(n).then((function(e){console.log("Successfully deleted employee!"),r()})).catch((function(e){console.error("Something went wrong!",e)}));var n},children:"Delete"})]})})]},e.employeeId)})}))]})})]})})};var S=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{className:"App-logo",src:"https://data.whicdn.com/images/129264456/original.gif",alt:"logo"}),Object(l.jsx)("p",{children:"Lonely Toons"}),Object(l.jsx)(j,{})]})})},C=function(){return Object(l.jsx)("div",{style:{backgroundImage:"url(".concat(N,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"100vh"},children:Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Page Not Found! :("})})})},I=function(){var e=Object(c.useState)(""),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(x.a)(r,2),o=s[0],i=s[1],d=Object(c.useState)(""),b=Object(x.a)(d,2),j=b[0],u=b[1],m=Object(h.f)(),O=Object(h.g)().employeeId;Object(c.useEffect)((function(){O&&y(O).then((function(e){a(e.data.name),i(e.data.department),u(e.data.location)})).catch((function(e){console.error("error")}))}),[]);return Object(l.jsx)("div",{style:{backgroundImage:"url(".concat(N,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"100vh"},children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"name",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:n,id:"name",placeholder:"Add band member's name",onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"name",className:"form-label",children:"Nickname"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:o,id:"name",placeholder:"Add band member's nickname",onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"name",className:"form-label",children:"Instrument"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:j,id:"name",placeholder:"Add band member's main instrument",onChange:function(e){return u(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-dark",onClick:function(e){return function(e){e.preventDefault(),O?g({employeeId:O,name:n,department:o,location:j}).then((function(e){console.log("updated employee!",e.data),m("/employees")})).catch((function(e){console.error("something went wrong!")})):v({name:n,department:o,location:j}).then((function(e){console.log("Added new member!",e.data),m("/employees")})).catch((function(e){console.error("Something went wrong! :(")}))}(e)},children:"Save"})]})})})},A=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{children:Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{exact:!0,path:"/myfirstreact",element:Object(l.jsx)(S,{})}),Object(l.jsx)(h.a,{exact:!0,path:"*",element:Object(l.jsx)(C,{})}),Object(l.jsx)(h.a,{exact:!0,path:"/myfirstreact/employees",element:Object(l.jsx)(w,{})}),Object(l.jsx)(h.a,{exact:!0,path:"/myfirstreact/add",element:Object(l.jsx)(I,{})}),Object(l.jsx)(h.a,{exact:!0,path:"/myfirstreact/edit/:employeeId",element:Object(l.jsx)(I,{})})]})})})};var M=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(A,{})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(50);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.f439da48.chunk.js.map