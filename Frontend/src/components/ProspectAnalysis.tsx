import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Search, Brain, Copy, RefreshCw, User, Building2 } from 'lucide-react';

interface ProspectData {
  fullName: string;
  jobTitle: string;
  company: string;
  industry: string;
  location: string;
  linkedinUrl: string;
  profileSummary: string;
  recentActivity: string;
}

interface AnalysisResult {
  matchScore: number;
  insights: string[];
  painPoints: string[];
  personalizationHooks: string[];
  recommendedApproach: string;
  connectionMessage: string;
  followUpMessage: string;
  aiReasoning: string;
  personalizationScore: number;
}

export const ProspectAnalysis = () => {
  const [prospectData, setProspectData] = useState<ProspectData>({
    fullName: '',
    jobTitle: '',
    company: '',
    industry: '',
    location: '',
    linkedinUrl: '',
    profileSummary: '',
    recentActivity: ''
  });

  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate API call - replace with actual API integration
    setTimeout(() => {
      setAnalysisResult({
        matchScore: 87,
        insights: [
          'Strong technical background in SaaS development',
          'Recently posted about scaling challenges',
          'Active in startup communities',
          'Looking for growth solutions'
        ],
        painPoints: [
          'Struggling with customer acquisition costs',
          'Team scaling issues',
          'Need for better automation tools',
          'Time management challenges'
        ],
        personalizationHooks: [
          'Recent product launch',
          'Team expansion',
          'Industry expertise',
          'Shared connections'
        ],
        recommendedApproach: 'Lead with a specific insight about their recent product launch and how your solution addresses their scaling challenges. Mention shared connections or industry experience to build credibility.',
        connectionMessage: `Hi ${prospectData.fullName}, I noticed your recent post about scaling ${prospectData.company}. As someone who's helped similar SaaS companies overcome growth challenges, I'd love to share some insights that might be relevant to your journey.`,
        followUpMessage: `Thanks for connecting! I've been following ${prospectData.company}'s growth story and was impressed by your recent product launch. Many SaaS founders I work with face similar scaling challenges around this stage. I'd love to share a specific strategy that helped a similar company increase their efficiency by 40% while reducing costs. Would you be open to a brief conversation this week?`,
        aiReasoning: 'The message leverages their recent activity, acknowledges their specific challenges, and offers value before asking for anything. The personalization score is high due to specific references to their company and recent achievements.',
        personalizationScore: 9
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Prospect Input Form */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Prospect Information
          </CardTitle>
          <CardDescription>
            Enter prospect details for AI-powered analysis and message generation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="John Smith"
                value={prospectData.fullName}
                onChange={(e) => setProspectData(prev => ({ ...prev, fullName: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title *</Label>
              <Input
                id="jobTitle"
                placeholder="VP of Sales"
                value={prospectData.jobTitle}
                onChange={(e) => setProspectData(prev => ({ ...prev, jobTitle: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                placeholder="TechCorp Inc."
                value={prospectData.company}
                onChange={(e) => setProspectData(prev => ({ ...prev, company: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                placeholder="SaaS"
                value={prospectData.industry}
                onChange={(e) => setProspectData(prev => ({ ...prev, industry: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="San Francisco, CA"
                value={prospectData.location}
                onChange={(e) => setProspectData(prev => ({ ...prev, location: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
              <Input
                id="linkedinUrl"
                placeholder="https://linkedin.com/in/johnsmith"
                value={prospectData.linkedinUrl}
                onChange={(e) => setProspectData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="profileSummary">Profile Summary</Label>
            <Textarea
              id="profileSummary"
              placeholder="Brief summary of their LinkedIn profile, experience, and background..."
              value={prospectData.profileSummary}
              onChange={(e) => setProspectData(prev => ({ ...prev, profileSummary: e.target.value }))}
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="recentActivity">Recent Activity</Label>
            <Textarea
              id="recentActivity"
              placeholder="Recent posts, job changes, company news, or other relevant activity..."
              value={prospectData.recentActivity}
              onChange={(e) => setProspectData(prev => ({ ...prev, recentActivity: e.target.value }))}
              className="min-h-[80px]"
            />
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={!prospectData.fullName || !prospectData.jobTitle || !prospectData.company || isAnalyzing}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            size="lg"
          >
            {isAnalyzing ? (
              <>
                <Brain className="h-5 w-5 mr-2 animate-pulse" />
                Analyzing Prospect...
              </>
            ) : (
              <>
                <Search className="h-5 w-5 mr-2" />
                Analyze Prospect
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysisResult && (
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              AI Analysis Results
            </CardTitle>
            <CardDescription>
              Comprehensive prospect analysis and personalized message recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Match Score */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-base font-semibold">Match Score</Label>
                <span className={`text-2xl font-bold ${getScoreColor(analysisResult.matchScore)}`}>
                  {analysisResult.matchScore}%
                </span>
              </div>
              <Progress value={analysisResult.matchScore} className="h-3" />
            </div>

            <Separator />

            {/* Key Insights */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Key Insights</Label>
              <ul className="space-y-2">
                {analysisResult.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pain Points */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Identified Pain Points</Label>
              <ul className="space-y-2">
                {analysisResult.painPoints.map((pain, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personalization Hooks */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Personalization Hooks</Label>
              <div className="flex flex-wrap gap-2">
                {analysisResult.personalizationHooks.map((hook, index) => (
                  <Badge key={index} variant="secondary" className="bg-accent">
                    {hook}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recommended Approach */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Recommended Approach</Label>
              <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                {analysisResult.recommendedApproach}
              </p>
            </div>

            <Separator />

            {/* Generated Messages */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label className="text-lg font-semibold">Generated Messages</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Personalization Score:</span>
                  <Badge variant="secondary" className="bg-success text-white">
                    {analysisResult.personalizationScore}/10
                  </Badge>
                </div>
              </div>

              {/* Connection Message */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="font-medium">Connection Request Message</Label>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(analysisResult.connectionMessage)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Textarea
                  value={analysisResult.connectionMessage}
                  readOnly
                  className="min-h-[100px] bg-muted"
                />
                <p className="text-xs text-muted-foreground">
                  {analysisResult.connectionMessage.length}/280 characters
                </p>
              </div>

              {/* Follow-up Message */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="font-medium">Follow-up Message</Label>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(analysisResult.followUpMessage)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Textarea
                  value={analysisResult.followUpMessage}
                  readOnly
                  className="min-h-[120px] bg-muted"
                />
                <p className="text-xs text-muted-foreground">
                  {analysisResult.followUpMessage.length}/500 characters
                </p>
              </div>

              {/* AI Reasoning */}
              <div className="space-y-3">
                <Label className="font-medium">AI Reasoning</Label>
                <p className="text-sm text-muted-foreground bg-accent p-3 rounded-lg">
                  {analysisResult.aiReasoning}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};