# GitHub Pages Setup Guide

Your portfolio website is now ready to be hosted on GitHub Pages!

## ✅ Automatic Setup (Recommended)

I've already created a GitHub Actions workflow that will automatically deploy your site. Here's what to do:

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/rakarakaka/Portofolio_DanNaraka
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

### Step 2: Wait for Deployment

- GitHub will automatically run the deployment workflow
- You can check the progress in the **Actions** tab
- It usually takes 1-2 minutes

### Step 3: Access Your Live Website

Once deployed, your website will be available at:
**https://rakarakaka.github.io/Portofolio_DanNaraka/**

## 🔄 Future Updates

Every time you push changes to the `main` branch, GitHub will automatically:
- Detect the changes
- Run the deployment workflow
- Update your live website

No manual steps needed!

## 🐛 Troubleshooting

### If the site doesn't appear:

1. Check the **Actions** tab for any errors
2. Make sure GitHub Pages is set to use **"GitHub Actions"** as the source
3. Wait a few minutes - first deployment can take longer
4. Clear your browser cache and try again

### If 3D models don't load:

- Make sure you're accessing via HTTPS (GitHub Pages provides this automatically)
- Check browser console (F12) for any errors
- Verify the GLB files are in the `3dAsset/` folder

## 📝 Notes

- The website URL follows the pattern: `https://USERNAME.github.io/REPOSITORY_NAME/`
- Your repository name is: `Portofolio_DanNaraka`
- Your username is: `rakarakaka`
- So your URL is: `https://rakarakaka.github.io/Portofolio_DanNaraka/`

Enjoy your live portfolio! 🎉

