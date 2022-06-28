import { useReducer, createContext } from "react";

export const CountdownContext = createContext();

const initialState = {
  timeString: "000000",
  seconds: 0,
  gifs: [],
};

const countdownReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIME_STRING":
      let timeArray = Array.from(state.timeString).splice(1, 5);
      timeArray.push(action.payload);
      let updatedTimeString = timeArray.join("");
      return {
        ...state,
        timeString: updatedTimeString,
        seconds:
          parseInt(updatedTimeString.substring(0, 2) * 60 * 60) +
          parseInt(updatedTimeString.substring(2, 4) * 60) +
          parseInt(updatedTimeString.substring(4, 6)),
      };
      break;
    case "RESET_TIME_STRING":
      return { ...state, timeString: "000000", seconds: 0 };
      break;
    default:
      return state;
  }
};

export function CountdownProvider({ children }) {
  const [state, dispatch] = useReducer(countdownReducer, initialState);

  return (
    <CountdownContext.Provider value={[state, dispatch]}>
      {children}
    </CountdownContext.Provider>
  );
}
