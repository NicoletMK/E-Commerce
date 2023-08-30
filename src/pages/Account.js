import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header8 from "../components/Header8";
import LineIcon from "../components/LineIcon";
import Roadmap from "../components/Roadmap";
import FrameComponent16 from "../components/FrameComponent16";
import Footer from "../components/Footer";
import "./Account.css";
const Account = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="account2">
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header8
        imageDimensions="/user2.svg"
        onAboutTextClick={onAboutTextClick}
      />
      <LineIcon />
      <Roadmap
        account="Home"
        line13="/line-132.svg"
        nothing="My Account"
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
      <div className="welcome-md-rimel-container">
        <span>{`Welcome! `}</span>
        <span className="md-rimel">Md Rimel</span>
      </div>
      <div className="manage-my-account1">Manage My Account</div>
      <div className="my-orders">My Orders</div>
      <div className="my-wishlist">My WishList</div>
      <div className="my-profile-parent">
        <div className="my-profile">My Profile</div>
        <div className="address-book">Address Book</div>
        <div className="address-book">My Payment Options</div>
      </div>
      <div className="my-returns-parent">
        <div className="address-book">My Returns</div>
        <div className="address-book">My Cancellations</div>
      </div>
      <FrameComponent16 />
      <Footer
        iconCopyright="/iconcopyright2.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay4.svg"
        footerPosition="absolute"
        footerTop="1093px"
        footerLeft="0px"
      />
    </div>
  );
};

export default Account;
