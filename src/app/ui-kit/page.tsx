"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Bold,
  Calendar as CalendarIcon,
  Check,
  ChevronRight,
  GraduationCap,
  Home,
  Italic,
  Loader2,
  Mail,
  Quote,
  Rocket,
  Settings,
  Star,
  Underline,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Toaster } from "@/components/ui/sonner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CtaButton } from "@/components/viiv/CtaButton";
import { GridBackground } from "@/components/viiv/GridBackground";
import { cn } from "@/lib/utils";

const brandColors = [
  { name: "Gold", token: "--vil-gold", hex: "#f7bd44", dark: true },
  { name: "Gold Dim", token: "--vil-gold-dim", hex: "#bb8806", dark: false },
  { name: "Navy", token: "--vil-navy", hex: "#1f3149", dark: false },
  { name: "Blue", token: "--vil-blue", hex: "#b6c7e6", dark: true },
  { name: "Ivory", token: "--vil-ivory", hex: "#f5f3ee", dark: true },
  { name: "Surface Muted", token: "--vil-surface-muted", hex: "#ece8df", dark: true },
  { name: "On Surface", token: "--vil-on-surface", hex: "#121414", dark: false },
  { name: "On Surface Variant", token: "--vil-on-surface-variant", hex: "#5c5f66", dark: false },
  { name: "Outline", token: "--vil-outline-variant", hex: "#c4c6ce", dark: true },
];

const semanticColors = [
  { name: "background", cls: "bg-background", fg: "text-foreground", ring: true },
  { name: "foreground", cls: "bg-foreground", fg: "text-background" },
  { name: "primary", cls: "bg-primary", fg: "text-primary-foreground" },
  { name: "secondary", cls: "bg-secondary", fg: "text-secondary-foreground" },
  { name: "muted", cls: "bg-muted", fg: "text-muted-foreground" },
  { name: "accent", cls: "bg-accent", fg: "text-accent-foreground" },
  { name: "destructive", cls: "bg-destructive", fg: "text-destructive-foreground" },
  { name: "card", cls: "bg-card", fg: "text-card-foreground", ring: true },
  { name: "border", cls: "bg-border", fg: "text-foreground" },
  { name: "ring", cls: "bg-ring", fg: "text-white" },
];

const displayScale = [
  { label: "Display / 4xl", cls: "text-5xl md:text-6xl", sample: "Build the venture." },
  { label: "Display / 3xl", cls: "text-4xl", sample: "Graduate with proof." },
  { label: "Heading / 2xl", cls: "text-2xl", sample: "A venture college in Chennai" },
  { label: "Heading / xl", cls: "text-xl", sample: "Learn, build, review, launch" },
];

const navSections = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "badges", label: "Badges" },
  { id: "forms", label: "Forms" },
  { id: "toggles", label: "Toggles" },
  { id: "tabs", label: "Tabs" },
  { id: "accordion", label: "Accordion" },
  { id: "alerts", label: "Alerts" },
  { id: "cards", label: "Cards" },
  { id: "breadcrumbs", label: "Breadcrumbs" },
  { id: "headers", label: "Page Headers" },
  { id: "overlays", label: "Overlays" },
  { id: "feedback", label: "Feedback" },
  { id: "data", label: "Data" },
];

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-[color:var(--border)] py-14">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--vil-navy)]">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm text-[color:var(--text-muted)]">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 last:mb-0">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--text-soft)]">
        {title}
      </p>
      {children}
    </div>
  );
}

