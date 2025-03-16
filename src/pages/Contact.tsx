
import { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend
    console.log('Form data submitted:', formData);
    
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="neon-text-pink">Get In Touch</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-cyber-gray p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-white">Connect With Me</h2>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Mail className="text-neon-pink" size={24} />}
                title="Email"
                detail="contact@aryanshukla.com"
                link="mailto:contact@aryanshukla.com"
              />
              
              <ContactItem 
                icon={<Github className="text-white" size={24} />}
                title="GitHub"
                detail="github.com/aryanshukla"
                link="https://github.com"
              />
              
              <ContactItem 
                icon={<Linkedin className="text-blue-500" size={24} />}
                title="LinkedIn"
                detail="linkedin.com/in/aryanshukla"
                link="https://linkedin.com"
              />
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-white">Office Hours</h3>
              <p className="text-gray-300 mb-2">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-300">Weekends: By appointment</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cyber-gray p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-neon-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-neon-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-neon-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-neon-blue resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-3 bg-black text-white hover:bg-gray-900 border border-neon-pink hover:border-neon-pink hover:text-neon-pink transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  link: string;
}

const ContactItem = ({ icon, title, detail, link }: ContactItemProps) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 p-3 bg-black rounded-lg">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-neon-blue flex items-center gap-1"
        >
          {detail}
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
