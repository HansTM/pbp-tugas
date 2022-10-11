const wrapperEl = document.querySelector("#wrapper")
const pageStatusEl = document.querySelector("#page-status")
const itemTemplate = document.querySelector('#template-item').content
const noneTemplate = document.querySelector('#template-none').content
const itemsTemplate = document.querySelector('#template-items').content
const checkboxYesTemplate = document.querySelector('#template-item-done').content
const checkboxNoTemplate = document.querySelector('#template-item-undone').content

const reloadTodolist = async () => {
	const request = await fetch('json')
	const response = await request.json()
	loadTodolist(response)
}

const loadTodolist = response => {
	console.log(response)
	if (response) {

		pageStatusEl.textContent = `Ditemukan ${response.length} task.`
		itemsEl = itemsTemplate.cloneNode(true).firstElementChild

		response.forEach(item => {
			itemEl = itemTemplate.cloneNode(true).firstElementChild
			itemEl.dataset.id = item.pk
			itemEl.querySelector(".item-title").textContent = item.fields.title
			itemEl.querySelector(".item-description").textContent = item.fields.description

			itemEl.querySelector(".item-delete").addEventListener('click', async event => {
				const new_response = await deleteItem(item.pk)
				await loadTodolist(await new_response.json())
			})

			const checkboxWrapperEl = itemEl.querySelector('.item-checkbox-wrapper')
			const checkboxTemplate = item.fields.is_finished ? checkboxYesTemplate : checkboxNoTemplate
			const checkboxEl = checkboxTemplate.cloneNode(true).firstElementChild
			checkboxWrapperEl.appendChild(checkboxEl)
			
			checkboxEl.addEventListener('click', async event => {
				const new_response = await changeStatusItem(item.pk, !item.fields.is_finished)
				await loadTodolist(await new_response.json())
			})

			itemsEl.appendChild(itemEl)
		})
		wrapperEl.innerHTML = ""
		wrapperEl.appendChild(itemsEl)
	} else {
		wrapperEl.innerHTML = ""
		wrapperEl.appendChild(noneTemplate.cloneNode(true))
	}
}

const deleteItem = async id => {
	// console.log("Removing " + id + "...")
	const fetchInit = {
		method: "DELETE",
		headers: {
			'X-CSRFToken': window.CSRF_TOKEN
		}
	}

	return await fetch(`delete/${id}`, fetchInit)
}

const changeStatusItem = async (id, status) => {
	// console.log("Changing " + id + "...")
	const fetchInit = {
		method: "POST",
		headers: {
			'X-CSRFToken': window.CSRF_TOKEN
		}
	}
	
	if (status) return await fetch(`done/${id}`, fetchInit)
	else return await fetch(`undone/${id}`, fetchInit)
}

const formEl = document.querySelector("#add-form")
formEl.addEventListener("submit", async event => {
	event.preventDefault()
	const formData = Object.fromEntries(new FormData(event.target))
	const request = await fetch(`add`, {
		method: "POST",
		headers: {
			'X-CSRFToken': window.CSRF_TOKEN,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData)
	})
	await loadTodolist(await request.json())
	closeModal()
	// submitEl.disabled = true
	// submitEl.disabled = false
	// submitEl.textContent = "✅"
	// setTimeout(() => {
	// 	submitEl.textContent = "Tambah"
	// }, 1000)
})

const openModal = () => {
	modalEl.classList.remove("hidden")
	setTimeout(() => {
		modalEl.classList.remove("opacity-0")
	}, 0)
}

const closeModal = () => {
	setTimeout(() => {
		modalEl.classList.add("hidden")
	}, 150)
	modalEl.classList.add("opacity-0")
}

const openModalEl = document.querySelector("#add-open-modal")
openModalEl.addEventListener("click", event => {
	openModal()
})

const modalEl = document.querySelector("#add-modal")
modalEl.addEventListener("click", event => {
	if (event.target.id !== "add-modal") return
	closeModal()
})


reloadTodolist()
