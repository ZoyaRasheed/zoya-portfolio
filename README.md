# Next.js Portfolio Website Development Prompt

Create a unique, minimalist portfolio website with the following specifications:

## Core Requirements
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion for micro-interactions
- **Database**: MongoDB for dynamic content management
- **Content Management**: Fully config-driven architecture

## Design Philosophy
- **Aesthetic**: Minimalist, subtle, sophisticated
- **Color Palette**: Monochromatic with 1-2 accent colors max (avoid rainbow designs)
- **Typography**: Clean, readable font hierarchy
- **Layout**: Asymmetrical, editorial-inspired layouts (not typical grid-based)
- **Uniqueness**: Avoid common AI-generated portfolio patterns - create something distinctive

## Unique Design Elements to Implement
1. **Floating Navigation**: Magnetic cursor interaction with nav elements
2. **Text Reveal Animations**: Staggered word/character reveals on scroll
3. **Geometric Shapes**: Subtle background elements that respond to mouse movement
4. **Custom Cursor**: Interactive cursor that changes based on hover states
5. **Scroll-Triggered Animations**: Content slides in from unexpected angles
6. **Typography Play**: Mix of font weights and sizes for visual hierarchy

## Technical Architecture

### Config Structure
Create a centralized config system with these files:
```
/config
  ├── portfolio.json      # Main portfolio data
  ├── projects.json      # Project details
  ├── experience.json    # Work experience
  └── settings.json      # Site settings & theme
```

### Component-Based Architecture
Build modular, reusable components:

1. **HeroSection Component**: Animated name reveal with subtitle
2. **AboutSection Component**: Personal image integration with text overlay effects
3. **ExperienceTimeline Component**: Timeline with hover interactions
4. **ProjectGrid Component**: Card-based layout with detailed overlays
5. **SkillsCloud Component**: Interactive skill bars or tag clouds
6. **ContactForm Component**: Subtle contact form (no "hire me" buttons)
7. **Navigation Component**: Floating nav with magnetic interactions
8. **CustomCursor Component**: Interactive cursor system
9. **ScrollProgress Component**: Scroll indicator
10. **AnimatedText Component**: Text reveal animations

### MongoDB Integration
- Collection schemas for: projects, experiences, skills, messages
- Admin panel for content updates
- API routes for CRUD operations
- Form submission handling

### Framer Motion Requirements
- Page transitions between sections
- Stagger animations for lists/grids
- Parallax scrolling effects
- Magnetic button interactions
- Loading animations with purpose

## Specific Implementation Details

### Image Integration
- High-quality personal photo with subtle hover effects
- Optimized Next.js Image component usage
- Multiple image variants for different sections

### Animation Specifications
- Entrance animations: 0.6s duration with custom easing
- Scroll progress indicator
- Section-based reveal animations
- Micro-interactions on buttons/links

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions

### Performance Optimizations
- Image optimization and lazy loading
- Code splitting for animations
- Efficient MongoDB queries
- SEO optimization with metadata

## What NOT to Include
- Generic hero sections with centered text
- Standard card grids
- Bright, colorful designs
- "Hire Me" or "Let's Work Together" buttons
- Common portfolio templates
- Over-animated interfaces

## Expected Deliverables
1. Complete Next.js application setup
2. MongoDB connection and schemas
3. All configuration JSON files with sample data
4. Responsive, animated components
5. Admin interface for content management
6. Deployment-ready code
7. README with setup instructions

Create a portfolio that feels more like an art piece than a typical developer website. Focus on typography, whitespace, and subtle interactions that surprise and delight without overwhelming the content.


Update : 🌟 Hero Section / Landing Page

    When someone opens the site, it should display a typing animation that says:
    "Hello, I am Zoya Rasheed"
    It should appear as if someone is typing the text — not too fast, with smooth typing animation.

    Use a stylish and slightly bold font (not a generic one like Arial or Times). Consider something like "Poppins", "Fira Code", or "Satisfy".

    The background should be a black base with a blue-to-pink gradient overlay or blend. Not solid colors — use modern gradient or glassmorphism styles to make it visually attractive.

    Add some animated visual elements in the hero section, like an animated laptop, floating code snippets, or abstract shapes — something related to web development. These elements should move subtly (like floating or fading).

✨ Navigation and Sections

    The site should be single-page, but when someone clicks on:

        About

        Projects

        Experience

        Contact

    It should not scroll down, but instead flip or transition smoothly to that section — like a card flip animation or a page turning effect. Transitions should be fancy but not heavy.

💻 Projects Section

    Projects should appear with flip cards or sliding animations. When hovering or clicking, the project details can show up in an interactive way.

    Keep it lively and include some animation or hover effects.

👩🏽‍💻 About Section

    Include a short animated intro about me as a frontend developer.

    I don’t want my picture added, but you can use animated icons or illustrations (like a coding girl, or laptop with sparkles).

    Add some floating elements or gradient dividers.

📞 Contact Section

    A clean but stylish contact form with floating labels or animated placeholders.

    Include icons and some playful motion (like send button animation).

    Add my email, LinkedIn, and GitHub links.

📌 Footer

    A proper footer with:

        My name

        Current year

        Social links (icons)

        A cute touch — like a sparkle animation or soft pastel wave

        Keep colors in theme (black + pink/blue gradient)

💡 General Aesthetic and Suggestions

    The overall design should look fancy, modern, slightly girly, and creative — not corporate or boring.

    Use a consistent color theme: black + blue-pink gradients.

    Use animated objects or Lottie animations where possible.

    Fonts and transitions should feel soft and fluid, not rigid.

    I am a frontend developer mainly using JavaScript and React, with a bit of Node.js. Please reflect that visually or in icons/animations.

Do not include my picture anywhere. Keep the whole theme developer-focused, slightly feminine, and creative.