import { useCallback } from "react";
import TopHeader from "../components/TopHeader";
import { useNavigate } from "react-router-dom";
import Property1Active from "../components/Property1Active";
import LineIcon from "../components/LineIcon";
import Roadmap from "../components/Roadmap";
import FourStar from "../components/FourStar";
import ColourChnage from "../components/ColourChnage";
import UnderLineIcon from "../components/UnderLineIcon";
import ButtonSmallHoverNo from "../components/ButtonSmallHoverNo";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent14 from "../components/FrameComponent14";
import Footer from "../components/Footer";
import "./ProductDetailsPage.css";
const ProductDetailsPage = () => {
  const navigate = useNavigate();

  const onHeaderContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="product-details-page">
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <div className="header4">
        <div className="logo-container">
          <div className="logo2">
            <b className="exclusive2">Exclusive</b>
          </div>
          <div className="header-group">
            <div className="header5" onClick={onHeaderContainerClick}>
              <div className="home1">Home</div>
            </div>
            <div className="header6">
              <div className="home1">Contact</div>
            </div>
            <div className="header7">
              <div className="home1">About</div>
            </div>
            <div className="header8">
              <div className="home1">Sign Up</div>
            </div>
          </div>
        </div>
        <div className="search-component-set-group">
          <Property1Active property1ActivePosition="unset" />
          <div className="wishlist-group">
            <img className="wishlist-icon1" alt="" src="/wishlist.svg" />
            <img className="cart1-with-buy" alt="" src="/cart1-with-buy.svg" />
            <img className="wishlist-icon1" alt="" src="/user1.svg" />
          </div>
        </div>
      </div>
      <LineIcon />
      <Roadmap
        account="Account"
        line13="/line-131.svg"
        nothing="Gaming"
        line14="/line-131.svg"
        nothing1="Product"
        line15="/line-131.svg"
        nothing2="View Cart"
        line16="/line-131.svg"
        nothing3="Havic HV G-92 Gamepad"
        showLineIcon={false}
        showNothing={false}
        lineIconVisible={false}
        nothingVisible={false}
        lineIconVisible1
        nothingVisible1
        roadmapPosition="absolute"
        roadmapTop="222px"
        roadmapLeft="135px"
        lineIconOpacity="0.5"
        nothingOpacity="0.5"
        lineIconWidth="13.19px"
        lineIconHeight="0px"
        lineIconOpacity1="0.5"
        nothingOpacity1="0.5"
        lineIconWidth1="13.19px"
        lineIconHeight1="0px"
        lineIconOpacity2="0.5"
        nothingOpacity2="0.5"
        lineIconOpacity3="0.5"
        lineIconWidth2="6.89px"
        lineIconHeight2="12.21px"
      />
      <div className="image-63-wrapper">
        <img className="image-63-icon" alt="" src="/image-63@2x.png" />
      </div>
      <div className="image-57-wrapper">
        <img className="image-57-icon" alt="" src="/image-57@2x.png" />
      </div>
      <div className="image-58-wrapper">
        <img className="image-58-icon" alt="" src="/image-58@2x.png" />
      </div>
      <div className="image-61-wrapper">
        <img className="image-61-icon" alt="" src="/image-61@2x.png" />
      </div>
      <div className="image-59-wrapper">
        <img className="image-59-icon" alt="" src="/image-59@2x.png" />
      </div>
      <div className="havic-hv-g-92">Havic HV G-92 Gamepad</div>
      <div className="div62">$192.00</div>
      <div className="frame-parent11">
        <div className="four-star-container">
          <FourStar fourStarPosition="unset" />
          <div className="reviews">(150 Reviews)</div>
        </div>
        <div className="line-container">
          <div className="line-div" />
          <div className="in-stock">In Stock</div>
        </div>
      </div>
      <div className="playstation-5-controller">{`PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.`}</div>
      <div className="colours-parent">
        <div className="colours">Colours:</div>
        <ColourChnage
          group1000005935="/group-10000059353.svg"
          colourChnagePosition="unset"
          ellipseDivBackgroundColor="#e07575"
        />
      </div>
      <div className="size-parent">
        <div className="colours">Size:</div>
        <div className="frame-parent12">
          <div className="xs-wrapper">
            <div className="xs">XS</div>
          </div>
          <div className="xs-wrapper">
            <div className="s">S</div>
          </div>
          <div className="m-wrapper">
            <div className="m">M</div>
          </div>
          <div className="xs-wrapper">
            <div className="l">L</div>
          </div>
          <div className="xs-wrapper">
            <div className="xl">XL</div>
          </div>
        </div>
      </div>
      <UnderLineIcon
        underLineIconUnderLine="/underline5.svg"
        underLineIconWidth="400px"
        underLineIconPosition="absolute"
        underLineIconOpacity="0.5"
        underLineIconTop="534px"
        underLineIconLeft="905px"
      />
      <div className="frame-parent13">
        <img className="frame-icon" alt="" src="/frame-906.svg" />
        <div className="wrapper12">
          <div className="div63">2</div>
        </div>
        <img className="frame-child2" alt="" src="/frame-907.svg" />
      </div>
      <ButtonSmallHoverNo
        addToCart="Buy Now"
        buttonSmallHoverNoPosition="absolute"
        buttonSmallHoverNoPadding="var(--padding-3xs) var(--padding-29xl)"
        buttonSmallHoverNoTop="659px"
        buttonSmallHoverNoLeft="1081px"
        buttonSmallHoverNoBackgroundColor="#db4444"
        buttonSmallHoverNoBorder="unset"
        addToCartColor="#fafafa"
      />
      <img className="product-details-page-child" alt="" src="/frame-904.svg" />
      <FrameComponent13 />
      <FrameComponent14 />
      <Footer
        iconCopyright="/iconcopyright2.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay1.svg"
        footerPosition="absolute"
        footerTop="1653px"
        footerLeft="0px"
      />
    </div>
  );
};

export default ProductDetailsPage;
