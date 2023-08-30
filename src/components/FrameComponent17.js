import GamepadCartSmall from "./GamepadCartSmall";
import MonitorCartSmall from "./MonitorCartSmall";
import UnderLineIcon from "./UnderLineIcon";
import Bkash from "./Bkash";
import Visa from "./Visa";
import Mastercard from "./Mastercard";
import Nagad from "./Nagad";
import CouponCode from "./CouponCode";
import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import "./FrameComponent17.css";
const FrameComponent17 = () => {
  return (
    <div className="frame-parent39">
      <div className="frame-parent40">
        <div className="gamepad-cart-small-parent">
          <GamepadCartSmall
            gamepadCartSmallFlexShrink="0"
            gamepadCartSmallPosition="relative"
            gamepadCartSmallTop="unset"
            gamepadCartSmallLeft="unset"
          />
          <div className="lcd-monitor-parent">
            <div className="bank">LCD Monitor</div>
            <div className="bank">$650</div>
          </div>
        </div>
        <div className="monitor-cart-small-parent">
          <MonitorCartSmall
            monitorCartSmallPosition="relative"
            monitorCartSmallTop="unset"
            monitorCartSmallLeft="unset"
            monitorCartSmallFlexShrink="0"
          />
          <div className="lcd-monitor-group">
            <div className="bank">H1 Gamepad</div>
            <div className="bank">$1100</div>
          </div>
        </div>
      </div>
      <div className="frame-parent41">
        <div className="frame-parent41">
          <div className="frame-parent41">
            <div className="frame-parent41">
              <div className="subtotal-group">
                <div className="bank">Subtotal:</div>
                <div className="bank">$1750</div>
              </div>
              <UnderLineIcon
                underLineIconUnderLine="/underline2.svg"
                underLineIconWidth="422px"
                underLineIconPosition="relative"
                underLineIconOpacity="0.4"
                underLineIconTop="unset"
                underLineIconLeft="unset"
              />
            </div>
            <div className="shipping-group">
              <div className="bank">Shipping:</div>
              <div className="bank">Free</div>
            </div>
          </div>
          <UnderLineIcon
            underLineIconUnderLine="/underline2.svg"
            underLineIconWidth="422px"
            underLineIconPosition="relative"
            underLineIconOpacity="0.4"
            underLineIconTop="unset"
            underLineIconLeft="unset"
          />
        </div>
        <div className="total-group">
          <div className="bank">Total:</div>
          <div className="bank">$1750</div>
        </div>
      </div>
      <div className="frame-parent45">
        <div className="radio-button-parent">
          <img
            className="radio-button-icon"
            alt=""
            src="/radio-buttonoff.svg"
          />
          <div className="bank">Bank</div>
        </div>
        <div className="bkash-parent">
          <Bkash image32="/image-321@2x.png" bkashFlexShrink="0" />
          <Visa image30="/image-301@2x.png" visaFlexShrink="0" />
          <Mastercard mastercardFlexShrink="0" />
          <Nagad image33="/image-331@2x.png" nagadFlexShrink="0" />
        </div>
      </div>
      <div className="radio-button-parent">
        <img className="radio-button-icon" alt="" src="/radio-buttonon.svg" />
        <div className="bank">Cash on delivery</div>
      </div>
      <CouponCode couponCodePosition="unset" />
      <ButtonSmallHoverNo
        addToCart="Place Order"
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

export default FrameComponent17;
