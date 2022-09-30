import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./dashboard/slice";
const rootReducer = {
  dashboard: dashboardReducer,
};

export default configureStore({
  reducer: rootReducer,
});
