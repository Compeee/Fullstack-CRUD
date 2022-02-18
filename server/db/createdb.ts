import pg from "pg";

const pool = new pg.Pool({
  user: "user",
  password: "pass",
  host: "127.0.0.1",
  port: 5432,
  database: "netum",
});

pool.query(
  `CREATE TABLE IF NOT EXISTS public.people
(
    id serial NOT NULL PRIMARY KEY,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    age integer NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)`,
  (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res);
  }
);
