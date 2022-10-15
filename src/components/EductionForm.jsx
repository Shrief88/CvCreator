import React, { Component } from "react";
import './Form.css'

function EductionaForm (props){
    
    const formData = props.formData;
    const forms = formData.map(item=>
        <div className="section-form" id={item.id} key={item.id}> 
            <input placeholder="degree" type="text" name="degree" onChange={props.handleInput} 
            value={item.degree}/>
            <input placeholder="university" type="text" name="university" onChange={props.handleInput} 
            value={item.university}/>
            <input placeholder="start date" type="text" name="startDate" onChange={props.handleInput} 
            value={item.startDate}/>
            <input type="text" placeholder="end date" name="endDate" onChange={props.handleInput} 
            value={item.endDate}/>
            <textarea placeholder="description" name="description" cols="10" rows="5" onChange={props.handleInput} value={item.description} />
            <button onClick={props.deleteItem}>remove</button>
        </div>
    )

    return (
        <div className="work-input">  
            <p className="section-input">Education Details</p>
            {forms}
            <button onClick={props.addItem}>Add</button>
        </div>
    );
    
}  

export default EductionaForm;