import { useMemo } from "react";
import ServicesMoneyBack from "./ServicesMoneyBack";
import "./ServicesMoneyBack1.css";
const ServicesMoneyBack1 = ({
  services,
  mONEYBACKGUARANTEE,
  weReurnMoneyWithin30Days,
  servicesMoneyBackPosition,
  servicesMoneyBackTop,
  servicesMoneyBackLeft,
  frameDivGap,
  mONEYBACKGUARANTEEFontSize,
  mONEYBACKGUARANTEEFontWeight,
  mONEYBACKGUARANTEEFontFamily,
  mONEYBACKGUARANTEELetterSpacing,
  mONEYBACKGUARANTEEColor,
  weReurnMoneyColor,
}) => {
  const servicesMoneyBackStyle = useMemo(() => {
    return {
      position: servicesMoneyBackPosition,
      top: servicesMoneyBackTop,
      left: servicesMoneyBackLeft,
    };
  }, [servicesMoneyBackPosition, servicesMoneyBackTop, servicesMoneyBackLeft]);

  const frameDiv2Style = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const mONEYBACKGUARANTEEStyle = useMemo(() => {
    return {
      fontSize: mONEYBACKGUARANTEEFontSize,
      fontWeight: mONEYBACKGUARANTEEFontWeight,
      fontFamily: mONEYBACKGUARANTEEFontFamily,
      letterSpacing: mONEYBACKGUARANTEELetterSpacing,
      color: mONEYBACKGUARANTEEColor,
    };
  }, [
    mONEYBACKGUARANTEEFontSize,
    mONEYBACKGUARANTEEFontWeight,
    mONEYBACKGUARANTEEFontFamily,
    mONEYBACKGUARANTEELetterSpacing,
    mONEYBACKGUARANTEEColor,
  ]);

  const weReurnMoneyStyle = useMemo(() => {
    return {
      color: weReurnMoneyColor,
    };
  }, [weReurnMoneyColor]);

  return (
    <div className="services-money-back" style={servicesMoneyBackStyle}>
      <ServicesMoneyBack servicesMoneyBackServices="/services.svg" />
      <div className="money-back-guarantee-parent" style={frameDiv2Style}>
        <div className="money-back-guarantee" style={mONEYBACKGUARANTEEStyle}>
          {mONEYBACKGUARANTEE}
        </div>
        <div className="we-reurn-money" style={weReurnMoneyStyle}>
          {weReurnMoneyWithin30Days}
        </div>
      </div>
    </div>
  );
};

export default ServicesMoneyBack1;
