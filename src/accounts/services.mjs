import { eq } from "drizzle-orm";

import db from "../lib/db.mjs";
import { accounts } from "./models.mjs";

/**
 * Fetch an account from the `accounts` table by `id`
 *
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

/** @typedef {{ email: string, password: string, firstName: string, lastName: string }} AccountPayload */
/**
 * `createAccount` naively creates an account for this toy API
 *
 * TODO: We'll add mechanisms to salt and hash the passwords later.
 *
 * @param {AccountPayload} accountPayload
 * @returns {Promise<accounts | null>}
 */
async function createAccount(accountPayload) {
  try {
    const queryResult = await db
      .insert(accounts)
      .values(accountPayload)
      .returning({
        id: accounts.id,
        email: accounts.email,
        firstName: accounts.firstName,
        lastName: accounts.lastName,
      });

    return queryResult;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export { getAccountById, createAccount };
