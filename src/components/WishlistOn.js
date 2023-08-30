import { useMemo } from "react";
import "./WishlistOn.css";
const WishlistOn = ({ wishlistOnFlexShrink }) => {
  const wishlistOnStyle = useMemo(() => {
    return {
      flexShrink: wishlistOnFlexShrink,
    };
  }, [wishlistOnFlexShrink]);

  return (
    <div className="wishliston" style={wishlistOnStyle}>
      <img className="vector-icon" alt="" src="/vector1.svg" />
      <div className="ellipse-parent">
        <div className="group-child" />
        <div className="div17">4</div>
      </div>
    </div>
  );
};

export default WishlistOn;
