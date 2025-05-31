import { RippleButton } from '../animate-ui/buttons/ripple';
import { LinkedinIcon } from './linkedin-icon';
import profileImage from '/profile-image.jpg';

export function HelloSection() {
  return (
    <header className="mb-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between md:space-x-5">
        <div className="mb-8 md:mb-0 md:max-w-xl">
          <h2 className="mb-3 text-4xl font-medium">Hello! I am Marcos Melo</h2>
          <p className="mb-6 text-lg font-medium">
            Software Engineer | Backend | Typescript | Frontend | React | Vue |
            Fullstack
          </p>
          <a
            href="https://linkedin.com/in/marcos-melo-178351209"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RippleButton className="rounded text-base">
              <LinkedinIcon />
              Connect with me on LinkedIn
            </RippleButton>
          </a>
        </div>
        <div className="mx-auto h-40 w-40 shrink-0 md:mx-0 md:h-56 md:w-56">
          <img
            src={profileImage}
            alt="Marcos Melo"
            loading="eager"
            className="h-full w-full rounded-md border-4 object-cover"
          />
        </div>
      </div>
    </header>
  );
}
