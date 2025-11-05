"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  Users,
  BarChart3,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import {
  SITE_CONFIG,
  NAVIGATION,
  HERO,
  FEATURES,
  PRICING,
  TESTIMONIALS,
  FAQ,
  FOOTER,
  ANIMATIONS,
  VISUAL,
} from "@/lib/constants";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import Header from "@/components/global/Header";

// Icon mapping for dynamic icon rendering
const iconMap = {
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  Users,
  BarChart3,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="h-screen pt-32 pb-20 px-4 relative overflow-hidden">
        <div className={`absolute inset-0 ${VISUAL.gradients.background}`} />
        {/* Floating elements */}
        {VISUAL.floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.size} ${element.color} rounded-full blur-xl ${element.animation}`}
          />
        ))}
        <div className="container mx-auto text-center relative">
          <motion.div {...ANIMATIONS.hero.badge} className="mb-6">
            <Badge variant={HERO.badge.variant} className="mb-4">
              {HERO.badge.text}
            </Badge>
          </motion.div>

          <motion.h1
            {...ANIMATIONS.hero.headline}
            className={`text-5xl md:text-7xl font-bold mb-6 ${VISUAL.gradients.hero} bg-clip-text text-transparent`}
          >
            {HERO.headline.main}
            <br />
            <span className="text-foreground">{HERO.headline.sub}</span>
          </motion.h1>

          <motion.p
            {...ANIMATIONS.hero.description}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            {...ANIMATIONS.hero.buttons}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8">
              {HERO.buttons.primary.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant={HERO.buttons.secondary.variant}
              className="text-lg px-8"
            >
              {HERO.buttons.secondary.text}
            </Button>
          </motion.div>
          <motion.div {...ANIMATIONS.hero.image}>
            <Image
              className="rounded-lg mx-auto mt-12"
              src="/app-screenshot.png"
              alt="Hero Image"
              width={1000}
              height={1000}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            {...ANIMATIONS.section}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{FEATURES.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {FEATURES.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.items.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={index}
                  {...ANIMATIONS.card}
                  transition={{
                    ...ANIMATIONS.card.transition,
                    delay: index * ANIMATIONS.stagger.delay,
                  }}
                  viewport={{ once: true }}
                  whileHover={ANIMATIONS.card.hover}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4">
                        {IconComponent && (
                          <IconComponent className="h-8 w-8 text-primary" />
                        )}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            {...ANIMATIONS.section}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{PRICING.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {PRICING.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING.plans.map((plan, index) => (
              <motion.div
                key={index}
                {...ANIMATIONS.card}
                transition={{
                  ...ANIMATIONS.card.transition,
                  delay: index * ANIMATIONS.stagger.delay,
                }}
                viewport={{ once: true }}
                whileHover={ANIMATIONS.card.hover}
              >
                <Card
                  className={`h-full relative ${
                    plan.popular ? "border-primary shadow-lg" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        {PRICING.popularBadge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                    <CardDescription className="mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            {...ANIMATIONS.section}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{TESTIMONIALS.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {TESTIMONIALS.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.items.map((testimonial, index) => (
              <motion.div
                key={index}
                {...ANIMATIONS.card}
                transition={{
                  ...ANIMATIONS.card.transition,
                  delay: index * ANIMATIONS.stagger.delay,
                }}
                viewport={{ once: true }}
                whileHover={ANIMATIONS.card.hover}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      {testimonial.content}
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            {...ANIMATIONS.section}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{FAQ.title}</h2>
            <p className="text-xl text-muted-foreground">{FAQ.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ.items.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-background border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold"
              >
                {FOOTER.company.name}
              </motion.div>
              <p className="text-muted-foreground">
                {FOOTER.company.description}
              </p>
              <div className="flex space-x-4">
                {FOOTER.social.map((social, index) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="icon" asChild>
                        <a href={social.href}>
                          {IconComponent && (
                            <IconComponent className="h-5 w-5" />
                          )}
                        </a>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <div className="space-y-2">
                {FOOTER.links.product.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2">
                {FOOTER.links.company.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <div className="space-y-2">
                {FOOTER.links.support.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t text-center text-muted-foreground"
          >
            <p>{FOOTER.copyright}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
