import { useMemo } from "react";
import "./GamepadCartSmall.css";
const GamepadCartSmall = ({
  gamepadCartSmallFlexShrink,
  gamepadCartSmallPosition,
  gamepadCartSmallTop,
  gamepadCartSmallLeft,
}) => {
  const gamepadCartSmallStyle = useMemo(() => {
    return {
      flexShrink: gamepadCartSmallFlexShrink,
      position: gamepadCartSmallPosition,
      top: gamepadCartSmallTop,
      left: gamepadCartSmallLeft,
    };
  }, [
    gamepadCartSmallFlexShrink,
    gamepadCartSmallPosition,
    gamepadCartSmallTop,
    gamepadCartSmallLeft,
  ]);

  return (
    <div className="gamepad-cart-small" style={gamepadCartSmallStyle}>
      <img
        className="g92-2-500x500-1-icon"
        alt=""
        src="/g922500x500-1@2x.png"
      />
    </div>
  );
};

export default GamepadCartSmall;
