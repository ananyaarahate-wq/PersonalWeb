# Rocketry Portfolio Website

Static one-page personal portfolio website for Ananyaa Rahate, built around a rocketry, mission-control, space-dashboard theme.

The site is designed to showcase STEM projects, awards, personal details, favourite constellations, interactive space-themed features, and contact details in a polished portfolio format.

## Project Files

- `index.html` - main website page and all section content
- `styles.css` - visual design, responsive layout, animations, rocket cursor, cards, carousel, and themed UI
- `script.js` - launch intro, cursor trail, navigation state, filters, clocks, carousel, trajectory simulator, console messages, and contact form behavior
- `404.html` - custom Signal Lost 404 page
- `.nojekyll` - GitHub Pages helper file for publishing the site as plain static HTML/CSS/JS
- `assets/images/mission-control-hero.png` - generated rocket launch hero image

## Main Sections

### Mission Control

Homepage hero section with:

- Generated rocket launch hero image
- Mission Control Online heading
- Launch-style call-to-action buttons
- Telemetry cards
- Live UTC mission clock
- Scroll-linked orbit progress readout
- Signal status readout
- Launch readiness checklist

### Crew Profile

About section explaining:

- Who the portfolio is for
- Interest in STEM, engineering, science, sustainability, mathematics, and space
- Research and project style
- Crew Systems readout panel
- Interest list and curiosity output meter

### Personal Orbit

Personal themed section with:

- Current favourite song signal
- Song: `Close To You` by Gracie Abrams
- Themed title: `Close To Orbit`
- CSS-made space-style song cover card
- Zodiac Sign: Virgo
- Mission Fuel: Fresh tabs + ambition
- Comfort Module: Cloud photos and quiet focus
- Current Vibe: Orbiting but organised

### Star Atlas

Favourite constellation carousel with:

- Five constellations
- Virgo
- Orion
- Lyra
- Cassiopeia
- Andromeda
- Previous and next controls
- Dot navigation
- Flick/swipe support
- Glowing pulsing stars
- CSS-drawn constellation maps

### Missions

Project section with mission-style cards and filters.

Included projects:

- HOMECARE-01: Smart Home System for People Suffering from Dementia and Alzheimer's
- ATMOS-02: Cloud Microphysics and Future Atmospheric Turbulence
- BIOFLAME-03: Bio-assisted Micro-Combustion and Soybean Chemiluminescence
- STRUCTURE-04: How Symmetry Minimises Force in Structures

Each mission includes:

- Mission code
- Project title
- Status
- Mission type
- Objective
- Associated programmes and awards
- Project links
- Mission stats

Mission filters:

- All
- Engineering
- Research
- Sustainability
- Maths

### Mission Badges

Awards section grouped by orbit/category.

Included categories:

- Science Fair Orbit
- Maths Orbit
- Chemistry Orbit
- Physics Orbit
- Biology Orbit
- Service & Leadership Orbit
- Environment Orbit
- Engineering Orbit

Awards include:

- Big Bang Fair 2026 Senior Scientist Winner
- BT Young Scientist and Technology Exhibition 2025 Finalist and Presentation Award Winner
- Stripe Young Scientist and Technology Exhibition 2026 Finalist
- UKMT awards
- Mathematical Olympiad for Girls Merit
- National Thinking Challenge Silver
- Royal Society of Chemistry Olympiad Bronze
- BPhO Senior Physics Challenge Bronze
- British Biology Olympiad Bronze
- Impact Award 2025
- Diana Award Anti-Bullying Ambassador
- Ulster Wildlife Wild Youth awards
- RAF sponsored Arkwright Engineering Scholarship

### Observation Deck

Interactive signal-board section with:

- Research radar panel
- Animated radar sweep
- Command console
- System activity bars
- Console buttons for mission scan, badge decoder, and trajectory prompt

### Trajectory Lab

Interactive orbit simulator with:

