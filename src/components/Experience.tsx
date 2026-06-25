import { motion } from "framer-motion";
import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";
import "./Experience.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section id="experience" className="exp">
      <SectionHeading fig="05" title="Experience" note="WORK ON RECORD" />

      <div className="exp__list">
        {experience.map((job, i) => (
          <motion.div
            className="exp-row"
            key={job.org}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: easeOut, delay: i * 0.08 }}
          >
            <div className="exp-row__date">
              <span className="exp-row__node" />
              <span>{job.date}</span>
            </div>

            <div className="exp-card">
              <div className="exp-card__head">
                <h3>
                  {job.role} <span className="exp-card__type">{job.type}</span>
                </h3>
                <p className="exp-card__org">{job.org}</p>
              </div>
              <ul className="exp-card__bullets">
                {job.bullets.map((b) => (
                  <li key={b}>
                    <span className="exp-card__bullet-mark" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
