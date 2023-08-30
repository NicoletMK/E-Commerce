import { useMemo } from "react";
import "./ButtonSmallHoverNo.css";
const ButtonSmallHoverNo = ({
  addToCart,
  buttonSmallHoverNoPosition,
  buttonSmallHoverNoPadding,
  buttonSmallHoverNoTop,
  buttonSmallHoverNoLeft,
  buttonSmallHoverNoBackgroundColor,
  buttonSmallHoverNoBorder,
  addToCartColor,
}) => {
  const buttonSmallHoverNoStyle = useMemo(() => {
    return {
      position: buttonSmallHoverNoPosition,
      padding: buttonSmallHoverNoPadding,
      top: buttonSmallHoverNoTop,
      left: buttonSmallHoverNoLeft,
      backgroundColor: buttonSmallHoverNoBackgroundColor,
      border: buttonSmallHoverNoBorder,
    };
  }, [
    buttonSmallHoverNoPosition,
    buttonSmallHoverNoPadding,
    buttonSmallHoverNoTop,
    buttonSmallHoverNoLeft,
    buttonSmallHoverNoBackgroundColor,
    buttonSmallHoverNoBorder,
  ]);

  const addToCartStyle = useMemo(() => {
    return {
      color: addToCartColor,
    };
  }, [addToCartColor]);

  return (
    <div className="buttonsmall-hoverno" style={buttonSmallHoverNoStyle}>
      <div className="add-to-cart" style={addToCartStyle}>
        {addToCart}
      </div>
    </div>
  );
};

export default ButtonSmallHoverNo;
