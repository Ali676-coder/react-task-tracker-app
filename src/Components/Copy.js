import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Copy = ({ all, setAll }) => {
  const infoHandler = () => {
    setAll(!all);
  };
  return (
    <div className="copy" onClick={infoHandler}>
      <h4>Copyright &copy; 2025</h4>
      <p>
        Click here for more Info <FaArrowAltCircleRight />
      </p>
    </div>
  );
};

export default Copy;
