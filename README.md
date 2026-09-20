# Keycloak RBAC Demo

Role-based access control (RBAC) with **Keycloak** and **Auth.js v5** in **Next.js 14**.

## Demo

<video src="./demo.webm" controls width="800"></video>

The video shows: landing page, sign in with Keycloak, Keycloak login, profile page with role badge, navigating to Donations, and logging out.

## What This Demonstrates

- **Keycloak as the identity provider.** Users, passwords, roles, and authentication all live in Keycloak. The application never stores credentials.
- **Auth.js handles the OIDC flow.** OAuth token exchange, session management, and JWT decoding with zero extra HTTP calls.
- **Roles are read from the JWT.** Auth.js decodes `realm_access.roles` from the Keycloak access token at sign-in time.
- **Authorization is enforced server-side.** Middleware protects routes. Server components double-check with `requireRole()`. No hiding UI elements to fake security.
- **User management lives in Keycloak.** The application does not create or manage users. Admins use the Keycloak Admin Console to handle everything.

## Project Structure

```
├── app/
│   ├── login/page.tsx          # Login page
│   ├── donations/page.tsx      # Protected: admin + volunteer
│   ├── admin/page.tsx          # Protected: admin only
│   └── unauthorized/page.tsx   # Access denied
├── components/
│   ├── Navbar.tsx              # Role-aware navigation
│   ├── LoginButton.tsx         # Keycloak login trigger
│   └── DonationList.tsx        # Mock donation data
├── lib/
│   ├── roles.ts                # Role constants (single source of truth)
│   ├── auth-helpers.ts         # Auth/authorization helpers
│   └── types.ts                # TypeScript types
├── auth.ts                     # Auth.js v5 config
├── middleware.ts               # Route protection
├── keycloak/realm-export.json  # Auto-imported realm config
└── docs/SETUP.md               # Setup, user management, auth flow
```

## Documentation

**[Setup, User Management & Auth Flow](./docs/SETUP.md)**

- Getting started (prerequisites, environment, first run)
- How to add users, assign roles, and manage accounts in Keycloak
- Authentication flow sequence diagram
- How authorization is enforced (middleware + server components)

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Auth.js v5](https://authjs.dev/) (NextAuth)
- [Keycloak](https://www.keycloak.org/) (Identity Provider)
- [Tailwind CSS](https://tailwindcss.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## License

MIT
