# TECHNITUDE IPL AUCTION 2026 - Documentation

Welcome to the official frontend documentation for the **TECHNITUDE IPL AUCTION 2026** website. This guide explains the project structure, how to update content, and how the animations/styling are implemented.

## 📁 File Structure & Purpose

- **`/index.html`**: The main entry point. Contains the semantic HTML5 structure for all sections (Hero, About, How It Works, Teams, Players, Event Details, Gallery, and Footer).
- **`/css/styles.css`**: Contains custom CSS for premium effects like glassmorphism (`.glass`), glow effects (`.glow-blue`, `.glow-gold`), and specialized sports patterns.
- **`/js/main.js`**: Handles the core interactivity:
    - **Modal Logic**: Opens and closes the registration popup with a smooth transition.
    - **Filtering**: Allows users to filter player cards by their role (Batsman, Bowler, etc.) with real-time scaling effects.
    - **Header Transitions**: Changes navigation background on scroll for better readability.
- **`/js/animations.js`**: Manages the visual flair:
    - **GSAP**: Handles entrance animations (Slide-in, Fade-in) and ScrollTriggers for a dynamic feel as you scroll down.
    - **Motion One**: Used for subtle, physics-based spring animations on button hovers (providing the "Framer Motion" experience in vanilla JS).
- **`/assets/images`**: Contains the hero stadium background (`hero-bg.png`).
- **`/assets/logos`**: Stores the committee and college logos (`committee-logo.png`, `college-logo.png`).

## 🛠️ Technology Usage

### Tailwind CSS
We use Tailwind's utility-first approach for 90% of the styling. 
- **Responsive Design**: Classes like `md:grid-cols-2` or `hidden md:flex` ensure the site looks flawless on both smartphones and desktops.
- **Gradient Text**: Used in the Hero title for that premium "IPL Broadcast" look.

### GSAP (GreenSock Animation Platform)
GSAP is responsible for the professional "entrance" of elements. As you scroll, elements slide into view precisely when they are needed.
- **ScrollTrigger**: This plugin detects when a section is visible and triggers its specific animation timeline.

### Motion One
Motion One provides smooth, natural-feeling micro-animations for interactive elements like buttons and player cards. It uses the same engine that powers Framer Motion but optimized for plain JavaScript.

## 📝 How to Update Content

### 1. Update Player Data
To add or change players, locate the `<section id="players">` in `index.html`. 
- Each player is a `div` with the class `player-card`.
- Change the `data-role` attribute (e.g., `batsman`, `bowler`, `all-rounder`) to match the filter logic.
- Update the `<img>` or SVG and the text inside the `p` and `h5` tags.

### 2. Update Team Data
Locate the `<section id="teams">` in `index.html`. 
- Each team is a `team-card`. 
- You can change the `border-b-4` color (e.g., `border-blue-600` for MI, `border-yellow-500` for CSK) to match specific IPL team colors.

### 3. Update Registration Link/QR Code
Locate the `id="registrationModal"` in `index.html`.
- **Link**: Change the `href` in the `<a>` tag inside the modal.
- **QR Code**: The QR code is generated dynamically. Replace the URL in the `src` attribute of the `<img>` tag:
  `src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=YOUR_LINK_HERE"`

## 📱 Responsiveness
The website follows a **mobile-first** approach. Buttons are designed with ample padding for touch interaction, and grids collapse from 4-5 columns on desktop to 1-2 columns on mobile devices automatically.
