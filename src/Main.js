import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const reducer = (state, action) => {
  if (action.type === "up") {
    return { ...state, value: state.value + action.step };
  }
  return state;
};

const initialState = { value: 0 };
const store = createStore(reducer, initialState);
const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "up", step: 2 });
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
