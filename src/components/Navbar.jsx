import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to={"/"}>
            <img src="./logo.png" alt="logo" />
          </Link>
        </div>

        <div className="space-x-4">
          <Link to={'#'} className="font-poppins font-medium text-lg">
            Docs
          </Link>
          
          <Link to={'#'} className="font-poppins font-medium text-lg">
            Apply IDO
          </Link>
          <Link to={'#'} className="font-poppins font-medium text-lg">
            Stake
          </Link>
          
        </div>

        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
