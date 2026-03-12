import { MainContentSection } from "./sections/MainContentSection";
import { UserProfileSection } from "./sections/UserProfileSection";
import { WelcomeBenefitsSection } from "./sections/WelcomeBenefitsSection";

export const ProfileInfo = (): JSX.Element => {
  return (
    <div
      className="relative w-[1280px] h-[800px] bg-deepblue-100 overflow-hidden"
      data-model-id="417:9830"
    >
      <header className="flex w-[calc(100%_-_180px)] h-16 items-center justify-between px-0 py-3 absolute top-0 left-[90px] bg-transparent">
        <div className="relative w-32 h-8 aspect-[4]">
          <img
            className="absolute w-[73.68%] h-[92.14%] top-[7.86%] left-[26.32%]"
            alt="Group"
            src="https://c.animaapp.com/x7Z5bblT/img/group@2x.png"
          />

          <img
            className="absolute w-[73.55%] h-[51.94%] top-[48.06%] left-[26.45%]"
            alt="Group"
            src="https://c.animaapp.com/x7Z5bblT/img/group-1@2x.png"
          />

          <img
            className="absolute w-full h-[92.86%] top-[7.14%] left-0"
            alt="Group"
            src="https://c.animaapp.com/x7Z5bblT/img/group-2@2x.png"
          />
        </div>

        <div className="inline-flex h-8 items-center justify-center gap-1 pt-[var(--collection-1-0)] pb-[var(--collection-1-0)] px-1 relative flex-[0_0_auto] bg-whitetransparent-10 rounded-xl">
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt="User"
            src="https://c.animaapp.com/x7Z5bblT/img/user.svg"
          />
        </div>
      </header>

      <WelcomeBenefitsSection />
      <MainContentSection />
      <UserProfileSection />
    </div>
  );
};
