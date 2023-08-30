import { useMemo } from "react";
import "./FiveStar.css";
const FiveStar = ({ fiveStarPosition }) => {
  const fiveStarStyle = useMemo(() => {
    return {
      position: fiveStarPosition,
    };
  }, [fiveStarPosition]);

  return (
    <div className="five-star" style={fiveStarStyle}>
      <img className="vector-icon19" alt="" src="/vector.svg" />
      <img className="vector-icon19" alt="" src="/vector.svg" />
      <img className="vector-icon19" alt="" src="/vector.svg" />
      <img className="vector-icon19" alt="" src="/vector.svg" />
      <img className="vector-icon19" alt="" src="/vector.svg" />
    </div>
  );
};

export default FiveStar;
