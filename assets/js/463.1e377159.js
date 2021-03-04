(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1651:function(t,e,n){"use strict";n.r(e);var a=n(25),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"function-and-function-item-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-and-function-item-nodes"}},[t._v("#")]),t._v(" Function and Function Item Nodes")]),t._v(" "),n("p",[t._v("These are the most powerful nodes in n8n. With these, almost everything can be done if you know how to\nwrite JavaScript code. Both nodes work very similarly. They give you access to the incoming data\nand you can manipulate it.")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[t._v("Function")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/FunctionItem/"}},[t._v("Function Item")])],1)]),t._v(" "),n("h3",{attrs:{id:"difference-between-both-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#difference-between-both-nodes"}},[t._v("#")]),t._v(" Difference between both nodes")]),t._v(" "),n("p",[t._v("The difference is that the code of the Function node gets executed only once. It receives the\nfull items (JSON and binary data) as an array and expects an array of items as a return value. The items\nreturned can be totally different from the incoming ones. So it is not only possible to remove and edit\nexisting items, but also to add or return totally new ones.")]),t._v(" "),n("p",[t._v("The code of the Function Item node on the other hand gets executed once for every item. It receives\none item at a time as input and also just the JSON data. As a return value, it expects the JSON data\nof one single item. That makes it possible to add, remove and edit JSON properties of items\nbut it is not possible to add new or remove existing items. Accessing and changing binary data is only\npossible via the methods "),n("code",[t._v("getBinaryData")]),t._v(" and "),n("code",[t._v("setBinaryData")]),t._v(".")]),t._v(" "),n("p",[t._v("Both nodes support promises. So instead of returning the item or items directly, it is also possible to\nreturn a promise which resolves accordingly.")]),t._v(" "),n("h4",{attrs:{id:"comparison"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[t._v("#")]),t._v(" Comparison")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Data to access")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("FunctionItem")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("JSON data")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("items["),n("em",[t._v("index")]),t._v("].json")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("item")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Binary data")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("items["),n("em",[t._v("index")]),t._v("].binary")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("getBinaryData()")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);