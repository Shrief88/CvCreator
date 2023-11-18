import React, { Component } from "react";
import FormTitle from "./FormTitle";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import "./form.css";

function ExperienceForm(props) {
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
        <form
          className="flex flex-col gap-3 mb-4 font-light"
          id={item.id}
          key={item.id}
        >
          <input
            placeholder="Company"
            type="text"
            name="company"
            className="form-input"
            id="company"
            onChange={props.handleInput}
            value={item.company}
          />
          <input
            placeholder="position"
            type="text"
            name="position"
            className="form-input"
            id="position"
            onChange={props.handleInput}
            value={item.position}
          />
          <div className="flex">
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
          </div>

          <textarea
            placeholder="summary"
            name="summary"
            cols="10"
            rows="5"
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
        text="Experience"
        icon={<WorkRoundedIcon style={{ fontSize: 28 }} />}
        toggleFormVisiblity={props.toggleFormVisiblity}
        isFormVisible={props.isFormVisible}
        formNumber = {2}
      />
      {props.isFormVisible && <div>{forms}</div>}
    </div>
  );
}

export default ExperienceForm;
