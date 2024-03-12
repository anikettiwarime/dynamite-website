const TierAllocationSection = () => {
  const stakedData = [
    { tokens: 10, allocation: "$50" },
    { tokens: 50, allocation: "$300" },
    { tokens: 100, allocation: "$750" },
    { tokens: 500, allocation: "$3000" },
    { tokens: 1000, allocation: "$7500" },
  ];

  return (
    <div className="relative overflow-x-auto w-[58rem] flex flex-col mx-auto items-center justify-center my-12 gap-12">
      <div className="font-poppins text-5xl mx-auto font-semibold">
        Tier Allocation
      </div>
      <table className="w-full text-center border border-[#F75049]">
        <thead className="text-xl font-semibold font-poppins bg-[#330302] border-b border-[#F75049]">
          <tr className="">
            <th scope="col" className="px-6 py-3 border-r border-[#F75049]">
              Stacked Token
            </th>
            <th scope="col" className="px-6 py-3">
              Your Allocation
            </th>
          </tr>
        </thead>
        <tbody className="text-base font-semibold font-montserrat">
          {stakedData.map((data, index) => (
            <tr className="" key={index}>
              <td className="px-6 py-4 border-r border-[#F75049]">
                {data.tokens}
              </td>
              <td className="px-6 py-4">{data.allocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TierAllocationSection;
