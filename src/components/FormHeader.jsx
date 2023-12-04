import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";

const FormHeader = (props) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white flex rounded-2xl px-7 py-2 ">
        <div
          className="flex items-center hover:bg-gray-100 rounded-lg px-8 py-2 gap-2"
          onClick={() => props.clearResume()}
        >
          <DeleteIcon style={{ fontSize: 20, color: "red" }} />
          <p className="text-xl text-red-600">Clear Resume</p>
        </div>
        <div
          className="flex items-center hover:bg-gray-100 rounded-lg px-8 py-2 gap-2"
          onClick={() => props.loadExample()}
        >
          <ReplayIcon style={{ fontSize: 20 }} />
          <p className="text-xl ">Load Example</p>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
