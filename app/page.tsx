/**
 * Landing Page
 * Comprehensive landing page with hero, features, benefits, testimonials, and CTA sections.
 */

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Heart,
  TrendingUp,
  Shield,
  Users,
  Zap,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Smartphone,
  Lock,
  Globe,
} from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-background" />
            </div>
            <span className="font-bold text-lg text-foreground">আমানত</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">লগইন</Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-primary hover:bg-primary/90">শুরু করুন</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
                আপনার আর্থিক বিশ্বাস পরিচালনা করুন
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                আমানত একটি ইসলামিক ফিন্যান্স ম্যানেজার যা আপনার ঋণ, খরচ এবং জাকাত ট্র্যাকিং সহজ করে।
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    বিনামূল্যে শুরু করুন
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  আরও জানুন
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">আপনার আর্থিক ড্যাশবোর্ড</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">মূল বৈশিষ্ট্য</h2>
            <p className="text-lg text-muted-foreground">
              আমানত আপনার আর্থিক জীবনকে সহজ করার জন্য ডিজাইন করা হয়েছে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">ঋণ ট্র্যাকিং</h3>
              <p className="text-muted-foreground">
                আপনার সমস্ত ঋণ এবং প্রাপ্য একটি জায়গায় ট্র্যাক করুন। কে কাকে কত দেয় তা সহজেই জানুন।
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">খরচ ব্যবস্থাপনা</h3>
              <p className="text-muted-foreground">
                দৈনিক খরচ রেকর্ড করুন এবং বিভাগ অনুযায়ী বিশ্লেষণ করুন। আপনার বাজেট নিয়ন্ত্রণে রাখুন।
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">জাকাত ক্যালকুলেটর</h3>
              <p className="text-muted-foreground">
                স্বয়ংক্রিয়ভাবে আপনার জাকাত যোগ্যতা পরীক্ষা করুন। নিসাব থ্রেশহোল্ড অতিক্রম করলে সতর্কতা পান।
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-6 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">সম্পূর্ণ নিরাপদ</h3>
              <p className="text-muted-foreground">
                আপনার ডেটা এনক্রিপ্ট করা এবং সুরক্ষিত। শুধুমাত্র আপনি আপনার তথ্য দেখতে পারবেন।
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="p-6 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">সাক্ষী সিস্টেম</h3>
              <p className="text-muted-foreground">
                ইসলামিক নীতি অনুযায়ী সাক্ষী নাম রেকর্ড করুন। আপনার লেনদেন আরও স্বচ্ছ করুন।
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="p-6 border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">সব ডিভাইসে</h3>
              <p className="text-muted-foreground">
                মোবাইল, ট্যাবলেট বা ডেস্কটপ - যেকোনো জায়গা থেকে অ্যাক্সেস করুন। সর্বদা সংযুক্ত থাকুন।
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">কেন আমানত ব্যবহার করবেন?</h2>
            <p className="text-lg text-muted-foreground">
              আমানত আপনার আর্থিক জীবনকে রূপান্তরিত করবে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Benefit 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">সময় বাঁচান</h3>
                <p className="text-muted-foreground">
                  ম্যানুয়াল হিসাব রাখার ঝামেলা থেকে মুক্তি পান। সবকিছু স্বয়ংক্রিয়ভাবে ট্র্যাক হয়।
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">স্বচ্ছতা বাড়ান</h3>
                <p className="text-muted-foreground">
                  আপনার সমস্ত লেনদেন এক জায়গায় দেখুন। কোন লুকানো খরচ নেই।
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">ইসলামিক নীতি মেনে চলুন</h3>
                <p className="text-muted-foreground">
                  জাকাত, সাক্ষী এবং ন্যায্য লেনদেন - সবকিছু ইসলামিক নীতি অনুযায়ী।
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">ডেটা সুরক্ষা</h3>
                <p className="text-muted-foreground">
                  আপনার ব্যক্তিগত তথ্য সর্বোচ্চ নিরাপত্তায় সংরক্ষিত থাকে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">ব্যবহারকারীরা কী বলছেন</h2>
            <p className="text-lg text-muted-foreground">
              আমানত ব্যবহার করে হাজারো মানুষ তাদের আর্থিক জীবন উন্নত করেছেন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                আমানত ব্যবহার করে আমার ঋণ ব্যবস্থাপনা অনেক সহজ হয়েছে। এখন আমি সবসময় জানি কে কাকে কত দেয়।
              </p>
              <p className="font-semibold text-foreground">- আহমেদ করিম</p>
              <p className="text-sm text-muted-foreground">ঢাকা, বাংলাদেশ</p>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                জাকাত ক্যালকুলেটর ফিচার অসাধারণ। এখন আমি সহজেই জানতে পারি আমি জাকাত দেওয়ার যোগ্য কিনা।
              </p>
              <p className="font-semibold text-foreground">- ফাতিমা বেগম</p>
              <p className="text-sm text-muted-foreground">চট্টগ্রাম, বাংলাদেশ</p>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                খরচ ট্র্যাকিং ফিচার দিয়ে আমি আমার বাজেট নিয়ন্ত্রণ করতে পারছি। সত্যিই দুর্দান্ত অ্যাপ।
              </p>
              <p className="font-semibold text-foreground">- মোহাম্মদ হাসান</p>
              <p className="text-sm text-muted-foreground">সিলেট, বাংলাদেশ</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">আজই শুরু করুন</h2>
          <p className="text-xl text-muted-foreground mb-8">
            আপনার আর্থিক যাত্রা শুরু করুন আমানতের সাথে। সম্পূর্ণ বিনামূল্যে এবং কোন ক্রেডিট কার্ডের প্রয়োজন নেই।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                বিনামূল্যে অ্যাকাউন্ট তৈরি করুন
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                ইতিমধ্যে অ্যাকাউন্ট আছে? লগইন করুন
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-background" />
                </div>
                <span className="font-bold text-foreground">আমানত</span>
              </div>
              <p className="text-sm text-muted-foreground">
                ইসলামিক ফিন্যান্স ম্যানেজার যা আপনার আর্থিক জীবনকে সহজ করে।
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">পণ্য</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">বৈশিষ্ট্য</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">মূল্য নির্ধারণ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">নিরাপত্তা</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">কোম্পানি</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">সম্পর্কে</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ব্লগ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">যোগাযোগ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">আইনি</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">গোপনীয়তা নীতি</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">সেবার শর্তাবলী</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">কুকি নীতি</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © ২০২৫ আমানত। সর্বাধিকার সংরক্ষিত।
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Lock className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
