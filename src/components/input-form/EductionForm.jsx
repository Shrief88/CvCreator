import React, { Component } from "react";
import { useState } from "react";
import FormTitle from "./FormTitle";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import "./form.css";

function EductionaForm(props) {
  const [isFormVisible, setFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };
  const formData = props.formData;

  const forms =
    formData.length === 0 ? (
      <div className="flex justify-center">
        <button
          className="p-2 bg-green-600 text-white rounded-xl text-xl w-24"
          onClick={props.addItem}
        >
          Add
        </button>
      </div>
    ) : (
      formData.map((item, index) => (
        <form className="flex flex-col gap-3 mb-4" id={item.id} key={item.id}>
          <input
            placeholder="degree"
            type="text"
            name="degree"
            className="form-input"
            id="degree"
            onChange={props.handleInput}
            value={item.degree}
          />
          <input
            placeholder="university"
            type="text"
            name="university"
            className="form-input"
            id="university"
            onChange={props.handleInput}
            value={item.university}
          />
          <input
            placeholder="start date"
            type="text"
            name="startDate"
            className="form-input"
            id="startDate"
            onChange={props.handleInput}
            value={item.startDate}
          />
          <input
            type="text"
            placeholder="end date"
            name="endDate"
            className="form-input"
            id="endDate"
            onChange={props.handleInput}
            value={item.endDate}
          />
          <textarea
            placeholder="description"
            name="description"
            cols="10"
            rows="5"
            className="form-input"
            id="description"
            onChange={props.handleInput}
            value={item.description}
          />

          <div className="flex justify-end gap-3 mt-2">
            <button
              className="p-2 bg-red-600 text-white rounded-xl text-xl w-24"
              onClick={props.deleteItem}
              type="button"
            >
              Remove
            </button>
            {index === formData.length - 1 && (
              <button
                className="p-2 bg-green-600 text-white rounded-xl text-xl w-24"
                onClick={props.addItem}
                type="button"
              >
                Add
              </button>
            )}
          </div>
        </form>
      ))
    );

  return (
    <div className="p-10 pb-0 bg-white rounded-md">
      <FormTitle
        text="Education"
        icon={<SchoolRoundedIcon style={{ fontSize: 28 }} />}
        toggleFormVisibility={toggleFormVisibility}
        isFormVisible={isFormVisible}
      />
      {isFormVisible && <div>{forms}</div>}
    </div>
  );
}

export default EductionaForm;
