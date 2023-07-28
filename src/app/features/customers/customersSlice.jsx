import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    deleteUser: (state, { payload }) => {
      const users = state.users.filter((user) => user.id !== payload);
      state.users = users;
    },
  },
});

export const { setUsers, deleteUser } = customersSlice.actions;
export default customersSlice.reducer;
