/**
 * Add Debt Page
 * Form for recording new debts (money owed or receivable).
 * Includes Islamic features like witness information.
 */

'use client'

import { useState } from 'react'
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

  const [formData, setFormData] = useState({
    personName: '',
    amount: '',
    debtType: 'OWE', // OWE or OWED
    description: '',
    dueDate: '',
    witnessName: '',
    witnessEmail: '',
    notes: '',
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
      const supabase = createClient()

      // Validate form
      if (!formData.personName || !formData.amount) {
        setError('Please fill in all required fields')
        setLoading(false)
        return
      }

      // Insert debt record
      const { error: insertError } = await supabase.from('debts').insert([
        {
          person_name: formData.personName,
          amount: parseFloat(formData.amount),
          debt_type: formData.debtType,
          debt_status: 'PENDING',
          description: formData.description,
          due_date: formData.dueDate || null,
          witness_name: formData.witnessName || null,
          witness_email: formData.witnessEmail || null,
          notes: formData.notes || null,
        },
      ])

      if (insertError) {
        setError(insertError.message)
        return
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
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
            Back to Dashboard
          </Link>

          <Card className="p-8 border border-border">
            <h1 className="text-3xl font-bold text-foreground mb-2">Add Debt</h1>
            <p className="text-muted-foreground mb-6">
              Record a new debt or receivable with optional Islamic witness information.
            </p>

            {success && (
              <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-accent">Debt recorded successfully!</p>
                  <p className="text-sm text-muted-foreground">Redirecting to dashboard...</p>
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
                  Debt Type *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="debtType"
                      value="OWE"
                      checked={formData.debtType === 'OWE'}
                      onChange={handleChange}
                      className="cursor-pointer"
                    />
                    <span className="text-foreground">I Owe (Payable)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="debtType"
                      value="OWED"
                      checked={formData.debtType === 'OWED'}
                      onChange={handleChange}
                      className="cursor-pointer"
                    />
                    <span className="text-foreground">They Owe Me (Receivable)</span>
                  </label>
                </div>
              </div>

              {/* Person Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Person&apos;s Name *
                </label>
                <Input
                  type="text"
                  name="personName"
                  placeholder="Enter person's name"
                  value={formData.personName}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="cursor-pointer"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Amount (USD) *
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

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="What is this debt for?"
                  value={formData.description}
                  onChange={handleChange}
                  disabled={loading}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                />
              </div>

              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Due Date
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
                  Islamic Features (Optional)
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Add witness information to strengthen the Islamic validity of this debt record.
                </p>

                {/* Witness Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Witness Name
                  </label>
                  <Input
                    type="text"
                    name="witnessName"
                    placeholder="Witness's full name"
                    value={formData.witnessName}
                    onChange={handleChange}
                    disabled={loading}
                    className="cursor-pointer"
                  />
                </div>

                {/* Witness Email */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Witness Email
                  </label>
                  <Input
                    type="email"
                    name="witnessEmail"
                    placeholder="witness@email.com"
                    value={formData.witnessEmail}
                    onChange={handleChange}
                    disabled={loading}
                    className="cursor-pointer"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    placeholder="Any additional details about this debt..."
                    value={formData.notes}
                    onChange={handleChange}
                    disabled={loading}
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-primary hover:bg-primary/90 cursor-pointer"
                >
                  {loading ? 'Recording Debt...' : 'Record Debt'}
                </Button>
                <Link href="/dashboard" className="flex-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full cursor-pointer"
                    disabled={loading}
                  >
                    Cancel
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
