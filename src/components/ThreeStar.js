import { useMemo } from "react";
import "./ThreeStar.css";
const ThreeStar = ({ threeStarPosition }) => {
  const threeStarStyle = useMemo(() => {
    return {
      position: threeStarPosition,
    };
  }, [threeStarPosition]);

  return (
    <div className="three-star" style={threeStarStyle}>
      <img className="vector-icon1" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector.svg" />
      <img className="vector-icon4" alt="" src="/vector2.svg" />
      <img className="vector-icon4" alt="" src="/vector2.svg" />
    </div>
  );
};

export default ThreeStar;
