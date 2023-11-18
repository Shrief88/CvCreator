import React, { useState } from "react";
import PersonalForm from "./components/input-form/PersonalForm";
import OutputForm from "./components/output-form/OutputForm";
import ExperienceForm from "./components/input-form/experienceForm";
import EductionaForm from "./components/input-form/EductionForm";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";

function App() {
  const emptyPersonalData = {
    name: "",
    email: "",
    job: "",
    phone: "",
    address: "",
    summary: "",
  };

  const [personalData, setPersonalData] = useState(emptyPersonalData);

  const updatePersonalData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPersonalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const emptyeducationData = [
    {
      id: 1,
      degree: "",
      university: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ];

  const [educationData, setEducationData] = useState(emptyeducationData);

  const updateEducationData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const id = Number(event.target.closest("form").id);

    setEducationData((prevArray) =>
      prevArray.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };

  const addEducationData = () => {
    const newObject = {
      id:
        educationData.length === 0
          ? 1
          : educationData[educationData.length - 1].id + 1,
      degree: "",
      university: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setEducationData((prevState) => [...prevState, newObject]);
  };

  const removeEducationData = (event) => {
    const id = Number(event.target.closest("form").id);
    setEducationData((prevState) => prevState.filter((item) => item.id != id));
  };

  const emptyExperienceData = [
    {
      id: 1,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
  ];

  const [experienceData, setExperienceData] = useState(emptyExperienceData);

  const updateExperienceData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const id = Number(event.target.closest("form").id);
    setExperienceData((prevArray) =>
      prevArray.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };

  const addExperienceData = () => {
    const newObject = {
      id: experienceData.length === 0 ? 1 : experienceData[experienceData.length - 1].id + 1,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      summary: "",
    };
    setExperienceData((prevState) => [...prevState, newObject]);
  };

  const removeExperienceData = (event) => {
    const id = Number(event.target.closest("form").id);
    setExperienceData((prevArray) => prevArray.filter((item) => item.id != id));
  };

  // 0 personal Details form , 1 education Details Form , 2 Experience Details form
  const [formVisiblity, setFormVisiblity] = useState([false, false, false]);
  const toggleFormVisiblity = (formNumber) => {
    setFormVisiblity((prevArray) =>
      prevArray.map((form, index) =>
        index === formNumber ? !prevArray[index] : false
      )
    );
  };

  const loadExample = () => {
    setPersonalData({
      name: "Shrief Essam",
      email: "shriefessam1999@gmail.com",
      job: "Software Developer",
      phone: "01099436442",
      address: "Cairo",
      summary:
        "Motivated Computer Software Engineer, committed to working both independently and as part of an engineering team",
    });

    setEducationData([
      {
        id: 1,
        degree: "bachelor degree of engineering",
        university: "Ain Shams",
        startDate: "2017",
        endDate: "2022",
        description: "",
      },
    ]);

    setExperienceData([
      {
        id: 1,
        company: "Software Company",
        position: "Software Developer",
        startDate: "2022",
        endDate: "2023",
        summary: "I was responsible of maintain the company software products",
      },
    ]);

    setFormVisiblity([true, true, true]);
  };

  const clearResume = () => {
    setPersonalData(emptyPersonalData);
    setEducationData(emptyeducationData);
    setExperienceData(emptyExperienceData);
  };

  return (
    <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-6 lg:p-20 p-3 bg-gray-100 gap-6 font-bold h-full">
      <div className="justify-self-center md:col-span-1 md:justify-self-end">
        <div className="grid grid-cols-2 md:grid-cols-1 bg-white p-3 rounded-2xl max-w-max">
          <div className="flex flex-col items-center p-4 text-2xl hover:bg-gray-100 rounded-xl">
            <InsertDriveFileIcon style={{ fontSize: 24 }} />
            <p>Content</p>
          </div>
          <div className="flex flex-col items-center p-4 text-2xl hover:bg-gray-100 rounded-xl">
            <EditIcon style={{ fontSize: 24 }} />
            <p>Customize</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:col-span-2">
        <div className=" flex bg-white py-4 rounded-2xl justify-center">
          <div
            className="flex hover:bg-gray-100 rounded-lg px-8 py-2 gap-2"
            onClick={clearResume}
          >
            <DeleteIcon style={{ fontSize: 20, color: "red" }} />
            <p className="text-xl text-red-600">Clear Resume</p>
          </div>
          <div
            className="flex hover:bg-gray-100 rounded-lg px-8 py-2 gap-2"
            onClick={loadExample}
          >
            <ReplayIcon style={{ fontSize: 20 }} />
            <p className="text-xl ">Load Example</p>
          </div>
        </div>

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

      <div className="md:col-span-3">
        <OutputForm
          personalData={personalData}
          experienceData={experienceData}
          educationData={educationData}
        />
      </div>
    </div>
  );
}

export default App;
