"""Build src/data/lemma-rank.ts from the MostUsedWords PDF + custom-words.ts.

Requires: pip install pymupdf
The PDF is local-only (gitignored). This does not copy translations.
"""

from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "swedish-frequency-dictionary-for-learners-practical-vocabulary-top-10000-swedish-words.pdf"
CACHE = Path(__file__).resolve().parent / ".cache" / "frequency-index.json"
OUT = ROOT / "src" / "data" / "lemma-rank.ts"

POS_TAIL = re.compile(r"^[a-z][a-z0-9]*(?:\s*;\s*[a-z][a-z0-9]*)*$")
RANK_ONLY = re.compile(r"^(\d+)$")
FULL = re.compile(r"^(\d+)\s+(.+)$")
LEMMA_POS = re.compile(r"^(.*?)\s+-([a-z][a-z0-9;\s]*)$")
BANK_LEMMA = re.compile(r"\b(?:adj|noun|verb|other|pron)\('([^']+)'")


def fold(value: str) -> str:
    return unicodedata.normalize("NFC", value).casefold().strip()


def parse_pdf() -> list[dict]:
    doc = pymupdf.open(PDF)
    lines: list[str] = []
    for index in range(9, 985):
        lines.extend(doc[index].get_text().splitlines())

    entries: list[dict] = []
    pending: int | None = None
    for raw in lines:
        line = raw.strip()
        if not line:
            continue
        only = RANK_ONLY.match(line)
        if only:
            pending = int(only.group(1))
            continue
        numbered = FULL.match(line)
        if numbered:
            match = LEMMA_POS.search(numbered.group(2).strip())
            if match and POS_TAIL.match(match.group(2).strip()):
                entries.append(
                    {
                        "rank": int(numbered.group(1)),
                        "lemma": match.group(1).strip(),
                        "pos": [part.strip() for part in match.group(2).split(";") if part.strip()],
                    }
                )
                pending = None
                continue
        if pending is not None:
            match = LEMMA_POS.search(line)
            if match and POS_TAIL.match(match.group(2).strip()):
                entries.append(
                    {
                        "rank": pending,
                        "lemma": match.group(1).strip(),
                        "pos": [part.strip() for part in match.group(2).split(";") if part.strip()],
                    }
                )
                pending = None
    return entries


def main() -> None:
    entries = parse_pdf()
    CACHE.parent.mkdir(parents=True, exist_ok=True)
    CACHE.write_text(json.dumps(entries, ensure_ascii=False), encoding="utf-8")

    by_key: dict[str, dict] = {}
    for entry in entries:
        key = fold(entry["lemma"])
        current = by_key.get(key)
        if current is None or entry["rank"] < current["rank"]:
            by_key[key] = entry

    lemmas = BANK_LEMMA.findall((ROOT / "src" / "data" / "custom-words.ts").read_text(encoding="utf-8"))
    rank_map: dict[str, int] = {}
    unmatched: list[str] = []
    for lemma in lemmas:
        hit = by_key.get(fold(lemma))
        if hit is None and lemma.endswith(" sig"):
            hit = by_key.get(fold(lemma[: -4].strip()))
        if hit is None:
            unmatched.append(lemma)
            continue
        rank_map[lemma] = hit["rank"]

    lines = [
        "/** Frequency rank in MostUsedWords Swedish Top 10000. Keys are our lemmas; values are book numbers. */",
        "export const lemmaRank: Record<string, number> = {",
    ]
    for lemma, rank in sorted(rank_map.items(), key=lambda item: (item[1], item[0])):
        lines.append(f"  {json.dumps(lemma, ensure_ascii=False)}: {rank},")
    lines.append("}")
    lines.append("")
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {len(rank_map)} ranks, unmatched {unmatched}")


if __name__ == "__main__":
    main()
