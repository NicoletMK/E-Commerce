import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderHeaderContactHover from "./HeaderHeaderContactHover";
import Property1Active from "./Property1Active";
import "./Header1.css";
const Header1 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="header9">
      <div className="logo-parent1">
        <div className="logo3">
          <b className="exclusive3">Exclusive</b>
        </div>
        <div className="header-container">
          <div className="header10">
            <div className="home2" onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <HeaderHeaderContactHover
            contact="Contact"
            underLine="/underline.svg"
            headerHeaderContactHoverPosition="unset"
            underLineIconWidth="66px"
          />
          <div className="header10">
            <div className="about4">About</div>
          </div>
          <div className="header12">
            <div className="about4">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="search-component-set-container">
        <Property1Active property1ActivePosition="unset" />
        <div className="wishlist-container">
          <img className="wishlist-icon2" alt="" src="/wishlist.svg" />
          <img className="cart1-with-buy1" alt="" src="/cart1-with-buy.svg" />
          <img className="wishlist-icon2" alt="" src="/user1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header1;
