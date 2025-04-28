import { ThemeToggle } from '@/components/theme-toggle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Code, MonitorPlay, Download } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-8 md:p-16">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Mammen Mathew</h1>
        <ThemeToggle />
      </header>

      <main className="space-y-12">
        {/* About Section */}
        <section id="about">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Full-stack developer specializing in the MERN stack, experienced in building cloud-native applications with clean architecture and scalable design. Skilled in RESTful APIs, state management, DevOps, and performance optimization. Passionate about automation and real-time collaboration.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="mailto:mammen.mm@proton.me" target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/mammenmathewz" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                    <Link href="https://leetcode.com/u/Mammen_Mathew/" target="_blank" rel="noopener noreferrer">
                     <Code className="mr-2 h-4 w-4" /> LeetCode
                    </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.linkedin.com/in/mammen-mathew/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Link>
                </Button>
                 <Button variant="outline" size="sm" asChild>
                   {/* Assuming CV is placed in the public folder */}
                  <Link href="/Mammen_Mathew_CV.pdf" download="Mammen_Mathew_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </Link>
                </Button>
                <span className="text-muted-foreground">+91 7559824707 | Kochi, Kerala, INDIA</span>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Technical Skills Section */}
        <section id="skills">
           <Card className="shadow-md">
            <CardHeader>
                 <CardTitle className="text-2xl font-semibold text-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <h3 className="font-semibold mb-2 text-primary/90">Programming Languages</h3>
                    <p className="text-muted-foreground">JavaScript (ES6+), TypeScript</p>
                 </div>
                 <div>
                    <h3 className="font-semibold mb-2 text-primary/90">Frontend Development</h3>
                    <p className="text-muted-foreground">React.js, Tailwind CSS, Redux/Redux Toolkit, ShadCN UI, TanStack Query, WebRTC, HTML5, CSS3, SASS/SCSS</p>
                 </div>
                 <div>
                    <h3 className="font-semibold mb-2 text-primary/90">Backend Development</h3>
                    <p className="text-muted-foreground">Node.js, Express.js, RESTful APIs, Socket.io, JWT Authentication</p>
                 </div>
                 <div>
                    <h3 className="font-semibold mb-2 text-primary/90">Databases</h3>
                    <p className="text-muted-foreground">MongoDB, PostgreSQL, Redis, Mongoose ODM, Firestore</p>
                 </div>
                 <div>
                    <h3 className="font-semibold mb-2 text-primary/90">DevOps & Cloud</h3>
                    <p className="text-muted-foreground">Docker, CI/CD, AWS (EC2, S3, Lambda), GCP, Firebase, Vercel, Netlify, Render</p>
                 </div>
                 <div>
                    <h3 className="font-semibold mb-2 text-primary/90">Testing & Tools</h3>
                    <p className="text-muted-foreground">Jest, Git, GitHub Actions, Postman, npm, Rollup.js</p>
                 </div>
                 <div>
                    <h3 className="font-semibold mb-2 text-primary/90">Architecture & Methodologies</h3>
                    <p className="text-muted-foreground">Clean Architecture, MVC Pattern, SOLID Principles, Agile/Scrum</p>
                 </div>
            </CardContent>
           </Card>
        </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Octaview – B2B SaaS Job Recruitment Platform</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">A scalable B2B SaaS platform integrating job listings into company websites via an npm package. Features an admin dashboard, automated email notifications, real-time video interviews (WebRTC), and a collaborative code editor (Monaco, Yjs). Built with Clean Architecture, deployed across AWS, GCP, and Vercel with CI/CD.</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                    <Link href="https://octaview.tech/" target="_blank" rel="noopener noreferrer">
                       <MonitorPlay className="mr-1 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                    <Link href="https://github.com/Octaview-b2b" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                  <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                     <Link href="https://www.npmjs.com/package/octaview-client" target="_blank" rel="noopener noreferrer">
                        NPM
                     </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

             <Card className="shadow-md">
               <CardHeader>
                 <CardTitle className="text-xl">E-Commerce Platform</CardTitle>
               </CardHeader>
               <CardContent className="space-y-3">
                 <p className="text-muted-foreground">Full-featured e-commerce platform using Node.js, Express.js, MongoDB, EJS, and Bootstrap. Includes admin dashboard with data visualization, Razorpay integration, wallet system, coupon management, and CMS for dynamic content.</p>
                  <div className="flex flex-wrap gap-2">
                      <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                        <Link href="https://aranoz.octaview.tech/" target="_blank" rel="noopener noreferrer">
                           <MonitorPlay className="mr-1 h-4 w-4" /> Live
                        </Link>
                      </Button>
                      <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                        <Link href="https://github.com/mammenmathewz/ECOMMERCE_-PROJECT_ARANOZ--2" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> GitHub
                        </Link>
                      </Button>
                  </div>
               </CardContent>
             </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Loggasm (NPM Package)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Express error-handling middleware displaying meaningful error messages with memes. Integrates OopsLog for colorful terminal logs. Published on NPM.</p>
                 <div className="flex flex-wrap gap-2">
                     <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                        <Link href="https://www.npmjs.com/package/loggasm" target="_blank" rel="noopener noreferrer">
                            NPM
                        </Link>
                      </Button>
                      <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                        <Link href="https://github.com/mammenmathewz/Loggasm" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1 h-4 w-4" /> GitHub
                        </Link>
                      </Button>
                 </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Netflix Clone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Fully responsive Netflix-inspired streaming platform using React and Firebase. Features Firebase Authentication and dynamic movie fetching via TMDb API.</p>
                 <div className="flex flex-wrap gap-2">
                     <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                        <Link href="https://subtle-dasik-c7e564.netlify.app" target="_blank" rel="noopener noreferrer">
                            <MonitorPlay className="mr-1 h-4 w-4" /> Live
                        </Link>
                      </Button>
                      <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                        <Link href="https://github.com/mammenmathewz/Netflix-clone-react" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> GitHub
                        </Link>
                      </Button>
                 </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Tower of Hanoi PWA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Progressive Web App (PWA) demonstrating the Stack Data Structure with the Tower of Hanoi puzzle. Optimized for offline access.</p>
                 <div className="flex flex-wrap gap-2">
                     <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                        <Link href="https://threetowers.netlify.app/" target="_blank" rel="noopener noreferrer">
                           <MonitorPlay className="mr-1 h-4 w-4" /> Live
                        </Link>
                      </Button>
                      <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent">
                        <Link href="https://github.com/mammenmathewz/Tower_of_hanoi_pwa" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> GitHub
                        </Link>
                      </Button>
                 </div>
              </CardContent>
            </Card>
          </div>
           {/* Add more project cards here as needed */}
        </section>

        <Separator />

        {/* Professional Experience Section */}
        <section id="experience">
           <h2 className="text-2xl font-semibold mb-4 text-primary">Professional Experience</h2>
            <div className="space-y-6">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl">Digital Marketing Manager</CardTitle>
                     <p className="text-sm text-muted-foreground">Mar Louis Books and Art Centre | Kerala, India | 2021 – 2022</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Managed and maintained the company’s WordPress website, improving user experience and site performance.</li>
                        <li>Developed and executed SEO strategies, increasing website traffic.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl">FCT Tester</CardTitle>
                     <p className="text-sm text-muted-foreground">Stanley Black & Decker (via NeST Technologies) | Kerala, India | 2020 – 2021</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Performed functional circuit testing (FCT) and diagnostics on embedded systems for industrial IoT tools.</li>
                        <li>Conducted hardware testing, troubleshooting, and quality assurance for electronic components and systems.</li>
                        <li>Collaborated with cross-functional engineering teams to optimize testing procedures and improve reliability of IoT-enabled devices.</li>
                    </ul>
                  </CardContent>
                </Card>
            </div>
        </section>

         <Separator />

        {/* Education & Training Section */}
        <section id="education">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Education & Training</h2>
             <div className="space-y-6">
                 <Card className="shadow-md">
                   <CardHeader>
                     <CardTitle className="text-xl">Brototype Intensive Training Program</CardTitle>
                     <p className="text-sm text-muted-foreground">Full-Stack Development (MERN Stack) | Remote | 2024 – 2025</p>
                   </CardHeader>
                   <CardContent>
                     <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Completing rigorous training in modern web development focusing on MongoDB, Express.js, React.js, and Node.js.</li>
                        <li>Building real-world projects with mentorship from industry professionals following best practices.</li>
                     </ul>
                   </CardContent>
                 </Card>
                 <Card className="shadow-md">
                   <CardHeader>
                     <CardTitle className="text-xl">Euro Tech Maritime Academy</CardTitle>
                     <p className="text-sm text-muted-foreground">GP Rating Training | Kerala, India | 2018 – 2019</p>
                   </CardHeader>
                 </Card>
             </div>
        </section>

      </main>

      <footer className="mt-16 pt-8 border-t text-center text-muted-foreground text-sm">
        © 2025 Mammen Mathew. Built with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}
