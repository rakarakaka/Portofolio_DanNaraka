# GitHub Setup Guide

Follow these steps to push your portfolio to GitHub:

## Step 1: Install Git

1. **Download Git for Windows:**
   - Go to: https://git-scm.com/download/win
   - Download the latest version (it will download automatically)
   - Run the installer

2. **During Installation:**
   - Use default settings (recommended)
   - Choose "Git from the command line and also from 3rd-party software"
   - Use OpenSSL library
   - Use "Checkout Windows-style, commit Unix-style line endings"
   - Use MinTTY (default terminal)
   - Enable "Enable file system caching"

3. **After Installation:**
   - Close and reopen your terminal/PowerShell
   - Verify installation by running: `git --version`

## Step 2: Configure Git (First Time Only)

Open PowerShell or Command Prompt and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and GitHub email address.

## Step 3: Create GitHub Repository

1. Go to https://github.com and sign in (or create an account)
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name it (e.g., "portfolio" or "my-portfolio")
5. Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 4: Push Your Code

After Git is installed, run these commands in PowerShell (in your portfolio folder):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website with 3D assets"

# Add GitHub repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Troubleshooting

- **If Git command not found:** Restart your terminal after installing Git
- **If authentication fails:** You may need to use a Personal Access Token instead of password
- **For Personal Access Token:** Go to GitHub Settings > Developer settings > Personal access tokens > Generate new token

## Need Help?

- Git documentation: https://git-scm.com/doc
- GitHub guides: https://docs.github.com/en/get-started


