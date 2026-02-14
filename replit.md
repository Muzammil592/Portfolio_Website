# Muzammil Abbas Portfolio

## Overview
A dark-tech themed portfolio website for Muzammil Abbas, a Full-Stack Engineer specializing in MERN stack and AI/ML Computer Vision. Single-page application with scroll-triggered animations.

## Architecture
- **Frontend**: React + Vite, Tailwind CSS, Framer Motion, Shadcn UI components
- **Backend**: Express.js (serves frontend + GitHub API proxy with caching)
- **No database**: Static portfolio content, dynamic GitHub data via API

## Key Sections
- Hero with animated stats and social links
- Experience timeline (DEVIEO internship, Creative Energy project)
- Featured Projects (AI Threat Detection, Clinic Management, Chatly)
- GitHub Repository Deep-Dive + Live GitHub Activity
- Tech Stack Matrix (5 categories)
- Professional Services (Fiverr)
- Contact & Footer

## Design System
- Dark mode always-on (class="dark" on html)
- Primary color: Electric Blue (hsl 190 100% 50%)
- Background: Slate Black (#0b0b0b / hsl 0 0% 4%)
- Fonts: Inter (body), JetBrains Mono (code/stats), Sora (headings)

## API Endpoints
- `GET /api/github/profile` - Proxied GitHub API with 10-minute cache

## Recent Changes
- 2026-02-14: Initial build - complete portfolio with all sections, dark theme, GitHub integration
