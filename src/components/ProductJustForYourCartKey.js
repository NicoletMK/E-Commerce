import { useMemo } from "react";
import FiveStar from "./FiveStar";
import "./ProductJustForYourCartKey.css";
const ProductJustForYourCartKey = ({
  fillEye,
  ak90001500x5001,
  aK900WiredKeyboard,
  prop,
  productJustForYourCartKeyPosition,
  ak90001500x5001IconTop,
  ak90001500x5001IconLeft,
  ak90001500x5001IconWidth,
  ak90001500x5001IconHeight,
}) => {
  const productJustForYourCartKeyStyle = useMemo(() => {
    return {
      position: productJustForYourCartKeyPosition,
    };
  }, [productJustForYourCartKeyPosition]);

  const ak90001500x5001IconStyle = useMemo(() => {
    return {
      top: ak90001500x5001IconTop,
      left: ak90001500x5001IconLeft,
      width: ak90001500x5001IconWidth,
      height: ak90001500x5001IconHeight,
    };
  }, [
    ak90001500x5001IconTop,
    ak90001500x5001IconLeft,
    ak90001500x5001IconWidth,
    ak90001500x5001IconHeight,
  ]);

  return (
    <div
      className="productjust-for-your-cart-key"
      style={productJustForYourCartKeyStyle}
    >
      <div className="cart">
        <div className="cart-child" />
        <div className="fill-eye-wrapper">
          <img className="fill-eye-icon" alt="" src={fillEye} />
        </div>
        <div className="cart1-parent">
          <img className="cart1-icon" alt="" src="/cart1.svg" />
          <div className="add-to-cart1">Add To Cart</div>
        </div>
        <div className="ak-900-01-500x500-1-wrapper">
          <img
            className="ak-900-01-500x500-1-icon"
            alt=""
            src={ak90001500x5001}
            style={ak90001500x5001IconStyle}
          />
        </div>
      </div>
      <div className="ak-900-wired-keyboard-parent">
        <div className="ak-900-wired-keyboard">{aK900WiredKeyboard}</div>
        <div className="wrapper">
          <div className="ak-900-wired-keyboard">{prop}</div>
        </div>
        <div className="five-star-parent">
          <FiveStar fiveStarPosition="unset" />
          <div className="div7">(65)</div>
        </div>
      </div>
    </div>
  );
};

export default ProductJustForYourCartKey;
