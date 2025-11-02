'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CircleAlert } from 'lucide-react'
import { LatestArticles } from '@/components/article/latestArticles'

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 px-4">
                <div className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <CircleAlert className="w-4 h-4 text-red-500" />
                            <p className="text-sm font-bold">
                                このサイトは開発中であり、掲載されている記事はサンプルです。
                            </p>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            Protect your{' '}
                            <span className="text-red-500">Privacy Online</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            PrivShareは、匿名化に特化したプライバシーブログです。
                            <br />
                            あなたの個人情報がビジネスに使用されるのを防ぐため、匿名化について学びましょう。
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex  items-center gap-4"
                >
                    <Button asChild size="lg">
                        <Link href="/articles/categories/privacy">
                            今すぐ始める
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg">
                        <Link href="/login">ログインする</Link>
                    </Button>
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center pb-4">
                    最新記事
                </h2>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <LatestArticles />
                </motion.div>
            </section>
        </main>
    )
}
