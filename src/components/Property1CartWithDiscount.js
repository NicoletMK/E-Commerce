import { useMemo } from "react";
import DiscountPercent from "./DiscountPercent";
import FourStar from "./FourStar";
import "./Property1CartWithDiscount.css";
const Property1CartWithDiscount = ({
  fillEye,
  property1CartWithDiscountPosition,
}) => {
  const property1CartWithDiscountStyle = useMemo(() => {
    return {
      position: property1CartWithDiscountPosition,
    };
  }, [property1CartWithDiscountPosition]);

  return (
    <div
      className="property-1cart-with-discount"
      style={property1CartWithDiscountStyle}
    >
      <div className="discount-percent-container">
        <DiscountPercent
          prop="-35%"
          discountPercentPosition="absolute"
          discountPercentTop="12px"
          discountPercentLeft="12px"
        />
        <div className="frame-child1" />
        <div className="add-to-cart10">Add To Cart</div>
        <div className="fill-heart-parent11">
          <img className="fill-heart-icon13" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon13" alt="" src={fillEye} />
        </div>
        <div className="ak-900-01-500x500-1-container">
          <img
            className="ak-900-01-500x500-1-icon1"
            alt=""
            src="/ak90001500x500-1@2x.png"
          />
        </div>
      </div>
      <div className="ak-900-wired-keyboard-group">
        <div className="ak-900-wired-keyboard1">AK-900 Wired Keyboard</div>
        <div className="parent7">
          <div className="ak-900-wired-keyboard1">$960</div>
          <div className="div52">$1160</div>
        </div>
        <div className="four-star-group">
          <FourStar fourStarPosition="unset" />
          <div className="div53">(75)</div>
        </div>
      </div>
    </div>
  );
};

export default Property1CartWithDiscount;
