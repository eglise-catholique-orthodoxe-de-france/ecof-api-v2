const NBSP = "\u00A0";
const NNBSP = "\u202F";

/**
 * Applies French typography rules to a string.
 * Must be called on raw text (or Markdown), before any HTML parsing.
 */
export function applyFrenchTypography(text: string | null): string | null {
  if (!text) return null;

  return (
    text
      // « text  →  «\u202Ftext (thin non-breaking space after opening guillemet)
      .replace(/«\s*/g, `«${NNBSP}`)
      // text »  →  text\u202F» (thin non-breaking space before closing guillemet)
      .replace(/\s*»/g, `${NNBSP}»`)
      // text !  →  text\u202F!  (same for "?")
      .replace(/\s*([!?])/g, `${NNBSP}$1`)
      // Thin non-breaking space before ";" unless preceded by an HTML entity (e.g. &#43;, &amp;)
      .replace(/(?<!&[a-zA-Z0-9#]{1,10})\s*;/g, `${NNBSP};`)
      // text :  →  text\u00A0: (standard non-breaking space before ":")
      .replace(/\s*:/g, `${NBSP}:`)
  );
}
