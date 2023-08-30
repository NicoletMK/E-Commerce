import { useMemo } from "react";
import "./CardContainer.css";
const CardContainer = ({
  imageDimensions,
  celebrityImageUrl,
  roleTitle,
  propLeft,
  propWidth,
}) => {
  const image46IconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className="frame-parent34">
      <div className="image-46-wrapper">
        <img
          className="image-46-icon"
          alt=""
          src={imageDimensions}
          style={image46IconStyle}
        />
      </div>
      <div className="frame-parent35">
        <div className="tom-cruise-parent">
          <div className="tom-cruise">{celebrityImageUrl}</div>
          <div className="founder-chairman">{roleTitle}</div>
        </div>
        <div className="icon-twitter-group">
          <img className="icon-twitter3" alt="" src="/icontwitter1.svg" />
          <img className="icon-twitter3" alt="" src="/iconinstagram1.svg" />
          <img className="icon-twitter3" alt="" src="/iconlinkedin1.svg" />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
