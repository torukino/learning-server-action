'use server'
// Server Actionとは
// formのsubmit時にサーバ側で実行される関数のこと
// この関数はasync functionでなければならない
//  Server ActionはServer Component、もしくは個別のファイルで定義できる

export async function submitAction(formData: FormData) {
	'use server'
	console.log('submitAction', formData)
}
