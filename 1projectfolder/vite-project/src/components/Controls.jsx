import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncreament = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecreament = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncreament}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecreament}
        >
          -1
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter number"
        className="number-input"
        ref={inputElement}
      ></input>

      <button type="button" className="btn btn-success" onClick={handleAdd}>
        Add
      </button>
      <button type="button" className="btn btn-danger" onClick={handleSubtract}>
        Subtract
      </button>
    </>
  );
};
export default Controls;
