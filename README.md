<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/72725c9a-1e55-4657-9b66-18926e8b284e

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

This repository is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

1.  Make sure your changes are committed and pushed to `main`.
2.  Go to the "Settings" tab in your GitHub repository.
3.  Navigate to "Pages" on the left sidebar.
4.  Under "Build and deployment", ensure the "Source" is set to **GitHub Actions**.
5.  Once the Action finishes building and deploying, your site will be live at `https://Lilmonstersam.github.io/duracube-product-page-layout/`.
