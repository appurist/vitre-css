/**
 * Repository consistency gate for Vitre UI.
 *
 * There is no build step and no test suite here, so this script is the only
 * thing standing between a mistake and npm. It checks the invariants that have
 * actually bitten this project before:
 *
 *   1. Versions agree across package.json, all three shipped file banners, and
 *      the top CHANGELOG entry. The release workflow only compares the git tag
 *      to package.json, and by then the tag already exists.
 *   2. Every --vitre-* custom property is declared, used, and documented
 *      consistently. A var() with a fallback silently "works" while the token
 *      it names does not exist, so nothing else catches this.
 *   3. Every data-kind that vitre.js enhances has styling in vitre.css. The two
 *      files share these attribute names as their contract.
 *   4. Every file promised by package.json "files" exists.
 *
 * Zero dependencies, by design. Run with: npm run check
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const failures = [];
const fail = (check, message, detail) => {
  failures.push({ check, message, detail });
};

const pkg = JSON.parse(read("package.json"));
const sources = {
  "vitre.css": read("vitre.css"),
  "vitre-base.css": read("vitre-base.css"),
  "vitre.js": read("vitre.js"),
};
const changelog = read("CHANGELOG.md");
const reference = read("REFERENCE.md");

// 1. Version consistency ------------------------------------------------------

const bannerVersion = (source) => source.match(/^\s*\*\s*Vitre UI v(\d+\.\d+\.\d+)\b/m)?.[1] ?? null;

for (const [file, source] of Object.entries(sources)) {
  const found = bannerVersion(source);
  if (found === null) {
    fail("version", `${file} has no "Vitre UI v<version>" banner`);
  } else if (found !== pkg.version) {
    fail("version", `${file} banner says v${found}, package.json says v${pkg.version}`);
  }
}

const changelogVersion = changelog.match(/^##\s*(\d+\.\d+\.\d+)\b/m)?.[1] ?? null;
if (changelogVersion === null) {
  fail("version", "CHANGELOG.md has no `## <version>` entry");
} else if (changelogVersion !== pkg.version) {
  fail("version", `CHANGELOG.md top entry is ${changelogVersion}, package.json says ${pkg.version}`);
}

// 2. Token contract -----------------------------------------------------------

const unique = (matches, group = 1) => new Set([...matches].map((m) => m[group]));
const missing = (from, present) => [...from].filter((token) => !present.has(token)).sort();

const css = sources["vitre.css"] + sources["vitre-base.css"];
const declared = unique(css.matchAll(/(--vitre-[\w-]+)\s*:/g));
const used = unique((css + sources["vitre.js"]).matchAll(/var\(\s*(--vitre-[\w-]+)/g));
const documented = unique(reference.matchAll(/(--vitre-[\w-]+)/g));

const undeclared = missing(used, declared);
if (undeclared.length > 0) {
  fail(
    "tokens",
    `${undeclared.length} token(s) are read with var() but never declared`,
    `${undeclared.join(", ")}\n    A var() fallback hides this: the rule renders, but the token is not\n    themeable and never appears in devtools. Declare it in vitre.css.`,
  );
}

const phantom = missing(documented, declared);
if (phantom.length > 0) {
  fail(
    "tokens",
    `${phantom.length} token(s) in REFERENCE.md do not exist`,
    documented.size > 0 ? phantom.join(", ") : "",
  );
}

const undocumented = missing(declared, documented);
if (undocumented.length > 0) {
  fail("tokens", `${undocumented.length} token(s) are declared but absent from REFERENCE.md`, undocumented.join(", "));
}

// 3. Attribute contract -------------------------------------------------------

// Kinds that mark behavior only. They carry no styling of their own because the
// element underneath is already styled: data-kind="nav" sits on a <nav>, and
// data-kind="theme-toggle" renders a <button>. Anything not listed here must
// have a matching selector in vitre.css, so a new component cannot ship half
// wired up.
const BEHAVIOR_ONLY_KINDS = new Set(["nav", "theme-toggle"]);

const kinds = (source) => unique(source.matchAll(/data-kind=\\?["']([\w-]+)/g));
const jsKinds = kinds(sources["vitre.js"]);
const cssKinds = kinds(sources["vitre.css"]);

const unstyled = missing(jsKinds, cssKinds).filter((kind) => !BEHAVIOR_ONLY_KINDS.has(kind));
if (unstyled.length > 0) {
  fail(
    "attributes",
    "vitre.js enhances data-kind value(s) that vitre.css does not style",
    `${unstyled.join(", ")}\n    vitre.css and vitre.js share these attribute names as their contract.\n    Add the styling, or list the kind in BEHAVIOR_ONLY_KINDS with a reason.`,
  );
}

const staleAllowlist = [...BEHAVIOR_ONLY_KINDS].filter((kind) => !jsKinds.has(kind)).sort();
if (staleAllowlist.length > 0) {
  fail("attributes", "BEHAVIOR_ONLY_KINDS lists kind(s) vitre.js no longer uses", staleAllowlist.join(", "));
}

// 4. Published file list ------------------------------------------------------

for (const file of pkg.files ?? []) {
  if (!fs.existsSync(path.join(root, file))) {
    fail("package", `package.json "files" lists ${file}, which does not exist`);
  }
}

// Report ----------------------------------------------------------------------

const checked = [
  `version ${pkg.version} across package.json, 3 banners, CHANGELOG`,
  `${declared.size} tokens declared, ${used.size} used, ${documented.size} documented`,
  `${jsKinds.size} data-kind components styled in vitre.css`,
  `${(pkg.files ?? []).length} published files present`,
];

if (failures.length === 0) {
  for (const line of checked) console.log(`  ok  ${line}`);
  console.log("\nAll checks passed.");
  process.exit(0);
}

for (const { check, message, detail } of failures) {
  console.error(`FAIL  [${check}] ${message}`);
  if (detail) console.error(`    ${detail}`);
}
console.error(`\n${failures.length} check(s) failed.`);
process.exit(1);
