import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MapPin, Users, Calendar, Landmark } from 'lucide-react';

const States = () => {
  const [selectedState, setSelectedState] = useState(null);

  // Sample data for states and union territories
  const statesData = [
    {
      id: 'andhra-pradesh',
      name: 'Andhra Pradesh',
      type: 'State',
      capital: 'Amaravati',
      population: '49.4M',
      heritageSites: 12,
      majorFestivals: ['Ugadi', 'Dussehra', 'Sankranti'],
      description: 'Known for its rich cultural heritage, ancient temples, and classical dance forms. Home to historic sites like Tirumala and beautiful coastal regions.',
      image: '🏛️',
      highlights: ['Tirupati Temple', 'Charminar', 'Golconda Fort', 'Kuchipudi Dance']
    },
    {
      id: 'arunachal-pradesh',
      name: 'Arunachal Pradesh',
      type: 'State',
      capital: 'Itanagar',
      population: '1.4M',
      heritageSites: 8,
      majorFestivals: ['Losar', 'Mopin', 'Solung'],
      description: 'The "Land of Rising Sun" with diverse tribal cultures, Buddhist monasteries, and pristine natural beauty in the Eastern Himalayas.',
      image: '🏔️',
      highlights: ['Tawang Monastery', 'Ziro Valley', 'Namdapha National Park', 'Tribal Culture']
    },
    {
      id: 'assam',
      name: 'Assam',
      type: 'State',
      capital: 'Dispur',
      population: '31.2M',
      heritageSites: 15,
      majorFestivals: ['Bihu', 'Durga Puja', 'Kali Puja'],
      description: 'Famous for tea gardens, silk production, and the mighty Brahmaputra River. Rich in Assamese culture and wildlife sanctuaries.',
      image: '🍃',
      highlights: ['Kamakhya Temple', 'Kaziranga National Park', 'Majuli Island', 'Assam Tea']
    },
    {
      id: 'bihar',
      name: 'Bihar',
      type: 'State',
      capital: 'Patna',
      population: '104.1M',
      heritageSites: 20,
      majorFestivals: ['Chhath Puja', 'Dussehra', 'Holi'],
      description: 'Birthplace of Buddhism and Jainism, with ancient universities and pilgrimage sites. Rich in historical and spiritual significance.',
      image: '☸️',
      highlights: ['Bodh Gaya', 'Nalanda University', 'Rajgir', 'Vaishali']
    },
    {
      id: 'chhattisgarh',
      name: 'Chhattisgarh',
      type: 'State',
      capital: 'Raipur',
      population: '25.5M',
      heritageSites: 10,
      majorFestivals: ['Bastar Dussehra', 'Hareli', 'Teeja'],
      description: 'Known for tribal culture, ancient temples, waterfalls, and mineral resources. Rich in folk traditions and natural beauty.',
      image: '🌿',
      highlights: ['Chitrakote Falls', 'Bhoramdeo Temple', 'Kanger Valley', 'Tribal Art']
    },
    // Union Territories
    {
      id: 'delhi',
      name: 'Delhi',
      type: 'Union Territory',
      capital: 'New Delhi',
      population: '32.9M',
      heritageSites: 25,
      majorFestivals: ['Diwali', 'Holi', 'Dussehra'],
      description: 'The national capital territory with a blend of ancient heritage and modern development. Home to numerous UNESCO World Heritage Sites.',
      image: '🏛️',
      highlights: ['Red Fort', 'Qutub Minar', 'India Gate', 'Lotus Temple']
    },
    {
      id: 'puducherry',
      name: 'Puducherry',
      type: 'Union Territory',
      capital: 'Puducherry',
      population: '1.2M',
      heritageSites: 6,
      majorFestivals: ['French Festival', 'Bastille Day', 'Diwali'],
      description: 'Former French colony with unique Indo-French architecture, spiritual centers, and beautiful beaches.',
      image: '🏖️',
      highlights: ['Auroville', 'French Quarter', 'Paradise Beach', 'Aurobindo Ashram']
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            States & <span className="text-heritage">Union Territories</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the diverse cultural landscape across India's 28 states and 8 union territories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* States List */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-heritage" />
                  Select a Region
                </CardTitle>
                <CardDescription>
                  Click on any state or union territory to view details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px]">
                  <div className="space-y-2">
                    {statesData.map((state) => (
                      <div
                        key={state.id}
                        onClick={() => setSelectedState(state)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-warm ${
                          selectedState?.id === state.id
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{state.name}</div>
                            <div className="text-sm opacity-75">{state.capital}</div>
                          </div>
                          <Badge variant={state.type === 'State' ? 'default' : 'secondary'}>
                            {state.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* State Details */}
          <div className="lg:col-span-2">
            {selectedState ? (
              <div className="space-y-6 animate-fade-in">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-6xl">{selectedState.image}</div>
                      <div>
                        <CardTitle className="text-2xl">{selectedState.name}</CardTitle>
                        <CardDescription className="text-lg">{selectedState.capital}</CardDescription>
                        <Badge className="mt-2">{selectedState.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6">{selectedState.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <Users className="h-6 w-6 text-heritage mx-auto mb-2" />
                        <div className="font-bold text-lg">{selectedState.population}</div>
                        <div className="text-sm text-muted-foreground">Population</div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <Landmark className="h-6 w-6 text-heritage mx-auto mb-2" />
                        <div className="font-bold text-lg">{selectedState.heritageSites}</div>
                        <div className="text-sm text-muted-foreground">Heritage Sites</div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <Calendar className="h-6 w-6 text-heritage mx-auto mb-2" />
                        <div className="font-bold text-lg">{selectedState.majorFestivals.length}</div>
                        <div className="text-sm text-muted-foreground">Major Festivals</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-3">Cultural Highlights</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedState.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-sm">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Major Festivals */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Major Festivals</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedState.majorFestivals.map((festival, index) => (
                          <Badge key={index} className="bg-heritage text-heritage-foreground">
                            {festival}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-[600px] flex items-center justify-center">
                <CardContent className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <CardTitle className="text-2xl mb-2">Select a State or Union Territory</CardTitle>
                  <CardDescription>
                    Choose from the list on the left to explore detailed information about India's diverse regions
                  </CardDescription>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;