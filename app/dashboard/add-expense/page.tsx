/**
 * Add Expense Page
 * Form for recording daily expenses.
 */

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Navbar } from '@/components/Navbar'
import { createClient } from '@/lib/supabase'
import { AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react'

const EXPENSE_CATEGORIES = [
  'খাদ্য',
  'পরিবহন',
  'স্বাস্থ্য',
  'শিক্ষা',
  'বিনোদন',
  'ইউটিলিটি',
  'কেনাকাটা',
  'রেস্তোরাঁ',
  'অন্যান্য',
]

export default function AddExpensePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    // Get current user
    const getUser = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUserId(user.id)
      } else {
        router.push('/auth/login')
      }
    }
    getUser()
  }, [router])

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'খাদ্য',
    date: new Date().toISOString().split('T')[0],
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (!userId) {
        setError('ব্যবহারকারী প্রমাণীকৃত নয়')
        setLoading(false)
        return
      }

      const supabase = createClient()

      // Validate form
      if (!formData.title || !formData.amount) {
        setError('অনুগ্রহ করে সব প্রয়োজনীয় ফিল্ড পূরণ করুন')
        setLoading(false)
        return
      }

      // Insert expense record
      const { error: insertError } = await supabase.from('expenses').insert([
        {
          user_id: userId,
          title: formData.title,
          amount: parseFloat(formData.amount),
          category: formData.category,
          date: formData.date,
        },
      ])

      if (insertError) {
        console.error('Insert error:', insertError)
        setError(`ত্রুটি: ${insertError.message}`)
        return
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    } catch (err) {
      setError('একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। আবার চেষ্টা করুন।')
      console.error('Error adding expense:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            ড্যাশবোর্ডে ফিরুন
          </Link>

          <Card className="p-8 border border-border">
            <h1 className="text-3xl font-bold text-foreground mb-2">খরচ যোগ করুন</h1>
            <p className="text-muted-foreground mb-6">
              আপনার দৈনিক খরচ রেকর্ড করুন এবং ট্র্যাক করুন।
            </p>

            {success && (
              <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-accent">খরচ সফলভাবে যোগ করা হয়েছে!</p>
                  <p className="text-sm text-muted-foreground">ড্যাশবোর্ডে পুনর্নির্দেশিত হচ্ছে...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  শিরোনাম *
                </label>
                <Input
                  type="text"
                  name="title"
                  placeholder="খরচের বিবরণ"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="cursor-pointer"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  পরিমাণ (USD) *
                </label>
                <Input
                  type="number"
                  name="amount"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={handleChange}
                  step="0.01"
                  required
                  disabled={loading}
                  className="cursor-pointer"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  বিভাগ
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                >
                  {EXPENSE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  তারিখ
                </label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  disabled={loading}
                  className="cursor-pointer"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={loading || !userId}
                  className="flex-1 bg-primary hover:bg-primary/90 cursor-pointer"
                >
                  {loading ? 'খরচ যোগ করা হচ্ছে...' : 'খরচ যোগ করুন'}
                </Button>
                <Link href="/dashboard" className="flex-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full cursor-pointer"
                    disabled={loading}
                  >
                    বাতিল করুন
                  </Button>
                </Link>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </main>
  )
}
