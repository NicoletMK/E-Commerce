import { useMemo } from "react";
import "./CategoryComputer.css";
const CategoryComputer = ({
  categoryComputerCategoryC,
  categoryComputerIconPosition,
  categoryComputerIconTop,
  categoryComputerIconLeft,
}) => {
  const categoryComputerIconStyle = useMemo(() => {
    return {
      position: categoryComputerIconPosition,
      top: categoryComputerIconTop,
      left: categoryComputerIconLeft,
    };
  }, [
    categoryComputerIconPosition,
    categoryComputerIconTop,
    categoryComputerIconLeft,
  ]);

  return (
    <img
      className="category-computer-icon"
      alt=""
      src={categoryComputerCategoryC}
      style={categoryComputerIconStyle}
    />
  );
};

export default CategoryComputer;
