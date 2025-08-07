import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, Play, Pause, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Campaign {
  id: number;
  name: string;
  description: string;
  prospects: number;
  successRate: number;
  status: 'active' | 'paused' | 'completed';
}

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-white';
      case 'paused': return 'bg-warning text-white';
      case 'completed': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Play className="h-3 w-3" />;
      case 'paused': return <Pause className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-foreground">{campaign.name}</h3>
              <Badge className={`${getStatusColor(campaign.status)} px-2 py-1 text-xs`}>
                {getStatusIcon(campaign.status)}
                <span className="ml-1 capitalize">{campaign.status}</span>
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{campaign.description}</p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{campaign.prospects} prospects</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="text-sm text-foreground font-medium">{campaign.successRate}% success rate</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              View Details
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Export Data</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};