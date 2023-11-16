import React, { Component } from "react";
import { useState } from "react";
import FormTitle from "./FormTitle";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import "./form.css";

function PersonalForm({ personalData, handleChange }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <form className="p-10 bg-white rounded-md">
      <FormTitle
        text="Personal Details"
        icon={<PersonRoundedIcon style={{ fontSize: 30 }} />}
        toggleFormVisibility={toggleFormVisibility}
        isFormVisible={isFormVisible}
      />
      {isFormVisible && (
        <div className="mt-7 flex flex-col gap-2">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="First and last name"
              onChange={handleChange}
              value={personalData.name}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter email"
              onChange={handleChange}
              value={personalData.email}
            />
          </div>

          <div>
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="Enter phone number"
              onChange={handleChange}
              value={personalData.phone}
            />
          </div>

          <div>
            <label htmlFor="job" className="form-label">
              Current Job
            </label>
            <input
              type="text"
              id="job"
              name="job"
              className="form-input"
              placeholder="Enter your job"
              onChange={handleChange}
              value={personalData.job}
            />
          </div>

          <div>
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-input"
              placeholder="Enter address"
              onChange={handleChange}
              value={personalData.address}
            />
          </div>

          <div>
            <label htmlFor="summary" className="form-label">
              Summary
            </label>
            <textarea
              id="summary"
              placeholder="Give a summary about yourself"
              name="summary"
              cols="10"
              rows="5"
              className="bg-gray-100 w-full rounded border p-2 text-xl"
              onChange={handleChange}
              value={personalData.summary}
            />
          </div>
        </div>
      )}
    </form>
  );
}

export default PersonalForm;
