# Website2 – Changelog

Merrillion website, version 2: a dark and gold luxury style.
Open it with `open website2/index.html`. It is separate from `website/` (the sand-sketch style), and each site has its own assets.

---

## v1.0 – 2026-10-01 (initial build)

### Design direction
- Inspired by the **layout patterns and colour feel** of dellatownships.com: black and charcoal backgrounds, gold accents, uppercase headings with one gold script word, numbered photo cards, and enquiry prompts throughout.
- **Nothing copied** from that site: no logo, text, images or project names. All content is Merrillion's own.
- Kept separate from `website/`: colour photos instead of sand sketches, a dark mood instead of a light one, and different fonts.

### Design tokens
| Token | Value | Use |
|---|---|---|
| Black | `#0B0B0B` | Header, dark sections, footer |
| Charcoal | `#161616` | Cards, quote section |
| Graphite | `#2A2A2A` | Top bar, marquee |
| Gold | `#C5994B` | Accents, numbers, borders |
| Gold light / deep | `#E1C46A` / `#8E6B1F` | Gold gradients (buttons, stats band, Enquire tab) |
| Light | `#F0EFEC` | Light sections |
| Spiritual pin | `#E39A4F` | Map |
| Leisure accent | `#7FC2A8` / `#9ED0BC` | Map, leisure card numbers |

**Fonts** (Google Fonts):
- **Jost** (300–600): body text and uppercase headings
- **Pinyon Script**: gold script accent words

### Page structure (top to bottom)
1. **Utility bar:** WhatsApp · Call us · Get in touch (placeholder numbers)
2. **Header:** reversed Merrillion logo; nav links Destinations · Portfolios ▾ (Spiritual / Leisure) · What We Do · Why Merrillion · Leadership · FAQs; gains a shadow on scroll; hamburger menu on phones
3. **Hero:** full-screen slideshow (Vrindavan, Varanasi, Goa, Corbett, Tirupati), 7 s per slide with a slow zoom; the script line "Where care finds its place", an uppercase headline, and two buttons; animated scroll indicator
4. **Marquee:** destination names scrolling in a loop, separated by gold ✦; pauses on hover
5. **8 Upcoming *Destinations*:** numbered photo cards (4 columns → 2 → 1) with dark top and bottom gradients and a gold number, name, portfolio and status; Vrindavan is marked *Flagship* (The White Butter Studio Residences · Café Prana)
6. **Statement band:** "India is ready for hospitality that is rooted in its culture…"
7. **Why … Choose *Merrillion*:** the 4 values (Care, Integrity, Excellence, Rootedness) in a gold-bordered grid, ending with "That's the *Merrillion Difference*"
8. **4 Core Operating *Functions*:** white cards with gold line icons; gold underline and lift on hover
9. **Portfolios split banner:** Spiritual (Varanasi photo) and Leisure (Goa photo), each with its destinations and café brand (Café Prana / Café Monsoon)
10. **Vision quote:** a large uppercase quote with the script label *Our Vision* and a faint gold quote mark behind it
11. **Gold stats band:** 4 Operating Functions · 2 Portfolios · 8+ Destinations · 1 Flagship, counting up when they scroll into view
12. **Where Merrillion is *Coming*:** the India map with gold outline; pins show a photo tooltip on hover
13. **How We *Grow*:** a 5-step timeline (Build → Prototype → Pilot → Standardise → Scale); horizontal on desktop, vertical on phones
14. **Leadership *Team*:** 4 placeholder profiles (Name TBD)
15. **FAQs:** 5 accordion questions (first one open by default)
16. **Partner With *Merrillion*:** contact details and an enquiry form over a darkened Tirupati photo
17. **Footer:** logo, Explore / Portfolios / Contact columns, photo credits
18. **Floating Enquire tab:** vertical gold tab on the right edge on desktop; sticky bottom bar on phones

### Responsive behaviour
- Breakpoints at 1100 / 960 / 860 / 760 / 600 / 520 px
- On phones (≤760 px) the hero uses portrait crops (`*-m.jpg`)
- Cards and banners use `srcset`, so phones load 720 px images (`*-sm.jpg`) and desktops 1440 px
- On phones the hero headline has tighter letter-spacing and the scroll indicator is hidden (it would sit behind the Enquire bar)
- Animations (slideshow, zoom, marquee, map pulse, count-up) are switched off for visitors who turn off motion in their device settings

### Files
```
website2/
├── index.html      page markup (map SVG and credits inlined)
├── styles.css      all styles
├── script.js       menu, dropdown, slideshow, count-up, map tooltips, form
├── CREDITS.md      photo credits (Wikimedia Commons, CC licences)
├── CHANGELOG.md    this file
└── assets/
    ├── merrillion-logo.svg, merrillion-logo-reversed.svg, merrillion-mark.svg
    ├── cafe-prana.svg, cafe-parama.svg, cafe-monsoon.svg
    └── img/        photos: full (1440 px), *-sm (720 px), *-m (mobile portrait crops)
```

### Fixes during build
- The script "Flagship" label on the Vrindavan card was being forced to uppercase by the card's text style, which made it unreadable. The script font now keeps its normal case.

### Placeholders to replace before launch
- [ ] WhatsApp and phone number (`+91 00000 00000`, `wa.me/910000000000`)
- [ ] Email `hello@merrillion.com`
- [ ] Leadership names, photos and bios
- [ ] Enquiry form: currently opens the visitor's email app; connect a backend or form service
- [ ] Photos: replace the Wikimedia images with Merrillion's own photography (then update `CREDITS.md`)
- [ ] Domain, hosting, SEO metadata and analytics

---

## How to add an entry
Add the newest version at the top, using this format:

```
## vX.Y – YYYY-MM-DD
- **Area:** what changed and why
```
