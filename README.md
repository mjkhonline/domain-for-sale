# Domain for Sale Static Page

A simple, responsive, SEO-friendly static HTML page for showing that a domain is available for purchase.

## Files

- `index.html` - the static website markup and styles.
- `assets/js/app.js` - domain detection, SEO metadata updates, email links, and custom analytics events.
- `assets/js/posthog.js` - PostHog setup snippet.

## How It Works

The page automatically detects the current domain from the browser hostname and uses it in:

- the main page title
- SEO metadata
- Open Graph and Twitter metadata
- structured JSON-LD data
- email inquiry subject
- visible domain details

This makes the same `index.html` reusable across multiple domains.

## Analytics

PostHog is loaded from `assets/js/posthog.js`.

Custom events are captured for:

- email link clicks
- copy email button clicks
- copy email success, failure, and fallback states

## Contact Email

The current contact email is:

```text
mjkhonline@live.com
```

To change it, search for this email address inside `index.html` and `assets/js/app.js`, then replace it with the new email.

## Deployment

Upload `index.html` to your static hosting provider, such as Arvan CDN Static Site. Make sure it is served as the root file for each domain.

No build step, framework, or server is required.
