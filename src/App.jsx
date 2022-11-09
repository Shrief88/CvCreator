import React, { useState } from "react";
import './App.css'
import PersonalForm from './components/input-form/PersonalForm'
import OutputForm from "./components/output-form/OutputForm";
import WorkForm from "./components/input-form/WorkForm";
import EductionaForm from "./components/input-form/EductionForm";


function App(){
    const[personalData,setPersonalData] = useState({
        name:"Shrief Essam",
        job:"Software Developer",
        phone:"01099436442",
        email:"shriefessam1999@gmail.come",
        state:"Cario",
        description:""
    })

    const[workData,setWorkData] = useState([{
        id:1,
        company:"A Software Company",
        position:"Software Engineer",
        startDate:"2018",
        endDate:"2022",
        description:""
    }])

    const[educationData,setEduacationData] = useState([{
        id:1,
        degree:"Computer science",
        university:"Ain Shams",
        startDate:"2017",
        endDate:"2022",
        description:""
    }])
    
 
    const updatePersonalData = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setPersonalData(prevState=>({
            ...prevState,
            [name]: value,
        }));
    }

    const updateWorkData = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        const id = event.target.parentElement.id;
        setWorkData(prevArray=>
            prevArray.map(item=>
               item.id == id ? {...item,[name]:value}: item
            )
        )
    }

    const addWorkData = ()=>{
        const newObject = {company:"",position:"",startDate:"",endDate:"",description:"",id:workData.length+1};
        setWorkData(prevState=>[...prevState,newObject])
    }

    const removeWorkData = (event)=>{
        const id = event.target.parentElement.id;
        setWorkData(prevArray=>prevArray.filter(item=>item.id != id))
    }

    const updateEductionaData = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        const id = event.target.parentElement.id;
        setEduacationData(prevArray=>
            prevArray.map(item=>
                item.id == id ? {...item,[name]:value} : item
            )
        )
    }
    
    const addEducationData = () => {
        const newObject = {degree:"",position:"",startDate:"",endDate:"",description:"",id:educationData.length+1};
        setEduacationData(prevState=>[...prevState,newObject])
    }

    const removeEducationData = (event) =>{
        const id = event.target.parentElement.id;
        setEduacationData(prevState=> prevState.filter(item=>item.id != id))
    }

  

    return (
      <div className="App">
        <div className='input-form'>
          <PersonalForm handleInput={updatePersonalData} formData={personalData}/>
          
          <WorkForm 
            deleteItem={removeWorkData} 
            handleInput={updateWorkData} 
            formData={workData} 
            addItem={addWorkData}
          />

          <EductionaForm
            handleInput={updateEductionaData} 
            formData={educationData}
            addItem={addEducationData}
            deleteItem={removeEducationData}
          />
        </div>
        <div>
          <OutputForm 
            personalData={personalData} 
            workData={workData} 
            educationData={educationData}
          />
        </div>
        
      </div>
    )

}

export default App
