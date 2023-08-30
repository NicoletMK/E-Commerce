import { useMemo } from "react";
import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import "./CouponCode.css";
const CouponCode = ({ couponCodePosition }) => {
  const couponCodeStyle = useMemo(() => {
    return {
      position: couponCodePosition,
    };
  }, [couponCodePosition]);

  return (
    <div className="coupon-code" style={couponCodeStyle}>
      <div className="coupon-code-wrapper">
        <div className="coupon-code1">Coupon Code</div>
      </div>
      <ButtonSmallHoverNo
        addToCart="Apply Coupon"
        buttonSmallHoverNoPosition="unset"
        buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
        buttonSmallHoverNoTop="unset"
        buttonSmallHoverNoLeft="unset"
        buttonSmallHoverNoBackgroundColor="#db4444"
        buttonSmallHoverNoBorder="unset"
        addToCartColor="#fafafa"
      />
    </div>
  );
};

export default CouponCode;
