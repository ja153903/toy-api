import { ACCOUNTS_V1 } from "../constants/routes.mjs";
import accountsRouter from "../accounts/router.mjs";

// NOTE: Register routes here with respective router
export const ROUTES = {
  [ACCOUNTS_V1]: accountsRouter,
};
