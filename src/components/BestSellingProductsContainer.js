import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import ProductBestsellingCoolingFa from "./ProductBestsellingCoolingFa";
import ProductBestsellingBookself from "./ProductBestsellingBookself";
import "./BestSellingProductsContainer.css";
const BestSellingProductsContainer = ({
  dimensionLabel,
  dimensionValue,
  dimensionText,
  dimensionCode,
  dimensionCodeText,
  dimensionValueText,
}) => {
  return (
    <div className="frame-parent59">
      <div className="frame-parent60">
        <div className="frame-parent61">
          <div className="instance-parent2">
            <div className="rectangle-frame">
              <div className="instance-inner" />
            </div>
            <div className="this-month">This Month</div>
          </div>
          <div className="best-selling-products">Best Selling Products</div>
        </div>
        <ButtonSmallHoverNo
          addToCart="View All"
          buttonSmallHoverNoPosition="unset"
          buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
          buttonSmallHoverNoTop="unset"
          buttonSmallHoverNoLeft="unset"
          buttonSmallHoverNoBackgroundColor="#db4444"
          buttonSmallHoverNoBorder="unset"
          addToCartColor="#fafafa"
        />
      </div>
      <div className="cart-container">
        <ProductBestsellingCoolingFa
          fillEye="/fill-eye3.svg"
          gammaxxL240Argb1500x5001="/672462-zah9d-5626-002-100-0000-lightthenorthfacexguccicoat-1@2x.png"
          rGBLiquidCPUCooler="The north coat"
          prop="$260"
          prop1="$360"
          starHalfFilled="/vector.svg"
          productBestsellingCoolingPosition="unset"
          frameDivTop="calc(50% - 90px)"
          frameDivLeft="calc(50% - 95px)"
          gammaxxL240Argb1500x5001ITop="calc(50% - 73px)"
          gammaxxL240Argb1500x5001ILeft="calc(50% - 70px)"
          gammaxxL240Argb1500x5001IWidth="140px"
          gammaxxL240Argb1500x5001IHeight="146px"
          starHalfFilledIconOverflow="unset"
          starHalfFilledIconFlexShrink="unset"
          starHalfFilledIconBorderRadius="1.4px"
        />
        <ProductBestsellingCoolingFa
          fillEye="/fill-eye3.svg"
          gammaxxL240Argb1500x5001="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
          rGBLiquidCPUCooler="Gucci duffle bag"
          prop="$960"
          prop1="$1160"
          starHalfFilled="/starhalffilled5.svg"
          productBestsellingCoolingPosition="unset"
          frameDivTop="calc(50% - 90px)"
          frameDivLeft="calc(50% - 95px)"
          gammaxxL240Argb1500x5001ITop="calc(50% - 64px)"
          gammaxxL240Argb1500x5001ILeft="calc(50% - 89px)"
          gammaxxL240Argb1500x5001IWidth="178px"
          gammaxxL240Argb1500x5001IHeight="129px"
          starHalfFilledIconOverflow="hidden"
          starHalfFilledIconFlexShrink="0"
          starHalfFilledIconBorderRadius="unset"
        />
        <ProductBestsellingCoolingFa
          fillEye="/fill-eye3.svg"
          gammaxxL240Argb1500x5001="/gammaxxl240argb1500x500-1@2x.png"
          rGBLiquidCPUCooler="RGB liquid CPU Cooler"
          prop="$160"
          prop1="$170"
          starHalfFilled="/starhalffilled5.svg"
          productBestsellingCoolingPosition="unset"
          frameDivTop="35px"
          frameDivLeft="40px"
          gammaxxL240Argb1500x5001ITop="calc(50% - 43px)"
          gammaxxL240Argb1500x5001ILeft="calc(50% - 95px)"
          gammaxxL240Argb1500x5001IWidth="191px"
          gammaxxL240Argb1500x5001IHeight="95px"
          starHalfFilledIconOverflow="hidden"
          starHalfFilledIconFlexShrink="0"
          starHalfFilledIconBorderRadius="unset"
        />
        <ProductBestsellingBookself
          fillEye="/fill-eye3.svg"
          productBestsellingBookselPosition="unset"
        />
      </div>
    </div>
  );
};

export default BestSellingProductsContainer;
