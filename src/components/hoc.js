import React,{Component,Fragment} from "react"

export default (ContentComponent)=>{
	class Hoc extends Component{
		constructor(){
			super()
			this.state={
				name:"你好"
			}
		}
		render(){
			return (
				<Fragment>
					<ContentComponent name={this.state.name}></ContentComponent>
				</Fragment>
			)		
		}
	}
	return Hoc
}
