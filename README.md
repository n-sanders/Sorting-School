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

The app has no dependencies, network requests, telemetry, or backend. engine.js implements selection and insertion, data.js holds the catalog, app.js handles the interface and saving, and style.css defines the responsive design.

Pokémon artwork is bundled from the public PokéAPI sprites repository (official-artwork directory). Characters and names belong to their respective rights holders. Dogs and dinosaurs use original stylized vector drawings. All 50 book illustrations were individually generated for this personal learning project.

## Validation

6,000 generated-level cases checked counts, unique cards, rank-specific prefix depth, shared words, correct sorting, and insertion in the chosen input order. All 190 image assets are included. Browser verification completed all 12 levels, with additional checks for immediate and delayed feedback, correction of misplaced cards, enforced card order, mouse dragging, undo, reload, and saved-round resume.
