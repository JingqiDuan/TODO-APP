import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate,sortByImportance,setStartDate,setEndDate} from '../actions/filters';


class TodoListFilters extends React.Component{
    state = {
        calendarFocused: null
    };

    onFocusChange = (calendarFocused) =>{
        this.setState(()=>({calendarFocused}));
    };

    onDatesChange =({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    render(){
        return(
            <div>
        <input 
        type="text" 
        value={this.props.filters.text} 
        onChange={ (e)=>{
            this.props.dispatch(setTextFilter(e.target.value));
        }}/>

        <select
            value = {this.props.filters.sortBy}
            onChange = {(e)=>{
                if(e.target.value==='amount'){
                    this.props.dispatch(sortByDate());
                }else if(e.target.value==='importance'){
                    this.props.dispatch(sortByImportance());
                }
            }}
        >
            <option value = "date">Date</option>
            <option value = "importance">Importance</option>
        </select>

        <DateRangePicker
            startDate = {this.props.filters.startDate}
            endDate = {this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput = {this.state.calendarFocused}
            onFocusChange = {this.onFocusChange}
            showClearDates = {true}
            numberOfMonths ={1}
            isOutsideRange = {()=>false}
        />
            
    </div>
        );
    };
};




const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(TodoListFilters);