import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, Target, Users, Clock, CheckCircle2, Lightbulb, TrendingUp, Smartphone, MapPin, ShoppingCart, RefreshCw, BarChart3 } from "lucide-react";
import homeScreen from 'figma:asset/fab0573900b396bfc9d75d30e560e404873f3c9e.png';
import ordersScreen from 'figma:asset/24b8ef63060309539e865bb497d9e33253151031.png';
import customerDetailScreen from 'figma:asset/73d09f0c6c4f4a513c0044f34356e250d3e5d148.png';
import customersListScreen from 'figma:asset/c8b22ba3655c2a88ab9c1d2c66262fe4ae49496b.png';
import newOrderScreen from 'figma:asset/55f60ae667d2575d8b83e82ffb695622756ee722.png';
import userProfileScreen from 'figma:asset/51fa23a3cf0db26a4f45d5a10453b3cd25a36823.png';

interface FieldSalesProjectProps {
  onBack: () => void;
}

export default function FieldSalesProject({ onBack }: FieldSalesProjectProps) {
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
            <Badge>Mobile Application</Badge>
            <Badge>Healthcare</Badge>
            <Badge>Field Sales</Badge>
            <Badge>Order Management</Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl mb-6">Field Sales App for Healthcare Supply</h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A mobile application designed to streamline order placement and customer management for field agents 
            visiting hospitals, pharmacies, and clinics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Role</h4>
              <p>UX Designer</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Platform</h4>
              <p>Mobile Application</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Industry</h4>
              <p>Healthcare Supply</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-1">Focus</h4>
              <p>Field Sales & Order Management</p>
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
                Field sales representatives in healthcare supply chain faced inefficiencies in order placement, 
                customer relationship management, and real-time inventory tracking when visiting hospitals, 
                pharmacies, and clinics. Manual processes led to errors, delayed orders, and poor customer experience.
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
                Developed a comprehensive mobile application that enables field agents to efficiently manage customer 
                relationships, place orders in real-time, track inventory, and access customer insights on-the-go. 
                The solution streamlines the entire field sales process from customer contact to order fulfillment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Highlights</CardTitle>
              <CardDescription>Key features and innovations that enhance field sales operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Customer-Centric Navigation</h4>
                      <p className="text-sm text-muted-foreground">
                        Allowing reps to search and access customer's instantly with granulated walk and pivot search views
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ShoppingCart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Complete Business Product Detail and Ease</h4>
                      <p className="text-sm text-muted-foreground">
                        Assistance for visual bracket level quality requirements and filters by category provided to their accurate 
                        bulk orders or individual
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Real-Time Order Tracking</h4>
                      <p className="text-sm text-muted-foreground">
                        Designed an app experience that captures DMS integrations that offer deep Purchasing. Delivered to improve customer 
                        retention flow
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Sales as a Glance</h4>
                      <p className="text-sm text-muted-foreground">
                        Highlighted key sales insights the Item assist result and Edge visual at every step to give clean quick action search 
                        working or measuring pipeline
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Optimized for On-the-Go Usage</h4>
                      <p className="text-sm text-muted-foreground">
                        Field UX research, use friendly, and logbook orient to outdoor settings where field reps operate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Module's Screens */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Key Module's Screens</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mobile interface design showcasing customer management, order placement, and sales tracking capabilities optimized for field operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Screen 1 - Home Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">1. Home Dashboard</CardTitle>
                <CardDescription className="text-sm">
                  Central hub with recent activity and quick order access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-3">
                  <img 
                    src={homeScreen}
                    alt="Home dashboard showing search functionality, recently viewed customers (DDRC, Rajagiri Hospital, Sunrise Hospital), and recent orders with status tracking"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>UX Decision:</strong> Designed a comprehensive home screen that prioritizes recent activity and quick access to key functions. 
                  The "Recently viewed" section enables fast customer re-engagement, while the prominent "New Order" button facilitates immediate action.
                </p>

                <div className="space-y-1">
                  <h5 className="text-xs">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Universal search for customers and orders</li>
                    <li>• Recently viewed customer quick access</li>
                    <li>• Real-time order status tracking</li>
                    <li>• Prominent new order creation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Screen 2 - Orders Management */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">2. Orders Management</CardTitle>
                <CardDescription className="text-sm">
                  Comprehensive order tracking with filtering and search capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-3">
                  <img 
                    src={ordersScreen}
                    alt="Orders management screen with search functionality, filtering options, and detailed order listings showing customer names, order numbers, quantities, pricing, and status"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>UX Decision:</strong> Created a structured orders interface with robust filtering (Group, All Filters) and search capabilities. 
                  Each order card displays essential information: customer, order ID, item count, pricing, and status for efficient order management.
                </p>

                <div className="space-y-1">
                  <h5 className="text-xs">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Advanced search and filtering system</li>
                    <li>• Comprehensive order details at a glance</li>
                    <li>• Status-based organization and tracking</li>
                    <li>• Customer-centric order grouping</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Screen 3 - Customer Profile */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">3. Customer Profile</CardTitle>
                <CardDescription className="text-sm">
                  Detailed customer view with contact information and order history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-3">
                  <img 
                    src={customerDetailScreen}
                    alt="Customer profile for Rajagiri Hospital showing contact person Mathew George John, location details, communication options (call, email, directions), and complete order history with pricing and status"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>UX Decision:</strong> Developed a customer-centric profile that combines contact management with business intelligence. 
                  The interface prominently displays key contact information, communication options, and comprehensive order history to support relationship building.
                </p>

                <div className="space-y-1">
                  <h5 className="text-xs">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Complete customer contact information</li>
                    <li>• Integrated communication tools (call, email, directions)</li>
                    <li>• Historical order tracking and analysis</li>
                    <li>• Direct new order initiation from customer profile</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Screen 4 - Customers List */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">4. Customers Directory</CardTitle>
                <CardDescription className="text-sm">
                  Complete customer database with search and filtering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-3">
                  <img 
                    src={customersListScreen}
                    alt="Customers directory showing search functionality, filtering options, and alphabetically organized list of healthcare facilities including Rajagiri Hospital, Sunrise Hospital, Aster Medicity, and others with location details"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>UX Decision:</strong> Created a comprehensive customer directory with alphabetical indexing and robust search capabilities. 
                  The design prioritizes quick customer location with search functionality and filter options, enabling field reps to efficiently navigate large customer databases.
                </p>

                <div className="space-y-1">
                  <h5 className="text-xs">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Alphabetical customer organization with quick index</li>
                    <li>• Comprehensive search and filtering system</li>
                    <li>• Location-based customer information display</li>
                    <li>• Streamlined customer access from directory</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Screen 5 - New Order Creation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">5. Product Catalog & Ordering</CardTitle>
                <CardDescription className="text-sm">
                  Interactive product catalog with real-time order calculation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-3">
                  <img 
                    src={newOrderScreen}
                    alt="New order screen for Rajagiri Hospital showing product search, category filters (Medical, Dental, All Filters), product catalog with images, pricing, inventory levels, quantity selectors, and real-time total calculation showing ₹3,800.00 for 2 items"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>UX Decision:</strong> Designed an intuitive product catalog interface with visual product representation, real-time inventory display, 
                  and instant order calculation. The interface includes category filtering, quantity adjustment controls, and prominent total display to streamline the ordering process.
                </p>

                <div className="space-y-1">
                  <h5 className="text-xs">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Visual product catalog with images and descriptions</li>
                    <li>• Real-time inventory and pricing information</li>
                    <li>• Category-based filtering (Medical, Dental)</li>
                    <li>• Instant order total calculation and review</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Screen 6 - User Profile */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">6. User Profile & Settings</CardTitle>
                <CardDescription className="text-sm">
                  Account management and user preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-border mb-3">
                  <img 
                    src={userProfileScreen}
                    alt="User profile screen showing profile picture placeholder, username AustinPost, email postmalone@gmail.com, phone number +91 8049559302, change password option, and logout functionality"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <strong>UX Decision:</strong> Developed a clean, security-focused profile interface that displays essential user information 
                  while providing easy access to account management functions. The design emphasizes profile editing capabilities and secure logout functionality.
                </p>

                <div className="space-y-1">
                  <h5 className="text-xs">Key Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Clean user information display with avatar</li>
                    <li>• Editable contact details and credentials</li>
                    <li>• Secure password management functionality</li>
                    <li>• Prominent logout with data security focus</li>
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
                  Conducted field research with healthcare supply representatives
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Analyzed current pain points in order placement and customer management
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Designed mobile-first interface optimized for outdoor field conditions
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Integrated real-time inventory and DMS system connections
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
                  Field applications require robust offline capabilities and quick data sync
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Visual product catalogs significantly improve order accuracy and speed
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Customer-centric navigation patterns enhance rep productivity
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                  Real-time sales insights enable better customer relationship management
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
                <h4 className="mb-2">Order Efficiency</h4>
                <p className="text-sm text-muted-foreground">
                  Streamlined order placement process with real-time inventory and product catalogs
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="mb-2">Customer Management</h4>
                <p className="text-sm text-muted-foreground">
                  Enhanced field rep productivity with customer-centric navigation and insights
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="mb-2">Sales Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Improved sales tracking and pipeline management for healthcare supply chain
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