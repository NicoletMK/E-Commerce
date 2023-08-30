import { useMemo } from "react";
import "./Bkash.css";
const Bkash = ({ image32, bkashFlexShrink }) => {
  const bkashStyle = useMemo(() => {
    return {
      flexShrink: bkashFlexShrink,
    };
  }, [bkashFlexShrink]);

  return (
    <div className="bkash" style={bkashStyle}>
      <img className="image-32-icon" alt="" src={image32} />
    </div>
  );
};

export default Bkash;