- Moving star/scan background
- Thrust range control
- Launch angle range control
- Fuel reserve range control
- Run Simulation button
- Rocket plot display
- Apogee readout
- Velocity readout
- Efficiency readout
- Orbit class readout
- Status readout

### Transmission

Contact form section with:

- Name / Callsign field
- Email field
- Transmission Message field
- Transmit Signal button
- Form validation
- Prefilled mailto behavior to `ananyaa.rahate@gmail.com`

### Footer Contact Cluster

Footer includes grouped contact details:

- LinkedIn: `https://www.linkedin.com/in/ananyaa-rahate-a9b263399/`
- Email: `ananyaa.rahate@gmail.com`
- Phone: `07440444773`
- Return to Mission Control link

## Interactive Features

- First-load rocket launch intro
- Skip intro button
- Rocket-shaped cursor on desktop
- Fire/exhaust cursor trail on desktop
- Starfield background
- Scroll-linked orbit progress bar
- Live UTC mission clock
- Launch readiness checklist
- Mission filter controls
- Star Atlas constellation carousel
- Glowing pulsing constellation stars
- Observation Deck command console
- Animated radar panel
- Moving Trajectory Lab background
- Interactive trajectory simulator
- Contact form mailto generation
- Mobile navigation menu
- Custom 404 page

## Accessibility and Responsiveness

Implemented:

- Skip link
- Keyboard-focus styles
- Semantic sections and headings
- Form labels and required fields
- Reduced-motion support for major animations
- Mobile-friendly stacked layouts
- Desktop, tablet, and phone responsive grids
- Links and buttons with visible hover/focus states

## Design Style

The site uses:

- Dark space background
- Cyan, amber, orange, silver, and gold accents
- Digital/space-style font stack
- Mission-control UI language
- Dashboard cards
- Telemetry labels
- Glow effects
- Animated star and radar visuals
- CSS-drawn rocket and constellation elements

## Generated Asset

The hero image was generated with the built-in image generation tool.

Prompt concept:

- Cinematic rocket launch
- Mission-control perspective
- Deep navy/cyan/amber palette
- No logos
- No text
- No watermark
- Dark space for readable text overlay

Saved asset:

- `assets/images/mission-control-hero.png`

## Contact Behavior

The contact form does not use a backend.

When submitted, JavaScript creates a prefilled email using:

- Destination: `ananyaa.rahate@gmail.com`
- Subject: `Portfolio transmission from <name>`
- Body: name, email, and message

This opens the visitor's email app. For true server-side form submission later, connect a form service such as Netlify Forms, Formspree, Getform, or a custom backend.

## How to Preview Locally

Open this file in a browser:

`index.html`

The site is static, so it can run directly from the file system.

If a browser blocks some local behavior, serve the folder with a simple static server and open the localhost URL.

## How to Make It Live

Recommended easiest method:

1. Go to Netlify Drop.
2. Drag the whole `rocketry-portfolio` folder onto the page.
3. Netlify will publish the site and give you a live URL.

Good long-term method:

1. Create a GitHub repository.
2. Upload the contents of this folder.
3. Enable GitHub Pages or connect the repository to Netlify/Vercel.
4. Push future edits to redeploy.

## Editing Guide

To change visible text:

- Edit `index.html`

To change colors, layout, spacing, animation, or responsive behavior:

- Edit `styles.css`

To change interactive behavior:

- Edit `script.js`

To replace the hero image:

- Replace `assets/images/mission-control-hero.png`

To update project links:

- Search `MISSION:` or project titles in `index.html`

To update contact details:

- Search `footer-contact` in `index.html`
- Search `contactForm` in `script.js` for form email behavior

## Current Notes

- The website is static and lightweight.
- No login system, payment system, CMS, or backend is included.
- The current contact form depends on the visitor having an email app configured.
- The custom 404 page works when hosted on platforms that support serving `404.html`.
- The site is ready to deploy as a static website.
