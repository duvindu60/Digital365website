# Website Specification

**Tech Stack for Website**
Layer	Technology	Reason
Frontend	Next.js (React Framework)	Blazing fast, SEO-friendly, easy chatbot integration.
UI Styling	TailwindCSS	Rapid styling, mobile responsiveness, minimal bloat.
Hosting	Vercel or Hostinger Premium	Fast deployments, auto-scaling. (Development builds can directly deploy to Vercel.)
CDN	Cloudflare	Caching, security, optimization.
Chatbot	Tidio or Custom Bot with Dialogflow	Easy WhatsApp + Website bot. (Expandable to intelligent consultations.)
Backend (if needed)	Serverless Functions (Vercel API Routes)	Lightweight for forms, chatbot webhooks. No need for heavy backend.
Contact Forms	Formspree or Tally.so	Simple no-code form backend — no servers needed.
Analytics	Google Analytics 4	Track visitors, chatbot interactions, optimize flow.
SEO	Next SEO (for Next.js) or Yoast SEO (if fallback WordPress)	Meta, OG tags, sitemap automation.
CRM (optional)	HubSpot Free or Tidio Inbox	Capture chatbot leads cleanly if needed.

## 🖥️ Overview

**Objective:** Build a fast, modern, professional website for an IT consulting company.

**Design Goal:** Dark theme with bold red and white accents. Energetic, innovative tone.

**Primary Interaction:** Smart consultation chatbot across all pages.

**Builder:** Next.js with modern development tools (preferred), fallback: WordPress + Elementor.

**Hosting:** Hostinger Premium Hosting with Cloudflare CDN for speed and uptime.

## 🌐 Website Structure

### 1. Home
- **Hero Section:**
  - Animated intro text
  - Two call-to-action (CTA) buttons: "Consult Now" and "Learn More"

- **Services Preview:**
  - Cards or sections briefly showing key services

- **Smart Consultation Chatbot:**
  - Small floating chat icon (bottom right)
  - Auto-open option after 3–5 seconds

- **Partners Preview:**
  - Logos scrolling smoothly

- **Footer:**
  - Navigation links
  - Social media icons
  - Privacy Policy / Terms links

### 2. About Us
- **Our Story:**
  - Short description of company history and mission

- **Leaders Section:**
  - Photo
  - Full Name
  - Title (e.g., CEO, CTO)
  - Short bio (50–80 words)
  - LinkedIn icons (optional)

### 3. Services (Dropdown Menu with Subpages)
Each service must have its own dedicated page including:
- Hero banner
- Brief intro (150–250 words)
- Key benefits or solutions
- CTA button ("Talk to Us" / "Schedule a Consultation")
- Trigger mini-chatbot form

**Subpages under Services:**
- vCIO (Virtual CIO services)
- Digital Transformation
- Finance and Business Advisory
- Branding & Media Advisory
- Expertise by Industries & Business

### 4. Partners
- Logos or names of collaborating partners
- Smooth scroll effect for showcase
- Option to expand individual partner info (optional)

### 5. Contact Us
- Simple form (Name, Email, Phone, Message)
- Embedded Google Map
- Alternative contact methods (Email address, WhatsApp)

### 6. Chatbot System
- **Trigger:** Floating icon bottom right
- **Opening Behavior:** Auto-trigger optional after 3–5 seconds
- **Mobile Behavior:** Redirect to WhatsApp if clicked
- **Desktop Behavior:** Stays within website

**Conversation Flow:**
1. "What service do you need help with?" (IT Support / Cloud / Cybersecurity / Other)
2. "Immediate help or schedule a call?" (Immediate / Book Call)
3. "Please provide your Email or Phone."

**Leads Sent to:** Centralized CRM or unified inbox

## 🎨 Design Guidelines

| Element | Design Style |
|---------|--------------|
| Primary Color | Red (#ED3124) |
| Secondary Colors | Black, White, Dark Gradients (Black → Deep Red) |
| Font | Clean sans-serif (e.g., Poppins, Lato) |
| Button Style | Dark gradient background, rounded corners (~20px), white font |
| Tone | Bold, Energetic, Innovative |

## ✨ Features and Animations
- Smooth scroll transitions
- Hover effects on buttons and images
- Text fade-in and fade-out animations
- Minor parallax background (optional but preferred)
- Partners logos smooth scrolling
- Sticky Navigation Bar
- Responsive Navigation (hamburger menu on mobile)

## 📱 Responsiveness
- Full support for Desktop, Tablet, Mobile
- Hero section and main CTA buttons scale nicely on all screen sizes

## 🔍 SEO and Performance
- Fast loading pages (optimize and compress images)
- Basic SEO Tags (Meta titles, Meta descriptions)
- Use ALT tags for all images
- Integrate Google Analytics + optional Facebook Pixel

## ⚙️ Tech Stack Summary

| Component | Recommendation |
|-----------|----------------|
| Website Builder | Next.js with modern development tools (preferred) or WordPress + Elementor |
| Hosting | Hostinger Premium Hosting |
| CDN | Cloudflare (free plan) |
| Chatbot | Custom React components OR Tidio/Crisp for WhatsApp link |
| SEO Plugin | Yoast SEO (WordPress only) |
| Forms | Simple no-code form or chatbot-integrated |
| Analytics | Google Analytics |

## 📋 Developer Checklist

| Section | Feature | Status |
|---------|---------|--------|
| Navigation Bar | Sticky, Responsive | ✅ |
| Hero Section | Animated Text + CTAs | ✅ |
| About Us | Story + Leaders Section | ✅ |
| Services | 5 Subpages with CTAs | ✅ |
| Partners | Logos + Animation | ✅ |
| Contact Us | Form + Map | ✅ |
| Consultation Chatbot | Float Button + Leads Collection | ✅ |
| SEO | Metadata, ALT Texts, Speed Optimization | ✅ |
| Mobile-Friendly | Responsive Design | ✅ |
| Analytics | Google Analytics Setup | ✅ |
