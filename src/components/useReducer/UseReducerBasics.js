import React, { useState, useReducer } from 'react';
const countReducer = (state, action) => {
    switch (action.type) {
        case "SUBTRACT":
        return {count: state.count - 1 }
        case "ADD":
        return {count: state.count + 1 }
        case "RESET":
        return {count: 0 }
        default: 
          return state;
        //   throw new Error()
    }
};
const initialState = {
    count: 0
}

const UseReducerBasics = () => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(countReducer, initialState);

    const handleSubtract = () => {
        const id = "12345";
        dispatch({
            type: "SUBTRACT",
            payload: id

        })
        // setCount(count - 1);
    };
    const handleReset = () => {
        // setCount(0);
        dispatch({
            type: "RESET",
        })
    };
    const handleAdd = () => {
        dispatch({
                type: "ADD",
            })
        // setCount(count + 1);
    };

    let color = "#444";
    if(state.count >= 1){
        color = "blue";
    } else if(state.count < 0){
        color = "red";
    } else{
        color = "#444";
    }

  return (
    <section className="--flex-center -100vh --bg-primary">
        <div className="container --bg-light --p2 --m2 --center-all">
          <h3>React UseReducerBasics App</h3>

          <h1 style={{color: color}}>{state.count}</h1>

          <div className="buttons --flex-center">
            <button className=" --btn --btn-danger" onClick={handleSubtract}>Subtract</button>
            <button className=" --btn" onClick={handleReset}>Reset</button>
            <button className=" --btn --btn-primary"onClick={handleAdd}>Add</button>
          </div>
        </div>
    </section>
  )
}

export default UseReducerBasics