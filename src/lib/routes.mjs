import { ACCOUNTS_V1, TODO_LIST_V1 } from "../constants/routes.mjs";
import accountsRouter from "../accounts/router.mjs";
import todoListRouter from "../todo-list/router.mjs";

/** @type {Record<string, import("express").Router>} */
export const ROUTES = {
  [ACCOUNTS_V1]: accountsRouter,
  [TODO_LIST_V1]: todoListRouter,
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
