import totalCustomer from "../../assets/tottalCustomer.png";

const Home = () => {
  return (
    <div className="p-4 flex">
      <div className="bg-white w-[30%] p-3 rounded-lg flex justify-between">
        <div>
          <h1 className="text-xs">Total customer</h1>
          <h1 className="text-2xl font-bold">45</h1>
          <button className="text-xs">Show details</button>
        </div>
        <div>
          <img src={totalCustomer} alt="" width={40} />
        </div>
      </div>
    </div>
  );
};

export default Home;
