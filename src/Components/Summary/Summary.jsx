const data = [
  {
    type: "Total Sales",
    amount: 2230,
  },
  {
    type: "Total Purchase",
    amount: 322,
  },
  {
    type: "Cash Received",
    amount: 32133.23,
  },
  {
    type: "Bank Received",
    amount: 0,
  },
  {
    type: "E-Banking",
    amount: 500,
  },
  {
    type: "Mobile-Banking",
    amount: 0,
  },
  {
    type: "Others",
    amount: 500,
  },
  {
    type: "Total Service",
    amount: 0,
  },
];

const Summary = () => {
  return (
    <div className="p-4 bg-white  mt-4 rounded-lg border-b-4">
      <h1 className="mb-4 font-bold">Summary</h1>
      <hr className="mb-7" />
      <div className="border">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-green bg-opacity-20">
              <th className="px-4 py-2 text-left">Today Report</th>
              <th className="px-4 py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-white" : "bg-green bg-opacity-20"
                }
              >
                <td className="px-4 py-2 border">{item.type}</td>
                <td className="px-4 py-2 text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Summary;
