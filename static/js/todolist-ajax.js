const wrapperEl = document.querySelector("#wrapper")
const pageStatusEl = document.querySelector("#page-status")
const itemTemplate = document.querySelector('#template-item').content
const noneTemplate = document.querySelector('#template-none').content
const itemsTemplate = document.querySelector('#template-items').content
const checkboxYesTemplate = document.querySelector('#template-item-done').content
const checkboxNoTemplate = document.querySelector('#template-item-undone').content

const deleteItem = async id => {
	// console.log("Removing " + id + "...")
	const fetchInit = {
		method: "DELETE",
		headers: {
			'X-CSRFToken': window.CSRF_TOKEN
		}
	}
	await fetch(`delete/${id}`, fetchInit)
}

const changeStatusItem = async (id, status) => {
	// console.log("Changing " + id + "...")
	const fetchInit = {
		method: "POST",
		headers: {
			'X-CSRFToken': window.CSRF_TOKEN
		}
	}
	if (status) await fetch(`done/${id}`, fetchInit)
	else await fetch(`undone/${id}`, fetchInit)
}

const loadTodolist = async () => {
	const request = await fetch('json')
	const response = await request.json()
	if (response) {

		pageStatusEl.textContent = `Ditemukan ${response.length} task.`
		itemsEl = itemsTemplate.cloneNode(true).firstElementChild

		response.forEach(item => {
			itemEl = itemTemplate.cloneNode(true).firstElementChild
			itemEl.dataset.id = item.pk
			itemEl.querySelector(".item-title").textContent = item.fields.title
			itemEl.querySelector(".item-description").textContent = item.fields.description

			itemEl.querySelector(".item-delete").addEventListener('click', async event => {
				await deleteItem(item.pk)
				await loadTodolist()
			})

			const checkboxWrapperEl = itemEl.querySelector('.item-checkbox-wrapper')
			const checkboxTemplate = item.fields.is_finished ? checkboxYesTemplate : checkboxNoTemplate
			const checkboxEl = checkboxTemplate.cloneNode(true).firstElementChild
			checkboxWrapperEl.appendChild(checkboxEl)
			
			checkboxEl.addEventListener('click', async event => {
				await changeStatusItem(item.pk, !item.fields.is_finished)
				await loadTodolist()
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

// const formEl = document.querySelector("#addForm")
// const submitEl = document.querySelector("#addModalSubmit")
// formEl.addEventListener("submit", async event => {
// 	event.preventDefault()
// 	submitEl.disabled = true
// 	const data = {
// 		nama_barang: document.querySelector("#namaBarangInput").value,
// 		harga_barang: document.querySelector("#hargaBarangInput").value,
// 		deskripsi: document.querySelector("#deskripsiInput").value
// 	}
// 	await fetch("submit", {
// 		method: "POST",
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'X-CSRFToken': window.CSRF_TOKEN
// 		},
// 		body: JSON.stringify(data)
// 	})
// 	loadTodolist()
// 	submitEl.disabled = false
// 	submitEl.textContent = "✅"
// 	setTimeout(() => {
// 		submitEl.textContent = "Tambah"
// 	}, 1000)
// })

loadTodolist()
