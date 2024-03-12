import {
  CircularSpot,
  HeroSection,
  Navbar,
  ParticipationGuideSection,
  TierAllocationSection,
} from "../components";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#210000] via-black to-black  min-h-screen text-white px-40 w-full overflow-hidden">
      <Navbar />
      <CircularSpot position="right" />
      <HeroSection />
      <ParticipationGuideSection />
      <CircularSpot position="left" />
      <TierAllocationSection />
    </div>
  );
};

export default Home;
