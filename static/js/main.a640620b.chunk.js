(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),s=n.n(r),c=(n(14),n(2)),i=n(5),l=n(6),u=n(8),m=n(7),f=(n(15),n(16),n(1)),d=n.n(f),g=(d.a.arrayOf(d.a.string).isRequired,d.a.func.isRequired,d.a.string.isRequired,d.a.func.isRequired,d.a.string.isRequired,d.a.number.isRequired,d.a.func.isRequired,function(e){var t=e.className,n=e.action,a=e.text;return o.a.createElement("button",{type:"button",className:t,onClick:n},a)}),p=(n(19),function(e){for(var t=e.value,n=e.action,a=[],r=1;r<=10;r+=1)a.push(r);return o.a.createElement("select",{className:"form-control",id:"exampleSelect1",name:"select",value:t,onChange:n},a.map((function(e){return o.a.createElement("option",{key:e},e)})))}),b=function(e){var t=e.onReverse,n=e.onAlphabet,a=e.onReset,r=e.onByLength,s=e.onSelectNumber,c=e.onDefaultSelect;return o.a.createElement("div",{className:"buttons"},o.a.createElement(g,{className:"btn btn-info",action:t,text:"Reverse"}),o.a.createElement(g,{className:"btn btn-info",action:n,text:"Sort alphabetically"}),o.a.createElement(g,{className:"btn btn-info",action:a,text:"Reset"}),o.a.createElement(g,{className:"btn btn-info",action:r,text:"Sort by length"}),o.a.createElement(p,{value:c,action:s}))},h=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={goods:Object(c.a)(e.props.goods),startToHide:!1,defaultSelect:1},e.openList=function(){e.setState({startToHide:!0})},e.reverseList=function(){e.setState((function(e){return{goods:e.goods.reverse()}}))},e.sortByAlphabet=function(){e.setState((function(e){return{goods:e.goods.sort()}}))},e.sortByLength=function(){e.setState((function(e){return{goods:e.goods.sort((function(e,t){return e.length-t.length}))}}))},e.reset=function(){e.setState({goods:Object(c.a)(e.props.goods),defaultSelect:1})},e.selectNumber=function(t){var n=t.target.value;e.setState((function(t){return{goods:e.props.goods.filter((function(e){return e.length>=n})),defaultSelect:n}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.startToHide,n=e.defaultSelect,a=e.goods;return o.a.createElement("div",{className:"wrapper"},t?o.a.createElement("div",{role:"button",onKeyPress:this.handleKeyPress,tabIndex:0},o.a.createElement("ul",{className:"list-group"},a.map((function(e){return o.a.createElement("li",{className:"list-group-item list-group-item-action",key:e},e)}))),o.a.createElement(b,{onReverse:this.reverseList,onAlphabet:this.sortByAlphabet,onReset:this.reset,onByLength:this.sortByLength,onSelectNumber:this.selectNumber,onDefaultSelect:n})):o.a.createElement(g,{className:"btn btn-success",action:this.openList,text:"Start"}))}}]),n}(o.a.Component),v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"heading"},"Goods of ".concat(v.length," items")),o.a.createElement(h,{goods:v}))};s.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a640620b.chunk.js.map