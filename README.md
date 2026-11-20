# Bishu Subedi — Portfolio
A creative React + Vite portfolio starter for bishusubedi.com.np.

## Run locally
Install Node.js 22, then run:
```bash
npm install
npm run dev
```

## Personalise
Edit `src/data.js` to update your introduction, public social links, and project descriptions. Replace all sample project details with accurate information before launch. Only publish contact details you are comfortable making public.

## Deploy
This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. In repository Settings → Pages, choose **GitHub Actions** as the build and deployment source. The workflow builds the Vite site and deploys the `dist` folder.

The included `public/CNAME` is configured for `bishusubedi.com.np`. Configure the domain's DNS at its current DNS provider using GitHub's official instructions:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

For the apex domain, GitHub Pages documents A records:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Enable HTTPS in Settings → Pages after DNS verification and certificate provisioning.