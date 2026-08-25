// @ts-check

import path from "node:path";
import fs from "node:fs/promises";

const dataWorktreePath = "data";
const ommJsonFilePath = path.join(dataWorktreePath, "omm.json");
const ommJsonLinesFilePath = path.join(dataWorktreePath, "omm.jsonl");

const response = await fetch(
  "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=json",
  {
    headers: {
      Accept: "application/json",

      // Be courteous and let the server owners know where this request is
      // coming from.
      "User-Agent":
        "Mozilla/5.0 (compatible; +https://github.com/joshuatshaffer/satellite-data)",
    },
  },
);

if (!response.ok) {
  // TODO: Log response details.
  console.error("Fetching OMM from CelesTrak failed.");
} else {
  /**
   * @type {{ NORAD_CAT_ID: number; [key: string]: unknown }[]}
   */
  const omm = await response.json();
  console.log("Fetched %d orbit records", omm.length);

  // Ensure orbit data is stored in a consistent order.
  omm.sort((a, b) => a.NORAD_CAT_ID - b.NORAD_CAT_ID);

  await fs.writeFile(ommJsonFilePath, JSON.stringify(omm, null, 2));
  console.log("Saved %o", ommJsonFilePath);

  await fs.writeFile(
    ommJsonLinesFilePath,
    omm.map((x) => JSON.stringify(x)).join("\n"),
  );
  console.log("Saved %o", ommJsonLinesFilePath);
}
