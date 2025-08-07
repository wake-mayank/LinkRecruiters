import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
}

export const StatsCard = ({ title, value, icon: Icon, change }: StatsCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <p className="text-xs text-success">{change}</p>
          </div>
          <div className="p-3 bg-gradient-accent rounded-xl">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};