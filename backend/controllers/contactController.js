import pool from "../config/db.js";

export async function createLead(req, res, next) {
  try {
    const { name, email, company, message } = req.body;

    const [result] = await pool.execute(
      `INSERT INTO leads (name, email, company, message)
       VALUES (:name, :email, :company, :message)`,
      { name, email, company, message }
    );

    res.status(201).json({
      success: true,
      message: "Thanks. Our AI strategy team will contact you shortly.",
      data: { id: result.insertId, name, email, company }
    });
  } catch (error) {
    next(error);
  }
}
