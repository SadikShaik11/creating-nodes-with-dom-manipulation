const values = document.getElementById('item')
const items = document.getElementById('items')
const forms = document.getElementById('addForm')
const desc = document.getElementById('description')
forms.addEventListener('submit', dothis)

//creating a item on submit
function dothis(e) {
    var newitem = values.value;
    e.preventDefault();

    var newnode = document.createElement('li')
    newnode.className = "list-group-item"
    newnode.appendChild(document.createTextNode(newitem))
    var button = document.createElement('button')
    button.className = 'btn btn-danger btn-sm float-right delete'
    button.appendChild(document.createTextNode('X'))
    items.appendChild(newnode)
    newnode.appendChild(button)

    var des = document.createElement('textarea')

    des.className = "description"
    des.id = "description"
    des.setAttribute('type', 'textarea')
    des.appendChild(document.createTextNode(desc.value))
    newnode.appendChild(des)

    values.value = ''
    desc.value = ''

}
//removing items

items.addEventListener('click', removethis)
function removethis(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure ')) {
            var parent = e.target.parentElement;
            items.removeChild(parent)
        }
    }
}
const search = document.getElementById('filter')
search.addEventListener('keyup', searchthis)
function searchthis(e) {
    var text = e.target.value.toLowerCase()
    console.log(text)
    var items1 = items.getElementsByTagName('li')
    var descriptiontext = items.getElementsByTagName('textarea')

    //searching values with description 

    Array.from(descriptiontext).forEach((e) => {
        var itemname2 = e.firstChild.textContent
        if (itemname2.toLocaleLowerCase().indexOf(text) != -1) {
            items.style.display = "block"
        } else {
            items.style.display = "none"
        }
    })

    //searching values with keywords

    Array.from(items1).forEach((e) => {

        var itemname = e.firstChild.textContent

        if (itemname.toLocaleLowerCase().indexOf(text) != -1) {
            items.style.display = "block"
        } else {
            items.style.display = "none"
        }
    })
}
//searching
