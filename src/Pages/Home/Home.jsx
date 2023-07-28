import PieCharts from "../../Components/PieCharts/PieCharts";
import Statistics from "../../Components/Statistics/Statistics";

const Home = () => {
  return (
    <div className="p-4">
      <Statistics />
      <div className="grid md:grid-cols-2">
        <PieCharts />
      </div>
    </div>
  );
};

export default Home;
