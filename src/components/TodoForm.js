import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment ();
console.log(now.format('YYYY,Do MMM'));

export default class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eventName: props.todo ? props.todo.eventName:'',
            description:props.todo ? props.todo.description:'',
            importance:props.todo ? (props.todo.importance).toString():'',
            createdAt: props.todo ? moment(props.todo.createdAt):moment(),
            calenderFocused: false,
            error: ''
        };
    }
  
   
    onEventNameChange = (e)=>{
        const eventName = e.target.value;
        this.setState(()=>({eventName}));
    };

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
    };

    onImportanceChange = (e) =>{
        const importance = e.target.value;
        if(!importance ||importance.match(/^\d*?$/)){
            this.setState(()=>({importance}));
        }
    };

    onDateChange = (createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}));
        }
    };

    onFocusChange = ({focused})=>{
        this.setState(()=>({calenderFocused: focused}))
    };

    onSubmit = (e)=>{
        e.preventDefault();

        if(!this.state.eventName|| !this.state.importance){
            this.setState(()=>({error:'Please provide priority value of the event.'}));
        }else {
            this.setState(()=>({error: ''}));
            this.props.onSubmit({
                eventName: this.state.eventName,
                importance:parseInt(this.state.importance,10),
                createdAt: this.state.createdAt.valueOf(),
                description: this.state.description
            });
        }
    };

    render(){
        return(
            <div>
                {this.state.error&&<p>{this.state.error}</p>}
                <form onSubmit = {this.onSubmit}>
                    <input
                        type = "text"
                        placeholder = "Event Name"
                        value = {this.state.eventName}
                        onChange ={this.onEventNameChange}
                    />
                    <input
                        type = "text"
                        placeholder = "Priority value"
                        value = {this.state.importance}
                        onChange ={this.onImportanceChange}
                    />

                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                    />

                    <textarea 
                        placeholder = "Add a description for your Todo (optional)"
                        value = {this.state.description}
                        onChange ={this.onDescriptionChange}
                    >
                    </textarea>
                    <button

                    >Add Todo</button>
                </form>
            </div>
        )
    }
}