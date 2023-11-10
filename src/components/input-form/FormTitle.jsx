import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FormTitle = ({ text, icon, isFormVisible,toggleFormVisibility}) => {
 

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-3xl">{text}</p>
      </div>
      <div onClick={toggleFormVisibility}>
        {isFormVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
    </div>
  );
};

export default FormTitle;
