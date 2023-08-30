import { useMemo } from "react";
import NewButton from "./NewButton";
import FiveStar from "./FiveStar";
import "./ProductJustForYourCartGam.css";
const ProductJustForYourCartGam = ({
  fillEye,
  productJustForYourCartGamPosition,
}) => {
  const productJustForYourCartGamStyle = useMemo(() => {
    return {
      position: productJustForYourCartGamPosition,
    };
  }, [productJustForYourCartGamPosition]);

  return (
    <div
      className="productjust-for-your-cart-gam"
      style={productJustForYourCartGamStyle}
    >
      <div className="cart1">
        <div className="cart-item" />
        <div className="fill-eye-container">
          <img className="fill-eye-icon1" alt="" src={fillEye} />
        </div>
        <NewButton
          newButtonPosition="absolute"
          newButtonTop="12px"
          newButtonLeft="12px"
        />
        <div className="cart1-group">
          <img className="cart1-icon1" alt="" src="/cart1.svg" />
          <div className="add-to-cart2">Add To Cart</div>
        </div>
        <div className="g92-2-500x500-1-wrapper">
          <img
            className="g92-2-500x500-1-icon1"
            alt=""
            src="/g922500x500-11@2x.png"
          />
        </div>
      </div>
      <div className="havit-hv-g92-gamepad-parent">
        <div className="havit-hv-g92-gamepad">HAVIT HV-G92 Gamepad</div>
        <div className="container">
          <div className="havit-hv-g92-gamepad">$560</div>
        </div>
        <div className="five-star-group">
          <FiveStar fiveStarPosition="unset" />
          <div className="div9">(65)</div>
        </div>
      </div>
    </div>
  );
};

export default ProductJustForYourCartGam;
