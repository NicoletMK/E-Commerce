import CartMainSection from "./CartMainSection";
import CartSection from "./CartSection";
import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import "./FrameComponent18.css";
const FrameComponent18 = () => {
  return (
    <div className="frame-parent46">
      <div className="cart-main-section-parent">
        <CartMainSection cartMainSectionFlexShrink="0" />
        <CartSection
          prop="$650"
          prop1="$650"
          prop2="01"
          dropUpSmall="/dropupsmall2.svg"
          dropDownSmall="/dropdownsmall2.svg"
          g27cq4500x5001="/g27cq4500x500-1@2x.png"
          lCDMonitor="LCD Monitor"
          showIconCancel
          cartSectionFlexShrink="0"
          frameDivGap="16px"
          g27cq4500x5001IconHeight="72.22%"
          g27cq4500x5001IconWidth="92.59%"
          g27cq4500x5001IconTop="14.81%"
          g27cq4500x5001IconRight="3.7%"
          g27cq4500x5001IconBottom="12.96%"
          g27cq4500x5001IconLeft="3.7%"
        />
        <CartSection
          prop="$550"
          prop1="$1100"
          prop2="02"
          dropUpSmall="/dropupsmall2.svg"
          dropDownSmall="/dropdownsmall2.svg"
          g27cq4500x5001="/g922500x500-1@2x.png"
          lCDMonitor="H1 Gamepad"
          showIconCancel={false}
          cartSectionFlexShrink="0"
          frameDivGap="12px"
          g27cq4500x5001IconHeight="78.19%"
          g27cq4500x5001IconWidth="90.53%"
          g27cq4500x5001IconTop="11.11%"
          g27cq4500x5001IconRight="3.92%"
          g27cq4500x5001IconBottom="10.7%"
          g27cq4500x5001IconLeft="5.56%"
        />
      </div>
      <div className="button-group">
        <ButtonSmallHoverNo
          addToCart="Return To Shop"
          buttonSmallHoverNoPosition="unset"
          buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
          buttonSmallHoverNoTop="unset"
          buttonSmallHoverNoLeft="unset"
          buttonSmallHoverNoBackgroundColor="unset"
          buttonSmallHoverNoBorder="1px solid var(--color-gray-400)"
          addToCartColor="0.5px solid #000"
        />
        <ButtonSmallHoverNo
          addToCart="Update Cart"
          buttonSmallHoverNoPosition="unset"
          buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
          buttonSmallHoverNoTop="unset"
          buttonSmallHoverNoLeft="unset"
          buttonSmallHoverNoBackgroundColor="unset"
          buttonSmallHoverNoBorder="1px solid var(--color-gray-400)"
          addToCartColor="0.5px solid #000"
        />
      </div>
    </div>
  );
};

export default FrameComponent18;
