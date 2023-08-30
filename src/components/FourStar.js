import { useMemo } from "react";
import "./FourStar.css";
const FourStar = ({ fourStarPosition }) => {
  const fourStarStyle = useMemo(() => {
    return {
      position: fourStarPosition,
    };
  }, [fourStarPosition]);

  return (
    <div className="four-star" style={fourStarStyle}>
      <img className="vector-icon14" alt="" src="/vector.svg" />
      <img className="vector-icon14" alt="" src="/vector.svg" />
      <img className="vector-icon14" alt="" src="/vector.svg" />
      <img className="vector-icon14" alt="" src="/vector.svg" />
      <img className="vector-icon18" alt="" src="/vector2.svg" />
    </div>
  );
};

export default FourStar;
