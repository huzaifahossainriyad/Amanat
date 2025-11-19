/**
 * Landing Page
 * Public-facing homepage showcasing the Amanat application.
 * Features hero section, key benefits, and call-to-action buttons.
 */

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Navbar } from '@/components/Navbar'
import { Heart, Shield, Leaf, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
            Manage your <span className="text-primary">Amanat</span> with Transparency
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Track personal debts, manage expenses, and embrace Islamic financial principles with
            our secure, open-source platform built for trust and accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="cursor-pointer w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Debt Management */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Debt Management</h3>
              <p className="text-muted-foreground">
                Track receivables and payables with detailed records of who owes what and when.
              </p>
            </Card>

            {/* Feature 2: Islamic Features */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Islamic Finance</h3>
              <p className="text-muted-foreground">
                Add witness information and track Zakat eligibility based on your net assets.
              </p>
            </Card>

            {/* Feature 3: Expense Tracking */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Daily Expenses</h3>
              <p className="text-muted-foreground">
                Log and categorize daily expenses to maintain a complete financial picture.
              </p>
            </Card>

            {/* Feature 4: Privacy */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Privacy Toggle</h3>
              <p className="text-muted-foreground">
                Blur sensitive financial data with a single click for enhanced privacy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Amanat?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Secure & Open Source
                </h3>
                <p className="text-muted-foreground">
                  Built with transparency in mind. Your data is yours, and the code is open for
                  community review.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Islamic Principles
                </h3>
                <p className="text-muted-foreground">
                  Designed with Islamic financial ethics in mind, including witness tracking and
                  Zakat calculations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Complete Financial View
                </h3>
                <p className="text-muted-foreground">
                  Manage debts, expenses, and assets all in one place with comprehensive
                  dashboards and reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start managing your Amanat today with our free, secure platform.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Amanat</h4>
              <p className="text-muted-foreground text-sm">
                Islamic Finance & Debt Manager
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2025 Amanat. All rights reserved. Open Source & Community Driven.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
