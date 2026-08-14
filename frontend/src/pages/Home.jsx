import { ArrowRight, Bot, CheckCircle2, Database, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Bot, title: "Agentic workflows", text: "Build reliable AI assistants that coordinate tools, data, and approvals." },
  { icon: Database, title: "Connected knowledge", text: "Ground every answer in current company sources with clear traceability." },
  { icon: ShieldCheck, title: "Governed by design", text: "Ship with permissions, guardrails, audit logs, and human review." }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Enterprise AI command layer</span>
            <h1>AuraGrid AI</h1>
            <p>
              Launch production-grade AI workflows across sales, support, operations, and strategy with one secure platform.
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/contact">
                Book demo <ArrowRight size={18} />
              </Link>
              <Link className="button secondary" to="/platform">
                Explore platform
              </Link>
            </div>
          </div>

          <div className="hero-panel" aria-label="AuraGrid AI workflow preview">
            <div className="panel-topline">
              <span>Live workflow</span>
              <strong>99.95% uptime</strong>
            </div>
            <div className="flow-stack">
              <div className="flow-row active">
                <Zap size={20} />
                <span>New customer signal detected</span>
              </div>
              <div className="flow-row">
                <Database size={20} />
                <span>CRM, docs, and product data synced</span>
              </div>
              <div className="flow-row">
                <Bot size={20} />
                <span>AI generates next best action</span>
              </div>
              <div className="flow-row">
                <CheckCircle2 size={20} />
                <span>Manager approval routed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container highlight-grid">
          {highlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <item.icon size={28} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
