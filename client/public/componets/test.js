import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
@connect((state,props)=>({
	mytodo:state.reducers.todos
}))

export default class Test extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		console.log(this.props.mytodo);
	}
	render(){
		const {mytodo}  = this.props;
		return (
			<Link to="/">home</Link>
		)
	}
}