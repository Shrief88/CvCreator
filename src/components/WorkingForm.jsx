import React, { Component } from "react";
import './Form.css'

class WorkingForm extends Component{

    render() {
        const workingData = this.props.formData;
        return (
          <form>
            <p>Working Details</p>
            <input type="text"name="company" onChange={this.props.handleInput}  value={workingData.company}/>
            <input type="text"name="postion" onChange={this.props.handleInput} value={workingData.postion} />
            <input type="text"name="startData" onChange={this.props.handleInput} value={workingData.startData}/>
            <input type="text" name="endData" onChange={this.props.handleInput} value={workingData.endData}/>
            <textarea name="workingDescription" cols="10" rows="5" onChange={this.props.handleInput} 
            value={workingData.workingDescription} />
          </form>
        );
    }
}  

export default WorkingForm;