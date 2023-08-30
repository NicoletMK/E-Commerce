import TopHeader from "../components/TopHeader";
import Header6 from "../components/Header6";
import LineIcon from "../components/LineIcon";
import UnderLineIcon from "../components/UnderLineIcon";
import ButtonSmallHoverNo from "../components/ButtonSmallHoverNo";
import Footer from "../components/Footer";
import "./LogIn.css";
const LogIn = () => {
  return (
    <div className="log-in">
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header6 />
      <LineIcon />
      <div className="side-image-parent">
        <div className="side-image1">
          <img
            className="dlbeatsnoop-1-icon"
            alt=""
            src="/dlbeatsnoop-1@2x.png"
          />
        </div>
        <div className="frame-parent23">
          <div className="frame-parent24">
            <div className="log-in-to-exclusive-parent">
              <div className="log-in-to">Log in to Exclusive</div>
              <div className="enter-your-details">Enter your details below</div>
            </div>
            <div className="frame-parent25">
              <div className="email-or-phone-number-parent">
                <div className="email-or-phone">Email or Phone Number</div>
                <UnderLineIcon
                  underLineIconUnderLine="/underline9.svg"
                  underLineIconWidth="370px"
                  underLineIconPosition="relative"
                  underLineIconOpacity="0.5"
                  underLineIconTop="unset"
                  underLineIconLeft="unset"
                />
              </div>
              <div className="email-or-phone-number-parent">
                <div className="email-or-phone">Password</div>
                <UnderLineIcon
                  underLineIconUnderLine="/underline9.svg"
                  underLineIconWidth="370px"
                  underLineIconPosition="relative"
                  underLineIconOpacity="0.5"
                  underLineIconTop="unset"
                  underLineIconLeft="unset"
                />
              </div>
            </div>
          </div>
          <div className="frame-parent26">
            <div className="button-wrapper">
              <ButtonSmallHoverNo
                addToCart="Log In"
                buttonSmallHoverNoPosition="unset"
                buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
                buttonSmallHoverNoTop="unset"
                buttonSmallHoverNoLeft="unset"
                buttonSmallHoverNoBackgroundColor="#db4444"
                buttonSmallHoverNoBorder="unset"
                addToCartColor="#fafafa"
              />
            </div>
            <div className="forget-password">Forget Password?</div>
          </div>
        </div>
      </div>
      <Footer
        iconCopyright="/iconcopyright3.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay11.svg"
        footerPosition="absolute"
        footerTop="1121px"
        footerLeft="0px"
      />
    </div>
  );
};

export default LogIn;
