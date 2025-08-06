import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Shield, Zap, Timer } from 'lucide-react';

const RiskRadar = () => {
  // Sample at-risk heritage data
  const atRiskHeritage = [
    {
      id: 1,
      name: 'Sundarbans',
      location: 'West Bengal',
      type: 'Natural Heritage',
      riskLevel: 'High',
      threats: ['Climate Change', 'Sea Level Rise', 'Deforestation'],
      description: 'World\'s largest mangrove forest facing threat from rising sea levels and climate change.',
      status: 'UNESCO World Heritage Site',
      urgency: 'Immediate Action Required'
    },
    {
      id: 2,
      name: 'Ajanta Caves',
      location: 'Maharashtra',
      type: 'Cultural Heritage',
      riskLevel: 'Medium',
      threats: ['Pollution', 'Tourist Pressure', 'Natural Erosion'],
      description: 'Ancient Buddhist cave paintings deteriorating due to environmental factors and tourism.',
      status: 'UNESCO World Heritage Site',
      urgency: 'Monitoring Required'
    },
    {
      id: 3,
      name: 'Living Root Bridges',
      location: 'Meghalaya',
      type: 'Cultural Practice',
      riskLevel: 'Medium',
      threats: ['Modernization', 'Youth Migration', 'Knowledge Loss'],
      description: 'Traditional bridge-building knowledge of Khasi tribes at risk of being lost.',
      status: 'Intangible Heritage',
      urgency: 'Documentation Needed'
    }
  ];

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case 'High': return 'bg-destructive text-destructive-foreground';
      case 'Medium': return 'bg-heritage text-heritage-foreground';
      case 'Low': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'High': return <AlertTriangle className="h-5 w-5" />;
      case 'Medium': return <Timer className="h-5 w-5" />;
      case 'Low': return <Shield className="h-5 w-5" />;
      default: return <Zap className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Heritage <span className="text-heritage">Risk Radar</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Monitoring and protecting India's cultural heritage at risk
          </p>
        </div>

        {/* Work in Progress Alert */}
        <Alert className="mb-8 border-heritage bg-heritage/5">
          <AlertTriangle className="h-4 w-4 text-heritage" />
          <AlertTitle className="text-heritage">Work in Progress</AlertTitle>
          <AlertDescription>
            This feature is currently under development. We're working on creating a comprehensive 
            monitoring system to track and visualize heritage elements at risk across India. 
            Stay tuned for updates!
          </AlertDescription>
        </Alert>

        {/* Preview Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Preview: Heritage at Risk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atRiskHeritage.map((item) => (
              <Card key={item.id} className="border-l-4 border-l-destructive">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.location}</CardDescription>
                    </div>
                    <Badge className={getRiskBadgeColor(item.riskLevel)}>
                      {getRiskIcon(item.riskLevel)}
                      <span className="ml-1">{item.riskLevel} Risk</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Primary Threats:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.threats.map((threat, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {threat}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">{item.status}</span>
                    <span className="text-destructive">{item.urgency}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-heritage/10 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-heritage" />
              </div>
              <CardTitle>Risk Assessment</CardTitle>
              <CardDescription>
                Comprehensive threat analysis for heritage sites
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced algorithms to assess and categorize risks to cultural heritage elements.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-heritage/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-heritage" />
              </div>
              <CardTitle>Real-time Monitoring</CardTitle>
              <CardDescription>
                Live updates on heritage conservation status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Real-time data feeds from environmental sensors and conservation reports.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-heritage/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-heritage" />
              </div>
              <CardTitle>Conservation Tracking</CardTitle>
              <CardDescription>
                Monitor ongoing preservation efforts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Track conservation projects, funding, and progress across all heritage sites.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Features */}
        <div className="mt-16 p-8 bg-gradient-heritage rounded-lg text-center">
          <h3 className="text-2xl font-bold text-heritage-foreground mb-4">
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-heritage-foreground/90">
            <div>
              <h4 className="font-semibold mb-2">Interactive Risk Map</h4>
              <p className="text-sm">Visual representation of heritage sites by risk level across India</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Alert System</h4>
              <p className="text-sm">Automated notifications for urgent conservation needs</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Predictive Analytics</h4>
              <p className="text-sm">AI-powered forecasting of potential threats</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Community Reporting</h4>
              <p className="text-sm">Citizen participation in heritage monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskRadar;