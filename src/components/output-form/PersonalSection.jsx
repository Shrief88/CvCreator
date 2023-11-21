import React from "react";
import "./OutputForm.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

function PersonalSection(props) {
  const personalData = props.personalData;
  return (
    <div className="bg-[#0E374E] text-white p-10">
      <p className="text-center text-6xl mb-6">{personalData.name}</p>

      <div className="flex justify-center gap-7 text-xl">
        {personalData.phone && (
          <div className="flex gap-2">
            <PhoneIcon />
            <p>{personalData.phone}</p>
          </div>
        )}

        {personalData.email && (
          <div className="flex gap-2">
            <EmailIcon />
            <p>{personalData.email}</p>
          </div>
        )}

        {personalData.address && (
          <div className="flex gap-2">
            <PlaceIcon />
            <p>{personalData.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalSection;
