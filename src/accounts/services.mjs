import { eq } from "drizzle-orm";

import db from "../lib/db.mjs";
import { accounts } from "./models.mjs";

/**
 * @param {number} id
 * @returns {Promise<unknown | null>}
 */
async function getAccountById(id) {
  const queryResult = await db
    .select({
      email: accounts.email,
      firstName: accounts.firstName,
      lastName: accounts.lastName,
    })
    .from(accounts)
    .where(eq(accounts.id, id));

  return queryResult?.[0] ?? null;
}

export { getAccountById };
