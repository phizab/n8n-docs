(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1393:function(t,a,n){"use strict";n.r(a);var e=n(25),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"graphql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graphql"}},[t._v("#")]),t._v(" GraphQL")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL"),e("OutboundLink")],1),t._v(" is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.")]),t._v(" "),e("h2",{attrs:{id:"basic-operations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),e("ul",[e("li",[t._v("Query a GraphQL endpoint")])]),t._v(" "),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("p",[t._v("This workflow allows you to get information about the five most recent SpaceX launches from "),e("a",{attrs:{href:"https://spacex.land/",target:"_blank",rel:"noopener noreferrer"}},[t._v("spacex.land"),e("OutboundLink")],1),t._v(". You can also find the "),e("a",{attrs:{href:"https://n8n.io/workflows/558",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),e("OutboundLink")],1),t._v(" on the website. This example usage workflow uses the following two nodes.")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),e("li",[e("a",{attrs:{href:""}},[t._v("GraphQL")])])]),t._v(" "),e("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),e("p",[e("img",{attrs:{src:n(582),alt:"A workflow with the GraphQL node"}})]),t._v(" "),e("h3",{attrs:{id:"_1-start-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),e("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),e("h3",{attrs:{id:"_2-graphql-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-graphql-node"}},[t._v("#")]),t._v(" 2. GraphQL node")]),t._v(" "),e("ol",[e("li",[t._v("Enter "),e("code",[t._v("https://api.spacex.land/graphql/")]),t._v(" in the "),e("em",[t._v("Endpoint")]),t._v(" field.")]),t._v(" "),e("li",[t._v("Select the 'JSON' option from the "),e("em",[t._v("Request Format")]),t._v(" dropdown list.")]),t._v(" "),e("li",[t._v("Enter the GraphQL query shown below in the "),e("em",[t._v("Query")]),t._v(" field.")]),t._v(" "),e("li",[t._v("Click on "),e("em",[t._v("Execute Node")]),t._v(" to run the workflow.")])]),t._v(" "),e("h4",{attrs:{id:"graphql-query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graphql-query"}},[t._v("#")]),t._v(" GraphQL query")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  launchesPast(limit"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(") "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mission_name\n    launch_date_local\n    launch_site "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      site_name_long\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    links "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      article_link\n      video_link\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    rocket "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rocket_name\n      first_stage "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cores "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          flight\n          core "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            reuse_count\n            status\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      second_stage "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        payloads "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          payload_type\n          payload_mass_kg\n          payload_mass_lbs\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ships "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name\n      home_port\n      image\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://medium.com/n8n-io/giving-kudos-to-contributors-with-github-slack-and-n8n-b3f5f4a653a6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Giving kudos to contributors with GitHub, Slack, and n8n 👏"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports},582:function(t,a,n){t.exports=n.p+"assets/img/workflow.2f57ede6.png"}}]);