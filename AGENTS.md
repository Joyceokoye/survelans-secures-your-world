<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public privacy notice in its own `/privacy` route so legal information is linkable and readable independently of the landing page.
- Use the existing shared header and design-system Button for navigation and actions so public pages stay consistent.
- Keep the workflow illustration in a browser-safe component with CSS reduced-motion fallback so it remains lightweight and SSR-compatible.
- Emit analytics hooks as name-only browser custom events; do not send personal data or claim collected analytics without a configured receiver.
- Do not implement a lead form without a tested destination; private spreadsheet sharing links are not submission endpoints.
