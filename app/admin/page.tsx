/**
 * Admin Dashboard
 * Comprehensive admin panel for managing users, debts, expenses, and system settings.
 */

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Users,
  TrendingUp,
  DollarSign,
  Settings,
  LogOut,
  BarChart3,
  CheckCircle,
  Trash2,
  Edit,
  Eye,
} from 'lucide-react'

interface AdminStats {
  totalUsers: number
  totalDebts: number
  totalExpenses: number
  totalAmount: number
}

interface User {
  id: string
  email: string
  full_name: string
  created_at: string
}

interface Debt {
  id: string
  debtor_name: string
  creditor_name: string
  amount: number
  status: string
  created_at: string
}

interface Expense {
  id: string
  category: string
  amount: number
  description: string
  created_at: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalDebts: 0,
    totalExpenses: 0,
    totalAmount: 0,
  })
  const [users, setUsers] = useState<User[]>([])
  const [debts, setDebts] = useState<Debt[]>([])
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    // Check if user is admin (in real app, verify with backend)
    const isAdmin = localStorage.getItem('isAdmin')
    if (!isAdmin) {
      router.push('/auth/login')
    }
    loadAdminData()
  }, [router])

  const loadAdminData = async () => {
    try {
      // Simulate loading data
      setStats({
        totalUsers: 1250,
        totalDebts: 3456,
        totalExpenses: 8920,
        totalAmount: 125000,
      })
      setUsers([
        {
          id: '1',
          email: 'user1@example.com',
          full_name: 'আহমেদ করিম',
          created_at: '2025-01-15',
        },
        {
          id: '2',
          email: 'user2@example.com',
          full_name: 'ফাতিমা বেগম',
          created_at: '2025-01-16',
        },
        {
          id: '3',
          email: 'user3@example.com',
          full_name: 'মোহাম্মদ হাসান',
          created_at: '2025-01-17',
        },
      ])
      setDebts([
        {
          id: '1',
          debtor_name: 'আলী',
          creditor_name: 'করিম',
          amount: 5000,
          status: 'pending',
          created_at: '2025-01-10',
        },
        {
          id: '2',
          debtor_name: 'ফাতিমা',
          creditor_name: 'আয়েশা',
          amount: 3000,
          status: 'completed',
          created_at: '2025-01-12',
        },
      ])
      setExpenses([
        {
          id: '1',
          category: 'খাদ্য',
          amount: 500,
          description: 'বাজার',
          created_at: '2025-01-18',
        },
        {
          id: '2',
          category: 'পরিবহন',
          amount: 200,
          description: 'ট্যাক্সি',
          created_at: '2025-01-18',
        },
      ])
    } catch (error) {
      console.error('Error loading admin data:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('isAdmin')
    router.push('/auth/login')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-background" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">আমানত অ্যাডমিন</h1>
              <p className="text-xs text-muted-foreground">সিস্টেম ম্যানেজমেন্ট প্যানেল</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            লগআউট
          </Button>
        </div>
      </header>

      {/* Admin Navigation */}
      <div className="border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <BarChart3 className="w-4 h-4 inline mr-2" />
              সারাংশ
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'users'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              ব্যবহারকারী ({stats.totalUsers})
            </button>
            <button
              onClick={() => setActiveTab('debts')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'debts'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <DollarSign className="w-4 h-4 inline mr-2" />
              ঋণ ({stats.totalDebts})
            </button>
            <button
              onClick={() => setActiveTab('expenses')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'expenses'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-2" />
              খরচ ({stats.totalExpenses})
            </button>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">মোট ব্যবহারকারী</p>
                    <p className="text-3xl font-bold text-foreground">{stats.totalUsers}</p>
                  </div>
                  <Users className="w-12 h-12 text-primary/20" />
                </div>
              </Card>

              <Card className="p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">মোট ঋণ</p>
                    <p className="text-3xl font-bold text-foreground">{stats.totalDebts}</p>
                  </div>
                  <DollarSign className="w-12 h-12 text-accent/20" />
                </div>
              </Card>

              <Card className="p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">মোট খরচ</p>
                    <p className="text-3xl font-bold text-foreground">{stats.totalExpenses}</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-primary/20" />
                </div>
              </Card>

              <Card className="p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">মোট পরিমাণ</p>
                    <p className="text-3xl font-bold text-foreground">
                      ৳{stats.totalAmount.toLocaleString()}
                    </p>
                  </div>
                  <BarChart3 className="w-12 h-12 text-accent/20" />
                </div>
              </Card>
            </div>

            {/* System Status */}
            <Card className="p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-6">সিস্টেম স্ট্যাটাস</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-foreground">ডাটাবেস সংযোগ</span>
                  </div>
                  <span className="text-sm text-accent font-medium">সংযুক্ত</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-foreground">সার্ভার</span>
                  </div>
                  <span className="text-sm text-accent font-medium">চলছে</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-foreground">API</span>
                  </div>
                  <span className="text-sm text-accent font-medium">সক্রিয়</span>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <Card className="border border-border">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">ব্যবহারকারী ব্যবস্থাপনা</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      নাম
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      ইমেইল
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      যোগদান তারিখ
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      অ্যাকশন
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-secondary/30">
                      <td className="px-6 py-4 text-foreground">{user.full_name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{user.email}</td>
                      <td className="px-6 py-4 text-muted-foreground">{user.created_at}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Debts Tab */}
        {activeTab === 'debts' && (
          <Card className="border border-border">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">ঋণ ব্যবস্থাপনা</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      ঋণগ্রহণকারী
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      ঋণদাতা
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      পরিমাণ
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      স্ট্যাটাস
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      তারিখ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {debts.map((debt) => (
                    <tr key={debt.id} className="border-b border-border hover:bg-secondary/30">
                      <td className="px-6 py-4 text-foreground">{debt.debtor_name}</td>
                      <td className="px-6 py-4 text-foreground">{debt.creditor_name}</td>
                      <td className="px-6 py-4 text-foreground font-semibold">
                        ৳{debt.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            debt.status === 'completed'
                              ? 'bg-accent/20 text-accent'
                              : 'bg-yellow-500/20 text-yellow-600'
                          }`}
                        >
                          {debt.status === 'completed' ? 'সম্পন্ন' : 'অপেক্ষমাণ'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{debt.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Expenses Tab */}
        {activeTab === 'expenses' && (
          <Card className="border border-border">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">খরচ ব্যবস্থাপনা</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      বিভাগ
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      বর্ণনা
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      পরিমাণ
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      তারিখ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense) => (
                    <tr key={expense.id} className="border-b border-border hover:bg-secondary/30">
                      <td className="px-6 py-4 text-foreground">{expense.category}</td>
                      <td className="px-6 py-4 text-muted-foreground">{expense.description}</td>
                      <td className="px-6 py-4 text-foreground font-semibold">
                        ৳{expense.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{expense.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </main>
    </div>
  )
}
