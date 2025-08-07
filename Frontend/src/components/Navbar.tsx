import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, MessageSquare, Target, Users } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">OutreachOpt</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <BarChart3 className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link to="/campaigns" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span>Campaigns</span>
              </Link>
              <Link to="/prospects" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <Users className="h-4 w-4" />
                <span>Prospects</span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};