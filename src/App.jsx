import React, { Component } from "react";
import './App.css'
import PersonalForm from './components/PersonalForm'
import OutputForm from "./components/OutputForm";
import WorkingForm from "./components/WorkingForm";
import EductionaForm from "./components/EductionForm";


class App extends Component{
  constructor(props) {
    super(props);

  this.state = {
    personalData : {name:"",job:"",phone:"",email:"",state:"",description:""},
    workingData : {company:"",position:"",startData:"",endData:"",description:""},
    educationData : {university:"",startData:"",endData:"",description:""}
  };  

  this.updatePersonalData = this.updatePersonalData.bind(this)
  this.updateWorkingData = this.updateWorkingData.bind(this)
  this.updateEductionaData = this.updateEductionaData.bind(this)
    
  }

  updatePersonalData (event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState=>({
      personalData:{
        ...prevState.personalData,
        [name]: value,
      }
    }));
  }

  updateWorkingData(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState=>({
      workingData:{
        ...prevState.workingData,
        [name]: value,
      }
    }));
  }

  updateEductionaData(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState=>({
      educationData:{
        ...prevState.educationData,
        [name]: value,
      }
    }));
  }

  render(){
    return (
      <div className="App">
        <div className='form-input'>
          <PersonalForm handleInput={this.updatePersonalData} formData={this.state.personalData}/>
          <WorkingForm handleInput={this.updateWorkingData} formData={this.state.workingData}/>
          <EductionaForm handleInput={this.updateEductionaData} formData={this.state.educationData}/>
        </div>
        <div>
          <OutputForm personalData={this.state.personalData} workingData={this.state.workingData}/>
        </div>
        
      </div>
    )
  }
}

export default App
