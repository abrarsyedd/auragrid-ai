CREATE DATABASE IF NOT EXISTS auragrid_ai
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE auragrid_ai;

DROP TABLE IF EXISTS leads;
DROP TABLE IF EXISTS pricing_plans;
DROP TABLE IF EXISTS use_cases;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS platform_metrics;

CREATE TABLE platform_metrics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  label VARCHAR(100) NOT NULL,
  value VARCHAR(20) NOT NULL,
  suffix VARCHAR(20) DEFAULT '',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE features (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(40) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE use_cases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(140) NOT NULL,
  industry VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  impact VARCHAR(160) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pricing_plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description VARCHAR(180) NOT NULL,
  features JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  email VARCHAR(120) NOT NULL,
  company VARCHAR(120) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'contacted', 'qualified', 'closed') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_leads_email (email),
  INDEX idx_leads_status (status)
);

INSERT INTO platform_metrics (label, value, suffix) VALUES
  ('Models orchestrated', '120', '+'),
  ('Workflow uptime', '99.95', '%'),
  ('Avg. automation lift', '42', '%'),
  ('Enterprise connectors', '80', '+');

INSERT INTO features (title, description, icon) VALUES
  ('AI Workflow Builder', 'Design, test, and deploy multi-step AI workflows with approvals, routing, and observability built in.', 'workflow'),
  ('Model Gateway', 'Connect OpenAI, local models, and internal services behind one governed API layer.', 'gateway'),
  ('Knowledge Grid', 'Index company knowledge with retrieval controls, source traceability, and freshness scoring.', 'grid'),
  ('Risk Controls', 'Apply guardrails, audit trails, role permissions, and policy checks before AI reaches production.', 'shield'),
  ('Analytics Console', 'Track usage, latency, cost, quality signals, and business impact across every team.', 'analytics'),
  ('Integration Hub', 'Sync AI actions with CRM, support, data warehouse, ticketing, and collaboration systems.', 'hub');

INSERT INTO use_cases (title, industry, description, impact) VALUES
  ('Revenue Intelligence', 'Sales', 'Summarize account activity, score buying signals, and recommend next best actions from CRM and meeting data.', '28% faster pipeline reviews'),
  ('Support Copilot', 'Customer Experience', 'Draft accurate responses from approved knowledge, detect risk, and escalate complex issues to specialists.', '35% lower first response time'),
  ('Ops Automation', 'Operations', 'Monitor internal queues, classify work, and trigger governed automations for recurring business processes.', '18 hours saved per team weekly'),
  ('Research Assistant', 'Strategy', 'Turn market, product, and internal documents into cited briefs with reusable research workflows.', '4x faster briefing cycles');

INSERT INTO pricing_plans (name, price, description, features) VALUES
  ('Starter', 49.00, 'For small teams validating AI workflows.', JSON_ARRAY('5 active workflows', '10k monthly AI tasks', 'Email support', 'Basic analytics')),
  ('Growth', 149.00, 'For departments scaling governed automation.', JSON_ARRAY('Unlimited workflows', '100k monthly AI tasks', 'Advanced analytics', 'Priority support')),
  ('Enterprise', 499.00, 'For organizations needing deep security and control.', JSON_ARRAY('Custom model routing', 'Dedicated VPC option', 'SSO and RBAC', 'Security review support'));
