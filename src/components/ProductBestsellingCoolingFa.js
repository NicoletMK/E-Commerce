import { useMemo } from "react";
import FourHalfStar from "./FourHalfStar";
import "./ProductBestsellingCoolingFa.css";
const ProductBestsellingCoolingFa = ({
  fillEye,
  gammaxxL240Argb1500x5001,
  rGBLiquidCPUCooler,
  prop,
  prop1,
  starHalfFilled,
  productBestsellingCoolingPosition,
  frameDivTop,
  frameDivLeft,
  gammaxxL240Argb1500x5001ITop,
  gammaxxL240Argb1500x5001ILeft,
  gammaxxL240Argb1500x5001IWidth,
  gammaxxL240Argb1500x5001IHeight,
  starHalfFilledIconOverflow,
  starHalfFilledIconFlexShrink,
  starHalfFilledIconBorderRadius,
}) => {
  const productBestsellingCoolingFaStyle = useMemo(() => {
    return {
      position: productBestsellingCoolingPosition,
    };
  }, [productBestsellingCoolingPosition]);

  const frameDiv5Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  const gammaxxL240Argb1500x5001IconStyle = useMemo(() => {
    return {
      top: gammaxxL240Argb1500x5001ITop,
      left: gammaxxL240Argb1500x5001ILeft,
      width: gammaxxL240Argb1500x5001IWidth,
      height: gammaxxL240Argb1500x5001IHeight,
    };
  }, [
    gammaxxL240Argb1500x5001ITop,
    gammaxxL240Argb1500x5001ILeft,
    gammaxxL240Argb1500x5001IWidth,
    gammaxxL240Argb1500x5001IHeight,
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
      className="productbestselling-cooling-fa"
      style={productBestsellingCoolingFaStyle}
    >
      <div className="cart17">
        <div className="fill-heart-parent6">
          <img className="fill-heart-icon8" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon8" alt="" src={fillEye} />
        </div>
        <div
          className="gammaxx-l240-argb-1-500x500-1-container"
          style={frameDiv5Style}
        >
          <img
            className="gammaxx-l240-argb-1-500x500-1-icon1"
            alt=""
            src={gammaxxL240Argb1500x5001}
            style={gammaxxL240Argb1500x5001IconStyle}
          />
        </div>
      </div>
      <div className="rgb-liquid-cpu-cooler-group">
        <div className="rgb-liquid-cpu1">{rGBLiquidCPUCooler}</div>
        <div className="parent2">
          <div className="rgb-liquid-cpu1">{prop}</div>
          <div className="div37">{prop1}</div>
        </div>
        <div className="four-half-star-container">
          <FourHalfStar
            starHalfFilled="/starhalffilled1.svg"
            fourHalfStarPosition="unset"
          />
          <div className="div38">(65)</div>
        </div>
      </div>
    </div>
  );
};

export default ProductBestsellingCoolingFa;
