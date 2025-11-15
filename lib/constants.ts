import { Layers2, UserRound } from "lucide-react";

export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0";

// Site Configuration
export const SITE_CONFIG = {
  name: "Lumin8 SEO",
  tagline: "AI that makes SEO effortless.",
  description:
    "An intuitive SEO platform powered by advanced AI models that optimize content, structure, and strategy in real time. No guesswork, no spreadsheets—just smart automation that helps you grow organically.",
  url: "https://saasify.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/lumin8-seo",
    github: "https://github.com/lumin8-seo",
    linkedin: "https://linkedin.com/company/lumin8-seo",
  },
} as const;

// Navigation
export const NAVIGATION = {
  logo: "SaaSify",
  links: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  appLinks: [
    { name: "Dashboard", href: "/dashboard", icon: Layers2 },
    { name: "Profile", href: "/profile", icon: UserRound },
  ],
  cta: {
    signIn: "Sign In",
    getStarted: "Get Started",
  },
} as const;

// Hero Section
export const HERO = {
  badge: {
    text: "🚀 Unlock AI-Powered Growth",
    variant: "secondary" as const,
  },
  headline: {
    main: "Scale Your Business",
    sub: "With Smart Tools",
  },
  description:
    "An intuitive SEO platform powered by advanced AI models that optimize content, structure, and strategy in real time. No guesswork, no spreadsheets—just smart automation that helps you grow organically.",
  buttons: {
    primary: {
      text: "Start For Free",
      icon: "ArrowRight" as const,
      href: "/dashboard",
    },
    secondary: {
      text: "View Source",
      variant: "outline" as const,
      href: "https://github.com/shoaibkn/lumin8-seo",
    },
  },
} as const;

// Features Section
export const FEATURES = {
  title: "Powerful Features, Tailored for Growth",
  description:
    "All the tools you need to scale your business and streamline operations, now in one seamless platform.",
  items: [
    {
      icon: "Zap" as const,
      title: "Blazing Fast Performance",
      description:
        "Instant responses with lightning-fast, optimized performance.",
    },
    {
      icon: "Shield" as const,
      title: "Rock-Solid Security",
      description:
        "Trust in enterprise-grade security and a 99.9% uptime guarantee.",
    },
    {
      icon: "Users" as const,
      title: "Seamless Team Collaboration",
      description:
        "Empower your team with real-time, collaborative tools for smooth workflows.",
    },
    {
      icon: "BarChart3" as const,
      title: "Powerful Analytics",
      description:
        "Unlock actionable insights with advanced reporting and analytics tools.",
    },
  ],
} as const;

// Pricing Section
export const PRICING = {
  title: "Simple Pricing",
  description: "Choose the report type that fits your needs",
  plans: [
    {
      name: "Basic Report",
      price: "₹10",
      period: "/report",
      description: "Essential reports with core insights",
      features: [
        "General report generation",
        "Fast processing",
        "Easy-to-read summaries",
      ],
      popular: false,
      cta: "Generate Report",
    },
    {
      name: "Smart Report",
      price: "₹25",
      period: "/report",
      description: "Advanced intelligence with deeper insights",
      features: [
        "Everything in Basic",
        "AI-powered Smart report generation",
        "Chat assistant for detailed insights",
        "Better recommendations & analysis",
      ],
      popular: true,
      cta: "Generate Smart Report",
    },
  ],
  popularBadge: "Most Popular",
} as const;

// Testimonials Section
export const TESTIMONIALS = {
  title: "What Our Customers Say",
  description: "Join thousands of satisfied customers who trust SaaSify",
  items: [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "SaaSify has transformed how we manage our business. The analytics insights are incredible and the team collaboration features are seamless.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content:
        "The security and reliability are top-notch. We've never experienced any downtime, and the custom integrations work perfectly.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content:
        "The pricing is fair and the features are exactly what we needed. Customer support is responsive and helpful.",
      rating: 5,
    },
  ],
} as const;

// FAQ Section
export const FAQ = {
  title: "Frequently Asked Questions",
  description: "Everything you need to know about our AI-powered reports",
  items: [
    {
      question: "How do the report charges work?",
      answer:
        "You only pay per report—₹10 for Basic reports and ₹25 for Smart reports. There are no subscriptions, hidden fees, or long-term commitments.",
    },
    {
      question: "What’s the difference between Basic and Smart reports?",
      answer:
        "Basic reports provide general insights and essential SEO data. Smart reports deliver deeper analysis, improved recommendations, and include an AI chat assistant for follow-up questions and insights.",
    },
    {
      question: "How does the chat assistant work?",
      answer:
        "With Smart reports, you'll get access to an AI chat assistant that helps you interpret results, explore insights, and get actionable recommendations tailored to your site.",
    },
    {
      question: "Do I need any SEO experience to use this?",
      answer:
        "Not at all. Our platform is designed for beginners and experts alike. Just enter your details, generate a report, and follow the clear recommendations.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes. We use secure data handling practices, encrypted processing, and do not store your site data longer than needed to generate your report.",
    },
    {
      question: "Can I generate unlimited reports?",
      answer:
        "Yes, you can generate as many reports as you like. You simply pay per report based on the type you choose.",
    },
  ],
} as const;

// Footer Section
export const FOOTER = {
  company: {
    name: "SaaSify",
    description: "The all-in-one platform for modern businesses.",
  },
  links: {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "API", href: "https://github.com/shoaibkn/lumin8-seo" },
    ],
    company: ["About", "Blog", "Careers", "Contact"],
    support: ["Help Center", "Documentation", "Status", "Community"],
  },
  social: [
    {
      name: "Github",
      icon: "Github" as const,
      href: "https://github.com/shoaibkn/lumin8-seo",
    },
    // { name: "Twitter", icon: "Twitter" as const, href: "#" },
    // { name: "LinkedIn", icon: "Linkedin" as const, href: "#" },
  ],
  copyright: "© 2025 Lumin8. All rights reserved.",
} as const;

// Animation Configuration
export const ANIMATIONS = {
  nav: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
  },
  hero: {
    badge: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 },
    },
    headline: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.2 },
    },
    description: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.4 },
    },
    buttons: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.6 },
    },
    image: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.8 },
    },
  },
  section: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  card: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    hover: { y: -5 },
  },
  stagger: {
    delay: 0.1,
  },
} as const;

// Visual Configuration
export const VISUAL = {
  gradients: {
    hero: "bg-gradient-to-r from-primary to-primary/60",
    background:
      "bg-gradient-to-br from-primary/5 via-transparent to-primary/10",
  },
  floatingElements: [
    {
      position: "top-20 left-10",
      size: "w-20 h-20",
      color: "bg-primary/10",
      animation: "animate-pulse",
    },
    {
      position: "top-40 right-20",
      size: "w-32 h-32",
      color: "bg-primary/5",
      animation: "animate-pulse delay-1000",
    },
    {
      position: "bottom-20 left-1/4",
      size: "w-16 h-16",
      color: "bg-primary/15",
      animation: "animate-pulse delay-2000",
    },
  ],
} as const;
