import { useMemo } from "react";
import "./ProductJacketWithWishlist.css";
const ProductJacketWithWishlist = ({
  z8A1X34750011000000Ligh,
  quiltedSatinJacket,
  prop,
  productJacketWithWishlistPosition,
  frameDivTop,
  z8A1X34750011000000LightITop,
  z8A1X34750011000000LightIWidth,
  z8A1X34750011000000LightIHeight,
  z8A1X34750011000000LightILeft,
}) => {
  const productJacketWithWishlistStyle = useMemo(() => {
    return {
      position: productJacketWithWishlistPosition,
    };
  }, [productJacketWithWishlistPosition]);

  const frameDiv1Style = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  const z8A1X34750011000000LightIconStyle = useMemo(() => {
    return {
      top: z8A1X34750011000000LightITop,
      width: z8A1X34750011000000LightIWidth,
      height: z8A1X34750011000000LightIHeight,
      left: z8A1X34750011000000LightILeft,
    };
  }, [
    z8A1X34750011000000LightITop,
    z8A1X34750011000000LightIWidth,
    z8A1X34750011000000LightIHeight,
    z8A1X34750011000000LightILeft,
  ]);

  return (
    <div
      className="productjacket-with-wishlist"
      style={productJacketWithWishlistStyle}
    >
      <div className="cart4">
        <div className="cart-child1" />
        <div className="fill-eye-wrapper1">
          <img className="fill-eye-icon4" alt="" src="/fill-eye1.svg" />
        </div>
        <div className="cart1-parent2">
          <img className="cart1-icon4" alt="" src="/cart11.svg" />
          <div className="add-to-cart5">Add To Cart</div>
        </div>
        <div
          className="z8a1x-3475-001-100-0000-light-wrapper"
          style={frameDiv1Style}
        >
          <img
            className="z8a1x-3475-001-100-0000-light-icon"
            alt=""
            src={z8A1X34750011000000Ligh}
            style={z8A1X34750011000000LightIconStyle}
          />
        </div>
      </div>
      <div className="quilted-satin-jacket-parent">
        <div className="quilted-satin-jacket">{quiltedSatinJacket}</div>
        <div className="wrapper1">
          <div className="quilted-satin-jacket">{prop}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductJacketWithWishlist;
