// jshint esversion:6
import "./button.styles.scss";

function Button(props) {
  // destructure props
  const { children } = props;
  return <button>{children}</button>;
}

export default Button;
