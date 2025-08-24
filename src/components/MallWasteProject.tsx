import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, Target, Users, Clock, CheckCircle2, Lightbulb, TrendingUp, Leaf, Shield, BarChart3, Smartphone, Wifi } from "lucide-react";
import dashboardScreen from 'figma:asset/16a673f27ce93aaf89760397487a2003d6a1d9b0.png';
import analyticsScreen from 'figma:asset/b823cfe5ff1c9f8c086a1d77fdc3606bab0823cb.png';
import managementScreen from 'figma:asset/81359a0148a6de41e46fd0771a3d0352fbdb2ced.png';
import nfcTabletScreen from 'figma:asset/982cef2213f7c49e928d30e9a5ebd265580d6f93.png';
import categoryTabletScreen from 'figma:asset/da3306b71e0e5d2b6ef6169f3c0ae0904387de03.png';
import weightTabletScreen from 'figma:asset/dcc90294b1ee518127b805c23d504871f097505a.png';

interface MallWasteProjectProps {
  onBack: () => void;
}

export default function MallWasteProject({ onBack }: MallWasteProjectProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Works
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>Web Application</Badge>
            <Badge>Tablet App</Badge>
            <Badge>Waste Management</Badge>
            <Badge>Sustainability</Badge>
            <Badge>IoT Integration</Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl mb-6">Mall Waste Tracking System</h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A waste management web and app that tracks waste change tracking for mall, park, and retail 
            locations to help to reduce cost and achieve sustainability targets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Role</h4>
              <p>UX Designer</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Platform</h4>
              <p>Web & Tablet App</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Industry</h4>
              <p>Waste Management</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Focus</h4>
              <p>Sustainability & Analytics</p>
            </div>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-destructive" />
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Retail locations, malls, and parks lacked comprehensive waste tracking systems to monitor disposal patterns, 
                optimize collection routes, and meet sustainability targets. Traditional methods provided limited visibility 
                into waste generation trends and compliance reporting across multiple locations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Developed a comprehensive dual-platform solution featuring a web application for management oversight and 
                analytics, paired with a tablet app for field operations. The system provides real-time waste tracking, 
                automated compliance monitoring, and data-driven insights to reduce costs and achieve sustainability goals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Web App Highlights */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Web App Highlights
              </CardTitle>
              <CardDescription>Comprehensive management platform for waste tracking and analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Clean State Data Handling</h4>
                      <p className="text-sm text-muted-foreground">
                        Developed methods that connected to back-end services that would work well with this particular waste management app
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">24/7 Support & Data Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        The platform features 24/7 support, data analytics, with cloud storage that would access multiple management locations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Real-time Reports and Custom Dashboards</h4>
                      <p className="text-sm text-muted-foreground">
                        Developed real-time reporting and custom dashboards to monitor waste outputs efficiently by location category and timeframe
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Compliance for Large Scale Operations</h4>
                      <p className="text-sm text-muted-foreground">
                        Designed automated compliance system that would monitor the app to ensure consistent with waste management regulations
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Multiple Reports Format</h4>
                      <p className="text-sm text-muted-foreground">
                        Designed automated reports that could be exported in multiple formats (PDF, Excel, CSV) to meet diverse reporting requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Web App Screens & UX Decisions */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Key Web App Screens & UX Decisions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web application interface showcasing analytics dashboards, sustainability tracking, and facility management for the Oasis Mall of Dreams.
            </p>
          </div>

          <div className="space-y-8">
            {/* Combined Dashboard Screens */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Analytics Dashboard - Low to High Fidelity Evolution</CardTitle>
                <CardDescription>
                  Comprehensive overview showing the progression from initial wireframe to polished interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="text-sm mb-2 text-muted-foreground">Low-Fidelity Version</h4>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img 
                        src={dashboardScreen}
                        alt="Low-fidelity dashboard showing basic layout structure with key metrics and chart placeholders"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm mb-2 text-muted-foreground">High-Fidelity Version</h4>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img 
                        src={analyticsScreen}
                        alt="High-fidelity dashboard with detailed charts, refined typography, and complete visual design"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>UX Decision:</strong> The dashboard evolved from a functional low-fidelity wireframe focusing on information architecture 
                  to a polished high-fidelity interface with enhanced data visualization. Both versions maintain the core structure of key performance indicators 
                  (Total Waste tracking, Recyclable vs Non-Recyclable breakdown), but the high-fidelity version adds sophisticated charting, 
                  refined visual hierarchy, and comprehensive sustainability metrics including environmental impact calculations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h5 className="text-sm">Design Evolution Features:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Progressive enhancement from wireframe to production-ready interface</li>
                      <li>• Consistent data structure maintained throughout design phases</li>
                      <li>• Enhanced visual storytelling with charts and progress indicators</li>
                      <li>• Sustainability impact metrics prominently featured</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm">Key Dashboard Elements:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Time-filtered data views (Today, This Month, This Year)</li>
                      <li>• Waste category breakdowns with visual representations</li>
                      <li>• Top tenant performance rankings and insights</li>
                      <li>• Environmental impact calculations and achievements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Management Interface Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Facility Management Interface</CardTitle>
                <CardDescription>
                  Complete facility oversight with tenant management, waste categories, and room-specific tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <img 
                    src={managementScreen}
                    alt="Facility management screen showing mall details, tenant management, waste categories, garbage rooms, and waste tray tracking"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>UX Decision:</strong> Developed a comprehensive facility management interface that combines location details (Oasis Mall of Dreams, Abu Dhabi, UAE) 
                  with operational management tools. The design features tabbed navigation (Tenants/Waste Management), detailed waste category tracking with quantities, 
                  garbage room management with device assignments (PLT 10 M ECON, T21.01), and individual waste tray monitoring. 
                  The interface effectively handles complex multi-level data organization while maintaining operational efficiency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h5 className="text-sm">Management Features:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Complete facility profile with contact information and status</li>
                      <li>• Waste category management with quantities and thresholds</li>
                      <li>• Room-specific tracking with device integration</li>
                      <li>• Multi-category waste type assignment per location</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm">Operational Tools:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Real-time status monitoring (Active/Inactive)</li>
                      <li>• Device integration with weighing systems</li>
                      <li>• Individual waste tray tracking and management</li>
                      <li>• Action-oriented interface with add/manage capabilities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tablet App Highlights - Now positioned after Web App Screens */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Tablet App Highlights
              </CardTitle>
              <CardDescription>Field-optimized mobile solution for on-site waste tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">Optimized Inventory Tracking for Field Use</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating UI/UX to track at the location with any basic requirements for internet connectivity
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">NFC-Based Administration</h4>
                    <p className="text-sm text-muted-foreground">
                      Designed system which has NFC authentication system to be able to efficiently process waste tracking over multiple locations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">Multiple Facility Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Prepared workflow that would work for thousands of waste locations and/or systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">Data Syncing Capabilities</h4>
                    <p className="text-sm text-muted-foreground">
                      Built automated data synchronization between field collection to their systems into system automatically upload it back
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Tablet App Screens & UX Decisions */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Key Tablet App Screens & UX Decisions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Field-optimized tablet interface designed for efficient on-site waste tracking with NFC authentication, category selection, and IoT scale integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* NFC Authentication Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">1. NFC Authentication</CardTitle>
                <CardDescription className="text-sm">
                  Secure field authentication using NFC technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-3">
                  <img 
                    src={nfcTabletScreen}
                    alt="Tablet NFC authentication screen showing tap interface for NFC card authentication with connection status to PLT 10 M device"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>UX Decision:</strong> Designed a clean, focused authentication interface that prominently displays the NFC card interaction area with clear connection status (Connected to PLT 10 M) and user identification.
                </p>

                <div className="space-y-1">
                  <h5 className="text-xs">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Large, clear NFC tap interface</li>
                    <li>• Real-time connection status</li>
                    <li>• User identification display</li>
                    <li>• Simplified authentication flow</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Waste Category Selection Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">2. Category Selection</CardTitle>
                <CardDescription className="text-sm">
                  Comprehensive category selection with workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-3">
                  <img 
                    src={categoryTabletScreen}
                    alt="Tablet waste category selection screen showing 9 waste categories in grid layout with search functionality and progress indicator"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>UX Decision:</strong> Created a three-step workflow interface with clear progress indication and a 3x3 grid of waste types with search functionality for quick access.
                </p>

                <div className="space-y-1">
                  <h5 className="text-xs">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Clear 3-step workflow tracking</li>
                    <li>• 9 comprehensive categories</li>
                    <li>• Search functionality</li>
                    <li>• Touch-optimized buttons</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Weight Confirmation Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">3. Weight & IoT Integration</CardTitle>
                <CardDescription className="text-sm">
                  Automated weight capture from connected scales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-3">
                  <img 
                    src={weightTabletScreen}
                    alt="Tablet weight confirmation screen showing automated weight data from PLT 10 M scale with category confirmation and final weight calculation"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>UX Decision:</strong> Designed the final workflow step to display automated weight capture from the connected IoT scale with real-time measurement, automatic tray weight deduction, and calculated final weight.
                </p>

                <div className="space-y-1">
                  <h5 className="text-xs">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Real-time weight data from IoT scale</li>
                    <li>• Automatic tare weight calculation</li>
                    <li>• Category confirmation display</li>
                    <li>• Final confirmation workflow</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Design Process & Key Learnings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Design Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Analyzed current waste management practices across retail and public spaces
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Designed dual-platform approach for management oversight and field operations
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Integrated compliance monitoring and automated reporting systems
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Optimized tablet interface for NFC authentication and IoT integration
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                Key Learnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Field applications require robust offline functionality and efficient workflows
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  NFC authentication significantly improves field workflow efficiency and security
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  IoT scale integration ensures data accuracy while reducing manual entry errors
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Multi-location management demands scalable architecture and automated compliance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Project Impact */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Project Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="mb-2">Cost Reduction</h4>
                <p className="text-sm text-muted-foreground">
                  Optimized waste collection routes and disposal patterns to reduce operational costs
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="mb-2">Sustainability Goals</h4>
                <p className="text-sm text-muted-foreground">
                  Enabled data-driven decisions to achieve environmental targets and compliance
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="mb-2">Scalable Solution</h4>
                <p className="text-sm text-muted-foreground">
                  Designed to support thousands of locations with automated data synchronization
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button onClick={onBack} size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Works
          </Button>
        </div>
      </div>
    </div>
  );
}