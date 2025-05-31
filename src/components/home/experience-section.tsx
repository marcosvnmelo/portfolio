import { experienceData } from '@/constants/experience-data';
import { topBorder } from '../shared/svg-borders';
import { Badge } from '../ui/badge';
import { VerticalDashedLine } from '../shared/vertical-dashed-line';

export function ExperienceSection() {
  return (
    <section
      className="px-4 py-10 md:px-16"
      style={{ backgroundImage: topBorder }}
    >
      <h2 className="mb-6 text-2xl font-bold">Experiência</h2>
      <div className="space-y-10 font-semibold">
        {experienceData.map((experience, index) => (
          <div
            key={`${experience.company}-${index}`}
            className="relative flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="z-10 shrink-0 p-1">
                <img
                  src={experience.logo}
                  alt={experience.altText}
                  width={56}
                  height={56}
                  className="rounded border object-cover"
                />
              </div>
              {!experience.isLast && <VerticalDashedLine />}
            </div>
            <div className="flex-1">
              <div>
                <h3 className="text-xl font-medium">
                  {experience.company}
                  {experience.employmentType === 'Internship'
                    ? ' · Estágio'
                    : ''}
                </h3>
                {experience.employmentType !== 'Internship' && (
                  <p className="text-muted-foreground">
                    {experience.employmentType === 'full-time'
                      ? 'Tempo integral'
                      : experience.employmentType === 'part-time'
                      ? 'Meio período'
                      : experience.employmentType}
                  </p>
                )}
              </div>
              <div className="mt-4 space-y-6">
                {experience.roles.map((role, roleIndex) => (
                  <div key={`${role.title}-${roleIndex}`}>
                    <div className="mb-2 flex items-start justify-between">
                      <h4 className="text-lg font-medium">{role.title}</h4>
                      <p className="text-muted-foreground text-sm whitespace-nowrap">
                        {role.period}
                      </p>
                    </div>
                    <p className="text-muted-foreground mb-3 text-sm">
                      📍 {role.location}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <Badge
                          variant="secondary"
                          className="rounded py-1"
                          key={`${skill}-${skillIndex}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
