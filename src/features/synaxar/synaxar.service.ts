import { getVita } from "./synaxar.repository";
import { mdToHtml } from "../../shared/utils/markdown";
import { applyFrenchTypography } from "../../shared/utils/typography";

export async function getVitaHtml(id: string) {
  const vita = await getVita(id);
  return (
    vita?.map((row) => ({
      ...row,
      v_short: applyFrenchTypography(row.v_short),
      v_long: mdToHtml(applyFrenchTypography(row.v_long)),
      v_liturgy: mdToHtml(applyFrenchTypography(row.v_liturgy)),
    })) ?? null
  );
}
