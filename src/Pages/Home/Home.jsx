import AreaCharts from "../../Components/AreaCharts/AreaCharts";
import BarCharts from "../../Components/BarCharts/BarCharts";
import PieCharts from "../../Components/PieCharts/PieCharts";
import Statistics from "../../Components/Statistics/Statistics";
import Summary from "../../Components/Summary/Summary";

const Home = () => {
  return (
    <div className="p-4 bg-secondary">
      <Statistics />
      <div className="grid lg:grid-cols-2 gap-4">
        <PieCharts />
        <AreaCharts />
      </div>
      <div className="grid lg:grid-cols-12 gap-4 w-full">
        <div className="lg:col-span-8 border overflow-auto">
          <BarCharts />
        </div>
        <div className="lg:col-span-4">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Home;
