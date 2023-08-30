import { useMemo } from "react";
import CategoryCamera from "./CategoryCamera";
import "./CategoryPhoneCameraHoverN.css";
const CategoryPhoneCameraHoverN = ({
  camera,
  categoryCamera,
  categoryPhoneCameraHoverNFlexShrink,
  categoryPhoneCameraHoverNBorder,
  categoryPhoneCameraHoverNBoxSizing,
  categoryPhoneCameraHoverNBackgroundColor,
  categoryPhoneCameraHoverNBoxShadow,
  cameraLeft,
  cameraColor,
  categoryCameraIconLeft,
}) => {
  const categoryPhoneCameraHoverNStyle = useMemo(() => {
    return {
      flexShrink: categoryPhoneCameraHoverNFlexShrink,
      border: categoryPhoneCameraHoverNBorder,
      boxSizing: categoryPhoneCameraHoverNBoxSizing,
      backgroundColor: categoryPhoneCameraHoverNBackgroundColor,
      boxShadow: categoryPhoneCameraHoverNBoxShadow,
    };
  }, [
    categoryPhoneCameraHoverNFlexShrink,
    categoryPhoneCameraHoverNBorder,
    categoryPhoneCameraHoverNBoxSizing,
    categoryPhoneCameraHoverNBackgroundColor,
    categoryPhoneCameraHoverNBoxShadow,
  ]);

  const cameraStyle = useMemo(() => {
    return {
      left: cameraLeft,
      color: cameraColor,
    };
  }, [cameraLeft, cameraColor]);

  const categoryCameraIconStyle = useMemo(() => {
    return {
      left: categoryCameraIconLeft,
    };
  }, [categoryCameraIconLeft]);

  return (
    <div
      className="category-phonecamera-hovern"
      style={categoryPhoneCameraHoverNStyle}
    >
      <div className="camera" style={cameraStyle}>
        {camera}
      </div>
      <CategoryCamera
        categoryCameraCategoryCam="/categorycamera.svg"
        categoryCameraIconPosition="absolute"
        categoryCameraIconTop="25px"
        categoryCameraIconLeft="calc(50% - 28px)"
      />
    </div>
  );
};

export default CategoryPhoneCameraHoverN;
