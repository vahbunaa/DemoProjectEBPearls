import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, actions) => {
      const users = actions.payload;
      state.users = users;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
