import React from 'react';

export default class IndexInfo extends React.Component{
	constructor(props){
		super(props);
		console.log(props)
	}
	ready(){
		//const {input} = this.
		return(
			<div className="home">
				<input value="1" placeholder="test"/>
			</div>
		)
	}
} 