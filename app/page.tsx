"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import Link from "next/link";

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
            <Link href={HERO.buttons.primary.href}>
              <Button size="lg" className="text-lg px-8">
                {HERO.buttons.primary.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={HERO.buttons.secondary.href}>
              <Button
                size="lg"
                variant={HERO.buttons.secondary.variant}
                className="text-lg px-8"
              >
                {HERO.buttons.secondary.text}
                <Github />
              </Button>
            </Link>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  className={`h-full pb-0 relative ${
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
                  <CardContent className="flex flex-col justify-between">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="h-full flex flex-col justify-end p-4">
                    <Button
                      className="w-full items-end"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
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
                <Link href="/" className="flex flex-col gap-0">
                  <span className="font-sans text-xl tracking-tight text-foreground flex flex-row items-center gap-2">
                    Lumin
                    <svg
                      width="33"
                      height="19"
                      viewBox="0 0 33 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.1093 18.1557C22.8957 18.1518 24.6083 17.44 25.8691 16.1774L29.9835 12.0571C30.6227 11.4353 31.1315 10.693 31.4805 9.87343C31.8294 9.05384 32.0114 8.17327 32.0159 7.28293C32.0204 6.39259 31.8474 5.51023 31.5068 4.68716C31.1663 3.86409 30.665 3.11673 30.0322 2.48853C29.3993 1.86033 28.6475 1.36382 27.8205 1.02787C26.9935 0.691914 26.1077 0.523224 25.2147 0.531604C24.3217 0.539983 23.4393 0.725264 22.6188 1.07667C21.7982 1.42809 21.0559 1.93862 20.435 2.57858L17.5885 5.42831L9.29646 13.733C8.90821 14.1221 8.42635 14.4054 7.89693 14.5558C7.36751 14.7062 6.80824 14.7187 6.2726 14.5921C5.73695 14.4655 5.24285 14.204 4.83753 13.8326C4.4322 13.4613 4.1292 12.9924 3.95751 12.471L1.06395 14.4168C1.60781 15.2639 2.61256 16.6537 3.4704 17.1829C4.32823 17.7121 5.29431 18.0426 6.29735 18.1498C7.3004 18.257 8.31479 18.1384 9.26569 17.8025C10.2166 17.4667 11.0797 16.9223 11.7914 16.2094L22.9273 5.05325C23.2256 4.75454 23.5799 4.51732 23.9701 4.35512C24.3603 4.19293 24.7787 4.10895 25.2014 4.10797C25.6241 4.10699 26.0429 4.18904 26.4339 4.34942C26.8248 4.50981 27.1802 4.74539 27.4798 5.04272C27.7794 5.34005 28.0174 5.69331 28.1801 6.08232C28.3427 6.47133 28.427 6.88848 28.4279 7.30995C28.4289 7.73142 28.3466 8.14895 28.1857 8.53871C28.0249 8.92847 27.7886 9.28283 27.4903 9.58154L23.3759 13.7018C22.9877 14.0909 22.5058 14.3742 21.9764 14.5246C21.447 14.675 20.8877 14.6875 20.3521 14.5609C19.8164 14.4343 19.3223 14.1728 18.917 13.8014C18.5117 13.4301 18.2087 12.9612 18.037 12.4398L15.4205 15.06C16.031 16.0117 16.8725 16.7943 17.8671 17.3355C18.8616 17.8766 19.9771 18.1588 21.1102 18.1557L21.1093 18.1557Z"
                        fill="#818cf8"
                      />
                      <path
                        d="M22.6068 4.47033C22.995 4.08122 23.4768 3.79788 24.0061 3.64741C24.5355 3.49694 25.0947 3.48437 25.6304 3.6109C26.166 3.73742 26.6601 3.99882 27.0655 4.37009C27.4708 4.74136 27.7739 5.2101 27.9457 5.73149L30.5622 3.11126C30.0183 2.2644 29.2906 1.5501 28.4328 1.02106C27.575 0.492013 26.609 0.161731 25.6061 0.0545741C24.6031 -0.0525828 23.5889 0.0661212 22.6381 0.401927C21.6873 0.737733 20.8243 1.28207 20.1127 1.99479L8.97414 13.1492C8.37195 13.7523 7.55414 14.0921 6.70063 14.094C5.84711 14.0959 5.02781 13.7597 4.42295 13.1593C3.81809 12.5589 3.47722 11.7436 3.47533 10.8927C3.47345 10.0417 3.81069 9.22486 4.41289 8.62182L8.52818 4.50155C8.91633 4.11242 9.39813 3.82909 9.92749 3.67866C10.4569 3.52823 11.0161 3.51573 11.5517 3.64236C12.0873 3.76898 12.5813 4.0305 12.9866 4.40189C13.3918 4.77329 13.6947 5.24213 13.8662 5.76359L16.4827 3.14248C15.9389 2.29555 15.2112 1.58118 14.3535 1.05205C13.4957 0.522928 12.5297 0.192559 11.5268 0.0853172C10.5239 -0.0219242 9.5096 0.0966978 8.55879 0.432434C7.60799 0.768171 6.74491 1.31245 6.03325 2.02513L1.91884 6.14627C0.688162 7.41477 0.00758786 9.11515 0.0242234 10.8799C0.040859 12.6446 0.753366 14.3319 2.00774 15.5771C3.26211 16.8223 4.95759 17.5253 6.72769 17.5342C8.4978 17.5432 10.2003 16.8572 11.4673 15.6248L22.6068 4.47033Z"
                        fill="#818cf8"
                      />
                      <path
                        d="M22.6068 4.47033C22.995 4.08122 23.4768 3.79788 24.0061 3.64741C24.5355 3.49694 25.0947 3.48437 25.6304 3.6109C26.166 3.73742 26.6601 3.99882 27.0655 4.37009C27.4708 4.74136 27.7739 5.2101 27.9457 5.73149L30.5622 3.11126C30.0183 2.2644 29.2906 1.5501 28.4328 1.02106C27.575 0.492013 26.609 0.161731 25.6061 0.0545741C24.6031 -0.0525828 23.5889 0.0661212 22.6381 0.401927C21.6873 0.737733 20.8243 1.28207 20.1127 1.99479L8.97414 13.1492C8.37195 13.7523 7.55414 14.0921 6.70063 14.094C5.84711 14.0959 5.02781 13.7597 4.42295 13.1593C3.81809 12.5589 3.47722 11.7436 3.47533 10.8927C3.47345 10.0417 3.81069 9.22486 4.41289 8.62182L8.52818 4.50155C8.91633 4.11242 9.39813 3.82909 9.92749 3.67866C10.4569 3.52823 11.0161 3.51573 11.5517 3.64236C12.0873 3.76898 12.5813 4.0305 12.9866 4.40189C13.3918 4.77329 13.6947 5.24213 13.8662 5.76359L16.4827 3.14248C15.9389 2.29555 15.2112 1.58118 14.3535 1.05205C13.4957 0.522928 12.5297 0.192559 11.5268 0.0853172C10.5239 -0.0219242 9.5096 0.0966978 8.55879 0.432434C7.60799 0.768171 6.74491 1.31245 6.03325 2.02513L1.91884 6.14627C0.688162 7.41477 0.00758786 9.11515 0.0242234 10.8799C0.040859 12.6446 0.753366 14.3319 2.00774 15.5771C3.26211 16.8223 4.95759 17.5253 6.72769 17.5342C8.4978 17.5432 10.2003 16.8572 11.4673 15.6248L22.6068 4.47033Z"
                        fill="#818cf8"
                      />
                      <path
                        d="M22.6068 4.47033C22.995 4.08122 23.4768 3.79788 24.0061 3.64741C24.5355 3.49694 25.0947 3.48437 25.6304 3.6109C26.166 3.73742 26.6601 3.99882 27.0655 4.37009C27.4708 4.74136 27.7739 5.2101 27.9457 5.73149L30.5622 3.11126C30.0183 2.2644 29.2906 1.5501 28.4328 1.02105C27.575 0.492012 26.609 0.16173 25.6061 0.0545729C24.6031 -0.052584 23.5889 0.0661195 22.6381 0.401925C21.6873 0.737731 20.8243 1.28207 20.1127 1.99479L8.97414 13.1492C8.37195 13.7523 7.55414 14.0921 6.70063 14.094C5.84711 14.0959 5.02781 13.7597 4.42295 13.1593C3.81809 12.5589 3.47722 11.7436 3.47533 10.8927C3.47345 10.0417 3.81069 9.22486 4.41289 8.62181L8.52818 4.50155C8.91633 4.11242 9.39813 3.82909 9.9275 3.67866C10.4569 3.52823 11.0161 3.51573 11.5517 3.64235C12.0873 3.76898 12.5813 4.0305 12.9866 4.40189C13.3918 4.77328 13.6947 5.24213 13.8662 5.76359L16.4827 3.14248C15.9389 2.29555 15.2112 1.58118 14.3535 1.05205C13.4957 0.522927 12.5297 0.192557 11.5268 0.0853158C10.5239 -0.0219257 9.5096 0.0966968 8.5588 0.432433C7.60799 0.76817 6.74491 1.31245 6.03325 2.02513L1.91884 6.14627C0.688165 7.41477 0.00758949 9.11515 0.024225 10.8799C0.0408606 12.6446 0.753366 14.3319 2.00774 15.5771C3.26211 16.8223 4.95759 17.5253 6.72769 17.5342C8.4978 17.5432 10.2003 16.8572 11.4673 15.6248L22.6068 4.47033Z"
                        fill="#818cf8"
                      />
                    </svg>
                  </span>
                  <span className="text-sm items-end font-light italic">
                    SEO
                  </span>
                </Link>
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
                {FOOTER.links.product.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
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
