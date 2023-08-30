import { useMemo } from "react";
import "./CartMainSection.css";
const CartMainSection = ({ cartMainSectionFlexShrink }) => {
  const cartMainSectionStyle = useMemo(() => {
    return {
      flexShrink: cartMainSectionFlexShrink,
    };
  }, [cartMainSectionFlexShrink]);

  return (
    <div className="cart-main-section" style={cartMainSectionStyle}>
      <div className="product-parent">
        <div className="product">Product</div>
        <div className="product">Price</div>
        <div className="product">Quantity</div>
        <div className="product">Subtotal</div>
      </div>
    </div>
  );
};

export default CartMainSection;
