enum Colors {
	Red = 'red',
	Green = 'green',
	Blue = 'blue'
}
console.log(Colors.Red)
interface student {
	name: string
	age: number
	bool: boolean
	nullEl: null
	udf: undefined
	obj: Object
	anyType: any
	color: Colors
	result: void
	nessaray?: boolean
	array: [string, boolean, number]
	print?: () => void
}

const student1: student = {
	name: '张三',
	age: Infinity,
	bool: false,
	nullEl: null,
	udf: undefined,
	obj: true,
	anyType: null,
	color: Colors.Red,
	result: (() => console.log(123))(),
	print: () => console.log('打印'),
	array: ['', true, 23]
}
student1.print?.()
console.log(Colors.Red)
console.log(student1)
