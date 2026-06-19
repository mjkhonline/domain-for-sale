# Domain for Sale Static Page

A simple, responsive, SEO-friendly static HTML page for showing that a domain is available for purchase.

## Files

- `index.html` - the complete website, including HTML, CSS, and JavaScript.

## How It Works

The page automatically detects the current domain from the browser hostname and uses it in:

- the main page title
- SEO metadata
- Open Graph and Twitter metadata
- structured JSON-LD data
- email inquiry subject
- visible domain details

This makes the same `index.html` reusable across multiple domains.

## Contact Email

The current contact email is:

```text
mjkhonline@live.com
```

To change it, search for this email address inside `index.html` and replace it with the new email.

## Deployment

Upload `index.html` to your static hosting provider, such as Arvan CDN Static Site. Make sure it is served as the root file for each domain.

No build step, framework, or server is required.
