import React, { Component } from "react";
import './Form.css'

class PersonalForm extends Component{
    
    render() {
        const formData = this.props.formData;
        return (
          <form>
            <p className="section-input">Personal Details</p>
            <input placeholder="name" type="text" name="name" onChange={this.props.handleInput} value={formData.name}/>
            <input placeholder="job" type="text" name="job" onChange={this.props.handleInput} value={formData.job} />
            <input placeholder="phone" type="text" name="phone" onChange={this.props.handleInput}
            value={formData.phone}/>
            <input placeholder="email" type="text" name="email" onChange={this.props.handleInput} 
            value={formData.email}/>
            <input placeholder="state" type="text" name="state" onChange={this.props.handleInput} 
            value={formData.state}/>
            <textarea placeholder="description" name="description" cols="10" rows="5" onChange={this.props.handleInput} 
            value={formData.description} />
          </form>
        );
    }
}  

export default PersonalForm;