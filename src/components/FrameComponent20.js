import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import ProductWishlistCartWithDis from "./ProductWishlistCartWithDis";
import ProductJacketWithWishlist from "./ProductJacketWithWishlist";
import "./FrameComponent20.css";
const FrameComponent20 = () => {
  return (
    <div className="frame-parent47">
      <div className="wishlist-4-parent">
        <div className="wishlist-4">Wishlist (4)</div>
        <ButtonSmallHoverNo
          addToCart="Move All To Bag"
          buttonSmallHoverNoPosition="unset"
          buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
          buttonSmallHoverNoTop="unset"
          buttonSmallHoverNoLeft="unset"
          buttonSmallHoverNoBackgroundColor="unset"
          buttonSmallHoverNoBorder="1px solid var(--color-gray-400)"
          addToCartColor="0.5px solid #000"
        />
      </div>
      <div className="cart-parent">
        <ProductWishlistCartWithDis productWishlistCartWithDiPosition="unset" />
        <ProductJacketWithWishlist
          z8A1X34750011000000Ligh="/gammaxxl240argb1500x500-1@2x.png"
          quiltedSatinJacket="RGB liquid CPU Cooler"
          prop="$1960"
          productJacketWithWishlistPosition="unset"
          frameDivTop="calc(50% - 107px)"
          z8A1X34750011000000LightITop="calc(50% - 43px)"
          z8A1X34750011000000LightIWidth="191px"
          z8A1X34750011000000LightIHeight="95px"
          z8A1X34750011000000LightILeft="calc(50% - 95px)"
        />
        <ProductJacketWithWishlist
          z8A1X34750011000000Ligh="/gp11-prd3-1@2x.png"
          quiltedSatinJacket="GP11 Shooter USB Gamepad"
          prop="$550"
          productJacketWithWishlistPosition="unset"
          frameDivTop="calc(50% - 103px)"
          z8A1X34750011000000LightITop="15px"
          z8A1X34750011000000LightIWidth="178px"
          z8A1X34750011000000LightIHeight="150px"
          z8A1X34750011000000LightILeft="6px"
        />
        <ProductJacketWithWishlist
          z8A1X34750011000000Ligh="/698717-z8a1x-3475-001-100-0000-lightreversiblequiltedsatinjacket-1@2x.png"
          quiltedSatinJacket="Quilted Satin Jacket"
          prop="$750"
          productJacketWithWishlistPosition="unset"
          frameDivTop="calc(50% - 103px)"
          z8A1X34750011000000LightITop="2px"
          z8A1X34750011000000LightIWidth="182px"
          z8A1X34750011000000LightIHeight="176px"
          z8A1X34750011000000LightILeft="4px"
        />
      </div>
    </div>
  );
};

export default FrameComponent20;
