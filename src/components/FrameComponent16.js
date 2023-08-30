import PlaceboxInfo from "./PlaceboxInfo";
import ButtonSmallHoverNo from "./ButtonSmallHoverNo";
import "./FrameComponent16.css";
const FrameComponent16 = () => {
  return (
    <div className="edit-your-profile-parent">
      <div className="edit-your-profile">Edit Your Profile</div>
      <div className="frame-parent36">
        <div className="first-name-group">
          <div className="last-name">First Name</div>
          <PlaceboxInfo
            md="Md"
            placeboxInfoWidth="330px"
            placeboxInfoHeight="50px"
            mdColor="0.5px solid #000"
          />
        </div>
        <div className="first-name-group">
          <div className="last-name">Last Name</div>
          <PlaceboxInfo
            md="Rimel"
            placeboxInfoWidth="330px"
            placeboxInfoHeight="50px"
            mdColor="0.5px solid #000"
          />
        </div>
      </div>
      <div className="frame-parent37">
        <div className="first-name-group">
          <div className="last-name">Email</div>
          <PlaceboxInfo
            md="rimel1111@gmail.com"
            placeboxInfoWidth="330px"
            placeboxInfoHeight="50px"
            mdColor="0.5px solid #000"
          />
        </div>
        <div className="first-name-group">
          <div className="last-name">Address</div>
          <PlaceboxInfo
            md="Kingston, 5236, United State"
            placeboxInfoWidth="330px"
            placeboxInfoHeight="50px"
            mdColor="0.5px solid #000"
          />
        </div>
      </div>
      <div className="frame-parent38">
        <div className="first-name-group">
          <div className="last-name">Password Changes</div>
          <PlaceboxInfo
            md="Current Passwod"
            placeboxInfoWidth="710px"
            placeboxInfoHeight="50px"
            mdColor="0.5px solid #000"
          />
        </div>
        <PlaceboxInfo
          md="New Passwod"
          placeboxInfoWidth="710px"
          placeboxInfoHeight="50px"
          mdColor="0.5px solid #000"
        />
        <PlaceboxInfo
          md="Confirm New Passwod"
          placeboxInfoWidth="710px"
          placeboxInfoHeight="50px"
          mdColor="0.5px solid #000"
        />
      </div>
      <div className="cancel-parent">
        <div className="last-name">Cancel</div>
        <ButtonSmallHoverNo
          addToCart="Save Changes"
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
  );
};

export default FrameComponent16;
