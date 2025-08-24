import { Button } from "./ui/button";

type ViewType = 'portfolio' | 'works' | 'about' | 'insurance-estimation' | 'event-inventory' | 'mall-waste-tracking' | 'field-sales-app';

interface HeaderProps {
  onWorksClick: () => void;
  onAboutClick?: () => void;
  onNameClick: () => void;
  currentView: ViewType;
}

export default function Header({ onWorksClick, onAboutClick, onNameClick, currentView }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            onClick={onNameClick}
            className="p-0 hover:bg-transparent"
          >
            <span className="text-lg">Joshua</span>
          </Button>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Button 
            variant="ghost" 
            onClick={onWorksClick}
            className={currentView === 'works' ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
          >
            Works
          </Button>
          <Button 
            variant="ghost" 
            onClick={onAboutClick}
            className={currentView === 'about' ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
          >
            About
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => window.open('https://drive.google.com/file/d/1aeTvAmDI5iexVxeU66xnq5qV5TsNLoRe/view?usp=sharing', '_blank')}
            className="text-muted-foreground hover:text-foreground"
          >
            Resume
          </Button>
        </nav>
      </div>
    </header>
  );
}