import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",

  initialState: {},

  reducers: {
    loginAction: {
      reducer: (state, action) => {
        const request = axios
          .post("/api/users/login", action.payload)
          .then((response) => response.data);

        return {
          payload: request,
        };
      },
    },

    registerAction: {
      reducer: (state, action) => {
        const request = axios
          .post("/api/users/register", action.payload)
          .then((response) => response.data);

        return {
          payload: request,
        };
      },
    },
  },
});

export const { loginAction, registerAction } = loginSlice.actions;
export default loginSlice.reducer;

// const LOGIN_USER = "LOGIN_USER";
// const REGISTER_USER = "REGISTER_USER";

// export const loginAction = (dataToSubmit) => {
//   const request = axios
//     .post("/api/users/login", dataToSubmit)
//     .then((response) => response.data);

//   return {
//     type: LOGIN_USER,
//     payload: request,
//   };
// };

// export const registerAction = (dataToSubmit) => {
//   const request = axios
//     .post("/api/users/register", dataToSubmit)
//     .then((response) => response.data);

//   return {
//     type: REGISTER_USER,
//     payload: request,
//   };
// };

// export default function loginReducer(state = {}, action) {
//   switch (action.type) {
//     case LOGIN_USER:
//       return { ...state, loginSuccess: action.payload };

//     case REGISTER_USER:
//       return { ...state, register: action.payload };

//     default:
//       return state;
//   }
// }
