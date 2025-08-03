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