import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import { useSectionPresentation } from "./hooks/useSectionPresentation";
import {
  contact,
  capabilities,
  complementaryEducation,
  education,
  experience,
  experienceHighlights,
  experienceSummary,
  footerLinks,
  footerNote,
  hero,
  navigation,
  skills,
  skillsSummary,
} from "./data/profile";

const SECTION_IDS = navigation.map((item) => item.id);

export default function App() {
  const activeSection = useSectionPresentation(SECTION_IDS);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100">
      <Header navigation={navigation} activeSection={activeSection} />

      <main className="relative">
        <section
          id="perfil"
          className="snap-start snap-always h-[100svh] w-full overflow-y-auto"
        >
          <div className="mx-auto flex min-h-full w-full max-w-[1280px] flex-col justify-center px-4 pb-8 pt-[calc(var(--header-offset)+0.75rem)] sm:px-6 lg:px-8">
            <HeroSection hero={hero} capabilities={capabilities} />
          </div>
        </section>
        <ExperienceSection
          summary={experienceSummary}
          items={experience}
          highlights={experienceHighlights}
        />
        <EducationSection education={education} complementaryEducation={complementaryEducation} />
        <SkillsSection summary={skillsSummary} items={skills} />
        <ContactSection contact={contact} footerNote={footerNote} footerLinks={footerLinks} />
      </main>
    </div>
  );
}
