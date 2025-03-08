import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Accordions = () => {
  return (
    <section id="accordion" className="py-10 bg-black">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Q. なぜプライバシー保護は重要ですか？</AccordionTrigger>
                <AccordionContent>A. あなたの情報が不正に利用, 収集されるのを防ぐために重要です。</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Q. PrivShareは誰のためにありますか?</AccordionTrigger>
                <AccordionContent>A. PrivShareはプライバシーに懸念を抱いている学生, 社会人, ジャーナリスト, 環境活動家, 社会人, 全ての人のためにあります。</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Q. 無料で使用可能ですか？</AccordionTrigger>
                <AccordionContent>A. はい。人種, 国, 性別, 役職を問わず全ての人が無料で使用可能です。</AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    </section>
  )
}

export default Accordions