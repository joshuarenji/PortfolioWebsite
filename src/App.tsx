import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import WorksPreview from "./components/WorksPreview";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Works from "./components/Works";
import About from "./components/About";
import CaseStudy from "./components/CaseStudy";
import EventInventoryProject from "./components/EventInventoryProject";
import MallWasteProject from "./components/MallWasteProject";
import FieldSalesProject from "./components/FieldSalesProject";

type ViewType = 'portfolio' | 'works' | 'about' | 'insurance-estimation' | 'event-inventory' | 'mall-waste-tracking' | 'field-sales-app';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('portfolio');

  const handleWorksClick = () => {
    setCurrentView('works');
  };

  const handleAboutClick = () => {
    setCurrentView('about');
  };

  const handleNameClick = () => {
    setCurrentView('portfolio');
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
  };

  const handleBackToWorks = () => {
    setCurrentView('works');
  };

  const handleProjectSelect = (projectId: string) => {
    setCurrentView(projectId as ViewType);
  };

  // Render different views based on current state
  if (currentView === 'works') {
    return (
      <div className="min-h-screen bg-background">
        <Header onWorksClick={handleWorksClick} onAboutClick={handleAboutClick} onNameClick={handleNameClick} currentView={currentView} />
        <Works onBack={handleBackToPortfolio} onProjectSelect={handleProjectSelect} />
      </div>
    );
  }

  if (currentView === 'about') {
    return (
      <div className="min-h-screen bg-background">
        <Header onWorksClick={handleWorksClick} onAboutClick={handleAboutClick} onNameClick={handleNameClick} currentView={currentView} />
        <About />
      </div>
    );
  }

  if (currentView === 'insurance-estimation') {
    return (
      <div>
        <CaseStudy onBack={handleBackToWorks} />
      </div>
    );
  }

  if (currentView === 'event-inventory') {
    return (
      <div>
        <EventInventoryProject onBack={handleBackToWorks} />
      </div>
    );
  }

  if (currentView === 'mall-waste-tracking') {
    return (
      <div>
        <MallWasteProject onBack={handleBackToWorks} />
      </div>
    );
  }

  if (currentView === 'field-sales-app') {
    return (
      <div>
        <FieldSalesProject onBack={handleBackToWorks} />
      </div>
    );
  }

  // Default portfolio view
  return (
    <div className="min-h-screen bg-background">
      <Header onWorksClick={handleWorksClick} onAboutClick={handleAboutClick} onNameClick={handleNameClick} currentView={currentView} />
      <main>
        <HeroSection onWorksClick={handleWorksClick} />
        <SkillsSection />
        <WorksPreview onWorksClick={handleWorksClick} onProjectSelect={handleProjectSelect} />
        <ExperienceSection />
        <EducationSection />
      </main>
      <Footer onWorksClick={handleWorksClick} onAboutClick={handleAboutClick} />
    </div>
  );
}