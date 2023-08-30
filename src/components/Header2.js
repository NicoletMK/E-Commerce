import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderHeaderContactHover from "./HeaderHeaderContactHover";
import Property1Active from "./Property1Active";
import "./Header2.css";
const Header2 = () => {
  const navigate = useNavigate();

  const onHeaderContainer1Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="header13">
      <div className="logo-parent2">
        <div className="logo4">
          <b className="exclusive4">Exclusive</b>
        </div>
        <div className="header-parent1">
          <div className="header14">
            <div className="home3">Home</div>
          </div>
          <div className="header15" onClick={onHeaderContainer1Click}>
            <div className="home3">Contact</div>
          </div>
          <HeaderHeaderContactHover
            contact="About"
            underLine="/underline1.svg"
            headerHeaderContactHoverPosition="unset"
            underLineIconWidth="48px"
          />
          <div className="header16">
            <div className="home3">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent1">
        <Property1Active property1ActivePosition="unset" />
        <div className="wishlist-parent1">
          <img className="wishlist-icon3" alt="" src="/wishlist.svg" />
          <img className="cart1-with-buy2" alt="" src="/cart1-with-buy.svg" />
          <img className="wishlist-icon3" alt="" src="/user1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header2;
