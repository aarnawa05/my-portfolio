import { resume } from "./content/resume";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";

function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="nav">
          <div className="brand">
            <div className="brandMark" />
            <div className="brandText">
              <strong>{resume.name}</strong>
              <span>Software Engineer · React / Systems</span>
            </div>
          </div>

          <div className="navLinks">
            {resume.links.map((l) => (
              <a key={l.href} className="chipLink" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
            <a className="chipLink" href="#projects">Projects</a>
            <a className="chipLink" href="#experience">Experience</a>
            <a className="chipLink" href="#skills">Skills</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="card heroMain">
          <div className="kicker">Available for Summer 2026 internships</div>


          <h1 className="h1">
            Building fast, reliable software — from{" "}
            <span style={{ color: "rgba(255,255,255,0.98)" }}>React</span>{" "}
            to{" "}
            <span style={{ color: "rgba(255,255,255,0.98)" }}>systems</span>.
          </h1>

          <p className="sub">
            I’m {resume.name}, a CS student focused on full-stack and performance.
            I like shipping clean UIs, designing APIs that scale, and writing code that doesn’t break under pressure.
          </p>

          <div className="actions">
            <a className="btn btnPrimary" href={`mailto:${resume.email}`}>Email me
            </a>
            <a className="btn" href="#projects">View projects</a>
            <a className="btn" href="#experience">Experience</a>
          </div>

          <hr className="hrSoft" />
        </div>

        <div className="card heroSide">
          <div className="metaRow">

            <div className="itemCard">
              <div className="metaLabel">CONTACT</div>
              <div className="metaValue">
                <div style={{ fontSize: 15, marginBottom: 6 }}>
                  817-630-4442
                </div>
                <a
                  href="mailto:aarnawakoirala@gmail.com"
                  className="contactLink"
                >
                  aarnawakoirala@gmail.com
                </a>
              </div>
            </div>

            <div className="itemCard">
              <div className="metaLabel">FOCUS</div>
              <div className="metaValue">
                Full-stack, performance, and clean product UX.
              </div>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">APIs</span>
                <span className="tag">C / Systems</span>
              </div>
            </div>

            <div className="itemCard">
              <div className="metaLabel">QUICK LINKS</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
                <a className="btn" href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="btn" href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
}

function Section(props: { id: string; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section id={props.id} className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">{props.title}</h2>
          {props.hint ? <div className="sectionHint">{props.hint}</div> : null}
        </div>
        {props.children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <TopBar />
      <Hero />

      <Section id="education" title="Education" hint="The essentials, recruiter-friendly.">
        <Education />
      </Section>

      <Section id="skills" title="Skills" hint="Stack at a glance.">
        <Skills />
      </Section>

      <Section id="projects" title="Projects" hint="Proof of work — impact & engineering depth.">
        <Projects />
      </Section>

      <Section id="experience" title="Experience" hint="Ownership, execution, results.">
        <Experience />
      </Section>

      { }
      <div style={{ height: 36 }} />
    </>
  );
}
