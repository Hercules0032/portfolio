import { certifications } from "../data/content";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section className="certs">
      <div className="certs__inner">
        <span className="certs__label">CERTIFIED COMPONENTS</span>
        <div className="certs__row">
          {certifications.map((c) => (
            <div className="cert" key={c.name}>
              <span className="cert__check">✓</span>
              <div>
                <p className="cert__name">{c.name}</p>
                <p className="cert__issuer">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
