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
import Header5 from "../components/Header5";
import LineIcon from "../components/LineIcon";
import "./CategoryDropdown.css";
const CategoryDropdown = () => {
  return (
    <div className="category-dropdown">
      <div className="category-dropdown-child" />
      <div className="category-dropdown-item" />
      <div className="category-dropdown-inner" />
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
      />
      <NewArrivalCard />
      <PerfumeCard />
      <FullServices
        services="/services12.svg"
        services1="/services13.svg"
        services2="/services14.svg"
        services3="/services15.svg"
        showFrameDiv={false}
        frameDivVisible
        fullServicesPosition="absolute"
        fullServicesTop="5161px"
        fullServicesLeft="249px"
      />
      <Footer
        iconCopyright="/iconcopyright4.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay9.svg"
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
      <Header5 />
      <LineIcon />
      <img
        className="fill-with-up-arrow1"
        alt=""
        src="/fill-with-up-arrow.svg"
      />
    </div>
  );
};

export default CategoryDropdown;
