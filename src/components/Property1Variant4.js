import { useMemo } from "react";
import DiscountPercent from "./DiscountPercent";
import FourHalfStar from "./FourHalfStar";
import "./Property1Variant4.css";
const Property1Variant4 = ({
  prop,
  fillEye,
  samMoghadamKhamsehKvmdsTr,
  sSeriesComfortChair,
  prop1,
  prop2,
  starHalfFilled,
  prop3,
  property1Variant4Position,
  samMoghadamKhamsehKvmdsTrTop,
  samMoghadamKhamsehKvmdsTrLeft,
  samMoghadamKhamsehKvmdsTrWidth,
  samMoghadamKhamsehKvmdsTrHeight,
  starHalfFilledIconOverflow,
  starHalfFilledIconFlexShrink,
  starHalfFilledIconBorderRadius,
}) => {
  const property1Variant4Style = useMemo(() => {
    return {
      position: property1Variant4Position,
    };
  }, [property1Variant4Position]);

  const samMoghadamKhamsehKvmdsTrGOIconStyle = useMemo(() => {
    return {
      top: samMoghadamKhamsehKvmdsTrTop,
      left: samMoghadamKhamsehKvmdsTrLeft,
      width: samMoghadamKhamsehKvmdsTrWidth,
      height: samMoghadamKhamsehKvmdsTrHeight,
    };
  }, [
    samMoghadamKhamsehKvmdsTrTop,
    samMoghadamKhamsehKvmdsTrLeft,
    samMoghadamKhamsehKvmdsTrWidth,
    samMoghadamKhamsehKvmdsTrHeight,
  ]);

  const starHalfFilledIconStyle = useMemo(() => {
    return {
      overflow: starHalfFilledIconOverflow,
      flexShrink: starHalfFilledIconFlexShrink,
      borderRadius: starHalfFilledIconBorderRadius,
    };
  }, [
    starHalfFilledIconOverflow,
    starHalfFilledIconFlexShrink,
    starHalfFilledIconBorderRadius,
  ]);

  return (
    <div className="property-1variant4" style={property1Variant4Style}>
      <div className="discount-percent-parent">
        <DiscountPercent
          prop="-25%"
          discountPercentPosition="absolute"
          discountPercentTop="12px"
          discountPercentLeft="12px"
        />
        <div className="fill-heart-parent9">
          <img className="fill-heart-icon11" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon11" alt="" src={fillEye} />
        </div>
        <div className="sam-moghadam-khamseh-kvmdstrgo-wrapper">
          <img
            className="sam-moghadam-khamseh-kvmdstrgo-icon"
            alt=""
            src={samMoghadamKhamsehKvmdsTr}
            style={samMoghadamKhamsehKvmdsTrGOIconStyle}
          />
        </div>
      </div>
      <div className="s-series-comfort-chair-parent">
        <div className="s-series-comfort-chair">{sSeriesComfortChair}</div>
        <div className="parent5">
          <div className="s-series-comfort-chair">{prop1}</div>
          <div className="div46">{prop2}</div>
        </div>
        <div className="four-half-star-parent2">
          <FourHalfStar
            starHalfFilled="/starhalffilled3.svg"
            fourHalfStarPosition="unset"
          />
          <div className="div47">{prop3}</div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant4;
