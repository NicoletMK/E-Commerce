import ExclusiveFashionContainer from "../components/ExclusiveFashionContainer";
import DiscountCardForm from "../components/DiscountCardForm";
import ButtonSmallHoverNo from "../components/ButtonSmallHoverNo";
import MusicExperienceEnhancerContain from "../components/MusicExperienceEnhancerContain";
import FlashSalesSection from "../components/FlashSalesSection";
import FormContainer from "../components/FormContainer";
import BestSellingProductsContainer from "../components/BestSellingProductsContainer";
import ExploreOurProductsContainer from "../components/ExploreOurProductsContainer";
import NewArrivalCard from "../components/NewArrivalCard";
import PerfumeCard from "../components/PerfumeCard";
import FullServices from "../components/FullServices";
import Footer from "../components/Footer";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import LineIcon from "../components/LineIcon";
import AccountDropdoen from "../components/AccountDropdoen";
import "./AccountDropdownWithAccount.css";
import React from "react";
const AccountDropdownWithAccount = () => {
  return (
    <div className="account-dropdown-with-account">
      <div className="account-dropdown-with-account-child" />
      <div className="account-dropdown-with-account-item" />
      <div className="account-dropdown-with-account-inner" />
      <ExclusiveFashionContainer />
      <DiscountCardForm />
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
      <FlashSalesSection />
      <FormContainer
        imageDimensions="/categorycellphone1.svg"
        imageDimensionsText="/categorycomputer2.svg"
        imageDimensionsCode="/categorycamera3.svg"
        imageDimensionsCodeText="/categoryheadphone1.svg"
        imageDimensionsCodeText2="/categorygamepad1.svg"
        propBorder="1px solid var(--color-gray-200)"
        propBoxSizing="border-box"
        propBackgroundColor="unset"
        propBoxShadow="unset"
        propColor="0.5px solid #000"
      />
      <BestSellingProductsContainer
        dimensionLabel="/fill-eye3.svg"
        dimensionValue="/fill-eye3.svg"
        dimensionText="/starhalffilled5.svg"
        dimensionCode="/fill-eye3.svg"
        dimensionCodeText="/starhalffilled5.svg"
        dimensionValueText="/fill-eye3.svg"
      />
      <ExploreOurProductsContainer
        dimension="/fill-eye3.svg"
        imageDimensions="/fill-eye3.svg"
        imageDimensions2="/fill-eye3.svg"
        imageDimensionsText="/fill-eye3.svg"
        imageDimensionsText2="/fill-eye3.svg"
        imageDimensionsText3="/fill-eye3.svg"
        imageDimensionsText4="/fill-eye3.svg"
        imageDimensionsText5="/starhalffilled6.svg"
        imageDimensionsText6="/fill-eye3.svg"
        imageDimensionsText7="/starhalffilled6.svg"
        propCursor="unset"
      />
      <NewArrivalCard />
      <PerfumeCard />
      <FullServices
        services="/services12.svg"
        services1="/services13.svg"
        services2="/services15.svg"
        services3="/services14.svg"
        showFrameDiv
        frameDivVisible={false}
        fullServicesPosition="absolute"
        fullServicesTop="5161px"
        fullServicesLeft="249px"
      />
      <Footer
        iconCopyright="/iconcopyright4.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay10.svg"
        footerPosition="absolute"
        footerTop="5462px"
        footerLeft="0px"
      />
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header
        user1="/user2.svg"
        headerPosition="absolute"
        headerGap="130px"
        headerTop="88px"
        headerLeft="135px"
        userIconBorderRadius="47px"
      />
      <LineIcon />
      <AccountDropdoen
        iconMallbag="/iconmallbag2.svg"
        accountDropdoenPosition="absolute"
        accountDropdoenTop="126px"
        accountDropdoenLeft="1081px"
      />
      <img
        className="fill-with-up-arrow2"
        alt=""
        src="/fill-with-up-arrow.svg"
      />
    </div>
  );
};

export default AccountDropdownWithAccount;
