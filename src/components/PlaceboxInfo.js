import { useMemo } from "react";
import PlaceToInfoBox from "./PlaceToInfoBox";
import "./PlaceboxInfo.css";
const PlaceboxInfo = ({
  md,
  placeboxInfoWidth,
  placeboxInfoHeight,
  mdColor,
}) => {
  const placeboxInfoStyle = useMemo(() => {
    return {
      width: placeboxInfoWidth,
      height: placeboxInfoHeight,
    };
  }, [placeboxInfoWidth, placeboxInfoHeight]);

  const mdStyle = useMemo(() => {
    return {
      color: mdColor,
    };
  }, [mdColor]);

  return (
    <div className="placebox-info" style={placeboxInfoStyle}>
      <PlaceToInfoBox
        placeToInfoBoxPosition="absolute"
        placeToInfoBoxWidth="100%"
        placeToInfoBoxHeight="100%"
        placeToInfoBoxTop="0%"
        placeToInfoBoxRight="0%"
        placeToInfoBoxBottom="0%"
        placeToInfoBoxLeft="0%"
        placeToInfoBoxFlexShrink="unset"
      />
      <div className="md" style={mdStyle}>
        {md}
      </div>
    </div>
  );
};

export default PlaceboxInfo;
