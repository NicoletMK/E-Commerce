import { useMemo } from "react";
import "./TopHeader.css";
const TopHeader = ({
  dropDown,
  topHeaderPosition,
  topHeaderTop,
  topHeaderLeft,
}) => {
  const topHeaderStyle = useMemo(() => {
    return {
      position: topHeaderPosition,
      top: topHeaderTop,
      left: topHeaderLeft,
    };
  }, [topHeaderPosition, topHeaderTop, topHeaderLeft]);

  return (
    <div className="top-header" style={topHeaderStyle}>
      <div className="frame-group">
        <div className="summer-sale-for-all-swim-suits-parent">
          <div className="summer-sale-for">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div className="shopnow">ShopNow</div>
        </div>
        <div className="english-parent">
          <div className="english">English</div>
          <img className="dropdown-icon" alt="" src={dropDown} />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
