import { configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import counterSlice from "../features/counterSlice";


const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer},
});

export default store;
