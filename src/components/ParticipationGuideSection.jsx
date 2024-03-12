const HowToParticipateSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-16 ">
        <h2 className="text-5xl font-semibold text-center mb-8 font-poppins">
          How to Participate
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="relative flex items-center flex-col space-y-8">
            <div className="bg-[#7C2925] rounded-full w-20 h-20 flex items-center justify-center">
              <span className="text-2xl font-montserrat font-semibold">1</span>
            </div>
            <p className=" font-poppins text-3xl font-semibold mt-2 text-center">
              Join Our Tribe
            </p>
          </div>
          <div className="relative flex items-center flex-col space-y-8">
            <div className="bg-[#7C2925] rounded-full w-20 h-20 flex items-center justify-center">
              <span className="text-2xl font-montserrat font-semibold">2</span>
            </div>
            <p className=" font-poppins text-3xl font-semibold mt-2 text-center">
              Get Verified
            </p>
          </div>
          <div className="relative flex items-center flex-col space-y-8">
            <div className="bg-[#7C2925] rounded-full w-20 h-20 flex items-center justify-center">
              <span className="text-2xl font-montserrat font-semibold">3</span>
            </div>
            <p className=" font-poppins text-3xl font-semibold mt-2 text-center">
              Connect Wallet
            </p>
          </div>
          <div className="relative flex items-center flex-col space-y-8">
            <div className="bg-[#7C2925] rounded-full w-20 h-20 flex items-center justify-center">
              <span className="text-2xl font-montserrat font-semibold">4</span>
            </div>
            <p className=" font-poppins text-3xl font-semibold mt-2 text-center">
              Stake & Earn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToParticipateSection;
