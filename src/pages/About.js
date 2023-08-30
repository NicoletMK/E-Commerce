import TopHeader from "../components/TopHeader";
import Header2 from "../components/Header2";
import LineIcon from "../components/LineIcon";
import Roadmap from "../components/Roadmap";
import FullServices from "../components/FullServices";
import ServicesFastDelivery from "../components/ServicesFastDelivery";
import ServicesMoneyBack1 from "../components/ServicesMoneyBack1";
import ServicesCustomerService from "../components/ServicesCustomerService1";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";
import "./About.css";
import React from "react";
const About = () => {
  return (
    <div className="about3">
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header2 />
      <LineIcon />
      <Roadmap
        account="Home"
        line13="/line-132.svg"
        nothing="About"
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
      <div className="our-story-parent">
        <div className="our-story">Our Story</div>
        <div className="launced-in-2015-exclusive-is-parent">
          <div className="launced-in-2015">{`Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. `}</div>
          <div className="exclusive-has-more">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>
      </div>
      <div className="side-image">
        <img
          className="portrait-two-african-females-h-icon"
          alt=""
          src="/portraittwoafricanfemalesholdingshoppingbagswhilereactingsomethingtheirsmartphone-1@2x.png"
        />
      </div>
      <FullServices
        services="/services4.svg"
        services1="/services5.svg"
        services2="/services6.svg"
        services3="/services7.svg"
        showFrameDiv={false}
        frameDivVisible
        fullServicesPosition="absolute"
        fullServicesTop="2164px"
        fullServicesLeft="248px"
      />
      <div className="frame-parent15">
        <div className="instance-wrapper">
          <ServicesFastDelivery
            services="/services8.svg"
            fREEANDFASTDELIVERY="10.5k "
            freeDeliveryForAllOrdersO="Sallers active our site"
            servicesFastDeliveryPosition="absolute"
            servicesFastDeliveryTop="30px"
            servicesFastDeliveryLeft="50px"
            frameDivGap="12px"
            fREEANDFASTFontSize="32px"
            fREEANDFASTFontWeight="bold"
            fREEANDFASTFontFamily="Inter"
            fREEANDFASTLetterSpacing="0.04em"
          />
        </div>
        <div className="instance-container">
          <ServicesMoneyBack1
            services="/services9.svg"
            mONEYBACKGUARANTEE="33k"
            weReurnMoneyWithin30Days="Mopnthly Produduct Sale"
            servicesMoneyBackPosition="absolute"
            servicesMoneyBackTop="32px"
            servicesMoneyBackLeft="35px"
            frameDivGap="8px"
            mONEYBACKGUARANTEEFontSize="32px"
            mONEYBACKGUARANTEEFontWeight="bold"
            mONEYBACKGUARANTEEFontFamily="Inter"
            mONEYBACKGUARANTEELetterSpacing="0.04em"
            mONEYBACKGUARANTEEColor="#fff"
            weReurnMoneyColor="#fff"
          />
        </div>
        <div className="instance-wrapper">
          <ServicesCustomerService
            services="/services10.svg"
            cUSTOMERSERVICE="45.5k"
            friendly247CustomerSuppor="Customer active in our site"
            servicesCustomerServicePosition="absolute"
            servicesCustomerServiceTop="30px"
            servicesCustomerServiceLeft="4px"
            frameDivGap="12px"
            cUSTOMERSERVICEFontSize="32px"
            cUSTOMERSERVICEFontWeight="bold"
            cUSTOMERSERVICEFontFamily="Inter"
            cUSTOMERSERVICELetterSpacing="0.04em"
          />
        </div>
        <div className="instance-wrapper">
          <ServicesMoneyBack1
            services="/services11.svg"
            mONEYBACKGUARANTEE="25k"
            weReurnMoneyWithin30Days="Anual gross sale in our site"
            servicesMoneyBackPosition="absolute"
            servicesMoneyBackTop="30px"
            servicesMoneyBackLeft="28px"
            frameDivGap="12px"
            mONEYBACKGUARANTEEFontSize="32px"
            mONEYBACKGUARANTEEFontWeight="bold"
            mONEYBACKGUARANTEEFontFamily="Inter"
            mONEYBACKGUARANTEELetterSpacing="0.04em"
            mONEYBACKGUARANTEEColor="0.5px solid #000"
            weReurnMoneyColor="0.5px solid #000"
          />
        </div>
      </div>
      <div className="frame-parent16">
        <CardContainer
          imageDimensions="/image-46@2x.png"
          celebrityImageUrl="Tom Cruise"
          roleTitle={`Founder & Chairman`}
        />
        <div className="frame-parent17">
          <div className="image-51-wrapper">
            <img className="image-51-icon" alt="" src="/image-51@2x.png" />
          </div>
          <div className="frame-parent18">
            <div className="emma-watson-parent">
              <div className="emma-watson">Emma Watson</div>
              <div className="managing-director">Managing Director</div>
            </div>
            <div className="icon-twitter-parent">
              <img className="icon-twitter2" alt="" src="/icontwitter1.svg" />
              <img className="icon-twitter2" alt="" src="/iconinstagram1.svg" />
              <img className="icon-twitter2" alt="" src="/iconlinkedin1.svg" />
            </div>
          </div>
        </div>
        <CardContainer
          imageDimensions="/image-47@2x.png"
          celebrityImageUrl="Will Smith"
          roleTitle="Product Designer"
          propLeft="22px"
          propWidth="326px"
        />
      </div>
      <div className="ellipse-container">
        <div className="frame-child3" />
        <div className="frame-child3" />
        <img className="group-icon" alt="" src="/group-1000005940.svg" />
        <div className="frame-child3" />
        <div className="frame-child3" />
      </div>
      <Footer
        iconCopyright="/iconcopyright2.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay3.svg"
        footerPosition="absolute"
        footerTop="2465px"
        footerLeft="0px"
      />
    </div>
  );
};

export default About;
