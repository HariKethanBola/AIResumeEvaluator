import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      setAnalysisComplete(false);
      toast({
        title: "File uploaded successfully!",
        description: `${file.name} is ready for analysis.`,
      });
    }
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
    onDropRejected: () => {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOCX file.",
        variant: "destructive",
      });
    }
  });

  const handleAnalyze = async () => {
    if (!uploadedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsAnalyzing(false);
    setAnalysisComplete(true);
    
    toast({
      title: "Analysis complete!",
      description: "Your resume has been successfully analyzed.",
    });

    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <section id="upload" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Upload Your <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Drop your resume below and let our AI analyze it for skill gaps and job opportunities.
          </p>
        </div>

        <Card className="card-glow max-w-2xl mx-auto">
          {!uploadedFile ? (
            <div
              {...getRootProps()}
              className={`p-12 text-center border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
                isDragActive 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <input {...getInputProps()} />
              <div className="flex justify-center mb-6">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Upload className="text-primary" size={32} />
                </div>
              </div>
              
              {isDragActive ? (
                <p className="text-lg text-primary font-medium">Drop your resume here!</p>
              ) : (
                <>
                  <p className="text-lg font-medium mb-2">
                    Drag & drop your resume here
                  </p>
                  <p className="text-foreground/60 mb-4">or click to browse files</p>
                  <Button variant="outline" className="btn-ghost">
                    Choose File
                  </Button>
                  <p className="text-sm text-foreground/50 mt-4">
                    Supports PDF and DOCX files up to 10MB
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <FileText className="text-accent" size={24} />
                </div>
              </div>
              
              <p className="font-medium mb-2">{uploadedFile.name}</p>
              <p className="text-sm text-foreground/60 mb-6">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>

              {!analysisComplete && (
                <div className="space-y-4">
                  <Button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="btn-hero w-full"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Analyzing Resume...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2" size={20} />
                        Analyze Resume
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setUploadedFile(null);
                      setAnalysisComplete(false);
                    }}
                    className="btn-ghost w-full"
                  >
                    Upload Different File
                  </Button>
                </div>
              )}

              {analysisComplete && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle className="mr-2" size={24} />
                    <span className="font-medium">Analysis Complete!</span>
                  </div>
                  
                  <Button 
                    onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-hero w-full"
                  >
                    View Results
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setUploadedFile(null);
                      setAnalysisComplete(false);
                    }}
                    className="btn-ghost w-full"
                  >
                    Analyze Another Resume
                  </Button>
                </div>
              )}

              {isAnalyzing && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center text-primary mb-2">
                    <Loader2 className="mr-2 animate-spin" size={16} />
                    <span className="text-sm font-medium">AI Analysis in Progress</span>
                  </div>
                  <div className="text-xs text-foreground/60 space-y-1">
                    <p>• Extracting skills and experience</p>
                    <p>• Analyzing job market trends</p>
                    <p>• Generating recommendations</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </Card>

        {/* Security Notice */}
        <div className="flex items-center justify-center mt-8 text-sm text-foreground/60">
          <AlertCircle className="mr-2" size={16} />
          <span>Your data is secure and will be deleted after analysis</span>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;