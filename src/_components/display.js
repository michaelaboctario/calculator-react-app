import "./display.css";

const Display = ({ value }) => {
    return (
      <p className="display" >
        {value}
      </p>
    );
  };

export default Display;