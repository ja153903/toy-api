import express from "express";

import accountsRouter from "./accounts/router.mjs";
import { ACCOUNTS_V1 } from "./constants/routes.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(ACCOUNTS_V1, accountsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
