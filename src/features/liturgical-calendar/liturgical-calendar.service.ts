import { getSaintsByDate as getSaintsByDateFromDb } from "./liturgical-calendar.repository"
import { applyFrenchTypography } from "../../shared/utils/typography"

export async function getSaintsByDate(date: string) {
  const [, month, day] = date.split("-").map(Number) as [number, number, number]
  const news = await getSaintsByDateFromDb(month, day)
  if (!news) return null
  return {
    ...news,
    content: applyFrenchTypography(news.content),
  }
}
