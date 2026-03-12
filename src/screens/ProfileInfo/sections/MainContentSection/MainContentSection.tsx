export const MainContentSection = (): JSX.Element => {
  const branchLocations = [
    {
      id: 1,
      icon: "/img/map-pin.png",
      alt: "Map pin",
      address: "23, Awolowo Road Ikoyi",
    },
    {
      id: 2,
      icon: "/img/image.png",
      alt: "Map pin",
      address: "Kings Plaza, 80, Adeniran Ogunsanya Street, Surulere",
    },
    {
      id: 3,
      icon: "/img/map-pin-2.png",
      alt: "Map pin",
      address: "Pentagon Plaza, 23 Opebi Road, Ikeja",
    },
  ];

  const contactItems = [
    {
      id: 1,
      icon: "/img/phone.png",
      alt: "Phone",
      value: "0700 5000 500",
    },
    {
      id: 2,
      icon: "/img/at.png",
      alt: "At",
      value: "hello@renmoney.com",
    },
  ];

  return (
    <div className="absolute top-[808px] left-[calc(50.00%_-_272px)] w-[542px] h-[378px] flex flex-col">
      <img
        className="self-end w-[188.96px] h-[52px] mt-[-290px] aspect-[3.63]"
        alt="Logos"
        src="/img/logos.png"
      />

      <div className="flex ml-0.5 w-[296px] h-[172px] relative mt-[270.0px] flex-col items-start">
        <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-[#ffffff] text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-bold-font-style)]">
              Visit a branch
            </div>
          </div>
        </div>

        <div className="h-2 relative self-stretch w-full" />

        {branchLocations.map((location) => (
          <div
            key={location.id}
            className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt={location.alt}
              src={location.icon}
            />
            <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
              <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-[#ffffff] text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline [font-style:var(--body-medium-link-font-style)]">
                  {location.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex ml-0.5 w-[238px] h-[110px] relative mt-8 flex-col items-start">
        <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-[#ffffff] text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-bold-font-style)]">
              Contact us
            </div>
          </div>
        </div>

        <div className="h-2 relative self-stretch w-full" />

        {contactItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt={item.alt}
              src={item.icon}
            />
            <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
              <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-[#ffffff] text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-link-font-style)]">
                  {item.value}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
