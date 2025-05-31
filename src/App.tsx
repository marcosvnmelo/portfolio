import { HelloSection } from './components/home/hello-section';
import { AboutMeSection } from './components/home/about-me-section';
import { allBorders } from './components/shared/svg-borders';
import { ExperienceSection } from './components/home/experience-section';
import { EducationSection } from './components/home/education-section';
import { SkillsSection } from './components/home/skills-section';

function App() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mx-5 min-h-screen max-w-4xl lg:mx-auto">
        <div
          className="mt-10 py-12 md:py-10"
          style={{
            backgroundImage: allBorders,
          }}
        >
          <HelloSection />
          <AboutMeSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}

export default App;
