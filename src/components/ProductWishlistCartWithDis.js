import { useMemo } from "react";
import DiscountPercent from "./DiscountPercent";
import "./ProductWishlistCartWithDis.css";
const ProductWishlistCartWithDis = ({ productWishlistCartWithDiPosition }) => {
  const productWishlistCartWithDisStyle = useMemo(() => {
    return {
      position: productWishlistCartWithDiPosition,
    };
  }, [productWishlistCartWithDiPosition]);

  return (
    <div
      className="productwishlist-cart-with-dis"
      style={productWishlistCartWithDisStyle}
    >
      <div className="cart7">
        <div className="cart-child4" />
        <div className="fill-eye-wrapper4">
          <img className="fill-eye-icon7" alt="" src="/fill-eye1.svg" />
        </div>
        <DiscountPercent
          prop="-35%"
          discountPercentPosition="absolute"
          discountPercentTop="12px"
          discountPercentLeft="12px"
        />
        <div className="c2st-8746-001-082-0000-light-g-wrapper">
          <img
            className="c2st-8746-001-082-0000-light-g-icon"
            alt=""
            src="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
          />
        </div>
        <div className="cart1-parent5">
          <img className="cart1-icon7" alt="" src="/cart11.svg" />
          <div className="add-to-cart8">Add To Cart</div>
        </div>
      </div>
      <div className="gucci-duffle-bag-parent">
        <div className="gucci-duffle-bag">Gucci duffle bag</div>
        <div className="parent1">
          <div className="gucci-duffle-bag">$960</div>
          <div className="div16">$1160</div>
        </div>
      </div>
    </div>
  );
};

export default ProductWishlistCartWithDis;
