import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingState from "../components/LoadingState.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { fetchOverview } from "../services/api.js";

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOverview()
      .then((data) => setPlans(data.plans))
      .catch(() => setError("Unable to load pricing. Please start the AuraGrid AI backend."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <div className="container page-message">{error}</div>;
  }

  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="Pricing"
          title="Plans that scale from first workflow to full AI operations"
          body="Choose the right starting point. Every plan includes secure API access, hosted dashboard, and core workflow tools."
        />

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`pricing-card ${plan.name === "Growth" ? "featured" : ""}`} key={plan.name}>
              <span className="plan-name">{plan.name}</span>
              <h3>${Number(plan.price).toFixed(0)}<small>/mo</small></h3>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
