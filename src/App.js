import React from 'react';
import Tab from "./router/tab.js"
import {Route,withRouter,HashRouter} from "react-router-dom"
import My from "./router/my.js"
import Hot from "./router/hot.js"
import Search from "./router/search.js"
import Hello from "./components/hello.js"
let Table=withRouter(Tab)
function App() {
 return(
 	<div>
 		<Hello></Hello>
	 	<HashRouter>
	 		<Table></Table>
	 		<Route path="/my" component={My}></Route>
	 		<Route path="/hot" component={Hot}></Route>
	 		<Route path="/search" component={Search}></Route>
	 	</HashRouter>
 	</div>
 )
}

export default App;
