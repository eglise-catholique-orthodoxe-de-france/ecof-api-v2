import { getScriptureReading } from "./reading.repository";
import { applyFrenchTypography } from "../../shared/utils/typography";
import { mdToHtml } from "../../shared/utils/markdown";

export async function getReading(id: string) {
  const reading = await getScriptureReading(id);
  if (!reading) return null;
  return {
    ...reading,
    reading: mdToHtml(applyFrenchTypography(reading.reading)),
  };
}
