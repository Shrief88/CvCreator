import React, { Component } from "react";
import './App.css'
import PersonalForm from './components/PersonalForm'
import OutputForm from "./components/OutputForm";
import WorkingForm from "./components/WorkingForm";


class App extends Component{
  constructor(props) {
    super(props);

  this.state = {
    personalData : {name:"",job:"",phone:"",email:"",state:"",personalDescription:""},
    workingData : {company:"",position:"",startData:"",endData:"",workingDescription:""},
  };  

  this.updatePersonalData = this.updatePersonalData.bind(this)
  this.updateWorkingData = this.updateWorkingData.bind(this)
    
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

  render(){
    return (
      <div className="App">
        <div className='form-input'>
          <PersonalForm handleInput={this.updatePersonalData} formData={this.state.personalData}/>
          <WorkingForm handleInput={this.updateWorkingData} formData={this.state.workingData}/>
        </div>
        <div>
          <OutputForm personalData={this.state.personalData} workingData={this.state.workingData}/>
        </div>
        
      </div>
    )
  }
}

export default App
