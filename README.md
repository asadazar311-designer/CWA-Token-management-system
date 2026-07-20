# Pakistan Embassy Kuwait - Queue Management System

## Setup (do this first)

1. Open `shared/supabase.js`
2. Replace `PASTE_YOUR_ANON_KEY_HERE` with your real anon key
   (Supabase → Settings → API → anon public key)

## Create your first admin login

Go to Supabase → **Authentication** → **Users** → **Add User**.
Enter an email + password. Use that to log in at `admin/login.html`.

## Folder guide

- `index.html` — entrance QR poster (print this / display at entrance)
- `portal/` — visitor's phone screens (department picker + token status)
- `admin/` — staff dashboard, statistics, settings, login
- `display/` — waiting room TV screen (English/Urdu auto-rotate)
- `shared/` — Supabase connection + shared styling

## Running locally

Since browsers block some features on `file://` pages, use a simple local server:

```
npx serve .
```

Then open the printed localhost link.

## Hosting

Since this is just static files, you can drag-and-drop this whole folder into:
- Vercel (vercel.com) — free
- Netlify (netlify.com) — free
- Cloudflare Pages — free

## Locking down security (recommended before going live)

Right now the Supabase policies are wide open for testing. Before real use,
tighten the `tokens` table policies so only **logged-in admins** can update/delete,
while visitors can still insert/read their own token. Ask Claude for the updated
SQL policies when you're ready for that step.

## Notes / known simplifications

- Token numbering uses a simple count-per-department; for very high volume
  you may want a proper daily-reset sequence instead.
- The "processed/dismissed clears on next call" behavior only keeps the most
  recently resolved token visible — older resolved tokens stay in the database
  but drop from the table view (nothing is deleted unless you click the trash icon).
- Statistics page groups by day using token creation date; average wait/process
  time calculations aren't wired up yet (can add if you want exact numbers).
