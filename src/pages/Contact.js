import TopHeader from "../components/TopHeader";
import Header1 from "../components/Header1";
import LineIcon from "../components/LineIcon";
import Roadmap from "../components/Roadmap";
import PlaceboxInfo from "../components/PlaceboxInfo";
import ButtonSmallHoverNo from "../components/ButtonSmallHoverNo";
import FrameComponent15 from "../components/FrameComponent15";
import Footer from "../components/Footer";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact4">
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header1 />
      <LineIcon />
      <Roadmap
        account="Home"
        line13="/line-132.svg"
        nothing="Cantact"
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
      <div className="contact-inner">
        <div className="frame-parent14">
          <div className="placebox-info-parent">
            <PlaceboxInfo
              placeboxInfoWidth="235px"
              placeboxInfoHeight="50px"
              mdColor="unset"
            />
            <PlaceboxInfo
              placeboxInfoWidth="235px"
              placeboxInfoHeight="50px"
              mdColor="unset"
            />
            <PlaceboxInfo
              placeboxInfoWidth="235px"
              placeboxInfoHeight="50px"
              mdColor="unset"
            />
          </div>
          <PlaceboxInfo
            md="Your Massage"
            placeboxInfoWidth="737px"
            placeboxInfoHeight="207px"
            mdColor="0.5px solid #000"
          />
          <ButtonSmallHoverNo
            addToCart="Send Massage"
            buttonSmallHoverNoPosition="unset"
            buttonSmallHoverNoPadding="var(--padding-base) var(--padding-29xl)"
            buttonSmallHoverNoTop="unset"
            buttonSmallHoverNoLeft="unset"
            buttonSmallHoverNoBackgroundColor="#db4444"
            buttonSmallHoverNoBorder="unset"
            addToCartColor="#fafafa"
          />
        </div>
      </div>
      <div className="contact-child">
        <FrameComponent15 />
      </div>
      <Footer
        iconCopyright="/iconcopyright2.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay2.svg"
        footerPosition="absolute"
        footerTop="920px"
        footerLeft="0px"
      />
    </div>
  );
};

export default Contact;
