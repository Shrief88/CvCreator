import React, { Component } from "react";
import './Form.css'

class EductionaForm extends Component{
    

    render() {
        const formData = this.props.formData;
        return (
          <form>
            <p className="section-input">Eductiona Details</p>
            <input placeholder="degree" type="text" name="degree" onChange={this.props.handleInput} 
            value={formData.degree}/>
            <input placeholder="university" type="text" name="university" onChange={this.props.handleInput} 
            value={formData.university}/>
            <input placeholder="start date" type="text" name="startDate" onChange={this.props.handleInput} 
            value={formData.startDate}/>
            <input type="text" placeholder="end date" name="endDate" onChange={this.props.handleInput} 
            value={formData.endDate}/>
            <textarea placeholder="description" name="description" cols="10" rows="5" onChange={this.props.handleInput} value={formData.description} />
          </form>
        );
    }
}  

export default EductionaForm;