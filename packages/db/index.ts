import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

import type { DB } from "./prisma/types";

export { jsonArrayFrom, jsonObjectFrom } from "kysely/helpers/postgres";

export * from "./prisma/types";
export * from "./prisma/enums";

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.POSTGRES_URL,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});