export default function UiKitPage() {
  const [progress, setProgress] = useState(64);
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchOn, setSwitchOn] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <TooltipProvider delayDuration={150}>
      <Toaster position="bottom-right" richColors closeButton />

      <div className="min-h-screen bg-[color:var(--vil-ivory)] text-[color:var(--vil-navy)]">
        {/* Header */}
        <header className="border-b border-[color:var(--border)] bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--vil-gold)] transition hover:gap-3"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </Link>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold italic leading-none tracking-tight">
              UI Kit
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--vil-ivory)]/75">
              A living playground for VIIV design tokens and components. Fine-tune colors,
              typography, buttons, accordions, and the full shadcn library in one place.
            </p>
          </div>
        </header>

        {/* Sticky in-page nav */}
        <nav className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--vil-ivory)]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-3">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border border-[color:var(--border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--text-muted)] transition hover:border-[color:var(--vil-gold)] hover:text-[color:var(--vil-navy)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <main className="mx-auto max-w-6xl px-6 pb-24">
          {/* COLORS */}
          <Section
            id="colors"
            title="Colors"
            description="Brand palette from Varman Innovation Labs plus the semantic tokens that drive every shadcn component."
          >
            <Block title="Brand palette">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {brandColors.map((color) => (
                  <div
                    key={color.token}
                    className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white"
                  >
                    <div
                      className={cn(
                        "flex h-24 items-end p-3",
                        color.dark ? "text-[color:var(--vil-navy)]" : "text-white",
                      )}
                      style={{ background: `var(${color.token})` }}
                    >
                      <span className="text-xs font-bold uppercase tracking-wide">{color.name}</span>
                    </div>
                    <div className="px-3 py-2">
                      <p className="font-mono text-[11px] text-[color:var(--text-muted)]">{color.hex}</p>
                      <p className="font-mono text-[11px] text-[color:var(--text-soft)]">{color.token}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Semantic tokens">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {semanticColors.map((color) => (
                  <div
                    key={color.name}
                    className={cn(
                      "flex h-24 flex-col justify-between rounded-2xl p-3",
                      color.cls,
                      color.fg,
                      color.ring && "border border-[color:var(--border)]",
                    )}
                  >
                    <span className="text-xs font-semibold">{color.name}</span>
                    <span className="font-mono text-[10px] opacity-70">{color.cls}</span>
                  </div>
                ))}
              </div>
            </Block>
          </Section>

          {/* TYPOGRAPHY */}
          <Section
            id="typography"
            title="Typography"
            description="Fraunces for display and editorial headlines; Inter Tight for UI and body copy."
          >
            <Block title="Type families">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--text-soft)]">
                    Display — Fraunces
                  </p>
                  <p className="mt-3 font-display text-4xl font-semibold italic tracking-tight">
                    Aa Bb Cc
                  </p>
                  <p className="mt-2 font-display text-lg text-[color:var(--text-muted)]">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--text-soft)]">
                    Sans — Inter Tight
                  </p>
                  <p className="mt-3 text-4xl font-bold tracking-tight">Aa Bb Cc</p>
                  <p className="mt-2 text-lg text-[color:var(--text-muted)]">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              </div>
            </Block>

            <Block title="Display scale">
              <div className="space-y-5 rounded-2xl border border-[color:var(--border)] bg-white p-6">
                {displayScale.map((row) => (
                  <div key={row.label} className="flex flex-col gap-1 border-b border-[color:var(--border)] pb-4 last:border-0 last:pb-0">
                    <span className="font-mono text-[11px] text-[color:var(--text-soft)]">{row.label}</span>
                    <span className={cn("font-display font-semibold tracking-tight text-[color:var(--vil-navy)]", row.cls)}>
                      {row.sample}
                    </span>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Utility classes">
              <div className="space-y-4 rounded-2xl border border-[color:var(--border)] bg-white p-6">
                <p className="viiv-kicker">.viiv-kicker — eyebrow label</p>
                <h3 className="viiv-section-title">.viiv-section-title heading</h3>
                <p className="text-base leading-relaxed text-[color:var(--text-muted)]">
                  Body copy uses <code className="rounded bg-[color:var(--vil-surface-muted)] px-1.5 py-0.5 font-mono text-xs">text-[color:var(--text-muted)]</code>{" "}
                  for muted paragraphs and full navy for emphasis.
                </p>
              </div>
            </Block>
          </Section>

          {/* BUTTONS */}
          <Section
            id="buttons"
            title="Buttons"
            description="shadcn variants and sizes, plus the brand pill buttons used across the marketing site."
          >
            <Block title="Variants">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </Block>

            <Block title="Sizes & states">
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="Settings">
                  <Settings />
                </Button>
                <Button>
                  <Mail /> With icon
                </Button>
                <Button disabled>Disabled</Button>
                <Button
                  disabled={loading}
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 1600);
                  }}
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Check />}
                  {loading ? "Working…" : "Click to load"}
                </Button>
              </div>
            </Block>

            <Block title="CTA buttons (interactive hover)">
              <div className="flex flex-wrap items-center gap-4">
                <CtaButton variant="gold">Apply Now</CtaButton>
                <CtaButton variant="navy">Talk to Admissions</CtaButton>
                <CtaButton variant="outline">Explore Program</CtaButton>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 rounded-2xl bg-[color:var(--vil-navy)] p-5">
                <CtaButton variant="gold">Apply Now</CtaButton>
                <CtaButton variant="outlineLight">Explore Program</CtaButton>
              </div>
            </Block>
          </Section>

          {/* BADGES */}
          <Section id="badges" title="Badges" description="Status and metadata pills.">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge className="bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)] hover:bg-[color:var(--vil-gold)]">
                <Star className="mr-1 h-3 w-3" /> Featured
              </Badge>
            </div>
          </Section>

          {/* FORMS */}
          <Section
            id="forms"
            title="Form controls"
            description="Inputs, selects, and choice controls wired to the same tokens."
          >
            <div className="grid gap-8 md:grid-cols-2">
              <Block title="Text inputs">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="kit-name">Full name</Label>
                    <Input id="kit-name" placeholder="Ada Lovelace" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="kit-email">Email</Label>
                    <Input id="kit-email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="kit-disabled">Disabled</Label>
                    <Input id="kit-disabled" placeholder="Unavailable" disabled />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="kit-note">Message</Label>
                    <Textarea id="kit-note" placeholder="Tell us about the venture you want to build…" />
                  </div>
                </div>
              </Block>

              <Block title="Selection">
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <Label>Program track</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a track" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Tracks</SelectLabel>
                          <SelectItem value="venture">Degree + Venture Builder</SelectItem>
                          <SelectItem value="creator">Creator + Founder</SelectItem>
                          <SelectItem value="operator">Operator + Placement</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-3">
                    <Checkbox id="kit-terms" defaultChecked />
                    <Label htmlFor="kit-terms">I agree to the admissions terms</Label>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred intake</Label>
                    <RadioGroup defaultValue="2026" className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="2026" id="kit-2026" />
                        <Label htmlFor="kit-2026">2026</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="2027" id="kit-2027" />
                        <Label htmlFor="kit-2027">2027</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-[color:var(--border)] bg-white p-3">
                    <Label htmlFor="kit-switch">Email updates</Label>
                    <Switch id="kit-switch" checked={switchOn} onCheckedChange={setSwitchOn} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Scholarship slider</Label>
                      <span className="font-mono text-xs text-[color:var(--text-muted)]">{sliderValue[0]}%</span>
                    </div>
                    <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                  </div>
                </div>
              </Block>
            </div>
          </Section>

          {/* TOGGLES */}
          <Section id="toggles" title="Toggles" description="Toggle and toggle groups for inline controls.">
            <div className="flex flex-wrap items-center gap-6">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Section>

          {/* TABS */}
          <Section id="tabs" title="Tabs" description="Segmented navigation for grouped content.">
            <Tabs defaultValue="overview" className="max-w-xl">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="fees">Fees</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="rounded-xl border border-[color:var(--border)] bg-white p-5 text-sm text-[color:var(--text-muted)]">
                A 3-year, full-time venture-building college in Chennai.
              </TabsContent>
              <TabsContent value="curriculum" className="rounded-xl border border-[color:var(--border)] bg-white p-5 text-sm text-[color:var(--text-muted)]">
                Business foundations, venture studio, creator labs, and operator skills.
              </TabsContent>
              <TabsContent value="fees" className="rounded-xl border border-[color:var(--border)] bg-white p-5 text-sm text-[color:var(--text-muted)]">
                ₹8L total for 3 years, degree fee included. Scholarships up to ₹1L.
              </TabsContent>
            </Tabs>
          </Section>

          {/* ACCORDION */}
          <Section id="accordion" title="Accordion" description="Collapsible FAQ-style content.">
            <Accordion type="single" collapsible className="max-w-2xl rounded-2xl border border-[color:var(--border)] bg-white px-5">
              <AccordionItem value="a1">
                <AccordionTrigger>Is this a degree program?</AccordionTrigger>
                <AccordionContent className="text-[color:var(--text-muted)]">
                  Yes — students earn an online BBA from Kalasalingam University while attending VIIV
                  full-time in Chennai.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a2">
                <AccordionTrigger>Is there an entrance exam?</AccordionTrigger>
                <AccordionContent className="text-[color:var(--text-muted)]">
                  No. Admission is based on eligibility, ambition, and a student plus parent interview.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a3">
                <AccordionTrigger>What will students build?</AccordionTrigger>
                <AccordionContent className="text-[color:var(--text-muted)]">
                  Ventures, MVPs, campaigns, pitch decks, content systems, and portfolio assets.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          {/* ALERTS */}
          <Section id="alerts" title="Alerts" description="Inline messaging for status and warnings.">
            <div className="grid gap-4 md:grid-cols-2">
              <Alert>
                <Bell className="h-4 w-4" />
                <AlertTitle>Admissions are open</AlertTitle>
                <AlertDescription>Applications for the 2026 Chennai intake are live.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <Bell className="h-4 w-4" />
                <AlertTitle>Seats are limited</AlertTitle>
                <AlertDescription>Only a few interview slots remain this month.</AlertDescription>
              </Alert>
            </div>
          </Section>

          {/* CARDS */}
          <Section
            id="cards"
            title="Cards"
            description="Content containers — from the base shadcn card to the marketing patterns used across the site."
          >
            <Block title="Base cards">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Venture Studio</CardTitle>
                    <CardDescription>Idea to customer feedback</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-[color:var(--text-muted)]">
                    Build real business experiments from idea to pitch, launch, and iteration.
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant="outline">
                      Learn more <ChevronRight />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-[color:var(--vil-gold)]/40">
                  <CardHeader>
                    <Badge className="mb-2 w-fit bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)] hover:bg-[color:var(--vil-gold)]">
                      Popular
                    </Badge>
                    <CardTitle>Creator + Founder</CardTitle>
                    <CardDescription>Build brands while building businesses</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-[color:var(--text-muted)]">
                    Content systems, storytelling, and creator-led venture experiments.
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>

                <Card className="bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
                  <CardHeader>
                    <CardTitle>Operator + Placement</CardTitle>
                    <CardDescription className="text-[color:var(--vil-ivory)]/70">
                      Graduate job- or startup-ready
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-[color:var(--vil-ivory)]/80">
                    Sales, communication, and portfolio proof for placements and internships.
                  </CardContent>
                </Card>
              </div>
            </Block>

            <Block title="Marketing patterns">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {/* Stat card */}
                <div className="flex flex-col justify-between rounded-3xl border border-[color:var(--border)] bg-white p-7">
                  <span className="viiv-kicker">Cohort outcome</span>
                  <div className="mt-6">
                    <p className="font-display text-6xl font-semibold tracking-tight text-[color:var(--vil-navy)]">
                      92<span className="text-[color:var(--vil-gold)]">%</span>
                    </p>
                    <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                      of graduates launch or join a venture within six months.
                    </p>
                  </div>
                </div>

                {/* Icon feature card */}
                <div className="group rounded-3xl border border-[color:var(--border)] bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_-24px_rgba(31,49,73,0.4)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--vil-navy)]">
                    Venture-first learning
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                    Every module ends with something shipped — a product, a campaign, or a pitch.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--vil-navy)] transition group-hover:gap-2">
                    Explore the method <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Testimonial card */}
                <div className="flex flex-col justify-between rounded-3xl bg-[color:var(--vil-navy)] p-7 text-[color:var(--vil-ivory)]">
                  <Quote className="h-8 w-8 text-[color:var(--vil-gold)]" />
                  <p className="mt-4 font-display text-lg italic leading-snug">
                    “I walked in with an idea and walked out with customers, revenue, and a team.”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]">
                        RK
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">Riya Krishnan</p>
                      <p className="text-xs text-[color:var(--vil-ivory)]/70">Founder, Cohort ’26</p>
                    </div>
                  </div>
                </div>
              </div>
            </Block>

            <Block title="Horizontal + pricing">
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Horizontal media card */}
                <div className="flex flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white sm:flex-row">
                  <div className="viiv-dot-bg-dark flex min-h-[160px] items-center justify-center p-6 sm:w-2/5">
                    <GraduationCap className="h-12 w-12 text-[color:var(--vil-gold)]" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <span className="viiv-kicker">Degree partner</span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-[color:var(--vil-navy)]">
                      Online BBA, on the side
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                      Earn an accredited degree from Kalasalingam University while you build full-time.
                    </p>
                  </div>
                </div>

                {/* Pricing card */}
                <div className="rounded-3xl border-2 border-[color:var(--vil-gold)] bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="viiv-kicker">All-inclusive</span>
                    <Badge className="bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)] hover:bg-[color:var(--vil-gold)]">
                      Scholarships available
                    </Badge>
                  </div>
                  <p className="mt-5 font-display text-5xl font-semibold tracking-tight text-[color:var(--vil-navy)]">
                    ₹8L<span className="ml-2 text-base font-medium text-[color:var(--text-muted)]">/ 3 years</span>
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-[color:var(--text-muted)]">
                    {["Degree fee included", "Venture studio access", "Mentor network"].map((line) => (
                      <li key={line} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[color:var(--vil-gold-dim)]" /> {line}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full">Apply now</Button>
                </div>
              </div>
            </Block>
          </Section>

          {/* BREADCRUMBS */}
          <Section
            id="breadcrumbs"
            title="Breadcrumbs"
            description="Wayfinding for nested pages — default, collapsed, custom separators, and on dark surfaces."
          >
            <Block title="Default">
              <div className="rounded-2xl border border-[color:var(--border)] bg-white p-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className="inline-flex items-center gap-1.5">
                        <Home className="h-3.5 w-3.5" /> Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/program">Program</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Venture Builder</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </Block>

            <Block title="Collapsed">
              <div className="rounded-2xl border border-[color:var(--border)] bg-white p-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbEllipsis />
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/campus">Campus</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Life at VIIV</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </Block>

            <Block title="Custom separator">
              <div className="rounded-2xl border border-[color:var(--border)] bg-white p-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-[color:var(--vil-gold-dim)]">/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/admissions">Admissions</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-[color:var(--vil-gold-dim)]">/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>How to apply</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </Block>

            <Block title="On dark surface">
              <div className="rounded-2xl bg-[color:var(--vil-navy)] p-5">
                <Breadcrumb>
                  <BreadcrumbList className="text-[color:var(--vil-ivory)]/60">
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/"
                        className="text-[color:var(--vil-ivory)]/70 hover:text-[color:var(--vil-gold)]"
                      >
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/about"
                        className="text-[color:var(--vil-ivory)]/70 hover:text-[color:var(--vil-gold)]"
                      >
                        About
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[color:var(--vil-ivory)]">Our story</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </Block>
          </Section>

          {/* PAGE HEADERS */}
          <Section
            id="headers"
            title="Page headers"
            description="Hero header patterns with layered background designs — grid, dot, and glow treatments."
          >
            <div className="space-y-6">
              {/* Dark grid header */}
              <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)]">
                <GridBackground tone="dark" />
                <div className="relative px-8 py-14 text-[color:var(--vil-ivory)] md:px-12">
                  <Breadcrumb>
                    <BreadcrumbList className="text-[color:var(--vil-ivory)]/60">
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          href="/"
                          className="text-[color:var(--vil-ivory)]/70 hover:text-[color:var(--vil-gold)]"
                        >
                          Home
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-[color:var(--vil-ivory)]">Program</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <p className="viiv-kicker mt-6 text-[color:var(--vil-gold)]">Dark · Grid</p>
                  <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold italic leading-[1.02] tracking-tight">
                    A venture college, not a lecture hall.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--vil-ivory)]/75">
                    Three years of building real products with mentors, capital, and a cohort beside you.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button>Apply now</Button>
                    <Button variant="outline" className="border-[color:var(--vil-ivory)]/30 bg-transparent text-[color:var(--vil-ivory)] hover:bg-[color:var(--vil-ivory)]/10 hover:text-[color:var(--vil-ivory)]">
                      Download brochure
                    </Button>
                  </div>
                </div>
              </div>

              {/* Gold grid header */}
              <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)]">
                <GridBackground tone="gold" />
                <div className="relative px-8 py-14 text-[color:var(--vil-navy)] md:px-12">
                  <p className="viiv-kicker">Gold · Grid</p>
                  <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
                    Admissions 2026 are open.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--vil-navy)]/80">
                    Limited seats for the Chennai campus. Interviews run on a rolling basis.
                  </p>
                  <div className="mt-7">
                    <Button className="bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)] hover:bg-[color:var(--vil-navy)]/90">
                      Start application <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Dot pattern header */}
                <div className="viiv-dot-bg-light relative overflow-hidden rounded-3xl border border-[color:var(--border)]">
                  <div className="relative px-8 py-12 text-[color:var(--vil-navy)]">
                    <p className="viiv-kicker">Light · Dots</p>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Campus life</h2>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--text-muted)]">
                      Studios, demo days, and a founder community in the heart of Chennai.
                    </p>
                  </div>
                </div>

                {/* Glow gradient header */}
                <div className="viiv-glow-navy relative overflow-hidden rounded-3xl border border-[color:var(--border)]">
                  <div className="relative px-8 py-12 text-[color:var(--vil-ivory)]">
                    <p className="viiv-kicker text-[color:var(--vil-gold)]">Navy · Glow</p>
                    <h2 className="mt-3 font-display text-3xl font-semibold italic tracking-tight">Our story</h2>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--vil-ivory)]/75">
                      Built by operators from Varman Innovation Labs to close the gap between college and company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* OVERLAYS */}
          <Section
            id="overlays"
            title="Overlays"
            description="Dialogs, sheets, drawers, popovers, and menus."
          >
            <div className="flex flex-wrap items-center gap-3">
              {/* Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request a callback</DialogTitle>
                    <DialogDescription>
                      Leave your number and the admissions team will reach out.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-1.5">
                    <Label htmlFor="kit-phone">Phone</Label>
                    <Input id="kit-phone" placeholder="+91 …" />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="ghost">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button>Submit</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Program details</SheetTitle>
                    <SheetDescription>Slide-over panel for supplementary content.</SheetDescription>
                  </SheetHeader>
                  <div className="py-4 text-sm text-[color:var(--text-muted)]">
                    Full-time offline venture-building with an online BBA pathway.
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button>Done</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              {/* Drawer */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Quick enquiry</DrawerTitle>
                    <DrawerDescription>Bottom drawer, great for mobile.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Send enquiry</Button>
                    <DrawerClose asChild>
                      <Button variant="ghost">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              {/* Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-sm font-semibold">Fee breakdown</p>
                  <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                    ₹8L total across 3 years, degree fee included.
                  </p>
                </PopoverContent>
              </Popover>

              {/* Hover Card */}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">Hover me</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm font-semibold">Kalasalingam University</p>
                  <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                    Accredited partner for the online BBA.
                  </p>
                </HoverCardContent>
              </HoverCard>

              {/* Tooltip */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Info">
                    <Bell />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>

              {/* Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Mail /> Contact
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CalendarIcon /> Book a visit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings /> Preferences
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Section>

          {/* FEEDBACK */}
          <Section
            id="feedback"
            title="Feedback"
            description="Progress, loading skeletons, and toasts."
          >
            <Block title="Progress">
              <div className="max-w-md space-y-3">
                <Progress value={progress} />
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => setProgress((p) => Math.max(0, p - 10))}>
                    −10
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setProgress((p) => Math.min(100, p + 10))}>
                    +10
                  </Button>
                </div>
              </div>
            </Block>

            <Block title="Skeleton">
              <div className="flex max-w-md items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </Block>

            <Block title="Toasts">
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" onClick={() => toast("Application saved")}>
                  Default
                </Button>
                <Button variant="outline" onClick={() => toast.success("Interview scheduled")}>
                  Success
                </Button>
                <Button variant="outline" onClick={() => toast.error("Something went wrong")}>
                  Error
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    toast("Callback requested", {
                      description: "The admissions team will reach out shortly.",
                      action: { label: "Undo", onClick: () => toast("Undone") },
                    })
                  }
                >
                  With action
                </Button>
              </div>
            </Block>
          </Section>

          {/* DATA */}
          <Section
            id="data"
            title="Data display"
            description="Avatars, tables, separators, and navigation helpers."
          >
            <Block title="Avatars">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
                    VV
                  </AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]">
                    AB
                  </AvatarFallback>
                </Avatar>
              </div>
            </Block>

            <Block title="Table">
              <div className="rounded-2xl border border-[color:var(--border)] bg-white">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Track</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Venture Builder</TableCell>
                      <TableCell>3 years</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">Open</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Creator + Founder</TableCell>
                      <TableCell>3 years</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">Open</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Operator + Placement</TableCell>
                      <TableCell>2 years</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="outline">Waitlist</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Block>

            <Block title="Separator">
              <div className="max-w-md">
                <div className="flex h-5 items-center gap-4 text-sm text-[color:var(--text-muted)]">
                  <span>Program</span>
                  <Separator orientation="vertical" />
                  <span>Campus</span>
                  <Separator orientation="vertical" />
                  <span>Admissions</span>
                </div>
                <Separator className="my-4" />
                <p className="text-sm text-[color:var(--text-muted)]">Content below a horizontal separator.</p>
              </div>
            </Block>
          </Section>
        </main>
      </div>
    </TooltipProvider>
  );
}
