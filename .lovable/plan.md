# Survelans website upgrade (from the master brief)

Improve the current site in phases instead of starting over. Keep the logo, the woman-with-light hero photo, the bracelet image, the orange #FF751F and the black theme.

## Phase 1 — Content and layout (front end only)
- **Menu:** Home, About, Our Product, How It Works, Companion App, FAQs, Contact, plus a Join the Waitlist button.
- **Hero:** new supporting text. Buttons: Join the Waitlist and See How It Works. Add a small animated flow (Wearable → Phone → GPS/Alert → Trusted Contacts). The animation turns off for visitors who choose reduced motion. Remove "Trusted by thousands…".
- **About:** who we are, mission, vision and why quiet emergency help matters. Written in plain, simple words.
- **Product:** the bracelet becomes the big feature, labelled "Prototype". A waitlist form sits next to it. Taser, spray, alarm and camera move into a smaller section called "Explore Other Safety Products". Remove the order button at the end of the list. Prices stay only where you already gave them.
- **How It Works:** 5 steps (Connect, Activate, Share, Record 30s, Respond), joined by connecting lines, plus a note on limits.
- **Companion App:** two columns with the new heading. Each feature is tagged "In development" or "Planned". A labelled placeholder stands in until you send real screenshots.
- **Remove the made-up testimonials.**
- **FAQ:** about 9 questions in fold-open panels.
- **Footer:** tagline, social icons (Instagram is confirmed; Facebook, X and YouTube stay hidden until you send their links) and links to the legal pages.
- **New pages:** Terms, Cookies, Data Retention and Deletion, Contact and Support. The existing Privacy page stays. Each page gets a note that it needs a lawyer's review.

## Phase 2 — Working forms and admin (needs Lovable Cloud)
- The waitlist saves first name, email, optional phone, consent, date and where the person signed up. It blocks duplicate emails and shows loading, success and error messages.
- The contact form saves enquiries.
- An "Unsubscribe / delete my data" request form.
- An admin sign-in, with only approved admins allowed in. The admin area has a Mailing List page (search, filter, CSV export), an Enquiries page and simple counts (signups, button clicks).
- Basic spam protection (a hidden trap field) and input checks.
- Confirmation emails and OneDrive/Excel sync come later. Both need you to approve an email domain and a Microsoft connection.

## Not included / needs you
- Cooper BT and Roco One fonts: please send the licensed font files. Until then, the current fonts stay.
- Real app screenshots, plus links for Facebook, X and YouTube.
- Light mode: the brief asks for it, but we keep dark only for now unless you want both.

## Technical details
- New routes: terms.tsx, cookies.tsx, data-retention.tsx, contact.tsx, admin/*. The homepage sections keep in-page anchors.
- Cloud tables: waitlist_subscribers (unique lower(email)), contact_messages, data_requests, analytics_events, user_roles plus has_role(). Visitors can insert rows but cannot read them; admins can read them through role checks.
- Server functions use zod validation and a basic rate limit per IP hash.
