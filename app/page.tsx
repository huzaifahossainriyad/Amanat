/**
 * হোম পেজ - আমানত ইসলামিক ফিন্যান্স ম্যানেজার
 * সম্পূর্ণ বাংলায় ডিজাইন করা হয়েছে
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
  DollarSign,
  PieChart,
  AlertCircle,
} from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* নেভিগেশন */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">আমানত</h1>
              <p className="text-xs text-muted-foreground">ইসলামিক ফিন্যান্স ম্যানেজার</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-foreground hover:bg-secondary">
                লগইন
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
                শুরু করুন
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* হিরো সেকশন */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* বাম দিক - টেক্সট */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <p className="text-sm font-semibold text-primary">🌙 ইসলামিক নীতি অনুসরণ করে</p>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                  আপনার আর্থিক বিশ্বাস পরিচালনা করুন
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  আমানত হল একটি আধুনিক ইসলামিক ফিন্যান্স ম্যানেজার যা আপনার ঋণ, খরচ এবং জাকাত ট্র্যাকিং সহজ করে। সম্পূর্ণ নিরাপদ এবং বাংলায় ডিজাইন করা।
                </p>
              </div>

              {/* CTA বাটন */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white w-full sm:w-auto shadow-lg">
                    বিনামূল্যে শুরু করুন
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2">
                  ডেমো দেখুন
                </Button>
              </div>

              {/* বৈশিষ্ট্য তালিকা */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">সম্পূর্ণ বিনামূল্যে</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">কোন বিজ্ঞাপন নেই</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">সম্পূর্ণ নিরাপদ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">সব ডিভাইসে</span>
                </div>
              </div>
            </div>

            {/* ডান দিক - ইমেজ */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="bg-background/80 rounded-2xl p-6 border border-border shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">মোট ঋণ</h3>
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-foreground">৳ ৫০,০০০</p>
                    <p className="text-sm text-muted-foreground mt-2">৫টি সক্রিয় ঋণ</p>
                  </div>
                  <div className="bg-background/80 rounded-2xl p-6 border border-border shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">এই মাসের খরচ</h3>
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-3xl font-bold text-foreground">৳ ১৫,৫০০</p>
                    <p className="text-sm text-muted-foreground mt-2">গত মাসের চেয়ে ১২% কম</p>
                  </div>
                  <div className="bg-background/80 rounded-2xl p-6 border border-border shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">জাকাত স্ট্যাটাস</h3>
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">নিসাব থ্রেশহোল্ড অতিক্রম করেছেন</p>
                    <div className="mt-3 w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* মূল বৈশিষ্ট্য */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              আমানতের শক্তিশালী বৈশিষ্ট্য
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              আপনার আর্থিক জীবনকে সহজ এবং স্বচ্ছ করার জন্য ডিজাইন করা হয়েছে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* বৈশিষ্ট্য ১ */}
            <Card className="p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">ঋণ ব্যবস্থাপনা</h3>
              <p className="text-muted-foreground leading-relaxed">
                আপনার সমস্ত ঋণ এবং প্রাপ্য একটি জায়গায় ট্র্যাক করুন। কে কাকে কত দেয় তা সহজেই জানুন এবং পরিশোধের অগ্রগতি দেখুন।
              </p>
            </Card>

            {/* বৈশিষ্ট্য ২ */}
            <Card className="p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PieChart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">খরচ বিশ্লেষণ</h3>
              <p className="text-muted-foreground leading-relaxed">
                দৈনিক খরচ রেকর্ড করুন এবং বিভাগ অনুযায়ী বিশ্লেষণ করুন। আপনার বাজেট নিয়ন্ত্রণে রাখুন এবং অপ্রয়োজনীয় খরচ কমান।
              </p>
            </Card>

            {/* বৈশিষ্ট্য ৩ */}
            <Card className="p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">জাকাত ক্যালকুলেটর</h3>
              <p className="text-muted-foreground leading-relaxed">
                স্বয়ংক্রিয়ভাবে আপনার জাকাত যোগ্যতা পরীক্ষা করুন। নিসাব থ্রেশহোল্ড অতিক্রম করলে সতর্কতা পান এবং সঠিক পরিমাণ জানুন।
              </p>
            </Card>

            {/* বৈশিষ্ট্য ৪ */}
            <Card className="p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">সম্পূর্ণ নিরাপদ</h3>
              <p className="text-muted-foreground leading-relaxed">
                আপনার ডেটা এনক্রিপ্ট করা এবং সুরক্ষিত। শুধুমাত্র আপনি আপনার তথ্য দেখতে পারবেন এবং কোন তৃতীয় পক্ষ অ্যাক্সেস পাবে না।
              </p>
            </Card>

            {/* বৈশিষ্ট্য ৫ */}
            <Card className="p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">সাক্ষী সিস্টেম</h3>
              <p className="text-muted-foreground leading-relaxed">
                ইসলামিক নীতি অনুযায়ী সাক্ষী নাম রেকর্ড করুন। আপনার লেনদেন আরও স্বচ্ছ এবং বিশ্বাসযোগ্য করুন।
              </p>
            </Card>

            {/* বৈশিষ্ট্য ৬ */}
            <Card className="p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">সব ডিভাইসে</h3>
              <p className="text-muted-foreground leading-relaxed">
                মোবাইল, ট্যাবলেট বা ডেস্কটপ - যেকোনো জায়গা থেকে অ্যাক্সেস করুন। সর্বদা সংযুক্ত থাকুন এবং আপডেট থাকুন।
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* সুবিধা সেকশন */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              কেন আমানত বেছে নেবেন?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              আমানত আপনার আর্থিক জীবনকে সম্পূর্ণভাবে রূপান্তরিত করবে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* সুবিধা ১ */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">সময় বাঁচান</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ম্যানুয়াল হিসাব রাখার ঝামেলা থেকে মুক্তি পান। সবকিছু স্বয়ংক্রিয়ভাবে ট্র্যাক হয় এবং আপনি গুরুত্বপূর্ণ কাজে মনোযোগ দিতে পারেন।
                </p>
              </div>
            </div>

            {/* সুবিধা ২ */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">স্বচ্ছতা বাড়ান</h3>
                <p className="text-muted-foreground leading-relaxed">
                  আপনার সমস্ত লেনদেন এক জায়গায় দেখুন। কোন লুকানো খরচ নেই এবং সবকিছু পরিষ্কার এবং সহজবোধ্য।
                </p>
              </div>
            </div>

            {/* সুবিধা ৩ */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">ইসলামিক নীতি মেনে চলুন</h3>
                <p className="text-muted-foreground leading-relaxed">
                  জাকাত, সাক্ষী এবং ন্যায্য লেনদেন - সবকিছু ইসলামিক নীতি অনুযায়ী ডিজাইন করা হয়েছে।
                </p>
              </div>
            </div>

            {/* সুবিধা ৪ */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">ডেটা সুরক্ষা</h3>
                <p className="text-muted-foreground leading-relaxed">
                  আপনার ব্যক্তিগত তথ্য সর্বোচ্চ নিরাপত্তায় সংরক্ষিত থাকে এবং কখনও তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ব্যবহারকারীর মতামত */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              ব্যবহারকারীরা কী বলছেন
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              আমানত ব্যবহার করে হাজারো মানুষ তাদের আর্থিক জীবন উন্নত করেছেন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* মতামত ১ */}
            <Card className="p-8 border-2 border-border hover:border-primary transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                আমানত ব্যবহার করে আমার ঋণ ব্যবস্থাপনা অনেক সহজ হয়েছে। এখন আমি সবসময় জানি কে কাকে কত দেয় এবং কখন পরিশোধ করতে হবে।
              </p>
              <div>
                <p className="font-bold text-foreground">আহমেদ করিম</p>
                <p className="text-sm text-muted-foreground">ঢাকা, বাংলাদেশ</p>
              </div>
            </Card>

            {/* মতামত ২ */}
            <Card className="p-8 border-2 border-border hover:border-primary transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                জাকাত ক্যালকুলেটর ফিচার অসাধারণ। এখন আমি সহজেই জানতে পারি আমি জাকাত দেওয়ার যোগ্য কিনা এবং কত দিতে হবে।
              </p>
              <div>
                <p className="font-bold text-foreground">ফাতিমা বেগম</p>
                <p className="text-sm text-muted-foreground">চট্টগ্রাম, বাংলাদেশ</p>
              </div>
            </Card>

            {/* মতামত ৩ */}
            <Card className="p-8 border-2 border-border hover:border-primary transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                খরচ ট্র্যাকিং ফিচার দিয়ে আমি আমার বাজেট নিয়ন্ত্রণ করতে পারছি। সত্যিই দুর্দান্ত এবং ব্যবহার করা খুবই সহজ।
              </p>
              <div>
                <p className="font-bold text-foreground">মোহাম্মদ হাসান</p>
                <p className="text-sm text-muted-foreground">সিলেট, বাংলাদেশ</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA সেকশন */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border-2 border-primary/20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              আজই শুরু করুন
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              আপনার আর্থিক যাত্রা শুরু করুন আমানতের সাথে। সম্পূর্ণ বিনামূল্যে এবং কোন ক্রেডিট কার্ডের প্রয়োজন নেই। মাত্র ২ মিনিটে অ্যাকাউন্ট তৈরি করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white w-full sm:w-auto shadow-lg">
                  বিনামূল্যে অ্যাকাউন্ট তৈরি করুন
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2">
                  ইতিমধ্যে অ্যাকাউন্ট আছে? লগইন করুন
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ফুটার */}
      <footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* ব্র্যান্ড */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">আমানত</h3>
                  <p className="text-xs text-muted-foreground">ইসলামিক ফিন্যান্স</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                আপনার আর্থিক জীবনকে সহজ এবং স্বচ্ছ করার জন্য ডিজাইন করা হয়েছে।
              </p>
            </div>

            {/* পণ্য */}
            <div>
              <h4 className="font-bold text-foreground mb-4">পণ্য</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">বৈশিষ্ট্য</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">মূল্য নির্ধারণ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">নিরাপত্তা</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">রোডম্যাপ</a></li>
              </ul>
            </div>

            {/* কোম্পানি */}
            <div>
              <h4 className="font-bold text-foreground mb-4">কোম্পানি</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">আমাদের সম্পর্কে</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ব্লগ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">যোগাযোগ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ক্যারিয়ার</a></li>
              </ul>
            </div>

            {/* আইনি */}
            <div>
              <h4 className="font-bold text-foreground mb-4">আইনি</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">গোপনীয়তা নীতি</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">সেবার শর্তাবলী</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">কুকি নীতি</a></li>
              </ul>
            </div>
          </div>

          {/* ফুটার বটম */}
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © ২০২৫ আমানত। সর্বাধিকার সংরক্ষিত।
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Lock className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Heart className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
