import { useMemo } from "react";
import "./Property1Active.css";
const Property1Active = ({ property1ActivePosition }) => {
  const property1ActiveStyle = useMemo(() => {
    return {
      position: property1ActivePosition,
    };
  }, [property1ActivePosition]);

  return (
    <div className="property-1active" style={property1ActiveStyle}>
      <div className="what-are-you-looking-for-parent">
        <div className="what-are-you">What are you looking for?</div>
        <img className="component-2-icon" alt="" src="/component-2.svg" />
      </div>
    </div>
  );
};

export default Property1Active;
