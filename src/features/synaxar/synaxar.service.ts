import { getVita } from "./synaxar.repository";
import { mdToHtml } from "../../shared/utils/markdown";

export async function getVitaHtml(id: string) {
  const vita = await getVita(id);
  return (
    vita?.map((row) => ({
      ...row,
      v_short: mdToHtml(row.v_short),
      v_long: mdToHtml(row.v_long),
      v_liturgy: mdToHtml(row.v_liturgy),
    })) ?? null
  );
}
