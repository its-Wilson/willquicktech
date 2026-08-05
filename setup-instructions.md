# Quick Tech Consulting — Setup Instructions

## 1. Connect the contact form (2 minutes, free)

The contact form is wired to send submissions via **Formspree** — no backend server needed.

1. Go to https://formspree.io and sign up free with `testemail@gmail.com` (or whichever inbox you want leads to land in).
2. Create a new form. Formspree gives you an endpoint like `https://formspree.io/f/abc123xy`.
3. Open `contact.html`, find this line:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your real ID.
5. Deploy/reload the site. Submit a test message — it'll land in your email and in your Formspree dashboard.

The free Formspree tier includes 50 submissions/month, spam filtering, and a dashboard where every submission is logged (useful for exporting into a CRM — see below).

**Alternative:** if you'd rather not use a third party, swap the form's `action` for a `mailto:` link, or connect it to Zapier/Make instead of Formspree to push leads directly into a CRM like HubSpot or Pipedrive on submission.

## 2. Getting leads into your CRM

Two ways, depending on effort you want to put in:

- **Manual (free):** Export submissions from your Formspree dashboard as CSV periodically and import into your CRM (HubSpot, Zoho, Pipedrive, etc. all support CSV import).
- **Automatic:** Formspree supports Zapier integration — connect it once and every new submission auto-creates a lead/contact in most major CRMs (HubSpot, Salesforce, Pipedrive, Airtable, etc.) with no manual export.

## 3. Hosting the site (free options)

This is a static site (plain HTML/CSS/JS) — it can be hosted for free on any of these:

- **Netlify** — drag the whole folder into netlify.app/drop, done in ~30 seconds.
- **GitHub Pages** — push these files to a GitHub repo, enable Pages in repo settings.
- **Vercel** — `vercel deploy` from this folder, or drag-and-drop via their dashboard.

## 4. Before you go live

- Replace `https://www.quicktechconsulting.com` throughout (`index.html`, `about.html`, `services.html`, `contact.html`, `sitemap.xml`, `robots.txt`) with your actual domain once you register one.
- Swap `testemail@gmail.com` in `contact.html` for your real contact email.
- Add a favicon (`favicon.ico`) to the root folder if you want a browser-tab icon.
- Consider adding Google Search Console + Google Analytics once the domain is live, to track organic traffic and which keywords are bringing people in.

## 5. Files in this folder

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `about.html` | Company story + background |
| `services.html` | Service offerings + certifications |
| `contact.html` | Lead-capture contact form |
| `assets/css/styles.css` | All site styling (shared) |
| `assets/js/script.js` | Mobile nav + form submission logic |
| `robots.txt` / `sitemap.xml` | SEO crawling files |
