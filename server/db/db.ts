import pg from "pg";

const pool = new pg.Pool({
  user: "user",
  password: "pass",
  host: "127.0.0.1",
  port: 5432,
  database: "netum",
});

export default pool;
