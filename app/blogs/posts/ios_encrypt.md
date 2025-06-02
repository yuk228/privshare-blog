---
title: "iPhoneのデータ保護"
description: "iPhoneをハードウェアレベルで安全に保護する方法をレクチャーします"
tags: ["mobile", "ios"]
img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pRy13fEEdg0SpkDlPUxBogF1Cn%26pid%3DApi&f=1&ipt=33a344e4a1216d35a0fadd35c24f106b72adbd6ea2be51752581a6b23b75dbb3&ipo=images"
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

また、この記事は完全ではありません。まだ情報を調べ切れていません。気になる方は参考文献のリンク覗いてください。


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

## Cellebrite Premium ES
!["Leaks"](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fforum-uploads.privacyguidesusercontent.com%2Foptimized%2F2X%2Fa%2Fa0d7405ade7877e6a51ffec1ec8239332f61cacc_2_1024x576.png&f=1&nofb=1&ipt=d53e5b584afa7da14bd5235b9362692641a0a04f2db690dd779fce5ab71432b1&ipo=images)

CellebriteにはUFEDというエディション(地方都道府県警使用)もありますが、警視庁が使用しているPremium ESの方が性能が高いためそれを基準として話します。

2024年4月時点で、iPhone XRから最新モデルのiPhoneは、iOS 17.4 以降を実行している場合、まだロックを解除できません。 
2024年7月時点で、iOS 17.5.1までのバージョンを実行している端末はロック解除もしくはデータ抽出される可能性があります。

著者も詳しく調べ切れていません。随時追加予定です。

## GrayKey
!["Leaks"](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W9PnuXYBBdOb_EGpa9rYVAHaEt%26pid%3DApi&f=1&ipt=3ea9075842167d7b1bf24a1135d57e76691b98fd3e9fb87af95b624e6813681d&ipo=images)

- ios 18 及びios 18.0.1を実行しているiPhoneから「部分的な」データ検索のみを実行可能

Forbesは 、「部分抽出」は、暗号化されていないファイルとファイルサイズやフォルダー構造を含むいくつかのメタデータのみを引き出すことのみであると指摘しています。 

- ios 18.0 beta以降のバージョンはアクセス不可

- AFU状態のGoogle Pixel 9のデータのみにアクセス可能

## 最後に

結論として、2025年3月時点で、最新バージョンを実行しているBFU状態のiPhoneを解析することは不可能に近いです。

端末が不正なデータ収集の危機に直面した場合、直ちに電源を切って下さい。

## 参考文献, ソース

- AFU/BFU: [Cellebrite](https://cellebrite.com/en/what-can-be-recovered-from-bfu-data-collection/)
- 2024/04 Cellebrite Leaks: [Link](https://www.documentcloud.org/documents/24833832-cellebrite-ios-document-april-2024/?ref=404media.co)
- ↑archive [1ページ]() [2ページ]() [3ページ]() [4ページ]() [5ページ](https://archive.md/uCa3G/b3bed61db238e8fbb71fd96aa933492c2d7e83af.gif)
- 2024/07 Cellebrite Premium 7.69.5 IOS Support Matrix Leaks: [Link](https://discuss.privacyguides.net/t/updated-cellebrite-iphone-support-matrix-leak/19578/25)
- 2024/11 GrayKey Leaks: [Link](https://appleinsider.com/articles/24/11/19/leak-what-law-enforcement-can-unlock-with-the-graykey-iphone-hacking-tool) | [archive](https://archive.ph/G7MLO)
- Forbesの指摘: [Link](https://www.forbes.com/sites/thomasbrewster/2018/10/24/apple-just-killed-the-graykey-iphone-passcode-hack/) | [archive](https://archive.md/4xwRU)