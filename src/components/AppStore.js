import { useMemo } from "react";
import "./AppStore.css";
const AppStore = ({ appStoreFlexShrink }) => {
  const appStoreStyle = useMemo(() => {
    return {
      flexShrink: appStoreFlexShrink,
    };
  }, [appStoreFlexShrink]);

  return (
    <div className="appstore" style={appStoreStyle}>
      <img
        className="download-appstore-icon"
        alt=""
        src="/downloadappstore@2x.png"
      />
    </div>
  );
};

export default AppStore;
