interface Cat {
	name: string
}
interface Mouse {
	name: string
}
const tom: Cat = {
	name: 'Tom'
}
const jerry: Mouse = {
	name: 'Jerry'
}
function tellStory(cat: Cat, mouse: Mouse): void {
	console.log(`${cat.name} catch ${mouse.name}`)
}
let tellStory2 = (cat: Cat, mouse: Mouse): void => {
	console.log(`${cat.name} catch ${mouse.name}`)
}
tellStory(tom, jerry) // 输出Tom catch Jerry
tellStory2(tom, jerry) // 输出Tom catch Jerry
