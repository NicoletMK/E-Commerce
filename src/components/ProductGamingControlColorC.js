import { useMemo } from "react";
import NewButton from "./NewButton";
import FourHalfStar from "./FourHalfStar";
import ColourChnage from "./ColourChnage";
import "./ProductGamingControlColorC.css";
const ProductGamingControlColorC = ({
  fillEye,
  gP11PRD31,
  gP11ShooterUSBGamepad,
  prop,
  starHalfFilled,
  prop1,
  group1000005935,
  productGamingControlColorPosition,
  productGamingControlColorCursor,
  gP11PRD31IconTop,
  gP11PRD31IconLeft,
  gP11PRD31IconHeight,
  starHalfFilledIconOverflow,
  starHalfFilledIconFlexShrink,
  starHalfFilledIconBorderRadius,
  onCartContainer20Click,
}) => {
  const productGamingControlColorCStyle = useMemo(() => {
    return {
      position: productGamingControlColorPosition,
      cursor: productGamingControlColorCursor,
    };
  }, [productGamingControlColorPosition, productGamingControlColorCursor]);

  const gP11PRD31IconStyle = useMemo(() => {
    return {
      top: gP11PRD31IconTop,
      left: gP11PRD31IconLeft,
      height: gP11PRD31IconHeight,
    };
  }, [gP11PRD31IconTop, gP11PRD31IconLeft, gP11PRD31IconHeight]);

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
    <div
      className="productgaming-control-color-c"
      style={productGamingControlColorCStyle}
      onClick={onCartContainer20Click}
    >
      <div className="cart10">
        <div className="fill-heart-group">
          <img className="fill-heart-icon1" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon1" alt="" src={fillEye} />
        </div>
        <NewButton
          newButtonPosition="absolute"
          newButtonTop="12px"
          newButtonLeft="12px"
        />
        <div className="gp11-prd3-1-container">
          <img
            className="gp11-prd3-1-icon1"
            alt=""
            src={gP11PRD31}
            style={gP11PRD31IconStyle}
          />
        </div>
      </div>
      <div className="gp11-shooter-usb-gamepad-group">
        <div className="gp11-shooter-usb1">{gP11ShooterUSBGamepad}</div>
        <div className="frame-parent5">
          <div className="wrapper5">
            <div className="gp11-shooter-usb1">{prop}</div>
          </div>
          <div className="four-half-star-group">
            <FourHalfStar
              starHalfFilled="/starhalffilled.svg"
              fourHalfStarPosition="unset"
            />
            <div className="div23">{prop1}</div>
          </div>
        </div>
        <ColourChnage
          group1000005935="/group-10000059351.svg"
          colourChnagePosition="unset"
          ellipseDivBackgroundColor="#db4444"
        />
      </div>
    </div>
  );
};

export default ProductGamingControlColorC;
