import ContestNav from "@/components/Contest/WithLayout/ContestNav";

const ContestMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ContestNav />
      <div className="container mx-auto mt-5">{children}</div>
    </div>
  );
};

export default ContestMainLayout;
