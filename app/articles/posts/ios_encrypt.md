---
title: 'iPhoneのデータ保護'
description: 'iPhoneをハードウェアレベルで安全に保護する方法をレクチャーします'
tags: ['mobile', 'ios']
img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pRy13fEEdg0SpkDlPUxBogF1Cn%26pid%3DApi&f=1&ipt=33a344e4a1216d35a0fadd35c24f106b72adbd6ea2be51752581a6b23b75dbb3&ipo=images'
---

## 前提知識

### AFU/BFU

- AFU: After First Lock (端末起動後一回でも解除済み)
- BFU: Before First Lock (端末起動後一回も解除していない)

### FFS (Full File System)

「完全なファイル抽出」という意味合いで使用されます。

### BF (Brute Force)

Brute Force (総当たり攻撃) のことです。

### パスワード

できるだけ長く、ランダムな英大文字小文字・数字・記号を含んだものが望ましいです。

## はじめに

iPhoneやiPadはパスワードを設定するだけで、特に手順を踏まなくても自動的に暗号化が施されます。

## ブルートフォース対策オプションの使用

- 設定 → FaceIDとパスコード → データ消去

このオプションは10回パスコードの入力を失敗すると端末が初期化されます。
これを使用することによりブルートフォース攻撃が完全に不可能になります。

※iPhone, iPad, Macbookの初期化は**暗号化消去のためデータを復元することは不可能**です。

## iCloudバックアップのオフ

第三者からの不正アクセスを防ぐためにも基本的にiCloudバックアップはオフにすることをおすすめします。

どうしても使用したい場合は、iCloudのパスワードを強力にし、高度なデータ保護を使用してください。

### [高度なデータ保護](https://support.apple.com/en-us/108756)

- 設定 → 自分のアイコン → iCloud → 高度なデータ保護

このオプションを使用することにより、AppleはあなたのiCloudの複合鍵を所持せず、暗号化を解除できるのはあなただけになります。

生成されたリカバリーキーは暗号化されたUSBに保管してください。

## Cellebrite Premium ES

!["iPhones Support Matrix Leaks"](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fforum-uploads.privacyguidesusercontent.com%2Foptimized%2F2X%2Fa%2Fa0d7405ade7877e6a51ffec1ec8239332f61cacc_2_1024x576.png&f=1&nofb=1&ipt=d53e5b584afa7da14bd5235b9362692641a0a04f2db690dd779fce5ab71432b1&ipo=images)

CellebriteにはUFEDというエディション(地方都道府県警使用)もありますが、警視庁が使用しているPremium ESの方が性能が高いためそれを基準として話します。

~~2024年4月時点で、iPhone XRから最新モデルのiPhoneは、iOS 17.4 以降を実行している場合、まだロックを解除できません。
2024年7月時点で、iOS 17.5.1までのバージョンを実行している端末はロック解除もしくはデータ抽出される可能性があります。~~

Support MatrixのLeak自体、数が少ないため断言できません。

AFUの場合、端末はFFS抽出されると思っていたほうが良いです。
BFUの場合、端末はBFU抽出されるかデータを抽出できません。

端末を最も安全に保つには、端末をBFU状態にすることが重要です。

## GrayKey

!["GrayKeyLeaks"](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W9PnuXYBBdOb_EGpa9rYVAHaEt%26pid%3DApi&f=1&ipt=3ea9075842167d7b1bf24a1135d57e76691b98fd3e9fb87af95b624e6813681d&ipo=images)

- iOS 18 及びiOS 18.0.1を実行しているiPhoneから「部分的な」データ検索のみを実行可能

「部分抽出」は、暗号化されていないファイルとファイルサイズやフォルダー構造を含むいくつかのメタデータのみを引き出すことのみであるとForbesは指摘しています。

- iOS 18.0 beta以降のバージョンはアクセス不可

- AFU状態のGoogle Pixel 9のデータのみにアクセス可能

## 参考文献・ソース

- AFU/BFU: [Cellebrite](https://cellebrite.com/en/what-can-be-recovered-from-bfu-data-collection/)
- 2024/04 Cellebrite Leaks: [Link](https://www.documentcloud.org/documents/24833832-cellebrite-ios-document-april-2024/?ref=404media.co)
- ↑archive [1ページ]() [2ページ]() [3ページ]() [4ページ]() [5ページ](https://archive.md/uCa3G/b3bed61db238e8fbb71fd96aa933492c2d7e83af.gif)
- 2024/07 Cellebrite Premium 7.69.5 iOS Support Matrix Leaks: [Link](https://discuss.privacyguides.net/t/updated-cellebrite-iphone-support-matrix-leak/19578/25)
- 2024/11 GrayKey Leaks: [Link](https://appleinsider.com/articles/24/11/19/leak-what-law-enforcement-can-unlock-with-the-graykey-iphone-hacking-tool) | [archive](https://archive.ph/G7MLO)
- Forbesの指摘: [Link](https://www.forbes.com/sites/thomasbrewster/2018/10/24/apple-just-killed-the-graykey-iphone-passcode-hack/) | [archive](https://archive.md/4xwRU)
