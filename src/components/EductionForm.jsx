import React, { Component } from "react";
import './Form.css'

class EductionaForm extends Component{
    

    render() {
        const formData = this.props.formData;
        return (
          <form>
            <p>Eductiona Details</p>
            <input type="text" name="university" onChange={this.props.handleInput} value={formData.university}/>
            <input type="text" name="startData" onChange={this.props.handleInput} value={formData.startData}/>
            <input type="text" name="endData" onChange={this.props.handleInput} value={formData.endData}/>
            <textarea name="description" cols="10" rows="5" onChange={this.props.handleInput} 
            value={formData.description} />
          </form>
        );
    }
}  

export default EductionaForm;