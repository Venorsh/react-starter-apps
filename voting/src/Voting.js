import React,{Component} from 'react';
import './App.css';

class Voting extends Component{
	constructor(props){
		super(props);
		this.state = {
			count: 0
		}
	}

	incrementCount = () => this.setState({count: this.state.count+1});

	render(){
		return(
			<div className="language">
				<div className="voteCount">{this.state.count}</div>
				<div>{this.props.languageName}</div>
				<button onClick={this.incrementCount}>Vote</button>

			</div>
		);
	}
}
export default Voting;