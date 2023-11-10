import React, { Component } from "react";
import { useState } from "react";
import FormTitle from "./FormTitle";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

function PersonalForm(props) {
  const formData = props.formData;
  const [isFormVisible, setFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };
  

  return (
    <div className="p-10 bg-white rounded-md">
      <FormTitle
        text="Personal Details"
        icon = {<PersonRoundedIcon style={{fontSize : 30}}/>}
        toggleFormVisibility = {toggleFormVisibility}
        isFormVisible={isFormVisible}
      />
      {isFormVisible && (
        <form className="flex flex-col">
          <input
            placeholder="name"
            type="text"
            name="name"
            onChange={props.handleInput}
            value={formData.name}
          />
          <input
            placeholder="job"
            type="text"
            name="job"
            onChange={props.handleInput}
            value={formData.job}
          />
          <input
            placeholder="phone"
            type="text"
            name="phone"
            onChange={props.handleInput}
            value={formData.phone}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            onChange={props.handleInput}
            value={formData.email}
          />
          <input
            placeholder="state"
            type="text"
            name="state"
            onChange={props.handleInput}
            value={formData.state}
          />
          <textarea
            placeholder="description"
            name="description"
            cols="10"
            rows="5"
            onChange={props.handleInput}
            value={formData.description}
          />
        </form>
      )}
    </div>
  );
}

export default PersonalForm;
