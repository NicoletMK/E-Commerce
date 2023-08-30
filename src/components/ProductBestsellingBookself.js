import { useMemo } from "react";
import FiveStar from "./FiveStar";
import "./ProductBestsellingBookself.css";
const ProductBestsellingBookself = ({
  fillEye,
  productBestsellingBookselPosition,
}) => {
  const productBestsellingBookselfStyle = useMemo(() => {
    return {
      position: productBestsellingBookselPosition,
    };
  }, [productBestsellingBookselPosition]);

  return (
    <div
      className="productbestselling-bookself"
      style={productBestsellingBookselfStyle}
    >
      <div className="cart16">
        <div className="fill-heart-parent5">
          <img className="fill-heart-icon7" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon7" alt="" src={fillEye} />
        </div>
        <div className="sam-moghadam-khamseh-l-7mqshl-wrapper">
          <img
            className="sam-moghadam-khamseh-l-7mqshl-icon"
            alt=""
            src="/sammoghadamkhamsehl-7mqshl-auunsplash-1@2x.png"
          />
        </div>
      </div>
      <div className="small-bookself-parent">
        <div className="small-bookself">Small BookSelf</div>
        <div className="wrapper11">
          <div className="small-bookself">$360</div>
        </div>
        <div className="five-star-parent4">
          <FiveStar fiveStarPosition="unset" />
          <div className="div35">(65)</div>
        </div>
      </div>
    </div>
  );
};

export default ProductBestsellingBookself;
