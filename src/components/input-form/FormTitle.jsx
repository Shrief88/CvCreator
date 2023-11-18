import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FormTitle = ({
  text,
  icon,
  isFormVisible,
  toggleFormVisiblity,
  formNumber,
}) => {

  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-3xl">{text}</p>
      </div>
      <div onClick={() => toggleFormVisiblity(formNumber)}>
        {isFormVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
    </div>
  );
};

export default FormTitle;
