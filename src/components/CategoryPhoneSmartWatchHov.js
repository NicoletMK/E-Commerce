import { useMemo } from "react";
import CategorySmartWatch from "./CategorySmartWatch";
import "./CategoryPhoneSmartWatchHov.css";
const CategoryPhoneSmartWatchHov = ({
  categoryPhoneSmartWatchHoFlexShrink,
}) => {
  const categoryPhoneSmartWatchHovStyle = useMemo(() => {
    return {
      flexShrink: categoryPhoneSmartWatchHoFlexShrink,
    };
  }, [categoryPhoneSmartWatchHoFlexShrink]);

  return (
    <div
      className="category-phonesmartwatch-hov"
      style={categoryPhoneSmartWatchHovStyle}
    >
      <div className="smartwatch">SmartWatch</div>
      <CategorySmartWatch
        categorySmartWatchPosition="absolute"
        categorySmartWatchTop="25px"
        categorySmartWatchLeft="calc(50% - 28px)"
      />
    </div>
  );
};

export default CategoryPhoneSmartWatchHov;
