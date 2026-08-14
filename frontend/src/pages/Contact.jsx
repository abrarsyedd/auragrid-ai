import { Send } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { submitLead } from "../services/api.js";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await submitLead(form);
      setStatus({ type: "success", message: response.message });
      setForm(initialForm);
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="page-section">
      <div className="container contact-layout">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Plan your AuraGrid AI rollout"
            body="Tell us what you want to automate, connect, or govern. We will help map the right AI platform path."
          />
          <div className="contact-note">
            <strong>What happens next</strong>
            <p>A platform specialist reviews your request, confirms requirements, and shares a practical launch plan.</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          </label>
          <label>
            Work email
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
          </label>
          <label>
            Company
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="What would you like AuraGrid AI to help with?" required rows="5" />
          </label>
          <button className="button primary" type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send message"} <Send size={18} />
          </button>
          {status.message ? <div className={`form-status ${status.type}`}>{status.message}</div> : null}
        </form>
      </div>
    </section>
  );
}
