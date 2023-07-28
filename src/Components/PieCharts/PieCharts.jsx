import { Cell, Pie, PieChart, Tooltip } from "recharts";
import bgmap from "../../assets/bgmap.png";

const data = [
  { name: "Weekly Sell", value: 500 },
  { name: "Monthly Sell", value: 700 },
  { name: "Today Sell", value: 800 },
];
const COLORS = ["#FF8A8A", "#6554C0", "#45B854"];

const PieCharts = () => {
  return (
    <div
      className="p-4 bg-white mt-4 w-full rounded-lg"
      style={{
        backgroundImage: `url(${bgmap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="font-bold">Income Express Statement</h1>
      <div className=" w-full h-[300px] flex justify-center overflow-auto">
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            data={data}
            cx={150}
            cy={150}
            innerRadius={75}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={1}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="flex justify-between text-sm">
        <h1 className="flex items-baseline">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          today
        </h1>
        <h1 className="flex items-baseline">
          <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
          weekly
        </h1>
        <h1 className="flex items-baseline">
          <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
          monthly
        </h1>
      </div>
    </div>
  );
};

export default PieCharts;
