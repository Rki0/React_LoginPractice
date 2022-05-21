// import { combineReducers } from "redux";
// import login from "./login";

// const rootReducer = combineReducers({
//   login,
// });

// export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
