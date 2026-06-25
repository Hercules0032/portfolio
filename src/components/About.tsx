import { motion } from "framer-motion";
import { education } from "../data/content";
import SectionHeading from "./SectionHeading";
import "./About.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

const TRAITS = [
  {
    code: "T-01",
    title: "Builds to learn",
    body:
      "I pick up frameworks by shipping with them, not by stockpiling tutorials. Laravel arrived because MediTrack needed it; FastAPI arrived because NutriScan needed auto-generated docs.",
  },
  {
    code: "T-02",
    title: "Owns the whole stack",
    body:
      "Comfortable designing a normalized schema one hour and wiring up a React state update the next — the seam between backend and frontend is where I do my best work.",
  },
  {
    code: "T-03",
    title: "Sweats the small stuff",
    body:
      "Three-layer role middleware, bilingual i18n, indexed queries for a 25% speed-up — the unglamorous details are usually what make a system actually production-ready.",
  },
  {
    code: "T-04",
    title: "Keeps sharpening DSA",
    body:
      "Regular on LeetCode (Hercules0032), because clean architecture only gets you so far without solid fundamentals underneath it.",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <SectionHeading fig="02" title="About" note="WHO IS BUILDING THIS" />

      <motion.div
        className="about__grid"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="about__copy">
          <p>
            Hi, I'm Pratyay Roy — a passionate full-stack developer with a
            strong foundation in Laravel and FastAPI, and modern, responsive
            frontends in React.
          </p>
          <p>
            I design transactional REST APIs, build scalable relational data
            layers, and ship end-to-end systems — from database schema to
            deployed UI. Microsoft Azure Certified (AZ-900), with hands-on
            cloud deployment experience.
          </p>
        </div>

        <div className="about__edu">
          <span className="about__edu-tag">EDUCATION RECORD</span>
          <h3>{education.institution}</h3>
          <p className="about__edu-degree">{education.degree}</p>
          <div className="about__edu-row">
            <span>{education.start} — {education.end}</span>
            <span className="about__edu-cgpa">CGPA {education.cgpa}</span>
          </div>
          <div className="about__edu-divider" />
          <p className="about__edu-coursework-label">Relevant coursework</p>
          <ul className="about__edu-coursework">
            {education.coursework.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="about__traits"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        {TRAITS.map((t) => (
          <motion.div
            className="trait-card"
            key={t.code}
            whileHover={{ y: -4 }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
            }}
          >
            <span className="trait-card__code">{t.code}</span>
            <h4>{t.title}</h4>
            <p>{t.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
