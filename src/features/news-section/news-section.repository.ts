import { db } from "../../shared/db/client";

type NewsRow = {
  title: string | null;
  author: string | null;
  published_at: string | null;
  content: string | null;
};

export async function getAllNews() {
  const rows = await db`
      SELECT id, title, author, slug_id, published_at
      FROM news
      WHERE published_at <= CURRENT_DATE
      ORDER BY published_at DESC
    `;
  return rows;
}

export async function getNewsById(id: string) {
  const rows = await db<NewsRow[]>`
      SELECT title, author, published_at, content
      FROM news
      WHERE id = ${id}
      LIMIT 1
    `;
  return rows[0] ?? null;
}
