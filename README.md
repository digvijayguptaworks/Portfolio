# Digvijay Gupta — Portfolio (Next.js + Tailwind)

A multi-page personal portfolio for a machine learning engineer, built with the
Next.js App Router and Tailwind CSS. White + wood colour theme.

## Pages

- `/` — Home (hero, about, skills snapshot, selected work, CTA)
- `/resume` — Education, skills, certifications, achievements (+ PDF download)
- `/work` — All projects in detail
- `/contact` — Contact details and links

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # run the production build
```

## Project structure

```
app/
  layout.js        # shared shell: nav + footer + global CSS
  page.js          # Home
  resume/page.js   # Resume
  work/page.js     # Work
  contact/page.js  # Contact
  globals.css      # Tailwind + theme tokens
components/
  Nav.js           # top navigation (active-link aware, mobile menu)
  Footer.js
  ProjectCard.js   # reusable project card
lib/
  data.js          # ALL site content lives here — edit this to update the site
public/
  photo.jpg        # your profile photo (replace this file)
  Digvijay-Gupta-Resume.pdf
```

## Add your photo

Replace `public/photo.jpg` with your own portrait (a portrait-orientation image
works best — it is cropped to a 5:6 frame). Keep the filename `photo.jpg`, or
update the `src` in `app/page.js`.

## Editing content

Everything — name, links, skills, projects, education, certifications — is in
`lib/data.js`. Update it there and every page updates.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — it detects
Next.js automatically. Or run `npm run build && npm start` on any Node host.
