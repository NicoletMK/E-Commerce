import { useMemo } from "react";
import "./Nagad.css";
const Nagad = ({ image33, nagadFlexShrink }) => {
  const nagadStyle = useMemo(() => {
    return {
      flexShrink: nagadFlexShrink,
    };
  }, [nagadFlexShrink]);

  return (
    <div className="nagad" style={nagadStyle}>
      <img className="image-33-icon" alt="" src={image33} />
    </div>
  );
};

export default Nagad;
