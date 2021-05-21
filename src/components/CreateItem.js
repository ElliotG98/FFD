import React, { Component} from 'react';
import {Form, FormGroup, FormControl, FormLabel, Modal, Button} from 'react-bootstrap';
import Amplify, {API} from 'aws-amplify';


export default class CreateItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            Items: {
                id: '',
                completed: '',
                task: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleChange(event){
        console.log(event.target.value);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        await this.setState({load: true});
        this.setState({[name]: value});
        await this.setState({load: false});
    }

    handleSubmit(event){
        alert('A to do was submitted: ' + this.state.Items.task + this.state.Items.completed + this.state.Items.id);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    ID
                    <input name="id" type="number" defaultValue={this.state.Items.id} onChange={this.handleChange}/>
                </label>
                <label>
                    completed
                    <input name="completed" type="checkbox" defaultChecked={this.state.Items.completed} onChange={this.handleChange}/>
                </label>
                <label>
                    Task
                    <input type="text" defaultValue={this.state.Items.task} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}