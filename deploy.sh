#!/bin/bash

# Deploy to GitHub Pages Script
echo "🚀 Building ResumeIQ for GitHub Pages..."

# Build the project
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Create .nojekyll file to prevent GitHub Pages from ignoring files starting with _
touch out/.nojekyll

# Initialize git in out directory
cd out
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Force push to gh-pages branch
git push -f https://github.com/mounir-zx/ResumeIQ.git main:gh-pages

cd ..
echo "🎉 Deployed to GitHub Pages!"
echo "🌐 Your site will be available at: https://mounir-zx.github.io/ResumeIQ"