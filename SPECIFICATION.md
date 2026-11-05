# Nirvish Patel — Personal Portfolio Specification
**Document Version:** 3.0 (Multi-Page Architecture &amp; Expanded Editorial Layout)  
**Last Updated:** November 2026  
**Owner:** Nirvish Patel  
**Links:**
- GitHub: [https://github.com/nirvishpatel47](https://github.com/nirvishpatel47)
- LinkedIn: [https://www.linkedin.com/in/nirvishpatel47/](https://www.linkedin.com/in/nirvishpatel47/)
- Personal Project: [https://madefornothing.com/](https://madefornothing.com/)
- Paid Client Project: [https://shivshakti-tech.in/](https://shivshakti-tech.in/)

---

## 1. Purpose & Design Principles

This portfolio presents the work, background, and engineering approach of Nirvish Patel. Built with a high-end editorial aesthetic derived from [MadeForNothing](https://madefornothing.com/), it balances understated visual warmth with a modern multi-page portfolio structure.

### Core Architecture
1. **Multi-Page Static System**: Independent, fully structured pages with clean extensionless URLs (`/`, `/work`, `/experience`, `/about`, `/contact`, and individual case studies).
2. **Expanded Editorial Layout**: Max-width of 1140px on desktop with optimal 680–720px reading measures for prose and full-width alternating showcases for projects.
3. **Factual Grounding**: Strictly verified technologies, honest project descriptions, and clear distinctions between paid client delivery, independent software tools, and 15-day internships.
4. **Zero Frontend Frameworks**: 100% semantic HTML5, modern CSS3 (Custom properties, Grid, Flexbox, clamp typography), and vanilla JavaScript.

---

## 2. Multi-Page Routes & Directory Structure

| Route | File Path | Content & Purpose |
|---|---|---|
| `/` | `index.html` | Homepage with desktop 2-column hero, portrait treatment, status bar, 4 featured alternating showcases, and callout. |
| `/work` | `work/index.html` | Index of projects: Selected Work (case studies) and Other Work (prototypes &amp; demos). |
| `/work/shivshakti-tech` | `work/shivshakti-tech/index.html` | Dedicated case study for paid industrial client project. |
| `/work/madefornothing` | `work/madefornothing/index.html` | Dedicated case study for personal digital laboratory &amp; archive. |
| `/work/assistflow` | `work/assistflow/index.html` | Dedicated case study for asynchronous RAG customer support backend on Cloud Run. |
| `/work/ddcet-preparation` | `work/ddcet-preparation/index.html` | Dedicated case study for offline-first entrance exam mastery engine. |
| `/experience` | `experience/index.html` | Professional chronology (MadeForNothing, Kalpataru 15-day, SpreadMe 15-day, Crevoxega). |
| `/about` | `about/index.html` | Personal background, current focus areas, approach to building, and reading interests. |
| `/contact` | `contact/index.html` | Direct communication channels (Email, LinkedIn, GitHub, MadeForNothing) &amp; mailto composer. |
| `/*` (404) | `404.html` | Custom 404 page styled with the editorial design system. |

---

## 3. Visual Design System

- **Palette (Light Theme)**:
  - Canvas: `#f3f1eb`
  - Cards & Surfaces: `#faf8f3`
  - Subtle Tint / Code: `#ebe7de`
  - Primary Text: `#191816`
  - Secondary Text: `#5c594f`
  - Editorial Accent: `#3e5348` (Forest Slate)
  - Borders: `#ddd8cc`
- **Palette (Dark Theme)**:
  - Canvas: `#161615`
  - Cards & Surfaces: `#1c1b1a`
  - Primary Text: `#dcd9d1`
  - Secondary Text: `#a39e93`
  - Editorial Accent: `#c4b49a` (Warm Wheat)
  - Borders: `#2a2722`
- **Typography**:
  - Headings: `Source Serif 4`, Georgia, Cambria, serif.
  - Body & UI: `IBM Plex Sans`, -apple-system, sans-serif.
  - Monospace (Code, Metrics, Tags): `IBM Plex Mono`, monospace.
- **Hero Portrait Treatment**:
  - Rectangular editorial portrait ratio (4:5) with clean paper border, shadow, and caption.
  - Profile path: `assets/images/profile.jpg`.

---

## 4. Professional Experience (Verified Truths)

1. **MadeForNothing** (Self-employed / Independent work, Sep 2026 – Present, Remote): Personal laboratory for writing, research, experiments, projects, and ideas. (Not a registered company).
2. **Kalpataru Projects International Limited** (Python Developer, Internship, July 2026, 15 days, Gandhinagar, On-site): Short 15-day internship focused on internal Python scripts and utilities.
3. **SpreadMe Digital Pvt Ltd** (Automation Developer, Internship, July 2026, 15 days, Gandhinagar, Hybrid): Short 15-day internship focused on automation and workflow scripting.
4. **Crevoxega** (Automation Developer, Independent / Self-employed, Nov 2025 – Jan 2026, Remote): Developed a lightweight lead-capture chatbot widget for businesses. Recorded demo: [YouTube](https://www.youtube.com/watch?v=NawqfX3og50).

---

## 5. Verified Technologies

- **Languages**: Python, HTML5, CSS3, Vanilla JavaScript, SQL
- **Backend & APIs**: FastAPI, Uvicorn, RESTful APIs, Pydantic
- **AI & Retrieval**: Google Gemini (Flash Lite & Embeddings), Qdrant Vector DB, Semantic Chunking
- **Databases & DevOps**: PostgreSQL, SQLite (WAL mode), Redis, Docker, Google Cloud Run, Git
