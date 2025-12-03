# Portfolio Website

A modern, secure portfolio website showcasing 3D assets, art, and articles with a black and white theme.

## Features

- **3D Preview Section**: Interactive 3D model viewer using model-viewer
- **Art Gallery**: Showcase your artwork
- **Articles Section**: Share your thoughts and tutorials
- **Responsive Design**: Works on desktop and mobile devices
- **Security Focused**: Minimal dependencies, secure coding practices

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- [model-viewer](https://modelviewer.dev/) for 3D GLB file display

## 🌐 Live Website

**Your portfolio is live on GitHub Pages!**

Visit: **https://rakarakaka.github.io/Portofolio_DanNaraka/**

The website is automatically deployed whenever you push changes to the `main` branch.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Python 3.x (for local development server - optional)

### Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd portofolio
   ```

2. Start a local web server:
   ```bash
   # Windows
   start-server.bat
   
   # Or manually with Python
   python -m http.server 8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

**Note**: The 3D models require a web server (HTTP/HTTPS) and cannot be viewed by opening the HTML file directly due to browser security restrictions. When hosted on GitHub Pages, the models will work automatically!

## Project Structure

```
portofolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── 3dAsset/            # 3D model files (GLB format)
│   ├── cincau.glb
│   ├── indomi.glb
│   └── nasgor.glb
├── start-server.bat    # Windows server startup script
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Customization

- Edit `index.html` to update content, titles, and descriptions
- Modify `styles.css` to adjust colors and styling (currently black & white theme)
- Add your own 3D models to the `3dAsset/` folder and update the HTML
- Replace placeholder art and article content with your own

## 🚀 Deployment

This repository uses GitHub Actions to automatically deploy to GitHub Pages. The workflow is configured in `.github/workflows/pages.yml`.

### Manual Setup (if needed)

1. Go to your repository **Settings**
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. The site will be automatically deployed on every push to `main`

## License

All rights reserved.


