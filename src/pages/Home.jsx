import {
  CircularSpot,
  CompanyCTO,
  Footer,
  HeroSection,
  Navbar,
  ParticipationGuideSection,
  TeamProfileSection,
  TierAllocationSection,
} from "../components";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#210000] via-black to-black  min-h-screen text-white px-auto w-full overflow-hidden">
      <Navbar />
      <CircularSpot position="right" />
      <HeroSection />
      <ParticipationGuideSection />
      <CompanyCTO />
      <CircularSpot position="left" />
      <TierAllocationSection />
      <CircularSpot position="right" />
      <TeamProfileSection />
      <Footer />
    </div>
  );
};

export default Home;
