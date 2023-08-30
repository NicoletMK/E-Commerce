import { useMemo } from "react";
import FourStar from "./FourStar";
import "./ProductDslrCameraNoDiscoun.css";
const ProductDslrCameraNoDiscoun = ({
  fillEye,
  productDslrCameraNoDiscouPosition,
}) => {
  const productDslrCameraNoDiscounStyle = useMemo(() => {
    return {
      position: productDslrCameraNoDiscouPosition,
    };
  }, [productDslrCameraNoDiscouPosition]);

  return (
    <div
      className="productdslr-camera-no-discoun"
      style={productDslrCameraNoDiscounStyle}
    >
      <div className="cart14">
        <div className="cart-child5" />
        <div className="add-to-cart9">Add To Cart</div>
        <div className="fill-heart-parent3">
          <img className="fill-heart-icon5" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon5" alt="" src={fillEye} />
        </div>
        <div className="eos-250d-03-500x500-1-wrapper">
          <img
            className="eos-250d-03-500x500-1-icon"
            alt=""
            src="/eos250d03500x500-1@2x.png"
          />
        </div>
      </div>
      <div className="canon-eos-dslr-camera-parent">
        <div className="canon-eos-dslr">CANON EOS DSLR Camera</div>
        <div className="frame-parent9">
          <div className="wrapper9">
            <div className="canon-eos-dslr">$360</div>
          </div>
          <div className="four-star-parent">
            <FourStar fourStarPosition="unset" />
            <div className="div31">(95)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDslrCameraNoDiscoun;
