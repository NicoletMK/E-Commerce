import Property1Active from "./Property1Active";
import WishlistOn from "./WishlistOn";
import CartOn from "./CartOn";
import "./Header3.css";
const Header3 = ({ onUserIconClick }) => {
  return (
    <div className="header22">
      <div className="logo-parent4">
        <div className="logo6">
          <b className="exclusive6">Exclusive</b>
        </div>
        <div className="header-parent3">
          <div className="header23">
            <div className="home5">Home</div>
          </div>
          <div className="header24">
            <div className="home5">Contact</div>
          </div>
          <div className="header23">
            <div className="home5">About</div>
          </div>
          <div className="header26">
            <div className="home5">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent3">
        <Property1Active property1ActivePosition="unset" />
        <div className="wishlist-parent3">
          <WishlistOn wishlistOnFlexShrink="0" />
          <CartOn />
          <img
            className="user-icon6"
            alt=""
            src="/user1.svg"
            onClick={onUserIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header3;
