import React, {Component} from "react";
import './OutputForm.css'

function PersonalSection(props){
    
    const personalData = props.personalData;
    return(
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
    )
}

export default PersonalSection;

