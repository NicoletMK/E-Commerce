import "./ExclusiveFashionContainer.css";
const ExclusiveFashionContainer = () => {
  return (
    <div className="frame-parent50">
      <div className="womans-fashion-parent">
        <div className="womans-fashion">Woman’s Fashion</div>
        <img className="dropdown-icon1" alt="" src="/dropdown2.svg" />
      </div>
      <div className="mens-fashion-parent">
        <div className="womans-fashion">Men’s Fashion</div>
        <img className="dropdown-icon1" alt="" src="/dropdown2.svg" />
      </div>
      <div className="womans-fashion">Electronics</div>
      <div className="womans-fashion">{`Home & Lifestyle`}</div>
      <div className="womans-fashion">Medicine</div>
      <div className="womans-fashion">{`Sports & Outdoor`}</div>
      <div className="womans-fashion">{`Baby’s & Toys`}</div>
      <div className="womans-fashion">{`Groceries & Pets`}</div>
      <div className="womans-fashion">{`Health & Beauty`}</div>
    </div>
  );
};

export default ExclusiveFashionContainer;
