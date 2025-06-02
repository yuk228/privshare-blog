---
title: "Mullvad VPN"
description: "厳格なNo Logポリシーを持つMullvad VPNを紹介"
tags: ["desktop", "anonimity", "mobile", "vpn", "mullvad"]
img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nKP6nInzH8oTWu7Xf_8laQHaEK%26pid%3DApi&f=1&ipt=dc5ed493918b0c51560505a40068a73cfd4802f5b3a04af3dcb751c156cde747&ipo=images"
---

## Mullvad VPNとは

Mullvad VPNはスウェーデンを拠点とするVPNサービスです。

プライバシー保護に特化しており、以下の特徴があります:

- 厳格なNo Logポリシー
- アカウント作成不要(ランダムな数字のみ)
- 匿名での支払い可能(現金、暗号資産)
- オープンソース
- 独自のDNSサーバー
- WireGuardプロトコル対応
- Kill Switch機能搭載

## [DAITA(AIによるトラフィック分析に対する防御 )](https://mullvad.net/en/vpn/daita)

VPNでトラフィックを暗号化していても、高度なトラフィック分析はプライバシーに対する脅威となりつつあります。
DAITAは、一定のパケットサイズ、ランダムなバックグラウンドトラフィック、データパターンの歪みといった技術を駆使することで、AIによるトラフィック分析に対抗します。
ここでは多くを説明しきれないので、詳しくは公式ドキュメントをご覧ください。

## Multihop

通常、VPNはクライアントから**1つ**のサーバーを介して接続されます。
しかし、Multihopでは**2つ**のサーバーを介して接続します。

Multihopの利点は、タイムスタンプ攻撃を防げる点です。

タイムスタンプ攻撃とは:

- ISP(プロバイダー)は以下のデータを記録可能:
  - VPNサーバーのIP
  - 接続開始/終了時刻
  - 送受信したデータ量
  - パケットのパターン

- VPNサーバーは以下のデータを記録可能:
  - 接続元のIP
  - 接続開始/終了時刻
  - 送受信したデータ量
  - パケットのパターン

1つのサーバーのみを使用する場合、ISPとVPNサーバーが保持するデータを照合することで:

1. 同じ時間帯に
2. 同じデータ量で
3. 類似したパケットパターンを持つ
4. 通信を特定し、ユーザーの実IPを割り出すことが可能です

Multihopを使用すると、2つのサーバーを経由するため、このような時間的相関による分析が極めて困難になります。

## [Nologポリシー](https://mullvad.net/en/blog/mullvad-vpn-was-subject-to-a-search-warrant-customer-data-not-compromised)

Mullvad VPNは厳格なノーログポリシーを持っています。

実際、2023年4月18日にスウェーデン警察国家作戦部（NOA）の少なくとも6人の警官が捜索令状を持ってヨーテボリのMullvad VPNオフィスを訪れましたが、データはみつからず押収されませんでした。

## 多くの犯罪者に悪用・愛用されている

おかしな話ですが、これは信頼性があります。
匿名化について議論する多くのダークウェブ掲示板で、Mullvad VPNの名前があがっています。
彼らは逮捕を免れるために個人の特定を必死に防いでいます。

そんな彼らが使用しているのであれば、良くも悪くもプライバシー性や匿名性は本物ということです。

====続きは執筆中====