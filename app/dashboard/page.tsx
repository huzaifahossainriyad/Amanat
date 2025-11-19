/**
 * Dashboard Page
 * Main dashboard for authenticated users showing financial overview.
 * Features privacy toggle, summary cards, and recent transactions.
 * This is a protected route that requires authentication.
 */

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Navbar } from '@/components/Navbar'
import { createClient } from '@/lib/supabase'
import {
  Eye,
  EyeOff,
  Plus,
  TrendingUp,
  TrendingDown,
  Zap,
  AlertCircle,
} from 'lucide-react'

interface SummaryData {
  totalBalance: number
  totalPayable: number
  totalReceivable: number
  totalExpenses: number
}

export default function DashboardPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isPrivacyMode, setIsPrivacyMode] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [summary, setSummary] = useState<SummaryData>({
    totalBalance: 0,
    totalPayable: 0,
    totalReceivable: 0,
    totalExpenses: 0,
  })

  // Nisab threshold for Zakat (approximate value in USD)
  const NISAB_THRESHOLD = 3000

  useEffect(() => {
    // Check authentication and load user data
    const checkAuthAndLoadData = async () => {
      try {
        const supabase = createClient()
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (!session) {
          router.push('/auth/login')
          return
        }

        setIsAuthenticated(true)
        setUserEmail(session.user.email || '')

        // Load user's financial data
        // For now, we'll use placeholder data
        // In production, this would fetch from the debts and expenses tables
        setSummary({
          totalBalance: 5000,
          totalPayable: 2000,
          totalReceivable: 3000,
          totalExpenses: 1500,
        })
      } catch (error) {
        console.error('Error checking authentication:', error)
        router.push('/auth/login')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthAndLoadData()
  }, [router])

  // Format currency with privacy mode support
  const formatCurrency = (amount: number) => {
    if (isPrivacyMode) {
      return '••••'
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Loading your dashboard...</p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  // Calculate Zakat eligibility
  const isZakatEligible = summary.totalBalance > NISAB_THRESHOLD

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Privacy Toggle */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {userEmail}</p>
            </div>
            <button
              onClick={() => setIsPrivacyMode(!isPrivacyMode)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer"
              title={isPrivacyMode ? 'Show values' : 'Hide values'}
            >
              {isPrivacyMode ? (
                <>
                  <EyeOff className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Privacy On</span>
                </>
              ) : (
                <>
                  <Eye className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Privacy Off</span>
                </>
              )}
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Balance Card */}
            <Card className="p-6 border border-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">Total Balance</h3>
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">
                {formatCurrency(summary.totalBalance)}
              </p>
              <p className="text-xs text-muted-foreground">Net assets</p>
            </Card>

            {/* Total Receivable Card (Green - Positive) */}
            <Card className="p-6 border border-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">Receivable</h3>
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <p className="text-3xl font-bold text-accent mb-2">
                {formatCurrency(summary.totalReceivable)}
              </p>
              <p className="text-xs text-muted-foreground">Money owed to you</p>
            </Card>

            {/* Total Payable Card (Red - Negative) */}
            <Card className="p-6 border border-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">Payable</h3>
                <TrendingDown className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-3xl font-bold text-destructive mb-2">
                {formatCurrency(summary.totalPayable)}
              </p>
              <p className="text-xs text-muted-foreground">Money you owe</p>
            </Card>

            {/* Total Expenses Card */}
            <Card className="p-6 border border-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">Expenses</h3>
                <AlertCircle className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">
                {formatCurrency(summary.totalExpenses)}
              </p>
              <p className="text-xs text-muted-foreground">This month</p>
            </Card>
          </div>

          {/* Zakat Indicator */}
          <Card className="p-6 border border-border mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">Zakat Indicator</h3>
                <p className="text-muted-foreground mb-4">
                  {isZakatEligible
                    ? `Your net assets (${formatCurrency(summary.totalBalance)}) exceed the Nisab threshold (${formatCurrency(NISAB_THRESHOLD)}). You may be eligible to pay Zakat.`
                    : `Your net assets (${formatCurrency(summary.totalBalance)}) are below the Nisab threshold (${formatCurrency(NISAB_THRESHOLD)}). Zakat is not required at this time.`}
                </p>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    isZakatEligible
                      ? 'bg-primary/10 text-primary'
                      : 'bg-accent/10 text-accent'
                  }`}
                >
                  {isZakatEligible ? 'Zakat Eligible' : 'Below Nisab'}
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/dashboard/add-debt" className="block">
              <Card className="p-8 border border-border hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Plus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Add Debt</h3>
                    <p className="text-sm text-muted-foreground">
                      Record a new debt or receivable
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/dashboard/add-expense" className="block">
              <Card className="p-8 border border-border hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Plus className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Add Expense</h3>
                    <p className="text-sm text-muted-foreground">
                      Log a new daily expense
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          {/* Recent Transactions Placeholder */}
          <Card className="p-6 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">Recent Transactions</h2>
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No transactions yet. Start by adding a debt or expense.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
