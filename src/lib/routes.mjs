import { ACCOUNTS_V1 } from "../constants/routes.mjs";
import accountsRouter from "../accounts/router.mjs";

/** @type {Record<string, import("express").Router>} */
export const ROUTES = {
  [ACCOUNTS_V1]: accountsRouter,
};

/**
 * `registerRoutes` makes sure that all our routers are
 * registered with the Express app.
 *
 * @param {import("express").Express} app
 */
export function registerRoutes(app) {
  Object.entries(ROUTES).forEach(([url, router]) => {
    app.use(url, router);
  });
}
