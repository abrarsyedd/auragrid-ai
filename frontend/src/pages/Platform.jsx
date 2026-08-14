import { BarChart3, Boxes, Network, ShieldCheck, Workflow, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingState from "../components/LoadingState.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { fetchOverview } from "../services/api.js";

const iconMap = {
  workflow: Workflow,
  gateway: Network,
  grid: Boxes,
  shield: ShieldCheck,
  analytics: BarChart3,
  hub: Zap
};

export default function Platform() {
  const [overview, setOverview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOverview().then(setOverview).catch(() => setError("Unable to load platform data. Please start the backend API."));
  }, []);

  if (error) {
    return <div className="container page-message">{error}</div>;
  }

  if (!overview) {
    return <LoadingState />;
  }

  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="Platform"
          title="One grid for models, knowledge, workflows, and control"
          body="AuraGrid AI gives teams the foundation they need to move AI from experiments to daily operations."
        />

        <div className="metric-grid">
          {overview.metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>
                {metric.value}
                {metric.suffix}
              </strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="feature-grid">
          {overview.features.map((feature) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <article className="feature-card" key={feature.title}>
                <Icon size={28} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
