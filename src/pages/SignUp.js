import { useCallback } from "react";
import TopHeader from "../components/TopHeader";
import Header7 from "../components/Header7";
import LineIcon from "../components/LineIcon";
import UnderLineIcon from "../components/UnderLineIcon";
import ButtonSmallHoverNo from "../components/ButtonSmallHoverNo";
import GoogleSIgnUp from "../components/GoogleSIgnUp";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();

  const onLogInTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className="sign-up3">
      <TopHeader
        dropDown="/dropdown.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header7 />
      <LineIcon />
      <div className="side-image-group">
        <div className="side-image2">
          <img
            className="dlbeatsnoop-1-icon1"
            alt=""
            src="/dlbeatsnoop-1@2x.png"
          />
        </div>
        <div className="frame-parent27">
          <div className="create-an-account-parent">
            <div className="create-an-account">Create an account</div>
            <div className="enter-your-details1">Enter your details below</div>
          </div>
          <div className="frame-parent28">
            <div className="frame-parent29">
              <div className="name-parent">
                <div className="name">Name</div>
                <UnderLineIcon
                  underLineIconUnderLine="/underline10.svg"
                  underLineIconWidth="370px"
                  underLineIconPosition="relative"
                  underLineIconOpacity="0.5"
                  underLineIconTop="unset"
                  underLineIconLeft="unset"
                />
              </div>
              <div className="name-parent">
                <div className="name">Email or Phone Number</div>
                <UnderLineIcon
                  underLineIconUnderLine="/underline10.svg"
                  underLineIconWidth="370px"
                  underLineIconPosition="relative"
                  underLineIconOpacity="0.5"
                  underLineIconTop="unset"
                  underLineIconLeft="unset"
                />
              </div>
              <div className="name-parent">
                <div className="name">Password</div>
                <UnderLineIcon
                  underLineIconUnderLine="/underline10.svg"
                  underLineIconWidth="370px"
                  underLineIconPosition="relative"
                  underLineIconOpacity="0.5"
                  underLineIconTop="unset"
                  underLineIconLeft="unset"
                />
              </div>
            </div>
            <div className="button-parent">
              <ButtonSmallHoverNo
                addToCart="Create Account"
                buttonSmallHoverNoPosition="unset"
                buttonSmallHoverNoPadding="var(--padding-base) 122px"
                buttonSmallHoverNoTop="unset"
                buttonSmallHoverNoLeft="unset"
                buttonSmallHoverNoBackgroundColor="#db4444"
                buttonSmallHoverNoBorder="unset"
                addToCartColor="#fafafa"
              />
              <div className="google-sign-up-parent">
                <GoogleSIgnUp
                  iconGoogle="/icongoogle1.svg"
                  googleSIgnUpPosition="unset"
                  signUpWithColor="0.5px solid #000"
                />
                <div className="already-have-account-parent">
                  <div className="already-have-account">
                    Already have account?
                  </div>
                  <div className="log-in-parent">
                    <div className="log-in1" onClick={onLogInTextClick}>
                      Log in
                    </div>
                    <img
                      className="underline-icon3"
                      alt=""
                      src="/underline11.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        iconCopyright="/iconcopyright5.svg"
        iconSend="/iconsend3.svg"
        googlePlay="/googleplay12.svg"
        footerPosition="absolute"
        footerTop="1121px"
        footerLeft="0px"
      />
    </div>
  );
};

export default SignUp;
