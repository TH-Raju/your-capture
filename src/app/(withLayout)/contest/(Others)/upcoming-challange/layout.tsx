import UpcomingBanner from "@/components/Contest/Others/Upcomings/Banner";
import Nav from "@/components/Contest/Others/Upcomings/Nav";

const ContestMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UpcomingBanner />
      <div className="md:w-[80%] w-[97%] mx-auto my-10">
        <div>
          <Nav />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ContestMainLayout;
