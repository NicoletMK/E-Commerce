import { useMemo } from "react";
import UnderLineIcon from "./UnderLineIcon";
import "./HeaderHeaderContactHover.css";
const HeaderHeaderContactHover = ({
  contact,
  underLine,
  headerHeaderContactHoverPosition,
  underLineIconWidth,
}) => {
  const headerHeaderContactHoverStyle = useMemo(() => {
    return {
      position: headerHeaderContactHoverPosition,
    };
  }, [headerHeaderContactHoverPosition]);

  const underLineIconStyle = useMemo(() => {
    return {
      width: underLineIconWidth,
    };
  }, [underLineIconWidth]);

  return (
    <div
      className="headerheader-contact-hover"
      style={headerHeaderContactHoverStyle}
    >
      <div className="contact">{contact}</div>
      <UnderLineIcon
        underLineIconUnderLine="/underline.svg"
        underLineIconWidth="66px"
        underLineIconPosition="relative"
        underLineIconOpacity="0.5"
        underLineIconTop="unset"
        underLineIconLeft="unset"
      />
    </div>
  );
};

export default HeaderHeaderContactHover;
