import pool from "../config/db.js";

export async function getPlatformOverview(req, res, next) {
  try {
    const [metrics] = await pool.query("SELECT label, value, suffix FROM platform_metrics ORDER BY id ASC");
    const [features] = await pool.query("SELECT title, description, icon FROM features ORDER BY id ASC");
    const [plans] = await pool.query("SELECT name, price, description, features FROM pricing_plans ORDER BY price ASC");

    res.json({
      success: true,
      data: {
        metrics,
        features,
        plans: plans.map((plan) => ({
          ...plan,
          features: typeof plan.features === "string" ? JSON.parse(plan.features) : plan.features
        }))
      }
    });
  } catch (error) {
    next(error);
  }
}

export async function getUseCases(req, res, next) {
  try {
    const [rows] = await pool.query("SELECT title, industry, description, impact FROM use_cases ORDER BY id ASC");
    res.json({ success: true, data: rows });
  } catch (error) {
    next(error);
  }
}
