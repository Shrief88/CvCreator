import React, { Component } from "react";
import './Form.css'

function PersonalForm(props){
  const formData = props.formData;

  return(    
    <div className="section-form">
      <p className="section-input">Personal Details</p>
      <input placeholder="name" type="text" name="name" onChange={props.handleInput} value={formData.name}/>
      <input placeholder="job" type="text" name="job" onChange={props.handleInput} value={formData.job} />
      <input placeholder="phone" type="text" name="phone" onChange={props.handleInput} value={formData.phone}/>
      <input placeholder="email" type="text" name="email" onChange={props.handleInput} value={formData.email}/>
      <input placeholder="state" type="text" name="state" onChange={props.handleInput} value={formData.state}/>
      <textarea placeholder="description" name="description" cols="10" rows="5" onChange={props.handleInput} 
      value={formData.description} />
    </div>
  );
  
}  

export default PersonalForm;