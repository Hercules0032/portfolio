import { motion } from "framer-motion";
import { journey } from "../data/content";
import SectionHeading from "./SectionHeading";
import "./Timeline.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Timeline() {
  return (
    <section id="journey" className="log">
      <SectionHeading fig="04" title="Journey" note="2022 — PRESENT" />

      <motion.div
        className="log__line"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {journey.map((entry) => (
          <motion.div
            className="log__entry"
            key={entry.title}
            variants={{
              hidden: { opacity: 0, x: -16 },
              show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: easeOut } },
            }}
          >
            <div className="log__node" />
            <span className="log__date">{entry.date}</span>
            <div className="log__body">
              <h4>{entry.title}</h4>
              <p>{entry.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
