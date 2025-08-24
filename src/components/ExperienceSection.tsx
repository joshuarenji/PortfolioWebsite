import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar, Users, Target } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "UX Analyst",
      company: "Fingent Global Solutions Pvt. Ltd",
      period: "July 2023 - Present",
      type: "Full-time",
      description: "Leading UX initiatives for AI-powered applications across multiple industries",
      achievements: [
        "Led UX for 5+ AI-powered applications across healthcare, insurance, and logistics",
        "Designed intuitive interfaces for low-literacy users in waste management systems",
        "Owned solutioning and UI/UX strategy in complex domains like health data analysis",
        "Delivered end-to-end user flows for AI-driven clinical data insights"
      ],
      skills: ["UX Strategy", "AI-powered UX", "Healthcare", "Insurance", "Logistics"]
    }
  ];

  const keyProjects = [
    {
      title: "Warehouse Management System",
      description: "Designed web wireframes, wrote user stories, and facilitated problem-solving with developers",
      category: "Enterprise"
    },
    {
      title: "Waste Management Dashboard", 
      description: "Created dashboard for impact visualization and tablet apps for low-literacy users",
      category: "Social Impact"
    },
    {
      title: "Health Monitoring Platform",
      description: "UX lead for AI-driven clinical data insights with comprehensive user flows",
      category: "Healthcare"
    },
    {
      title: "Event Management Tool",
      description: "Led ideation, SharePoint UI design, and system workflow optimization",
      category: "Enterprise"
    },
    {
      title: "Insurance Estimation Platform",
      description: "Conducted domain research and designed AI-based damage detection interfaces",
      category: "Insurance"
    },
    {
      title: "Brand Store Builder",
      description: "Developed high-fidelity wireframes for e-commerce brand microsite creation",
      category: "E-commerce"
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Professional Experience</h2>

        </div>

        {/* Current Role */}
        <div className="mb-12">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {experiences[0].title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {experiences[0].company}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {experiences[0].period}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{experiences[0].description}</p>
              
              <div className="mb-4">
                <h4 className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experiences[0].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {experiences[0].skills.map((skill, index) => (
                  <Badge key={index} variant="outline">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Projects */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5" />
            <h3 className="text-2xl">Key Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyProjects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Workshop */}
        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <h4 className="mb-2">Workshop Leadership</h4>
              <p className="text-sm text-muted-foreground">
                Conducted 2 internal workshops on leveraging AI in UX analysis and daily design workflows, 
                equipping team members with practical techniques to enhance efficiency and decision-making.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}