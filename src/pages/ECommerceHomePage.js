import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ExclusiveFashionContainer from "../components/ExclusiveFashionContainer";
import FrameComponent22 from "../components/FrameComponent22";
import ButtonSmallHoverNo from "../components/ButtonSmallHoverNo";
import MusicExperienceEnhancerContain from "../components/MusicExperienceEnhancerContain";
import FrameComponent23 from "../components/FrameComponent23";
import FormContainer from "../components/FormContainer";
import BestSellingProductsContainer from "../components/BestSellingProductsContainer";
import ExploreOurProductsContainer from "../components/ExploreOurProductsContainer";
import FrameComponent24 from "../components/FrameComponent24";
import FullServices from "../components/FullServices";
import Footer from "../components/Footer";
import TopHeader from "../components/TopHeader";
import Header5 from "../components/Header5";
import LineIcon from "../components/LineIcon";
import "./ECommerceHomePage.css";
import React from "react";
const ECommerceHomePage = () => {
  const navigate = useNavigate();

  const onCartContainer20Click = useCallback(() => {
    navigate("/product-details-page");
  }, [navigate]);

  const onHeaderContainer3Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onCart1WithBuyClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className="e-commerce-homepage">
      <div className="e-commerce-homepage-child" />
      <div className="e-commerce-homepage-item" />
      <div className="e-commerce-homepage-inner" />
      <ExclusiveFashionContainer />
      <FrameComponent22 />
      <ButtonSmallHoverNo
        addToCart="View All Products"
        buttonSmallHoverNoPosition="absolute"
        buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
        buttonSmallHoverNoTop="1219px"
        buttonSmallHoverNoLeft="603px"
        buttonSmallHoverNoBackgroundColor="#db4444"
        buttonSmallHoverNoBorder="unset"
        addToCartColor="#fafafa"
      />
      <MusicExperienceEnhancerContain />
      <FrameComponent23 />
      <FormContainer
        imageDimensions="/categorycellphone2.svg"
        imageDimensionsText="/categorycomputer3.svg"
        imageDimensionsCode="/categorycamera4.svg"
        imageDimensionsCodeText="/categoryheadphone2.svg"
        imageDimensionsCodeText2="/categorygamepad2.svg"
        propBorder="unset"
        propBoxSizing="unset"
        propBackgroundColor="#db4444"
        propBoxShadow="0px 1px 13px rgba(0, 0, 0, 0.05)"
        propColor="#fafafa"
      />
      <BestSellingProductsContainer
        dimensionLabel="/fill-eye.svg"
        dimensionValue="/fill-eye.svg"
        dimensionText="/starhalffilled7.svg"
        dimensionCode="/fill-eye.svg"
        dimensionCodeText="/starhalffilled7.svg"
        dimensionValueText="/fill-eye.svg"
      />
      <ExploreOurProductsContainer
        dimension="/fill-eye.svg"
        imageDimensions="/fill-eye.svg"
        imageDimensions2="/fill-eye.svg"
        imageDimensionsText="/fill-eye.svg"
        imageDimensionsText2="/fill-eye.svg"
        imageDimensionsText3="/fill-eye.svg"
        imageDimensionsText4="/fill-eye.svg"
        imageDimensionsText5="/starhalffilled8.svg"
        imageDimensionsText6="/fill-eye.svg"
        imageDimensionsText7="/starhalffilled8.svg"
        propCursor="pointer"
        onCartContainer20Click={onCartContainer20Click}
      />
      <FrameComponent24 />
      <FullServices
        services="/services16.svg"
        services1="/services17.svg"
        services2="/services18.svg"
        services3="/services19.svg"
        showFrameDiv
        frameDivVisible={false}
        fullServicesPosition="absolute"
        fullServicesTop="5161px"
        fullServicesLeft="249px"
      />
      <Footer
        iconCopyright="/iconcopyright6.svg"
        iconSend="/iconsend3.svg"
        googlePlay="/googleplay13.svg"
        footerPosition="absolute"
        footerTop="5462px"
        footerLeft="0px"
      />
      <TopHeader
        dropDown="/dropdown.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header5
        propCursor="pointer"
        propCursor1="pointer"
        onHeaderContainer3Click={onHeaderContainer3Click}
        onCart1WithBuyClick={onCart1WithBuyClick}
      />
      <LineIcon />
      <img
        className="fill-with-up-arrow3"
        alt=""
        src="/fill-with-up-arrow.svg"
      />
    </div>
  );
};

export default ECommerceHomePage;
