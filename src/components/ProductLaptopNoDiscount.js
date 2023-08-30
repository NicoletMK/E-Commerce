import { useMemo } from "react";
import FiveStar from "./FiveStar";
import "./ProductLaptopNoDiscount.css";
const ProductLaptopNoDiscount = ({
  fillEye,
  ideapadGaming3i01500x5001,
  aSUSFHDGamingLaptop,
  prop,
  vector,
  vector1,
  prop1,
  productLaptopNoDiscountPosition,
  ideapadGaming3i01500x5001Left,
  ideapadGaming3i01500x5001Width,
  vectorIconOpacity,
  vectorIconOpacity1,
  divWidth,
}) => {
  const productLaptopNoDiscountStyle = useMemo(() => {
    return {
      position: productLaptopNoDiscountPosition,
    };
  }, [productLaptopNoDiscountPosition]);

  const ideapadGaming3i01500x5001IconStyle = useMemo(() => {
    return {
      left: ideapadGaming3i01500x5001Left,
      width: ideapadGaming3i01500x5001Width,
    };
  }, [ideapadGaming3i01500x5001Left, ideapadGaming3i01500x5001Width]);

  const vectorIconStyle = useMemo(() => {
    return {
      opacity: vectorIconOpacity,
    };
  }, [vectorIconOpacity]);

  const vectorIcon1Style = useMemo(() => {
    return {
      opacity: vectorIconOpacity1,
    };
  }, [vectorIconOpacity1]);

  const divStyle = useMemo(() => {
    return {
      width: divWidth,
    };
  }, [divWidth]);

  return (
    <div
      className="productlaptop-no-discount"
      style={productLaptopNoDiscountStyle}
    >
      <div className="cart13">
        <div className="fill-heart-parent2">
          <img className="fill-heart-icon4" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon4" alt="" src={fillEye} />
        </div>
        <div className="ideapad-gaming-3i-01-500x500-1-container">
          <img
            className="ideapad-gaming-3i-01-500x500-1-icon1"
            alt=""
            src={ideapadGaming3i01500x5001}
            style={ideapadGaming3i01500x5001IconStyle}
          />
        </div>
      </div>
      <div className="asus-fhd-gaming-laptop-parent">
        <div className="asus-fhd-gaming">{aSUSFHDGamingLaptop}</div>
        <div className="frame-parent8">
          <div className="wrapper8">
            <div className="asus-fhd-gaming">{prop}</div>
          </div>
          <div className="five-star-parent3">
            <FiveStar fiveStarPosition="unset" />
            <div className="div29" style={divStyle}>
              {prop1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLaptopNoDiscount;
