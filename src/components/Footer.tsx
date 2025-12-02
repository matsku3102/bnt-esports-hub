import { Twitter, Youtube, Instagram, Twitch, Mail } from "lucide-react";

const socialLinks = [
  //{ icon: Twitter, label: "Twitter", href: "#" },
  //{ icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bnt_esport_/" },
  //{ icon: Twitch, label: "Twitch", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-bold">
              <span className="text-gradient-cyber">BNT</span>
            </h3>
            <p className="text-muted-foreground">
              A team defined by action, powered by passion, and ready to shape the future of esports.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-bold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#gaming-house" className="text-muted-foreground hover:text-primary transition-colors">
                Gaming House
              </a>
              <a href="#join" className="text-muted-foreground hover:text-primary transition-colors">
                Join Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-bold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-muted hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            <a 
              href="mailto:contact@bntesports.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>contact@bntesports.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BNT Esports. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20" />
    </footer>
  );
};

export default Footer;
