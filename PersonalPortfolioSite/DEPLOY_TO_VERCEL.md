# How to Deploy Your Portfolio to Vercel

Follow these steps to deploy your portfolio website to Vercel:

## Step 1: Create a Vercel Account
If you don't already have one, sign up for a free account at [vercel.com](https://vercel.com).

## Step 2: Push Your Code to GitHub
1. Create a new GitHub repository
2. Initialize Git in your project folder:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Connect to your GitHub repository:
   ```
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

## Step 3: Import Your Project in Vercel
1. Log in to your Vercel account
2. Click "Add New..." → "Project"
3. Select your GitHub repository from the list
4. If you don't see it, click "Configure GitHub App" to give Vercel access

## Step 4: Configure the Deployment Settings
When configuring your project in Vercel, use these exact settings:

- **Framework Preset**: Select "Vite"
- **Root Directory**: client
- **Build Command**: npm run build
- **Output Directory**: dist
- **Install Command**: npm install

## Step 5: Environment Variables (if needed)
If your project requires any API keys or environment variables, add them in the "Environment Variables" section in Vercel.

## Step 6: Deploy
Click "Deploy" and Vercel will build and deploy your portfolio website.

## Step 7: Check Your Deployment
After deployment completes (usually takes 1-2 minutes), Vercel will provide a URL where your portfolio is accessible (typically yourproject.vercel.app).

## Step 8: Configure a Custom Domain (Optional)
To use your own domain name:
1. Go to the "Domains" section in your project dashboard
2. Click "Add" and enter your domain name
3. Follow Vercel's instructions to configure your DNS settings

## Troubleshooting Common Issues
If your deployment fails, check:
1. Make sure all dependencies are correctly listed in your package.json
2. Ensure all configuration files are in the correct location (postcss.config.js and tailwind.config.js should be in the client folder)
3. Check the build logs for specific error messages

Congratulations! Your portfolio website is now live and accessible to anyone on the internet.