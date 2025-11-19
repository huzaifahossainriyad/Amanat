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
import { Button } from '@/components/ui/button'
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

interface Debt {
  id: string
  person_name: string
  amount: number
  type: 'OWE' | 'OWED'
  status: string
  created_at: string
}

interface Expense {
  id: string
  title: string
  amount: number
  category: string
  date: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isPrivacyMode, setIsPrivacyMode] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userId, setUserId] = useState<string | null>(null)
  const [summary, setSummary] = useState<SummaryData>({
    totalBalance: 0,
    totalPayable: 0,
    totalReceivable: 0,
    totalExpenses: 0,
  })
  const [recentDebts, setRecentDebts] = useState<Debt[]>([])
  const [recentExpenses, setRecentExpenses] = useState<Expense[]>([])

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
        setUserId(session.user.id)

        // Load debts
        const { data: debtsData, error: debtsError } = await supabase
          .from('debts')
          .select('*')
          .eq('user_id', session.user.id)
          .order('created_at', { ascending: false })
          .limit(5)

        if (debtsError) {
          console.error('Error loading debts:', debtsError)
        } else {
          setRecentDebts(debtsData || [])
        }

        // Load expenses
        const { data: expensesData, error: expensesError } = await supabase
          .from('expenses')
          .select('*')
          .eq('user_id', session.user.id)
          .order('date', { ascending: false })
          .limit(5)

        if (expensesError) {
          console.error('Error loading expenses:', expensesError)
        } else {
          setRecentExpenses(expensesData || [])
        }

        // Calculate summary
        const totalPayable = (debtsData || [])
          .filter((d) => d.type === 'OWE')
          .reduce((sum, d) => sum + (d.amount || 0), 0)

        const totalReceivable = (debtsData || [])
          .filter((d) => d.type === 'OWED')
          .reduce((sum, d) => sum + (d.amount || 0), 0)

        const totalExpenses = (expensesData || []).reduce(
          (sum, e) => sum + (e.amount || 0),
          0
        )

        const totalBalance = totalReceivable - totalPayable

        setSummary({
          totalBalance,
          totalPayable,
          totalReceivable,
          totalExpenses,
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
            <div className="text-center">
              <p className="text-muted-foreground">লোড হচ্ছে...</p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const isEligibleForZakat = summary.totalBalance >= NISAB_THRESHOLD

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                স্বাগতম, {userEmail?.split('@')[0]}
              </h1>
              <p className="text-muted-foreground">
                আপনার আর্থিক অবস্থা এক নজরে দেখুন
              </p>
            </div>

            {/* Privacy Toggle */}
            <button
              onClick={() => setIsPrivacyMode(!isPrivacyMode)}
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors cursor-pointer"
            >
              {isPrivacyMode ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  <span>গোপনীয়তা চালু</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span>গোপনীয়তা বন্ধ</span>
                </>
              )}
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Balance */}
            <Card className="p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  মোট ব্যালেন্স
                </h3>
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">
                {formatCurrency(summary.totalBalance)}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {summary.totalBalance >= 0 ? 'আপনার পক্ষে' : 'আপনার বিপক্ষে'}
              </p>
            </Card>

            {/* Total Payable */}
            <Card className="p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  মোট প্রদেয়
                </h3>
                <TrendingDown className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-3xl font-bold text-destructive">
                {formatCurrency(summary.totalPayable)}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                আপনি যা ঋণী
              </p>
            </Card>

            {/* Total Receivable */}
            <Card className="p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  মোট প্রাপ্য
                </h3>
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <p className="text-3xl font-bold text-accent">
                {formatCurrency(summary.totalReceivable)}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                যা আপনার প্রাপ্য
              </p>
            </Card>

            {/* Total Expenses */}
            <Card className="p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  মোট খরচ
                </h3>
                <AlertCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-3xl font-bold text-foreground">
                {formatCurrency(summary.totalExpenses)}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                এই মাসের খরচ
              </p>
            </Card>
          </div>

          {/* Zakat Indicator */}
          {isEligibleForZakat && (
            <Card className="p-6 border border-accent bg-accent/5 mb-8">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    জাকাত যোগ্য
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    আপনার মোট সম্পদ নিসাব থ্রেশহোল্ড (${NISAB_THRESHOLD}) অতিক্রম করেছে।
                    আপনি জাকাত দেওয়ার যোগ্য হতে পারেন।
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href="/dashboard/add-debt" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 cursor-pointer">
                <Plus className="w-4 h-4 mr-2" />
                ঋণ যোগ করুন
              </Button>
            </Link>
            <Link href="/dashboard/add-expense" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 cursor-pointer">
                <Plus className="w-4 h-4 mr-2" />
                খরচ যোগ করুন
              </Button>
            </Link>
          </div>

          {/* Recent Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Debts */}
            <Card className="p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">
                সাম্প্রতিক ঋণ
              </h2>
              {recentDebts.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  কোন ঋণ রেকর্ড নেই
                </p>
              ) : (
                <div className="space-y-3">
                  {recentDebts.map((debt) => (
                    <div
                      key={debt.id}
                      className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-foreground">
                          {debt.person_name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {debt.type === 'OWE' ? 'আমি ঋণী' : 'তারা ঋণী'}
                        </p>
                      </div>
                      <p
                        className={`font-semibold ${
                          debt.type === 'OWE'
                            ? 'text-destructive'
                            : 'text-accent'
                        }`}
                      >
                        {debt.type === 'OWE' ? '-' : '+'}${debt.amount}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Recent Expenses */}
            <Card className="p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">
                সাম্প্রতিক খরচ
              </h2>
              {recentExpenses.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  কোন খরচ রেকর্ড নেই
                </p>
              ) : (
                <div className="space-y-3">
                  {recentExpenses.map((expense) => (
                    <div
                      key={expense.id}
                      className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-foreground">
                          {expense.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {expense.category}
                        </p>
                      </div>
                      <p className="font-semibold text-foreground">
                        -${expense.amount}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
