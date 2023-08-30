import { useMemo } from "react";
import "./CategoryCamera.css";
const CategoryCamera = ({
  categoryCameraCategoryCam,
  categoryCameraIconPosition,
  categoryCameraIconTop,
  categoryCameraIconLeft,
}) => {
  const categoryCameraIconStyle = useMemo(() => {
    return {
      position: categoryCameraIconPosition,
      top: categoryCameraIconTop,
      left: categoryCameraIconLeft,
    };
  }, [
    categoryCameraIconPosition,
    categoryCameraIconTop,
    categoryCameraIconLeft,
  ]);

  return (
    <img
      className="category-camera-icon"
      alt=""
      src={categoryCameraCategoryCam}
      style={categoryCameraIconStyle}
    />
  );
};

export default CategoryCamera;
