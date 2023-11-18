import React from "react";
import './OutputForm.css'
import PersonalSection from "./PersonalSection";


function OutputForm(props){
   
    const personalData = props.personalData;
    const experienceData = props.experienceData;
    const educationData = props.educationData;

    const experienceOutput = experienceData.map(item=>
        <div key={item.id}>
            <div className="section-info">
                <p className="work-position">{item.position}</p>
                <div>
                    <p>{item.company}</p>
                    {item.startDate && <p className="date">| {item.startDate} -</p>}
                    {item.endDate && <p className="date">{item.endDate}</p>} 
                </div>
            </div>
            <p className="description">{item.summary}</p>
        </div>
    )

    const educationOuput= educationData.map(item=>
        <div key={item.id}>
            <div className="section-info">
                <p className="degree">{item.degree}</p>
                <div>
                    <p>{item.university}</p>
                    {item.startDate && <p className="date">| {item.startDate} -</p>}
                    {item.endDate && <p className="date">{item.endDate}</p>} 
                </div>
            </div>
            <p className="description">{item.summary}</p>
        </div>
    )

        
    return(
        <div className="output">
            <PersonalSection personalData={personalData}/>
            <p className="description">{personalData.summary}</p>
            <div>
                {experienceData.length >0 &&<p className="section-title">WORK EXPERIENCE</p>}
                {experienceOutput}
            </div>
            
            <div>
                {educationData.length >0 &&<p className="section-title">Education</p>}
                {educationOuput}
            </div>
        </div>
    )    
}

export default OutputForm;