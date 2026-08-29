# Moses Karani — Portfolio

Personal portfolio site. Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · `lucide-react`.
Professional slate/indigo theme with light + dark mode.

## Getting started

```bash
yarn dev
```

Open the printed URL (defaults to http://localhost:3000).

## Editing content

Almost everything lives in one file: [`app/data/portfolioData.js`](app/data/portfolioData.js).

| Export | Drives |
| --- | --- |
| `profile` | Hero, About, Contact, Footer — name, role, tagline, socials, stats, bio, engineering principles |
| `projects` | Projects section + detail modal. `image`, `githubUrl`, `metrics`, `architecture` are optional and only render when present. Categories are derived from the data. |
| `skillCategories` | Skills section. `level` / `years` / `levelLabel` are personal estimates — tune freely. |
| `experiences` | Experience timeline. Empty `achievements` / `technologies` arrays are hidden. |
| `education`, `certificates` | Education column of the Experience section |

Add a project screenshot to `public/portfolio/` and point the project's `image` at it
(e.g. `"/portfolio/foo.png"`). Projects with no `image` render a gradient initials tile.

The résumé download is `public/Moses Karani.pdf`.

## Contact form

`Contact.jsx` posts to `app/api/send-mail/route.js`, which sends via Gmail
(`nodemailer`) from **morcescodex@gmail.com**.

Set the Gmail **App Password** in `.env`:

```
EMAIL_PASSWORD=your16charapppassword
```

(Spaces in the value are stripped automatically.) The same variable must be set
in the host's environment for production.

## Theme

Dark is the default. The choice is stored in `localStorage` under `portfolio_theme`
and applied before paint by an inline script in `app/layout.js` (no flash).

## Deploy

```bash
yarn build && yarn start
```

Any Node host works; remember to provide `EMAIL_PASSWORD`.
