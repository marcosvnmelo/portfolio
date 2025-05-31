import { experienceData } from '@/constants/experience-data';
import { topBorder } from '../shared/svg-borders';

export function ExperienceSection() {
  return (
    <section
      className="px-4 py-10 md:px-16"
      style={{ backgroundImage: topBorder }}
    >
      <h2 className="mb-6 text-2xl font-bold">Experience</h2>
      <div className="space-y-10 font-semibold">
        {experienceData.map((experience, index) => (
          <div
            key={`${experience.company}-${index}`}
            className="relative flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="z-10 shrink-0 bg-white p-1">
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
                    ? ' · Internship'
                    : ''}
                </h3>
                {experience.employmentType !== 'Internship' && (
                  <p className="text-gray-500">{experience.employmentType}</p>
                )}
              </div>
              <div className="mt-4 space-y-6">
                {experience.roles.map((role, roleIndex) => (
                  <div key={`${role.title}-${roleIndex}`} className="">
                    <div className="mb-2 flex items-start justify-between">
                      <h4 className="text-lg font-medium">{role.title}</h4>
                      <p className="text-sm whitespace-nowrap text-gray-500">
                        {role.period}
                      </p>
                    </div>
                    <p className="mb-3 text-sm text-gray-500">
                      📍 {role.location}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <SkillTag
                          key={`${skill}-${skillIndex}`}
                          skill={skill}
                        />
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

const VerticalDashedLine = () => (
  <div className="flex h-24 w-2 justify-center">
    <svg
      width={4}
      height="100%"
      viewBox="0 0 4 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1={2}
        y1={0}
        x2={2}
        y2={100}
        stroke="#d1d5db"
        strokeWidth={2}
        strokeDasharray="4 4"
      />
    </svg>
  </div>
);

const SkillTag = ({ skill }: { skill: string }) => (
  <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
    {skill}
  </span>
);
