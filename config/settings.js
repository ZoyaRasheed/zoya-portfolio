export const siteSettings = {
  site: {
    title: "Zoya Raseed - Creative Developer",
    description: "Creative developer crafting digital experiences with purpose and precision",
    url: "https://zoyarasheed.com",
    keywords: ["developer", "frontend", "react", "next.js", "creative", "portfolio"],
    author: "Zoya Raseed",
    language: "en"
  },
  theme: {
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#6366f1",
      muted: "#6b7280",
      background: "#ffffff",
      foreground: "#000000"
    },
    fonts: {
      primary: "Inter, sans-serif",
      secondary: "Playfair Display, serif",
      mono: "JetBrains Mono, monospace"
    },
    spacing: {
      section: "8rem",
      component: "4rem",
      element: "2rem"
    }
  },
  animations: {
    duration: {
      fast: "0.2s",
      normal: "0.6s",
      slow: "1.2s"
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    }
  },
  layout: {
    maxWidth: "1200px",
    padding: "1rem",
    nav: {
      height: "4rem",
      floating: true,
      magnetic: true
    },
    cursor: {
      enabled: true,
      magnetic: true,
      size: "1rem"
    }
  },
  features: {
    darkMode: false,
    scrollProgress: true,
    parallax: true,
    magnetic: true,
    textReveal: true,
    customCursor: true
  }
};