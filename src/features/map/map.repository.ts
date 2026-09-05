import { db } from "../../shared/db/client"

export async function getPoi() {
  const rows = await db`
    SELECT name, adress, adress2, postcode, city, latitude, longitude, website, diocese
    FROM parishes
    `
  return rows || null
}
