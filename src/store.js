import { configureStore } from "@reduxjs/toolkit";
//작으 슬라이스를 모아서 store를 만들 때는 configureStore사용
import counterSlice from "./counterSlice";
import productReducer from "./productReducer";

const store = configureStore({
  reducer: {
    //카운터에 대한 리듀서이다 설정
    counter: counterSlice.reducer,
    product: productReducer,
  },
});

export default store;
