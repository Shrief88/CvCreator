import React, { Component } from "react";
import FormTitle from "./FormTitle";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import "./form.css";

function EductionaForm(props) {
  const formData = props.formData;

  const forms =
    formData.length === 0 ? (
      <div className="flex justify-center mb-4">
        <button
          className="p-2 bg-green-600 text-white rounded-xl text-xl w-24"
          onClick={props.addItem}
        >
          Add
        </button>
      </div>
    ) : (
      formData.map((item, index) => (
        <form className="flex flex-col gap-3 mb-4 font-light" id={item.id} key={item.id}>
          <input
            placeholder="Degree"
            type="text"
            name="degree"
            className="form-input"
            id="degree"
            onChange={props.handleInput}
            value={item.degree}
          />
          <input
            placeholder="University"
            type="text"
            name="university"
            className="form-input"
            id="university"
            onChange={props.handleInput}
            value={item.university}
          />
          <div className="flex gap-2">
            <input
              placeholder="Start Date"
              type="text"
              name="startDate"
              className="form-input"
              id="startDate"
              onChange={props.handleInput}
              value={item.startDate}
            />
            <input
              type="text"
              placeholder="End Date"
              name="endDate"
              className="form-input"
              id="endDate"
              onChange={props.handleInput}
              value={item.endDate}
            />
          </div>

          <textarea
            placeholder="Summary"
            name="summary"
            cols="10"
            rows="3"
            className="form-input"
            id="summary"
            onChange={props.handleInput}
            value={item.summary}
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
        toggleFormVisiblity={props.toggleFormVisiblity}
        isFormVisible={props.isFormVisible}
        formNumber = {1}
      />
      {props.isFormVisible && <div>{forms}</div>}
    </div>
  );
}

export default EductionaForm;
