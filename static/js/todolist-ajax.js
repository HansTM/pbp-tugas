const wrapperEl = document.querySelector("#wrapper")
const pageStatusEl = document.querySelector("#page-status")
const itemTemplate = document.querySelector('#template-item').content
const noneTemplate = document.querySelector('#template-none').content
const itemsTemplate = document.querySelector('#template-items').content
const checkboxYesTemplate = document.querySelector('#template-item-done').content
const checkboxNoTemplate = document.querySelector('#template-item-undone').content
const addModalEl = document.querySelector("#add-modal")
const addFormEl = addModalEl.querySelector("#add-form")
const addSubmitEl = addModalEl.querySelector("#add-submit")
const addCloseEl = addModalEl.querySelector("#add-close")
const addOpenModalNavEl = document.querySelector("#add-open-modal-nav")

let dateLanguageId = "id"
const dateOptions = { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }

const reloadTodolist = async () => {
	const request = await fetch('json')
	const response = await request.json()
	loadTodolist(response)
}

const loadTodolist = response => {
	// console.log(response)
	pageStatusEl.textContent = `Ditemukan ${response.length} task.`

	if (response.length) {

		response.sort((a, b) => a.pk - b.pk)

		itemsEl = itemsTemplate.cloneNode(true).firstElementChild

		response.forEach(item => {
			itemEl = itemTemplate.cloneNode(true).firstElementChild
			itemEl.dataset.id = item.pk
			itemEl.querySelector(".item-title").textContent = item.fields.title
			itemEl.querySelector(".item-description").textContent = item.fields.description
			itemEl.querySelector(".item-date").textContent = new Date(item.fields.date).toLocaleDateString(dateLanguageId, dateOptions)

			itemEl.querySelector(".item-delete").addEventListener('click', async event => {
				const newResponse = await deleteItem(item.pk)
				await loadTodolist(await newResponse.json())
			})

			const checkboxWrapperEl = itemEl.querySelector('.item-checkbox-wrapper')
			const checkboxTemplate = item.fields.is_finished ? checkboxYesTemplate : checkboxNoTemplate
			const checkboxEl = checkboxTemplate.cloneNode(true).firstElementChild
			checkboxWrapperEl.appendChild(checkboxEl)
			
			checkboxEl.addEventListener('click', async event => {
				pageStatusEl.textContent = `Memperbarui task...`
				const new_response = await changeStatusItem(item.pk, !item.fields.is_finished)
				await loadTodolist(await new_response.json())
			})

			itemsEl.appendChild(itemEl)
		})
		wrapperEl.innerHTML = ""
		wrapperEl.appendChild(itemsEl)
	} else {
		wrapperEl.innerHTML = ""
		const noneCardEl = noneTemplate.cloneNode(true).firstElementChild
		noneCardEl.querySelector("button").addEventListener("click", event => {
			openAddModal()
		})
		wrapperEl.appendChild(noneCardEl)
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

addFormEl.addEventListener("submit", async event => {
	event.preventDefault()
	pageStatusEl.textContent = `Menambah task...`
	const formData = Object.fromEntries(new FormData(event.target))
	addSubmitEl.disabled = true
	const request = await fetch('add', {
		method: "POST",
		headers: {
			'X-CSRFToken': window.CSRF_TOKEN,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData)
	})
	await loadTodolist(await request.json())
	addSubmitEl.disabled = false
	closeAddModal()
})

const openAddModal = () => {
	addSubmitEl.disabled = false
	addModalEl.classList.remove("hidden")
	setTimeout(() => {
		addModalEl.classList.remove("opacity-0")
	}, 0)
}

const closeAddModal = () => {
	setTimeout(() => {
		addModalEl.classList.add("hidden")
	}, 150)
	addModalEl.classList.add("opacity-0")
}

addOpenModalNavEl.addEventListener("click", event => {
	openAddModal()
})

addModalEl.addEventListener("click", event => {
	if (event.target.id !== "add-modal") return
	closeAddModal()
})

addCloseEl.addEventListener("click", event => {
	closeAddModal()
})

reloadTodolist()
