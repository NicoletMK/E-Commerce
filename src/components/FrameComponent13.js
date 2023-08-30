import UnderLineIcon from "./UnderLineIcon";
import "./FrameComponent13.css";
const FrameComponent13 = () => {
  return (
    <div className="underline-group">
      <UnderLineIcon
        underLineIconUnderLine="/underline6.svg"
        underLineIconWidth="399px"
        underLineIconPosition="absolute"
        underLineIconOpacity="0.5"
        underLineIconTop="89px"
        underLineIconLeft="0px"
      />
      <div className="icon-delivery-parent">
        <img className="icon-delivery" alt="" src="/icondelivery.svg" />
        <div className="free-delivery-parent">
          <div className="free-delivery">Free Delivery</div>
          <div className="enter-your-postal">
            Enter your postal code for Delivery Availability
          </div>
        </div>
      </div>
      <div className="icon-return-parent">
        <img className="icon-delivery" alt="" src="/iconreturn.svg" />
        <div className="free-delivery-parent">
          <div className="free-delivery">Return Delivery</div>
          <div className="free-30-days-container">
            {`Free 30 Days Delivery Returns. `}
            <span className="details">Details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
