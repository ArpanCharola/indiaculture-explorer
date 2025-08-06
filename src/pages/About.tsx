import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target, Award, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Cultural Heritage Expert',
      specialization: 'Archaeological Conservation',
      experience: '15+ years',
      image: '👩‍🎓'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Technology Director',
      specialization: 'Digital Heritage Solutions',
      experience: '12+ years',
      image: '👨‍💻'
    },
    {
      name: 'Anita Desai',
      role: 'Research Coordinator',
      specialization: 'Intangible Heritage Documentation',
      experience: '10+ years',
      image: '👩‍🔬'
    }
  ];

  const achievements = [
    {
      number: '1000+',
      label: 'Heritage Sites Documented',
      icon: MapPin
    },
    {
      number: '500+',
      label: 'Traditions Preserved',
      icon: Heart
    },
    {
      number: '28',
      label: 'States Covered',
      icon: Target
    },
    {
      number: '5+',
      label: 'Years of Research',
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            About <span className="text-heritage">Bharat Sanskriti</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dedicated to preserving, documenting, and celebrating India's incredible cultural heritage 
            for present and future generations through innovative technology and community engagement.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To create a comprehensive digital platform that documents, preserves, and promotes 
                India's rich cultural heritage, making it accessible to everyone while supporting 
                conservation efforts and cultural education.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-heritage rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-heritage-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A world where India's cultural heritage is celebrated, protected, and passed on to 
                future generations through innovative technology, community participation, and 
                sustainable conservation practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-shadow">
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 text-heritage mx-auto mb-4" />
                  <div className="text-2xl font-bold text-heritage mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">📚</div>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Comprehensive recording of heritage sites, traditions, and cultural practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We systematically document India's cultural heritage through research, 
                  photography, interviews, and digital archiving to create lasting records.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🛡️</div>
                <CardTitle>Preservation</CardTitle>
                <CardDescription>
                  Supporting conservation efforts and risk monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We work with conservation organizations and communities to protect heritage 
                  sites and traditions from threats and ensure their survival.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🌟</div>
                <CardTitle>Promotion</CardTitle>
                <CardDescription>
                  Raising awareness and appreciation of cultural heritage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Through our platform and community outreach, we promote understanding 
                  and appreciation of India's diverse cultural traditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-2">{member.specialization}</Badge>
                  <p className="text-sm text-muted-foreground">
                    {member.experience} in heritage conservation and research
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-heritage" />
              </div>
              <h3 className="font-semibold mb-2">Community First</h3>
              <p className="text-sm text-muted-foreground">
                Engaging local communities as custodians of their heritage
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-heritage" />
              </div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Maintaining highest standards in research and documentation
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-heritage" />
              </div>
              <h3 className="font-semibold mb-2">Passion</h3>
              <p className="text-sm text-muted-foreground">
                Deep love and respect for India's cultural diversity
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-heritage" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Using technology to make heritage accessible and engaging
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-heritage p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-heritage-foreground mb-4">
            Join Our Mission
          </h2>
          <p className="text-heritage-foreground/90 mb-6 max-w-2xl mx-auto">
            Help us preserve India's incredible cultural heritage for future generations. 
            Get involved, contribute, or simply explore and learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-heritage-foreground text-heritage hover:bg-heritage-foreground/90">
                Get Involved
              </Button>
            </Link>
            <Link to="/heritage">
              <Button variant="outline" size="lg" className="border-heritage-foreground text-heritage-foreground hover:bg-heritage-foreground hover:text-heritage">
                Explore Heritage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;