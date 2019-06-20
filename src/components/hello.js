import React from "react"
import Hoc from "./hoc.js"
function Hello (props){
	return (<div>
				hello:{props.name}
			</div>)
}
export default Hoc(Hello)
