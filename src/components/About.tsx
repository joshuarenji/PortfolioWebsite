import { Mail, Linkedin } from "lucide-react";
import festivalPhoto from 'figma:asset/6a3fe1d139e4e95b27b24416bdd604776e3e896b.png';
import kayakPhoto from 'figma:asset/552870877c09a14ac798ee94026b53c70459e7e2.png';
import cricketPhoto from 'figma:asset/7da2f5173a00cb1896c3c01e0b7403e822a7feab.png';
import tokyoPortrait from 'figma:asset/378480af2f909ba4d147dff14d9206e9351fa4ca.png';
import tokyoCricket from 'figma:asset/21516ca9a65571202e9b87c9977b5c1ab0c60e2a.png';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl mb-8">About</h1>
        </div>
        
        {/* Introduction with side image */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed">
              Hi, I'm Joshua Abraham Renji, a UX Analyst from Kochi, Kerala, focused on creating user-first, 
              purposeful digital experiences. Currently part of the Project Management Office (PMO) at Fingent, 
              where I've designed and supported enterprise experiences across healthcare, logistics and AI-driven 
              platforms.
            </p>
            
            <p className="text-lg leading-relaxed">
              I've always been drawn to clean, intuitive interfaces, and that curiosity naturally led me to UX. I enjoy 
              solving real problems through design, focusing not just on aesthetics, but on what matters most - ease 
              of use and crafting the right experience for the right people.
            </p>
          </div>
          
          {/* Post Malone Festival Photo */}
          <div className="md:col-span-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={festivalPhoto} 
                alt="Joshua at a music festival wearing a Post Malone t-shirt" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Post Malone vibes at a music festival
            </p>
          </div>
        </div>

        {/* Tools & Process section with cricket photo */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Cricket Photo */}
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={cricketPhoto} 
                alt="Joshua with a friend at a cricket stadium during World Cup 2023" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              World Cup 2023 - Supporting Team India!
            </p>
          </div>
          
          <div className="md:col-span-3 space-y-6 order-1 md:order-2">
            <p className="text-lg leading-relaxed">
              I primarily work in Figma, using it to create intuitive interfaces, streamline user flows, and collaborate 
              closely with developers and stakeholders. And honestly, AI has become one of my strongest allies in 
              everything from ideation to documentation.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not designing, you'll probably find me playing cricket (loyal RCB fan), watching a Barca 
              game, or jamming to Post Malone. I also play the drums and guitar. Music is my escape and a big part 
              of who I am.
            </p>
          </div>
        </div>

        {/* Personal life section with kayak photo centered */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-lg leading-relaxed mb-8">
              Whether it's exploring nature, trying new adventures, or just enjoying quiet moments, life's about finding balance 
              between work and the things that truly matter.
            </p>
          </div>
          
          {/* Kayak Photo - centered */}
          <div className="max-w-md mx-auto">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={kayakPhoto} 
                alt="Joshua kayaking on a scenic river" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Finding peace on the water
            </p>
          </div>
        </div>

        {/* Dog photos section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl mb-4">Meet Tokyo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              I also have a golden retriever named Tokyo, who brings joy and chaos in equal measure. He's basically my co-designer (when he's not stealing my socks) and my loyal companion through all of life's adventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={tokyoPortrait} 
                  alt="Tokyo the golden retriever sitting and looking at camera with his name tag visible" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Tokyo showing off his name tag
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={tokyoCricket} 
                  alt="Joshua and Tokyo watching cricket together, both wearing matching RCB jerseys" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Cricket buddies in matching jerseys!
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Links */}
        <div className="flex justify-center gap-8 pt-8 border-t border-border">
          <a 
            href="https://linkedin.com/in/joshua-renji" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:joshuarenji@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        {/* Name */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">Joshua Abraham Renji</p>
        </div>
      </div>
    </div>
  );
}