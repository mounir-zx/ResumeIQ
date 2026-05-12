# ResumeIQ - AI Resume Analyzer

A modern AI-powered resume analyzer built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Beautiful Landing Page**: Modern SaaS design with smooth animations
- **Resume Upload**: Drag & drop PDF upload with react-dropzone
- **PDF Parsing**: Client-side PDF text extraction using pdfjs-dist
- **Job Description Analysis**: Textarea for job description input
- **AI Analysis**: Mock AI analysis including:
  - ATS score calculation
  - Matching and missing skills identification
  - Keyword density analysis
  - Personalized improvement suggestions
- **Results Dashboard**: Interactive charts with Recharts
- **Dark Mode**: Full dark/light theme support with next-themes
- **Responsive Design**: Mobile-first responsive layout
- **Modern UI**: Clean component architecture with shadcn/ui
- **Animations**: Smooth Framer Motion animations
- **Local Storage**: All data stored locally (no backend required)

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

## Pages

- `/` - Landing page with hero section and features
- `/analyzer` - Resume upload and job description input
- `/results` - Analysis results with charts and suggestions

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── analyzer/page.tsx    # Resume analyzer page
│   ├── results/page.tsx     # Results dashboard
│   ├── layout.tsx           # Root layout with navbar/footer
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── navbar.tsx           # Navigation bar
│   ├── footer.tsx           # Footer
│   ├── providers.tsx        # Theme provider
│   ├── theme-toggle.tsx     # Dark mode toggle
│   └── file-upload.tsx      # File upload component
└── lib/
    ├── utils.ts             # Utility functions
    └── pdf-parser.ts        # PDF text extraction
```

## Key Components

- **FileUpload**: Drag & drop PDF upload with validation
- **ThemeToggle**: Dark/light mode switcher
- **Results Dashboard**: Charts showing ATS score, skills analysis, and suggestions
- **Responsive Cards**: Modern card layouts with gradients

## Design Philosophy

- Minimal and professional AI SaaS aesthetic
- Smooth animations and transitions
- Accessible color schemes and typography
- Mobile-first responsive design
- Clean component architecture for maintainability

## Future Enhancements

- Real AI integration for analysis
- Resume optimization suggestions
- Multiple file format support
- User accounts and saved analyses
- Advanced analytics and reporting
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
