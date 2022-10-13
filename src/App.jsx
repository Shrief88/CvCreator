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
    
    educationData : [{
      id:1,
      degree:"Computer science",
      university:"Ain Shams",
      startDate:"2017",
      endDate:"2022",
      description:""
    }]
  };  

  this.updatePersonalData = this.updatePersonalData.bind(this)
  this.updateWorkData = this.updateWorkData.bind(this)
  this.addWorkData = this.addWorkData.bind(this)
  this.removeWorkData = this.removeWorkData.bind(this)
  this.updateEductionaData = this.updateEductionaData.bind(this)
  this.addEducationData = this.addEducationData.bind(this)
  this.removeEducationData = this.removeEducationData.bind(this)
  
    
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

  addWorkData(){
    const newObject = {company:"",position:"",startDate:"",endDate:"",description:"",id:this.state.workData.length+1};
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

  updateWorkData(event){
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.parentElement.id;
    this.setState(prevState=>({
      workData: prevState.workData.map(item=>{
        return item.id == id ? {...item,[name]:value} : item;
      })
    }))
  }

  addEducationData(){
    const newObject = {degree:"",position:"",startDate:"",endDate:"",description:"",
    id:this.state.educationData.length+1};
    this.setState(prevState=>({
      educationData : [...prevState.educationData,newObject]
    }))
  }

  removeEducationData(event){
    const id = event.target.parentElement.id;
    this.setState(prevState=>({
      educationData:prevState.educationData.filter(item=>item.id != id)
    }))
  }

  updateEductionaData(event){
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.parentElement.id;
    this.setState(prevState=>({
      educationData: prevState.educationData.map(item=>{
        return item.id == id ? {...item,[name]:value} : item;
      })
    }));
  }


  render(){
    return (
      <div className="App">
        <div className='form-input'>
          <PersonalForm handleInput={this.updatePersonalData} formData={this.state.personalData}/>
          
          <WorkForm 
            deleteItem={this.removeWorkData} 
            handleInput={this.updateWorkData} 
            formData={this.state.workData} 
            addItem={this.addWorkData}
          />

          <EductionaForm
            handleInput={this.updateEductionaData} 
            formData={this.state.educationData}
            addItem={this.addEducationData}
            deleteItem={this.removeEducationData}
          />
        </div>
        <div>
          <OutputForm 
            personalData={this.state.personalData} 
            workData={this.state.workData} 
            educationData={this.state.educationData}
          />
        </div>
        
      </div>
    )
  }
}

export default App
