import { useMemo } from "react";
import "./Roadmap.css";
const Roadmap = ({
  account,
  line13,
  nothing,
  line14,
  nothing1,
  line15,
  nothing2,
  line16,
  nothing3,
  showLineIcon,
  showNothing,
  lineIconVisible,
  nothingVisible,
  lineIconVisible1,
  nothingVisible1,
  roadmapPosition,
  roadmapTop,
  roadmapLeft,
  lineIconOpacity,
  nothingOpacity,
  lineIconWidth,
  lineIconHeight,
  lineIconOpacity1,
  nothingOpacity1,
  lineIconWidth1,
  lineIconHeight1,
  lineIconOpacity2,
  nothingOpacity2,
  lineIconOpacity3,
  lineIconWidth2,
  lineIconHeight2,
}) => {
  const roadmapStyle = useMemo(() => {
    return {
      position: roadmapPosition,
      top: roadmapTop,
      left: roadmapLeft,
    };
  }, [roadmapPosition, roadmapTop, roadmapLeft]);

  const lineIconStyle = useMemo(() => {
    return {
      opacity: lineIconOpacity,
    };
  }, [lineIconOpacity]);

  const nothingStyle = useMemo(() => {
    return {
      opacity: nothingOpacity,
    };
  }, [nothingOpacity]);

  const lineIcon1Style = useMemo(() => {
    return {
      width: lineIconWidth,
      height: lineIconHeight,
      opacity: lineIconOpacity1,
    };
  }, [lineIconWidth, lineIconHeight, lineIconOpacity1]);

  const nothing1Style = useMemo(() => {
    return {
      opacity: nothingOpacity1,
    };
  }, [nothingOpacity1]);

  const lineIcon2Style = useMemo(() => {
    return {
      width: lineIconWidth1,
      height: lineIconHeight1,
      opacity: lineIconOpacity2,
    };
  }, [lineIconWidth1, lineIconHeight1, lineIconOpacity2]);

  const nothing2Style = useMemo(() => {
    return {
      opacity: nothingOpacity2,
    };
  }, [nothingOpacity2]);

  const lineIcon3Style = useMemo(() => {
    return {
      opacity: lineIconOpacity3,
      width: lineIconWidth2,
      height: lineIconHeight2,
    };
  }, [lineIconOpacity3, lineIconWidth2, lineIconHeight2]);

  return (
    <div className="roadmap" style={roadmapStyle}>
      <div className="account">{account}</div>
      <img
        className="roadmap-child"
        alt=""
        src={line13}
        style={lineIconStyle}
      />
      <div className="nothing" style={nothingStyle}>
        {nothing}
      </div>
      {showLineIcon && (
        <img
          className="roadmap-child"
          alt=""
          src={line14}
          style={lineIcon1Style}
        />
      )}
      {showNothing && (
        <div className="nothing" style={nothing1Style}>
          {nothing1}
        </div>
      )}
      {lineIconVisible && (
        <img
          className="roadmap-child"
          alt=""
          src={line15}
          style={lineIcon2Style}
        />
      )}
      {nothingVisible && (
        <div className="nothing" style={nothing2Style}>
          {nothing2}
        </div>
      )}
      {lineIconVisible1 && (
        <img
          className="roadmap-child"
          alt=""
          src={line16}
          style={lineIcon3Style}
        />
      )}
      {nothingVisible1 && <div className="nothing">{nothing3}</div>}
    </div>
  );
};

export default Roadmap;
