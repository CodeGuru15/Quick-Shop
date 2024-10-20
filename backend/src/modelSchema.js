require("dotenv").config();

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
      ? process.env.DATABASE_PASSWORD
      : "",
    database: process.env.DATABASE_NAME,
    // charset: "utf8mb4",
    // collation: "utf8mb4_unicode_ci",
  },
});

knex.schema
  .createTable("product", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("unit");
    table.integer("price");
    table.string("imgUrl");
    table.string("type");
    table.string("category");
    table.string("seller");
    table.string("description");
  })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error(error);
  });
