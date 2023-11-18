import React, { Component } from "react";
import FormTitle from "./FormTitle";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import "./form.css";

function PersonalForm({ personalData, handleChange,toggleFormVisiblity, isFormVisible }) {
  return (
    <form className="p-10 pb-0 bg-white rounded-md">
      <FormTitle
        text="Personal Details"
        icon={<PersonRoundedIcon style={{ fontSize: 30 }} />}
        toggleFormVisiblity={toggleFormVisiblity}
        isFormVisible={isFormVisible}
        formNumber = {0}
      />
      {isFormVisible && (
        <div className="flex flex-col gap-3 mb-4 font-light">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="First and Last Name"
              onChange={handleChange}
              value={personalData.name}
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Email"
              onChange={handleChange}
              value={personalData.email}
            />
          </div>

          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="Phone Number"
              onChange={handleChange}
              value={personalData.phone}
            />
          </div>

          <div>
            <input
              type="text"
              id="job"
              name="job"
              className="form-input"
              placeholder="Job"
              onChange={handleChange}
              value={personalData.job}
            />
          </div>

          <div>
            <input
              type="text"
              id="address"
              name="address"
              className="form-input"
              placeholder="Address"
              onChange={handleChange}
              value={personalData.address}
            />
          </div>

          <div>
            <textarea
              id="summary"
              placeholder="Give a Summary About Yourself"
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
