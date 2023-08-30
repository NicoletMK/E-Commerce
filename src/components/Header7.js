import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderHeaderContactHover from "./HeaderHeaderContactHover";
import Property1Active from "./Property1Active";
import "./Header7.css";
const Header7 = () => {
  const navigate = useNavigate();

  const onExclusiveTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="header41">
      <div className="logo-parent8">
        <div className="logo10">
          <b className="exclusive10" onClick={onExclusiveTextClick}>
            Exclusive
          </b>
        </div>
        <div className="header-parent7">
          <div className="header42">
            <div className="home8" onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <div className="header43">
            <div className="contact11">Contact</div>
          </div>
          <div className="header42">
            <div className="contact11">About</div>
          </div>
          <HeaderHeaderContactHover
            contact="Sign Up"
            underLine="/underline3.svg"
            headerHeaderContactHoverPosition="unset"
            underLineIconWidth="61px"
          />
        </div>
      </div>
      <div className="search-component-set-parent7">
        <Property1Active property1ActivePosition="unset" />
        <div className="wishlist-parent7">
          <img className="wishlist-icon7" alt="" src="/wishlist.svg" />
          <div className="cart1-with-buy7">
            <img className="cart1-icon10" alt="" src="/cartoff.svg" />
            <div className="ellipse-parent4">
              <div className="group-child1" />
              <div className="div72">2</div>
            </div>
          </div>
          <img className="user-icon10" alt="" src="/user1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header7;
