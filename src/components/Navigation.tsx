import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Home, User, Code, FolderOpen, Mail,  LinkedinIcon, FileText, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navIcons = [
    { icon: Home, href: "#home", label: "Home" },
    { icon: User, href: "#about", label: "About" },
    { icon: Code, href: "#skills", label: "Skills" },
    { icon: FolderOpen, href: "#projects", label: "Projects" },
    { icon: Mail, href: "#contact", label: "Contact" },
    
  ];

  const socialLinks = [
    
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { icon: FileText, href: "#", label: "Resume" },
  ];

  return (
    <>
      {/* Centered Icon Navigation - Only Desktop */}
<nav 
  className={`hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
    scrolled ? "top-2" : "top-4"
  }`}
>
  <div className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 ${
    scrolled 
      ? "bg-background/90 backdrop-blur-md border border-border/50 shadow-lg" 
      : "bg-background/20 backdrop-blur-sm border border-border/20"
  }`}>
    {navIcons.map((item) => (
      <a
        key={item.label}
        href={item.href}
        className="relative group p-3 rounded-full transition-all duration-300 hover:bg-primary/10"
        aria-label={item.label}
      >
        <item.icon 
          size={20} 
          className="text-foreground/70 group-hover:text-primary transition-colors duration-300" 
        />
        
        {/* Tooltip */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-background/90 border border-border/50 rounded text-xs text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          {item.label}
        </div>
      </a>
    ))}
  </div>
</nav>

{/* Mobile Menu Button */}
<Button
  variant="ghost"
  size="sm"
  className="fixed top-4 right-4 z-50 md:hidden bg-background/20 backdrop-blur-sm border border-border/20 hover:bg-background/40"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={20} /> : <Menu size={20} />}
</Button>


      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="relative flex flex-col items-center justify-center h-full space-y-8">
            {navIcons.slice(0, 5).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center space-y-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={24} />
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-border/50">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-foreground/60 hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;