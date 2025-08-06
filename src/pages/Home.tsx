import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Calendar, Landmark, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/india-heritage-hero.jpg';

const Home = () => {
  const stats = [
    { label: 'Heritage Sites', value: '1000+', icon: Landmark },
    { label: 'States', value: '28', icon: MapPin },
    { label: 'Union Territories', value: '8', icon: Users },
    { label: 'Festivals', value: '500+', icon: Calendar },
  ];

  const features = [
    {
      title: 'Explore Heritage Sites',
      description: 'Discover ancient monuments, archaeological wonders, and UNESCO World Heritage Sites across India.',
      icon: '🏛️',
      link: '/heritage'
    },
    {
      title: 'Rich Traditions',
      description: 'Learn about diverse cultural practices, art forms, and traditional knowledge systems.',
      icon: '🎭',
      link: '/traditions'
    },
    {
      title: 'Vibrant Festivals',
      description: 'Experience the colorful celebrations and religious festivals that unite our diverse nation.',
      icon: '🎉',
      link: '/festivals'
    },
    {
      title: 'State-wise Exploration',
      description: 'Navigate through each state and union territory to discover their unique cultural identity.',
      icon: '🗺️',
      link: '/states'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-cultural text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover India's{' '}
                <span className="text-heritage">Cultural Heritage</span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                Explore the rich tapestry of Indian culture, from ancient monuments and sacred traditions to vibrant festivals that celebrate our diverse heritage across every state and union territory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/heritage">
                  <Button size="lg" className="bg-heritage hover:bg-heritage/90 text-heritage-foreground shadow-heritage">
                    Explore Heritage
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-heritage text-heritage hover:bg-heritage hover:text-heritage-foreground">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-in">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl shadow-heritage overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="India's Cultural Heritage Map" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">India's Cultural Map</p>
                  <p className="text-sm opacity-90">Connecting heritage across the nation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-heritage mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Explore India's <span className="text-heritage">Cultural Wealth</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive deep into the diverse cultural landscape of India through our comprehensive platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link to={feature.link}>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-heritage-foreground mb-6">
            Join the Cultural Journey
          </h2>
          <p className="text-xl text-heritage-foreground/90 mb-8 max-w-2xl mx-auto">
            Be part of preserving and celebrating India's incredible cultural heritage for future generations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-heritage-foreground text-heritage-foreground hover:bg-heritage-foreground hover:text-heritage">
                Get Involved
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" className="bg-heritage-foreground text-heritage hover:bg-heritage-foreground/90">
                Learn Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;