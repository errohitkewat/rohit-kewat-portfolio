import { useEffect, useState } from "react";
import { Home, FolderGit2, Briefcase, Mail, Github, Linkedin, Sun, Moon } from "lucide-react";
import { Dock, DockIcon } from "./Dock";
import { Tip } from "./Tip";
import resume from "../data/resume";

const nav = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Experience", href: "#work", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: Mail },
];
const social = [
  { label: "GitHub", href: resume.githubUrl, icon: Github },
  { label: "LinkedIn", href: resume.linkedinUrl, icon: Linkedin },
];
const icon = "size-full cursor-pointer rounded-3xl border border-border bg-background p-0 text-muted-foreground backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground";
const Sep = () => <div className="m-auto h-2/3 w-px bg-border" />;

export default function Navbar() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  const link = ({ label, href, icon: I }, ext) => (
    <Tip key={label} label={label}>
      <a href={href} {...(ext && { target: "_blank", rel: "noopener noreferrer" })} aria-label={label}>
        <DockIcon className={icon}><I className="size-full overflow-hidden rounded-sm object-contain p-0.5" /></DockIcon>
      </a>
    </Tip>
  );
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="pointer-events-auto relative z-50 mx-auto flex h-14 w-fit gap-2 border bg-card/90 p-2 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl">
        {nav.map((n) => link(n))}
        <Sep />
        {social.map((s) => link(s, true))}
        <Sep />
        <Tip label="Theme">
          <button onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
            <DockIcon className={icon}>{dark ? <Sun className="size-full p-0.5" /> : <Moon className="size-full p-0.5" />}</DockIcon>
          </button>
        </Tip>
      </Dock>
    </div>
  );
}
