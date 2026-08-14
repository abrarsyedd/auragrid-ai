# AuraGrid AI

AuraGrid AI is a scalable, containerized microservices application featuring robust Kubernetes orchestration powered by Amazon EKS.

## Folder Structure

```text
auragrid-ai/
  backend/
    config/db.js
    controllers/contactController.js
    controllers/platformController.js
    middleware/errorHandler.js
    middleware/validate.js
    routes/contactRoutes.js
    routes/platformRoutes.js
    .env
    .env.example
    package.json
    server.js
  frontend/
    src/
      components/Footer.jsx
      components/LoadingState.jsx
      components/Navbar.jsx
      components/SectionHeader.jsx
      pages/Contact.jsx
      pages/Home.jsx
      pages/Platform.jsx
      pages/Pricing.jsx
      pages/Solutions.jsx
      services/api.js
      App.jsx
      main.jsx
      styles.css
    .env
    .env.example
    index.html
    package.json
  database/
    auragrid_ai.sql
  README.md
```

## Pages

- Home: `/`
- Platform: `/platform`
- Solutions: `/solutions`
- Pricing: `/pricing`
- Contact: `/contact`

## Prerequisites

- Node.js 18 or newer
- MySQL 8 or newer

## Database Setup

1. Open MySQL Workbench, phpMyAdmin, or your MySQL terminal.
2. Run the SQL file:

```bash
mysql -u root -p < database/auragrid_ai.sql
```

This creates the `auragrid_ai` database, all required tables, and starter data.

## Backend Setup

```bash
cd backend
npm install
```

Update `backend/.env` with your MySQL credentials:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=auragrid_ai
```

Start the backend:

```bash
npm run dev
```

The backend uses Nodemon in legacy watch mode, so API changes restart automatically in WSL.

The API runs at:

```text
http://localhost:5000/api
```

Health check:

```text
http://localhost:5000/api/health
```

## Frontend Setup

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend uses Vite hot reload with polling enabled, so React and CSS changes update automatically.

The website runs at:

```text
http://localhost:5173
```

## Production Build

Frontend:

```bash
cd frontend
npm run build
npm run preview
```

Backend:

```bash
cd backend
npm start
```

For production, set `NODE_ENV=production`, use a strong MySQL password, restrict `FRONTEND_URL` to your deployed domain, and host the Vite `dist` output behind a web server or CDN.
