import React, { Component } from "react";
import { useState } from "react";
import FormTitle from "./FormTitle";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

function EductionaForm(props) {
  const [isFormVisible, setFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };
  const formData = props.formData;

  const forms = formData.map((item) => (
    <form className="flex flex-col" id={item.id} key={item.id}>
      <input
        placeholder="degree"
        type="text"
        name="degree"
        onChange={props.handleInput}
        value={item.degree}
      />
      <input
        placeholder="university"
        type="text"
        name="university"
        onChange={props.handleInput}
        value={item.university}
      />
      <input
        placeholder="start date"
        type="text"
        name="startDate"
        onChange={props.handleInput}
        value={item.startDate}
      />
      <input
        type="text"
        placeholder="end date"
        name="endDate"
        onChange={props.handleInput}
        value={item.endDate}
      />
      <textarea
        placeholder="description"
        name="description"
        cols="10"
        rows="5"
        onChange={props.handleInput}
        value={item.description}
      />
      <button onClick={props.deleteItem}>remove</button>
    </form>
  ));

  return (
    <div className="p-10 bg-white rounded-md">
      <FormTitle
        text="Education"
        icon={<SchoolRoundedIcon style={{ fontSize: 28 }} />}
        toggleFormVisibility={toggleFormVisibility}
        isFormVisible={isFormVisible}
      />
      {isFormVisible && <p>hello</p>}
    </div>
  );
}

export default EductionaForm;
