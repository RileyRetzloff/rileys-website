const banner =
  "https://34ggzkze9s.ufs.sh/f/QUrPhpHwWNxUXSarqAf5NxjRVWc6L8Y4MQIFPTfUKtvy1uJi";

export default async function AboutPage() {
  return (
    <main>
      <div className="mb-8">
        <h1>Riley Retzloff</h1>
        <h2 className="text-gray-300">Full-stack web developer</h2>
        <div className="relative h-40 w-full overflow-hidden rounded-xl outline outline-white sm:h-48 md:h-64 lg:h-72 xl:h-96">
          <img
            src={banner}
            alt="Picture of Riley (me)"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <section className="h-container mb-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
            <h3 className="border-b border-zinc-700 pb-2">Contact</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-base">rirye811@gmail.com</p>
                <p className="text-base">(828)620-9803</p>
                <p className="text-base">
                  <a
                    href="https://linkedin.com/in/rileyretzloff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="text-base">
                  <a
                    href="https://github.com/RileyRetzloff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="h-container rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
            <h3 className="border-b border-zinc-700 pb-2">
              Technical Proficiencies
            </h3>
            <div className="space-y-4">
              <div>
                <h5>Languages</h5>
                <p className="text-sm text-gray-300">
                  TypeScript, JavaScript, C#, Python, HTML, CSS (SCSS), SQL,
                  Java
                </p>
              </div>
              <div>
                <h5>Frontend</h5>
                <p className="text-sm text-gray-300">
                  Angular, React, Bootstrap, Tailwind CSS
                </p>
              </div>
              <div>
                <h5>Backend</h5>
                <p className="text-sm text-gray-300">
                  .NET (.NET Core, ASP.NET Core Web API), Flask
                </p>
              </div>
              <div>
                <h5>Databases & ORMs</h5>
                <p className="text-sm text-gray-300">
                  SQL Server (SSMS), PostgreSQL, Entity Framework Core, LINQ,
                  Flask SQLAlchemy
                </p>
              </div>
              <div>
                <h5>Tools & Methods</h5>
                <p className="text-sm text-gray-300">
                  Git, GitHub, Azure DevOps, Postman, Pytest, RESTful APIs,
                  Agile (Scrum)
                </p>
              </div>
              <div>
                <h5>Cloud & Deployment</h5>
                <p className="text-sm text-gray-300">Render, Azure</p>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-2">
          <section className="h-container mb-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
            <h3 className="border-b border-zinc-700 pb-2">Experience</h3>

            <div className="space-y-8">
              <div className="relative border-l-2 border-amber-600 pl-5">
                <div className="absolute top-0 -left-2 h-4 w-4 rounded-full bg-amber-600"></div>
                <div className="mb-2">
                  <h4>Junior Full-Stack Web Developer</h4>
                  <p className="text-gray-400">TIAA, Newark, NJ</p>
                  <p className="text-sm text-gray-500">
                    January 2025 – Present
                  </p>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-gray-300">
                  <li>
                    Engineered robust, internal-facing web applications using
                    Angular (TypeScript) and ASP.NET Core Web API (C#)
                  </li>
                  <li>
                    Designed and optimized relational database schemas using
                    Entity Framework Core with SQL Server
                  </li>
                  <li>
                    Leveraged Azure DevOps for end-to-end SDLC including CI/CD
                    pipelines and automated deployments
                  </li>
                  <li>
                    Built responsive UI components with Tailwind CSS and
                    collaborated in Agile Scrum methodology
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-zinc-600 pl-5">
                <div className="absolute top-0 -left-2 h-4 w-4 rounded-full bg-zinc-600"></div>
                <div className="mb-2">
                  <h4>Cyber Security Analyst</h4>
                  <p className="text-gray-400">TIAA, Newark, NJ</p>
                  <p className="text-sm text-gray-500">
                    June 2024 – January 2025
                  </p>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-gray-300">
                  <li>
                    Handled 3,000+ email and web security incidents, identifying
                    8 policy violations
                  </li>
                  <li>
                    Developed a Chromium extension automating repetitive tasks
                    and improving team efficiency
                  </li>
                  <li>
                    Co-owned project to develop new team performance metrics
                  </li>
                  <li>
                    Created plan to quantify monetary value of data elements in
                    security incidents
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-zinc-600 pl-5">
                <div className="absolute top-0 -left-2 h-4 w-4 rounded-full bg-zinc-600"></div>
                <div className="mb-2">
                  <h4>Internal Audit Intern</h4>
                  <p className="text-gray-400">TIAA, Charlotte, NC</p>
                  <p className="text-sm text-gray-500">
                    June 2023 – August 2023
                  </p>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-gray-300">
                  <li>
                    Gained experience with Internal Audit methodology and
                    practices
                  </li>
                  <li>
                    Applied existing knowledge and learned new concepts for IT
                    Audit projects
                  </li>
                  <li>
                    Communicated effectively with audit clients and team members
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="h-container mb-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
            <h3 className="border-b border-zinc-700 pb-2">Education</h3>
            <div className="font-martian-mono">
              <h4>
                BSBA Management Information Systems, BSBA Operations & Supply
                Chain Management
              </h4>
              <p className="mb-1 text-sm text-gray-400">
                Minor in Software Development
              </p>
              <p className="mb-3 text-gray-300">
                University of North Carolina, Charlotte, NC | Class of 2024
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-300">
                <li>Maintained 4.0 GPA with double-major and minor</li>
                <li>
                  Chancellor's List recognition every semester for academic
                  excellence
                </li>
                <li>
                  Treasurer of Charlotte Pride Outreach Association student
                  organization
                </li>
              </ul>
            </div>
          </section>

          <section className="h-container rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
            <h3 className="border-b border-zinc-700 pb-2">More about me</h3>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <h4>Soft Skills</h4>
                <ul className="list-inside list-disc space-y-2 text-sm text-gray-300">
                  <li>Complex problem analysis and rapid adaptation</li>
                  <li>Natural leadership and exceptional communication</li>
                  <li>Proactive learning with growth mindset</li>
                  <li>Effective teaching and knowledge transfer</li>
                </ul>
              </div>

              <div>
                <h4>Interests</h4>
                <p className="text-sm text-gray-300">
                  Mindfulness, health and fitness, reading, technology, indoor
                  plants and gardening, hiking and outdoors, LGBTQ+ pop culture,
                  roller-skating, and all genres of music.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
