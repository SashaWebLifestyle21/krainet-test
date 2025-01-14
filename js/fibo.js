const inputFibo = document.querySelector('#fibo')
const resultFibo = document.querySelector('.fibo__result')

function fibonacci(n) {
	if (!(n >= 1)) return 'N должно быть >= 1'
	const fibonacciValues = [0, 1]
	for (let i = 2; i < n; i++) {
		fibonacciValues[i] = fibonacciValues[i - 1] + fibonacciValues[i - 2]
	}

	const result = fibonacciValues.slice(0, n)
	return result[result.length - 1]
}

inputFibo.addEventListener('change', event => {
	const inputValue = event.target.value
	const result = fibonacci(inputValue)
	resultFibo.innerText = `n-е число =  ${result}`
})
