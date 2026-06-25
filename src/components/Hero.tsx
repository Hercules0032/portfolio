import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiLaravel,
  SiFastapi,
  SiMysql,
  SiPython,
  SiPhp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { profile, stats } from "../data/content";
import Magnetic from "./Magnetic";
import CountUp from "./CountUp";
import "./Hero.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

const STACK = [
  { label: "FastAPI", sub: "+ Pydantic", Icon: SiFastapi },
  { label: "Laravel", sub: "+ Sanctum", Icon: SiLaravel },
  { label: "TypeScript", sub: "", Icon: SiTypescript },
  { label: "React", sub: "+ Vite", Icon: SiReact },
  { label: "Java", sub: "Core, 21", Icon: FaJava },
  { label: "Python", sub: "", Icon: SiPython },
  { label: "PHP", sub: "", Icon: SiPhp },
  { label: "MySQL", sub: "", Icon: SiMysql },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
          }}
        >
          <motion.p
            className="hero__eyebrow"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
            }}
          >
            <span className="hero__eyebrow-dot" />
            FIG. 01 — INTRODUCTION &nbsp;·&nbsp; {profile.status}
          </motion.p>

          <motion.h1
            className="hero__title"
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
            }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="hero__role"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
            }}
          >
            {profile.role}
          </motion.p>

          <motion.blockquote
            className="hero__quote"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
            }}
          >
            <span className="hero__quote-mark">“</span>
            {profile.quote}
          </motion.blockquote>

          <motion.div
            className="hero__cta"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
            }}
          >
            <Magnetic>
              <a href="#projects" className="btn btn--primary">
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn--ghost">
                Get In Touch
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.resumeUrl} className="btn btn--ghost" download="Pratyay-Roy-Resume.pdf">
                Download Resume
              </a>
            </Magnetic>
          </motion.div>

          <motion.ul
            className="hero__socials"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.6, delay: 0.1 } },
            }}
          >
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <span>↗</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span>↗</span>
              </a>
            </li>
            <li>
              <a href={profile.leetcode} target="_blank" rel="noreferrer">
                LeetCode <span>↗</span>
              </a>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__diagram relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          aria-hidden="true"
        >
          <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle,rgba(95,212,232,0.08)_0%,transparent_65%)] blur-2xl" />
          <StackGrid />
        </motion.div>
      </div>

      <motion.div
        className="hero__dims"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {stats.map((s) => (
          <div className="dim" key={s.label}>
            <span className="dim__tick" />
            <span className="dim__value">
              <CountUp value={s.value} />
            </span>
            <span className="dim__label">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function StackGrid() {
  return (
    <motion.div
      className="stackgrid"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
      }}
    >
      {STACK.map(({ label, sub, Icon }) => (
        <motion.div
          className="stackgrid__card"
          key={label}
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
          }}
          whileHover={{ y: -3 }}
        >
          <Icon className="stackgrid__icon" aria-hidden="true" />
          <span className="stackgrid__label">{label}</span>
          {sub && <span className="stackgrid__sub">{sub}</span>}
        </motion.div>
      ))}
    </motion.div>
  );
}
