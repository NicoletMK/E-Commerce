import FlashSaleOfferSeconds from "./FlashSaleOfferSeconds";
import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import "./MusicExperienceEnhancerContain.css";
const MusicExperienceEnhancerContain = () => {
  return (
    <div className="ellipse-parent2">
      <div className="frame-child20" />
      <div className="enhance-your-music">Enhance Your Music Experience</div>
      <div className="flash-sell-timer-parent">
        <FlashSaleOfferSeconds
          prop="23"
          seconds="Hours"
          ellipseDivBackgroundColor="#fff"
          frameDivWidth="51.61%"
          frameDivRight="24.19%"
          frameDivLeft="24.19%"
          divColor="0.5px solid #000"
          secondsColor="0.5px solid #000"
          secondsWidth="32px"
        />
        <FlashSaleOfferSeconds
          prop="05"
          seconds="Days"
          ellipseDivBackgroundColor="#fff"
          frameDivWidth="45.16%"
          frameDivRight="27.42%"
          frameDivLeft="27.42%"
          divColor="0.5px solid #000"
          secondsColor="0.5px solid #000"
          secondsWidth="28px"
        />
        <FlashSaleOfferSeconds
          prop="59"
          seconds="Minutes"
          ellipseDivBackgroundColor="#fff"
          frameDivWidth="67.74%"
          frameDivRight="16.13%"
          frameDivLeft="16.13%"
          divColor="0.5px solid #000"
          secondsColor="0.5px solid #000"
          secondsWidth="43px"
        />
        <FlashSaleOfferSeconds
          prop="35"
          seconds="Seconds"
          ellipseDivBackgroundColor="#fff"
          frameDivWidth="77.42%"
          frameDivRight="11.29%"
          frameDivLeft="11.29%"
          divColor="0.5px solid #000"
          secondsColor="0.5px solid #000"
          secondsWidth="48px"
        />
      </div>
      <ButtonSmallHoverNo
        addToCart="Buy Now!"
        buttonSmallHoverNoPosition="absolute"
        buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
        buttonSmallHoverNoTop="375px"
        buttonSmallHoverNoLeft="56px"
        buttonSmallHoverNoBackgroundColor="#00ff66"
        buttonSmallHoverNoBorder="unset"
        addToCartColor="#fafafa"
      />
      <div className="categories">Categories</div>
      <div className="jbl-boombox-2-hero-020-x1-1-wrapper">
        <img
          className="jbl-boombox-2-hero-020-x1-1"
          alt=""
          src="/jbl-boombox-2-hero-020-x1-1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default MusicExperienceEnhancerContain;
