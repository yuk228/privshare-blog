import React from "react";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="min-h-screen container mx-auto py-[100px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            プライバシーポリシー
          </h1>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              PrivShare（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              第1条（個人情報）
            </h2>
            <p className="space-y-2 ml-4 text-sm sm:text-base">
              本サービスでは、ユーザーの個人情報を保存しません。
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              第2条（プライバシーポリシーの変更）
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4 text-sm sm:text-base">
              <li>
                本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
              </li>
              <li>
                当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
              </li>
            </ol>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              第3条（お問い合わせ窓口）
            </h2>
            <p className="space-y-2 ml-4 text-sm sm:text-base">
              本ポリシーに関するお問い合わせは，下記までお願いいたします。
            </p>
            <p className="space-y-2 ml-4 text-sm sm:text-base">
              SimpleX Chat:{" "}
              <span>
                <Link
                  href="https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2FolTYtcyMcPa5kpG5fWsIKogPE5FogsWh%23%2F%3Fv%3D1-3%26dh%3DMCowBQYDK2VuAyEAxzijX3CIw_xX_4XtA7k6oHA0I3q7FHPdCv9UG65spig%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion"
                  className="hover:text-foreground transition-colors underline"
                >
                  連絡をする
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
