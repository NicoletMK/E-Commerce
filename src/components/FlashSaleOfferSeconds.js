import { useMemo } from "react";
import "./FlashSaleOfferSeconds.css";
const FlashSaleOfferSeconds = ({
  prop,
  seconds,
  ellipseDivBackgroundColor,
  frameDivWidth,
  frameDivRight,
  frameDivLeft,
  divColor,
  secondsColor,
  secondsWidth,
}) => {
  const ellipseDiv1Style = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: frameDivWidth,
      right: frameDivRight,
      left: frameDivLeft,
    };
  }, [frameDivWidth, frameDivRight, frameDivLeft]);

  const div1Style = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const secondsStyle = useMemo(() => {
    return {
      color: secondsColor,
      width: secondsWidth,
    };
  }, [secondsColor, secondsWidth]);

  return (
    <div className="flash-sale-offerseconds">
      <div className="flash-sale-offerseconds-child" style={ellipseDiv1Style} />
      <div className="parent9" style={frameDiv6Style}>
        <div className="div58" style={div1Style}>
          {prop}
        </div>
        <div className="seconds1" style={secondsStyle}>
          {seconds}
        </div>
      </div>
    </div>
  );
};

export default FlashSaleOfferSeconds;
