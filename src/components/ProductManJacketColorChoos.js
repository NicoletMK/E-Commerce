import { useMemo } from "react";
import FourHalfStar from "./FourHalfStar";
import ColourChnage from "./ColourChnage";
import "./ProductManJacketColorChoos.css";
const ProductManJacketColorChoos = ({
  fillEye,
  z8A1X34750011000000Ligh,
  quiltedSatinJacket,
  prop,
  starHalfFilled,
  prop1,
  group1000005935,
  productManJacketColorChooPosition,
  z8A1X34750011000000LightITop,
  z8A1X34750011000000LightIWidth,
  z8A1X34750011000000LightIHeight,
  starHalfFilledIconOverflow,
  starHalfFilledIconFlexShrink,
  starHalfFilledIconBorderRadius,
}) => {
  const productManJacketColorChoosStyle = useMemo(() => {
    return {
      position: productManJacketColorChooPosition,
    };
  }, [productManJacketColorChooPosition]);

  const z8A1X34750011000000LightIcon1Style = useMemo(() => {
    return {
      top: z8A1X34750011000000LightITop,
      width: z8A1X34750011000000LightIWidth,
      height: z8A1X34750011000000LightIHeight,
    };
  }, [
    z8A1X34750011000000LightITop,
    z8A1X34750011000000LightIWidth,
    z8A1X34750011000000LightIHeight,
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
    <div
      className="productman-jacket-color-choos"
      style={productManJacketColorChoosStyle}
    >
      <div className="cart9">
        <div className="fill-heart-parent">
          <img className="fill-heart-icon" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon" alt="" src={fillEye} />
        </div>
        <div className="z8a1x-3475-001-100-0000-light-container">
          <img
            className="z8a1x-3475-001-100-0000-light-icon1"
            alt=""
            src={z8A1X34750011000000Ligh}
            style={z8A1X34750011000000LightIcon1Style}
          />
        </div>
      </div>
      <div className="quilted-satin-jacket-group">
        <div className="quilted-satin-jacket1">{quiltedSatinJacket}</div>
        <div className="frame-parent4">
          <div className="wrapper4">
            <div className="quilted-satin-jacket1">{prop}</div>
          </div>
          <div className="four-half-star-parent">
            <FourHalfStar
              starHalfFilled="/starhalffilled.svg"
              fourHalfStarPosition="unset"
            />
            <div className="div21">{prop1}</div>
          </div>
        </div>
        <ColourChnage
          group1000005935="/group-1000005935.svg"
          colourChnagePosition="unset"
          ellipseDivBackgroundColor="#db4444"
        />
      </div>
    </div>
  );
};

export default ProductManJacketColorChoos;
