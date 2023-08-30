import { useMemo } from "react";
import Property1Active from "./Property1Active";
import "./Header8.css";
const Header8 = ({
  imageDimensions,
  searchComponentSetCursor,
  wishlistIconCursor,
  propBorderRadius,
  onHeaderContainerClick,
  onAboutTextClick,
}) => {
  const header1Style = useMemo(() => {
    return {
      cursor: searchComponentSetCursor,
    };
  }, [searchComponentSetCursor]);

  const aboutStyle = useMemo(() => {
    return {
      cursor: wishlistIconCursor,
    };
  }, [wishlistIconCursor]);

  const userIcon1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className="header17">
      <div className="logo-parent3">
        <div className="logo5">
          <b className="exclusive5">Exclusive</b>
        </div>
        <div className="header-parent2">
          <div
            className="header18"
            style={header1Style}
            onClick={onHeaderContainerClick}
          >
            <div className="home4">Home</div>
          </div>
          <div className="header19">
            <div className="home4">Contact</div>
          </div>
          <div className="header18">
            <div
              className="about5"
              onClick={onAboutTextClick}
              style={aboutStyle}
            >
              About
            </div>
          </div>
          <div className="header21">
            <div className="home4">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent2">
        <Property1Active property1ActivePosition="unset" />
        <div className="wishlist-parent2">
          <img className="wishlist-icon4" alt="" src="/wishlist.svg" />
          <img className="cart1-with-buy3" alt="" src="/cart1-with-buy.svg" />
          <img
            className="user-icon5"
            alt=""
            src={imageDimensions}
            style={userIcon1Style}
          />
        </div>
      </div>
    </div>
  );
};

export default Header8;
