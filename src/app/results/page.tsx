"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { motion } from "framer-motion"

interface AnalysisData {
  resumeText: string
  jobDescription: string
  analysis: {
    atsScore: number
    matchingSkills: string[]
    missingSkills: string[]
    keywordDensity: number
    suggestions: string[]
  }
}

export default function Results() {
  const [data, setData] = useState<AnalysisData | null>(null)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('resumeAnalysis')
    if (stored) {
      setData(JSON.parse(stored))
    } else {
      router.push('/analyzer')
    }
  }, [router])

  if (!data) {
    return <div>Loading...</div>
  }

  const { analysis } = data

  const skillData = [
    { name: 'Matching Skills', value: analysis.matchingSkills.length, color: '#10b981' },
    { name: 'Missing Skills', value: analysis.missingSkills.length, color: '#ef4444' }
  ]

  const atsData = [
    { name: 'ATS Score', value: analysis.atsScore },
    { name: 'Remaining', value: 100 - analysis.atsScore }
  ]

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Analysis Results</h1>
          <p className="text-muted-foreground mt-2">
            Here's what we found about your resume.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>ATS Score</CardTitle>
              <CardDescription>
                How well your resume performs against ATS systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-4">
                {analysis.atsScore}%
              </div>
              <Progress value={analysis.atsScore} className="mb-4" />
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={atsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    <Cell fill="#10b981" />
                    <Cell fill="#e5e7eb" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Keyword Density</CardTitle>
              <CardDescription>
                Percentage of job keywords found in your resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-4">
                {analysis.keywordDensity}%
              </div>
              <Progress value={analysis.keywordDensity} />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Skills Analysis</CardTitle>
            <CardDescription>
              Matching and missing skills compared to the job description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-3 text-green-600">Matching Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.matchingSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-600">Missing Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.missingSkills.map((skill) => (
                    <Badge key={skill} variant="destructive">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
            <CardDescription>
              Personalized recommendations to improve your resume
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {analysis.suggestions.map((suggestion, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{suggestion}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4">
          <Button onClick={() => router.push('/analyzer')} variant="outline">
            Analyze Another Resume
          </Button>
          <Button onClick={() => router.push('/')}>
            Back to Home
          </Button>
        </div>
      </motion.div>
    </div>
  )
}