import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Active from "./Property1Active";
import "./Header6.css";
const Header6 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="header36">
      <div className="logo-parent7">
        <div className="logo9" onClick={onLogoContainerClick}>
          <b className="exclusive9">Exclusive</b>
        </div>
        <div className="header-parent6">
          <div className="header37">
            <div className="home7" onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <div className="header38">
            <div className="contact10">Contact</div>
          </div>
          <div className="header37">
            <div className="contact10">About</div>
          </div>
          <div className="header40">
            <div className="contact10">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent6">
        <Property1Active property1ActivePosition="unset" />
        <div className="wishlist-parent6">
          <img className="wishlist-icon6" alt="" src="/wishlist.svg" />
          <div className="cart1-with-buy6">
            <img className="cart1-icon9" alt="" src="/cartoff.svg" />
            <div className="ellipse-parent3">
              <div className="group-inner" />
              <div className="div71">2</div>
            </div>
          </div>
          <img className="user-icon9" alt="" src="/user1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header6;
