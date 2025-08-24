import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Palette, Search, Users, Zap } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Research & Strategy",
      description: "Understanding users and solving complex problems",
      skills: ["UX Research", "Domain Research", "Problem Solving", "User-Centered Design"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & Prototyping", 
      description: "Creating intuitive and engaging experiences",
      skills: ["Wireframing (Lo-Fi & Hi-Fi)", "UI Design", "Prototyping", "Visual Design"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Innovation",
      description: "Leveraging AI tools for enhanced UX workflows",
      skills: ["AI Tools for UX", "Innovation", "Design Automation", "Workflow Optimization"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working effectively across teams and stakeholders",
      skills: ["Cross-Team Coordination", "Clear Communication", "Stakeholder Management", "Client Relations"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Project Management",
      description: "Delivering results efficiently and on time",
      skills: ["Time Management", "Project Planning", "Workshop Facilitation", "Process Improvement"]
    }
  ];



  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Skills & Expertise</h2>

        </div>

        {/* Core Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>



        {/* Education */}

      </div>
    </section>
  );
}