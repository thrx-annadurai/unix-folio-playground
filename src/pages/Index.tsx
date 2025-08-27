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
  X,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  ChevronRight,
  User,
  Briefcase,
  Settings
} from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startTime] = useState(new Date());
  const [typedText, setTypedText] = useState("");
  const [activeExecutable, setActiveExecutable] = useState<string | null>("about");
  const [runningProcesses, setRunningProcesses] = useState<string[]>(["about"]);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "System initialized...",
    "Loading user profile...",
    "Welcome to UNIX Portfolio v2.4.1"
  ]);
  
  const welcomeText = "Welcome to UNIX Portfolio v2.4.1";

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getUptime = () => {
    const uptimeMs = currentTime.getTime() - startTime.getTime();
    const uptimeSeconds = Math.floor(uptimeMs / 1000);
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = uptimeSeconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < welcomeText.length) {
        setTypedText(welcomeText.slice(0, typedText.length + 1));
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [typedText, welcomeText]);

  const executeProgram = (programName: string) => {
    const cleanName = programName.replace('.exe', '');
    setActiveExecutable(cleanName);
    
    if (!runningProcesses.includes(cleanName)) {
      setRunningProcesses(prev => [...prev, cleanName]);
    }
    
    setTerminalOutput(prev => [
      ...prev,
      `$ ./${programName}`,
      `Starting ${programName}...`,
      `Process ID: ${Math.floor(Math.random() * 9999) + 1000}`,
      `Status: Running`
    ]);
  };

  const closeProcess = (processName: string) => {
    setRunningProcesses(prev => prev.filter(p => p !== processName));
    if (activeExecutable === processName) {
      const remaining = runningProcesses.filter(p => p !== processName);
      setActiveExecutable(remaining.length > 0 ? remaining[0] : null);
    }
    
    setTerminalOutput(prev => [
      ...prev,
      `Process ${processName} terminated.`
    ]);
  };

  const minimizeProcess = (processName: string) => {
    if (activeExecutable === processName) {
      const otherProcesses = runningProcesses.filter(p => p !== processName);
      setActiveExecutable(otherProcesses.length > 0 ? otherProcesses[0] : null);
    }
    
    setTerminalOutput(prev => [
      ...prev,
      `Process ${processName} minimized.`
    ]);
  };

  const executables = [
    {
      name: "about.exe",
      icon: <User className="h-5 w-5" />,
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
      icon: <Briefcase className="h-5 w-5" />,
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
      memory: "124MB",
      github: "https://github.com/johndoe/linux-file-manager",
      demo: "https://demo.example.com/file-manager"
    },
    {
      title: "web-scraper-daemon.exe", 
      description: "Multi-threaded data extraction service",
      tech: ["Python", "asyncio", "PostgreSQL", "Docker"],
      processes: "8 running",
      memory: "89MB",
      github: "https://github.com/johndoe/web-scraper",
      demo: "https://demo.example.com/scraper"
    },
    {
      title: "terminal-portfolio.exe",
      description: "Interactive command-line portfolio interface",
      tech: ["React", "TypeScript", "Terminal.js", "CSS"],
      processes: "1 running", 
      memory: "45MB",
      github: "https://github.com/johndoe/terminal-portfolio",
      demo: "https://portfolio.johndoe.dev"
    }
  ];

  const contactLinks = [
    {
      name: "email",
      url: "mailto:john.doe@dev.local",
      display: "john.doe@dev.local",
      icon: <Mail className="h-4 w-4" />
    },
    {
      name: "github",
      url: "https://github.com/johndoe",
      display: "github.com/johndoe",
      icon: <Github className="h-4 w-4" />
    },
    {
      name: "linkedin",
      url: "https://linkedin.com/in/johndoe",
      display: "linkedin.com/in/johndoe",
      icon: <Linkedin className="h-4 w-4" />
    }
  ];

  const renderActiveWindow = () => {
    if (!activeExecutable) return null;

    const isRunning = runningProcesses.includes(activeExecutable);
    if (!isRunning) return null;

    const windowHeader = (title: string) => (
      <div className="terminal-header">
        <div className="flex items-center space-x-2">
          <Play className="h-4 w-4 text-green-500" />
          <span className="text-sm font-mono">{title} - Running</span>
        </div>
        <div className="terminal-controls">
          <Minus 
            className="h-4 w-4 text-yellow-500 cursor-pointer hover:bg-yellow-500/20 rounded p-0.5" 
            onClick={() => minimizeProcess(activeExecutable)}
          />
          <Square className="h-4 w-4 text-blue-500 cursor-pointer hover:bg-blue-500/20 rounded p-0.5" />
          <X 
            className="h-4 w-4 text-red-500 cursor-pointer hover:bg-red-500/20 rounded p-0.5"
            onClick={() => closeProcess(activeExecutable)}
          />
        </div>
      </div>
    );

    switch (activeExecutable) {
      case 'about':
        return (
          <div className="terminal-window">
            {windowHeader('about.exe')}
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
              <div className="mt-6 pt-6 border-t border-primary/20">
                <div className="text-sm font-mono space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="text-primary">5+ years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-primary">Remote / San Francisco</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-green-500">Available for hire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="terminal-window">
            {windowHeader('skills.exe')}
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-muted/30 border border-primary/30 p-3 hover:border-primary hover:bg-accent/20 transition-all cursor-pointer group"
                    onClick={() => setTerminalOutput(prev => [...prev, `$ man ${skill.toLowerCase()}`, `Loading documentation for ${skill}...`])}
                  >
                    <span className="text-xs font-mono text-primary group-hover:text-primary-glow">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 text-sm font-mono">
                <div>
                  <h3 className="text-primary mb-2">Proficiency Levels:</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Expert:</span>
                      <span className="text-primary">C++, Python, Linux, Git</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Advanced:</span>
                      <span className="text-primary">JavaScript, React, Docker, PostgreSQL</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Intermediate:</span>
                      <span className="text-primary">TypeScript, Node.js, AWS, MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="terminal-window">
            {windowHeader('projects.exe')}
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
                      <button 
                        className="text-primary hover:underline flex items-center space-x-1"
                        onClick={() => {
                          setTerminalOutput(prev => [...prev, `$ ./run ${project.title}`, `Starting ${project.title}...`, `Process started successfully.`]);
                        }}
                      >
                        <Play className="h-3 w-3" />
                        <span>./run</span>
                      </button>
                      <button 
                        className="text-primary hover:underline flex items-center space-x-1"
                        onClick={() => {
                          setTerminalOutput(prev => [...prev, `$ ./debug ${project.title}`, `Debugging mode enabled.`, `Breakpoints set.`]);
                        }}
                      >
                        <Settings className="h-3 w-3" />
                        <span>./debug</span>
                      </button>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center space-x-1"
                        onClick={() => setTerminalOutput(prev => [...prev, `$ git clone ${project.github}`, `Cloning repository...`])}
                      >
                        <Github className="h-3 w-3" />
                        <span>./source</span>
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center space-x-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>./demo</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="terminal-window">
            {windowHeader('contact.exe')}
            <div className="p-6">
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between border-b border-primary/20 pb-2">
                  <span className="text-muted-foreground">Network Interfaces:</span>
                  <span className="text-primary">Active</span>
                </div>
                <div className="space-y-3">
                  {contactLinks.map((link, index) => (
                    <div key={index} className="flex justify-between items-center group">
                      <div className="flex items-center space-x-2">
                        {link.icon}
                        <span>{link.name}://</span>
                      </div>
                      <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline cursor-pointer flex items-center space-x-1 group-hover:text-primary-glow"
                        onClick={() => setTerminalOutput(prev => [...prev, `$ connect ${link.name}`, `Establishing connection to ${link.display}...`, `Connection successful.`])}
                      >
                        <span>{link.display}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-primary/20">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-mono"
                    onClick={() => {
                      setTerminalOutput(prev => [...prev, `$ ./initiate_connection`, `Scanning available networks...`, `Connection protocols loaded.`, `Ready to establish communication.`]);
                      // You can add actual contact form logic here
                    }}
                  >
                    $ ./initiate_connection
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground">
                  <div>Response time: &lt; 24 hours</div>
                  <div>Encryption: PGP available on request</div>
                  <div>Timezone: PST (UTC-8)</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
            <div>Uptime: {getUptime()}</div>
            <div>Running processes: {runningProcesses.length}</div>
          </div>
          {/* Terminal Output */}
          <div className="bg-muted/20 border border-primary/20 p-3 max-h-32 overflow-y-auto">
            {terminalOutput.slice(-8).map((line, index) => (
              <div key={index} className="text-xs font-mono text-muted-foreground">
                {line}
              </div>
            ))}
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
                    <div 
                      key={index} 
                      className={`executable-item ${activeExecutable === exe.name.replace('.exe', '') ? 'border-primary bg-accent/10' : ''}`}
                      onClick={() => executeProgram(exe.name)}
                    >
                      {exe.icon}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-mono text-primary truncate flex items-center">
                          {exe.name}
                          {runningProcesses.includes(exe.name.replace('.exe', '')) && (
                            <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {exe.size} • {exe.lastModified}
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
                
                {/* Process Manager */}
                {runningProcesses.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-primary/20">
                    <div className="text-xs font-mono text-muted-foreground mb-2">Running Processes:</div>
                    <div className="space-y-1">
                      {runningProcesses.map((process, index) => (
                        <div key={index} className="flex items-center justify-between text-xs">
                          <span className="text-primary">{process}.exe</span>
                          <div className="flex space-x-1">
                            <button 
                              onClick={() => setActiveExecutable(process)}
                              className="text-blue-500 hover:text-blue-400"
                            >
                              ↗
                            </button>
                            <button 
                              onClick={() => closeProcess(process)}
                              className="text-red-500 hover:text-red-400"
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Window */}
          <div className="lg:col-span-3 space-y-6">
            {renderActiveWindow()}
            
            {!activeExecutable && (
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="text-sm font-mono">No active processes</span>
                </div>
                <div className="p-6 text-center">
                  <Terminal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground font-mono">
                    Click on an executable from the sidebar to start a process
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="terminal-window mx-4 mb-4">
        <div className="p-4 text-xs font-mono text-muted-foreground text-center">
          <div>© 2024 john_doe@dev.local | Built with React, TypeScript, Tailwind</div>
          <div className="mt-1">System uptime: {getUptime()} | Active processes: {runningProcesses.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;