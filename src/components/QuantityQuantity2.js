import { useMemo } from "react";
import "./QuantityQuantity2.css";
const QuantityQuantity2 = ({
  prop,
  dropUpSmall,
  dropDownSmall,
  quantityQuantity2Position,
  quantityQuantity2Top,
  quantityQuantity2Left,
  frameDivGap,
}) => {
  const quantityQuantity2Style = useMemo(() => {
    return {
      position: quantityQuantity2Position,
      top: quantityQuantity2Top,
      left: quantityQuantity2Left,
    };
  }, [quantityQuantity2Position, quantityQuantity2Top, quantityQuantity2Left]);

  const frameDivStyle = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  return (
    <div className="quantityquantity2" style={quantityQuantity2Style}>
      <div className="parent" style={frameDivStyle}>
        <div className="div2">{prop}</div>
        <div className="drop-up-small-parent">
          <img className="drop-up-small-icon" alt="" src={dropUpSmall} />
          <img className="drop-up-small-icon" alt="" src={dropDownSmall} />
        </div>
      </div>
    </div>
  );
};

export default QuantityQuantity2;
