import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-36 items-center justify-center px-8 py-16 md:py-24 lg:py-32 space-x-6 text-white">
      <div className="w-full md:w-3/5 px-12">
        <p className="font-poppins text-4xl md:text-5xl lg:text-6xl leading-[76px]">
          Dynamite Launchpad <span className="text-yellow">Blast</span> Your
          Web3 Growth!
        </p>
        <p className="font-montserrat font-medium text-lg md:text-2xl lg:text-2xl pt-8 md:pt-12 lg:pt-16">
          We are BLASTing off soon with Dynamyte Launchpad{"'"}s Explosive IDO!
        </p>
        <p className="font-montserrat font-semibold text-lg md:text-xl lg:text-2xl pt-8 pb-6">
          Join the waitlist
        </p>
        <Button />
      </div>

      <div className="hidden md:block w-2/5">
        <div className="p-4 rounded-lg shadow-md">
          <img
            src="logo.png"
            alt="Dynamyte graphic"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
