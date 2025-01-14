const formElement = document.querySelector('.form')
const inputNameElement = document.querySelector('#name')
const inputEmailElement = document.querySelector('#email')
const inputMessageElement = document.querySelector('#message')

const patterns = {
	email: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
	username: /^[a-zA-Z\-]+$/,
}

formElement.addEventListener('submit', event => {
	event.preventDefault()

	if (validateInputs()) {
		const formData = new FormData(formElement)
		const data = Object.fromEntries(formData)

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(json => console.log(json))

		clearForm()
	}
})

function validateInputs() {
	const nameValue = inputNameElement.value.trim()
	const emailValue = inputEmailElement.value.trim()
	const messageValue = inputMessageElement.value.trim()

	if (nameValue === '') {
		setError(inputNameElement, 'Введите имя')
		return false
	} else if (!isValid(nameValue, patterns.username)) {
		setError(inputNameElement, 'Имя должно содержать только буквы')
		return false
	} else {
		setSuccess(inputNameElement)
	}

	if (emailValue === '') {
		setError(inputEmailElement, 'Введите email')
		return false
	} else if (!isValid(emailValue, patterns.email)) {
		setError(inputEmailElement, 'Некорректно введен email')
		return false
	} else {
		setSuccess(inputEmailElement)
	}

	if (messageValue === '') {
		setError(inputMessageElement, 'Введите сообщение')
		return false
	} else setSuccess(inputMessageElement)
	return true
}

function setError(element, message) {
	const inputControl = element.parentElement
	const errorDisplay = inputControl.querySelector('.form-group__errors')

	errorDisplay.innerText = message
	inputControl.classList.add('error')
}

function setSuccess(element) {
	const inputControl = element.parentElement
	const errorDisplay = inputControl.querySelector('.form-group__errors')

	errorDisplay.innerText = ''
	inputControl.classList.remove('error')
}

function isValid(str, pattern) {
	return str.match(pattern)
}

function clearForm() {
	inputEmailElement.value = ''
	inputNameElement.value = ''
	inputMessageElement.value = ''
}
