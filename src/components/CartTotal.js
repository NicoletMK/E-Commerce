import { useMemo } from "react";
import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import UnderLineIcon from "./UnderLineIcon";
import "./CartTotal.css";
const CartTotal = ({ cartTotalFlexShrink }) => {
  const cartTotalStyle = useMemo(() => {
    return {
      flexShrink: cartTotalFlexShrink,
    };
  }, [cartTotalFlexShrink]);

  return (
    <div className="cart-total" style={cartTotalStyle}>
      <div className="cart-total1">Cart Total</div>
      <div className="subtotal-parent">
        <div className="subtotal">Subtotal:</div>
        <div className="subtotal">$1750</div>
      </div>
      <div className="shipping-parent">
        <div className="subtotal">Shipping:</div>
        <div className="subtotal">Free</div>
      </div>
      <div className="total-parent">
        <div className="subtotal">Total:</div>
        <div className="subtotal">$1750</div>
      </div>
      <ButtonSmallHoverNo
        addToCart="Procees to checkout"
        buttonSmallHoverNoPosition="absolute"
        buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
        buttonSmallHoverNoTop="236px"
        buttonSmallHoverNoLeft="89px"
        buttonSmallHoverNoBackgroundColor="#db4444"
        buttonSmallHoverNoBorder="unset"
        addToCartColor="#fafafa"
      />
      <UnderLineIcon
        underLineIconUnderLine="/underline2.svg"
        underLineIconWidth="422px"
        underLineIconPosition="absolute"
        underLineIconOpacity="0.4"
        underLineIconTop="123px"
        underLineIconLeft="24px"
      />
      <UnderLineIcon
        underLineIconUnderLine="/underline2.svg"
        underLineIconWidth="422px"
        underLineIconPosition="absolute"
        underLineIconOpacity="0.4"
        underLineIconTop="179px"
        underLineIconLeft="24px"
      />
    </div>
  );
};

export default CartTotal;
