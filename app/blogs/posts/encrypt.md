---
title: "BitLocker"
description: "Windows Pro標準搭載 ハードウェアレベルのデータ保護"
tags: ["bitlocker", "encrypt", "desktop"]
img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5Nkh1FV3ON1QAiyp8gSBdgHaEK%26pid%3DApi&f=1&ipt=b0d2c830da9da8c8c20be5cb1aae3493f48f943cc5d025dcbc60f65f0b59eccf&ipo=images"
---

## BitLocker

BitLockerはWindows標準搭載機能であり、TPM2.0を使用します。

非システムドライブ(BitLocker To Go)、システムドライブ両方の暗号化に対応しています。

使用にはWindows Pro Editionが必要です。

BitLockerを使用することにより、物理的なアクセス(盗難やデジタルフォレンジック)の際にファイルを安全に保護することが出来ます。

## BitLockerの使用方法

ここから準備をしていきます。

- Windows + Rを押し、`gpedit.msc`を入力し実行
- 「コンピュータの構成 / 管理用テンプレート / Windowsコンポーネント / BitLockerドライブ暗号化 / オペレーティングシステムのドライブ」を選択
- 「スタートアップ時に追加の認証を要求する」「スタートアップの拡張PINを許可する」を有効

以下はシステムドライブ(C:)の暗号化方法です。

- 1.BitLockerのコントロールパネルを開く
- 2.ドライブ全体の暗号化をし、回復KeyはUSBに保存し完全に消去して下さい。(**決してアカウントに保存しないで下さい。**)
- 3.PINは15~20桁の英大文字小文字、数字、記号を含めた予想しにくい複雑なものにしてください。

BitLockerはTPMを使用しているため32回以上PINの入力に失敗すると回復Key以外では複合出来なくなります。

そのためBruteForce攻撃が不可能です。(回復Keyを抹消している前提)
