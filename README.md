# GAIMHE Website

🌐 **Live site:** [https://gaimhe.github.io](https://gaimhe.github.io)

---

## About

This repository contains the source files for the GAIMHE project website, built with GitHub Pages and Jekyll.

---

## How to Update the Website

1. **Edit any `.md` file** directly on GitHub or locally
2. **Commit your changes** to the `main` branch
3. **GitHub Pages automatically rebuilds** the site (usually within 1-2 minutes)

That's it! No build step required.

---

## File Structure

```
├── _config.yml        # Jekyll configuration (theme, title, etc.)
├── index.md           # Homepage
├── project.md         # Project architecture details
├── datasets.md        # Data generation methodology
├── collaborations.md  # Partners and collaborations
├── contact.md         # Contact information
└── README.md          # This file
```

---

## Customization

### Change the Theme

Edit `_config.yml` and change the `theme` line. Available themes:
- `jekyll-theme-cayman` (current)
- `jekyll-theme-minimal`
- `jekyll-theme-slate`
- `jekyll-theme-architect`

See all themes: [pages.github.com/themes](https://pages.github.com/themes/)

### Add a New Page

1. Create a new `.md` file (e.g., `publications.md`)
2. Add front matter at the top:
   ```yaml
   ---
   layout: default
   title: Publications
   ---
   ```
3. Add your content in Markdown
4. Link to it from other pages

---

## Local Development (Optional)

To preview the site locally:

```bash
# Install Jekyll (one-time)
gem install bundler jekyll

# Run local server
bundle exec jekyll serve
```

Then visit `http://localhost:4000`

---

## License

*[Add license information if applicable]*
