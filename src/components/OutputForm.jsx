import React, { Component } from "react";
import './OutputForm.css'


class OutputForm extends Component{
    render(){
        return(
            <div className="output">
                <div className="personal-info">
                    <div>
                        <p className="name">{this.props.personalData.name}</p>
                        <p className="job">{this.props.personalData.job}</p>
                    </div>
                    <div className="contact">
                        {this.props.personalData.phone && 
                        <div>
                            <img src="../src/assets/phone.svg"/>
                            <p>{this.props.personalData.phone}</p>
                        </div>}

                        {this.props.personalData.email && 
                        <div>
                            <img src="../src/assets/email.svg"/>
                            <p>{this.props.personalData.email}</p>
                        </div>}

                        {this.props.personalData.state &&
                        <div>
                            <img src="../src/assets/map-marker.svg"/>
                            <p>{this.props.personalData.state}</p>
                        </div>}
                    </div>
                </div>

                <p>{this.props.personalData.description}</p>
            </div>
        )    
            
    }
}

export default OutputForm;