import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>AuraGrid AI</h3>
          <p>Governed AI automation for teams that need speed, accuracy, and control.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/platform">Platform</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>hello@auragrid.ai</p>
          <p>San Francisco, CA</p>
        </div>
      </div>
    </footer>
  );
}
