import { db } from "../../shared/db/client";

export async function getSynaxar() {
  const rows = await db`
        SELECT saint, vies_id
        FROM synaxar
        WHERE calendrier != 2
        ORDER BY saint ASC
    `;
  return rows || null;
}

export async function getVita(id: string) {
  const rows = await db`
        SELECT v_short, _long, v_liturgy, has_img, mois, jour, prefixe, saint
        FROM synaxar
        WHERE id_vies = ${id}
    `;
  return rows || null;
}
