import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingState from "../components/LoadingState.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { fetchUseCases } from "../services/api.js";

export default function Solutions() {
  const [useCases, setUseCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUseCases()
      .then(setUseCases)
      .catch(() => setError("Unable to load solutions. Please confirm the API and database are running."))
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
          eyebrow="Solutions"
          title="AI workflows for high-leverage business teams"
          body="Start with proven operating patterns, then tailor each workflow to your data, review process, and compliance needs."
        />

        <div className="solution-grid">
          {useCases.map((item) => (
            <article className="solution-card" key={item.title}>
              <div className="solution-top">
                <span>{item.industry}</span>
                <ArrowUpRight size={20} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.impact}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
