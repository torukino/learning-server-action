import ClientForm from './_component/client-form.client'
import ServerForm from './_component/server-form.server'

import { Text, Strong } from '@/components/catalyst/text'

const RyoPlaygroundPage = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-row items-center justify-center w-full h-16">
				<Text>
					りょうちゃんの
					<Strong>Next.js version 14の</Strong>
					遊び場
				</Text>
			</div>
			<ServerForm />
			<ClientForm />
		</div>
	)
}

export default RyoPlaygroundPage
