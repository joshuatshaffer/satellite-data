# Satellite Data

Data about satellites aggregated and cached for use in my projects.

Data is kept on a separate branch named `data` so that updates do not pollute the code's version control history.

Script that can be run by `node` without compiling so that it can run quickly in a GitHub Workflow. Use TypeScript in JSDoc comments instead of `.ts` files.

Do all of the core logic in a NodeJS script that can be run in a CI or locally. Have a server for testing that serves an example file and logs the request headers.

## To-do

- [ ] Move core logic from the workflow to a script.
- [ ] Pretty-print the JSON output.
- [ ] Ensure all records are ordered by ID and all fields in are ordered consistently so that Git diffs look good.
- [ ] Add a JSONL output for streaming.
- [ ] Add SatNOGS DB's transmitters.
