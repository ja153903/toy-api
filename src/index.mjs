import express from "express";

import { ROUTES } from "./lib/routes.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

Object.entries(ROUTES).forEach(([url, router]) => {
  app.use(url, router);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
