import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/Dashboard';
import { CampaignForm } from '@/components/CampaignForm';
import { ProspectAnalysis } from '@/components/ProspectAnalysis';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, MessageSquare, Users, Plus } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-fit grid-cols-3">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="campaign" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New Campaign
              </TabsTrigger>
              <TabsTrigger value="analysis" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Prospect Analysis
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dashboard" className="space-y-6">
            <Dashboard />
          </TabsContent>

          <TabsContent value="campaign" className="space-y-6">
            <CampaignForm />
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <ProspectAnalysis />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Index;
