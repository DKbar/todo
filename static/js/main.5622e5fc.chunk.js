(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[1],{10:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s}));var a=n(1),r="https://social-network.samuraijs.com/api/1.1/",i="be208add-76be-474f-b426-6fa8679c0152",c=n(45).create({withCredentials:!0,baseURL:r,headers:{"API-KEY":i}}),o={getTodoLists:function(){return c.get("todo-lists").then((function(t){return t.data}))},getTodoTasks:function(t,e,n){return c.get("todo-lists/"+t+"/tasks?page=".concat(e,"&count=").concat(n)).then((function(t){return t.data.items.map((function(t){return t.startDate=new Date(t.startDate+"Z"),t.deadline=new Date(t.deadline+"Z"),Object(a.a)({},t)})),t.data}))},addTodoList:function(t){return c.post("todo-lists",{title:t}).then((function(t){return t.data}))},deleteTodoList:function(t){return c.delete("todo-lists/"+t).then((function(t){return t.data}))},changeTodoList:function(t,e){return c.put("todo-lists/"+t,{title:e}).then((function(t){return t.data}))},addTask:function(t,e){return c.post("todo-lists/"+t+"/tasks",{title:e}).then((function(t){return t.data}))},deleteTask:function(t,e){return c.delete("todo-lists/"+t+"/tasks/"+e).then((function(t){return t.data}))},changeTask:function(t,e,n){return c.put("todo-lists/"+t+"/tasks/"+e,{title:n.title,description:n.description,status:n.status,priority:n.priority,startDate:n.startDate,deadline:n.deadline}).then((function(t){return t.data.data.item.startDate=new Date(t.data.data.item.startDate),t.data.data.item.deadline=new Date(t.data.data.item.deadline),t.data}))}},s={getAuth:function(){return c.get("auth/me").then((function(t){return t.data}))},login:function(t){return c.post("auth/login",{email:t.email,password:t.password,rememberMe:t.rememberMe}).then((function(t){return t.data}))},logout:function(){return c.delete("auth/login").then((function(t){return t.data}))}}},11:function(t,e,n){t.exports={header:"Header_header__3rkAF",name:"Header_name__1kOkj",items:"Header_items__m1LXD",item:"Header_item__L_pNn",activeLink:"Header_activeLink__3PL36",itemSmall:"Header_itemSmall__2pkRv",logout:"Header_logout__IQ0lr"}},19:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return p}));var a=n(5),r=n.n(a),i=n(12),c=n(1),o=n(10),s="SET_USER_DATA",u={userId:null,email:null,login:null,isAuth:!1},d=function(t,e,n,a){return{type:s,data:{userId:t,email:e,login:n,isAuth:a}}},l=function(){return function(t){return o.a.getAuth().then((function(e){if(0===e.resultCode){var n=e.data,a=n.id,r=n.login,i=n.email;t(d(a,i,r,!0))}}))}},f=function(t){return function(){var e=Object(i.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.login(t);case 2:0===e.sent.resultCode&&n(l());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(){return function(){var t=Object(i.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.logout();case 2:0===t.sent.resultCode&&e(d(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(c.a)(Object(c.a)({},t),e.data);default:return t}}},30:function(t,e,n){"use strict";var a=n.p+"static/media/loading.c7d9f081.gif",r=n(2);e.a=function(){return Object(r.jsx)("img",{src:a,alt:"preloader"})}},34:function(t,e,n){"use strict";n.d(e,"h",(function(){return L})),n.d(e,"b",(function(){return D})),n.d(e,"i",(function(){return C})),n.d(e,"a",(function(){return S})),n.d(e,"f",(function(){return E})),n.d(e,"g",(function(){return A})),n.d(e,"d",(function(){return P})),n.d(e,"c",(function(){return I}));var a=n(5),r=n.n(a),i=n(12),c=n(14),o=n(1),s=n(10),u="ADD_TASK",d="DELETE_TASK",l="CHANGE_TASK",f="CHANGE_TODO_LIST",p="SET_TODO_TASKS",b="ADD_TODO_LIST",j="DELETE_TODO_LIST",O="SET_TODO_LISTS",m="TOGGLE_IS_FETCHING",h="SET_TOTAL_PAGES_COUNT",y="CHANGE_PAGE",v={todoLists:[],todoTasks:[{description:"",title:"",completed:"",status:"",priority:"",startDate:new Date,deadline:new Date,id:"",todoListId:"",order:"",addedDate:""}],isFetching:!1,pageSize:10,totalCount:null,currentPage:1},g=function(t,e){return{type:l,taskId:t,task:e}},T=function(t){return{type:d,taskId:t}},x=function(t){return{type:j,todoListId:t}},k=function(t,e){return{type:f,todoListId:t,title:e}},_=function(t){return{type:m,isFetching:t}},w=function(t){return{type:h,totalCount:t}},L=function(){return function(){var t=Object(i.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_(!0)),t.next=3,s.b.getTodoLists();case 3:n=t.sent,e(_(!1)),e({type:O,todoLists:n});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(t){return function(){var e=Object(i.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.addTodoList(t);case 2:0===(a=e.sent).resultCode&&n((r=a.data.item,{type:b,item:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(t,e,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i({type:y,page:e}),a.next=3,s.b.getTodoTasks(t,e,n);case 3:c=a.sent,i(_(!0)),i((r=c.items,{type:p,todoTasks:r})),i(w(c.totalCount));case 7:case"end":return a.stop()}var r}),a)})));return function(t){return a.apply(this,arguments)}}()},S=function(t,e,n,a){return function(){var c=Object(i.a)(r.a.mark((function i(c){var o,d,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.b.addTask(t,e);case 2:o=r.sent,d=a+1,0===o.resultCode&&((l=o.data.item).description="\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",l.completed=!1,l.status=3,l.priority=3,l.startDate=new Date,l.deadline=new Date(+new Date+864e5),c({type:u,item:l}),c(w(d)),c(I(l.todoListId,l.id,l)),n());case 5:case"end":return r.stop()}}),i)})));return function(t){return c.apply(this,arguments)}}()},E=function(t,e,n,a,c){return function(){var a=Object(i.a)(r.a.mark((function a(i){var o,u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=n-1,a.next=3,s.b.deleteTask(t,e);case 3:0===a.sent.resultCode&&(i(T(e)),i(w(o)),o%10===0&&(u=Math.ceil(o/c),i(C(t,u,c))));case 5:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()},A=function(t){return function(){var e=Object(i.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.deleteTodoList(t);case 2:0===e.sent.resultCode&&n(x(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(t,e){return function(){var n=Object(i.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.b.changeTodoList(t,e);case 2:0===n.sent.resultCode&&a(k(t,e));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},I=function(t,e,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.changeTask(t,e,Object(o.a)({},n));case 2:0===(c=a.sent).resultCode&&i(g(e,c.data.item));case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()};e.e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(o.a)(Object(o.a)({},t),{},{todoTasks:[e.item].concat(Object(c.a)(t.todoTasks.slice(0,9)))});case d:return Object(o.a)(Object(o.a)({},t),{},{todoTasks:Object(c.a)(t.todoTasks.filter((function(t){return t.id!==e.taskId})))});case l:return Object(o.a)(Object(o.a)({},t),{},{todoTasks:Object(c.a)(t.todoTasks.map((function(t){return t.id===e.taskId&&(t=e.task),t})))});case p:return Object(o.a)(Object(o.a)({},t),{},{todoTasks:e.todoTasks});case b:return Object(o.a)(Object(o.a)({},t),{},{todoLists:[e.item].concat(Object(c.a)(t.todoLists))});case j:return Object(o.a)(Object(o.a)({},t),{},{todoLists:Object(c.a)(t.todoLists.filter((function(t){return t.id!==e.todoListId})))});case f:return Object(o.a)(Object(o.a)({},t),{},{todoLists:Object(c.a)(t.todoLists.map((function(t){return t.id===e.todoListId&&(t.title=e.title),t})))});case O:return Object(o.a)(Object(o.a)({},t),{},{todoLists:e.todoLists});case m:return Object(o.a)(Object(o.a)({},t),{},{isFetching:e.isFetching});case h:return Object(o.a)(Object(o.a)({},t),{},{totalCount:e.totalCount});case y:return Object(o.a)(Object(o.a)({},t),{},{currentPage:e.page});default:return t}}},44:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return f}));var a=n(14),r=n(1),i="ADD_PAYMENT",c="UPDATE_PAYMENT_TEXT",o="UPDATE_PAYMENT_COST",s=function(t){return t<10&&(t="0"+t),t},u={paymentsData:[{date:"15.03.2021",payments:[{id:1,payment:"payment1",category:"home",cost:50},{id:2,payment:"payment2",category:"home",cost:15}]},{date:"11.06.2021",payments:[{id:3,payment:"payment3",category:"car",cost:150},{id:4,payment:"payment4",category:"car",cost:75}]}],newPaymentText:"",newPaymentCost:0},d=function(t){return{type:c,text:t}},l=function(t){return{type:o,num:t}},f=function(){return{type:i}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:var n={id:7,payment:t.newPaymentText,category:"home",cost:t.newPaymentCost},d=new Date,l=s(d.getDate())+"."+s(d.getMonth()+1)+"."+d.getFullYear(),f=t.paymentsData.find((function(t){return t.date===l}));return f?Object(r.a)(Object(r.a)({},t),{},{paymentsData:t.paymentsData.map((function(t){return t.date===l&&t.payments.push(n),Object(r.a)(Object(r.a)({},t),{},{payments:t.payments.map((function(t){return Object(r.a)({},t)}))})})),newPaymentCost:0}):Object(r.a)(Object(r.a)({},t),{},{paymentsData:[].concat(Object(a.a)(t.paymentsData),[{date:l,payments:[n]}]),newPaymentCost:0});case c:return Object(r.a)(Object(r.a)({},t),{},{newPaymentText:e.text});case o:return Object(r.a)(Object(r.a)({},t),{},{newPaymentCost:e.num});default:return t}}},52:function(t,e,n){},56:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(26),c=n.n(i),o=(n(52),n(22)),s=n(23),u=n(25),d=n(24),l=n(18),f=n(4),p=n(16),b=(n(56),n(30)),j=n(1),O=n(19),m=n(15),h=n(11),y=n.n(h),v=n(2),g=function(t){return Object(v.jsxs)("header",{className:y.a.header,children:[Object(v.jsx)("div",{className:y.a.itemSmall,children:t.isAuth?Object(v.jsxs)("div",{children:[t.login,Object(v.jsx)("div",{className:y.a.logout,onClick:function(){t.logout()},children:"Logout"})]}):Object(v.jsx)(m.b,{to:"/Login",activeClassName:y.a.activeLink,children:"Login"})}),Object(v.jsx)("div",{className:y.a.itemSmall,children:Object(v.jsx)(m.b,{to:"/Settings",activeClassName:y.a.activeLink,children:"Settings"})}),Object(v.jsx)("div",{className:y.a.name,children:"Trata"}),Object(v.jsxs)("div",{className:y.a.items,children:[Object(v.jsx)("div",{className:y.a.item,children:Object(v.jsx)(m.b,{to:"/TodoLists",activeClassName:y.a.activeLink,children:"Todo"})}),Object(v.jsx)("div",{className:y.a.item,children:Object(v.jsx)(m.b,{to:"/Payments",activeClassName:y.a.activeLink,children:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"})})]})]})},T=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(v.jsx)(g,Object(j.a)({},this.props))}}]),n}(r.a.Component),x=Object(l.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),(function(t){return{logout:function(){t(Object(O.d)())}}}))(T),k="INITIALIZED_SUCCESS",_={initialized:!1},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return Object(j.a)(Object(j.a)({},t),{},{initialized:!0});default:return t}},L=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,148))})),D=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,149))})),C=r.a.lazy((function(){return n.e(7).then(n.bind(null,150))})),S=r.a.lazy((function(){return n.e(9).then(n.bind(null,146))})),E=r.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,151))})),A=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(v.jsxs)("div",{className:"app-wrapper",children:[Object(v.jsx)(x,{}),Object(v.jsx)("div",{className:"app-wrapper-content",children:Object(v.jsxs)(a.Suspense,{fallback:Object(v.jsx)(b.a,{}),children:[Object(v.jsx)(f.b,{path:"/TodoLists",render:function(){return Object(v.jsx)(D,{})}}),Object(v.jsx)(f.b,{path:"/Todo/:todoListId",render:function(){return Object(v.jsx)(L,{})}}),Object(v.jsx)(f.b,{path:"/Payments",render:function(){return Object(v.jsx)(C,{})}}),Object(v.jsx)(f.b,{path:"/Settings",render:function(){return Object(v.jsx)(S,{})}}),Object(v.jsx)(f.b,{path:"/Login",render:function(){return Object(v.jsx)(E,{})}})]})})]}):Object(v.jsx)(b.a,{})}}]),n}(r.a.Component),P=Object(p.c)(f.f,Object(l.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(Object(O.b)());Promise.all([e]).then((function(){t({type:k})}))}}}))(A),I=function(t){t&&t instanceof Function&&n.e(10).then(n.bind(null,147)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))},N=n(44),z=n(34),F=n(46),H=Object(p.b)({todoPage:z.e,paymentsPage:N.a,auth:O.a,app:w}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.c,G=Object(p.d)(H,M(Object(p.a)(F.a))),U=G;window.store=G,c.a.render(Object(v.jsx)(m.a,{basename:"/todo",children:Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(l.a,{store:U,children:Object(v.jsx)(P,{})})})}),document.getElementById("root")),I()}},[[78,2,3]]]);
//# sourceMappingURL=main.5622e5fc.chunk.js.map