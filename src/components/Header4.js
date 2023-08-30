import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Active from "./Property1Active";
import WishlistOn from "./WishlistOn";
import "./Header4.css";
const Header4 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="header27">
      <div className="logo-parent5">
        <div className="logo7">
          <b className="exclusive7">Exclusive</b>
        </div>
        <div className="header-parent4">
          <div className="header28">
            <div className="home6" onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <div className="header29">
            <div className="contact8">Contact</div>
          </div>
          <div className="header28">
            <div className="contact8">About</div>
          </div>
          <div className="header31">
            <div className="contact8">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent4">
        <Property1Active property1ActivePosition="unset" />
        <div className="wishlist-parent4">
          <WishlistOn wishlistOnFlexShrink="0" />
          <img className="cart1-with-buy4" alt="" src="/cart1-with-buy.svg" />
          <img className="user-icon7" alt="" src="/user1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header4;
