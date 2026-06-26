import { useState } from "react";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="contact">
      <SectionHeading fig="08" title="Contact" note="OPEN CALLOUT" />

      <div className="contact__panel">
        <h3 className="contact__headline">
          Have a system worth architecting?
        </h3>
        <p className="contact__sub">
          I'm looking for a full-time software engineering role — happy to
          talk about a specific opening, a take-home project, or just trade
          notes on Laravel vs. FastAPI.
        </p>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          <button className="btn btn--ghost" onClick={copyEmail} type="button">
            {copied ? "Copied ✓" : profile.email}
          </button>
        </div>

        <div className="contact__meta">
          <span>{profile.location}</span>
          <span>·</span>
          <span>{profile.phone}</span>
        </div>
      </div>

      {/* ---- blueprint title block ---- */}
      <footer className="titleblock">
        <div className="titleblock__row titleblock__row--top">
          <div>
            <span className="titleblock__k">TITLE</span>
            <span className="titleblock__v">{profile.name} — Portfolio</span>
          </div>
          <div>
            <span className="titleblock__k">STATUS</span>
            <span className="titleblock__v titleblock__v--accent">
              {profile.status}
            </span>
          </div>
        </div>
        <div className="titleblock__row">
          <div>
            <span className="titleblock__k">DRAWN BY</span>
            <span className="titleblock__v">{profile.name}</span>
          </div>
          <div>
            <span className="titleblock__k">SHEET</span>
            <span className="titleblock__v">01 / 01</span>
          </div>
          <div>
            <span className="titleblock__k">REV</span>
            <span className="titleblock__v">2026.06</span>
          </div>
        </div>
        <div className="titleblock__row titleblock__row--links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer">
            LeetCode
          </a>
          <span className="titleblock__copy">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
      </footer>
    </section>
  );
}
