export const UserProfileSection = (): JSX.Element => {
  const profileFields = [
    { label: "Phone number", value: "+234 888 9999 000" },
    { label: "E–mail", value: "adewale@okonkwo.com" },
    { label: "BVN", value: "12345678901" },
    { label: "RC number", value: "RC 0000000" },
  ];

  return (
    <div className="flex flex-col w-[calc(100%_-_960px)] items-start pt-0 pb-4 px-0 absolute left-[870px] bottom-[408px] bg-[#040c24] rounded-3xl overflow-hidden">
      <div className="flex items-center justify-between pt-4 pb-0 px-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-around gap-[146px] px-0.5 py-0 relative flex-1 grow">
          <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
            Adewale Okonkwo
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch w-full h-4" />

        {profileFields.map((field, index) => (
          <div key={index} className="flex flex-col w-full">
            <div className="pl-0.5 pr-0 py-0 flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--caption-m-medium-font-style)]">
                  {field.label}
                </div>
              </div>

              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-[#ffffff] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                  {field.value}
                </div>
              </div>
            </div>

            {index < profileFields.length - 1 && (
              <div className="h-3 relative self-stretch w-full" />
            )}
          </div>
        ))}

        <div className="h-5 relative self-stretch w-full" />

        <button className="flex h-10 items-center justify-center gap-1 px-4 py-2 relative self-stretch w-full bg-white rounded-xl cursor-pointer">
          <div className="inline-flex items-center justify-center gap-2.5 pt-0 pb-0.5 px-0 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-black text-[length:var(--body-bold-font-size)] text-center tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Log out
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
