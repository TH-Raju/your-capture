import JoinedBanner from "@/components/Contest/Others/Joined-Challenge/CoverPic-Joined";
import JoinedChallangeNavbar from "@/components/Contest/Others/Joined-Challenge/Navbar-JoinC";

const ContestMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <JoinedBanner />
      <div className="container my-10">
        <div>
          <JoinedChallangeNavbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ContestMainLayout;
