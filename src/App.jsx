import React, { useState, useRef } from "react";
import PersonalForm from "./components/input-form/PersonalForm";
import OutputForm from "./components/output-form/OutputForm";
import ExperienceForm from "./components/input-form/experienceForm";
import EductionaForm from "./components/input-form/EductionForm";
import FormHeader from "./components/FormHeader";
import { useReactToPrint } from "react-to-print";
import { updateDate, removeData, addData } from "./utils/dataHelper";
import {
  emptyPersonalData,
  emptyEducationData,
  emptyExperienceData,
} from "./utils/dataConstants";
import {
  personalDataExample,
  eduactionDataExample,
  experienceDataExample,
} from "./utils/dataExamples";

function App() {
  const [personalData, setPersonalData] = useState(emptyPersonalData);
  const [educationData, setEducationData] = useState(emptyEducationData);
  const [experienceData, setExperienceData] = useState(emptyExperienceData);
  // 0 personal Details form , 1 education Details Form , 2 Experience Details form
  const [formVisiblity, setFormVisiblity] = useState([false, false, false]);

  const componentRef = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${personalData.name} Resume`,
  });

  const updatePersonalData = (event) => {
    updateDate(setPersonalData, event);
  };

  const updateEducationData = (event) => {
    updateDate(setEducationData, event);
  };

  const addEducationData = () => {
    addData(setEducationData, educationData, emptyEducationData);
  };

  const removeEducationData = (event) => {
    removeData(setEducationData, event);
  };

  const updateExperienceData = (event) => {
    updateDate(setExperienceData, event);
  };

  const addExperienceData = () => {
    addData(setExperienceData, experienceData, emptyExperienceData);
  };

  const removeExperienceData = (event) => {
    removeData(setEducationData, event);
  };

  const toggleFormVisiblity = (formNumber) => {
    setFormVisiblity((prevArray) =>
      prevArray.map((form, index) =>
        index === formNumber ? !prevArray[index] : false
      )
    );
  };

  const loadExample = () => {
    setPersonalData(personalDataExample);
    setEducationData(eduactionDataExample);
    setExperienceData(experienceDataExample);
    setFormVisiblity([true, true, true]);
  };

  const clearResume = () => {
    setPersonalData(emptyPersonalData);
    setEducationData(emptyEducationData);
    setExperienceData(emptyExperienceData);
  };

  return (
    <div className="grid grid-col-1 lg:grid-cols-2 lg:p-20 p-3 bg-gray-100 gap-6 font-bold h-full">
      <div className="flex flex-col gap-6">
        <FormHeader loadExample={loadExample} clearResume={clearResume} />
        <div className="flex flex-col gap-6">
          <PersonalForm
            handleChange={updatePersonalData}
            personalData={personalData}
            toggleFormVisiblity={toggleFormVisiblity}
            isFormVisible={formVisiblity[0]}
          />

          <EductionaForm
            handleInput={updateEducationData}
            formData={educationData}
            addItem={addEducationData}
            deleteItem={removeEducationData}
            toggleFormVisiblity={toggleFormVisiblity}
            isFormVisible={formVisiblity[1]}
          />

          <ExperienceForm
            deleteItem={removeExperienceData}
            handleInput={updateExperienceData}
            formData={experienceData}
            addItem={addExperienceData}
            toggleFormVisiblity={toggleFormVisiblity}
            isFormVisible={formVisiblity[2]}
          />
        </div>
      </div>

      <div>
        <OutputForm
          personalData={personalData}
          experienceData={experienceData}
          educationData={educationData}
          reference={componentRef}
        />
        <div className="flex justify-center mt-3">
          <button
            className="bg-red-600 text-white p-3 text-lg rounded"
            onClick={generatePDF}
            type="button"
          >
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
