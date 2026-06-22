import Link from "next/link";

const modes = [
  { title: "Online Course", desc: "Learn from anywhere with structured lessons, resources, and community support.", price: "$100 lifetime" },
  { title: "Physical Classes", desc: "In-person learning for students who prefer classroom guidance and practical examples.", price: "$150" },
  { title: "One-on-One Mentorship", desc: "Private coaching focused on your mistakes, risk management, and trading plan.", price: "Custom" },
];

export default function LearningModesPage() {
  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">Learning Modes</span>
        <h1>Choose how you want to learn trading.</h1>
        <p className="muted max">
          GSM Trading Lab is built for practical learning, risk discipline, and long-term consistency.
          Pick the learning mode that fits your schedule and experience level.
        </p>

        <div className="grid3 mt">
          {modes.map((mode) => (
            <div className="glass-card" key={mode.title}>
              <h3>{mode.title}</h3>
              <p className="muted">{mode.desc}</p>
              <strong className="green">{mode.price}</strong>
            </div>
          ))}
        </div>

        <div className="cta-row mt">
          <Link className="btn primary" href="/register">Register Now</Link>
          <Link className="btn ghost" href="/contact">Talk to Support</Link>
        </div>
      </div>
    </main>
  );
}
