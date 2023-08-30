import { useMemo } from "react";
import "./Mastercard.css";
const Mastercard = ({ mastercardFlexShrink }) => {
  const mastercardStyle = useMemo(() => {
    return {
      flexShrink: mastercardFlexShrink,
    };
  }, [mastercardFlexShrink]);

  return (
    <div className="mastercard" style={mastercardStyle}>
      <img className="image-31-icon" alt="" src="/image-31@2x.png" />
    </div>
  );
};

export default Mastercard;
