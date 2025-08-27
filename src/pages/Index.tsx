import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone } from "lucide-react";

const Index = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Python", 
    "PostgreSQL", "AWS", "Docker", "Git", "Figma", "UI/UX Design"
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Full-Stack Developer & UI/UX Designer crafting beautiful, functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-elegant hover:shadow-glow transition-all duration-300">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="group">
                Contact Me
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card-gradient shadow-elegant border-0">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Passionate about clean code, modern frameworks, and building scalable applications that solve real-world problems.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-card-gradient shadow-elegant border-0">
                <CardHeader>
                  <Palette className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Creating intuitive user experiences with attention to detail, accessibility, and modern design principles.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-card-gradient shadow-elegant border-0">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Mobile-First</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Building responsive, performant applications that work seamlessly across all devices and platforms.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-card-gradient shadow-elegant border-0 hover:shadow-glow transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" className="group/btn">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Live Demo
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-12">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and create something amazing!
            </p>
            <Button size="lg" className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
