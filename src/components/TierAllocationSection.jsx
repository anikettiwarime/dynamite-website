const TierAllocationSection = () => {
  const stakedData = [
    { tokens: 10, allocation: "$50" },
    { tokens: 50, allocation: "$300" },
    { tokens: 100, allocation: "$750" },
    { tokens: 500, allocation: "$3000" },
    { tokens: 1000, allocation: "$7500" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-poppins text-5xl">Tier Allocation</div>
      <div className="table-auto">
        <div className="grid grid-cols-2 font-semibold">
          <div>Stacked Token</div>
          <div>Your Allocation</div>
        </div>
        {stakedData.map((data, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div>{data.tokens}</div>
            <div>{data.allocation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TierAllocationSection;
