import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../app/features/customers/customersSlice";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

const Customer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.customers.users);

  const removeUser = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div className="p-6">
      <div className="flex items-center space-x-10">
        <h1 className="font-bold">All Customers</h1>
        <div className="flex items-end text-xs">
          <Link to="/" className="text-blue">
            Dashboard
          </Link>
          <MdNavigateNext />
          <Link>Customers</Link>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-7 overflow-auto">
        <table className="table-auto w-full ">
          <thead>
            <tr>
              <th className="py-4 border text-start px-2">Id</th>
              <th className="py-4 border text-start px-2">Name</th>
              <th className="py-4 border text-start px-2">User Name</th>
              <th className="py-4 border text-start px-2">Email</th>
              <th className="py-4 border text-start px-2">Address</th>
              <th className="py-4 border text-start px-2">Phone</th>
              <th className="py-4 border text-start px-2">Website</th>
              <th className="py-4 border text-start px-2">Company</th>
              <th className="py-4 border text-start px-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(
              ({
                id,
                name,
                username,
                email,
                address,
                phone,
                website,
                company,
              }) => (
                <tr
                  key={id}
                  className={
                    id % 2 === 0 ? "bg-white" : "bg-green bg-opacity-20"
                  }
                >
                  <td className="text-start px-2 py-4 border">{id}</td>
                  <td className="text-start px-2 py-4 border">{name}</td>
                  <td className="text-start px-2 py-4 border">{username}</td>
                  <td className="text-start px-2 py-4 border">{email}</td>
                  <td className="text-start px-2 py-4 border">
                    {address?.city}
                  </td>
                  <td className="text-start px-2 py-4 border">{phone}</td>
                  <td className="text-start px-2 py-4 border">{website}</td>
                  <td className="text-start px-2 py-4 border">
                    {company?.name}
                  </td>
                  <td
                    onClick={() => {
                      removeUser(id);
                    }}
                  >
                    <RiDeleteBin6Line
                      className="cursor-pointer mx-auto"
                      size={20}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {/* <table className="table-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th className="">Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(
            ({
              id,
              name,
              email,
              address,
              username,
              phone,
              website,
              company,
            }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address?.city}</td>
                <td>{company.name}</td>
                <td>{website}</td>
                <td
                  onClick={() => {
                    removeUser(id);
                  }}
                >
                  {" "}
                  <MdDelete
                    className="mx-auto text-red-500 cursor-pointer"
                    size={30}
                  ></MdDelete>{" "}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table> */}
    </div>
  );
};

export default Customer;
