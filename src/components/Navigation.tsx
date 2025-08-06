import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/states', label: 'States & UTs' },
    { path: '/heritage', label: 'Heritage' },
    { path: '/traditions', label: 'Traditions' },
    { path: '/festivals', label: 'Festivals' },
    { path: '/risk-radar', label: 'Risk Radar' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">🏛️</span>
            </div>
            <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              Bharat Sanskriti
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActiveRoute(item.path) ? "default" : "ghost"}
                  className={`transition-all duration-200 ${
                    isActiveRoute(item.path) 
                      ? 'bg-primary text-primary-foreground shadow-warm' 
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search heritage sites..."
                className="pl-10 w-64 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search heritage sites..."
                    className="pl-10 focus:ring-primary focus:border-primary"
                  />
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant={isActiveRoute(item.path) ? "default" : "ghost"}
                      className={`w-full justify-start transition-all duration-200 ${
                        isActiveRoute(item.path) 
                          ? 'bg-primary text-primary-foreground shadow-warm' 
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;