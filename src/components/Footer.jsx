import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date();

  return (
    <section className="bg-[#330302] mx-auto h-72 flex flex-col">
      <footer className="mx-12 flex justify-between items-center pt-20">
        <Link to="/">
          <img src="./logo.png" alt="logo" />
        </Link>
        <div className="flex gap-10">
          <Link to="#" className="font-poppins font-medium text-lg">
            Docs
          </Link>
          <Link to="#" className="font-poppins font-medium text-lg">
            Apply IDO
          </Link>
          <Link to="#" className="font-poppins font-medium text-lg">
            Stake
          </Link>
        </div>
        <div className="flex justify-between gap-8">
          <Link to="#">
            <img src="./telegram.png" alt="telegram" />
          </Link>
          <Link to="#">
            <img src="./X.png" alt="twitter" />
          </Link>
        </div>
      </footer>
      <hr className="border-t border-solid border-[0.9px] border-[#3E4550] mx-12 mt-20" />
      <footer className="flex justify-between mx-12 my-6">
        <p>©Dynamyte {date.getFullYear()}, All Rights Reserved</p>
        <div className="flex justify-between">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Policy</Link>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
