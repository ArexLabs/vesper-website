# Vesper Website TODOs

## Authentication
- [ ] Implement and thoroughly test login and signup flows (incl. social and email/password)
- [ ] Add password reset workflow: UI, backend logic, and UX feedback
- [ ] Set up email verification, including resend verification email and error handling
- [ ] Add "forgot password" UI and secure backend flow
- [ ] Add session management, including "remember me" and session timeout/expiry logic
- [ ] Implement logout everywhere option from account security page
- [ ] Add 2FA (TOTP authenticator and backup codes)
- [ ] Display last login and recent sessions/locations in profile
- [ ] Enforce password requirements and add password strength indicator
- [ ] Handle auth errors and display user-friendly messages (e.g., invalid credentials, email not verified)

## Dashboard
- [ ] Design and build main dashboard layout (responsive)
- [ ] Implement global navigation/navigation drawer for dashboard
- [ ] Develop user profile section with editable avatar, username, display name, and bio
- [ ] Add account settings with email/password change, preferences, and notification controls
- [ ] Implement download management with install status, version switching, and action history
- [ ] Dashboard welcome/onboarding experience (tips carousel or guide)
- [ ] Add activity feed for recent actions (downloads, logins, etc.)
- [ ] Add security settings and session management
- [ ] Implement error boundaries to catch issues on dashboard pages

## Pages
- [ ] Plan and write content for Roadmap page, including milestone visualizations
- [ ] Add detailed, well-formatted changelog entries and change segmentation (e.g. by release)
- [x] Finish and review all legal pages (/legal, /privacy, /terms, /tos)
- [x] Create a custom 404 page
- [ ] Build and style About page with team info, contributors, and project mission
- [ ] Add FAQ/help page
- [ ] Create Support/Contact page and form (with email or Discord link)
- [ ] Add server error (500) page

## Features and Integrations
- [ ] Integrate GitHub OAuth authentication
- [ ] Integrate Microsoft OAuth provider
- [ ] Prepare for additional login providers (e.g., Google, Discord)
- [ ] Implement form autofill and accessibility best practices for all authentication forms
- [ ] Add client-side rate-limiting and anti-abuse features
- [ ] Add announcement/banner system for important updates

## Content and Visuals
- [ ] Replace gallery placeholder images with real screenshots and designs
- [ ] Fill gallery with mod, dashboard, and feature visuals
- [ ] Update digital assets with latest branding
- [ ] Update roadmap items, prioritization, and projected timelines
- [ ] Review and update the tech stack section for comprehensiveness and accuracy
- [ ] Add team and contributors images to About page
- [ ] Add favicon and meta images for all platforms

## Polish and User Experience
- [ ] Add loading states, spinners, and progress bars to key actions and async buttons
- [ ] Improve form validation (client + server), display clear errors and inline feedback
- [ ] Add consistent error and success feedback (toast notifications)
- [ ] Implement skeleton loaders/placeholders for slow loading sections & images
- [ ] Finalize responsive design and test on all modern device sizes & browsers
- [ ] Review and enhance accessibility (keyboard, ARIA, color contrast, etc.)
- [ ] Autosave form edits (profile/settings)
- [ ] Add animated transitions between main pages

## SEO and Performance
- [ ] Add unique meta tags (title, description, canonical, etc.) to all key pages
- [ ] Set up Open Graph/Twitter card images, with dynamic previews per page
- [ ] Generate and deploy sitemap.xml for search engines
- [ ] Add and configure robots.txt for proper crawling
- [ ] Implement structured data (JSON-LD) for organization, FAQ, and product pages
- [ ] Optimize and lazy load images (right format, sizing, compression)
- [ ] Set up analytics (privacy-friendly, e.g. Plausible or Umami)

## Documentation and Community
- [ ] Write and complete the README.md with setup instructions and project description
- [x] Add CONTRIBUTING.md with style, PR guidelines, and local workflow
- [x] Add LICENSE file
- [ ] Document steps for local development and deployment with Next.js, Bun, etc.
- [ ] Add onboarding instructions for new contributors and team members
- [x] Create a Code of Conduct
- [ ] Document API and plugin interfaces (docs/ directory or website section)
- [ ] Add links to Discord (or preferred chat) and GitHub Discussions

## Testing & Quality
- [ ] Add unit and integration tests for core flows (auth, dashboard, downloads)
- [ ] Add E2E/smoke tests for signup, login, password reset, and dashboard navigation
- [ ] Set up CI/CD for automated checks, formatting, and preview deployments
- [ ] Enable type checking and code linting in CI
- [ ] Add visual regression testing for core UI components
