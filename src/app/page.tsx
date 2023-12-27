'use server'

import Link from 'next/link'

export default async function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Link className="secondaryButton" href="https://www.zenryoku-kun.com/new-post/nextjs-server-actions">
				Next.js 14のServer Actionsを試してみたぞ！
			</Link>
			<div>
				<p>Server Actionとは、</p>
				<p>formのsubmit時にサーバ側で実行される関数のこと</p>
			</div>
			<div>
				<p>Server Actionは非同期関数である必要がある</p>
				<p>Server ActionはServer Component、もしくは個別のファイルで定義できる</p>
			</div>

			<div>
				<p>Server Actionを個別のファイルで定義するとき、&quot;use server&quot;を冒頭につけること</p>
			</div>
		</main>
	)
}
