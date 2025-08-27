import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Terminal, 
  Folder, 
  FileText, 
  Code2, 
  Database, 
  Server, 
  Monitor,
  Play,
  Minus,
  Square,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState("");
  const welcomeText = "Welcome to UNIX Portfolio v2.4.1";

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < welcomeText.length) {
        setTypedText(welcomeText.slice(0, typedText.length + 1));
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [typedText, welcomeText]);

  const executables = [
    {
      name: "about.exe",
      icon: <FileText className="h-5 w-5" />,
      description: "System information and user profile",
      lastModified: "2024-08-27",
      size: "2.4KB"
    },
    {
      name: "skills.exe", 
      icon: <Code2 className="h-5 w-5" />,
      description: "Technical capabilities and tools",
      lastModified: "2024-08-26", 
      size: "5.1KB"
    },
    {
      name: "projects.exe",
      icon: <Folder className="h-5 w-5" />,
      description: "Portfolio and project showcase",
      lastModified: "2024-08-25",
      size: "8.7KB"
    },
    {
      name: "contact.exe",
      icon: <Server className="h-5 w-5" />,
      description: "Network connections and communication",
      lastModified: "2024-08-27",
      size: "1.2KB"
    }
  ];

  const skills = [
    "C++", "Python", "JavaScript", "TypeScript", "React", "Node.js", 
    "Linux", "Docker", "PostgreSQL", "MongoDB", "AWS", "Git", "Vim", "Bash"
  ];

  const projects = [
    {
      title: "linux-file-manager.exe",
      description: "Advanced file management system with UNIX permissions",
      tech: ["C++", "Qt", "Linux", "SQLite"],
      processes: "3 running",
      memory: "124MB"
    },
    {
      title: "web-scraper-daemon.exe", 
      description: "Multi-threaded data extraction service",
      tech: ["Python", "asyncio", "PostgreSQL", "Docker"],
      processes: "8 running",
      memory: "89MB"
    },
    {
      title: "terminal-portfolio.exe",
      description: "Interactive command-line portfolio interface",
      tech: ["React", "TypeScript", "Terminal.js", "CSS"],
      processes: "1 running", 
      memory: "45MB"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Terminal Header */}
      <div className="terminal-window mx-4 mt-4 mb-6">
        <div className="terminal-header">
          <div className="flex items-center space-x-3">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="text-sm">unix-portfolio@localhost:~$</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-muted-foreground">
              {currentTime.toLocaleTimeString()}
            </span>
            <div className="terminal-controls">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <span className="text-primary">$ </span>
            <span className="typewriter">{typedText}</span>
            <span className="cursor-blink text-primary">█</span>
          </div>
          <div className="text-muted-foreground text-sm mb-4">
            <div>System: UNIX Portfolio v2.4.1</div>
            <div>User: john_doe@developer</div>
            <div>Uptime: 1337 days</div>
            <div>Load average: 0.42, 0.38, 0.35</div>
          </div>
        </div>
      </div>

      {/* File System - Main Content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Directory Listing */}
          <div className="lg:col-span-1">
            <div className="terminal-window h-fit">
              <div className="terminal-header">
                <span className="text-sm font-mono">~/executables</span>
                <Folder className="h-4 w-4 text-primary" />
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  {executables.map((exe, index) => (
                    <div key={index} className="executable-item">
                      {exe.icon}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-mono text-primary truncate">
                          {exe.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {exe.size} • {exe.lastModified}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Window */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* About Section */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center space-x-2">
                  <Play className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-mono">about.exe - Running</span>
                </div>
                <div className="terminal-controls">
                  <Minus className="h-4 w-4 text-yellow-500 cursor-pointer hover:bg-yellow-500/20 rounded" />
                  <Square className="h-4 w-4 text-blue-500 cursor-pointer hover:bg-blue-500/20 rounded" />
                  <X className="h-4 w-4 text-red-500 cursor-pointer hover:bg-red-500/20 rounded" />
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Database className="h-5 w-5 text-primary" />
                      <span className="font-mono text-sm">Backend Engineering</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">
                      Building scalable server architectures, APIs, and database systems with focus on performance and reliability.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      <span className="font-mono text-sm">System Programming</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">
                      Low-level programming, operating systems, and optimization for high-performance applications.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-5 w-5 text-primary" />
                      <span className="font-mono text-sm">DevOps & Infrastructure</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">
                      Container orchestration, CI/CD pipelines, and cloud infrastructure management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center space-x-2">
                  <Play className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-mono">skills.exe - Running</span>
                </div>
                <div className="terminal-controls">
                  <Minus className="h-4 w-4 text-yellow-500 cursor-pointer hover:bg-yellow-500/20 rounded" />
                  <Square className="h-4 w-4 text-blue-500 cursor-pointer hover:bg-blue-500/20 rounded" />
                  <X className="h-4 w-4 text-red-500 cursor-pointer hover:bg-red-500/20 rounded" />
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-muted/30 border border-primary/30 p-3 hover:border-primary hover:bg-accent/20 transition-all cursor-default"
                    >
                      <span className="text-xs font-mono text-primary">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center space-x-2">
                  <Play className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-mono">projects.exe - Running</span>
                </div>
                <div className="terminal-controls">
                  <Minus className="h-4 w-4 text-yellow-500 cursor-pointer hover:bg-yellow-500/20 rounded" />
                  <Square className="h-4 w-4 text-blue-500 cursor-pointer hover:bg-blue-500/20 rounded" />
                  <X className="h-4 w-4 text-red-500 cursor-pointer hover:bg-red-500/20 rounded" />
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border border-primary/20 p-4 hover:border-primary/40 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-mono text-primary">{project.title}</h3>
                        <div className="text-xs text-muted-foreground font-mono">
                          {project.processes} • {project.memory}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground font-mono mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-accent/30 text-accent-foreground px-2 py-1 text-xs font-mono border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 text-xs font-mono">
                        <button className="text-primary hover:underline">./run</button>
                        <button className="text-primary hover:underline">./debug</button>
                        <button className="text-primary hover:underline">./source</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center space-x-2">
                  <Play className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-mono">contact.exe - Running</span>
                </div>
                <div className="terminal-controls">
                  <Minus className="h-4 w-4 text-yellow-500 cursor-pointer hover:bg-yellow-500/20 rounded" />
                  <Square className="h-4 w-4 text-blue-500 cursor-pointer hover:bg-blue-500/20 rounded" />
                  <X className="h-4 w-4 text-red-500 cursor-pointer hover:bg-red-500/20 rounded" />
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-primary/20 pb-2">
                    <span className="text-muted-foreground">Network Interfaces:</span>
                    <span className="text-primary">Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>email@</span>
                      <span className="text-primary hover:underline cursor-pointer">john.doe@dev.local</span>
                    </div>
                    <div className="flex justify-between">
                      <span>github://</span>
                      <span className="text-primary hover:underline cursor-pointer">github.com/johndoe</span>
                    </div>
                    <div className="flex justify-between">
                      <span>linkedin://</span>
                      <span className="text-primary hover:underline cursor-pointer">linkedin.com/in/johndoe</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-primary/20">
                    <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-mono">
                      $ ./initiate_connection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="terminal-window mx-4 mb-4">
        <div className="p-4 text-xs font-mono text-muted-foreground text-center">
          <div>© 2024 john_doe@dev.local | Built with React, TypeScript, Tailwind</div>
          <div className="mt-1">System uptime: {Math.floor(Date.now() / 86400000)} days | Load: {Math.random().toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
