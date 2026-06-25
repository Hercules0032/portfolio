import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects, type Project } from "../data/content";
import SectionHeading from "./SectionHeading";
import "./Projects.css";

const easeOut = [0.16, 1, 0.3, 1] as const;
const PINNED_SLOTS = 5;

export default function Projects() {
  const pinned = projects.filter((p) => p.pinned);
  const emptySlots = Math.max(0, PINNED_SLOTS - pinned.length);

  return (
    <section id="projects" className="projects">
      <SectionHeading fig="06" title="Projects" note="PINNED — TOP PICKS" />

      <motion.div
        className="projects__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {pinned.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
        {Array.from({ length: emptySlots }).map((_, i) => (
          <EmptySlot key={`empty-${i}`} index={pinned.length + i + 1} />
        ))}
      </motion.div>
    </section>
  );
}

function EmptySlot({ index }: { index: number }) {
  return (
    <motion.div
      className="proj-card proj-card--empty"
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
      }}
    >
      <span className="proj-card__pin-index">PIN {String(index).padStart(2, "0")}</span>
      <span className="proj-card__empty-glyph">+</span>
      <span className="proj-card__empty-text">Reserved for the next build</span>
    </motion.div>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const transform = useTransform(
    [srx, sry],
    ([a, b]: number[]) => `perspective(800px) rotateX(${a}deg) rotateY(${b}deg)`
  );

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(py * -6);
    ry.set(px * 8);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      ref={ref}
      className="proj-card"
      style={{ transform }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
      }}
    >
      <span className="proj-card__pin" aria-hidden="true" />

      <div className="proj-card__top">
        <div>
          <h3>{p.name}</h3>
          <p className="proj-card__tagline">{p.tagline}</p>
        </div>
        <span className="proj-card__date">{p.date}</span>
      </div>

      <ul className="proj-card__bullets">
        {p.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="proj-card__stack">
        {p.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>

      <div className="proj-card__foot">
        {p.placeholderLink ? (
          <span className="proj-card__link proj-card__link--placeholder">
            {p.linkLabel} →
          </span>
        ) : (
          <a
            className="proj-card__link"
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            {p.linkLabel} →
          </a>
        )}
      </div>
    </motion.article>
  );
}
