import React, { Component } from "react";
import './Form.css'

class EductionaForm extends Component{
    

    render() {
        const formData = this.props.formData;
        const forms = formData.map(item=>
          <div className="section-form" id={item.id} key={item.id}> 
            <input placeholder="degree" type="text" name="degree" onChange={this.props.handleInput} 
            value={item.degree}/>
            <input placeholder="university" type="text" name="university" onChange={this.props.handleInput} 
            value={item.university}/>
            <input placeholder="start date" type="text" name="startDate" onChange={this.props.handleInput} 
            value={item.startDate}/>
            <input type="text" placeholder="end date" name="endDate" onChange={this.props.handleInput} 
            value={item.endDate}/>
            <textarea placeholder="description" name="description" cols="10" rows="5" onChange={this.props.handleInput} value={item.description} />
            <button onClick={this.props.deleteItem}>remove</button>
          </div>
        )

        return (
          <div className="work-input">  
            <p className="section-input">Education Details</p>
            {forms}
            <button onClick={this.props.addItem}>Add</button>
          </div>
        );
    }
}  

export default EductionaForm;