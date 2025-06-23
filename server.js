const express = require("express");

const swaggerUI = require("swagger-ui-express");
const apiDocs = require("./docs/api-docs.json");

const cors = require("cors");
const corsOption = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const blogRoutes = require("./routes/articleRoute");
const app = express();
const PORT = 3000;

// panggil methode
app.use(cors(corsOption));
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocs));
app.use("/", blogRoutes);

// jalankan server
try {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
  });
} catch (error) {
  console.error("Server failed to start:", error);
}
