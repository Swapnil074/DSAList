import { configureStore } from "@reduxjs/toolkit";
import { listApi } from "../services/listApi";

export default configureStore({
  reducer: {
    [listApi.reducerPath]: listApi.reducer,
  },
});
