(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c,o,a,i,r,s=n(0),d=n(9),l=n.n(d),j=n(4),b=n(5),u=(n(23),function(t){return t.todos.todos}),O=function(t){return t.filters.filters},f=n(3),p="todos",m=function(){return JSON.parse(localStorage.getItem(p))},v=n(32),x="add_todo",h="edit_todo",y="delete_todo",g="delete_finished_todo",N="toggle_todo",_="set_filter",k="gettodos_from_local_storage",D=function(t){return{type:x,payload:{id:Object(v.a)(),content:t,isDone:!1}}},w=function(t){return{type:_,payload:{filter:t}}},E=n(11),C=n(1),S=b.a.input.attrs({className:"input-todo form-control"})(c||(c=Object(j.a)([""]))),F=b.a.button.attrs({className:"btn btn-add btn-outline-secondary"})(o||(o=Object(j.a)([""])));function I(){var t=Object(f.b)(),e=Object(s.useState)(""),n=Object(E.a)(e,2),c=n[0],o=n[1];return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)(S,{type:"text",placeholder:"todo",value:c,onKeyDown:function(e){"Enter"===e.key&&""!==c&&(t(D(c)),o(""))},onChange:function(t){return o(t.target.value)}}),Object(C.jsx)("div",{className:"input-group-append",children:Object(C.jsx)(F,{onClick:function(){t(D(c)),o("")},children:"\u65b0\u589e"})})]})})}function T(){var t=Object(f.b)(),e=["All","Undone","Done"];return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"info mt-1 d-flex justify-content-between align-items-center",children:[Object(C.jsxs)("div",{className:"options d-flex mt-3",children:[Object(C.jsx)("div",{className:"active",onClick:function(){t(w(e[0]))},children:"\u5168\u90e8"}),Object(C.jsx)("div",{className:"ml-2",onClick:function(){t(w(e[1]))},children:"\u672a\u5b8c\u6210"}),Object(C.jsx)("div",{className:"ml-2",onClick:function(){t(w(e[2]))},children:"\u5df2\u5b8c\u6210"})]}),Object(C.jsx)("div",{onClick:function(){t({type:g})},className:"clear-all",children:"\u79fb\u9664\u5df2\u5b8c\u6210\u5f85\u8fa6\u4e8b\u9805"})]})})}var J,X,A=b.a.input(a||(a=Object(j.a)(["\n  font-size: 14px;\n  padding: 1px;\n  border: solid 0.2px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  outline: none;\n"]))),L=b.a.button.attrs({className:"todo-btns btn btn-info"})(i||(i=Object(j.a)([""]))),R=b.a.button.attrs({className:"todo-btns btn btn-danger"})(r||(r=Object(j.a)([""])));function U(t){var e=t.todo,n=Object(s.useState)(!1),c=Object(E.a)(n,2),o=c[0],a=c[1],i=Object(f.b)(),r=Object(s.useRef)(),d=function(t){var e=r.current.value;if(!e)return a(!1);i(function(t,e){return{type:h,payload:{id:t,content:e}}}(t,e)),a(!1)};return Object(C.jsxs)("div",{className:"todo list-group-item list-group-item-action d-flex justify-content-between align-items-center",children:[Object(C.jsx)("div",{className:"todo__content-wrapper custom-control custom-checkbox",children:o?Object(C.jsx)(A,{ref:r,onKeyDown:function(){var t;"Enter"===e.id.key&&d(t)}}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("input",{type:"checkbox",className:"custom-control-input",id:e.id,onClick:function(){var t;i((t=e.id,{type:N,payload:{id:t}}))},defaultChecked:e.isDone?"checked":""}),Object(C.jsx)("label",{className:"todo__content custom-control-label",htmlFor:e.id,children:e.content})]})}),o?Object(C.jsx)(L,{onClick:function(){var t;t=e.id,d(t)},children:"\u4fee\u6539\u5b8c\u6210"}):Object(C.jsx)(L,{onClick:function(){a(!0)},children:"\u7de8\u8f2f"}),Object(C.jsx)(R,{className:"todo-btns btn btn-danger",onClick:function(){var t;i((t=e.id,{type:y,payload:{id:t}}))},children:"\u522a\u9664"})]},e.id)}var K=b.a.h1(J||(J=Object(j.a)(["\n  margin-top: 10px;\n  text-align: center;\n"]))),V=b.a.div.attrs({className:"todos list-group"})(X||(X=Object(j.a)([""])));function z(){var t=Object(f.c)(u),e=Object(f.c)(O),n=Object(f.b)();return Object(s.useEffect)((function(){m()&&n(function(t){return{type:k,payload:{todos:t}}}(m()))}),[]),Object(s.useEffect)((function(){!function(t){localStorage.setItem(p,JSON.stringify(t))}(t)}),[t]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row justify-content-center",children:Object(C.jsxs)("div",{className:"col-lg-6",children:[Object(C.jsx)(K,{children:"Todo List"}),Object(C.jsx)(I,{}),Object(C.jsx)(V,{children:t.filter((function(t){return"All"===e?t:"Done"===e?t.isDone:!t.isDone})).map((function(t){return Object(C.jsx)(U,{todo:t},t.id)}))}),Object(C.jsx)(T,{})]})})})})}var B=n(12),q=n(18),G=n(2),H={todos:[]};var M={filters:"All"};var P=Object(B.a)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:var n=e.payload,c=n.id,o=n.content,a=n.isDone;return Object(G.a)(Object(G.a)({},t),{},{todos:[].concat(Object(q.a)(t.todos),[{id:c,content:o,isDone:a}])});case h:var i=e.payload,r=i.id,s=i.content;return Object(G.a)(Object(G.a)({},t),{},{todos:t.todos.map((function(t){return t.id!==r?t:Object(G.a)(Object(G.a)({},t),{},{content:s})}))});case y:var d=e.payload.id;return Object(G.a)(Object(G.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==d}))});case N:var l=e.payload.id;return Object(G.a)(Object(G.a)({},t),{},{todos:t.todos.map((function(t){return t.id!==l?t:Object(G.a)(Object(G.a)({},t),{},{isDone:!t.isDone})}))});case g:return Object(G.a)(Object(G.a)({},t),{},{todos:t.todos.filter((function(t){return!t.isDone}))});case k:var j=e.payload.todos;return Object(G.a)(Object(G.a)({},t),{},{todos:j});default:return t}},filters:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:var n=e.payload.filter;return Object(G.a)(Object(G.a)({},t),{},{filters:n});default:return t}}}),Q=Object(B.b)(P,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(C.jsx)(f.a,{store:Q,children:Object(C.jsx)(z,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.da8cb2c3.chunk.js.map