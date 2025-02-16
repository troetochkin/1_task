document.addEventListener('DOMContentLoaded', function () {
	let str = 'abcde'
	console.log(str[0])
	console.log(str[1])
	console.log(str[4])
	function checkPositive(a, b) {
		return a > 0 || b > 0
	}
	function checkPositive(a, b) {
		return a > 0 || b > 0
	}
	const num1 = parseInt(prompt('Введите первое число:'), 10)
	const num2 = parseInt(prompt('Введите второе число:'), 10)
	console.log(checkPositive(num1, num2))
	function checkAge(age) {
		return age >= 18 ? 'Совершеннолетний' : 'Несовершеннолетний'
	}
	const age = parseInt(prompt('Введите ваш возраст:'), 10)
	console.log(checkAge(age))
})
