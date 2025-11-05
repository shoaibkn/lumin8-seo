import { Layers2, UserRound } from "lucide-react";

// Site Configuration
export const SITE_CONFIG = {
  name: "SaaSify",
  tagline: "Scale Your Business With Smart Tools",
  description:
    "The all-in-one platform that helps you manage, analyze, and grow your business with powerful automation and insights.",
  url: "https://saasify.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/saasify",
    github: "https://github.com/saasify",
    linkedin: "https://linkedin.com/company/saasify",
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
    text: "🚀 New: AI-Powered Analytics",
    variant: "secondary" as const,
  },
  headline: {
    main: "Scale Your Business",
    sub: "With Smart Tools",
  },
  description:
    "The all-in-one platform that helps you manage, analyze, and grow your business with powerful automation and insights.",
  buttons: {
    primary: {
      text: "Start Free Trial",
      icon: "ArrowRight" as const,
    },
    secondary: {
      text: "Watch Demo",
      variant: "outline" as const,
    },
  },
} as const;

// Features Section
export const FEATURES = {
  title: "Powerful Features",
  description:
    "Everything you need to manage and grow your business in one place",
  items: [
    {
      icon: "Zap" as const,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times",
    },
    {
      icon: "Shield" as const,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
    },
    {
      icon: "Users" as const,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time collaboration tools",
    },
    {
      icon: "BarChart3" as const,
      title: "Advanced Analytics",
      description: "Get insights with powerful analytics and reporting tools",
    },
  ],
} as const;

// Pricing Section
export const PRICING = {
  title: "Simple Pricing",
  description: "Choose the plan that's right for your business",
  plans: [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics",
        "24/7 phone support",
        "Advanced API",
        "Custom integrations",
        "Dedicated account manager",
      ],
      popular: false,
      cta: "Get Started",
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
  description: "Everything you need to know about our platform",
  items: [
    {
      question: "How does the free trial work?",
      answer:
        "Our free trial gives you full access to all features for 14 days. No credit card required. You can cancel anytime during the trial period.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with SOC 2 Type II standards. Your data is never shared with third parties.",
    },
    {
      question: "Do you offer custom integrations?",
      answer:
        "Yes, we offer custom integrations for Professional and Enterprise plans. Our team can help you connect with any tools you're already using.",
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
    product: ["Features", "Pricing", "Integrations", "API"],
    company: ["About", "Blog", "Careers", "Contact"],
    support: ["Help Center", "Documentation", "Status", "Community"],
  },
  social: [
    { name: "Github", icon: "Github" as const, href: "#" },
    { name: "Twitter", icon: "Twitter" as const, href: "#" },
    { name: "LinkedIn", icon: "Linkedin" as const, href: "#" },
  ],
  copyright: "© 2024 SaaSify. All rights reserved.",
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
