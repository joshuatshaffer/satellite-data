export async function updateData() {
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
}
