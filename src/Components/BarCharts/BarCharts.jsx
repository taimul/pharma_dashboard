import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2022-11-11",
    Sale: 5340,
  },
  {
    name: "2022-11-16",
    Sale: 1449,
  },
  {
    name: "2022-11-12",
    Sale: 9340,
  },
  {
    name: "2022-11-31",
    Sale: 3440,
  },
  {
    name: "2022-11-30",
    Sale: 4302,
  },
  {
    name: "2022-11-29",
    Sale: 2450,
  },
  {
    name: "2022-11-28",
    Sale: 3860,
  },
  {
    name: "2022-11-27",
    Sale: 1780,
  },
  {
    name: "2022-11-26",
    Sale: 6600,
  },
  {
    name: "2022-11-25",
    Sale: 6340,
  },
  {
    name: "2022-11-24",
    Sale: 5030,
  },
  {
    name: "2022-11-23",
    Sale: 2346,
  },
  {
    name: "2022-11-22",
    Sale: 6300,
  },
  {
    name: "2022-11-21",
    Sale: 6700,
  },
  {
    name: "2022-11-20",
    Sale: 6900,
  },
  {
    name: "2022-11-19",
    Sale: 1200,
  },
  {
    name: "2022-11-18",
    Sale: 3400,
  },
  {
    name: "2022-11-17",
    Sale: 6945,
  },
  {
    name: "2022-05-14",
    Sale: 6345,
  },
  {
    name: "2022-05-13",
    Sale: 6040,
  },
  {
    name: "2022-03-13",
    Sale: 6020,
  },
  {
    name: "2022-03-12",
    Sale: 6010,
  },
];

const BarCharts = () => {
  const [activeButton, setActiveButton] = useState("Purchase");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="p-4 bg-white mt-4 w-full rounded-lg">
      <div className="flex justify-between mb-3">
        <h1 className="font-bold">Monthly Progress Report</h1>
        <div className="flex">
          <button
            className={`${
              activeButton === "Purchase"
                ? "bg-[#64C8BC] text-white"
                : "bg-secondary"
            }  px-4 py-1 rounded-lg`}
            onClick={() => handleButtonClick("Purchase")}
          >
            Purchase
          </button>
          <button
            className={`${
              activeButton === "Sales"
                ? "bg-[#64C8BC] text-white"
                : "bg-secondary"
            }  px-8 py-1 rounded-lg`}
            onClick={() => handleButtonClick("Sales")}
          >
            Sales
          </button>
        </div>
      </div>
      <hr />
      <div className="mt-7 bg-white w-full overflow-auto">
        <ResponsiveContainer width="100%" height={367}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 20,
            }}
            barSize={10}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
              angle={-45}
              tick={{
                fontSize: 10,
              }}
              dy={18}
              dx={-20}
            />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Sale" fill="#64C8BC" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
