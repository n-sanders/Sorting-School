# Alphabet Adventure

Open the self-contained **Alphabet Adventure.html** next to this folder in a browser. Copy it to each child's laptop. It works offline, with no installation or login. Keep the file in the same location and use the same browser to retain progress.

The ZIP contains a conventional static website. Extract it and open index.html with its assets folder intact, or host it on any static web server. The editable source is in dist/.

## Learning progression

| Rank | Skill | Next card | Feedback |
| --- | --- | --- | --- |
| C | Different first letters | Student chooses | Immediate |
| B | Matching first letters; second letters resolve ties | Student chooses | Check full shelf |
| A | Matching first two letters; third letters resolve ties | App chooses | Check full shelf |
| S | Matching first words, sometimes matching second words | App chooses | Check full shelf |

Each rank begins with a lesson and practice question, then offers 8-, 12-, and 24-card levels. Finishing all three opens the next rank. Replay levels for fresh random selections. Sort all words, including A, An, and The.

C and B offer Pokémon, dinosaurs, and dog breeds. A and S use criteria-checked selections from 50 original book titles, each with its own generated illustration. A always contains a pair matching through two letters and never requires a fourth. S always contains a pair sharing the first two words.

## Playing and saving

Click a card, then a shelf +. Or drag a card to a + or either half of an existing card. Read the shelf left to right, then the next row. Select a shelf card to move it. Undo reverses the latest placement. A and S keep future cards disabled until their turn.

Save & exit preserves an unfinished round. Resume it from the adventure page. Browser local storage saves progress per computer and browser. Private browsing, clearing browser data, or moving the offline file may affect saving. The header reports blocked storage. Grown-up corner asks a question, then lets a grown-up open any level in the browser or reset progress on this device.

## Source and artwork

The app has no dependencies, telemetry, or backend. engine.js implements selection and insertion, data.js holds the catalog, app.js handles the interface and saving, and style.css defines the responsive design. Dog photographs load from images.dog.ceo. Everything else stays on the device, so the other collections still work offline.

Pokémon artwork is bundled from the public PokéAPI sprites repository (official-artwork directory). Characters and names belong to their respective rights holders. Dinosaurs use original stylized vector drawings. Dog breeds use one fixed photograph each from the Dog CEO archive. Eurasier, Greyhound, Finnish Spitz, Terrier, and Tibetan Spaniel were renamed to Norwegian Elkhound, Great Dane, Finnish Lapphund, Tervuren, and Tibetan Terrier, because those are breeds the archive includes. Utonagan, Yakutian Laika, and Zuchon are not in the archive, so those cards were removed. The dog collection still has 24 different first letters and 39 different two-letter prefixes, which is what ranks C and B need for a 24-card round. All 50 book illustrations were individually generated for this personal learning project. The book illustrations use the original, unmodified 1,254 × 1,254 PNG files (about 165 MB total), replacing the previous 360 × 360 JPEG versions. Saved rounds resolve each card's title and image from the current catalog when resumed. A saved round that still includes a removed dog starts fresh.

## Validation

6,000 generated-level cases checked counts, unique cards, rank-specific prefix depth, shared words, correct sorting, and insertion in the chosen input order. Local artwork covers the books, Pokémon, and dinosaurs. Dog photographs are referenced from Dog CEO. Browser verification completed all 12 levels, with additional checks for immediate and delayed feedback, correction of misplaced cards, enforced card order, mouse dragging, undo, reload, and saved-round resume.
