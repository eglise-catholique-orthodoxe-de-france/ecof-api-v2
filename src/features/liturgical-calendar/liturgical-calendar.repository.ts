import { db } from "../../shared/db/client";

export async function getSaintsByDate(month: number, day: number) {
  const rows = await db`
        SELECT id, prefixe, saint, vies_id
        FROM synaxar
        WHERE mois = ${month}
        AND jour = ${day}
        ORDER BY id ASC
    `;
  return rows || null;
}
