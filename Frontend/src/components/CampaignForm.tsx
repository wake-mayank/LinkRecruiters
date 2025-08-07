import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Rocket } from 'lucide-react';

interface FormData {
  productDescription: string;
  targetIndustry: string;
  jobRoles: string[];
  companySize: string;
  targetRegion: string;
  outreachGoal: string;
  brandVoice: string;
}

export const CampaignForm = () => {
  const [formData, setFormData] = useState<FormData>({
    productDescription: '',
    targetIndustry: '',
    jobRoles: [],
    companySize: '',
    targetRegion: '',
    outreachGoal: '',
    brandVoice: ''
  });

  const [newRole, setNewRole] = useState('');

  const industries = [
    'SaaS', 'EdTech', 'FinTech', 'Healthcare', 'E-commerce', 'Manufacturing', 
    'Consulting', 'Real Estate', 'Marketing', 'HR Tech'
  ];

  const commonRoles = [
    'CEO', 'CTO', 'VP Sales', 'Head of Marketing', 'HR Manager', 
    'Product Manager', 'Operations Director', 'Founder'
  ];

  const companySizes = ['Startup (1-50)', 'SME (51-500)', 'Enterprise (500+)'];
  const outreachGoals = ['Book Call', 'Request Demo', 'Hiring', 'Partnership', 'Networking'];
  const brandVoices = ['Professional', 'Friendly', 'Enthusiastic', 'Formal', 'Casual'];

  const addJobRole = (role: string) => {
    if (role && !formData.jobRoles.includes(role)) {
      setFormData(prev => ({
        ...prev,
        jobRoles: [...prev.jobRoles, role]
      }));
    }
    setNewRole('');
  };

  const removeJobRole = (role: string) => {
    setFormData(prev => ({
      ...prev,
      jobRoles: prev.jobRoles.filter(r => r !== role)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Campaign created:', formData);
    // Here you would typically send the data to your API
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            Create New Campaign
          </CardTitle>
          <CardDescription>
            Set up your AI-powered LinkedIn outreach campaign
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Product Description */}
          <div className="space-y-2">
            <Label htmlFor="product">Product/Service Description *</Label>
            <Textarea
              id="product"
              placeholder="Describe your product or service that you're promoting..."
              value={formData.productDescription}
              onChange={(e) => setFormData(prev => ({ ...prev, productDescription: e.target.value }))}
              className="min-h-[100px]"
              required
            />
            <p className="text-xs text-muted-foreground">
              {formData.productDescription.length} characters (minimum 10 required)
            </p>
          </div>

          {/* Target Industry */}
          <div className="space-y-2">
            <Label htmlFor="industry">Target Industry *</Label>
            <Select
              value={formData.targetIndustry}
              onValueChange={(value) => setFormData(prev => ({ ...prev, targetIndustry: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select target industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Job Roles */}
          <div className="space-y-2">
            <Label>Ideal Job Roles *</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.jobRoles.map((role) => (
                <Badge key={role} variant="secondary" className="flex items-center gap-1">
                  {role}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                    onClick={() => removeJobRole(role)}
                  />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add custom role"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addJobRole(newRole))}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => addJobRole(newRole)}
                disabled={!newRole}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {commonRoles.map((role) => (
                <Badge
                  key={role}
                  variant="outline"
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => addJobRole(role)}
                >
                  + {role}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Size */}
            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size</Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  {companySizes.map((size) => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Target Region */}
            <div className="space-y-2">
              <Label htmlFor="region">Target Region</Label>
              <Input
                id="region"
                placeholder="e.g., North America, Europe, Global"
                value={formData.targetRegion}
                onChange={(e) => setFormData(prev => ({ ...prev, targetRegion: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Outreach Goal */}
            <div className="space-y-2">
              <Label htmlFor="goal">Outreach Goal</Label>
              <Select
                value={formData.outreachGoal}
                onValueChange={(value) => setFormData(prev => ({ ...prev, outreachGoal: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select outreach goal" />
                </SelectTrigger>
                <SelectContent>
                  {outreachGoals.map((goal) => (
                    <SelectItem key={goal} value={goal}>{goal}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Brand Voice */}
            <div className="space-y-2">
              <Label htmlFor="voice">Brand Voice</Label>
              <Select
                value={formData.brandVoice}
                onValueChange={(value) => setFormData(prev => ({ ...prev, brandVoice: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select brand voice" />
                </SelectTrigger>
                <SelectContent>
                  {brandVoices.map((voice) => (
                    <SelectItem key={voice} value={voice}>{voice}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            size="lg"
          >
            <Rocket className="h-5 w-5 mr-2" />
            Create Campaign
          </Button>

        </CardContent>
      </Card>
    </form>
  );
};