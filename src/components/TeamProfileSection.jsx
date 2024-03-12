const TeamProfileSection = () => {
  const teamMembers = [
    {
      name: "Megatron",
      role: "CEO",
      experience:
        "Our beacon of innovation and leadership. 6 years experience in the world of Web3 & relentless passion for DeFi.",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/2ba3/7c58/174d69ccfa25ff05681115feb54a92fc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRt6iRGe6Cn2qcJpseYCNDEMyNDxNr9LJcQqKH-FXyK8fRGb2Hlynub1drPgQRnTlY9G-IlNVtUWmqoCJCL~O4PfRg-RWiQF43vbnQTl8Wxidze7ezSnnqfsAbcBztdSfZdi~Z5L~HfI0x3wbCiiN8ulUoOMn-HSt8sf40rPADrIbfym1a2kW5C9g2FHqH3VDNPLWExGsmupEOBNl3vKZI73xRZAZV27bgbTbUHWbrZr-VYJs2wlvP6-9qs6iuBHB5pbQ~6p2Ax-0euX531DIEzAmJ9E3iuGw2i53lvlRBMHCva01l-f6XvRKJE9uJv-wVWav02-LPpvSjxxq7kExw__",
    },
    {
      name: "Wheeljack",
      role: "COO",
      experience:
        "5 years of rich operational background combined with a deep understanding of the crypto space.",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/2639/dd09/4add503fa06938ece0528107d856f013?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awTy12NDhUQcd-XDeZBrJkR~7mWE~Uhun6sZjV~iktVuB7Irke9L735H4UAwo-V2ujLY~zDCocEfFZDYr1OwMqsAonmXvaeL1VcOs8VtJyVeBfCJiUussYlqwVsF8jKXMqblRTQ4leHmWwlkGdF0f-sFztRcIqZ1XX4H9DWjNw3HVUy~rgxaFPWnwwPQPkh-E9e5q0BzXp50FODxXitqmHOETXdHAhukmdpUj~bDqfxDnuxNS6OVHMHce2x7j0udkvdZXxHFM8cS40vuTtYCl9Iu1dABX1l28f5tb8vvUEf~S~b8xmEHk124JOGriQ7kCceOD7h3HAaQXw2XuIY-vw__",
    },
    {
      name: "Tejas",
      role: "CTO",
      experience:
        "A seasoned blockchain expert, fueling Web3 growth & Dapp development for over 5 years.",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/58e4/7d54/42d67a51d8fdb87ef6021d231a98e5b5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YjGwBzYs8jZFtuI31Lu6CfAQaGvTVB0V9roy1hTMjYT7oBbm4piYfXu-6yuBrC0eSz2mfCXAhh1Ey1ATBJyjUjscdUG0khWc~kIwnKztsefgNqbnI~lNmN14NLD8k60H435TWeq8Gl4ew-yl-w65l9eDew~ewQOXXSgx0zjBVJBrdEjDcMg1~eIxKYPFtcKFi8IVrNhVkjvAUos9dhMhqBay9~YZmFrZtSgS6N2Z1HhymHTEznsVIIIbeYhdRi7qGlJBvHTSlJhnbL7E4FTKwCUfSv7TFyN87dHna1qhGsu4h4zmMqleRYukUOwKxvbh7CoNaKk~7cbUucZMo3XnHw__",
    },
    // {
    //   name: "Tejas",
    //   role: "CTO",
    //   experience:
    //     "A seasoned blockchain expert, fueling Web3 growth & Dapp development for over 5 years.",
    //   imageSrc:
    //     "https://s3-alpha-sig.figma.com/img/58e4/7d54/42d67a51d8fdb87ef6021d231a98e5b5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YjGwBzYs8jZFtuI31Lu6CfAQaGvTVB0V9roy1hTMjYT7oBbm4piYfXu-6yuBrC0eSz2mfCXAhh1Ey1ATBJyjUjscdUG0khWc~kIwnKztsefgNqbnI~lNmN14NLD8k60H435TWeq8Gl4ew-yl-w65l9eDew~ewQOXXSgx0zjBVJBrdEjDcMg1~eIxKYPFtcKFi8IVrNhVkjvAUos9dhMhqBay9~YZmFrZtSgS6N2Z1HhymHTEznsVIIIbeYhdRi7qGlJBvHTSlJhnbL7E4FTKwCUfSv7TFyN87dHna1qhGsu4h4zmMqleRYukUOwKxvbh7CoNaKk~7cbUucZMo3XnHw__",
    // },
  ];

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden md:mx-40">
      <div className="font-poppins text-5xl mx-auto font-semibold">Team</div>
      <div className="flex flex-wrap justify-around py-16">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div
              className="border border-yellow bg-[#330302] p-4 w-[24rem] h-[35rem] shadow-[6px_6px_0px_0px] shadow-yellow mb-8 mx-8"
              key={index}
            >
              <img src={member.imageSrc} alt={member.name} className="m-auto" />
              <div className="text-center mx-12 my-8 space-y-4">
                <p className="text-2xl font-poppins font-semibold">
                  {member.name} / {member.role}
                </p>
                <p className="text-base font-montserrat font-semibold ">
                  {member.experience}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfileSection;
