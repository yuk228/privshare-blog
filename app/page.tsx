import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto ">
      <div className="flex flex-col items-center justify-center gap-6 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          PrivShare.net
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-center font-medium">
          匿名性に特化したプライバシーガイド
        </p>
        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl">
          たった1クリックで、プライバシーを犠牲にしないで下さい
        </p>
        <div className="flex items-center justify-center gap-6 mb-8">
          <Button asChild>
            <Link href="/blogs">今すぐ始める</Link>
          </Button>
        </div>
      </div>
      <div className="space-y-16">
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold border-b border-border pb-4 mb-6">
            概要
          </h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              現代のインターネット経済は、「監視資本主義」とも呼ばれる新たなビジネスモデルによって支配されています。
            </p>
            <p>
              多くの大手テック企業は、表面上は高品質な無料のサービスを提供する代わりに、ユーザーの行動データを収集・分析・販売しています。
            </p>
            <p>
              ITの知識の無い人々にとってこれを避けることは困難であり、もはや生活に必須な多くのインターネットサービスを自分のプライバシーを犠牲にしながら使用しています。
            </p>
            <p>
              このサイトでは、あなたのプライバシー・匿名性を最大限に保つための情報を提供します。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
