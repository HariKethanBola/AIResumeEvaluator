import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Target, 
  Award, 
  Download, 
  CheckCircle, 
  AlertTriangle,
  Star,
  Briefcase
} from "lucide-react";

const ResultsSection = () => {
  // Mock data - would come from AI analysis
  const analysisData = {
    overallScore: 85,
    extractedSkills: [
      { name: "JavaScript", level: "Advanced", inDemand: true },
      { name: "React", level: "Intermediate", inDemand: true },
      { name: "Python", level: "Beginner", inDemand: true },
      { name: "Node.js", level: "Intermediate", inDemand: true },
      { name: "SQL", level: "Intermediate", inDemand: false },
      { name: "Git", level: "Advanced", inDemand: false }
    ],
    recommendations: [
      "Add TypeScript to strengthen your JavaScript stack",
      "Learn React Testing Library for better testing skills",
      "Consider learning Next.js for full-stack development",
      "Improve Python skills with Django or FastAPI"
    ],
    jobMatches: [
      {
        title: "Frontend Developer",
        company: "TechCorp",
        match: 92,
        salary: "$70,000 - $90,000",
        skills: ["JavaScript", "React", "TypeScript"]
      },
      {
        title: "Full Stack Developer", 
        company: "StartupXYZ",
        match: 78,
        salary: "$65,000 - $85,000",
        skills: ["JavaScript", "React", "Node.js", "Python"]
      },
      {
        title: "Software Engineer",
        company: "BigTech Inc",
        match: 71,
        salary: "$80,000 - $110,000",
        skills: ["JavaScript", "Python", "SQL", "Git"]
      }
    ]
  };

  return (
    <section id="results" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Your <span className="text-gradient">Analysis Results</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive insights about your resume and personalized recommendations.
          </p>
        </div>

        {/* Overall Score */}
        <Card className="card-glow mb-8 text-center">
          <div className="p-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-background flex items-center justify-center">
                    <span className="text-4xl font-bold text-gradient">
                      {analysisData.overallScore}
                    </span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-accent rounded-full p-2">
                  <Award className="text-background" size={20} />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Overall Resume Score</h3>
            <p className="text-foreground/70">
              Your resume shows strong potential with room for strategic improvements.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Skills Analysis */}
          <Card className="card-glow">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-primary/20 p-2 rounded-lg mr-3">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Skills Analysis</h3>
              </div>
              
              <div className="space-y-4">
                {analysisData.extractedSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{skill.name}</span>
                      {skill.inDemand && (
                        <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                          In Demand
                        </Badge>
                      )}
                    </div>
                    <Badge 
                      variant={skill.level === 'Advanced' ? 'default' : 'secondary'}
                      className={skill.level === 'Advanced' ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <Card className="card-glow">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-accent/20 p-2 rounded-lg mr-3">
                  <Target className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold">AI Recommendations</h3>
              </div>
              
              <div className="space-y-4">
                {analysisData.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">{rec}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="text-primary mr-2" size={16} />
                  <span className="text-sm font-medium text-primary">Priority Action</span>
                </div>
                <p className="text-sm text-foreground/80">
                  Focus on TypeScript and testing skills to increase your marketability by 25%.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Job Matches */}
        <Card className="card-glow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-lg mr-3">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Top Job Matches</h3>
              </div>
              <Badge className="bg-accent/20 text-accent border-accent/30">
                Based on your skills
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {analysisData.jobMatches.map((job, index) => (
                <Card key={index} className="p-6 bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="text-accent mr-2" size={16} />
                      <span className="text-sm font-medium text-accent">
                        {job.match}% Match
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Briefcase className="text-primary" size={20} />
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-lg mb-1">{job.title}</h4>
                  <p className="text-foreground/70 text-sm mb-3">{job.company}</p>
                  <p className="text-primary font-medium text-sm mb-4">{job.salary}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="text-center mt-12 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button className="btn-hero">
            <Download className="mr-2" size={20} />
            Download Report
          </Button>
          <Button 
            variant="outline" 
            className="btn-ghost"
            onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Analyze Another Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;