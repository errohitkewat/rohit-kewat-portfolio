import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronRight, X } from "lucide-react";
import * as Acc from "@radix-ui/react-accordion";
import BlurFade from "./components/BlurFade";
import FlickeringGrid from "./components/FlickeringGrid";
import Navbar from "./components/Navbar";
import { TipProvider } from "./components/Tip";
import { ReactLight } from "./components/icons/reactLight";
import { NextjsIconDark } from "./components/icons/nextjsIconDark";
import { Typescript } from "./components/icons/typescript";
import { Nodejs } from "./components/icons/nodejs";
import { Postgresql } from "./components/icons/postgresql";
import { Docker } from "./components/icons/docker";
import resume from "./data/resume";
import projectsData from "./data/projects";
import avatar from "./assets/rohit-avatar.jpg";
import avatarFull from "./assets/rohit-profile.png";
import freelancerLogo from "./assets/logos/freelancer.png";
import tfpLogo from "./assets/logos/tfp.png";
import lionLogo from "./assets/logos/sheryians-lion.png";
import aksLogo from "./assets/logos/aks.png";
import planoraImg from "./assets/projects/productivity-app-image.png";

const D = 0.04;
const icons = { React: ReactLight, "Next.js": NextjsIconDark, TypeScript: Typescript, "Node.js": Nodejs, PostgreSQL: Postgresql };
const skills = [...new Set(resume.skills.flatMap((g) => g.items))].filter((s) => !["VS Code", "Claude Code"].includes(s));
skills.push("Docker"); icons.Docker = Docker;

const projects = [
  ...projectsData.filter((p) => p.slug !== "skymart").map((p) => ({ title: p.title, dates: p.year, description: p.description, tags: p.technologies.slice(0, 4), image: p.imageUrl, href: p.live })),
  ...[[resume.projects[1], planoraImg]].map(([p, image]) => ({
    title: p.name, dates: "2026", description: p.description, tags: p.stack.split(",").map((s) => s.trim()), image, href: p.link,
  })),
];
const expLogos = [
  { src: freelancerLogo, white: true },
  { src: tfpLogo, white: true },
  { src: lionLogo, lion: true },
];
const Logo = ({ src, alt, white, lion }) => (
  <div className={`grid size-8 flex-none place-items-center overflow-hidden rounded-full border p-1 shadow ring-2 ring-border md:size-10 ${white ? "bg-white" : "bg-muted"}`}>
    <img src={src} alt={alt} className={`size-full object-contain ${lion ? "brightness-0 dark:invert" : ""}`} />
  </div>
);

function Avatar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="View full photo" className="cursor-zoom-in rounded-full transition-transform hover:scale-105">
        <Avatar />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] grid cursor-zoom-out place-items-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={avatarFull} alt={resume.name}
              className="max-h-[85vh] max-w-full rounded-2xl bg-muted object-contain shadow-2xl"
            />
            <button className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-background text-foreground" aria-label="Close"><X className="size-5" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
const Badge = ({ children }) => (
  <span className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">{children}</span>
);

