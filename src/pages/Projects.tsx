
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="neon-text-blue">My Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Network Vulnerability Scanner"
            description="A Python-based tool that scans networks for common vulnerabilities and security misconfigurations, generating detailed reports with recommendations."
            tags={["Python", "Network Security", "Automation"]}
            githubUrl="https://github.com"
          />
          
          <ProjectCard
            title="Web Application Firewall Bypass Techniques"
            description="Research project documenting various techniques to bypass modern web application firewalls (WAFs) to improve security posture."
            tags={["Web Security", "Research", "Documentation"]}
            githubUrl="https://github.com"
          />
          
          <ProjectCard
            title="Secure Password Manager"
            description="A locally-hosted password manager using strong encryption standards to securely store and manage credentials."
            tags={["Cryptography", "Python", "Desktop App"]}
            githubUrl="https://github.com"
            liveUrl="https://demo-link.com"
          />
          
          <ProjectCard
            title="CTF Challenge Platform"
            description="Developed a platform to host Capture The Flag security challenges with automated scoring and real-time leaderboards."
            tags={["Full Stack", "Security Challenges", "Education"]}
            githubUrl="https://github.com"
          />
          
          <ProjectCard
            title="Phishing Awareness Training Tool"
            description="An educational tool that simulates phishing attacks to train users on identifying and avoiding social engineering threats."
            tags={["Security Training", "Web Development", "Social Engineering"]}
            githubUrl="https://github.com"
          />
          
          <ProjectCard
            title="Security Hardening Scripts"
            description="Collection of bash scripts to automate the hardening process for Linux servers according to industry best practices."
            tags={["Bash", "Linux", "System Hardening"]}
            githubUrl="https://github.com"
          />
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, tags, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="bg-cyber-gray rounded-lg p-6 border border-gray-800 hover:border-neon-blue transition-all duration-300 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-black text-neon-green border border-neon-green"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3 mt-auto">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-blue transition-colors"
        >
          <Github size={16} />
          <span>Code</span>
        </a>
        
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-green transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
