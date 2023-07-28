import db from "../lib/db.mjs";
import { todos } from "./models.mjs";

/**
 * @typedef {{ title: string, task: string }} TodoPayload
 * @param {TodoPayload} todoPayload
 * @returns {Promise<unknown | null>}
 */
async function addTodo(todoPayload) {
  const queryResult = await db.insert(todos).values(todoPayload).returning({
    id: todos.id,
  });

  return queryResult ?? null;
}

export { addTodo };
