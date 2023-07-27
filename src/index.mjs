import express from "express";

import { registerRoutes } from "./lib/routes.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

registerRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
