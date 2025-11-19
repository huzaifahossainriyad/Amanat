/**
 * হোম পেজ - আমানত ইসলামিক ফিন্যান্স ম্যানেজার
 * সম্পূর্ণ বাংলায় ডিজাইন করা হয়েছে
 * Unsplash থেকে ফ্রি ইমেজ সহ
 */

import Link from 'next/link'
import Image from 'next/image'
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
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  <span className="text-sm font-medium text-foreground">বাংলায় উপলব্ধ</span>
                </div>
              </div>
            </div>

            {/* ডান দিক - ইমেজ */}
            <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1579621970563-430f63602d4b?w=600&h=600&fit=crop"
                alt="আর্থিক পরিকল্পনা"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* বৈশিষ্ট্য সেকশন */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              আমানতের শক্তিশালী বৈশিষ্ট্য
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              আপনার আর্থিক জীবনকে সহজ এবং ইসলামিক নীতি অনুযায়ী পরিচালনা করুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ফিচার ১ */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50 bg-background/50 backdrop-blur">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">ঋণ ট্র্যাকিং</h3>
              <p className="text-muted-foreground">
                আপনার সমস্ত ঋণ এক জায়গায় পরিচালনা করুন এবং পরিশোধের অগ্রগতি দেখুন।
              </p>
            </Card>

            {/* ফিচার ২ */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50 bg-background/50 backdrop-blur">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">খরচ বিশ্লেষণ</h3>
              <p className="text-muted-foreground">
                আপনার খরচ বিস্তারিতভাবে বিশ্লেষণ করুন এবং বাজেট পরিকল্পনা করুন।
              </p>
            </Card>

            {/* ফিচার ৩ */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50 bg-background/50 backdrop-blur">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">জাকাত ক্যালকুলেটর</h3>
              <p className="text-muted-foreground">
                স্বয়ংক্রিয়ভাবে আপনার জাকাত পরিমাণ গণনা করুন এবং ট্র্যাক করুন।
              </p>
            </Card>

            {/* ফিচার ৪ */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50 bg-background/50 backdrop-blur">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">সম্পূর্ণ নিরাপত্তা</h3>
              <p className="text-muted-foreground">
                আপনার ডেটা এনক্রিপ্ট করা এবং সম্পূর্ণ সুরক্ষিত থাকে।
              </p>
            </Card>

            {/* ফিচার ৫ */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50 bg-background/50 backdrop-blur">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">মোবাইল বান্ধব</h3>
              <p className="text-muted-foreground">
                যেকোনো ডিভাইস থেকে সহজেই অ্যাক্সেস করুন এবং পরিচালনা করুন।
              </p>
            </Card>

            {/* ফিচার ৬ */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50 bg-background/50 backdrop-blur">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">বাংলায় সম্পূর্ণ</h3>
              <p className="text-muted-foreground">
                সম্পূর্ণ বাংলা ভাষায় ডিজাইন করা হয়েছে আপনার সুবিধার জন্য।
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* সুবিধা সেকশন */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ইমেজ */}
            <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop"
                alt="ডিজিটাল ফিন্যান্স"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* টেক্সট */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  কেন আমানত বেছে নেবেন?
                </h2>
                <p className="text-xl text-muted-foreground">
                  আমানত শুধুমাত্র একটি অ্যাপ নয়, এটি আপনার আর্থিক বিশ্বাসের সঙ্গী।
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">ইসলামিক নীতি অনুসরণ</h3>
                    <p className="text-muted-foreground">
                      সম্পূর্ণভাবে ইসলামিক শরিয়া নীতি অনুসরণ করে ডিজাইন করা।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">সহজ ব্যবহার</h3>
                    <p className="text-muted-foreground">
                      কোন জটিলতা নেই, সবকিছু সহজ এবং স্বজ্ঞাত।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">সম্পূর্ণ বিনামূল্যে</h3>
                    <p className="text-muted-foreground">
                      কোন লুকানো খরচ নেই, সবসময় বিনামূল্যে থাকবে।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">ডেটা গোপনীয়তা</h3>
                    <p className="text-muted-foreground">
                      আপনার ব্যক্তিগত তথ্য সম্পূর্ণ সুরক্ষিত এবং গোপনীয়।
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/auth/signup">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg">
                  এখনই যোগ দিন
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* পরিসংখ্যান সেকশন */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">১০০০+</div>
              <p className="text-muted-foreground">সক্রিয় ব্যবহারকারী</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">৫০০০+</div>
              <p className="text-muted-foreground">ট্র্যাক করা ঋণ</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">১০০%</div>
              <p className="text-muted-foreground">নিরাপদ এবং সুরক্ষিত</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">২৪/৭</div>
              <p className="text-muted-foreground">সহায়তা উপলব্ধ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA সেকশন */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            আপনার আর্থিক যাত্রা শুরু করুন আজই
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            আমানতের সাথে আপনার ঋণ, খরচ এবং জাকাত পরিচালনা করুন সহজে এবং নিরাপদে।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg">
                বিনামূল্যে শুরু করুন
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2">
              আরও জানুন
            </Button>
          </div>
        </div>
      </section>

      {/* ফুটার */}
      <footer className="bg-secondary/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* ব্র্যান্ড */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground">আমানত</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                ইসলামিক ফিন্যান্স ম্যানেজার - আপনার বিশ্বাসের সঙ্গী
              </p>
            </div>

            {/* পণ্য */}
            <div>
              <h4 className="font-bold text-foreground mb-4">পণ্য</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">বৈশিষ্ট্য</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">মূল্য নির্ধারণ</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">নিরাপত্তা</Link></li>
              </ul>
            </div>

            {/* কোম্পানি */}
            <div>
              <h4 className="font-bold text-foreground mb-4">কোম্পানি</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">সম্পর্কে</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">ব্লগ</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">যোগাযোগ</Link></li>
              </ul>
            </div>

            {/* আইনি */}
            <div>
              <h4 className="font-bold text-foreground mb-4">আইনি</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">গোপনীয়তা নীতি</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">শর্তাবলী</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">কুকি নীতি</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © ২০২৫ আমানত। সর্বাধিকার সংরক্ষিত।
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                  ফেসবুক
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                  টুইটার
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                  ইনস্টাগ্রাম
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
