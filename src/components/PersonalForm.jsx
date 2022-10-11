import React, { Component } from "react";
import './Form.css'

class PersonalForm extends Component{
    

    render() {
        const formData = this.props.formData;
        return (
          <form>
            <p>Personal Details</p>
            <input type="text" name="name" onChange={this.props.handleInput} value={formData.name}/>
            <input type="text" name="job" onChange={this.props.handleInput} value={formData.job} />
            <input type="text" name="phone" onChange={this.props.handleInput} value={formData.phone}/>
            <input type="text" name="email" onChange={this.props.handleInput} value={formData.email}/>
            <input type="text" name="state" onChange={this.props.handleInput} value={formData.state}/>
            <textarea name="description" cols="10" rows="5" onChange={this.props.handleInput} 
            value={formData.description} />
          </form>
        );
    }
}  

export default PersonalForm;