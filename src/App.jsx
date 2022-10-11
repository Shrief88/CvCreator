import React, { Component } from "react";
import './App.css'
import PersonalForm from './components/PersonalForm'
import OutputForm from "./components/OutputForm";


class App extends Component{
  constructor(props) {
    super(props);

  this.state = {
    personalData : {name:"",job:"",phone:"",email:"",state:"",description:""},
  };  

  this.updatePersonalData = this.updatePersonalData.bind(this)
    
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

  render(){
    return (
      <div className="App">
        <div className='form-input'>
          <PersonalForm handleInput={this.updatePersonalData} formData={this.state.personalData}/>
        </div>
        <div>
          <OutputForm personalData={this.state.personalData}/>
        </div>
        
      </div>
    )
  }
}

export default App
