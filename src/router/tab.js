import React,{Component,Fragment} from "react"
import "./index.css"
class Tab extends Component{
	constructor(){
		super()
		this.state={
			list:[{data:"我的",path:"/my"},{data:"最热",path:"/hot"},{data:"搜索",path:"/search"}],
			count:0
		}
	}
	btn(item,index){
		this.props.history.replace({pathname:item.path,start:{a:'123'}})
		this.state.count=index
		this.setState()
	}
	renderList(){
		return(
			<ul>
				{this.state.list.map((item,index)=>{
					return <li className={index==this.state.count?"lii":""} onClick={this.btn.bind(this,item,index)} key={index}>{item.data}</li>
				})}
			</ul>
		)
	}
	render(){
		return (
			<Fragment>
				{this.renderList()}
			</Fragment>
		)
	}
}
export default Tab