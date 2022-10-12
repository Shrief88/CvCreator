import React, { Component } from "react";
import './Form.css'

class WorkingForm extends Component{

    render() {
      const formData = this.props.formData;
        return (
          <form>
            <p className="section-input">Working Details</p>
            <input placeholder="company" type="text" name="company" onChange={this.props.handleInput}  
            value={formData.company}/>
            <input placeholder="position" type="text" name="position" onChange={this.props.handleInput} 
            value={formData.position} />
            <input placeholder="start date" type="text"name="startDate" onChange={this.props.handleInput} 
            value={formData.startDate}/>
            <input placeholder="end date" type="text" name="endDate" onChange={this.props.handleInput} 
            value={formData.endDate}/>
            <textarea placeholder="description" name="description" cols="10" rows="5" onChange={this.props.handleInput} 
            value={formData.description} />
          </form>
        );
    }
}  

export default WorkingForm;