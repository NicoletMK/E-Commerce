import { useMemo } from "react";
import HeaderHeaderContactHover from "./HeaderHeaderContactHover";
import Property1Active from "./Property1Active";
import "./Header5.css";
const Header5 = ({
  propCursor,
  propCursor1,
  onHeaderContainer3Click,
  onCart1WithBuyClick,
}) => {
  const header2Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const cart1WithBuyStyle = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  return (
    <div className="header32">
      <div className="logo-parent6">
        <div className="logo8">
          <b className="exclusive8">Exclusive</b>
        </div>
        <div className="header-parent5">
          <HeaderHeaderContactHover
            contact="Home"
            underLine="/underline1.svg"
            headerHeaderContactHoverPosition="unset"
            underLineIconWidth="48px"
          />
          <div className="header33">
            <div className="contact9">Contact</div>
          </div>
          <div className="header34">
            <div className="contact9">About</div>
          </div>
          <div
            className="header35"
            style={header2Style}
            onClick={onHeaderContainer3Click}
          >
            <div className="contact9">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent5">
        <Property1Active property1ActivePosition="unset" />
        <div className="wishlist-parent5">
          <img className="wishlist-icon5" alt="" src="/wishlist.svg" />
          <img
            className="cart1-with-buy5"
            alt=""
            src="/cart1-with-buy.svg"
            style={cart1WithBuyStyle}
            onClick={onCart1WithBuyClick}
          />
          <img className="user-icon8" alt="" src="/user1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header5;
