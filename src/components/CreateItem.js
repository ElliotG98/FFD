import React, { Component, setState} from 'react';
import Amplify, {API} from 'aws-amplify';


export default class CreateItem extends Component{
    constructor(props) {
		super(props);

		this.state = {
			id: '',
			completed: false,
			task: ''
		}
	}

	handleIdChange = event => {
		this.setState({
			id: event.target.value
		});
	}

	handleCompletedChange = event => {
		this.setState({
			completed: event.target.value
		});
	}

	handleTaskChange = event => {
		this.setState({
			task: event.target.value
		});
	}

	handleSubmit = event => {
		alert(`${this.state.id} ${this.state.completed} ${this.state.task}`);
		event.preventDefault();

        this.postToDoList();
	}

    postToDoList(){
        return fetch("https://5tkwxph66b.execute-api.us-east-2.amazonaws.com/items", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"

            },
            body: JSON.stringify({id: this.state.id, completed: this.state.completed, task: this.state.task})
        })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

	render() {
		const { id, completed, task } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>id </label>
					<input
						type="text"
						value={id}
						onChange={this.handleIdChange}
					/>
				</div>
				<div>
					<label>completed</label>
					<select value={completed} onChange={this.handleCompletedChange}>
						<option value={true}>Completed</option>
						<option value={false}>Unfinished</option>
					</select>
				</div>
                <div>
					<label>task </label>
					<input
						type="text"
						value={task}
						onChange={this.handleTaskChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		)
	}
}
