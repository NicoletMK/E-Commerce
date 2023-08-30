import { useMemo } from "react";
import ProductLaptopNoDiscount from "./ProductLaptopNoDiscount";
import ProductDslrCameraNoDiscoun from "./ProductDslrCameraNoDiscoun";
import CartWithFlatDiscountCart from "./CartWithFlatDiscountCart";
import ProductGamingControlColorC from "./ProductGamingControlColorC";
import ProductManJacketColorChoos from "./ProductManJacketColorChoos";
import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import "./ExploreOurProductsContainer.css";
const ExploreOurProductsContainer = ({
  dimension,
  imageDimensions,
  imageDimensions2,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  imageDimensionsText4,
  imageDimensionsText5,
  imageDimensionsText6,
  imageDimensionsText7,
  propCursor,
  onCartContainer20Click,
}) => {
  const productGamingControlColorCStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className="frame-parent62">
      <div className="frame-parent63">
        <div className="frame-parent64">
          <div className="frame-parent65">
            <div className="instance-parent3">
              <div className="rectangle-wrapper1">
                <div className="instance-child1" />
              </div>
              <div className="our-products">Our Products</div>
            </div>
            <div className="explore-our-products">Explore Our Products</div>
          </div>
          <div className="fill-with-left-arrow-container">
            <img
              className="fill-with-left-arrow3"
              alt=""
              src="/fill-with-left-arrow.svg"
            />
            <img
              className="fill-with-left-arrow3"
              alt=""
              src="/fill-with-right-arrow.svg"
            />
          </div>
        </div>
        <div className="frame-parent66">
          <div className="cart-parent1">
            <ProductLaptopNoDiscount
              fillEye="/fill-eye3.svg"
              ideapadGaming3i01500x5001="/71rdoexxtrl-1@2x.png"
              aSUSFHDGamingLaptop="Breed Dry Dog Food"
              prop="$100"
              vector="/vector2.svg"
              vector1="/vector2.svg"
              prop1="(35)"
              productLaptopNoDiscountPosition="unset"
              ideapadGaming3i01500x5001Left="38px"
              ideapadGaming3i01500x5001Width="115px"
              vectorIconOpacity="0.25"
              vectorIconOpacity1="0.25"
              divWidth="32px"
            />
            <ProductDslrCameraNoDiscoun
              fillEye="/fill-eye3.svg"
              productDslrCameraNoDiscouPosition="unset"
            />
            <ProductLaptopNoDiscount
              fillEye="/fill-eye3.svg"
              ideapadGaming3i01500x5001="/ideapadgaming3i01500x500-11@2x.png"
              aSUSFHDGamingLaptop="ASUS FHD Gaming Laptop"
              prop="$700"
              vector="/vector.svg"
              vector1="/vector.svg"
              prop1="(325)"
              productLaptopNoDiscountPosition="unset"
              ideapadGaming3i01500x5001Left="9px"
              ideapadGaming3i01500x5001Width="172px"
              vectorIconOpacity="unset"
              vectorIconOpacity1="unset"
              divWidth="40px"
            />
            <CartWithFlatDiscountCart dimensionCode="/fill-eye3.svg" />
          </div>
          <div className="cart-parent1">
            <ProductGamingControlColorC
              fillEye="/fill-eye3.svg"
              gP11PRD31="/newmercedesbenzgtrlicensedrideoncarkidselectrictoycar-1@2x.png"
              gP11ShooterUSBGamepad="Kids Electric Car"
              prop="$960"
              starHalfFilled="/vector.svg"
              prop1="(65)"
              group1000005935="/group-10000059354.svg"
              productGamingControlColorPosition="unset"
              productGamingControlColorCursor="unset"
              gP11PRD31IconTop="calc(50% - 66px)"
              gP11PRD31IconLeft="calc(50% - 90px)"
              gP11PRD31IconHeight="133px"
              starHalfFilledIconOverflow="unset"
              starHalfFilledIconFlexShrink="unset"
              starHalfFilledIconBorderRadius="1.4px"
            />
            <ProductManJacketColorChoos
              fillEye="/fill-eye3.svg"
              z8A1X34750011000000Ligh="/copa-sense-1@2x.png"
              quiltedSatinJacket="Jr. Zoom Soccer Cleats"
              prop="$1160"
              starHalfFilled="/vector.svg"
              prop1="(35)"
              group1000005935="/group-10000059352.svg"
              productManJacketColorChooPosition="unset"
              z8A1X34750011000000LightITop="8px"
              z8A1X34750011000000LightIWidth="186px"
              z8A1X34750011000000LightIHeight="164px"
              starHalfFilledIconOverflow="unset"
              starHalfFilledIconFlexShrink="unset"
              starHalfFilledIconBorderRadius="1.4px"
            />
            <ProductGamingControlColorC
              fillEye="/fill-eye3.svg"
              gP11PRD31="/gp11-prd3-1@2x.png"
              gP11ShooterUSBGamepad="GP11 Shooter USB Gamepad"
              prop="$660"
              starHalfFilled="/starhalffilled6.svg"
              prop1="(55)"
              group1000005935="/group-10000059351.svg"
              productGamingControlColorPosition="unset"
              productGamingControlColorCursor="unset"
              gP11PRD31IconTop="15px"
              gP11PRD31IconLeft="6px"
              gP11PRD31IconHeight="150px"
              starHalfFilledIconOverflow="hidden"
              starHalfFilledIconFlexShrink="0"
              starHalfFilledIconBorderRadius="unset"
            />
            <ProductManJacketColorChoos
              fillEye="/fill-eye3.svg"
              z8A1X34750011000000Ligh="/698717-z8a1x-3475-001-100-0000-lightreversiblequiltedsatinjacket-1@2x.png"
              quiltedSatinJacket="Quilted Satin Jacket"
              prop="$660"
              starHalfFilled="/starhalffilled6.svg"
              prop1="(55)"
              group1000005935="/group-1000005935.svg"
              productManJacketColorChooPosition="unset"
              z8A1X34750011000000LightITop="2px"
              z8A1X34750011000000LightIWidth="182px"
              z8A1X34750011000000LightIHeight="176px"
              starHalfFilledIconOverflow="hidden"
              starHalfFilledIconFlexShrink="0"
              starHalfFilledIconBorderRadius="unset"
            />
          </div>
        </div>
      </div>
      <ButtonSmallHoverNo
        addToCart="View All Products"
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

export default ExploreOurProductsContainer;
