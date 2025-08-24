import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, Target, Users, Clock, CheckCircle2, Lightbulb, TrendingUp } from "lucide-react";
import jobModuleOverview from 'figma:asset/1c8501428e3e014b98f34d07a97cc4a4d02b5621.png';
import jobModuleDetails from 'figma:asset/6b4b6c48800d20afd06403311c077ca875b2ee8c.png';
import crmModuleScreen from 'figma:asset/0a1066c0f7d381f5b0e7451929a7920c6af42d67.png';
import schedulerModuleScreen from 'figma:asset/e9a9a5be66ad1a99d3dd28640da61d5b2268880f.png';
import inspectorAppHome from 'figma:asset/d66ce13955569960b9bfdd99e6c7a4360b4c82b5.png';
import inspectorAppJobs from 'figma:asset/a0b22e78c64450dbc2ad2d4b69fa4ad23320649a.png';
import inspectorAppDetails from 'figma:asset/43569122e254f2b465cb1a08863daea2e987b3d1.png';

interface CaseStudyProps {
  onBack: () => void;
}

export default function CaseStudy({ onBack }: CaseStudyProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Works
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>UX Research</Badge>
            <Badge>UI Design</Badge>
            <Badge>Insurance Technology</Badge>
            <Badge>Enterprise Platform</Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl mb-6">Insurance Estimation Platform</h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A comprehensive B2B platform designed to streamline insurance claim estimation processes, 
            enabling efficient damage assessment and accurate claim calculations for insurance professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Role</h4>
              <p>UX Analyst & Designer</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Duration</h4>
              <p>6 months</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Team</h4>
              <p>35 members</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Industry</h4>
              <p>Insurance Technology</p>
            </div>
          </div>
        </div>

        {/* Problem & Goal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-destructive" />
                The Problem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Homeowners and residents needed a streamlined way to get quick and accurate insurance estimates for property damage claims. 
                The challenge was creating a platform that could seamlessly coordinate between adjusters, field inspectors, and 
                administrative staff to deliver precise insurance calculations directly to property owners - from initial job creation and 
                customer management to field inspections and final estimation reports.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Design an integrated platform that streamlines the entire insurance estimation workflow, from initial job creation 
                to final claim settlement, while providing clear visibility and coordination tools for all stakeholders involved 
                in the process.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* User Insights & My Role */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                User Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Insurance adjusters needed quick access to claim details and damage assessments
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Field inspectors required mobile-friendly interfaces for on-site documentation
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Administrative staff needed comprehensive scheduling and coordination tools
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  All users demanded better visibility into claim status and progress tracking
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                My Role
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Conducted comprehensive domain research on insurance workflows
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Designed user experience for AI-based damage detection interfaces
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Created wireframes and prototypes for all platform modules
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Collaborated closely with development team for implementation
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Research & Discovery */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Research & Discovery</CardTitle>
              <CardDescription>Understanding the insurance estimation ecosystem</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Through extensive domain research and stakeholder interviews, I identified the complex workflow challenges 
                in insurance claim processing. The research revealed critical pain points in coordination between different 
                roles and the need for a unified platform that could handle everything from job management to final estimation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="mb-2">Key Finding #1</h4>
                  <p className="text-sm text-muted-foreground">
                    70% of time was lost in coordination between adjusters and field inspectors
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="mb-2">Key Finding #2</h4>
                  <p className="text-sm text-muted-foreground">
                    Manual damage assessment led to 30% variance in estimation accuracy
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="mb-2">Key Finding #3</h4>
                  <p className="text-sm text-muted-foreground">
                    Lack of real-time updates caused delays in claim processing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Modules Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Key Modules & UX Decisions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The platform consists of four core modules, each designed to address specific user needs and workflow requirements.
            </p>
          </div>

          {/* Job Module with actual screens */}
          <div className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle>1. Job Module</CardTitle>
                <CardDescription>
                  Centralized job creation and management system for insurance claims
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Jobs Overview Screen */}
                  <div>
                    <h4 className="mb-4">Jobs Dashboard & Overview</h4>
                    <div className="rounded-lg overflow-hidden border border-border mb-4">
                      <img 
                        src={jobModuleOverview}
                        alt="Jobs Module - Dashboard overview showing job statistics and list"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>UX Decision:</strong> Designed a comprehensive dashboard that immediately shows key metrics (Total Open Jobs, Inspection Jobs, Estimation Jobs) 
                      with visual icons for quick recognition. The table layout prioritizes essential information while maintaining scannability with clear status indicators and sortable columns.
                    </p>
                  </div>

                  {/* Job Details Screen */}
                  <div>
                    <h4 className="mb-4">Detailed Job Management</h4>
                    <div className="rounded-lg overflow-hidden border border-border mb-4">
                      <img 
                        src={jobModuleDetails}
                        alt="Jobs Module - Detailed job view with tabs for Overview, Files, Notes, and Activity"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>UX Decision:</strong> Created a tabbed interface (Overview, Files, Notes, Activity) to organize complex job information without overwhelming users. 
                      The progress stepper at the top provides clear visual feedback on job status, while the two-column layout efficiently presents customer details, 
                      property information, and insurance details in digestible sections.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="mb-3">Key UX Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Visual status indicators with color coding for immediate recognition
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Progressive disclosure through tabbed interface to reduce cognitive load
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Clear information hierarchy with role-based task assignment
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Comprehensive search and filter capabilities for large datasets
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. CRM Module</CardTitle>
                <CardDescription>
                  Customer relationship management tailored for insurance workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="mb-4">Organization & Job Management Interface</h4>
                  <div className="rounded-lg overflow-hidden border border-border mb-4">
                    <img 
                      src={crmModuleScreen}
                      alt="CRM Module - Organization view for Pinnacle Assurance Group with job tracking and management"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>UX Decision:</strong> Designed a contextualized CRM view that combines organization details with job tracking. 
                    The interface prominently displays key client information (Pinnacle Assurance Group) at the top, followed by 
                    performance metrics (Total Open/Complete Jobs) for immediate visibility into workload and progress.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="mb-3">Key UX Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Organization-centric view with comprehensive contact details and business classification
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Real-time job metrics displayed as cards for quick performance assessment
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Multi-tab navigation (Jobs, Contacts, Property Owner) for organized information access
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Advanced search functionality spanning job numbers, names, contacts, and locations
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Status-based job categorization with visual indicators for workflow management
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Comprehensive job table with critical information: contact details, locations, timestamps, and job types
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Scheduler Module</CardTitle>
                <CardDescription>
                  Calendar-driven scheduling system for coordinating inspector assignments and job planning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="mb-4">Calendar-Based Scheduling Interface</h4>
                  <div className="rounded-lg overflow-hidden border border-border mb-4">
                    <img 
                      src={schedulerModuleScreen}
                      alt="Scheduler Module - Calendar view with inspector scheduling and job management for January 2025"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>UX Decision:</strong> Designed a month-view calendar as the primary interface to provide administrators with immediate visibility 
                    into inspector availability and job distribution. The color-coded appointment blocks (green for completed, red for pending) enable 
                    quick status recognition, while the inspector dropdown allows for resource-specific view filtering. The right sidebar consolidates 
                    all unscheduled jobs in a prioritized queue, creating an efficient drag-and-drop workflow for assignment planning.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="mb-3">Key UX Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Month-view calendar with clear visual hierarchy showing all scheduled appointments at a glance
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Inspector-specific filtering through dropdown selection to focus on individual workloads
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Color-coded status system (green/red) for immediate recognition of job completion status
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Dedicated "Jobs to be Scheduled" sidebar panel displaying unassigned work with key details
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Search functionality within unscheduled jobs to quickly locate specific assignments
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Compact job cards showing essential information: job number, property details, location, and assigned inspector
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Geographic awareness with location details to optimize inspector routing and reduce travel time
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Priority indicators ("New" badges) to highlight urgent or recently created job assignments
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Inspector App</CardTitle>
                <CardDescription>
                  Mobile-first application for field inspectors with comprehensive job management and damage assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="mb-4">Mobile Inspector Interface - Three Core Screens</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img 
                        src={inspectorAppHome}
                        alt="Inspector App - Home dashboard showing job metrics and quick actions"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img 
                        src={inspectorAppJobs}
                        alt="Inspector App - Jobs list view with current and upcoming assignments"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img 
                        src={inspectorAppDetails}
                        alt="Inspector App - Detailed job view with damage assessment and customer information"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>UX Decision:</strong> Designed a mobile-first experience optimized for field work. The home screen provides immediate job metrics and quick actions, 
                    the jobs list offers tabbed filtering for different job states, and the detail view consolidates all necessary information for on-site inspections. 
                    The interface prioritizes one-handed use with large touch targets and clear information hierarchy suitable for outdoor conditions.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="mb-3">Key UX Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Dashboard with at-a-glance job metrics (Today's Jobs, Upcoming, Overdue, Pending Schedule) for immediate workload assessment
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Quick job search functionality accessible from the home screen for rapid job lookup
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      "Resume current job" feature to quickly return to in-progress inspections
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Tabbed job organization (Current, Overdue, Upcoming, Pending Schedule) for efficient task management
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Comprehensive job details including damage assessment, customer information, and property details in a single view
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Progressive disclosure through tabbed interface (Overview, Files, Notes, Activity) to manage information complexity
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      Prominent "Start Inspection" button positioned for easy thumb access during field work
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      High contrast design elements and readable typography optimized for outdoor viewing conditions
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  40% reduction in claim processing time through streamlined workflows
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  60% improvement in estimation accuracy with AI-powered damage detection
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  Enhanced coordination between adjusters, inspectors, and administrative staff
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  Improved user satisfaction across all stakeholder groups
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                What I Learned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Deep domain knowledge is crucial for designing effective enterprise solutions
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  AI integration requires careful balance between automation and user control
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Cross-functional collaboration is essential for complex B2B platforms
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Mobile-first design considerations are critical for field operations
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
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