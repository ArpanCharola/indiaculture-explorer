import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { MapPin, Calendar, Star, Search, Filter } from 'lucide-react';

const Festivals = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample festivals data
  const festivals = [
    {
      id: 1,
      name: 'Diwali',
      location: 'Pan-India',
      state: 'all',
      season: 'Autumn',
      duration: '5 days',
      description: 'Festival of lights celebrating the victory of light over darkness. Houses are decorated with oil lamps, rangoli, and fireworks light up the sky.',
      significance: 'Victory of good over evil, knowledge over ignorance',
      image: '🪔',
      popularity: 'National',
      participants: '1 billion+',
      type: 'Religious'
    },
    {
      id: 2,
      name: 'Holi',
      location: 'North India',
      state: 'uttar-pradesh',
      season: 'Spring',
      duration: '2 days',
      description: 'Festival of colors celebrating the arrival of spring. People play with colored powders and water, symbolizing joy and love.',
      significance: 'Arrival of spring, triumph of good over evil',
      image: '🌈',
      popularity: 'National',
      participants: '500 million+',
      type: 'Religious'
    },
    {
      id: 3,
      name: 'Durga Puja',
      location: 'West Bengal',
      state: 'west-bengal',
      season: 'Autumn',
      duration: '5 days',
      description: 'Grand celebration honoring Goddess Durga with elaborate pandals, artistic idols, cultural programs, and community feasting.',
      significance: 'Victory of Goddess Durga over evil forces',
      image: '🎭',
      popularity: 'Regional',
      participants: '100 million+',
      type: 'Religious'
    },
    {
      id: 4,
      name: 'Onam',
      location: 'Kerala',
      state: 'kerala',
      season: 'Monsoon',
      duration: '10 days',
      description: 'Harvest festival celebrating King Mahabali\'s return. Features flower carpets, boat races, traditional dance, and elaborate feasts.',
      significance: 'Harvest celebration and cultural unity',
      image: '🌺',
      popularity: 'Regional',
      participants: '30 million+',
      type: 'Cultural'
    },
    {
      id: 5,
      name: 'Pushkar Camel Fair',
      location: 'Rajasthan',
      state: 'rajasthan',
      season: 'Winter',
      duration: '7 days',
      description: 'World\'s largest camel fair with trading, cultural performances, competitions, and traditional Rajasthani celebrations.',
      significance: 'Cultural heritage and trade tradition',
      image: '🐪',
      popularity: 'International',
      participants: '400,000+',
      type: 'Cultural'
    },
    {
      id: 6,
      name: 'Kumbh Mela',
      location: 'Uttar Pradesh, Uttarakhand',
      state: 'uttar-pradesh',
      season: 'Varies',
      duration: '45 days',
      description: 'Largest religious gathering in the world where pilgrims bathe in sacred rivers for spiritual purification.',
      significance: 'Spiritual purification and salvation',
      image: '🕉️',
      popularity: 'International',
      participants: '100 million+',
      type: 'Religious'
    },
    {
      id: 7,
      name: 'Hornbill Festival',
      location: 'Nagaland',
      state: 'nagaland',
      season: 'Winter',
      duration: '10 days',
      description: 'Festival showcasing Naga tribal culture with traditional dances, music, crafts, and local cuisine from all Naga tribes.',
      significance: 'Preservation of Naga tribal heritage',
      image: '🪶',
      popularity: 'Regional',
      participants: '100,000+',
      type: 'Cultural'
    },
    {
      id: 8,
      name: 'Baisakhi',
      location: 'Punjab',
      state: 'punjab',
      season: 'Spring',
      duration: '1 day',
      description: 'Harvest festival marking the Punjabi New Year and birth of Khalsa. Celebrated with bhangra, giddha, and community feasts.',
      significance: 'Harvest celebration and Sikh religious significance',
      image: '🌾',
      popularity: 'Regional',
      participants: '25 million+',
      type: 'Cultural'
    }
  ];

  const states = [
    { value: 'all', label: 'All States & UTs' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'west-bengal', label: 'West Bengal' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'nagaland', label: 'Nagaland' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'maharashtra', label: 'Maharashtra' }
  ];

  const filteredFestivals = festivals.filter(festival => {
    const matchesLocation = selectedLocation === 'all' || festival.state === selectedLocation || festival.state === 'all';
    const matchesSearch = festival.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         festival.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         festival.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Cultural <span className="text-heritage">Festivals</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Experience the vibrant celebrations and festivals that bring India's diverse communities together
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search festivals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-64">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((festival) => (
            <Card key={festival.id} className="group hover:shadow-heritage transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {festival.image}
                  </div>
                  <Badge className={`${
                    festival.popularity === 'National' 
                      ? 'bg-heritage text-heritage-foreground' 
                      : festival.popularity === 'International'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {festival.popularity}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{festival.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {festival.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {festival.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium bg-muted px-2 py-1 rounded">
                      {festival.type}
                    </span>
                    <span className="text-sm font-medium bg-accent px-2 py-1 rounded">
                      {festival.season}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-heritage" />
                    <span className="text-sm font-medium">Duration: {festival.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-heritage" />
                    <span className="text-sm font-medium">{festival.participants} participants</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-medium text-heritage mb-2">Cultural Significance:</p>
                  <p className="text-sm text-muted-foreground">{festival.significance}</p>
                </div>

                <Button className="w-full mt-4 group-hover:bg-heritage group-hover:text-heritage-foreground transition-colors">
                  Explore Festival
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No Festivals Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or location filter
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredFestivals.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-heritage hover:text-heritage-foreground">
              Load More Festivals
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Festivals;