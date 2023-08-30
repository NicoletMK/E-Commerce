import { useMemo } from "react";
import "./QrCode.css";
const QrCode = ({ qrCodeFlexShrink }) => {
  const qrCodeStyle = useMemo(() => {
    return {
      flexShrink: qrCodeFlexShrink,
    };
  }, [qrCodeFlexShrink]);

  return (
    <div className="qr-code" style={qrCodeStyle}>
      <img className="qrcode-1-icon" alt="" src="/qrcode-1@2x.png" />
    </div>
  );
};

export default QrCode;
