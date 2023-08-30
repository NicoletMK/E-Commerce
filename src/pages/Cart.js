import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header3 from "../components/Header3";
import LineIcon from "../components/LineIcon";
import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent19 from "../components/FrameComponent19";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import "./Cart.css";
const Cart = () => {
  const navigate = useNavigate();

  const onUserIconClick = useCallback(() => {
    navigate("/account");
  }, [navigate]);

  return (
    <div className="cart20">
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header3 onUserIconClick={onUserIconClick} />
      <LineIcon />
      <div className="frame-parent21">
        <FrameComponent18 />
        <FrameComponent19 />
      </div>
      <Footer
        iconCopyright="/iconcopyright3.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay6.svg"
        footerPosition="absolute"
        footerTop="1303px"
        footerLeft="0px"
      />
      <Roadmap
        account="Home"
        line13="/line-131.svg"
        nothing="Cart"
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
        lineIconOpacity="0.5"
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
    </div>
  );
};

export default Cart;
