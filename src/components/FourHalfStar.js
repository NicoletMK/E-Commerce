import { useMemo } from "react";
import "./FourHalfStar.css";
const FourHalfStar = ({ starHalfFilled, fourHalfStarPosition }) => {
  const fourHalfStarStyle = useMemo(() => {
    return {
      position: fourHalfStarPosition,
    };
  }, [fourHalfStarPosition]);

  return (
    <div className="four-half-star" style={fourHalfStarStyle}>
      <img className="vector-icon10" alt="" src="/vector.svg" />
      <img className="vector-icon10" alt="" src="/vector.svg" />
      <img className="vector-icon10" alt="" src="/vector.svg" />
      <img className="vector-icon10" alt="" src="/vector.svg" />
      <img className="star-half-filled-icon" alt="" src={starHalfFilled} />
    </div>
  );
};

export default FourHalfStar;
