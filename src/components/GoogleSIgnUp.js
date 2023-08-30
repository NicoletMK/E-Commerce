import { useMemo } from "react";
import "./GoogleSIgnUp.css";
const GoogleSIgnUp = ({
  iconGoogle,
  googleSIgnUpPosition,
  signUpWithColor,
}) => {
  const googleSIgnUpStyle = useMemo(() => {
    return {
      position: googleSIgnUpPosition,
    };
  }, [googleSIgnUpPosition]);

  const signUpWithStyle = useMemo(() => {
    return {
      color: signUpWithColor,
    };
  }, [signUpWithColor]);

  return (
    <div className="google-sign-up" style={googleSIgnUpStyle}>
      <div className="icon-google-parent">
        <img className="icon-google" alt="" src={iconGoogle} />
        <div className="sign-up-with" style={signUpWithStyle}>
          Sign up with Google
        </div>
      </div>
    </div>
  );
};

export default GoogleSIgnUp;
