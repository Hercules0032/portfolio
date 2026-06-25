import { motion } from "framer-motion";
import { skills } from "../data/content";
import SectionHeading from "./SectionHeading";
import "./Skills.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionHeading fig="03" title="Skills" note="COMPONENT LEGEND" />

      <motion.div
        className="skills__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {skills.map((group) => (
          <motion.div
            className="skill-card"
            key={group.label}
            whileHover={{ y: -4, borderColor: "var(--accent-2)" }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
            }}
          >
            <div className="skill-card__head">
              <span className="skill-card__code">{group.code}</span>
              <h3>{group.label}</h3>
            </div>
            <ul className="skill-card__items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
