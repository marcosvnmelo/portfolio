import { VerticalDashedLine } from '../shared/vertical-dashed-line';
import { topBorder } from '../shared/svg-borders';
import { educationData } from '@/constants/education-data';

export function EducationSection() {
  return (
    <section
      className="px-4 py-10 md:px-16"
      style={{ backgroundImage: topBorder }}
    >
      <h2 className="mb-6 text-2xl font-bold">Educação</h2>
      <div className="space-y-10 font-semibold">
        {educationData.map((education, index) => (
          <div
            key={`${education.institution}-${index}`}
            className="relative flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="z-10 shrink-0 p-1">
                <img
                  src={education.logo}
                  alt={education.institution}
                  width={56}
                  height={56}
                  className="rounded object-cover"
                />
              </div>
              {!education.isLast && <VerticalDashedLine />}
            </div>
            <div className="flex-1">
              <div>
                <h3 className="text-xl font-medium">{education.institution}</h3>
                <p className="mb-1 text-lg">{education.degree}</p>
                <p className="text-muted-foreground mb-3 text-sm">
                  {education.period}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
