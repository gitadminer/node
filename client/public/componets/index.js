import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'

@connect(
    (state, props) => ({username:'archer'}),
    (dispatch) => ({ 
    	actions: bindActionCreators(addTodo, dispatch),
    	dispatch:dispatch })
)
export default class App extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.resizename = this.resizename.bind(this);
		this.state = {
			islogin:false,
			isshow:false,
			color:'red'
		}
	}
	componentDidMount() {
	    // 添加事件处理函数订阅数据
	    console.log(this.props)
	    let { dispatch } = this.props;
	    console.log(dispatch)
	 }

	 componentWillUnmount() {
	    // 清除事件处理函数
	    console.log(2)
	 }

	 handleChange() {
	    // 任何时候数据发生改变就更新组件
	    console.log(3)
	 }
	 resizename(){
	 	this.setState({
	 		color:'yellow'
	 	})
	 }
	render(){
		console.log(this);
		//const {username,name}  = this.props;
		return(
				<div id="contrainer">
					<p>{this.state.color}</p>
					<button type="button" onClick={this.resizename}>resize</button>
				</div>
			)
	}
}