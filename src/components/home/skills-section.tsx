import { skillsData } from '@/constants/skills-data';
import { topBorder } from '../shared/svg-borders';
import { Card } from '../ui/card';

const allSkills = skillsData.flatMap(category => category.skills).sort();

export function SkillsSection() {
  return (
    <section
      className="px-4 py-10 md:px-16"
      style={{ backgroundImage: topBorder }}
    >
      <h2 className="mb-6 text-2xl font-bold">Skills</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {allSkills.map((skill, index) => (
          <Card
            key={`skill-${index}`}
            className="rounded px-4 py-3 font-semibold shadow-xs"
          >
            {skill}
          </Card>
        ))}
      </div>
    </section>
  );
}
