import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 18px" }}>
        <Header />

        <main style={{ paddingBottom: 40 }}>
          <Section id="education" title="Education">
            <Education />
          </Section>

          <Section id="skills" title="Skills">
            <Skills />
          </Section>

          <Section id="projects" title="Projects">
            <Projects />
          </Section>

          <Section id="experience" title="Experience">
            <Experience />
          </Section>
        </main>

        <footer style={{ padding: "22px 0 36px", opacity: 0.7, fontSize: 13 }}>
          Built with React + Vite · Hosted on Vercel
        </footer>
      </div>
    </div>
  );
}
