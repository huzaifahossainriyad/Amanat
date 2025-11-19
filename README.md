# 🕌 Amanat - Islamic Finance & Debt Manager

> **Amanat** (أمانة) - meaning "Trust" in Arabic. A secure, open-source platform for managing personal debts and expenses with Islamic financial principles.

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green?style=flat-square&logo=supabase)](https://supabase.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

## 🌟 Features

### 💰 Debt Management
- Track receivables (money owed to you)
- Track payables (money you owe)
- Detailed records with due dates
- Payment status tracking (Pending, Partial, Paid)

### 🕌 Islamic Finance
- **Witness Information**: Add witness details to strengthen Islamic validity
- **Zakat Calculation**: Automatic Zakat eligibility based on Nisab threshold
- **Islamic Principles**: Built with Islamic financial ethics in mind

### 📊 Expense Tracking
- Log daily expenses with categories
- 10 predefined expense categories
- Date-based tracking
- Detailed descriptions and notes

### 🔒 Privacy & Security
- **Privacy Toggle**: Blur sensitive financial data with one click
- **Secure Authentication**: Supabase-powered authentication
- **Row Level Security**: Database-level data protection
- **Open Source**: Transparent code for community review

## 🎨 Design

### Earthy/Soil Aesthetic
- **Cream Background**: #FDFBF7
- **Terracotta Primary**: #C05621
- **Sage Green Accent**: #48BB78
- **Burnt Red Danger**: #E53E3E
- **Muted Brown Text**: #4A4036

### Special Features
- Custom magnetic cursor with hover effects
- Responsive design for all devices
- Smooth transitions and animations
- Accessible form inputs

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun runtime
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/amanat.git
cd amanat

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local

# Run development server
bun run dev
```

Visit `http://localhost:3000` to see the application.

## 📖 Usage

### Landing Page
- Explore features and benefits
- Sign up for a new account
- Learn about Islamic finance features

### Authentication
- Create account with email and password
- Secure login with Supabase
- Protected dashboard routes

### Dashboard
- View financial overview with summary cards
- Toggle privacy mode to hide sensitive data
- Check Zakat eligibility
- Quick access to add debt or expense

### Add Debt
1. Select debt type (I Owe / They Owe Me)
2. Enter person's name and amount
3. Add optional due date
4. Include witness information (optional)
5. Submit to record debt

### Add Expense
1. Enter expense amount
2. Select category
3. Pick date
4. Add description (optional)
5. Submit to record expense

## 🏗️ Project Structure

```
amanat/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Landing page
│   ├── globals.css                # Global styles
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   └── dashboard/
│       ├── page.tsx
│       ├── add-debt/page.tsx
│       └── add-expense/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── CustomCursor.tsx
│   └── ui/                        # shadcn/ui components
├── lib/
│   └── supabase.ts
├── .env.local                     # Environment variables
└── package.json
```

## 🔧 Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14+** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first CSS |
| **Supabase** | Backend & Authentication |
| **shadcn/ui** | UI Components |
| **Lucide React** | Icons |
| **React Hook Form** | Form management |

## 📋 Database Schema

### Tables
- **profiles**: User profile information
- **debts**: Debt records with type and status
- **expenses**: Daily expense tracking

### Features
- Row Level Security (RLS)
- Auto-create profile on signup
- Proper relationships and timestamps

## 🔐 Security

- ✅ Protected routes with authentication
- ✅ Supabase Row Level Security
- ✅ Environment variables for sensitive data
- ✅ Form validation
- ✅ Error handling

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop optimization
- Touch-friendly interface

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Build for production
bun run build

# Start production server
bun run start
```

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 📚 Documentation

- [Quick Start Guide](QUICK_START.md)
- [Project Completion Summary](PROJECT_COMPLETION_SUMMARY.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Islamic financial principles in mind
- Inspired by the concept of Amanat (Trust) in Islamic tradition
- Community-driven open-source project

## 📞 Support

For support, email support@amanat.app or open an issue on GitHub.

## 🌐 Live Demo

Visit [https://amanat.lindy.site](https://amanat.lindy.site) to see the application in action.

---

**Made with ❤️ for the Muslim community**

*"Indeed, Allah commands you to render trusts to whom they are due" - Quran 4:58*
