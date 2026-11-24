import { ArrowUpRight, ChevronRight, Briefcase, GraduationCap, Mail } from "lucide-react";
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
import forgeImg from "./assets/projects/forge-site-image.png";
import planoraImg from "./assets/projects/productivity-app-image.png";

const D = 0.04;
const icons = { React: ReactLight, "Next.js": NextjsIconDark, TypeScript: Typescript, "Node.js": Nodejs, PostgreSQL: Postgresql };
const skills = [...new Set(resume.skills.flatMap((g) => g.items))].filter((s) => !["VS Code", "Claude Code"].includes(s));
skills.push("Docker"); icons.Docker = Docker;

const projects = [
  ...projectsData.map((p) => ({ title: p.title, dates: p.year, description: p.description, tags: p.technologies.slice(0, 4), image: p.imageUrl, href: p.live })),
  ...[[resume.projects[0], forgeImg], [resume.projects[1], planoraImg]].map(([p, image]) => ({
    title: p.name, dates: "2026", description: p.description, tags: p.stack.split(",").map((s) => s.trim()), image, href: p.link,
  })),
];
const Logo = ({ children }) => (
  <div className="grid size-8 flex-none place-items-center rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-10">{children}</div>
);
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
                          <Logo><Briefcase className="size-full text-muted-foreground" /></Logo>
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
                    <Logo><GraduationCap className="size-full text-muted-foreground" /></Logo>
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
                <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
                  <Badge>Contact</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg lg:text-xl">
                    Want to chat? Email me at{" "}
                    <a href={`mailto:${resume.email}`} className="inline-flex items-center gap-1 text-blue-500 hover:underline"><Mail className="size-4" />{resume.email}</a>{" "}
                    or reach out on{" "}
                    <a href={resume.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>.
                  </p>
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
