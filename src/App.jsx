import React, { Component } from "react";
import './App.css'
import PersonalForm from './components/PersonalForm'
import OutputForm from "./components/OutputForm";
import WorkForm from "./components/WorkForm";
import EductionaForm from "./components/EductionForm";


class App extends Component{
  constructor(props) {
    super(props);

  this.state = {
    personalData : {
      name:"Shrief Essam",
      job:"Software Developer",
      phone:"01099436442",
      email:"shriefessam1999@gmail.come",
      state:"Cario",
      description:""
    },

    workData : [{
      id:1,
      company:"A Software Company",
      position:"Software Engineer",
      startDate:"2018",
      endDate:"2022",
      description:""
    }],
    
    educationData : {
      degree:"Computer science",
      university:"Ain Shams",
      startDate:"2017",
      endDate:"2022",
      description:""
    }
  };  

  this.updatePersonalData = this.updatePersonalData.bind(this)
  this.updateworkData = this.updateworkData.bind(this)
  this.addworkData = this.addworkData.bind(this)
  this.updateEductionaData = this.updateEductionaData.bind(this)
  this.removeWorkData = this.removeWorkData.bind(this)
    
  }

  updatePersonalData(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState=>({
      personalData:{
        ...prevState.personalData,
        [name]: value,
      }
    }));
  }

  addworkData(){
    const newObject = {name:"",job:"",phone:"",email:"",state:"",description:"",id:this.state.workData.length+1};
    this.setState(prevState=>({
      workData : [...prevState.workData,newObject]
    }))
  }

  removeWorkData(event){
    const id = event.target.parentElement.id;
    this.setState(prevState=>({
      workData:prevState.workData.filter(item=>item.id != id)
    }))
  }

  updateworkData(event){
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.parentElement.id;
    this.setState(prevState=>({
      workData: prevState.workData.map(item=>{
        return item.id == id ? {...item,[name]:value} : item;
      })
    }))
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
          
          <WorkForm 
            deleteItem={this.removeWorkData} 
            handleInput={this.updateworkData} 
            formData={this.state.workData} 
            addItem={this.addworkData}
          />

          <EductionaForm handleInput={this.updateEductionaData} formData={this.state.educationData}/>
        </div>
        <div>
          <OutputForm personalData={this.state.personalData} workData={this.state.workData} 
          educationData={this.state.educationData}/>
        </div>
        
      </div>
    )
  }
}

export default App
