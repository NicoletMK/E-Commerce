import { useMemo } from "react";
import QuantityQuantity2 from "./QuantityQuantity2";
import MonitorCartSmall from "./MonitorCartSmall";
import "./CartSection.css";
const CartSection = ({
  prop,
  prop1,
  prop2,
  dropUpSmall,
  dropDownSmall,
  g27cq4500x5001,
  lCDMonitor,
  showIconCancel,
  cartSectionFlexShrink,
  frameDivGap,
  g27cq4500x5001IconHeight,
  g27cq4500x5001IconWidth,
  g27cq4500x5001IconTop,
  g27cq4500x5001IconRight,
  g27cq4500x5001IconBottom,
  g27cq4500x5001IconLeft,
}) => {
  const cartSectionStyle = useMemo(() => {
    return {
      flexShrink: cartSectionFlexShrink,
    };
  }, [cartSectionFlexShrink]);

  const frameDivStyle = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const g27cq4500x5001IconStyle = useMemo(() => {
    return {
      height: g27cq4500x5001IconHeight,
      width: g27cq4500x5001IconWidth,
      top: g27cq4500x5001IconTop,
      right: g27cq4500x5001IconRight,
      bottom: g27cq4500x5001IconBottom,
      left: g27cq4500x5001IconLeft,
    };
  }, [
    g27cq4500x5001IconHeight,
    g27cq4500x5001IconWidth,
    g27cq4500x5001IconTop,
    g27cq4500x5001IconRight,
    g27cq4500x5001IconBottom,
    g27cq4500x5001IconLeft,
  ]);

  return (
    <div className="cart-section" style={cartSectionStyle}>
      <div className="div4">{prop}</div>
      <div className="div5">{prop1}</div>
      <QuantityQuantity2
        prop="01"
        dropUpSmall="/dropupsmall1.svg"
        dropDownSmall="/dropdownsmall1.svg"
        quantityQuantity2Position="absolute"
        quantityQuantity2Top="27.5px"
        quantityQuantity2Left="708.5px"
        frameDivGap="16px"
      />
      <MonitorCartSmall
        monitorCartSmallPosition="absolute"
        monitorCartSmallTop="calc(50% - 27px)"
        monitorCartSmallLeft="calc(50% - 545px)"
        monitorCartSmallFlexShrink="unset"
      />
      <div className="lcd-monitor">{lCDMonitor}</div>
      {showIconCancel && (
        <img className="icon-cancel1" alt="" src="/iconcancel.svg" />
      )}
    </div>
  );
};

export default CartSection;
