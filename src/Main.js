import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import { up } from "./counterSlice";
import { productActions } from "./productReducer";

// const reducer = (state, action) => {
//   if (action.type === "up") {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// };

// const initialState = { value: 0 };
// const store = createStore(reducer, initialState);

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    const url = "hkkkk";
    const response = await fetch(url);
    const data = await response.json();
    //dispatch({type: 'get product, payload:{data}})
    dispatch(productActions.getAllProducts({ data }));
  };
}

const Counter = () => {
  //프로퍼티 state에 counter가 생김
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          //counterSlice와 일치하는 슬라이스에 속해있는 리듀서에 /up과 일치하는 부분의 함수 호출
          // dispatch({ type: "counterSlice/up", step: 2 });
          dispatch(up(2));
          //2라는 것이 payload에 들어옴
          //step을 직접 전해주면 위 reducer에서 step사용  ex)  + action.payload;
          //자동생성되도록 하려면 payload 사용
        }}
      >
        +
      </button>
      {count}
    </div>
  );
};

const Main = () => {
  return (
    <>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </>
  );
};

export default Main;
