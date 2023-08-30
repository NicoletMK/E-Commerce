import { useMemo } from "react";
import "./MonitorCartSmall.css";
const MonitorCartSmall = ({
  monitorCartSmallPosition,
  monitorCartSmallTop,
  monitorCartSmallLeft,
  monitorCartSmallFlexShrink,
}) => {
  const monitorCartSmallStyle = useMemo(() => {
    return {
      position: monitorCartSmallPosition,
      top: monitorCartSmallTop,
      left: monitorCartSmallLeft,
      flexShrink: monitorCartSmallFlexShrink,
    };
  }, [
    monitorCartSmallPosition,
    monitorCartSmallTop,
    monitorCartSmallLeft,
    monitorCartSmallFlexShrink,
  ]);

  return (
    <div className="monitor-cart-small" style={monitorCartSmallStyle}>
      <img
        className="g27cq4-500x500-1-icon"
        alt=""
        src="/g27cq4500x500-1@2x.png"
      />
    </div>
  );
};

export default MonitorCartSmall;
