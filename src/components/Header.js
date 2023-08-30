import { useMemo } from "react";
import HeaderHeaderContactHover from "./HeaderHeaderContactHover";
import Property1Active from "./Property1Active";
import CartOn from "./CartOn";
import "./Header.css";
const Header = ({
  user1,
  headerPosition,
  headerGap,
  headerTop,
  headerLeft,
  userIconBorderRadius,
}) => {
  const headerStyle = useMemo(() => {
    return {
      position: headerPosition,
      gap: headerGap,
      top: headerTop,
      left: headerLeft,
    };
  }, [headerPosition, headerGap, headerTop, headerLeft]);

  const userIconStyle = useMemo(() => {
    return {
      borderRadius: userIconBorderRadius,
    };
  }, [userIconBorderRadius]);

  return (
    <div className="header" style={headerStyle}>
      <div className="logo-parent">
        <div className="logo">
          <b className="exclusive">Exclusive</b>
        </div>
        <div className="header-parent">
          <HeaderHeaderContactHover
            contact="Home"
            underLine="/underline1.svg"
            headerHeaderContactHoverPosition="unset"
            underLineIconWidth="48px"
          />
          <div className="header1">
            <div className="contact1">Contact</div>
          </div>
          <div className="header2">
            <div className="contact1">About</div>
          </div>
          <div className="header3">
            <div className="contact1">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent">
        <Property1Active property1ActivePosition="unset" />
        <div className="wishlist-parent">
          <img className="wishlist-icon" alt="" src="/wishlist.svg" />
          <CartOn />
          <img
            className="wishlist-icon"
            alt=""
            src={user1}
            style={userIconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
