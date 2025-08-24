import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onWorksClick: () => void;
}

export default function CTASection({ onWorksClick }: CTASectionProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl mb-6">
          Ready to See My Work?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore my collection of UX design projects, including detailed case studies and process documentation that showcase user-centered design solutions.
        </p>
        <Button 
          onClick={onWorksClick}
          size="lg"
          className="text-lg px-8 py-6 h-auto"
        >
          View My Works
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
}