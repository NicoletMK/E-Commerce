import { useMemo } from "react";
import "./PlaceToInfoBox.css";
const PlaceToInfoBox = ({
  placeToInfoBoxPosition,
  placeToInfoBoxWidth,
  placeToInfoBoxHeight,
  placeToInfoBoxTop,
  placeToInfoBoxRight,
  placeToInfoBoxBottom,
  placeToInfoBoxLeft,
  placeToInfoBoxFlexShrink,
}) => {
  const placeToInfoBoxStyle = useMemo(() => {
    return {
      position: placeToInfoBoxPosition,
      width: placeToInfoBoxWidth,
      height: placeToInfoBoxHeight,
      top: placeToInfoBoxTop,
      right: placeToInfoBoxRight,
      bottom: placeToInfoBoxBottom,
      left: placeToInfoBoxLeft,
      flexShrink: placeToInfoBoxFlexShrink,
    };
  }, [
    placeToInfoBoxPosition,
    placeToInfoBoxWidth,
    placeToInfoBoxHeight,
    placeToInfoBoxTop,
    placeToInfoBoxRight,
    placeToInfoBoxBottom,
    placeToInfoBoxLeft,
    placeToInfoBoxFlexShrink,
  ]);

  return <div className="place-to-info-box" style={placeToInfoBoxStyle} />;
};

export default PlaceToInfoBox;
