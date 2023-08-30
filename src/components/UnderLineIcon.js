import { useMemo } from "react";
import "./UnderLineIcon.css";
const UnderLineIcon = ({
  underLineIconUnderLine,
  underLineIconWidth,
  underLineIconPosition,
  underLineIconOpacity,
  underLineIconTop,
  underLineIconLeft,
}) => {
  const underLineIconStyle = useMemo(() => {
    return {
      width: underLineIconWidth,
      position: underLineIconPosition,
      opacity: underLineIconOpacity,
      top: underLineIconTop,
      left: underLineIconLeft,
    };
  }, [
    underLineIconWidth,
    underLineIconPosition,
    underLineIconOpacity,
    underLineIconTop,
    underLineIconLeft,
  ]);

  return (
    <img
      className="underline-icon2"
      alt=""
      src={underLineIconUnderLine}
      style={underLineIconStyle}
    />
  );
};

export default UnderLineIcon;
