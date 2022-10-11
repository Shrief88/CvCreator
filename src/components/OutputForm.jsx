import React, { Component } from "react";

class OutputForm extends Component{
    render(){
        return(
            <div>
                <p>{this.props.personalData.name}</p>
                <p>{this.props.personalData.job}</p>
                <p>{this.props.personalData.email}</p>
                <p>{this.props.personalData.phone}</p>
                <p>{this.props.personalData.state}</p>
                <p>{this.props.personalData.description}</p>
            </div>
        )    
            
    }
}

export default OutputForm;