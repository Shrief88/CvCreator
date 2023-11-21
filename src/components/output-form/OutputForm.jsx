import React from "react";
import "./OutputForm.css";
import PersonalSection from "./PersonalSection";

function OutputForm(props) {
  const personalData = props.personalData;
  const experienceData = props.experienceData;
  const educationData = props.educationData;

  const experienceOutput = experienceData.map((item) => (
    <div key={item.id}>
      <div className="flex gap-20 text-xl font-[500] pt-5">
        <div className="flex flex-col">
          <div className="flex">
            {item.startDate && <p> {item.startDate} -</p>}
            {item.endDate && <p>{item.endDate}</p>}
          </div>
          <p>{item.company}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-black">{item.position}</p>
          <p>{item.summary}</p>
        </div>
      </div>
    </div>
  ));

  const educationOuput = educationData.map((item) => (
    <div key={item.id}>
      <div className="flex gap-20 text-xl font-[500] pt-5">
        <div className="flex flex-col">
          <div className="flex">
            {item.startDate && <p> {item.startDate} -</p>}
            {item.endDate && <p>{item.endDate}</p>}
          </div>
          <p>{item.university}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-black">{item.degree}</p>
          <p>{item.summary}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="bg-white">
      <PersonalSection personalData={personalData} />
      <div className="p-14">
        <div className=" max-w-4xl mx-auto pb-6">
          <div className="bg-gray-200 text-center p-1 my-1">
            <p className="text-2xl">SUMMARY</p>
          </div>
          <p className="text-xl pt-5">{personalData.summary}</p>
        </div>
        <div className=" max-w-4xl mx-auto pb-6">
          <div className="bg-gray-200 text-center p-1 my-1">
            <p className="text-2xl">EDUCATION</p>
          </div>
          {educationOuput}
        </div>
        <div className=" max-w-4xl mx-auto pb-6">
          <div className="bg-gray-200 text-center p-1 my-1">
            <p className="text-2xl">Experience</p>
          </div>
          {experienceOutput}
        </div>
      </div>
    </div>
  );
}

export default OutputForm;
