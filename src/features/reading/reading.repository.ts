import { db } from "../../shared/db/client";

export async function getScriptureReading(id: string) {
  const rows = await db`
    SELECT book_txt, reading
    FROM readings
    WHERE id = ${id}
    LIMIT 1
    `;
  return rows[0] || null;
}
