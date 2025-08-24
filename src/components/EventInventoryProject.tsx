import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, Target, Users, Clock, CheckCircle2, Lightbulb, TrendingUp, Package, Truck, Database } from "lucide-react";
import warehouseMainScreen from 'figma:asset/e5c10921ce60e2c9b9edaf1413cd6b8520df950a.png';
import pullJobsScreen from 'figma:asset/9946874d992b4b97a1c7b72594702e8f994ae110.png';
import prepJobsScreen from 'figma:asset/626024a09e3a391563013048318ff45108106ecd.png';
import loadOutScreen from 'figma:asset/43c6f8f9a2c47806a2190129254e0b87fa55ae27.png';
import loadInScreen from 'figma:asset/a759adfbf7919ade6b8de823c9e8eef025ab806b.png';
import warehouseReturnScreen from 'figma:asset/eef8f9ba797cf75dab8bd9ae3709faa572e39faf.png';

interface EventInventoryProjectProps {
  onBack: () => void;
}

export default function EventInventoryProject({ onBack }: EventInventoryProjectProps) {
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
            <Badge>Inventory Management</Badge>
            <Badge>Logistics Platform</Badge>
            <Badge>Enterprise Solution</Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl mb-6">Event Inventory Logistics Tool</h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A web platform built to manage event events through every lifecycle stage. From pick, prep, and quality 
            checks to load in, return, and restock.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Role</h4>
              <p>UX Designer</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Platform</h4>
              <p>Web Application</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Industry</h4>
              <p>Event Logistics</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Focus</h4>
              <p>Inventory Management</p>
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
                The low challenge was replacing an outdated way of tracking complex/heavy inventory management in real time. 
                Designing a cohesive end-to-end workflow for high value complex lifecycle management that could handle the 
                intricacies of event logistics from initial planning to final restock.
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
                Developed a comprehensive web platform that streamlines inventory management through optimized delivery flows, 
                modern UI components, and automated systems designed for various industries, creating a cohesive end-to-end 
                workflow for complex inventory lifecycle management.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Project Highlights */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Project Highlights</CardTitle>
              <CardDescription>Key innovations and design decisions that shaped the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Inventory Methods</h4>
                      <p className="text-sm text-muted-foreground">
                        Developed optimized delivery flow for pre, pick and move methods defined by vendor like services
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">React Fluid API</h4>
                      <p className="text-sm text-muted-foreground">
                        WIP based API found ideal for syncing to a fluid and getting individual based operations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Data Entry and Auditing</h4>
                      <p className="text-sm text-muted-foreground">
                        Re-building systems including inventory. Designed automated systems in various industries
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Web Optimized UI</h4>
                      <p className="text-sm text-muted-foreground">
                        Designed modern components for seamless user experience across the logistics workflow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Screens & UX Decisions */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Key Screens & UX Decisions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The platform interface showcases comprehensive workflow screens designed for efficient inventory management and logistics coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Warehouse App Main Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Warehouse App Dashboard</CardTitle>
                <CardDescription>
                  Central hub for regional facility selection and workflow navigation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <img 
                    src={warehouseMainScreen}
                    alt="Warehouse App - Main dashboard showing region/facility selection and workflow options"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>UX Decision:</strong> Designed a clean, hierarchical interface that starts with location selection (Region: North America, Facility: Dayton) 
                  before presenting workflow options. The six primary workflow cards are organized in a 3x2 grid, providing clear visual separation between 
                  different stages of the inventory lifecycle.
                </p>

                <div className="space-y-2">
                  <h5 className="text-sm">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Location-based workflow management with dropdown selection</li>
                    <li>• Card-based navigation system with clear categorization</li>
                    <li>• Consistent branding with user profile integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Pull Jobs Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Pull Jobs Management</CardTitle>
                <CardDescription>
                  Detailed inventory pulling interface with item tracking and status management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <img 
                    src={pullJobsScreen}
                    alt="Pull Jobs screen showing detailed job management with inventory items, quantities, and status tracking"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>UX Decision:</strong> Created a comprehensive job management interface that displays project overview (Accenture - MESC 2023) 
                  at the top, followed by detailed inventory tracking tables. The interface uses progress indicators (20% completion), 
                  multi-agent assignment (Dylan, Thomas, Alexander), and clear status badges for immediate visibility.
                </p>

                <div className="space-y-2">
                  <h5 className="text-sm">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Hierarchical information display with project details</li>
                    <li>• Detailed inventory tracking with location data</li>
                    <li>• Status-based organization with visual indicators</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prep Jobs Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. Prep & Quality Check Interface</CardTitle>
                <CardDescription>
                  Multi-step preparation workflow with quality control and inventory organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <img 
                    src={prepJobsScreen}
                    alt="Prep Jobs screen showing quality check and prep/pack workflows with categorized inventory items"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>UX Decision:</strong> Designed a two-stage workflow interface (Quality Check → Prep/Pack) with numbered steps for clear progression. 
                  The interface organizes inventory into logical categories (Ad hoc Logistics Items, Standalone Items, etc.) 
                  with expandable sections and detailed tracking fields including container types, expected dates, and item conditions.
                </p>

                <div className="space-y-2">
                  <h5 className="text-sm">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Sequential workflow progression with numbered steps</li>
                    <li>• Categorical organization with collapsible sections</li>
                    <li>• Quality control integration with condition tracking</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Load-Out Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">4. Load-Out Management</CardTitle>
                <CardDescription>
                  Trailer assignment and container loading with real-time tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <img 
                    src={loadOutScreen}
                    alt="Load-Out screen showing trailer management with container assignment and scanning capabilities"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>UX Decision:</strong> Created a trailer-focused interface that centralizes loading operations around specific trailers (AZ123). 
                  The design features destination tracking (Direct), weight/piece counts, ship dates, and assigned load agents. 
                  The prominent "Scan Items" button and expandable trailer sections streamline the loading workflow with unassigned container management below.
                </p>

                <div className="space-y-2">
                  <h5 className="text-sm">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Trailer-centric organization with key logistics data</li>
                    <li>• Integrated scanning workflow for efficient loading</li>
                    <li>• Container assignment with destination categorization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Load-In Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">5. Load-In Processing</CardTitle>
                <CardDescription>
                  Return container processing with damage assessment and photo documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <img 
                    src={loadInScreen}
                    alt="Load-In screen showing returned container processing with damage tracking and photo capabilities"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>UX Decision:</strong> Designed a comprehensive return processing interface with container status overview (Containers Sent Out: 14, 
                  Pending: 4, New Returned: 1, Total Returned: 5). The detailed table structure includes damage assessment, 
                  photo documentation capabilities, and action buttons for each container, enabling thorough return inspection workflows.
                </p>

                <div className="space-y-2">
                  <h5 className="text-sm">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Comprehensive return status dashboard with metrics</li>
                    <li>• Damage assessment integration with photo documentation</li>
                    <li>• Individual container action management system</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Warehouse Return Screen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">6. Warehouse Return Processing</CardTitle>
                <CardDescription>
                  Final return processing with location assignment and inventory restoration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <img 
                    src={warehouseReturnScreen}
                    alt="Warehouse Return screen showing container location assignment and final processing workflow"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>UX Decision:</strong> Streamlined the final return processing phase with focus on location assignment (Aisle/Bay/Level: 6/3/C, 5/2/D, etc.). 
                  The interface includes action buttons (Update/Add) for each returned container, notes and photo capabilities, 
                  and checkboxes for completion tracking, creating an efficient workflow for inventory restoration.
                </p>

                <div className="space-y-2">
                  <h5 className="text-sm">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Location-based inventory restoration workflow</li>
                    <li>• Action-oriented interface with update/add capabilities</li>
                    <li>• Completion tracking with checkbox system</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Design Process */}
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
                  Analyzed existing outdated inventory tracking systems to identify pain points
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Designed optimized delivery flows for various vendor service methods
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Created modern UI components focused on operational efficiency
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Integrated automated systems for seamless data management across industries
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
                  Complex logistics workflows require careful balance between automation and user control
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Real-time inventory tracking systems demand robust API architecture
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Event industry requires flexible solutions adaptable to various operational models
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  User interface optimization is crucial for high-volume data entry environments
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
                <h4 className="mb-2">Workflow Efficiency</h4>
                <p className="text-sm text-muted-foreground">
                  Streamlined end-to-end inventory management from planning to restock
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="mb-2">Real-time Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  Replaced outdated systems with modern real-time inventory monitoring
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="mb-2">Scalable Solution</h4>
                <p className="text-sm text-muted-foreground">
                  Created adaptable platform serving multiple industries and use cases
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