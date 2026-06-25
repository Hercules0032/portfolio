import { motion } from "framer-motion";
import { deployments, projects } from "../data/content";
import SectionHeading from "./SectionHeading";
import "./LiveDeployments.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

const PLATFORM_DOT: Record<string, string> = {
  Vercel: "#fff",
  Netlify: "#6fe0f2",
  Render: "#e0a857",
};

export default function LiveDeployments() {
  return (
    <section id="live" className="live">
      <SectionHeading
        fig="07"
        title="Live Deployments"
        note="DEPLOYED ON VERCEL · NETLIFY · RENDER"
      />

      <motion.div
        className="live__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {deployments.map((d) => {
          const project = projects.find((p) => p.id === d.projectId);
          if (!project) return null;

          return (
            <motion.div
              className="live-card"
              key={d.projectId}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
              }}
            >
              <div className="live-card__bar">
                <span
                  className="live-card__dot"
                  style={{ background: PLATFORM_DOT[d.platform] }}
                />
                <span className="live-card__platform">{d.platform}</span>
                <span className="live-card__status">
                  {d.configured ? "LIVE" : "NOT DEPLOYED"}
                </span>
              </div>

              <div className="live-card__preview">
                {d.configured && d.mode === "iframe" ? (
                  <iframe
                    src={d.url}
                    title={`${project.name} live preview`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <div className="live-card__placeholder">
                    <span className="live-card__placeholder-glyph">{"</>"}</span>
                    <span className="live-card__placeholder-text">
                      {d.configured ? "Preview unavailable" : "Add deployment URL"}
                    </span>
                  </div>
                )}
              </div>

              <div className="live-card__foot">
                <h4>{project.name}</h4>
                {d.configured ? (
                  <a href={d.url} target="_blank" rel="noreferrer">
                    Open live ↗
                  </a>
                ) : (
                  <span className="live-card__pending">Pending →</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
