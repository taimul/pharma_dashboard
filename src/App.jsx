import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { useDispatch } from "react-redux";
import { useGetAllCustomersQuery } from "./app/features/api/aoiSlice";
import { useEffect } from "react";
import { setUsers } from "./app/features/customers/customersSlice";

function App() {
  const dispatch = useDispatch();
  const { data } = useGetAllCustomersQuery();

  useEffect(() => {
    dispatch(setUsers(data));
  }, [data]);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
