const { Pool } = require("pg");
import * as dotenv from "dotenv";
dotenv.config();

const poolPromise = (async () => {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  return pool;
})();

export { poolPromise };
