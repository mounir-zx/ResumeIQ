# ResumeIQ - AI-Powered Resume Analyzer 🚀

> **Smarter Resume Optimization with AI** - Instantly analyze your resume against job descriptions and get actionable insights to improve your ATS score, skill matching, and hiring chances.

A modern AI-powered resume analyzer built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. Get instant feedback on your resume's compatibility with job descriptions, identify skill gaps, and receive personalized suggestions for improvement.

## ✨ Features

- **🎯 ATS Score Analysis** - Calculate how well your resume performs against Applicant Tracking Systems
- **🔍 Resume Upload** - Drag & drop PDF upload with instant parsing
- **📄 PDF Parsing** - Client-side PDF text extraction (no file uploads to servers)
- **💼 Job Description Matching** - Compare your resume against any job description
- **🤖 AI-Powered Insights**:
  - ATS compatibility scoring
  - Matching and missing skills identification
  - Keyword density analysis
  - Personalized improvement recommendations
- **📊 Interactive Dashboard** - Beautiful charts and visualizations of your results
- **🌙 Dark/Light Mode** - Full theme support with system preference detection
- **📱 Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- **⚡ Client-Side Processing** - All analysis happens locally (privacy-first)
- **🎨 Modern UI** - Smooth animations and professional design
- **💾 Local Storage** - Save your analysis results locally

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Charts**: Recharts
- **PDF Processing**: pdfjs-dist
- **File Upload**: react-dropzone
- **Theme**: next-themes

## 📸 Screenshots

### Landing Page - Beautiful Hero Section
![ResumeIQ Landing Page](Screenshots/Screen%2001.png)
*Professional landing page with feature highlights. Get started instantly with a clean and modern interface designed to inspire confidence.*

### Resume Analyzer - Smart Upload & Job Matching
![Resume Analyzer](Screenshots/Screen%2002.png)
*Upload your resume and paste the job description. Real-time PDF parsing extracts your resume content for instant analysis and comparison.*

### Analysis Results - Comprehensive Insights Dashboard
![Analysis Results](Screenshots/Screen%2003.png)
*View your ATS score, keyword density, skill matching analysis, and get personalized AI suggestions to optimize your resume for success.*

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ResumeIQ.git
cd ResumeIQ
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

### Local Build

```bash
npm run build
npm start
```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `.next` directory.

### Deploy to GitHub Pages

See the [🚀 Deploy to GitHub Pages](#-deploy-to-github-pages) section above for detailed instructions.

## 📁 Project Structure

```
src/
├── app/
│   ├── analyzer/page.tsx       # Resume analyzer page
│   ├── results/page.tsx        # Results dashboard
│   ├── layout.tsx              # Root layout with navbar/footer
│   ├── page.tsx                # Landing page
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── progress.tsx
│   │   ├── separator.tsx
│   │   └── textarea.tsx
│   ├── navbar.tsx              # Navigation bar
│   ├── footer.tsx              # Footer
│   ├── providers.tsx           # Theme provider
│   ├── theme-toggle.tsx        # Dark mode toggle
│   └── file-upload.tsx         # File upload component
└── lib/
    ├── utils.ts                # Utility functions
    └── pdf-parser.ts           # PDF text extraction
```

## 🎯 How It Works

1. **Upload Resume**: Drop your PDF resume or click to select
2. **Paste Job Description**: Add the job description you're targeting
3. **Instant Analysis**: Get real-time analysis including:
   - ATS compatibility score
   - Keyword density analysis
   - Skill matching (what you have vs. what's required)
4. **View Results**: Explore interactive charts and actionable suggestions
5. **Optimize**: Use the suggestions to improve your resume

## 🔧 Technologies Used

- **Frontend Framework**: Next.js 15 with App Router
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Component Library**: shadcn/ui
- **PDF Handling**: pdfjs-dist
- **Data Visualization**: Recharts
- **Animations**: Framer Motion
- **Theme Management**: next-themes
- **File Handling**: react-dropzone

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 💡 Key Concepts

- **Privacy-First**: All resume analysis happens in your browser. No data is sent to external servers.
- **ATS Optimization**: Understand how your resume ranks against Applicant Tracking Systems.
- **Skill Matching**: Instantly see which required skills are in your resume and which are missing.
- **Actionable Insights**: Get specific, personalized recommendations to improve your resume.


## 🚀 Future Enhancements

- Real AI integration (OpenAI API for advanced analysis)
- Backend API for user accounts and resume history
- User authentication and profile management
- Export results as PDF or Word documents
- Browser extension for job site integration
- Mobile app version
- Multi-language support
- Resume templates and builder

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Created by [Abes Mounir](https://github.com/mounir-zx)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- PDF processing with [pdfjs](https://mozilla.github.io/pdf.js/)
- Charts powered by [Recharts](https://recharts.org/)


---

**Give this project a ⭐ if you find it helpful!**
