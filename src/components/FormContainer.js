import { useMemo } from "react";
import CategoryPhoneCameraHoverN from "./CategoryPhoneCameraHoverN";
import CategoryPhoneSmartWatchHov from "./CategoryPhoneSmartWatchHov";
import "./FormContainer.css";
const FormContainer = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsCode,
  imageDimensionsCodeText,
  imageDimensionsCodeText2,
  propBorder,
  propBoxSizing,
  propBackgroundColor,
  propBoxShadow,
  propColor,
}) => {
  const categoryPhoneCameraHoverNStyle = useMemo(() => {
    return {
      border: propBorder,
      boxSizing: propBoxSizing,
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBorder, propBoxSizing, propBackgroundColor, propBoxShadow]);

  const cameraStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="frame-parent56">
      <div className="frame-parent57">
        <div className="frame-parent58">
          <div className="instance-parent1">
            <div className="rectangle-container">
              <div className="instance-item" />
            </div>
            <div className="categories1">Categories</div>
          </div>
          <div className="browse-by-category">Browse By Category</div>
        </div>
        <div className="fill-with-left-arrow-group">
          <img
            className="fill-with-left-arrow2"
            alt=""
            src="/fill-with-left-arrow.svg"
          />
          <img
            className="fill-with-left-arrow2"
            alt=""
            src="/fill-with-right-arrow.svg"
          />
        </div>
      </div>
      <div className="category-phone-parent">
        <CategoryPhoneCameraHoverN
          camera="Phones"
          categoryCamera="/categorycellphone1.svg"
          categoryPhoneCameraHoverNFlexShrink="0"
          categoryPhoneCameraHoverNBorder="1px solid var(--color-gray-200)"
          categoryPhoneCameraHoverNBoxSizing="border-box"
          categoryPhoneCameraHoverNBackgroundColor="unset"
          categoryPhoneCameraHoverNBoxShadow="unset"
          cameraLeft="calc(50% - 30px)"
          cameraColor="0.5px solid #000"
          categoryCameraIconLeft="calc(50% - 28px)"
        />
        <CategoryPhoneCameraHoverN
          camera="Computers"
          categoryCamera="/categorycomputer2.svg"
          categoryPhoneCameraHoverNFlexShrink="0"
          categoryPhoneCameraHoverNBorder="1px solid var(--color-gray-200)"
          categoryPhoneCameraHoverNBoxSizing="border-box"
          categoryPhoneCameraHoverNBackgroundColor="unset"
          categoryPhoneCameraHoverNBoxShadow="unset"
          cameraLeft="calc(50% - 45px)"
          cameraColor="0.5px solid #000"
          categoryCameraIconLeft="calc(50% - 27px)"
        />
        <CategoryPhoneSmartWatchHov categoryPhoneSmartWatchHoFlexShrink="0" />
        <CategoryPhoneCameraHoverN
          camera="Camera"
          categoryCamera="/categorycamera3.svg"
          categoryPhoneCameraHoverNFlexShrink="0"
          categoryPhoneCameraHoverNBorder="1px solid var(--color-gray-200)"
          categoryPhoneCameraHoverNBoxSizing="border-box"
          categoryPhoneCameraHoverNBackgroundColor="unset"
          categoryPhoneCameraHoverNBoxShadow="unset"
          cameraLeft="calc(50% - 34px)"
          cameraColor="0.5px solid #000"
          categoryCameraIconLeft="calc(50% - 28px)"
        />
        <CategoryPhoneCameraHoverN
          camera="HeadPhones"
          categoryCamera="/categoryheadphone1.svg"
          categoryPhoneCameraHoverNFlexShrink="0"
          categoryPhoneCameraHoverNBorder="1px solid var(--color-gray-200)"
          categoryPhoneCameraHoverNBoxSizing="border-box"
          categoryPhoneCameraHoverNBackgroundColor="unset"
          categoryPhoneCameraHoverNBoxShadow="unset"
          cameraLeft="calc(50% - 51px)"
          cameraColor="0.5px solid #000"
          categoryCameraIconLeft="calc(50% - 28px)"
        />
        <CategoryPhoneCameraHoverN
          camera="Gaming"
          categoryCamera="/categorygamepad1.svg"
          categoryPhoneCameraHoverNFlexShrink="0"
          categoryPhoneCameraHoverNBorder="1px solid var(--color-gray-200)"
          categoryPhoneCameraHoverNBoxSizing="border-box"
          categoryPhoneCameraHoverNBackgroundColor="unset"
          categoryPhoneCameraHoverNBoxShadow="unset"
          cameraLeft="calc(50% - 32px)"
          cameraColor="0.5px solid #000"
          categoryCameraIconLeft="calc(50% - 28px)"
        />
      </div>
    </div>
  );
};

export default FormContainer;
