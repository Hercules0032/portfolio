import "./Marquee.css";

const ITEMS = [
  "REACT",
  "LARAVEL",
  "FASTAPI",
  "TYPESCRIPT",
  "MYSQL",
  "POSTGRESQL",
  "OPENCV",
  "AZURE",
  "DOCKER",
  "PYTHON",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <span className="marquee__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
