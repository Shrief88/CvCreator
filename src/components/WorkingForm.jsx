import React, { Component } from "react";
import './Form.css'

class WorkingForm extends Component{

    render() {
      const formData = this.props.formData;
        return (
          <form>
            <p>Working Details</p>
            <input type="text"name="company" onChange={this.props.handleInput}  value={formData.company}/>
            <input type="text"name="postion" onChange={this.props.handleInput} value={formData.postion} />
            <input type="text"name="startData" onChange={this.props.handleInput} value={formData.startData}/>
            <input type="text" name="endData" onChange={this.props.handleInput} value={formData.endData}/>
            <textarea name="description" cols="10" rows="5" onChange={this.props.handleInput} 
            value={formData.description} />
          </form>
        );
    }
}  

export default WorkingForm;