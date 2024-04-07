import WinnerBanner from "@/components/Contest/WithLayout/Completed/Winner/WinnerBanner";
import WinnerNav from "@/components/Contest/WithLayout/Completed/Winner/WinnerNav";

const ContestMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <WinnerBanner />
      <div className="container mx-auto my-10">
        <div>
          <WinnerNav />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ContestMainLayout;
