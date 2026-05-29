import React from "react";

/**
 * Converts a simple markup string into React elements.
 *
 * Supported tags:
 *   {accent}...{/accent}  → <em> with accent styling
 *   {bold}...{/bold}      → <strong>
 *   {br}                  → <br />
 */
export function parseMarkup(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Check for {br}
    const brIdx = remaining.indexOf("{br}");
    // Check for {accent}
    const accentIdx = remaining.indexOf("{accent}");
    // Check for {bold}
    const boldIdx = remaining.indexOf("{bold}");

    // Find the earliest match
    const matches: [number, string][] = [];
    if (brIdx !== -1) matches.push([brIdx, "br"]);
    if (accentIdx !== -1) matches.push([accentIdx, "accent"]);
    if (boldIdx !== -1) matches.push([boldIdx, "bold"]);

    if (matches.length === 0) {
      // No more tags — push the rest as plain text
      parts.push(remaining);
      break;
    }

    matches.sort((a, b) => a[0] - b[0]);
    const [earliest, tag] = matches[0];

    // Push text before the tag
    if (earliest > 0) {
      parts.push(remaining.slice(0, earliest));
    }

    if (tag === "br") {
      parts.push(<br key={key++} />);
      remaining = remaining.slice(earliest + 4); // skip "{br}"
    } else {
      const openTag = `{${tag}}`;
      const closeTag = `{/${tag}}`;
      const closeIdx = remaining.indexOf(closeTag, earliest + openTag.length);

      if (closeIdx === -1) {
        // Malformed — push rest as text
        parts.push(remaining);
        break;
      }

      const inner = remaining.slice(earliest + openTag.length, closeIdx);

      if (tag === "accent") {
        parts.push(<em key={key++}>{inner}</em>);
      } else if (tag === "bold") {
        parts.push(<strong key={key++}>{inner}</strong>);
      }

      remaining = remaining.slice(closeIdx + closeTag.length);
    }
  }

  return parts;
}
