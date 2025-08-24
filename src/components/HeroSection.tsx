import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Mail, Phone, Globe, Linkedin, ArrowRight } from "lucide-react";
import profileImage from 'figma:asset/e0a8b8f4ccc271a77355b928b1a9a72afed849d9.png';

interface HeroSectionProps {
  onWorksClick: () => void;
}

export default function HeroSection({ onWorksClick }: HeroSectionProps) {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src={profileImage}
              alt="Joshua Abraham Renji - UX Designer"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
            Joshua Abraham Renji
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Product-focused UX Designer, turning complex problems into clear, usable experiences. Focused on designing seamless experiences built with empathy, one thoughtful decision at a time.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary">UX Research</Badge>
            <Badge variant="secondary">Wireframing</Badge>
            <Badge variant="secondary">Prototyping</Badge>
            <Badge variant="secondary">UI Design</Badge>
            <Badge variant="secondary">AI Tools for UX</Badge>
            <Badge variant="secondary">Cross-functional Collaboration</Badge>
          </div>

          <div className="mb-6">
            <Button 
              onClick={onWorksClick}
              className="mb-6"
            >
              View My Works
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="mailto:joshuarenji@gmail.com" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              joshuarenji@gmail.com
            </a>
            <a 
              href="tel:+918086885604" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 80868 85604
            </a>

            <a 
              href="https://linkedin.com/in/joshua-renji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}