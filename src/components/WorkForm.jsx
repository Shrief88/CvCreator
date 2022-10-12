import React, { Component } from "react";
import './Form.css'

class WorkForm extends Component{

    render() {
      const formData = this.props.formData;
      const forms = formData.map(formData=>
        <div className="section-form" id={formData.id} key={formData.id}>
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
            <button onClick={this.props.deleteItem}>remove</button>
        </div> 
      )
      
        return (
          <div className="work-input">
            <p className="section-input">Work Details</p>
            {forms}
            <button onClick={this.props.addItem}>Add</button>
          </div>
        );
    }
}  

export default WorkForm;