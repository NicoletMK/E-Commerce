import { useMemo } from "react";
import UnderLineIcon from "./UnderLineIcon";
import SendMail from "./SendMail";
import QrCode from "./QrCode";
import GooglePlayIcon from "./GooglePlayIcon";
import AppStore from "./AppStore";
import "./Footer.css";
const Footer = ({
  iconCopyright,
  iconSend,
  googlePlay,
  footerPosition,
  footerTop,
  footerLeft,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
    };
  }, [footerPosition, footerTop, footerLeft]);

  return (
    <div className="footer" style={footerStyle}>
      <div className="underline-parent">
        <UnderLineIcon
          underLineIconUnderLine="/underline4.svg"
          underLineIconWidth="1440px"
          underLineIconPosition="relative"
          underLineIconOpacity="0.5"
          underLineIconTop="unset"
          underLineIconLeft="unset"
        />
        <div className="frame-wrapper">
          <div className="icon-copyright-parent">
            <img className="icon-copyright1" alt="" src={iconCopyright} />
            <div className="exclusivegmailcom">
              Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </div>
      <div className="frame-container">
        <div className="frame-parent1">
          <div className="logo-group">
            <div className="logo-group">
              <div className="logo1">
                <b className="exclusive1">Exclusive</b>
              </div>
              <div className="subscribe">Subscribe</div>
            </div>
            <div className="get-10-off">Get 10% off your first order</div>
          </div>
          <SendMail
            iconSend="/iconsend1.svg"
            sendMailPosition="unset"
            sendMailBorder="1.5px solid var(--text)"
            enterYourEmailColor="#fafafa"
          />
        </div>
        <div className="logo-group">
          <div className="support">Support</div>
          <div className="bijoy-sarani-dhaka-dh-1515-parent">
            <div className="bijoy-sarani-dhaka">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className="exclusivegmailcom">exclusive@gmail.com</div>
            <div className="exclusivegmailcom">+88015-88888-9999</div>
          </div>
        </div>
        <div className="logo-group">
          <div className="support">Account</div>
          <div className="bijoy-sarani-dhaka-dh-1515-parent">
            <div className="exclusivegmailcom">My Account</div>
            <div className="exclusivegmailcom">Login / Register</div>
            <div className="exclusivegmailcom">Cart</div>
            <div className="exclusivegmailcom">Wishlist</div>
            <div className="exclusivegmailcom">Shop</div>
          </div>
        </div>
        <div className="logo-group">
          <div className="support">Quick Link</div>
          <div className="bijoy-sarani-dhaka-dh-1515-parent">
            <div className="exclusivegmailcom">Privacy Policy</div>
            <div className="exclusivegmailcom">Terms Of Use</div>
            <div className="exclusivegmailcom">FAQ</div>
            <div className="exclusivegmailcom">Contact</div>
          </div>
        </div>
        <div className="logo-group">
          <div className="logo-group">
            <div className="support">Download App</div>
            <div className="save-3-with-app-new-user-only-parent">
              <div className="save-3-with">Save $3 with App New User Only</div>
              <div className="qr-code-parent">
                <QrCode qrCodeFlexShrink="0" />
                <div className="googleplay-parent">
                  <GooglePlayIcon dimensionCode="/googleplay.svg" />
                  <AppStore appStoreFlexShrink="0" />
                </div>
              </div>
            </div>
          </div>
          <div className="icon-facebook-parent">
            <img className="icon-facebook" alt="" src="/iconfacebook.svg" />
            <img className="icon-facebook" alt="" src="/icontwitter.svg" />
            <img className="icon-facebook" alt="" src="/iconinstagram.svg" />
            <img className="icon-facebook" alt="" src="/iconlinkedin.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
