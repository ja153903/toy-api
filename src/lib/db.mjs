import { drizzle } from "drizzle-orm/libsql";
import Database from "better-sqlite3";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default db;
