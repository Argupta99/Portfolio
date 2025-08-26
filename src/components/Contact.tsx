import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";


const Contact = () => {
  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      url: "https://github.com/Argupta99",
      color: "hover:text-gray-400"
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/arpita-dasgupta1999/",
      color: "hover:text-blue-400"
    },
    {
      icon: TwitterIcon,
      label: "Twitter",
      url: "https://x.com/ArpitaD76126184", 
      color: "hover:text-blue-300"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:dasguptaarpita1999@gmail.com",
      color: "hover:text-green-400"
    }
  ];

  
          return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        {/* Connect With Me Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Connect With Me</h3>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center space-y-2 p-6 rounded-2xl bg-card/50 border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 interactive-hover glow-on-hover ${social.color}`}
              >
                <social.icon className="h-8 w-8 transition-colors duration-300" />
                <span className="text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="interactive-hover glow-on-hover">
            <form 
           action= "https://formsubmit.co/dasguptaarpita1999@gmail.com"
            method="POST"
            className="space-y-6 p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold mb-2">Send Me a Message</h4>
                <p className="text-muted-foreground text-sm">Fill out the form below and I'll get back to you soon</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors duration-300"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors duration-300 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;