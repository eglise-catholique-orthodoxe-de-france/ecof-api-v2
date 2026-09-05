import { db } from "../../shared/db/client"

type SynaxarRow = {
  v_short: string | null
  v_long: string | null
  v_liturgy: string | null
  has_img: boolean
  mois: number
  jour: number
  prefixe: string
  saint: string
}

export async function getSynaxar() {
  const rows = await db`
        SELECT saint, vies_id
        FROM synaxar
        WHERE calendrier != 2
        ORDER BY saint ASC
    `
  return rows || null
}

export async function getVita(id: string) {
  const rows = await db<SynaxarRow[]>`
        SELECT v_short, v_long, v_liturgy, has_img, mois, jour, prefixe, saint
        FROM synaxar
        WHERE vies_id = ${id}
        LIMIT 1
    `
  return rows || null
}
