import { useContext } from "react";
import { CountdownContext } from "../../context/CountdownContext";
import "./Clock.scss";

export default function Clock({ size }) {
  const [state, dispatch] = useContext(CountdownContext);
  const toHHMMSS = (numSecs) => {
    const dateObj = new Date(numSecs * 1000);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();
    const timeString =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    return timeString;
  };

  return (
    <div className={`clock ${size}`}>
      <span className="hours">{toHHMMSS(state.seconds)}</span>
    </div>
  );
}
