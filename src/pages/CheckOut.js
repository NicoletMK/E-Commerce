import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header3 from "../components/Header3";
import LineIcon from "../components/LineIcon";
import Roadmap from "../components/Roadmap";
import PlaceToInfoBox from "../components/PlaceToInfoBox";
import Footer from "../components/Footer";
import FrameComponent17 from "../components/FrameComponent17";
import "./CheckOut.css";
const CheckOut = () => {
  const navigate = useNavigate();

  const onUserIconClick = useCallback(() => {
    navigate("/account");
  }, [navigate]);

  return (
    <div className="checkout">
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header3 onUserIconClick={onUserIconClick} />
      <LineIcon />
      <Roadmap
        account="Account"
        line13="/line-131.svg"
        nothing="My Account"
        line14="/line-131.svg"
        nothing1="Product"
        line15="/line-131.svg"
        nothing2="View Cart"
        line16="/line-131.svg"
        nothing3="CheckOut"
        showLineIcon
        showNothing
        lineIconVisible
        nothingVisible
        lineIconVisible1
        nothingVisible1
        roadmapPosition="absolute"
        roadmapTop="222px"
        roadmapLeft="135px"
        lineIconOpacity="0.5"
        nothingOpacity="0.5"
        lineIconWidth="6.89px"
        lineIconHeight="12.21px"
        lineIconOpacity1="0.5"
        nothingOpacity1="0.5"
        lineIconWidth1="6.89px"
        lineIconHeight1="12.21px"
        lineIconOpacity2="0.5"
        nothingOpacity2="0.5"
        lineIconOpacity3="0.5"
        lineIconWidth2="6.89px"
        lineIconHeight2="12.21px"
      />
      <div className="billing-details-wrapper">
        <div className="billing-details">Billing Details</div>
      </div>
      <div className="frame-parent19">
        <div className="frame-parent20">
          <div className="first-name-parent">
            <div className="first-name">
              <span>First Name</span>
              <span className="span">*</span>
            </div>
            <PlaceToInfoBox
              placeToInfoBoxPosition="relative"
              placeToInfoBoxWidth="470px"
              placeToInfoBoxHeight="50px"
              placeToInfoBoxTop="unset"
              placeToInfoBoxRight="unset"
              placeToInfoBoxBottom="unset"
              placeToInfoBoxLeft="unset"
              placeToInfoBoxFlexShrink="0"
            />
          </div>
          <div className="first-name-parent">
            <div className="first-name">Company Name</div>
            <div className="frame-child7" />
          </div>
          <div className="first-name-parent">
            <div className="first-name">
              <span>Street Address</span>
              <span className="span">*</span>
            </div>
            <div className="frame-child7" />
          </div>
          <div className="first-name-parent">
            <div className="first-name">Apartment, floor, etc. (optional)</div>
            <div className="frame-child7" />
          </div>
          <div className="first-name-parent">
            <div className="first-name">
              <span>Town/City</span>
              <span className="span">*</span>
            </div>
            <div className="frame-child7" />
          </div>
          <div className="first-name-parent">
            <div className="first-name">
              <span>Phone Number</span>
              <span className="span">*</span>
            </div>
            <div className="frame-child7" />
          </div>
          <div className="first-name-parent">
            <div className="first-name">
              <span>Email Address</span>
              <span className="span">*</span>
            </div>
            <div className="frame-child7" />
          </div>
        </div>
        <div className="icon-checkbox-parent">
          <img className="icon-checkbox" alt="" src="/iconcheckbox.svg" />
          <div className="save-this-information">
            Save this information for faster check-out next time
          </div>
        </div>
      </div>
      <Footer
        iconCopyright="/iconcopyright2.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay5.svg"
        footerPosition="absolute"
        footerTop="1355px"
        footerLeft="0px"
      />
      <FrameComponent17 />
    </div>
  );
};

export default CheckOut;
