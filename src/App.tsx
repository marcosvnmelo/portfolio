import profileImage from '/profile-image.jpg';
import compayZImage from '/compayz-logo.jpg';
import lisbomImage from '/lisbom-logo.jpg';
import unoparImage from '/unopar-logo.jpg';
import ifImage from '/if-logo.jpg';
import './index.css';
import { HexagonBackground } from './components/animate-ui/backgrounds/hexagon';
import { useLayoutEffect } from 'react';

function App() {
  useLayoutEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }, []);
  return (
    <HexagonBackground>
      <div className="relative min-h-screen bg-[#0a0a0a] text-white">
        <header className="sticky top-0 z-30 hidden border-b border-white/5 bg-black/30 backdrop-blur-md">
          <div className="mx-auto flex max-w-4xl items-center justify-center px-6 py-3"></div>
        </header>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-4xl -translate-x-1/2 transform border-r border-l border-white/5" />
          <section
            className="relative pt-16 pb-10"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="mx-auto max-w-4xl px-6">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <div
                    style={{
                      opacity: 1,
                      filter: 'blur(0px)',
                      transform: 'none',
                    }}
                  >
                    <div
                      className="relative mx-auto h-64 w-64 md:h-80 md:w-80"
                      style={{ opacity: 1, transform: 'none' }}
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-2xl" />
                      <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#111] p-4">
                        <img
                          alt="Marcos Melo"
                          width={300}
                          height={300}
                          decoding="async"
                          data-nimg={1}
                          className="h-full w-full rounded-lg object-cover"
                          style={{ color: 'transparent' }}
                          src={profileImage}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div
                    style={{
                      opacity: 1,
                      filter: 'blur(0px)',
                      transform: 'none',
                    }}
                  >
                    <div style={{ opacity: 1, transform: 'none' }}>
                      <div className="mb-4 flex items-center">
                        <span className="mr-2 text-yellow-400">👋</span>
                        <span className="text-gray-400">Hello, I Am</span>
                      </div>
                      <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                        Marcos Melo
                      </h1>
                      <p className="mb-6 text-lg text-gray-400">
                        Software Engineer | Backend | Typescript | Frontend |
                        React | Vue | Fullstack
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://linkedin.com/in/marcos-melo-178351209"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 rounded-lg border border-white/10 bg-black px-6 py-3 transition-all duration-300 hover:border-white/20"
                          tabIndex={0}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>
                          <span>LINKEDIN</span>
                        </a>
                        <button
                          className="flex items-center space-x-2 rounded-lg border border-white/10 bg-black px-6 py-3 transition-all duration-300 hover:border-white/20"
                          tabIndex={0}
                        >
                          <span className="text-lg">✨</span>
                          <span>ABOUT ME</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="in-view border-t border-white/5 py-16"
            data-scroll="true"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="mx-auto max-w-4xl px-6">
              <div className="grid grid-cols-3 gap-8">
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="text-center"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <div
                      className="mb-2 text-3xl font-bold md:text-4xl"
                      style={{ transform: 'scale(0.995921)' }}
                    >
                      592
                    </div>
                    <div className="text-gray-400">Connections</div>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="text-center"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <div
                      className="mb-2 text-3xl font-bold md:text-4xl"
                      style={{ transform: 'none' }}
                    >
                      5+
                    </div>
                    <div className="text-gray-400">Years of Experience</div>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="text-center"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <div
                      className="mb-2 text-3xl font-bold md:text-4xl"
                      style={{ transform: 'none' }}
                    >
                      20+
                    </div>
                    <div className="text-gray-400">Skills</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="in-view border-t border-white/5 py-16"
            data-scroll="true"
          >
            <div className="mx-auto max-w-4xl px-6">
              <div
                className="mb-10 flex items-center"
                style={{ opacity: 1, transform: 'none' }}
              >
                <div className="mr-3 text-2xl">📁</div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  My experience
                </h2>
              </div>
              <p className="mb-12 max-w-2xl text-gray-400">
                Navigating diverse environments with adaptability and expertise
                for holistic solutions.
              </p>
              <div className="space-y-8">
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="overflow-hidden rounded-lg border border-white/5 bg-[#111] transition-all duration-300 hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <div className="flex flex-col justify-between p-6 md:flex-row md:items-center">
                      <div className="mb-4 flex items-center md:mb-0">
                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black">
                          <img
                            alt="Lisbom · Internship"
                            loading="lazy"
                            width={30}
                            height={30}
                            decoding="async"
                            data-nimg={1}
                            className="h-6 min-h-6 w-6 min-w-6"
                            style={{ color: 'transparent' }}
                            src={lisbomImage}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">
                            Lisbom · Internship
                          </h3>
                          <p className="text-sm text-gray-500">
                            lisbom·internship{/* */}.com
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-400">
                        2023{/* */}-{/* */}Present
                      </div>
                    </div>
                    <div className="border-t border-white/5 bg-[#0a0a0a] p-6">
                      <h4 className="mb-2 text-lg font-medium">
                        Full Stack Developer
                      </h4>
                      <p className="text-gray-400">
                        Provided leadership and expertise in the role,
                        collaborating with teams to deliver exceptional results
                        and drive business objectives.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="overflow-hidden rounded-lg border border-white/5 bg-[#111] transition-all duration-300 hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <div className="flex flex-col justify-between p-6 md:flex-row md:items-center">
                      <div className="mb-4 flex items-center md:mb-0">
                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black">
                          <img
                            alt="CompayZ "
                            loading="lazy"
                            width={30}
                            height={30}
                            decoding="async"
                            data-nimg={1}
                            className="h-6 min-h-6 w-6 min-w-6"
                            style={{ color: 'transparent' }}
                            src={compayZImage}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">CompayZ</h3>
                          <p className="text-sm text-gray-500">
                            compayz{/* */}.com
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-400">
                        2021{/* */}-{/* */}2023
                      </div>
                    </div>
                    <div className="border-t border-white/5 bg-[#0a0a0a] p-6">
                      <h4 className="mb-2 text-lg font-medium">
                        Full Stack Developer
                      </h4>
                      <p className="text-gray-400">
                        Provided leadership and expertise in the role,
                        collaborating with teams to deliver exceptional results
                        and drive business objectives.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="overflow-hidden rounded-lg border border-white/5 bg-[#111] transition-all duration-300 hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <div className="flex flex-col justify-between p-6 md:flex-row md:items-center">
                      <div className="mb-4 flex items-center md:mb-0">
                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black">
                          <img
                            alt="Lisbom"
                            loading="lazy"
                            width={30}
                            height={30}
                            decoding="async"
                            data-nimg={1}
                            className="h-6 min-h-6 w-6 min-w-6"
                            style={{ color: 'transparent' }}
                            src={lisbomImage}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">Lisbom</h3>
                          <p className="text-sm text-gray-500">
                            lisbom{/* */}.com
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-400">
                        2021{/* */}-{/* */}2021
                      </div>
                    </div>
                    <div className="border-t border-white/5 bg-[#0a0a0a] p-6">
                      <h4 className="mb-2 text-lg font-medium">
                        Full Stack Developer
                      </h4>
                      <p className="text-gray-400">
                        Provided leadership and expertise in the role,
                        collaborating with teams to deliver exceptional results
                        and drive business objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="in-view border-t border-white/5 py-16"
            data-scroll="true"
          >
            <div className="mx-auto max-w-4xl px-6">
              <div
                className="mb-10 flex items-center"
                style={{ opacity: 1, transform: 'none' }}
              >
                <div className="mr-3 text-2xl">🎓</div>
                <h2 className="text-2xl font-bold md:text-3xl">Education</h2>
              </div>
              <div className="space-y-8">
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="overflow-hidden rounded-lg border border-white/5 bg-[#111] transition-all duration-300 hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <div className="flex flex-col justify-between p-6 md:flex-row md:items-center">
                      <div className="mb-4 flex items-center md:mb-0">
                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black">
                          <img
                            alt="UNOPAR - Universidade Norte do Paraná"
                            loading="lazy"
                            width={30}
                            height={30}
                            decoding="async"
                            data-nimg={1}
                            className="h-6 min-h-6 w-6 min-w-6"
                            style={{ color: 'transparent' }}
                            src={unoparImage}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">
                            UNOPAR - Universidade Norte do Paraná
                          </h3>
                          <p className="text-sm text-gray-500">
                            Curso Superior de Tecnologia (CST), Análise e
                            Desenvolvimento de Sistemas
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-400">
                        2023{/* */}-{/* */}2025
                      </div>
                    </div>
                    <div className="border-t border-white/5 bg-[#0a0a0a] p-6">
                      <p className="text-gray-400">
                        Completed coursework with focus on core disciplines and
                        practical applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="overflow-hidden rounded-lg border border-white/5 bg-[#111] transition-all duration-300 hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <div className="flex flex-col justify-between p-6 md:flex-row md:items-center">
                      <div className="mb-4 flex items-center md:mb-0">
                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black">
                          <img
                            alt="Instituto Federal de Educação, Ciência e Tecnologia do Ceará"
                            loading="lazy"
                            width={30}
                            height={30}
                            decoding="async"
                            data-nimg={1}
                            className="h-6 min-h-6 w-6 min-w-6"
                            style={{ color: 'transparent' }}
                            src={ifImage}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">
                            Instituto Federal de Educação, Ciência e Tecnologia
                            do Ceará
                          </h3>
                          <p className="text-sm text-gray-500">
                            Curso Técnico Integrado, Informática
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-400">
                        2017{/* */}-{/* */}2021
                      </div>
                    </div>
                    <div className="border-t border-white/5 bg-[#0a0a0a] p-6">
                      <p className="text-gray-400">
                        Completed coursework with focus on core disciplines and
                        practical applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="in-view border-t border-white/5 py-16"
            data-scroll="true"
          >
            <div className="mx-auto max-w-4xl px-6">
              <div
                className="mb-10 flex items-center"
                style={{ opacity: 1, transform: 'none' }}
              >
                <div className="mr-3 text-2xl">💪</div>
                <h2 className="text-2xl font-bold md:text-3xl">Skills</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Playwright</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Prisma</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">SQLite</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Controle de versão</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Web design</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Web Design Responsivo</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Vuex</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Next.js</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Padrões de design</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Scrum</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">TypeScript</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">React.js</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Tailwind CSS</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Bootstrap</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">GraphQL</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">HTML5</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">SCSS</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">CSS</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Vue.js</span>
                  </div>
                </div>
                <div
                  style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                  <div
                    className="rounded-lg border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 transition-all duration-300 hover:scale-105 hover:transform hover:border-white/10"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="text-gray-300">Nuxt.js</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="border-t border-white/5 py-8 text-center text-gray-400"></footer>
        </div>
      </div>
    </HexagonBackground>
  );
}

export default App;
