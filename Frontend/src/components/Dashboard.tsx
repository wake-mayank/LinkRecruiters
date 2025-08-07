import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from './StatsCard';
import { CampaignCard } from './CampaignCard';
import { Plus, TrendingUp, Users, MessageSquare, Target } from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    { title: 'Active Campaigns', value: '12', icon: Target, change: '+2 this week' },
    { title: 'Prospects Analyzed', value: '1,248', icon: Users, change: '+156 this week' },
    { title: 'Messages Generated', value: '892', icon: MessageSquare, change: '+89 today' },
    { title: 'Success Rate', value: '68%', icon: TrendingUp, change: '+5% vs last month' },
  ];

  const recentCampaigns = [
    {
      id: 1,
      name: 'SaaS Founders Q4',
      description: 'Targeting SaaS founders for our growth consulting services',
      prospects: 45,
      successRate: 72,
      status: 'active' as const
    },
    {
      id: 2,
      name: 'HR Tech Leaders',
      description: 'Outreach to HR technology decision makers',
      prospects: 38,
      successRate: 65,
      status: 'active' as const
    },
    {
      id: 3,
      name: 'EdTech Expansion',
      description: 'Educational technology market penetration',
      prospects: 28,
      successRate: 58,
      status: 'paused' as const
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-professional">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            AI-Powered LinkedIn Outreach
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Create personalized campaigns, analyze prospects, and generate high-converting messages with artificial intelligence.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-50 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create New Campaign
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Campaigns */}
      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>
              Your latest outreach campaigns and their performance
            </CardDescription>
          </div>
          <Button variant="outline">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};