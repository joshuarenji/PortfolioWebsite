import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, Eye } from "lucide-react";

interface WorksPreviewProps {
  onWorksClick: () => void;
  onProjectSelect: (projectId: string) => void;
}

const featuredProjects = [
  {
    id: 'insurance-estimation',
    title: 'Insurance Estimation Platform',
    description: 'A unified web and mobile platform that streamlines insurance claim management, claim estimation and damage assessment',
    type: 'Case Study'
  },
  {
    id: 'event-inventory',
    title: 'Event Inventory Logistics Tool',
    description: 'A comprehensive event inventory system built from client pitch idea to final live asset management application',
    type: 'Project'
  }
];

export default function WorksPreview({ onWorksClick, onProjectSelect }: WorksPreviewProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Featured Works</h2>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                    {project.type}
                  </span>
                </div>
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-md mx-auto mb-6">
            <h3 className="text-xl mb-2">Want to see more?</h3>
            <p className="text-muted-foreground">
              Explore more of my projects including mobile apps, dashboards, and enterprise solutions.
            </p>
          </div>
          <Button 
            onClick={onWorksClick} 
            size="lg"
            className="group"
          >
            <Eye className="w-4 h-4 mr-2" />
            View All Works
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}