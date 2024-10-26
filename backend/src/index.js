const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.BACKEND_SERVER_PORT;

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

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.post("/addproduct", async (req, res) => {
  try {
    const newProduct = await req.body;
    await knex("product")
      .insert(newProduct)
      .then(() => {
        console.log("Data inserted successfully!");
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
      });
    res.status(200).send("Product added successfully");
  } catch (error) {
    console.error("Error inserting product:", error);
    res.status(500).send("Failed to insert product");
  }
});

app.post("/update", async (req, res) => {
  try {
    const updatedProduct = await req.body;
    await knex("product")
      .where("id", "=", updatedProduct.id)
      .update(updatedProduct);

    res.status(200).send("Product updated successfully");
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Failed to update product");
  }
});

app.post("/delete", async (req, res) => {
  try {
    const product = await req.body;
    await knex("product").where("id", "=", product.id).del();

    res.status(200).send("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Failed to delete product");
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await knex("product").select("*");
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
