# Amanat - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun runtime
- Git
- Supabase account (for backend)

### Installation

1. **Navigate to the project directory**
```bash
cd /home/code/amanat
```

2. **Install dependencies** (if not already installed)
```bash
bun install
```

3. **Set up environment variables**
The `.env.local` file is already configured with Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://ylfdptzmfedwefjissns.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_CijPdOuD-HItjw28Gi_YIA_p_50N3eX
```

### Running the Application

**Development Mode:**
```bash
bun run dev
```
The application will be available at `http://localhost:3000`

**Production Build:**
```bash
bun run build
bun run start
```

**Linting:**
```bash
bun run lint
```

---

## 📖 Application Routes

| Route | Description | Protected |
|-------|-------------|-----------|
| `/` | Landing page | ❌ No |
| `/auth/signup` | User registration | ❌ No |
| `/auth/login` | User login | ❌ No |
| `/dashboard` | Main dashboard | ✅ Yes |
| `/dashboard/add-debt` | Add debt form | ✅ Yes |
| `/dashboard/add-expense` | Add expense form | ✅ Yes |

---

## 🎯 Key Features to Test

### 1. Landing Page
- Visit `https://amanat.lindy.site`
- Explore the hero section, features, and benefits
- Click "Get Started Free" or "Sign Up" button

### 2. Authentication
- **Sign Up**: Create a new account with email and password
- **Login**: Log in with your credentials
- **Protected Routes**: Try accessing `/dashboard` without logging in (should redirect to login)

### 3. Dashboard
- View summary cards with financial overview
- Toggle privacy mode with the eye icon
- Check Zakat eligibility indicator
- Click "Add Debt" or "Add Expense" buttons

### 4. Add Debt Form
- Select debt type (I Owe / They Owe Me)
- Enter person's name and amount
- Add optional witness information
- Submit the form

### 5. Add Expense Form
- Enter expense amount
- Select category from dropdown
- Pick a date
- Add optional description and notes
- Submit the form

---

## 🎨 Design System

### Colors
- **Primary (Terracotta)**: #C05621
- **Secondary (Muted Brown)**: #4A4036
- **Accent (Sage Green)**: #48BB78
- **Danger (Burnt Red)**: #E53E3E
- **Background (Cream)**: #FDFBF7

### Typography
- **Headings**: Bold, dark brown (#4A4036)
- **Body Text**: Muted brown (#4A4036)
- **Secondary Text**: Light brown (#A89F8F)

### Components
- Custom magnetic cursor
- Responsive cards and grids
- Form inputs with validation
- Error and success notifications

---

## 📁 Important Files

### Core Application Files
- `app/page.tsx` - Landing page
- `app/layout.tsx` - Root layout with cursor and metadata
- `app/globals.css` - Global styles and theme
- `lib/supabase.ts` - Supabase client configuration

### Authentication
- `app/auth/signup/page.tsx` - Sign up page
- `app/auth/login/page.tsx` - Login page

### Dashboard
- `app/dashboard/page.tsx` - Main dashboard
- `app/dashboard/add-debt/page.tsx` - Add debt form
- `app/dashboard/add-expense/page.tsx` - Add expense form

### Components
- `components/Navbar.tsx` - Navigation bar
- `components/CustomCursor.tsx` - Magnetic cursor effect
- `components/ui/` - shadcn/ui components

### Configuration
- `.env.local` - Environment variables
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

---

## 🔧 Development Tips

### Adding New Pages
1. Create a new folder in `app/` directory
2. Add `page.tsx` file
3. Import necessary components
4. Use the Navbar component for consistency

### Styling
- Use Tailwind CSS classes
- Reference the custom theme colors in `globals.css`
- Use the `bg-background`, `text-foreground`, `text-primary` classes

### Forms
- Use the `Input` component from shadcn/ui
- Add validation with error messages
- Show success notifications after submission

### Protected Routes
- Check authentication in `useEffect`
- Redirect to login if not authenticated
- Show loading state while checking auth

---

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
bun run dev -- -p 3001
```

### Build Errors
1. Clear the `.next` folder:
```bash
rm -rf .next
```

2. Reinstall dependencies:
```bash
bun install
```

3. Rebuild:
```bash
bun run build
```

### Supabase Connection Issues
- Verify environment variables in `.env.local`
- Check Supabase project is active
- Ensure API keys are correct

---

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

---

## 🚀 Deployment to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Add environment variables
- Deploy

3. **Environment Variables on Vercel**
Add these in Vercel project settings:
```
NEXT_PUBLIC_SUPABASE_URL=https://ylfdptzmfedwefjissns.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_CijPdOuD-HItjw28Gi_YIA_p_50N3eX
```

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the documentation links
3. Check the browser console for errors
4. Review server logs in `server.log`

---

## ✅ Checklist for First Run

- [ ] Install dependencies with `bun install`
- [ ] Verify `.env.local` has Supabase credentials
- [ ] Run `bun run dev`
- [ ] Visit `http://localhost:3000`
- [ ] Test landing page
- [ ] Create a test account
- [ ] Access dashboard
- [ ] Test add debt form
- [ ] Test add expense form
- [ ] Test privacy toggle

---

**Happy coding! 🎉**

For more information, see `PROJECT_COMPLETION_SUMMARY.md`
