export const WelcomeBenefitsSection = (): JSX.Element => {
  const whatHappensNextItems = [
    {
      icon: "https://c.animaapp.com/x7Z5bblT/img/chats.svg",
      alt: "Chats",
      title: "We stay in touch",
      description:
        "You'll get updates via e–mail — with launch details and everything you need to get started",
    },
    {
      icon: "https://c.animaapp.com/x7Z5bblT/img/crownsimple.svg",
      alt: "Crown simple",
      title: "You go first",
      description:
        "When we launch, early access members get priority. No waiting",
    },
    {
      icon: "https://c.animaapp.com/x7Z5bblT/img/gift.svg",
      alt: "Gift",
      title: "Your benefits are reserved",
      description:
        "All selected benefits are saved for you — ready when you are",
    },
  ];

  const benefitItems = [
    "No interest on your first loan for 3 months",
    "Business loans without ceiling",
    "Free POS terminal",
  ];

  return (
    <div className="flex flex-col w-[540px] items-start justify-center pt-6 pb-8 px-8 absolute top-[76px] left-[370px] bg-deepblue-140 rounded-3xl">
      <div className="relative self-stretch w-full h-4" />

      <img
        className="relative w-[125px] h-[120px] aspect-[1.04]"
        alt="Party popper"
        src="https://c.animaapp.com/x7Z5bblT/img/party-popper-2.svg"
      />

      <div className="h-9 relative self-stretch w-full" />

      <div className="flex-col items-start pt-2 pb-7 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
          Welcome to our first wave of customers!
        </p>
      </div>

      <div className="items-center justify-around gap-[146px] px-0.5 py-0 flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
          What happens next
        </div>
      </div>

      <div className="h-2 relative self-stretch w-full" />

      {whatHappensNextItems.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-2 pl-0.5 pr-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
        >
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt={item.alt}
            src={item.icon}
          />
          <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
            <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-[#ffffff] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                {item.title}
              </div>
            </div>
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] [font-style:var(--caption-m-medium-font-style)]">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="h-6 relative self-stretch w-full" />

      <div className="items-center justify-around gap-[146px] px-0.5 py-0 flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
          Your benefits
        </div>
      </div>

      <div className="h-1 relative self-stretch w-full" />

      {benefitItems.map((benefit, index) => (
        <div
          key={index}
          className="flex items-start gap-2 pl-0.5 pr-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="inline-flex flex-col h-[22px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-4 h-0.5 bg-[#ffffff]" />
          </div>
          <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-[#ffffff] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                {benefit}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
