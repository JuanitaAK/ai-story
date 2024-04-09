const { Pool } = require("pg");
import * as dotenv from "dotenv";
dotenv.config();

// call for local database
// const poolPromise = (async () => {
//   const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST || "localhost",
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   });
//   return pool;
// })();

const poolPromise = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export { poolPromise };
