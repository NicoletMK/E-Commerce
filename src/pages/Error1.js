import TopHeader from "../components/TopHeader";
import Header8 from "../components/Header8";
import LineIcon from "../components/LineIcon";
import Roadmap from "../components/Roadmap";
import ButtonSmallHoverNo from "../components/ButtonSmallHoverNo";
import Footer from "../components/Footer";
import "./Error1.css";
const Error1 = () => {
  return (
    <div className="error">
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header8
        imageDimensions="/user1.svg"
        searchComponentSetCursor="unset"
        wishlistIconCursor="unset"
        propBorderRadius="unset"
      />
      <LineIcon />
      <Roadmap
        account="Home"
        line13="/line-132.svg"
        nothing="404 Error"
        line14="/line-13.svg"
        nothing1="Nothing"
        line15="/line-13.svg"
        nothing2="Nothing"
        line16="/line-13.svg"
        nothing3="Nothing"
        showLineIcon={false}
        showNothing={false}
        lineIconVisible={false}
        nothingVisible={false}
        lineIconVisible1={false}
        nothingVisible1={false}
        roadmapPosition="absolute"
        roadmapTop="222px"
        roadmapLeft="135px"
        lineIconOpacity="unset"
        nothingOpacity="unset"
        lineIconWidth="13.19px"
        lineIconHeight="0px"
        lineIconOpacity1="unset"
        nothingOpacity1="unset"
        lineIconWidth1="13.19px"
        lineIconHeight1="0px"
        lineIconOpacity2="unset"
        nothingOpacity2="unset"
        lineIconOpacity3="unset"
        lineIconWidth2="13.19px"
        lineIconHeight2="0px"
      />
      <div className="not-found-parent">
        <div className="not-found">404 Not Found</div>
        <div className="your-visited-page">
          Your visited page not found. You may go home page.
        </div>
      </div>
      <ButtonSmallHoverNo
        addToCart="Back to home page"
        buttonSmallHoverNoPosition="absolute"
        buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
        buttonSmallHoverNoTop="642px"
        buttonSmallHoverNoLeft="572px"
        buttonSmallHoverNoBackgroundColor="#db4444"
        buttonSmallHoverNoBorder="unset"
        addToCartColor="#fafafa"
      />
      <Footer
        iconCopyright="/iconcopyright2.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay7.svg"
        footerPosition="absolute"
        footerTop="838px"
        footerLeft="0px"
      />
    </div>
  );
};

export default Error1;
