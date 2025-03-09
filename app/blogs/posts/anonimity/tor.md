---
title: "Tor / Tor Browser"
description: "Torネットワークとは"
img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.lJs905PgPamJhGJ9rv5RNQHaDt%26pid%3DApi&f=1&ipt=b93237821a424b6d33c16a35b19fa1b6bfd5e9372caf854a6a16e6325e9d01af&ipo=images"
---

## Tor(The Onion Router)とは
(著者のTorに対しての理解が浅いため、より多くの情報を求めるにはTor projectのドキュメントを見ることをおすすめします。)
!["Tor"](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gMxVBLNtsOm1r_jA-3yMuAHaFW%26pid%3DApi&f=1&ipt=85fdfb83c07f3936536bb8282e7ef2f2d517b35bba7aa033b51268454d32fb7e&ipo=images)

Torは世界中に存在する3つのランダムなサーバーを介してサーバーに接続するため、ユーザーの実際のIPアドレスを秘匿することが出来るサービスです。

Torクライアントは送信するデータを3重に暗号化し、各リレーで一つ一つ複合していきます。

- 最初のリレー(Guard): ユーザーのIPアドレスを見ることが出来ます。

- 中間リレー(Middle): ガードリレーと出口リレーが互いの情報を得られないようにしています。

- 出口リレー(Exit): データは暗号化されていません。最終的な目的地にトラフィックを送信します。

## Torは最も安全なのか？

Torは最も完全に匿名化されていると思われがちですが、そうではないかもしれません。

参照: [AttacksOnTor](https://github.com/Attacks-on-Tor/Attacks-on-Tor?tab=readme-ov-file#correlation-attacks)

Torはその秘匿性の高さから、多くの犯罪者に悪用されています。

そのため、犯人の特定をするために多くの攻撃手法が編み出されてきました。

## Tor Browser

## Tor over VPN
Tor over vpnは、`Client -> VPN -> Tor -> Server`の順番でサーバーに接続します。

ISPにTorを利用していることを隠したり、Torが突破されたさいに最後の砦として利用出来ます。

私はTor over VPNをおすすめします。

## VPN over Tor
VPN over Torは、`Client -> Tor -> VPN -> Server`の順番でサーバーに接続します。

接続先のサーバーがTor接続を拒否している場合に多く利用されます。

私はVPN over Torをおすすめしません。

これはVPNサービスに生殺与奪の権利を与えるも同然であり、VPNを非Torで購入していた場合や、ログを取っていた場合には最悪の結果をもたらします。

## Tor over VPN over Tor

Tor over VPN over Torは、`Client -> Tor -> VPN -> Tor -> Server`の順番でサーバーに接続します。
