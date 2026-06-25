import "./SectionHeading.css";

type Props = {
  fig: string;
  title: string;
  note?: string;
};

export default function SectionHeading({ fig, title, note }: Props) {
  return (
    <div className="sec-head">
      <span className="sec-head__fig">FIG. {fig}</span>
      <h2 className="sec-head__title">{title}</h2>
      {note && <span className="sec-head__note">{note}</span>}
    </div>
  );
}
