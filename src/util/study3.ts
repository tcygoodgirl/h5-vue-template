interface Police {
	name: string
	run: () => void
}
interface Doctor {
	name: string
	run: () => void
}
const tom: Police = {
	name: 'tom',
	run: () => {
		console.log('我可以跑起来！')
	}
}
const jerry: Doctor = {
	name: 'jerry',
	run: () => {
		console.log('我也可以跑起来！')
	}
}
function whatCanYouDo(person: Police | Doctor): void {
	console.log(`${person.name}：`)
	person.run()
}
whatCanYouDo(tom)
whatCanYouDo(jerry)
