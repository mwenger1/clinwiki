webpackJsonp([10],{"./app/containers/StudyPage/SummaryInfo/index.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o("./node_modules/react/index.js"),a=o.n(s),d=o("./node_modules/prop-types/index.js"),l=(o.n(d),o("./node_modules/styled-components/dist/styled-components.browser.es.js")),u=o("./node_modules/react-bootstrap/es/index.js"),p=o("./node_modules/react-fontawesome/lib/index.js"),c=o.n(p),f=o("./node_modules/react-transition-group/index.js"),y=(o.n(f),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,i){var r=t&&t.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&r)for(var a in r)void 0===o[a]&&(o[a]=r[a]);else o||(o=r||{});if(1===s)o.children=i;else if(s>1){for(var d=Array(s),l=0;l<s;l++)d[l]=arguments[l+3];o.children=d}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}()),m=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),v=l.default.div.withConfig({displayName:"SummaryInfo__InfoWrapper"})([".panel-heading {cursor: pointer;}.panel-toggle {margin-top: 4px;font-weight: bold;}.fade {opacity: 0;-webkit-transition: opacity 0.05s linear;-moz-transition: opacity 0.05s linear;-o-transition: opacity 0.05s linear;transition: opacity 0.05s linear;}.fade.in {opacity: 1;}"]),b=y("div",{}),h=y("th",{},void 0,"NCT ID"),_=y("th",{},void 0,"Type"),g=y("th",{},void 0,"Status"),w=y("th",{},void 0,"Primary Completion Date"),j=y("th",{},void 0,"Enrollment"),P=y("th",{},void 0,"Source"),x=function(e){function t(e){n(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={summaryVisible:!0},o}return r(t,e),m(t,[{key:"render",value:function(){var e=this;return this.props.study?y(u.Grid,{},void 0,y(v,{},void 0,y(u.Panel,{},void 0,y(u.Panel.Heading,{onClick:function(){return e.setState({summaryVisible:!e.state.summaryVisible})},title:this.state.summaryVisible?"Click to hide details":"Click to show details"},void 0,y(u.Panel.Title,{componentClass:"h3",className:"pull-left"},void 0,this.props.study.title),y(c.a,{name:this.state.summaryVisible?"angle-double-up":"angle-double-down",className:"pull-right panel-toggle"})," "),y(f.Transition,{in:this.state.summaryVisible,className:"fade",timeout:200},void 0,function(t){return y(u.Panel.Body,{className:{exiting:"fade",exited:"hidden fade",entering:"fade in",entered:""}[t]},void 0,y(u.Table,{striped:!0,bordered:!0,condensed:!0},void 0,y("tbody",{},void 0,y("tr",{},void 0,h,y("td",{},void 0,e.props.study.nct_id)),y("tr",{},void 0,_,y("td",{},void 0,e.props.study.study_type)),y("tr",{},void 0,g,y("td",{},void 0,e.props.study.overall_status)),y("tr",{},void 0,w,y("td",{},void 0,e.props.study.primary_completion_date)),y("tr",{},void 0,j,y("td",{},void 0,e.props.study.enrollment)),y("tr",{},void 0,P,y("td",{},void 0,e.props.study.source)))))})))):b}}]),t}(a.a.Component);t.default=x}});