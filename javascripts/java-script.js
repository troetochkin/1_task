document.addEventListener('DOMContentLoaded', function () {
	// 1/3 задач 1-ой домашки

	let str = 'abcde'
	console.log(str[0])
	console.log(str[1])
	console.log(str[4])

	// 2/3 задач 1-ой домашки

	function checkPositive(a, b) {
		return a > 0 || b > 0
	}
	function checkPositive(a, b) {
		return a > 0 || b > 0
	}
	const num1 = parseInt(prompt('Введите первое число:'), 10)
	const num2 = parseInt(prompt('Введите второе число:'), 10)
	console.log(checkPositive(num1, num2))

	// 3/3 задач 1-ой домашки

	function checkAge(age) {
		return age_0 >= 18 ? 'Совершеннолетний' : 'Несовершеннолетний'
	}
	const age_0 = parseInt(prompt('Введите ваш возраст:'), 10)
	console.log(checkAge(age_0))

	// 1/7 задач 2-ой домашки

	function checkRetirementAge(age) {
		return age_1 < 65
			? 'Вам ещё рано на пенсию'
			: 'Поздравляем с пенсионным возрастом!'
	}
	const age_1 = parseInt(prompt('Введите ваш возраст:'), 10)
	console.log(checkRetirementAge(age_1))

	// 2/7 задач 2-ой домашки

	function compareNumbers(c, d) {
		if (c > d) {
			return 'Первое число больше'
		} else if (c < d) {
			return 'Второе число больше'
		} else {
			return 'Числа равны'
		}
	}
	const num_num1 = parseInt(prompt('Введите первое число:'), 10)
	const num_num2 = parseInt(prompt('Введите второе число:'), 10)
	console.log(compareNumbers(num1, num2))

	// 3/7 задач 2-ой домашки

	function checkEvenOdd(number) {
		return number % 2 === 0 ? 'Это чётное число' : 'Это нечётное число'
	}
	const num = parseInt(prompt('Введите число:'), 10)
	console.log(checkEvenOdd(num))

	// 4-ая домашка

	document.body.style.fontSize = '24px'
	document.body.style.fontFamily = 'Arial, sans-serif'
	document.body.style.textAlign = 'center'
	document.body.style.marginTop = '20%'

	const coordinates = document.createElement('div')
	document.body.appendChild(coordinates)

	document.addEventListener('mousemove', event => {
		coordinates.textContent = `Координаты: X = ${event.clientX}, Y = ${event.clientY}`
	})

	// 1/3 задач 5-ой домашки

	let clickCount = 0
	const clickButton = document.getElementById('clickBtn')
	const clickDisplay = document.getElementById('clickCount')
	const clickMessage = document.getElementById('clickMessage')

	clickButton.addEventListener('click', function () {
		clickCount++
		clickDisplay.textContent = `Кликов: ${clickCount}`

		if (clickCount >= 15) {
			clickButton.disabled = true
			clickMessage.textContent = 'Вы достигли максимального количества кликов!'
		}
	})

	// 2/3 задач 5-ой домашки

	let countdownTime = 10
	let countdownInterval

	function startCountdown() {
		countdownInterval = setInterval(() => {
			if (countdownTime > 0) {
				countdownTime--
				document.getElementById('countdownTimer').textContent = countdownTime
			} else {
				clearInterval(countdownInterval)
				document.getElementById('countdownTimer').textContent = 'Время вышло!'
			}
		}, 1000)
	}

	document
		.getElementById('resetCountdown')
		.addEventListener('click', function () {
			clearInterval(countdownInterval)
			countdownTime = 10
			document.getElementById('countdownTimer').textContent = countdownTime
			startCountdown()
		})

	startCountdown()

	// 3/3 задач 5-ой домашки

	let timer = 0
	let timerInterval = null

	document.getElementById('startBtn').addEventListener('click', function () {
		if (!timerInterval) {
			timerInterval = setInterval(() => {
				timer++
				document.getElementById('timerDisplay').textContent = timer
			}, 1000)
		}
	})

	document.getElementById('stopBtn').addEventListener('click', function () {
		clearInterval(timerInterval)
		timerInterval = null
	})

	document.getElementById('resetBtn').addEventListener('click', function () {
		clearInterval(timerInterval)
		timerInterval = null
		timer = 0
		document.getElementById('timerDisplay').textContent = timer
	})
})
