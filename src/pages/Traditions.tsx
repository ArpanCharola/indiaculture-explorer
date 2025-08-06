import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { MapPin, Users, Heart, Search, Filter } from 'lucide-react';

const Traditions = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample traditions data
  const traditions = [
    {
      id: 1,
      name: 'Bharatanatyam',
      location: 'Tamil Nadu',
      state: 'tamil-nadu',
      category: 'Classical Dance',
      origin: '2nd century CE',
      description: 'One of the oldest classical dance forms of India, originating in Tamil Nadu. Known for its grace, expressions, and spiritual themes.',
      significance: 'Devotional dance form dedicated to Hindu gods',
      image: '💃',
      practitioners: '50,000+',
      status: 'Widely Practiced',
      type: 'Performing Arts'
    },
    {
      id: 2,
      name: 'Ayurveda',
      location: 'Kerala',
      state: 'kerala',
      category: 'Traditional Medicine',
      origin: '5000+ years old',
      description: 'Ancient system of natural healing using herbs, meditation, yoga, and dietary practices to maintain health and prevent disease.',
      significance: 'Holistic approach to health and wellness',
      image: '🌿',
      practitioners: '1 million+',
      status: 'UNESCO Recognized',
      type: 'Healing Arts'
    },
    {
      id: 3,
      name: 'Kalaripayattu',
      location: 'Kerala',
      state: 'kerala',
      category: 'Martial Arts',
      origin: '3rd century CE',
      description: 'Ancient martial art form from Kerala, considered one of the oldest fighting systems in existence. Includes weaponry and hand-to-hand combat.',
      significance: 'Mother of all martial arts',
      image: '🥋',
      practitioners: '10,000+',
      status: 'Traditional Practice',
      type: 'Martial Arts'
    },
    {
      id: 4,
      name: 'Warli Painting',
      location: 'Maharashtra',
      state: 'maharashtra',
      category: 'Folk Art',
      origin: '10th century CE',
      description: 'Tribal art form using simple geometric shapes to depict daily life, festivals, and social events of the Warli tribe.',
      significance: 'Ancient tribal storytelling through art',
      image: '🎨',
      practitioners: '5,000+',
      status: 'Protected Art Form',
      type: 'Visual Arts'
    },
    {
      id: 5,
      name: 'Rajasthani Puppetry',
      location: 'Rajasthan',
      state: 'rajasthan',
      category: 'Folk Performance',
      origin: '1000+ years old',
      description: 'Traditional string puppet shows depicting heroic stories, folk tales, and religious themes with colorful kathputli dolls.',
      significance: 'Cultural storytelling tradition',
      image: '🎭',
      practitioners: '2,000+',
      status: 'UNESCO Protected',
      type: 'Performing Arts'
    },
    {
      id: 6,
      name: 'Bamboo Weaving',
      location: 'Assam',
      state: 'assam',
      category: 'Handicraft',
      origin: 'Ancient times',
      description: 'Traditional craft of weaving bamboo into baskets, furniture, and decorative items. An integral part of Northeastern culture.',
      significance: 'Sustainable craft tradition',
      image: '🎋',
      practitioners: '100,000+',
      status: 'Livelihood Tradition',
      type: 'Handicrafts'
    },
    {
      id: 7,
      name: 'Yoga',
      location: 'Pan-India',
      state: 'all',
      category: 'Spiritual Practice',
      origin: '5000+ years old',
      description: 'Ancient physical, mental, and spiritual practice combining postures, breathing techniques, and meditation for holistic well-being.',
      significance: 'Path to spiritual enlightenment',
      image: '🧘',
      practitioners: '300 million+',
      status: 'UNESCO Heritage',
      type: 'Spiritual Arts'
    },
    {
      id: 8,
      name: 'Dhokra Art',
      location: 'West Bengal, Chhattisgarh',
      state: 'west-bengal',
      category: 'Metal Craft',
      origin: '4000+ years old',
      description: 'Non-ferrous metal casting technique using the lost-wax process. Creates beautiful figurines, jewelry, and decorative items.',
      significance: 'Ancient metallurgy tradition',
      image: '🔥',
      practitioners: '15,000+',
      status: 'Protected Craft',
      type: 'Metal Arts'
    }
  ];

  const states = [
    { value: 'all', label: 'All States & UTs' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'assam', label: 'Assam' },
    { value: 'west-bengal', label: 'West Bengal' },
    { value: 'karnataka', label: 'Karnataka' }
  ];

  const filteredTraditions = traditions.filter(tradition => {
    const matchesLocation = selectedLocation === 'all' || tradition.state === selectedLocation || tradition.state === 'all';
    const matchesSearch = tradition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tradition.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tradition.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Cultural <span className="text-heritage">Traditions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore India's rich tapestry of traditional arts, crafts, and cultural practices
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search traditions..."
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

        {/* Traditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTraditions.map((tradition) => (
            <Card key={tradition.id} className="group hover:shadow-heritage transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tradition.image}
                  </div>
                  <Badge className={`${
                    tradition.status.includes('UNESCO') 
                      ? 'bg-heritage text-heritage-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    {tradition.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{tradition.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {tradition.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {tradition.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium bg-muted px-2 py-1 rounded">
                      {tradition.category}
                    </span>
                    <span className="text-sm font-medium bg-accent px-2 py-1 rounded">
                      {tradition.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-heritage" />
                    <span className="text-sm font-medium">{tradition.practitioners} practitioners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-heritage" />
                    <span className="text-sm font-medium">Origin: {tradition.origin}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-medium text-heritage mb-2">Cultural Significance:</p>
                  <p className="text-sm text-muted-foreground">{tradition.significance}</p>
                </div>

                <Button className="w-full mt-4 group-hover:bg-heritage group-hover:text-heritage-foreground transition-colors">
                  Explore Tradition
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTraditions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No Traditions Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or location filter
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredTraditions.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-heritage hover:text-heritage-foreground">
              Load More Traditions
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Traditions;