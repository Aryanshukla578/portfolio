
import { Github, Linkedin, Mail, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I am <br />
                <span className="neon-text-green">Aryan Shukla</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                A keen cybersecurity learner passionate about protecting digital 
                infrastructures from threats and vulnerabilities. Specializing in 
                penetration testing, network security, and secure coding practices.
              </p>
              <div className="flex space-x-4">
                <SocialLink href="https://github.com" icon={<Github size={20} />} />
                <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
                <SocialLink href="mailto:contact@aryanshukla.com" icon={<Mail size={20} />} />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-neon-green animate-glow flex items-center justify-center overflow-hidden">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-cyber-gray border-4 border-neon-pink overflow-hidden flex items-center justify-center">
                    <Shield className="text-gray-700 w-28 h-28 md:w-40 md:h-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
          <div className="bg-cyber-gray p-6 rounded-lg shadow-md border border-gray-800">
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a dedicated cybersecurity enthusiast focused on understanding the complexities 
              of digital security landscapes. My journey in cyber security began with a fascination 
              for how systems can be protected against malicious attacks.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I specialize in:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Network Security & Vulnerability Assessment</li>
              <li>Penetration Testing & Ethical Hacking</li>
              <li>Security Analysis & Incident Response</li>
              <li>Secure Coding Practices & Application Security</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              When I'm not exploring security concepts, you'll find me participating in CTF competitions,
              contributing to open-source security tools, or expanding my knowledge through continuous learning.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard 
              title="Security Tools" 
              skills={["Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP"]} 
            />
            <SkillCard 
              title="Programming" 
              skills={["Python", "Bash Scripting", "SQL", "C/C++", "Web Technologies"]} 
            />
            <SkillCard 
              title="Certifications Pursuing" 
              skills={["CompTIA Security+", "CEH (Certified Ethical Hacker)", "OSCP"]} 
            />
            <SkillCard 
              title="Areas of Interest" 
              skills={["Network Security", "Web Application Security", "Cryptography", "Malware Analysis"]} 
            />
          </div>
        </section>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-cyber-gray text-white hover:text-neon-blue transition-colors border border-gray-700 hover:border-neon-blue"
    >
      {icon}
    </a>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="bg-cyber-gray p-6 rounded-lg border border-gray-800 hover:border-neon-blue transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="w-2 h-2 bg-neon-green rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
