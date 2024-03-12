const CompanyCTO = () => {
  const CTOs = [
    {
      title: "Fair Launch Protocol",
      description: [
        "No initial price set, allowing for natural value development",
        "Eliminates automated trading, ensuring a bot-free environment",
      ],
      image: "./img1.svg",
    },
    {
      title: "Permissionless Listings",
      description: [
        "Building Solid Foundations for New Ventures",
        "Emphasizing People & Teams for Dynamic Project Launches",
      ],
      image: "./img2.svg",
    },
    {
      title: "Stake to Participate: ",
      description: [
        "Stake TNT tokens to join token launches.",
        "Tiered Access for different participation levels based on staked amount.",
      ],
      image: "./img3.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden space-y-10">
      <div className="font-poppins text-5xl mx-auto font-semibold">
        What Sets Us Apart
      </div>
      <div className="flex items-center justify-center gap-[4rem] p-12">
        {CTOs.map((CTO, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#F7504933] to-[#FF0A0033] w-[25.75rem] h-[20rem] py-7 px-8 text-white flex flex-col justify-between clip-path-1 shadow-[6px_6px_0px_0px] shadow-yellow"
          >
            <div className="p-4 bg-[#F7504980] w-16 h-16">
              <img src={CTO.image} alt={CTO.title} className="w-9 h-9" />
            </div>
            <div className="font-montserrat font-semibold text-2xl">
              {CTO.title}
            </div>
            <ul className="list-disc pl-4 space-y-3 tracking-tighter">
              {CTO.description.map((desc, index) => (
                <li
                  key={index}
                  className="text-lg font-montserrat font-medium leading-5"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCTO;
