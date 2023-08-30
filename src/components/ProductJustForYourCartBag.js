import { useMemo } from "react";
import DiscountPercent from "./DiscountPercent";
import BottomFooter from "./BottomFooter";
import "./ProductJustForYourCartBag.css";
const ProductJustForYourCartBag = ({
  fillEye,
  productJustForYourCartBagPosition,
}) => {
  const productJustForYourCartBagStyle = useMemo(() => {
    return {
      position: productJustForYourCartBagPosition,
    };
  }, [productJustForYourCartBagPosition]);

  return (
    <div
      className="productjust-for-your-cart-bag"
      style={productJustForYourCartBagStyle}
    >
      <div className="cart3">
        <div className="rectangle-div" />
        <div className="frame-div">
          <img className="fill-eye-icon3" alt="" src={fillEye} />
        </div>
        <DiscountPercent
          prop="-35%"
          discountPercentPosition="absolute"
          discountPercentTop="12px"
          discountPercentLeft="12px"
        />
        <div className="cart1-parent1">
          <img className="cart1-icon3" alt="" src="/cart1.svg" />
          <div className="add-to-cart4">Add To Cart</div>
        </div>
        <div className="ideapad-gaming-3i-01-500x500-1-wrapper">
          <img
            className="ideapad-gaming-3i-01-500x500-1-icon"
            alt=""
            src="/ideapadgaming3i01500x500-1@2x.png"
          />
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default ProductJustForYourCartBag;
