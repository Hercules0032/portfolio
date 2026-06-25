import "./BlueprintBackground.css";

/**
 * Fixed full-viewport blueprint grid + corner sheet marks.
 * Purely decorative — sits behind all content.
 */
export default function BlueprintBackground() {
  return (
    <div className="bp-bg" aria-hidden="true">
      <div className="bp-bg__grid" />
      <div className="bp-bg__vignette" />
      <span className="bp-bg__mark bp-bg__mark--tl">SHEET 01/01</span>
      <span className="bp-bg__mark bp-bg__mark--tr">REV 2026.06</span>
      <span className="bp-bg__mark bp-bg__mark--bl">SCALE NTS</span>
      <span className="bp-bg__mark bp-bg__mark--br">P. ROY — PORTFOLIO</span>
    </div>
  );
}
