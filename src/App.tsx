import type { ReactNode } from "react";
import {
  Bell,
  CalendarRange,
  CreditCard,
  Heart,
  LayoutGrid,
  Mail,
  Search,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import heroBg from "./assets/hero-bg.jpg";
import galleryPhoneHome from "./assets/gallery-phone-home.png";

const nav = [
  { id: "abstract", label: "Abstract" },
  { id: "objectives", label: "Objectives" },
  { id: "technologies", label: "Technologies" },
  { id: "results", label: "Results" },
  { id: "demo", label: "Demo" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const objectives = [
  {
    icon: Search,
    title: "Discover services",
    text: "Browse halls, dresses, décor, makeup artists, and other wedding essentials from one elegant interface.",
  },
  {
    icon: Heart,
    title: "Save favorites",
    text: "Let users build a personal shortlist of preferred venues and services before making a final decision.",
  },
  {
    icon: CalendarRange,
    title: "Book with confidence",
    text: "Support date selection, booking details, and clear reservation steps for a smoother wedding planning journey.",
  },
  {
    icon: CreditCard,
    title: "Payment flow",
    text: "Provide a clean payment and confirmation experience for service reservations and booking completion.",
  },
  {
    icon: Bell,
    title: "Notifications",
    text: "Keep users updated with booking status, reminders, and important app alerts in real time.",
  },
  {
    icon: Wallet,
    title: "Wallet management",
    text: "Track balances, service costs, and spending information in a dedicated wallet experience.",
  },
];

const serviceCategories = [
  "Wedding halls",
  "Bridal dresses",
  "Décor & flowers",
  "Makeup artists",
  "Favorites",
  "Wallet & payments",
  "Booking management",
  "Notifications",
];

const results = [
  {
    label: "Complete prototype",
    value: "Mobile app flow",
    text: "The project delivers a clear application journey from onboarding and authentication to browsing, booking, and payment confirmation.",
  },
  {
    label: "Organized services",
    value: "Wedding categories",
    text: "Wedding halls, bridal dresses, décor, makeup, favorites, wallet, notifications, and booking tools are presented in one structure.",
  },
  {
    label: "Ready stack",
    value: "Flutter + Firebase",
    text: "The implementation direction is prepared around Flutter, Firebase services, and JavaScript Firebase Functions.",
  },
];

const techGroups = [
  {
    category: "Design",
    items: ["Figma prototyping", "Elegant UI system", "Mobile-first flows"],
  },
  {
    category: "Frontend",
    items: ["Flutter", "Reusable widgets", "Responsive UI patterns"],
  },
  {
    category: "Backend",
    items: ["Firebase Authentication", "Cloud Firestore", "Firebase Storage"],
  },
  {
    category: "Cloud Functions",
    items: ["JavaScript Firebase Functions", "Booking logic", "Payment handling"],
  },
];

const demoHighlights = [
  {
    icon: Search,
    title: "Home Dashboard",
    text: "The demo preview showcases a clean home screen with profile information, search, featured content, and quick access to core wedding services.",
  },
  {
    icon: LayoutGrid,
    title: "Category Explorer",
    text: "Users can browse key categories such as venues, photography, catering, makeup, décor, dresses, music, and transport through a neat icon-based layout.",
  },
  {
    icon: Heart,
    title: "Favorites & Booking Flow",
    text: "The application concept supports saving preferred services, comparing options, and moving toward reservation and payment steps.",
  },
  {
    icon: CreditCard,
    title: "Payment-ready Experience",
    text: "The demo section connects the visual walkthrough with the planned payment gateway, wallet data, and booking confirmation logic.",
  },
];

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-primary md:text-5xl">
          {title}
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-[color:var(--gold)]" />
        <div className="mt-10 space-y-5 text-left text-base leading-relaxed text-foreground/75 md:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-body)] text-foreground">
      <header className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4 py-4">
        <nav className="flex items-center gap-1 overflow-x-auto rounded-full border  px-3 py-2 shadow-sm backdrop-blur-md md:gap-2 md:px-6">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/10 md:px-4 md:text-sm"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <section
        className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/25 to-white/70" />
        <div className="relative z-10 px-6 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-primary/80">
            University of Bahrain · Senior Project
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-light leading-[1.05] text-primary md:text-7xl lg:text-8xl">
            Farhatna
            <br />
            <span className="italic text-[color:var(--gold)]">Mobile Application</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-foreground/75 md:text-lg">
            An elegant digital experience that helps users discover wedding services, compare options,
            save favorites, manage bookings, and complete payments in one seamless app.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#abstract"
              className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Explore Project
            </a>
            <a
              href="#demo"
              className="rounded-full border border-primary/20 bg-white/65 px-8 py-3 text-sm font-medium text-primary backdrop-blur transition hover:bg-white"
            >
              View Demo
            </a>
          </div>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/60">
            {serviceCategories.map((item) => (
              <span key={item} className="rounded-full border border-primary/10 bg-white/55 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section id="abstract" eyebrow="01 — Abstract" title="Abstract">
        <p>
          This project presents a wedding planner mobile application concept designed to simplify the planning
          process for users by bringing wedding services together in one place. Instead of switching between
          multiple vendors, social accounts, and scattered notes, users can browse, compare, save, and book
          everything from a single experience.
        </p>
        <p>
          Based on the screens shown in the provided project board, the application focuses on the full user
          journey: welcoming the user, authentication, service discovery, favorites, wallet management,
          notifications, and a complete booking and payment flow.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Experience type", value: "Mobile-first wedding planning" },
            { label: "Core audience", value: "Brides, couples, and event organizers" },
            { label: "Main goal", value: "Organize and book wedding services easily" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-primary/10 bg-card p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{item.label}</p>
              <p className="mt-3 text-lg font-medium text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="objectives" eyebrow="02 — Objectives" title="Objectives">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {objectives.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-primary/10 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="technologies" eyebrow="03 — Technologies" title="Technologies">
        <p className="text-center">
          The project stack is organized around Flutter for the mobile interface, Firebase for backend services,
          and JavaScript Firebase Functions for serverless booking, payment, and notification logic.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {techGroups.map((group) => (
            <div key={group.category} className="rounded-2xl border border-primary/10 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <LayoutGrid className="h-5 w-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-primary">{group.category}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/75">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

       
      <Section id="results" eyebrow="04 — Results" title="Results">
        <div className="rounded-[2rem] border border-primary/10 bg-[#f4f1ed] p-4 shadow-sm md:p-6 xl:p-8">
          <div className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)] xl:items-start">
            <div className="xl:sticky xl:top-28">
              <div className="mx-auto w-full max-w-[320px]">
                <div className="rounded-[3.2rem] bg-[#111111] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
                  <div className="mx-auto mb-3 h-7 w-[8.5rem] rounded-b-[1.25rem] bg-[#111111]" />
                  <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#f7f5f2]">
                    <div className="no-scrollbar h-[660px] overflow-y-auto scroll-smooth">
                      <img
                        src={galleryPhoneHome}
                        alt="Farhatna home screen preview"
                        className="block w-full"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Scroll inside the phone to preview the first-photo design.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--gold)]">Demo Concept</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-primary md:text-4xl">
                  Interactive mobile app demo preview
                </h3>
                <p className="mt-4 text-base leading-8 text-foreground/70">
                  This demo section presents the Farhatna mobile interface as a realistic phone walkthrough, helping
                  visitors understand how users move through discovery, favorites, booking, wallet, and payment features.
                </p>
              </div>

              {demoHighlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm md:p-8">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl text-primary md:text-4xl">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/70 md:text-lg">{text}</p>
                </div>
              ))}

              <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm md:p-8">
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { label: "Demo style", value: "Sticky phone preview" },
                    { label: "App focus", value: "Wedding planning flow" },
                    { label: "Interaction", value: "Scrollable screen inside phone" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-primary/10 bg-[#faf8f6] p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{item.label}</p>
                      <p className="mt-3 text-lg font-medium text-primary">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="demo" eyebrow="05 — Demo" title="Demo">
        <p className="text-center text-base leading-relaxed text-foreground/75 md:text-lg mb-12">
          Watch the Farhatna mobile application in action across three key demo videos showcasing the user experience flow.
        </p>
        <div className="grid gap-8 grid-cols-1">
          {[
            {
              title: "Home Dashboard & Discovery",
              description: "Explore the home screen, user profile, and service discovery interface.",
            },
            {
              title: "Favorites & Booking Flow",
              description: "Save favorite services, compare options, and initiate booking reservations.",
            },
            {
              title: "Wallet & Payment Experience",
              description: "Manage wallet balance, review costs, and complete secure payments.",
            },
          ].map((item, index) => (
            <div key={index} className="rounded-2xl border border-primary/10 bg-card overflow-hidden shadow-sm transition hover:shadow-md">
              <div className="aspect-video bg-black/50 flex items-center justify-center">
                <video
  controls
  preload="metadata"
  className="w-full h-full object-cover"
>
  <source src="/videos/demo-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-primary">{item.title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="team" eyebrow="06 — Team" title="Team">
        <p className="text-center">
          A senior project presented as a polished mobile application concept for a modern wedding planning
          experience.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Ghufran Mohamed Abdulnabi",
              id: "202208563",
              major: "Computer Science",
              email: "202208563@stu.uob.edu.bh",
            },
             {
              name: "Mohsen Maitham Hameed",
              id: "202207021",
              major: "Computer Science - Cloud Computing",
              email: "202207021@stu.uob.edu.bh",
            },
            {
              name: "Maitham Saleh Ebrahim",
              id: "202207620",
              major: "Computer Science - Cloud Computing",
              email: "202207620@stu.uob.edu.bh",
            },
          ].map((member) => (
          <div
             key={member.id}
             className={`rounded-2xl border border-[color:var(--gold)]/25 bg-card p-6 text-center shadow-sm ${
             member.id === "202207620" ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc((100%-1.5rem)/2)]" : ""
               }`} >
                <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-[color:var(--gold)]/15 font-[family-name:var(--font-display)] text-2xl text-[color:var(--gold)]">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-primary">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.major}</p>
              <p className="mt-1 text-xs text-muted-foreground">ID: {member.id}</p>
              <div className="mt-4 flex justify-center gap-3 text-sm">
                <a className="inline-flex items-center gap-1 text-primary hover:text-[color:var(--gold)]" href={`mailto:${member.email}`}>
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="07 — Contact" title="Contact">
        <p className="text-center">
          Interested in this wedding planner application concept or want to continue developing it into a working
          product? Get in touch with the project team.
        </p>
        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-[color:var(--gold)]/25 bg-card p-10 text-center shadow-sm">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--gold)]/15 text-[color:var(--gold)]">
            <Mail className="h-7 w-7" />
          </div>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-primary">Project Email</h3>
          <a href="mailto:info@Farhatna.com" className="mt-2 inline-block text-primary hover:text-[color:var(--gold)]">
            info@Farhatna.com
          </a>
          <p className="mt-3 text-xs text-muted-foreground">We typically respond within 24–48 hours</p>
        </div>
      </Section>

      <footer className="border-t border-border/50 bg-card py-10 text-center text-sm text-muted-foreground">
        <p className="font-[family-name:var(--font-display)] text-lg italic text-[color:var(--gold)]">
          Farhatna Mobile Application
        </p>
        <p className="mt-1">© {new Date().getFullYear()} University of Bahrain · Senior Project Showcase</p>
      </footer>
    </div>
  );
}
