import { useMemo } from "react";
import ServicesMoneyBack from "./ServicesMoneyBack";
import "./ServicesFastDelivery.css";
const ServicesFastDelivery = ({
  services,
  fREEANDFASTDELIVERY,
  freeDeliveryForAllOrdersO,
  servicesFastDeliveryPosition,
  servicesFastDeliveryTop,
  servicesFastDeliveryLeft,
  frameDivGap,
  fREEANDFASTFontSize,
  fREEANDFASTFontWeight,
  fREEANDFASTFontFamily,
  fREEANDFASTLetterSpacing,
}) => {
  const servicesFastDeliveryStyle = useMemo(() => {
    return {
      position: servicesFastDeliveryPosition,
      top: servicesFastDeliveryTop,
      left: servicesFastDeliveryLeft,
    };
  }, [
    servicesFastDeliveryPosition,
    servicesFastDeliveryTop,
    servicesFastDeliveryLeft,
  ]);

  const frameDiv4Style = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const fREEANDFASTStyle = useMemo(() => {
    return {
      fontSize: fREEANDFASTFontSize,
      fontWeight: fREEANDFASTFontWeight,
      fontFamily: fREEANDFASTFontFamily,
      letterSpacing: fREEANDFASTLetterSpacing,
    };
  }, [
    fREEANDFASTFontSize,
    fREEANDFASTFontWeight,
    fREEANDFASTFontFamily,
    fREEANDFASTLetterSpacing,
  ]);

  return (
    <div className="services-fast-delivery" style={servicesFastDeliveryStyle}>
      <ServicesMoneyBack servicesMoneyBackServices="/services1.svg" />
      <div className="free-and-fast-delivery-parent" style={frameDiv4Style}>
        <div className="free-and-fast" style={fREEANDFASTStyle}>
          {fREEANDFASTDELIVERY}
        </div>
        <div className="free-delivery-for">{freeDeliveryForAllOrdersO}</div>
      </div>
    </div>
  );
};

export default ServicesFastDelivery;
