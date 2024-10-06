interface Police {
	catchTheif: () => void
}
interface Doctor {
	health: () => void
}
const tom: Police = {
	catchTheif: () => {
		console.log('我可以抓贼')
	}
}
const jerry: Doctor = {
	health: () => {
		console.log('我可以治疗病人')
	}
}
function whatCanYouDo(person1: Police, person2: Doctor): Police & Doctor {
	return Object.assign(person1, person2)
}
let partner = whatCanYouDo(tom, jerry)

partner.catchTheif() // 我可以抓贼
partner.health() // 我可以治疗病人
