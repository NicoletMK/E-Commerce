import { useMemo } from "react";
import "./AccountDropdoen.css";
const AccountDropdoen = ({
  iconMallbag,
  accountDropdoenPosition,
  accountDropdoenTop,
  accountDropdoenLeft,
}) => {
  const accountDropdoenStyle = useMemo(() => {
    return {
      position: accountDropdoenPosition,
      top: accountDropdoenTop,
      left: accountDropdoenLeft,
    };
  }, [accountDropdoenPosition, accountDropdoenTop, accountDropdoenLeft]);

  return (
    <div className="account-dropdoen" style={accountDropdoenStyle}>
      <div className="account-dropdown">
        <div className="frame-parent">
          <div className="user-parent">
            <img className="user-icon" alt="" src="/user.svg" />
            <div className="manage-my-account">Manage My Account</div>
          </div>
          <div className="user-parent">
            <img className="icon-logout" alt="" src={iconMallbag} />
            <div className="manage-my-account">My Order</div>
          </div>
          <div className="user-parent">
            <img className="icon-logout" alt="" src="/iconcancel2.svg" />
            <div className="manage-my-account">My Cancellations</div>
          </div>
          <div className="user-parent">
            <img className="icon-reviews" alt="" src="/iconreviews.svg" />
            <div className="manage-my-account">My Reviews</div>
          </div>
          <div className="user-parent">
            <img className="icon-logout" alt="" src="/iconlogout.svg" />
            <div className="manage-my-account">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDropdoen;
