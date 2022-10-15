// jshint esversion:6
import "./button.styles.scss";
import GoogleIcon from "@mui/icons-material/Google";
import { BaseButton, GoogleButton } from "./button.styles.js";

function Button(props) {
  // destructure props
  const { children, buttonType, ...otherInputOptions } = props;

  if (!buttonType)
    return <BaseButton {...otherInputOptions}>{children}</BaseButton>;

  return (
    <GoogleButton type="button" {...otherInputOptions}>
      {children} 
      
      <span>
        <GoogleIcon />
      </span>

    </GoogleButton>
  );
}

export default Button;
