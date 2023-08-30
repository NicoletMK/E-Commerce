import TopHeader from "../components/TopHeader";
import Header4 from "../components/Header4";
import LineIcon from "../components/LineIcon";
import Footer from "../components/Footer";
import FrameComponent20 from "../components/FrameComponent20";
import FrameComponent21 from "../components/FrameComponent21";
import "./Wishlist.css";
const Wishlist = () => {
  return (
    <div className="wishlist1">
      <TopHeader
        dropDown="/dropdown1.svg"
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
      />
      <Header4 />
      <LineIcon />
      <Footer
        iconCopyright="/iconcopyright3.svg"
        iconSend="/iconsend2.svg"
        googlePlay="/googleplay8.svg"
        footerPosition="absolute"
        footerTop="1346px"
        footerLeft="0px"
      />
      <div className="frame-parent22">
        <FrameComponent20 />
        <FrameComponent21 />
      </div>
    </div>
  );
};

export default Wishlist;
