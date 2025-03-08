---
title: "iPhoneのデータ保護"
description: "iPhoneをハードウェアレベルで安全に保護する方法をレクチャーします"
---
 
iPhoneでは[デフォルトで暗号化が施されいるため](https://support.apple.com/guide/security/encryption-and-data-protection-overview-sece3bee0835/web)、
暗号化の処理を行う必要はありません。

しかし、ユーザーは不正なデジタルフォレンジックから身を守るために以下のことを
実施する必要があります。

- 強力なパスワードの使用
- 「データ消去」の使用
- iCloudバックアップのオフ / 高度なデータ保護
- 最新の機種 / 最新バージョンを使用

## 注意

[ios 18.3.1](https://support.apple.com/en-us/122174)に今すぐアップデートして下さい。

以前のバージョンでは物理的攻撃に関する脆弱性が確認されています。

[CVE-2025-24200](https://www.cve.org/CVERecord?id=CVE-2025-24200)

## 強力なパスワードの使用

第三者があなたのiPhoneにアクセスするにはデバイスのパスコードを
使用する以外ありません。

パスワードは英大文字小文字、数字、記号を含めた20桁以上のものにしてください。
また誕生日、名前等の安易に推測できるものを含めるのは絶対に避けてください。

## ブルートフォース対策オプションの使用

- 設定→Face IDとパスコード→データ消去

このオプションは10回パスコードの入力を失敗すると端末が初期化されます。
これを使用することによりブルートフォース攻撃が完全に不可能になります。

※iPhone, iPad, Macbookの初期化は**暗号化消去のためデータを復元することは不可能**です。

## iCloudバックアップのオフ

第三者からの不正アクセスを防ぐためにも基本的にiCloudバックアップはオフにすることをおすすめします。

どうしても使用したい場合は、iCloudのパスワードを強力にし、高度なデータ保護を使用してください。

## [高度なデータ保護](https://support.apple.com/en-us/108756)

- 設定→アイコン→iCloud→高度なデータ保護 をON

このオプションを使用することにより、Appleは暗号化keyを所持せず、
暗号化を解除できるのはあなただけになります。

リカバリーkeyはusbにいれて暗号化し、自分以外が入手できないように最善を尽くしてください。

## AFU/BFU

- AFU: After First Lock (端末起動後一回でも解除済み)
- BFU: Before First Lock (端末起動後一回も解除していない)

BFU状態では端末は完全に暗号化されあます。

端末は電源を切ることで最も強い暗号化レベルになります。

## Cellebrite Premium ES for iPhone

CellebriteにはUFEDというエディション(地方都道府県警使用)もありますが、警視庁が使用しているPremium ESの方が性能が高いためそれを基準として話します。

2024年4月時点で、iPhone XRから最新モデルのiPhoneは、iOS 17.4 以降を実行している場合、まだロックを解除できません。 

Cellebriteに関する詳しい情報は以下の記事をご覧ください。
[Cellebriteについて]()
## 結論

結論として、iPhone XR以降の最新バージョン(ios18.3)を実行しているBFU状態のiPhoneを解析することは不可能に近いです。

端末が不正なデータ収集の危機に直面した場合、直ぐに電源を切って下さい。

## 参考文献, ソース

- AFU/BFU: [Cellebrite](https://cellebrite.com/en/what-can-be-recovered-from-bfu-data-collection/)
- 2024/04 Cellebrite Leaks: [Link](https://www.documentcloud.org/documents/24833832-cellebrite-ios-document-april-2024/?ref=404media.co)
- ↑archive [1ページ]() [2ページ]() [3ページ]() [4ページ]() [5ページ](https://archive.md/uCa3G/b3bed61db238e8fbb71fd96aa933492c2d7e83af.gif)