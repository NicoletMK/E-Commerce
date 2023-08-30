import FourStar from "./FourStar";
import "./CartWithFlatDiscountCart.css";
const CartWithFlatDiscountCart = ({ dimensionCode }) => {
  return (
    <div className="cart-with-flat-discount-cart">
      <div className="cart21">
        <div className="fill-heart-parent13">
          <img className="fill-heart-icon16" alt="" src="/fill-heart.svg" />
          <img className="fill-heart-icon16" alt="" src={dimensionCode} />
        </div>
        <div className="cart-child6" />
        <img
          className="curology-j7pkvqrtusm-unsplash-icon"
          alt=""
          src="/curologyj7pkvqrtusmunsplash-1@2x.png"
        />
      </div>
      <div className="curology-product-set-parent">
        <div className="curology-product-set">{`Curology Product Set `}</div>
        <div className="frame-parent81">
          <div className="wrapper13">
            <div className="curology-product-set">$500</div>
          </div>
          <div className="four-star-parent1">
            <FourStar fourStarPosition="unset" />
            <div className="div74">(145)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWithFlatDiscountCart;
