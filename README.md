# Dan Wright - Technology Leader CV Landing Page

A premium, responsive landing page showcasing Dan Wright's technology leadership expertise, built with React and designed for GitHub Pages deployment.

## 🚀 Live Demo

This landing page will be automatically deployed to GitHub Pages at: `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME`

## 🎯 Features

- **Premium Visual Design**: Glass-morphism effects, sophisticated animations, and professional color scheme
- **Responsive Layout**: Mobile-first design that looks stunning on all devices
- **Interactive Elements**: Scroll-triggered animations, hover effects, and smooth transitions
- **Executive-Level Content**: Professional experience, key results, and strategic achievements
- **GitHub Pages Ready**: Static site with no backend dependencies

## 📋 Sections

1. **Hero Section** - Alternative side-by-side layout with professional branding
2. **About** - Professional summary and key statistics
3. **Professional Experience** - Detailed career history with quantifiable achievements
4. **Key Results & Impact** - Metrics and strategic accomplishments
5. **Featured Projects** - Case studies with business outcomes
6. **Testimonials** - Client recommendations
7. **Call-to-Action** - LinkedIn connection and scheduling options

## 🛠️ Technologies Used

- **React 19.0.0** - Modern React with hooks
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **CRACO** - Create React App Configuration Override
- **Intersection Observer API** - Scroll-triggered animations
- **Professional Images** - High-quality stock photography from Unsplash/Pexels

## 📦 Installation & Development

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Local Development
```bash
# Clone the repository
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME

# Install dependencies
cd frontend
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## 🚀 GitHub Pages Deployment

### Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages:

1. **Setup Repository**:
   - Create a new repository on GitHub
   - Push this code to the repository
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Update Configuration**:
   - Edit `frontend/package.json` and replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual values
   - Commit and push changes

3. **Automatic Deployment**:
   - Every push to `main` or `master` branch triggers automatic deployment
   - Check the "Actions" tab to monitor deployment progress
   - Site will be available at `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME`

### Manual Deployment

If you prefer manual deployment:

```bash
# Install gh-pages package
cd frontend
yarn add -D gh-pages

# Deploy to GitHub Pages
yarn deploy
```

## 📁 Project Structure

```
/
├── .github/workflows/
│   └── deploy-gh-pages.yml     # GitHub Actions workflow
├── frontend/
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── App.js             # Main React component
│   │   ├── App.css            # Premium styles
│   │   └── index.js           # App entry point
│   ├── package.json           # Dependencies and scripts
│   └── tailwind.config.js     # TailwindCSS configuration
└── README.md                  # This file
```

## 🎨 Customization

### Content Updates
- Edit `frontend/src/App.js` to update personal information, experience, and projects
- Modify the `projectsData`, `testimonialsData`, and experience sections
- Update contact information and social links

### Styling Changes
- Customize colors in `frontend/src/App.css`
- Modify TailwindCSS configuration in `frontend/tailwind.config.js`
- Add new animations and effects as needed

### Adding New Sections
- Create new section components in `App.js`
- Add corresponding CSS classes in `App.css`
- Include scroll-triggered animations using the existing `isVisible` state pattern

## 🔧 Configuration

### GitHub Pages Settings
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically build and deploy

### Domain Configuration (Optional)
To use a custom domain:
1. Add a `CNAME` file to `frontend/public/` with your domain
2. Configure DNS settings with your domain provider
3. Update the `homepage` field in `package.json`

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [Live Demo](https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME)
- [GitHub Repository](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME)
- [LinkedIn](https://linkedin.com/in/dan-wright) (Update with actual profile)

---

**Built with ❤️ for professional success**