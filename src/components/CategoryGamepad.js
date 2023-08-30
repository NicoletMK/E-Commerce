import { useMemo } from "react";
import "./CategoryGamepad.css";
const CategoryGamepad = ({
  categoryGamepadCategoryGa,
  categoryGamepadIconPosition,
  categoryGamepadIconTop,
  categoryGamepadIconLeft,
}) => {
  const categoryGamepadIconStyle = useMemo(() => {
    return {
      position: categoryGamepadIconPosition,
      top: categoryGamepadIconTop,
      left: categoryGamepadIconLeft,
    };
  }, [
    categoryGamepadIconPosition,
    categoryGamepadIconTop,
    categoryGamepadIconLeft,
  ]);

  return (
    <img
      className="category-gamepad-icon"
      alt=""
      src={categoryGamepadCategoryGa}
      style={categoryGamepadIconStyle}
    />
  );
};

export default CategoryGamepad;
