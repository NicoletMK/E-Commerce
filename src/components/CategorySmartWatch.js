import { useMemo } from "react";
import "./CategorySmartWatch.css";
const CategorySmartWatch = ({
  categorySmartWatchPosition,
  categorySmartWatchTop,
  categorySmartWatchLeft,
}) => {
  const categorySmartWatchStyle = useMemo(() => {
    return {
      position: categorySmartWatchPosition,
      top: categorySmartWatchTop,
      left: categorySmartWatchLeft,
    };
  }, [
    categorySmartWatchPosition,
    categorySmartWatchTop,
    categorySmartWatchLeft,
  ]);

  return (
    <div className="category-smartwatch" style={categorySmartWatchStyle}>
      <img className="vector-icon6" alt="" src="/vector3.svg" />
      <img className="vector-icon7" alt="" src="/vector4.svg" />
      <img className="vector-icon8" alt="" src="/vector5.svg" />
      <img className="vector-icon9" alt="" src="/vector6.svg" />
      <div className="line-group">
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="frame-inner" />
      </div>
    </div>
  );
};

export default CategorySmartWatch;
