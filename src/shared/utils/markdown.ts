export function mdToHtml(text: string | null | undefined): string | null {
  if (!text) return null
  return Bun.markdown.html(text)
}
