import UnderLineIcon from "./UnderLineIcon";
import "./PerfumeCard.css";
const PerfumeCard = () => {
  return (
    <div className="frame-parent75">
      <div className="perfume-parent">
        <div className="perfume">Perfume</div>
        <div className="gucci-intense-oud">GUCCI INTENSE OUD EDP</div>
      </div>
      <div className="shop-now-parent2">
        <div className="shop-now4">Shop Now</div>
        <UnderLineIcon
          underLineIconUnderLine="/underline8.svg"
          underLineIconWidth="81px"
          underLineIconPosition="relative"
          underLineIconOpacity="0.5"
          underLineIconTop="unset"
          underLineIconLeft="unset"
        />
      </div>
    </div>
  );
};

export default PerfumeCard;
