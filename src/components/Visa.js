import { useMemo } from "react";
import "./Visa.css";
const Visa = ({ image30, visaFlexShrink }) => {
  const visaStyle = useMemo(() => {
    return {
      flexShrink: visaFlexShrink,
    };
  }, [visaFlexShrink]);

  return (
    <div className="visa" style={visaStyle}>
      <img className="image-30-icon" alt="" src={image30} />
    </div>
  );
};

export default Visa;
