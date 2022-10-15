import React, { Component } from "react";
import './Form.css'

function WorkForm(props){

    const formData = props.formData;
    const forms = formData.map(formData=>
        <div className="section-form" id={formData.id} key={formData.id}>
            <input placeholder="company" type="text" name="company" onChange={props.handleInput}
            value={formData.company}/>
            <input placeholder="position" type="text" name="position" onChange={props.handleInput}
            value={formData.position} />
            <input placeholder="start date" type="text"name="startDate" onChange={props.handleInput}
            value={formData.startDate}/>
            <input placeholder="end date" type="text" name="endDate" onChange={props.handleInput}
            value={formData.endDate}/>
            <textarea placeholder="description" name="description" cols="10" rows="5" onChange={props.handleInput}
            value={formData.description} />
            <button onClick={props.deleteItem}>remove</button>
        </div> 
    )
      
    return (
        <div className="work-input">
            <p className="section-input">Work Details</p>
            {forms}
            <button onClick={props.addItem}>Add</button>
        </div>
    );
    
}  

export default WorkForm;