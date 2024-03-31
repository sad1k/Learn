
let form = document.getElementsByClassName('form')[0]
let logic = (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    console.log(formData.get('login'))
    console.log(formData.get('password'))
    const div = document.createElement('div')
    document.documentElement.append(div)
    div.innerHTML = 'Вы успешно зашли'
    div.id = "alert"
    
}

form.addEventListener('submit', logic)

window.onunload = () => {
    button.removeEventListener('click', logic)
}