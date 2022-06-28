import "./Key.scss";

export default function Key({ char, options, onClick }) {
  return (
    <div onClick={onClick} className={`key ${options} `}>
      {char}
    </div>
  );
}
