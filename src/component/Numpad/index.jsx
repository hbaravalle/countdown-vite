import { useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownContext } from "../../context/CountdownContext";
import Key from "../Key";
import "./Numpad.scss";

export default function Numpad() {
  const [state, dispatch] = useContext(CountdownContext);
  const navigate = useNavigate();
  return (
    <div className="keyboard">
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 1 })}
        char="1"
        options="small right"
      />
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 2 })}
        char="2"
        options="small right"
      />
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 3 })}
        char="3"
        options="small right"
      />
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 4 })}
        char="4"
        options="small right"
      />
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 5 })}
        char="5"
        options="small right"
      />
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 6 })}
        char="6"
        options="small right"
      />
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 7 })}
        char="7"
        options="small right"
      />
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 8 })}
        char="8"
        options="small right"
      />
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 9 })}
        char="9"
        options="small right"
      />
      <Key
        onClick={() => dispatch({ type: "UPDATE_TIME_STRING", payload: 0 })}
        char="0"
        options="large center"
      />
      <Key
        onClick={() => dispatch({ type: "RESET_TIME_STRING" })}
        char="Reset"
        options="small center"
      />
      <Key
        char="Confirm"
        options="medium green center"
        onClick={() => navigate("/step2")}
      />
    </div>
  );
}
