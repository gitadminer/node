import React from 'react';
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { addTodo} from '../actions'
import { Icon,Button,Layout } from 'antd';
import '../assets/style/home.scss';
const { Header, Content, Sider } = Layout;

@connect(
    (state, props) => ({username:'archer'},{
    	todo:state.reducers.todos
    }),
    (dispatch) => ({ 
    	todoActions: bindActionCreators({addTodo}, dispatch),
    	dispatch:dispatch })
)
export default class App extends React.Component{
	constructor(props,contex){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.resizename = this.resizename.bind(this);
		this.state = {
			islogin:false,
			isshow:false,
			color:'red'
		}
	}
	componentWillMount() {
		console.log(1);
	}
	componentDidMount() {
		// console.log(this);
		// console.log(this.props.todoActions.addTodo('test'))
	    // 添加事件处理函数订阅数据
	    //console.log(this.props)
	    let { dispatch } = this.props;
	    //console.log(dispatch)
	 }
	 componentWillUnmount() {
	    // 清除事件处理函数
	    console.log(2)
	 }
	 shouldComponentUpdate(nextprops,nextstate){
	 	console.log(nextprops,nextstate)
	 	return true;
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
		const {username,name,todo}  = this.props;
		return(
				<Layout className="container-home">
					<Header>
						<div className="logo" />
					</Header>
					<Layout>
						<Sider width={200} style={{background:'#fff'}}>
							
						</Sider>
					
						<Layout>
							<Content>
								aa
							</Content>
						</Layout>
					</Layout>
				</Layout>
			)
	}
}