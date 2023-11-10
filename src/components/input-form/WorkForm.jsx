import React, { Component } from "react";
import { useState } from "react";
import FormTitle from "./FormTitle";
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';

function WorkForm(props) {
  const [isFormVisible, setFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const formData = props.formData;
  const forms = formData.map((formData) => (
    <form className="flex flex-col" id={formData.id} key={formData.id}>
      <input
        placeholder="company"
        type="text"
        name="company"
        onChange={props.handleInput}
        value={formData.company}
      />
      <input
        placeholder="position"
        type="text"
        name="position"
        onChange={props.handleInput}
        value={formData.position}
      />
      <input
        placeholder="start date"
        type="text"
        name="startDate"
        onChange={props.handleInput}
        value={formData.startDate}
      />
      <input
        placeholder="end date"
        type="text"
        name="endDate"
        onChange={props.handleInput}
        value={formData.endDate}
      />
      <textarea
        placeholder="description"
        name="description"
        cols="10"
        rows="5"
        onChange={props.handleInput}
        value={formData.description}
      />
      <button onClick={props.deleteItem}>remove</button>
    </form>
  ));

  return (
    <div className="p-10 bg-white rounded-md">
      <FormTitle
        text="Experience"
        icon = {<WorkRoundedIcon style={{fontSize : 28}}/>}
        toggleFormVisibility = {toggleFormVisibility}
        isFormVisible={isFormVisible}
      />
      {isFormVisible && <p>hello</p>}
    </div>
  );
}

export default WorkForm;
