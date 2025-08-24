import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface WorksProps {
  onBack: () => void;
  onProjectSelect: (projectId: string) => void;
}

const projects = [
  {
    id: 'insurance-estimation',
    title: 'Insurance Estimation Platform',
    description: 'A unified web and mobile platform that streamlines insurance claim management, claim estimation and damage assessment'
  },
  {
    id: 'event-inventory',
    title: 'Event Inventory Logistics Tool',
    description: 'A comprehensive event inventory system built from client pitch idea to final live asset management application'
  },
  {
    id: 'mall-waste-tracking',
    title: 'Mall Waste Tracking System',
    description: 'A waste collection and inventory system designed to track all domestic trash and recycling and an easy-to-use app for ground staff'
  },
  {
    id: 'field-sales-app',
    title: 'Field Sales App for Healthcare Supply',
    description: 'A mobile application designed to automate equipment and equipment management for field agents visiting hospitals, pharmacies, and clinics'
  }
];

export default function Works({ onBack, onProjectSelect }: WorksProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl mb-6">Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of UX design projects showcasing user-centered solutions across various industries and platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  onClick={() => onProjectSelect(project.id)}
                  className="w-full sm:w-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {project.id === 'insurance-estimation' ? 'View Case Study' : 'View Project'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="text-center mt-16">
          <Button onClick={onBack} variant="outline" size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}