import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { MapPin, Calendar, Star, Search, Filter } from 'lucide-react';

const Heritage = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample heritage sites data
  const heritageSites = [
    {
      id: 1,
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      state: 'uttar-pradesh',
      type: 'UNESCO World Heritage Site',
      period: 'Mughal Era (1632-1653)',
      description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna. Built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
      significance: 'Symbol of eternal love and architectural masterpiece',
      image: '🕌',
      rating: 4.9,
      visitors: '6-8 million annually',
      category: 'Monument'
    },
    {
      id: 2,
      name: 'Red Fort',
      location: 'Delhi',
      state: 'delhi',
      type: 'UNESCO World Heritage Site',
      period: 'Mughal Era (1638-1648)',
      description: 'A historic walled city in Delhi that served as the main residence of the Mughal emperors for nearly 200 years.',
      significance: 'Symbol of Indian independence and Mughal architecture',
      image: '🏛️',
      rating: 4.6,
      visitors: '3 million annually',
      category: 'Fort'
    },
    {
      id: 3,
      name: 'Qutub Minar',
      location: 'Delhi',
      state: 'delhi',
      type: 'UNESCO World Heritage Site',
      period: 'Delhi Sultanate (1199-1220)',
      description: 'A 73-meter tall tapering tower made of red sandstone and marble. The tallest brick minaret in the world.',
      significance: 'Finest example of Indo-Islamic architecture',
      image: '🗼',
      rating: 4.4,
      visitors: '2.5 million annually',
      category: 'Minaret'
    },
    {
      id: 4,
      name: 'Hampi',
      location: 'Karnataka',
      state: 'karnataka',
      type: 'UNESCO World Heritage Site',
      period: 'Vijayanagara Empire (14th-16th century)',
      description: 'Ruins of the last great Hindu kingdom in South India. A UNESCO World Heritage Site with magnificent temples and royal structures.',
      significance: 'Seat of the Vijayanagara Empire',
      image: '🏺',
      rating: 4.7,
      visitors: '500,000 annually',
      category: 'Archaeological Site'
    },
    {
      id: 5,
      name: 'Khajuraho Temples',
      location: 'Madhya Pradesh',
      state: 'madhya-pradesh',
      type: 'UNESCO World Heritage Site',
      period: 'Chandela Dynasty (950-1050 CE)',
      description: 'Group of Hindu and Jain temples famous for their elaborate sculptural decorations and architectural beauty.',
      significance: 'Masterpiece of medieval Indian architecture',
      image: '🛕',
      rating: 4.5,
      visitors: '1.2 million annually',
      category: 'Temple Complex'
    },
    {
      id: 6,
      name: 'Ajanta Caves',
      location: 'Maharashtra',
      state: 'maharashtra',
      type: 'UNESCO World Heritage Site',
      period: 'Buddhist Era (2nd century BCE - 6th century CE)',
      description: 'Rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE, featuring paintings and sculptures.',
      significance: 'Masterpieces of Buddhist religious art',
      image: '⛰️',
      rating: 4.6,
      visitors: '800,000 annually',
      category: 'Cave Complex'
    }
  ];

  const states = [
    { value: 'all', label: 'All States & UTs' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' }
  ];

  const filteredSites = heritageSites.filter(site => {
    const matchesLocation = selectedLocation === 'all' || site.state === selectedLocation;
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         site.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Heritage <span className="text-heritage">Sites</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover India's magnificent heritage sites, from ancient temples to colonial architecture
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search heritage sites..."
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

        {/* Heritage Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site) => (
            <Card key={site.id} className="group hover:shadow-heritage transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {site.image}
                  </div>
                  <Badge className="bg-heritage text-heritage-foreground">
                    {site.type.includes('UNESCO') ? 'UNESCO' : site.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{site.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {site.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {site.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-heritage" />
                    <span className="text-sm font-medium">{site.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-heritage fill-heritage" />
                    <span className="text-sm font-medium">{site.rating}/5</span>
                    <span className="text-sm text-muted-foreground">({site.visitors})</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-medium text-heritage mb-2">Cultural Significance:</p>
                  <p className="text-sm text-muted-foreground">{site.significance}</p>
                </div>

                <Button className="w-full mt-4 group-hover:bg-heritage group-hover:text-heritage-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSites.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No Heritage Sites Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or location filter
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredSites.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-heritage hover:text-heritage-foreground">
              Load More Sites
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Heritage;