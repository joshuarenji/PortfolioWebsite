import { Mail, Phone, Linkedin, Guitar, Users } from "lucide-react";

interface FooterProps {
  onWorksClick?: () => void;
  onAboutClick?: () => void;
}

export default function Footer({ onWorksClick, onAboutClick }: FooterProps) {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:joshuarenji@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                joshuarenji@gmail.com
              </a>
              <a 
                href="tel:+918086885604"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 80868 85604
              </a>

              <a 
                href="https://linkedin.com/in/joshua-renji" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Portfolio Sections</h3>
            <div className="space-y-3">
              <button 
                onClick={onWorksClick}
                className="block text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Works
              </button>
              <button 
                onClick={onAboutClick}
                className="block text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
            </div>
          </div>

          {/* Personal */}
          <div>
            <h3 className="mb-4">Beyond Design</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Users className="w-4 h-4" />
                Cricket (School & College Team)
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Guitar className="w-4 h-4" />
                Music (Guitar, Drums)
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                "Driven to create meaningful, user-centered experiences that deliver real impact across industries."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Joshua Abraham Renji. Designed with passion for great user experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}