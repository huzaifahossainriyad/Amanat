/**
 * Add Debt Page
 * Form for recording new debts (money owed or receivable).
 * Includes Islamic features like witness information.
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

export default function AddDebtPage() {
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
    personName: '',
    personPhone: '',
    amount: '',
    type: 'OWE', // OWE or OWED
    reason: '',
    dueDate: '',
    witnessName: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        setError('User not authenticated')
        setLoading(false)
        return
      }

      const supabase = createClient()

      // Validate form
      if (!formData.personName || !formData.amount) {
        setError('অনুগ্রহ করে সব প্রয়োজনীয় ফিল্ড পূরণ করুন')
        setLoading(false)
        return
      }

      // Insert debt record
      const { error: insertError } = await supabase.from('debts').insert([
        {
          user_id: userId,
          person_name: formData.personName,
          person_phone: formData.personPhone || null,
          amount: parseFloat(formData.amount),
          type: formData.type,
          reason: formData.reason || null,
          due_date: formData.dueDate || null,
          witness_name: formData.witnessName || null,
          status: 'PENDING',
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
      console.error('Error adding debt:', err)
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
            <h1 className="text-3xl font-bold text-foreground mb-2">ঋণ যোগ করুন</h1>
            <p className="text-muted-foreground mb-6">
              একটি নতুন ঋণ বা প্রাপ্য রেকর্ড করুন ইসলামিক সাক্ষী তথ্য সহ।
            </p>

            {success && (
              <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-accent">ঋণ সফলভাবে রেকর্ড করা হয়েছে!</p>
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
              {/* Debt Type Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  ঋণের ধরন *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="OWE"
                      checked={formData.type === 'OWE'}
                      onChange={handleChange}
                      className="cursor-pointer"
                    />
                    <span className="text-foreground">আমি ঋণী (প্রদেয়)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="OWED"
                      checked={formData.type === 'OWED'}
                      onChange={handleChange}
                      className="cursor-pointer"
                    />
                    <span className="text-foreground">তারা আমার ঋণী (প্রাপ্য)</span>
                  </label>
                </div>
              </div>

              {/* Person Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  ব্যক্তির নাম *
                </label>
                <Input
                  type="text"
                  name="personName"
                  placeholder="ব্যক্তির নাম লিখুন"
                  value={formData.personName}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="cursor-pointer"
                />
              </div>

              {/* Person Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  ফোন নম্বর
                </label>
                <Input
                  type="tel"
                  name="personPhone"
                  placeholder="+880 1234567890"
                  value={formData.personPhone}
                  onChange={handleChange}
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

              {/* Reason */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  কারণ
                </label>
                <textarea
                  name="reason"
                  placeholder="এই ঋণ কিসের জন্য?"
                  value={formData.reason}
                  onChange={handleChange}
                  disabled={loading}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                />
              </div>

              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  পরিশোধের তারিখ
                </label>
                <Input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  disabled={loading}
                  className="cursor-pointer"
                />
              </div>

              {/* Islamic Features - Witness Information */}
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  ইসলামিক বৈশিষ্ট্য (ঐচ্ছিক)
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  এই ঋণ রেকর্ডের ইসলামিক বৈধতা শক্তিশালী করতে সাক্ষী তথ্য যোগ করুন।
                </p>

                {/* Witness Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    সাক্ষীর নাম
                  </label>
                  <Input
                    type="text"
                    name="witnessName"
                    placeholder="সাক্ষীর সম্পূর্ণ নাম"
                    value={formData.witnessName}
                    onChange={handleChange}
                    disabled={loading}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={loading || !userId}
                  className="flex-1 bg-primary hover:bg-primary/90 cursor-pointer"
                >
                  {loading ? 'ঋণ রেকর্ড করা হচ্ছে...' : 'ঋণ রেকর্ড করুন'}
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
