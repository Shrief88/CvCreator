import React, { Component } from "react";
import './OutputForm.css'


class OutputForm extends Component{
    render(){
        const personalData = this.props.personalData;
        const workingData = this.props.workingData;
        const educationData = this.props.educationData;
        return(
            <div className="output">
                <div className="personal-info">
                    <div>
                        <p className="name">{personalData.name}</p>
                        <p className="job">{personalData.job}</p>
                    </div>
                    <div className="contact">
                        {personalData.phone && 
                        <div>
                            <img src="../src/assets/phone.svg"/>
                            <p>{personalData.phone}</p>
                        </div>}

                        {personalData.email && 
                        <div>
                            <img src="../src/assets/email.svg"/>
                            <p>{personalData.email}</p>
                        </div>}

                        {personalData.state &&
                        <div>
                            <img src="../src/assets/map-marker.svg"/>
                            <p>{personalData.state}</p>
                        </div>}
                    </div>
                </div>

                <p className="description">{personalData.description}</p>

                <div>
                    <p className="section-title">WORK EXPERIENCE</p>
                    <div className="section-info">
                        
                        <p className="work-position">{workingData.position}</p>
                        <div>
                           <p>{workingData.company}</p>
                           {workingData.startDate && <p className="date">| {workingData.startDate} -</p>}
                           {workingData.endDate && <p className="date">{workingData.endDate}</p>} 
                        </div>
                        
                    </div>
                    <p className="description">{workingData.description}</p>
                </div>

                <div className="work">
                    <p className="section-title">EDUCTAION</p>
                    <div className="section-info">
                        <p className="degree">{educationData.degree}</p>
                        <div>
                            <p>{educationData.university}</p>
                            {educationData.startDate && <p className="date">| {educationData.startDate} -</p>}
                            {educationData.endDate && <p className="date">{educationData.endDate}</p>} 
                        </div>
                        
                    
                    </div>
                    <p className="description">{educationData.description}</p>
                </div>


            </div>
        )    
            
    }
}

export default OutputForm;