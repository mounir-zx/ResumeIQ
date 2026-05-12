"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/file-upload"
import { parsePDF } from "@/lib/pdf-parser"
import { motion } from "framer-motion"

export default function Analyzer() {
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const router = useRouter()

  const handleFileSelect = (file: File) => {
    setResumeFile(file)
  }

  const handleAnalyze = async () => {
    if (!resumeFile || !jobDescription) return

    setIsAnalyzing(true)

    try {
      const resumeText = await parsePDF(resumeFile)

      // Mock analysis - in real app, send to AI
      const analysis = {
        atsScore: Math.floor(Math.random() * 40) + 60, // 60-100
        matchingSkills: ["JavaScript", "React", "Node.js"],
        missingSkills: ["Python", "AWS", "Docker"],
        keywordDensity: 75,
        suggestions: [
          "Add more quantifiable achievements",
          "Include relevant certifications",
          "Tailor your resume to the job description"
        ]
      }

      // Store in localStorage for results page
      localStorage.setItem('resumeAnalysis', JSON.stringify({
        resumeText,
        jobDescription,
        analysis
      }))

      router.push('/results')
    } catch (error) {
      console.error('Error parsing PDF:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Resume Analyzer</h1>
          <p className="text-muted-foreground mt-2">
            Upload your resume and paste the job description to get AI-powered insights.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload Resume</CardTitle>
            <CardDescription>
              Upload your resume in PDF format for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FileUpload onFileSelect={handleFileSelect} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Job Description</CardTitle>
            <CardDescription>
              Paste the job description you want to match against.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={10}
              className="min-h-[200px]"
            />
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button
            onClick={handleAnalyze}
            disabled={!resumeFile || !jobDescription || isAnalyzing}
            size="lg"
            className="w-full max-w-xs"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}