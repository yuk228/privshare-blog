---
title: "GrapheneOS"
description: "匿名性やセキュリティに特化したPixel向けOS"
tags: ["mobile", "grapheneos"]
img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FjoTWtvuPbh7cYSvkUSndwAAAA%26pid%3DApi&f=1&ipt=071191daee99b249bb5437fac5b97bf3271678fd29acf93dd89d4766c4d12231&ipo=images"
---
注意: 著者はPixel端末を所持していません。設定内容や進め方が実際には異なる可能性があります。詳しくは公式ドキュメントを見てください。
2024年7月時点でのLeakを元に作成しています。

## [GrapheneOS](https://grapheneos.org/)の設定

まずGrapheneOSの使用を考えている場合、必ずGoogle Pixelの最新世代を購入して下さい。

初期設定が済んだら以下に従って下さい。

- 設定→セキュリティ→詳細なセキュリティの設定→高度なメモリ保護をオン
- アプリケーションをインストールする際は、"FDroid"や"AurolaStore"を使用
- Googleの機能を使用したい場合は、GrapheneOS純正の"Sandboxed Google Play"を使用せず、"MicroG"を使用
- 日常用途で使用する場面とプライベート用途で使用する場面を分けるため、プロファイル機能を使用

## iosとの比較

Apple社製品との比較ですが、日常的に使用する面では圧倒的にApple社の製品が勝ります。
(Graphene OSはGoogle Play StoreのSafety Netのランクが下がるため、一部のアプリが使えなくなる可能性がある)

その反面、プライバシーや匿名性ではGraphene OSが有利となります。

!["Leaks"](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fforum-uploads.privacyguidesusercontent.com%2Foriginal%2F2X%2Fa%2Fa73f2fe075e79fa3de608b66156869a3dec22980.png&f=1&nofb=1&ipt=073e3c1dfafc33ae4396c1e4b92c9965b62a737f32ad26a36b156f927f9e93b1)

上の画像は2024年7月にLeakされたCellebrite Premium 7.69.1 Android Support Matrixです。

- Graphene OSを搭載した端末は、AFU / BFU問わず、アンロックされていない限りファイル抽出 / BruteForceが不可能です。

- 純正のPixelやiPhoneはAFU時には完全なファイル抽出をされ、BFU抽出が可能です。

デバイスのセキュリティを考えればGoogle PixelにGraphene OSを入れるのが最善でしょう。

(AFU / BFUについての説明は[こちらをご覧ください。](https://privshare-beta.vercel.app/blogs/mobile/ios_encrypt))