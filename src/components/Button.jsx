import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to={"/"} className="hover:bg-yellow-500">
      <img src="./button.svg" alt="Join now button" />
    </Link>
  );
};

export default Button;
