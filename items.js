const values = document.getElementById('item')
const items = document.getElementById('items')
const forms = document.getElementById('addForm')
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

    //making edit button
    var edit = document.createElement('button')
    edit.id = "editing"
    edit.className = "edit"
    edit.setAttribute('style', 'align:left ')
    edit.appendChild(document.createTextNode('edit'))
    newnode.appendChild(button)
    newnode.appendChild(edit)

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