export default function App() {
  return (
    <TipProvider>
      <div className="relative min-h-screen bg-background antialiased">
        <div className="absolute inset-x-0 top-0 z-0 h-[100px] overflow-hidden">
          <FlickeringGrid className="h-full w-full" squareSize={2} gridGap={2}
            style={{ maskImage: "linear-gradient(to bottom, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-24 sm:py-24">
          <main className="flex min-h-dvh flex-col gap-14">
            <section id="hero" className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
              <div className="order-2 flex flex-col gap-2 md:order-1">
                <BlurFade delay={D} yOffset={8}>
                  <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">Hi, I'm {resume.name.split(" ")[0]} 👋</h1>
                </BlurFade>
                <BlurFade delay={D}>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl">
                    {resume.title} building clean, fast websites and web apps — from idea to live URL.
                  </p>
                </BlurFade>
              </div>
              <BlurFade delay={D} className="order-1 md:order-2">
                <img src={avatar} alt={resume.name} className="aspect-square size-24 rounded-full border bg-muted object-cover object-center shadow-lg ring-4 ring-muted md:size-32" />
              </BlurFade>
            </section>

            <section id="about" className="flex flex-col gap-y-4">
              <BlurFade delay={D * 3}><h2 className="text-xl font-bold">About</h2></BlurFade>
              <BlurFade delay={D * 4}><p className="text-pretty leading-relaxed text-muted-foreground">{resume.summary}</p></BlurFade>
            </section>

            <section id="work" className="flex flex-col gap-y-6">
              <BlurFade delay={D * 5}><h2 className="text-xl font-bold">Work Experience</h2></BlurFade>
              <BlurFade delay={D * 6}>
                <Acc.Root type="single" collapsible className="grid w-full gap-6">
                  {resume.experience.map((w, i) => (
                    <Acc.Item key={i} value={String(i)} className="grid gap-2">
                      <Acc.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-x-3 text-left">
                        <div className="flex min-w-0 flex-1 items-center gap-x-3">
                          <Logo {...expLogos[i]} alt={w.company} />
                          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                            <div className="flex items-center gap-2 font-semibold leading-none">
                              {w.company}
                              <ChevronRight className="size-3.5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-100" />
                            </div>
                            <div className="text-sm text-muted-foreground">{w.role}</div>
                          </div>
                        </div>
                        <div className="flex-none text-right text-xs tabular-nums text-muted-foreground">{w.period}</div>
                      </Acc.Trigger>
                      <Acc.Content className="overflow-hidden pl-11 text-xs text-muted-foreground data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 sm:text-sm md:pl-13">
                        {w.points[0]}
                      </Acc.Content>
                    </Acc.Item>
                  ))}
                </Acc.Root>
              </BlurFade>
            </section>

            <section id="education" className="flex flex-col gap-y-6">
              <BlurFade delay={D * 7}><h2 className="text-xl font-bold">Education</h2></BlurFade>
              {resume.education.map((e) => (
                <BlurFade key={e.school} delay={D * 8} className="flex items-center justify-between gap-x-3">
                  <div className="flex items-center gap-x-3">
                    <Logo src={aksLogo} alt={e.school} white />
                    <div className="flex flex-col gap-0.5">
                      <div className="font-semibold leading-none">{e.school}</div>
                      <div className="text-sm text-muted-foreground">{e.degree}</div>
                    </div>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground">{e.period}</div>
                </BlurFade>
              ))}
            </section>

            <section id="skills" className="flex flex-col gap-y-4">
              <BlurFade delay={D * 9}><h2 className="text-xl font-bold">Skills</h2></BlurFade>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => {
                  const I = icons[s];
                  return (
                    <BlurFade key={s} delay={D * 10 + i * 0.05}>
                      <div className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20">
                        {I && <I className="size-4 overflow-hidden rounded object-contain" />}
                        <span className="text-sm font-medium">{s}</span>
                      </div>
                    </BlurFade>
                  );
                })}
              </div>
            </section>

            <section id="projects">
              <BlurFade delay={D * 11}>
                <div className="space-y-12">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <Badge>My Projects</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl">
                      Real products I've designed, built and deployed — from startup sites to dashboards.
                    </p>
                  </div>
                  <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
                    {projects.map((p, i) => (
                      <BlurFade key={p.title} delay={D * 12 + i * 0.05}>
                        <a href={p.href} target="_blank" rel="noopener noreferrer"
                          className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:ring-2 hover:ring-muted">
                          <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                          <div className="flex flex-1 flex-col gap-2 px-2 py-4">
                            <div className="flex items-center justify-between px-2">
                              <h3 className="font-semibold">{p.title}</h3>
                              <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                            </div>
                            <time className="px-2 font-sans text-xs">{p.dates}</time>
                            <p className="px-2 text-pretty text-xs text-muted-foreground">{p.description}</p>
                            <div className="mt-auto flex flex-wrap gap-1 px-2 pt-2">
                              {p.tags.map((t) => <span key={t} className="rounded-md border bg-muted px-2 py-0.5 text-[10px] font-medium">{t}</span>)}
                            </div>
                          </div>
                        </a>
                      </BlurFade>
                    ))}
                  </div>
                </div>
              </BlurFade>
            </section>

            <section id="contact">
              <BlurFade delay={D * 16}>
                <div className="relative rounded-xl border p-10">
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
                    <span className="text-sm font-medium text-background">Contact</span>
                  </div>
                  <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-xl">
                    <FlickeringGrid className="h-full w-full" squareSize={2} gridGap={2}
                      style={{ maskImage: "linear-gradient(to bottom, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent)" }} />
                  </div>
                  <div className="relative flex flex-col items-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                    <p className="mx-auto max-w-lg text-balance text-muted-foreground">
                      Want to chat? Just shoot me a dm{" "}
                      <a href={resume.linkedinUrl} target="_blank" rel="noopener noreferrer" className="rounded-sm text-blue-500 underline-offset-4 hover:underline">on LinkedIn</a>{" "}
                      or email me at{" "}
                      <a href={`mailto:${resume.email}`} className="rounded-sm text-blue-500 underline-offset-4 hover:underline">{resume.email}</a>{" "}
                      and I'll respond whenever I can. I will ignore all soliciting.
                    </p>
                  </div>
                </div>
              </BlurFade>
            </section>
          </main>
        </div>
        <Navbar />
      </div>
    </TipProvider>
  );
}
