import { useMemo } from "react";
import "./CategoryCellPhone.css";
const CategoryCellPhone = ({
  categoryCellPhoneCategory,
  categoryCellPhoneIconPosition,
  categoryCellPhoneIconTop,
  categoryCellPhoneIconLeft,
}) => {
  const categoryCellPhoneIconStyle = useMemo(() => {
    return {
      position: categoryCellPhoneIconPosition,
      top: categoryCellPhoneIconTop,
      left: categoryCellPhoneIconLeft,
    };
  }, [
    categoryCellPhoneIconPosition,
    categoryCellPhoneIconTop,
    categoryCellPhoneIconLeft,
  ]);

  return (
    <img
      className="category-cellphone-icon"
      alt=""
      src={categoryCellPhoneCategory}
      style={categoryCellPhoneIconStyle}
    />
  );
};

export default CategoryCellPhone;
