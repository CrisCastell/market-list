(this["webpackJsonpmemory-app"]=this["webpackJsonpmemory-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(3),c=n.n(i),r=(n(13),n(14),n(1)),l=n(4),s=n(5),u=n(7),d=n(6);var m=function(t){return o.a.createElement("div",{key:t.id,className:"todo ".concat(t.isCompleted?"done":""),style:{animationDelay:"calc(".concat(200*t.index," ms)")}},o.a.createElement("div",null,o.a.createElement("p",{style:{textDecoration:t.isCompleted?"line-through":"none"}},t.title)),o.a.createElement("div",{className:"button-wrapper"},o.a.createElement("div",{className:"quantity-box"},o.a.createElement("button",{id:"decrease-btn",className:"quant-btn btn",onClick:function(){return t.changeStatus(t.task,"decrease")},disabled:t.quantity<=1,value:"decrease",name:"decrease"}," - "),o.a.createElement("div",{className:"quantity",id:"quantity"},t.quantity),o.a.createElement("button",{id:"increase-btn",className:"quant-btn btn",onClick:function(){return t.changeStatus(t.task,"increase")},value:"increase",name:"delete"}," + ")),o.a.createElement("div",null,o.a.createElement("button",{id:"del-btn",onClick:function(){return t.changeStatus(t.task,"delete")},value:"delete",name:"delete"}," del ")),o.a.createElement("input",{onChange:function(){return t.changeStatus(t.task,"isComplete")},type:"checkbox",checked:t.isCompleted})))},p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).getCookie=function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var o=n[a].trim();if(o.substring(0,t.length+1)===t+"="){e=decodeURIComponent(o.substring(t.length+1));break}}return e},a.fetchFunc=function(){fetch("https://cristiamportfolioapis.herokuapp.com/todo/").then((function(t){return t.json()})).then((function(t){a.setState({todos:t})})).catch((function(t){return console.log("Error: ",t)}))},a.handleChange=function(t){var e=t.target.value;a.setState({currentTodo:Object(r.a)(Object(r.a)({},a.state.currentTodo),{},{title:e})})},a.handleSubmit=function(t){t.preventDefault();var e={method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":a.getCookie("csrftoken")},body:JSON.stringify(a.state.currentTodo)};fetch("https://cristiamportfolioapis.herokuapp.com/todo/create-task",e).then((function(t){console.log(t),a.fetchFunc(),a.setState({currentTodo:{id:null,title:"",isCompleted:!1,quantity:1,isEdited:!1}})}))},a.changeStatus=function(t,e){var n=a.getCookie("csrftoken");if("delete"===e){var o={method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":n}};fetch("https://cristiamportfolioapis.herokuapp.com/todo/delete-task/".concat(t.id),o).then((function(t){console.log(t),a.fetchFunc()})).catch((function(t){return console.log(t)}))}else{var i={id:t.id,title:t.title,isCompleted:t.isCompleted,quantity:t.quantity,isEdited:!1};"isComplete"===e?i.isCompleted=!t.isCompleted:"increase"===e?i.quantity=t.quantity+1:"decrease"===e&&(i.quantity=t.quantity-1);var c={method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify(i)};fetch("https://cristiamportfolioapis.herokuapp.com/todo/edit-task/".concat(t.id),c).then((function(t){console.log(t),a.fetchFunc()})).catch((function(t){return console.log(t)}))}},a.state={name:"Cristiam",currentTodo:{id:null,title:"",isCompleted:!1,quantity:1,isEdited:!1},todos:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchFunc()}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e,n){return console.log(n),o.a.createElement(m,{key:n,id:n,task:e,index:n,isCompleted:e.isCompleted,quantity:e.quantity,changeStatus:t.changeStatus,title:e.title})}));return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"content"},o.a.createElement("form",{onSubmit:this.handleSubmit,id:"todo-form"},o.a.createElement("div",{className:"input"},o.a.createElement("input",{id:"inp",onChange:this.handleChange,name:"title",type:"text",value:this.state.currentTodo.title,placeholder:"New Task?",maxLength:30}),o.a.createElement("button",{className:"btn",id:"btn",type:"submit"},"Add Item"))),e))}}]),n}(o.a.Component);var h=function(){return o.a.createElement(p,null)};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.de5d85ce.chunk.js.map