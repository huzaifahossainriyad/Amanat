# Amanat - Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the optimal choice for Next.js applications and offers seamless deployment.

#### Prerequisites
- GitHub account with repository
- Vercel account (free tier available)
- Environment variables ready

#### Steps

1. **Push to GitHub**
```bash
cd /home/code/amanat
git init
git add .
git commit -m "Initial commit: Amanat Islamic Finance Manager"
git branch -M main
git remote add origin https://github.com/yourusername/amanat.git
git push -u origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Select the `amanat` project

3. **Configure Environment Variables**
In Vercel project settings, add:
```
NEXT_PUBLIC_SUPABASE_URL=https://ylfdptzmfedwefjissns.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_CijPdOuD-HItjw28Gi_YIA_p_50N3eX
```

4. **Deploy**
- Click "Deploy"
- Wait for build to complete
- Your app will be live at `https://amanat.vercel.app`

#### Vercel Benefits
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs
- ✅ Built-in analytics
- ✅ Edge functions support
- ✅ Free tier available
- ✅ Custom domain support

---

### Option 2: Docker Deployment

For containerized deployment to any cloud provider.

#### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN npm install -g bun
RUN bun install

# Copy source code
COPY . .

# Build application
RUN bun run build

# Expose port
EXPOSE 3000

# Start application
CMD ["bun", "run", "start"]
```

#### Build and Run
```bash
# Build image
docker build -t amanat:latest .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
  amanat:latest
```

---

### Option 3: Traditional Server Deployment

For deployment on VPS or dedicated servers.

#### Prerequisites
- Node.js 18+ or Bun runtime
- PM2 for process management
- Nginx for reverse proxy

#### Steps

1. **Clone Repository**
```bash
git clone https://github.com/yourusername/amanat.git
cd amanat
```

2. **Install Dependencies**
```bash
bun install
```

3. **Build Application**
```bash
bun run build
```

4. **Set Environment Variables**
```bash
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

5. **Start with PM2**
```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start "bun run start" --name "amanat"

# Save PM2 configuration
pm2 save

# Enable startup on reboot
pm2 startup
```

6. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name amanat.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **Enable SSL with Let's Encrypt**
```bash
sudo certbot --nginx -d amanat.yourdomain.com
```

---

## 📋 Pre-Deployment Checklist

### Code Quality
- [ ] All ESLint errors resolved
- [ ] TypeScript compilation successful
- [ ] No console warnings
- [ ] All imports working correctly

### Testing
- [ ] Landing page loads correctly
- [ ] Sign up form works
- [ ] Login form works
- [ ] Dashboard loads (with auth)
- [ ] Add debt form works
- [ ] Add expense form works
- [ ] Privacy toggle works
- [ ] Responsive design verified

### Configuration
- [ ] Environment variables set
- [ ] Supabase project active
- [ ] Database schema deployed
- [ ] RLS policies configured
- [ ] Auth settings configured

### Performance
- [ ] Build completes successfully
- [ ] Bundle size acceptable
- [ ] Images optimized
- [ ] CSS minified
- [ ] JavaScript minified

### Security
- [ ] No sensitive data in code
- [ ] Environment variables not committed
- [ ] HTTPS enabled
- [ ] CORS configured
- [ ] Rate limiting enabled

---

## 🔧 Environment Variables

### Required Variables
```
NEXT_PUBLIC_SUPABASE_URL=https://ylfdptzmfedwefjissns.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_CijPdOuD-HItjw28Gi_YIA_p_50N3eX
```

### Optional Variables (for future use)
```
NEXT_PUBLIC_APP_URL=https://amanat.yourdomain.com
NEXT_PUBLIC_API_URL=https://api.amanat.yourdomain.com
```

---

## 📊 Monitoring & Maintenance

### Vercel Monitoring
- Check deployment status in Vercel dashboard
- Monitor performance metrics
- Review error logs
- Set up alerts for failures

### Server Monitoring
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs amanat

# Monitor resources
pm2 monit
```

### Database Monitoring
- Monitor Supabase dashboard
- Check database performance
- Review RLS policies
- Monitor storage usage

---

## 🔄 Continuous Integration/Deployment

### GitHub Actions Example
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 🐛 Troubleshooting Deployment

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
bun install
bun run build
```

### Environment Variables Not Loading
- Verify variables are set in deployment platform
- Check variable names match exactly
- Ensure `NEXT_PUBLIC_` prefix for client-side vars
- Restart application after updating

### Database Connection Issues
- Verify Supabase URL is correct
- Check Anon Key is valid
- Ensure RLS policies allow access
- Check network connectivity

### Performance Issues
- Enable Vercel Analytics
- Check bundle size
- Optimize images
- Enable caching headers

---

## 📈 Scaling Considerations

### Database Scaling
- Monitor Supabase usage
- Upgrade plan if needed
- Optimize queries
- Add indexes for frequently queried fields

### Application Scaling
- Use Vercel's auto-scaling
- Monitor response times
- Implement caching
- Consider CDN for static assets

### Cost Optimization
- Use Vercel free tier initially
- Monitor usage metrics
- Optimize database queries
- Clean up unused resources

---

## 🔐 Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Database RLS enabled
- [ ] API rate limiting configured
- [ ] CORS properly configured
- [ ] Input validation implemented
- [ ] SQL injection prevention
- [ ] XSS protection enabled
- [ ] CSRF tokens implemented
- [ ] Regular security updates

---

## 📞 Support & Resources

### Documentation
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Supabase Community](https://supabase.com/community)
- [GitHub Issues](https://github.com/yourusername/amanat/issues)

---

## 🎯 Post-Deployment

### Monitoring
1. Set up error tracking (Sentry, LogRocket)
2. Monitor performance metrics
3. Track user analytics
4. Review logs regularly

### Maintenance
1. Keep dependencies updated
2. Monitor security advisories
3. Backup database regularly
4. Review and optimize costs

### Improvements
1. Gather user feedback
2. Implement feature requests
3. Optimize performance
4. Enhance security

---

## 📝 Deployment Checklist

### Before Deployment
- [ ] Code reviewed
- [ ] Tests passing
- [ ] Build successful
- [ ] Environment variables ready
- [ ] Database schema deployed

### During Deployment
- [ ] Monitor build process
- [ ] Check for errors
- [ ] Verify environment variables
- [ ] Test critical features

### After Deployment
- [ ] Verify all pages load
- [ ] Test authentication
- [ ] Check forms submission
- [ ] Monitor error logs
- [ ] Verify performance

---

**Deployment Status**: ✅ Ready for Production

The Amanat application is fully prepared for deployment. Choose your preferred deployment option and follow the steps above.

For questions or issues, refer to the documentation or open an issue on GitHub.

