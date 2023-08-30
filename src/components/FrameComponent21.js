import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import ProductJustForYourCartBag from "./ProductJustForYourCartBag";
import ProductJustForYourCartKey from "./ProductJustForYourCartKey";
import ProductJustForYourCartGam from "./ProductJustForYourCartGam";
import "./FrameComponent21.css";
const FrameComponent21 = () => {
  return (
    <div className="frame-parent48">
      <div className="frame-parent49">
        <div className="category-rectangle-group">
          <div className="category-rectangle1">
            <div className="category-rectangle-item" />
          </div>
          <div className="just-for-you">Just For You</div>
        </div>
        <ButtonSmallHoverNo
          addToCart="See All"
          buttonSmallHoverNoPosition="unset"
          buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
          buttonSmallHoverNoTop="unset"
          buttonSmallHoverNoLeft="unset"
          buttonSmallHoverNoBackgroundColor="unset"
          buttonSmallHoverNoBorder="1px solid var(--color-gray-400)"
          addToCartColor="0.5px solid #000"
        />
      </div>
      <div className="cart-group">
        <ProductJustForYourCartBag
          fillEye="/fill-eye3.svg"
          productJustForYourCartBagPosition="unset"
        />
        <ProductJustForYourCartKey
          fillEye="/fill-eye3.svg"
          ak90001500x5001="/g27cq4500x500-11@2x.png"
          aK900WiredKeyboard="IPS LCD Gaming Monitor"
          prop="$1160"
          productJustForYourCartKeyPosition="unset"
          ak90001500x5001IconTop="26px"
          ak90001500x5001IconLeft="10px"
          ak90001500x5001IconWidth="170px"
          ak90001500x5001IconHeight="129px"
        />
        <ProductJustForYourCartGam
          fillEye="/fill-eye3.svg"
          productJustForYourCartGamPosition="unset"
        />
        <ProductJustForYourCartKey
          fillEye="/fill-eye3.svg"
          ak90001500x5001="/ak90001500x500-1@2x.png"
          aK900WiredKeyboard="AK-900 Wired Keyboard"
          prop="$200"
          productJustForYourCartKeyPosition="unset"
          ak90001500x5001IconTop="calc(50% - 50px)"
          ak90001500x5001IconLeft="calc(50% - 95px)"
          ak90001500x5001IconWidth="191px"
          ak90001500x5001IconHeight="101px"
        />
      </div>
    </div>
  );
};

export default FrameComponent21;
